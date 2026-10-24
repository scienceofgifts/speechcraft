import { DetailedWordLesson } from '../types/speech';
import { normalizeDetailedWordLesson } from './apiService';
import { VOCABULARY_CATALOGUE } from '../data/vocabularyCatalogue';

const DB_NAME = 'speechcraft_lessons_cache_v1';
const STORE_NAME = 'generated_lessons';
const DB_VERSION = 1;
const LOCALSTORAGE_KEY = 'speechcraft_generated_lessons_fallback_v1';

class DBService {
  private dbPromise: Promise<IDBDatabase> | null = null;

  private getDB(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !window.indexedDB) {
        reject(new Error('IndexedDB not supported in this environment'));
        return;
      }

      const request = window.indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'id' });
        }
      };

      request.onsuccess = () => {
        resolve(request.result);
      };

      request.onerror = () => {
        reject(request.error || new Error('Failed to open lessons IndexedDB'));
      };
    });

    return this.dbPromise;
  }

  async saveVocabularyLesson(lesson: DetailedWordLesson): Promise<void> {
    console.log(`[dbService] saveVocabularyLesson START for id: ${lesson?.id} (word: ${lesson?.word})`);
    if (!lesson || !lesson.id) {
      console.warn('[dbService] saveVocabularyLesson ABORTED: lesson or lesson.id is missing', lesson);
      return;
    }

    const normalized = normalizeDetailedWordLesson(lesson);

    // 1. Commit to IndexedDB and await transaction completion
    try {
      console.log(`[dbService] Writing to IndexedDB for id: ${normalized.id}...`);
      const db = await this.getDB();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const req = store.put(normalized);

        req.onsuccess = () => {};
        req.onerror = () => {
          console.error('[dbService] IndexedDB put request error:', req.error);
          reject(req.error);
        };

        tx.oncomplete = () => {
          console.log(`[dbService] IndexedDB transaction COMPLETE for id: ${normalized.id}`);
          resolve();
        };
        tx.onerror = () => {
          console.error('[dbService] IndexedDB transaction error:', tx.error);
          reject(tx.error);
        };
        tx.onabort = () => {
          console.warn('[dbService] IndexedDB transaction ABORTED');
          reject(new Error('Transaction aborted'));
        };
      });
    } catch (err) {
      console.error(`[dbService] IndexedDB write FAILED for id: ${normalized.id}:`, err);
    }

    // 2. Redundancy write to localStorage
    try {
      console.log(`[dbService] Writing to localStorage for id: ${normalized.id}...`);
      const raw = localStorage.getItem(LOCALSTORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : {};
      parsed[normalized.id] = normalized;
      if (normalized.word) {
        parsed[`word-${normalized.word.toLowerCase()}`] = normalized;
      }
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(parsed));
      console.log(`[dbService] localStorage write SUCCESS for id: ${normalized.id}`);
    } catch (e) {
      console.error(`[dbService] localStorage write FAILED for id: ${normalized.id}:`, e);
    }
    console.log(`[dbService] saveVocabularyLesson FINISHED for id: ${normalized.id}`);
  }

  async getVocabularyLesson(id: string): Promise<DetailedWordLesson | null> {
    console.log(`[dbService] getVocabularyLesson START for id: ${id}`);
    if (!id || typeof id !== 'string') {
      console.warn('[dbService] getVocabularyLesson ABORTED: invalid id', id);
      return null;
    }

    // 1. Check IndexedDB directly by key
    try {
      console.log(`[dbService] Querying IndexedDB for key: ${id}...`);
      const db = await this.getDB();
      const direct = await new Promise<DetailedWordLesson | null>((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.get(id);

        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => {
          console.error('[dbService] IndexedDB get request error:', req.error);
          resolve(null);
        };
      });

      if (direct && direct.id) {
        console.log(`[dbService] FOUND in IndexedDB (direct match) for id: ${id}`);
        return normalizeDetailedWordLesson(direct);
      }

      // Secondary match in IndexedDB: scan all stored lessons
      console.log('[dbService] No direct match. Scanning all IndexedDB lessons for word match...');
      const allLessons = await new Promise<DetailedWordLesson[]>((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();

        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      });

      const cleanQuery = id.toLowerCase().replace(/^(lesson|cat)-/, '');
      const matched = allLessons.find((l) => {
        if (!l) return false;
        if (l.id === id) return true;
        const lWord = (l.word || '').toLowerCase();
        return lWord === cleanQuery || lWord === id.toLowerCase();
      });

      if (matched) {
        console.log(`[dbService] FOUND in IndexedDB (secondary match: ${matched.id}) for query: ${id}`);
        // Persist alias under current requested id to make future lookups O(1)
        this.saveVocabularyLesson({ ...matched, id }).catch(() => {});
        return normalizeDetailedWordLesson(matched);
      }
    } catch (err) {
      console.warn(`[dbService] IndexedDB lookup error for id ${id}:`, err);
    }

    // 2. Fallback to localStorage
    try {
      console.log(`[dbService] Querying localStorage for key: ${id}...`);
      const raw = localStorage.getItem(LOCALSTORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed[id]) {
          console.log(`[dbService] FOUND in localStorage (direct match) for id: ${id}`);
          return normalizeDetailedWordLesson(parsed[id]);
        }
        const cleanQuery = id.toLowerCase().replace(/^(lesson|cat)-/, '');
        for (const [k, v] of Object.entries(parsed)) {
          const lesson = v as any;
          if (lesson && (lesson.id === id || (lesson.word && lesson.word.toLowerCase() === cleanQuery))) {
            console.log(`[dbService] FOUND in localStorage (scan match: ${k}) for query: ${id}`);
            return normalizeDetailedWordLesson(lesson);
          }
        }
      }
    } catch (e) {
      console.warn(`[dbService] localStorage lookup error for id ${id}:`, e);
    }

    console.log(`[dbService] NOT FOUND in any cache for id: ${id}`);
    return null;
  }

  async getAllVocabularyLessons(): Promise<Record<string, DetailedWordLesson>> {
    console.log('[dbService] getAllVocabularyLessons called');
    const result: Record<string, DetailedWordLesson> = {};

    // 1. Read from localStorage fallback
    try {
      const raw = localStorage.getItem(LOCALSTORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        for (const [k, v] of Object.entries(parsed)) {
          if (v && (v as any).id) {
            result[(v as any).id] = normalizeDetailedWordLesson(v);
          }
        }
      }
    } catch {
      // Ignored
    }

    // 2. Read from IndexedDB
    try {
      const db = await this.getDB();
      const idbLessons = await new Promise<DetailedWordLesson[]>((resolve) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();

        req.onsuccess = () => resolve(req.result || []);
        req.onerror = () => resolve([]);
      });

      idbLessons.forEach((lesson) => {
        if (lesson && lesson.id) {
          const norm = normalizeDetailedWordLesson(lesson);
          result[norm.id] = norm;

          // Also map by catalogue ID if matching word is in catalogue
          const matchedItem = VOCABULARY_CATALOGUE.find(
            (c) => c.word.toLowerCase() === (norm.word || '').toLowerCase()
          );
          if (matchedItem) {
            result[matchedItem.id] = norm;
          }
        }
      });
    } catch (e) {
      console.warn('[dbService] getAllVocabularyLessons error reading IndexedDB:', e);
    }

    console.log('[dbService] getAllVocabularyLessons completed. Total lessons in cache:', Object.keys(result).length);
    return result;
  }
}

export const dbService = new DBService();

export async function saveVocabularyLesson(lesson: DetailedWordLesson): Promise<void> {
  return dbService.saveVocabularyLesson(lesson);
}

export async function getVocabularyLesson(id: string): Promise<DetailedWordLesson | null> {
  return dbService.getVocabularyLesson(id);
}

export async function getAllVocabularyLessons(): Promise<Record<string, DetailedWordLesson>> {
  return dbService.getAllVocabularyLessons();
}
