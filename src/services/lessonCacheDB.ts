import { DetailedWordLesson } from '../types/speech';
import { dbService } from './dbService';

export const lessonCacheDB = {
  get: (id: string) => dbService.getVocabularyLesson(id),
  getAll: () => dbService.getAllVocabularyLessons(),
  set: (lesson: DetailedWordLesson) => dbService.saveVocabularyLesson(lesson),
};

export { dbService, saveVocabularyLesson, getVocabularyLesson, getAllVocabularyLessons } from './dbService';
