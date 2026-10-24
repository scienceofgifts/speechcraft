import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Volume2,
  Star,
  BookOpen,
  Sparkles,
  GitBranch,
  ArrowRight,
  HelpCircle,
  Tag,
  CheckCircle2,
} from 'lucide-react';
import { VocabularyCatalogueItem, DetailedWordLesson } from '../types/speech';
import { WORD_ROOTS } from '../data/vocabBuilderData';
import { referenceSpeaker } from '../services/ttsService';
import { generateVocabLesson } from '../services/apiService';
import { dbService } from '../services/dbService';
import {
  toggleStarWord,
  updateWordMastery,
  markWordExplored,
} from '../services/vocabBuilderStorage';

interface CatalogueWordModalProps {
  item?: VocabularyCatalogueItem | null;
  word?: VocabularyCatalogueItem | null;
  isOpen: boolean;
  onClose: () => void;
  isStarred?: boolean;
  isMastered?: boolean;
  isLearning?: boolean;
  onStatusChange?: () => void;
  onSelectRoot?: (rootId: string) => void;
  onLessonGenerated?: (lesson: DetailedWordLesson) => void;
}

export const CatalogueWordModal: React.FC<CatalogueWordModalProps> = ({
  item,
  word,
  isOpen,
  onClose,
  isStarred = false,
  isMastered = false,
  isLearning = false,
  onStatusChange,
  onSelectRoot,
  onLessonGenerated,
}) => {
  const targetWord = item || word || null;
  const wordId = targetWord?.id;

  const [playingAudio, setPlayingAudio] = React.useState<boolean>(false);
  const [starred, setStarred] = React.useState<boolean>(isStarred);
  const [isGenerating, setIsGenerating] = React.useState<boolean>(false);
  const [generateError, setGenerateError] = React.useState<string | null>(null);

  // Active lesson state from database - do NOT clear to null when modal closes
  const [activeLesson, setActiveLesson] = React.useState<DetailedWordLesson | null>(null);

  // Step 1: Retrieval Lifecycle (The Read)
  useEffect(() => {
    if (!isOpen || !wordId) return;

    let isSubscribed = true;
    setStarred(isStarred);
    setIsGenerating(false);
    setGenerateError(null);
    markWordExplored(wordId);

    const fetchLesson = async () => {
      console.log('[CatalogueWordModal] Calling dbService.getVocabularyLesson with word.id:', wordId);
      const lesson = await dbService.getVocabularyLesson(wordId);
      if (isSubscribed && lesson) {
        console.log('[CatalogueWordModal] Setting activeLesson state from database:', lesson.id);
        setActiveLesson(lesson);
        if (onLessonGenerated) {
          onLessonGenerated(lesson);
        }
      }
    };

    fetchLesson();

    // Do NOT overwrite or clear activeLesson state with null on unmount/close
    return () => {
      isSubscribed = false;
    };
  }, [wordId, isOpen, isStarred]);

  // Step 2: Save Lifecycle (The Write)
  const handleGenerateLesson = async () => {
    if (!targetWord || isGenerating) return;
    setIsGenerating(true);
    setGenerateError(null);

    try {
      console.log('[CatalogueWordModal] Calling generateVocabLesson for word.id:', targetWord.id);
      const generated = await generateVocabLesson(targetWord);

      // Ensure the id being saved exactly matches the word.id being used to retrieve it in Step 1
      const newLesson: DetailedWordLesson = {
        ...generated,
        id: targetWord.id,
      };

      console.log('[CatalogueWordModal] Awaiting dbService.saveVocabularyLesson before updating state:', newLesson.id);
      await dbService.saveVocabularyLesson(newLesson);
      console.log('[CatalogueWordModal] Database save finished. Updating activeLesson state.');

      // Update state AFTER database write is complete
      setActiveLesson(newLesson);
      if (onLessonGenerated) {
        onLessonGenerated(newLesson);
      }
    } catch (err: any) {
      console.error('[CatalogueWordModal] Lesson generation or persistence failed:', err);
      setGenerateError(err.message || 'Failed to generate vocabulary lesson. Please check your connection and retry.');
    } finally {
      setIsGenerating(false);
    }
  };

  // Lock background scrolling while modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !targetWord) return null;

  const linkedRoot = targetWord.rootId ? WORD_ROOTS.find((r) => r.id === targetWord.rootId) : null;

  const handlePlayAudio = () => {
    if (playingAudio) {
      referenceSpeaker.stop();
      setPlayingAudio(false);
      return;
    }
    setPlayingAudio(true);
    referenceSpeaker.play(
      targetWord.word,
      1.0,
      () => setPlayingAudio(true),
      () => setPlayingAudio(false)
    );
  };

  const handleToggleStar = () => {
    const newState = toggleStarWord(targetWord.id);
    setStarred(newState);
    if (onStatusChange) onStatusChange();
  };

  const handleMasteryToggle = (status: 'learning' | 'mastered') => {
    updateWordMastery(targetWord.id, status);
    if (onStatusChange) onStatusChange();
  };

  const difficultyColors = {
    Foundational: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    Intermediate: 'bg-sky-500/20 text-sky-300 border-sky-500/30',
    Advanced: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    Mastery: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-hidden animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl relative text-slate-100 flex flex-col overflow-hidden max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Card */}
        <div className="p-6 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 shrink-0 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${difficultyColors[targetWord.difficulty]}`}>
                  {targetWord.difficulty}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                  {targetWord.partOfSpeech}
                </span>
                {activeLesson && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/40 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-teal-400" /> Saved in DB
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 pt-1">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-serif tracking-tight">
                  {targetWord.word}
                </h2>
                <button
                  type="button"
                  onClick={handlePlayAudio}
                  className={`p-2 rounded-xl transition-colors shadow-sm ${
                    playingAudio
                      ? 'bg-teal-500 text-slate-950 animate-pulse'
                      : 'bg-teal-500/20 text-teal-300 hover:bg-teal-500/30'
                  }`}
                  title={playingAudio ? 'Stop audio' : 'Listen to pronunciation'}
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleToggleStar}
                  className={`p-2 rounded-xl border transition-colors ${
                    starred
                      ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                      : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-amber-300'
                  }`}
                  title={starred ? 'Starred word' : 'Star word for review'}
                >
                  <Star className={`w-5 h-5 ${starred ? 'fill-amber-400 text-amber-400' : ''}`} />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2 shrink-0">
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-slate-100 hover:bg-slate-700 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-xl border border-slate-800">
                <button
                  type="button"
                  onClick={() => handleMasteryToggle('learning')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isLearning && !isMastered
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Learning
                </button>
                <button
                  type="button"
                  onClick={() => handleMasteryToggle('mastered')}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isMastered
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Mastered
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-slate-200 flex-1">
          {/* Definition Box */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Core Definition
            </span>
            <p className="text-sm md:text-base text-slate-100 font-medium leading-relaxed font-serif">
              {targetWord.definition}
            </p>
          </div>

          {/* Topic Tags */}
          {targetWord.topicTags && targetWord.topicTags.length > 0 && (
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-sky-400" /> Topics & Usage Domains
              </span>
              <div className="flex flex-wrap gap-2 pt-1">
                {targetWord.topicTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-medium text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Linked Root Anchor */}
          {linkedRoot && (
            <div className="p-4 rounded-2xl bg-teal-950/20 border border-teal-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 flex items-center gap-1">
                  <GitBranch className="w-3.5 h-3.5" /> Classical Root Connection
                </span>
                <h4 className="text-sm font-bold text-slate-100 mt-1">
                  Root: <span className="font-mono text-teal-300">{linkedRoot.root}</span> ({linkedRoot.origin})
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  Core Meaning: "{linkedRoot.meaning}"
                </p>
              </div>

              {onSelectRoot && (
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSelectRoot(linkedRoot.id);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-teal-500/20 hover:bg-teal-500/30 text-teal-300 font-semibold text-xs flex items-center gap-1.5 shrink-0 transition-colors border border-teal-500/30"
                >
                  <span>Explore Root</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          )}

          {/* Action Callout for On-Demand Lessons or Saved Lessons */}
          {activeLesson ? (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-950 to-teal-950/30 border border-teal-500/40 space-y-3 text-center shadow-lg">
              <div className="flex items-center justify-center gap-2 text-teal-300 font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
                <span>Complete Lesson Persisted in Database</span>
              </div>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                A full 7-tab lesson for <strong className="text-teal-200">"{targetWord.word}"</strong> is saved in your local database.
              </p>

              <div className="pt-1 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onLessonGenerated) onLessonGenerated(activeLesson);
                  }}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-teal-500 text-slate-950 hover:bg-teal-400 cursor-pointer shadow-md flex items-center gap-2 transition-all"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Open Full 7-Tab Lesson</span>
                </button>
                <button
                  type="button"
                  onClick={handleGenerateLesson}
                  disabled={isGenerating}
                  className="px-4 py-2.5 rounded-xl font-semibold text-xs bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-pointer transition-all"
                >
                  {isGenerating ? 'Regenerating...' : 'Regenerate'}
                </button>
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/30 space-y-3 text-center shadow-lg">
              <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span>Generate Multi-Tab AI Lesson</span>
              </div>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Create an interactive, multi-tab lesson with IPA stress breakdown, verified etymology, collocations, near-synonym distinctions, natural examples, and a self-check quiz.
              </p>

              {generateError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs text-left font-medium space-y-1">
                  <p className="font-bold">Lesson Generation Notice:</p>
                  <p>{generateError}</p>
                </div>
              )}

              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleGenerateLesson}
                  disabled={isGenerating}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs inline-flex items-center gap-2 transition-all shadow-md ${
                    isGenerating
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 cursor-wait'
                      : generateError
                      ? 'bg-amber-500 text-slate-950 hover:bg-amber-400 font-extrabold cursor-pointer'
                      : 'bg-gradient-to-r from-amber-500 to-teal-500 text-slate-950 hover:from-amber-400 hover:to-teal-400 font-extrabold cursor-pointer'
                  }`}
                >
                  <Sparkles className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                  <span>
                    {isGenerating
                      ? 'Generating Full Lesson via Gemini AI...'
                      : generateError
                      ? 'Retry Lesson Generation'
                      : 'Generate Full Lesson'}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
