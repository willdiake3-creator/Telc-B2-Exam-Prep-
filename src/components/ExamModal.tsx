import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, CheckCircle2, XCircle, 
  Clock, Award, RotateCcw, AlertTriangle, BookOpen, FileText, Check 
} from 'lucide-react';
import { User } from 'firebase/auth';
import { EXAM_SECTIONS } from '../data/examData';
import { QuestionItem, ExamSection } from '../types';
import { saveExamAttempt } from '../firebase';

interface ExamModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  initialSectionId?: string | null;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
  onOpenAuth: () => void;
}

export const ExamModal: React.FC<ExamModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  initialSectionId,
  onToast,
  onOpenAuth
}) => {
  // State
  const [selectedSectionId, setSelectedSectionId] = useState<string>(initialSectionId || 'full');
  const [questions, setQuestions] = useState<(QuestionItem & { sectionTitle: string; contextType?: string; contextData?: any })[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [showContextDrawer, setShowContextDrawer] = useState(true);

  // Initialize Questions based on selectedSectionId
  useEffect(() => {
    if (!isOpen) return;

    let targetSections: ExamSection[] = [];
    if (selectedSectionId === 'full') {
      targetSections = EXAM_SECTIONS;
    } else {
      const found = EXAM_SECTIONS.find(s => s.id === selectedSectionId);
      if (found) targetSections = [found];
      else targetSections = EXAM_SECTIONS;
    }

    const flat: (QuestionItem & { sectionTitle: string; contextType?: string; contextData?: any })[] = [];
    targetSections.forEach(sec => {
      sec.items.forEach(it => {
        flat.push({
          ...it,
          sectionTitle: sec.title,
          contextType: sec.contextType,
          contextData: sec.contextData
        });
      });
    });

    setQuestions(flat);
    setCurrentIndex(0);
    setUserAnswers({});
    setSubmitted(false);
    setSecondsElapsed(0);
    setTimerActive(true);
  }, [isOpen, selectedSectionId]);

  // Timer Effect
  useEffect(() => {
    let interval: any = null;
    if (timerActive && !submitted) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, submitted]);

  if (!isOpen) return null;

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const progressPct = ((currentIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (optionMarker: string) => {
    if (submitted) return;
    setUserAnswers(prev => ({
      ...prev,
      [currentQ.n]: optionMarker
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (userAnswers[q.n] === q.correct) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const handleSubmitExam = async () => {
    if (!currentUser) {
      onToast('Please sign in to submit your exam score', 'error');
      onOpenAuth();
      return;
    }

    setSubmitted(true);
    setTimerActive(false);

    const score = calculateScore();
    const pct = Math.round((score / totalQuestions) * 100);
    const passed = pct >= 60;

    onToast(
      `Test Completed! ${score}/${totalQuestions} correct (${pct}%) — ${passed ? 'PASSED' : 'RETRY NEEDED'}`,
      passed ? 'success' : 'error'
    );

    try {
      const secTitle = selectedSectionId === 'full' 
        ? 'Full TELC B2 Practice Test' 
        : EXAM_SECTIONS.find(s => s.id === selectedSectionId)?.title || 'Practice Section';

      await saveExamAttempt(currentUser, {
        sectionId: selectedSectionId,
        sectionTitle: secTitle,
        score,
        total: totalQuestions,
        percentage: pct,
        passed,
        durationSeconds: secondsElapsed
      });
      onToast('Attempt recorded in your transcript.', 'success');
    } catch (err: any) {
      onToast(`Saved score locally (${err.message || 'Error writing to database'})`, 'info');
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const finalScore = calculateScore();
  const finalPercentage = Math.round((finalScore / totalQuestions) * 100);
  const isPassed = finalPercentage >= 60;

  return (
    <div className="fixed inset-0 z-[200] bg-[#0A0C0E] overflow-y-auto flex flex-col">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-50 h-[64px] bg-[#101317]/90 backdrop-blur-md border-b border-[rgba(237,231,220,0.13)] px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="p-2 text-[#9EA5A8] hover:text-[#EDE7DC] hover:bg-[#0A0C0E] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            <div className="text-[10px] uppercase tracking-widest text-[#E8913C] font-semibold">
              telc Deutsch B2 // Übungstest 1
            </div>
            <h2 className="text-sm font-display font-bold uppercase text-[#EDE7DC] truncate max-w-xs sm:max-w-md">
              {currentQ.sectionTitle}
            </h2>
          </div>
        </div>

        {/* Section Selector Dropdown & Timer */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] text-xs font-mono text-[#EDE7DC]">
            <Clock className="w-3.5 h-3.5 text-[#2E6B72]" />
            <span>{formatTime(secondsElapsed)}</span>
          </div>

          <select
            value={selectedSectionId}
            onChange={(e) => setSelectedSectionId(e.target.value)}
            disabled={submitted}
            className="bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] text-[#EDE7DC] text-xs px-3 py-1.5 rounded-lg outline-none font-display uppercase tracking-wider focus:border-[#E8913C]"
          >
            <option value="full">Full Exam (50 Tasks)</option>
            {EXAM_SECTIONS.map(s => (
              <option key={s.id} value={s.id}>
                {s.shortCode}: {s.title}
              </option>
            ))}
          </select>

          {!submitted ? (
            <button
              onClick={handleSubmitExam}
              className="px-4 py-2 bg-[#E8913C] text-[#0A0C0E] text-xs font-bold uppercase tracking-wider font-display rounded-lg hover:bg-[#E8913C]/90 transition-colors"
            >
              Finish & Score
            </button>
          ) : (
            <button
              onClick={() => {
                setSubmitted(false);
                setUserAnswers({});
                setCurrentIndex(0);
                setSecondsElapsed(0);
                setTimerActive(true);
              }}
              className="px-4 py-2 border border-[#2E6B72] text-[#2E6B72] text-xs font-bold uppercase tracking-wider font-display rounded-lg hover:bg-[#2E6B72]/10 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retry
            </button>
          )}
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-[#101317]">
        <div
          className="h-full bg-[#E8913C] transition-all duration-300"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-8">
        {/* Post-Submit Summary Banner */}
        {submitted && (
          <div className={`mb-8 p-6 rounded-2xl border ${
            isPassed ? 'bg-[#2E6B72]/10 border-[#2E6B72]/40' : 'bg-[#c5443c]/10 border-[#c5443c]/40'
          }`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-widest font-semibold text-[#9EA5A8] mb-1">
                  Examination Result
                </div>
                <h3 className="text-2xl font-display font-bold uppercase text-[#EDE7DC]">
                  Score: {finalScore} / {totalQuestions} ({finalPercentage}%) — {' '}
                  <span className={isPassed ? 'text-[#2E6B72]' : 'text-[#c5443c]'}>
                    {isPassed ? 'PASSED (PASS THRESHOLD REACHED)' : 'NEEDS REVISION (< 60%)'}
                  </span>
                </h3>
              </div>

              <div className="text-xs text-[#9EA5A8] font-mono">
                Time Taken: {formatTime(secondsElapsed)}
              </div>
            </div>
          </div>
        )}

        {/* Question Counter & Drawer Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs uppercase tracking-widest font-semibold text-[#2E6B72]">
            Task {currentQ.n} of {totalQuestions}
          </div>

          {currentQ.contextData && (
            <button
              onClick={() => setShowContextDrawer(!showContextDrawer)}
              className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#E8913C] hover:text-[#EDE7DC] transition-colors"
            >
              <FileText className="w-4 h-4" />
              {showContextDrawer ? 'Hide Reference Material' : 'Show Reference Material'}
            </button>
          )}
        </div>

        {/* Reference Context Box (Info-Texte or Wortkasten) */}
        {currentQ.contextData && showContextDrawer && (
          <div className="mb-8 p-5 rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#E8913C] mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              {currentQ.contextType === 'texts' ? 'Reference Texts / Info-Texte' : 'Word Bank / Wortkasten'}
            </div>

            {currentQ.contextType === 'texts' ? (
              <div className="grid md:grid-cols-2 gap-3 max-h-56 overflow-y-auto pr-2">
                {(currentQ.contextData as any[]).map((c: any) => (
                  <div key={c.id} className="p-3 bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] rounded-lg text-xs leading-relaxed text-[#9EA5A8]">
                    <span className="font-bold text-[#E8913C] font-mono mr-1">
                      [{c.id}] {c.title ? `${c.title}: ` : ''}
                    </span>
                    {c.text}
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {(currentQ.contextData as string[]).map((w: string, idx: number) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] rounded-lg text-xs font-mono text-[#EDE7DC]">
                    {w}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Question Item Card */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] mb-8">
          <div className="text-lg md:text-xl font-sans text-[#EDE7DC] leading-relaxed mb-8">
            {currentQ.text}
          </div>

          {/* Options Grid */}
          <div className={currentQ.options.length > 5 ? 'flex flex-wrap gap-2' : 'space-y-3'}>
            {currentQ.options.map((opt) => {
              const marker = opt.split(' ')[0].replace(/[^a-o+–x]/g, '');
              const text = opt.replace(/^[a-o+–x]\s+—?\s*/, '');
              const userSelected = userAnswers[currentQ.n] === marker;
              const isCorrectOpt = currentQ.correct === marker;

              let borderCls = 'border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] bg-[#0A0C0E]';
              if (userSelected && !submitted) {
                borderCls = 'border-[#E8913C] bg-[#E8913C]/10 text-[#EDE7DC]';
              } else if (submitted) {
                if (isCorrectOpt) {
                  borderCls = 'border-[#2E6B72] bg-[#2E6B72]/20 text-[#EDE7DC]';
                } else if (userSelected && !isCorrectOpt) {
                  borderCls = 'border-[#c5443c] bg-[#c5443c]/20 text-[#EDE7DC]';
                }
              }

              return (
                <button
                  key={marker}
                  onClick={() => handleOptionSelect(marker)}
                  disabled={submitted}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${borderCls}`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs shrink-0 ${
                    userSelected ? 'bg-[#E8913C] text-[#0A0C0E]' : 'bg-[#101317] text-[#EDE7DC] border border-[rgba(237,231,220,0.13)]'
                  }`}>
                    {marker.toUpperCase()}
                  </div>
                  {text && <div className="text-sm font-sans flex-1">{text}</div>}
                  {submitted && isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-[#2E6B72] shrink-0" />}
                  {submitted && userSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-[#c5443c] shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Solution Explanation key */}
          {submitted && currentQ.explanation && (
            <div className="mt-8 p-4 rounded-xl bg-[#2E6B72]/10 border border-[#2E6B72]/30 text-xs text-[#EDE7DC] leading-relaxed">
              <div className="font-bold uppercase tracking-wider text-[#2E6B72] mb-1 font-display">
                Solution Rationale (Lösungsschlüssel):
              </div>
              <div>{currentQ.explanation}</div>
            </div>
          )}
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-[rgba(237,231,220,0.13)]">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-6 py-3 border border-[rgba(237,231,220,0.13)] rounded-lg text-xs font-semibold uppercase tracking-widest text-[#EDE7DC] hover:border-[#2E6B72] hover:text-[#2E6B72] transition-colors disabled:opacity-30 disabled:pointer-events-none flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Question Dot Grid Navigator */}
          <div className="hidden md:flex flex-wrap gap-1.5 max-w-xs justify-center">
            {questions.map((q, idx) => {
              const isAns = !!userAnswers[q.n];
              const isCurr = idx === currentIndex;
              return (
                <button
                  key={q.n}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-6 h-6 rounded-md text-[10px] font-mono flex items-center justify-center transition-all ${
                    isCurr
                      ? 'bg-[#E8913C] text-[#0A0C0E] font-bold'
                      : isAns
                      ? 'bg-[#2E6B72]/30 text-[#2E6B72] border border-[#2E6B72]/50'
                      : 'bg-[#101317] text-[#6C7378] border border-[rgba(237,231,220,0.1)]'
                  }`}
                >
                  {q.n}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              if (currentIndex < totalQuestions - 1) {
                setCurrentIndex(prev => prev + 1);
              } else if (!submitted) {
                handleSubmitExam();
              } else {
                onClose();
              }
            }}
            className="px-6 py-3 bg-[#EDE7DC] text-[#0A0C0E] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#E8913C] transition-colors flex items-center gap-2 font-display"
          >
            {currentIndex < totalQuestions - 1 ? (
              <>Next <ChevronRight className="w-4 h-4" /></>
            ) : !submitted ? (
              'Submit Exam'
            ) : (
              'Close Simulator'
            )}
          </button>
        </div>
      </main>
    </div>
  );
};
