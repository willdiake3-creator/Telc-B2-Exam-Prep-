import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, CheckCircle2, XCircle, 
  Clock, Award, RotateCcw, AlertTriangle, BookOpen, FileText, Check, Headphones, Edit3, MessageSquare 
} from 'lucide-react';
import { User } from 'firebase/auth';
import { EXAM_SECTIONS, WRITING_TOPICS, SPEAKING_PARTS } from '../data/examData';
import { QuestionItem, ExamSection, WritingTopic, SpeakingPart } from '../types';
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
  const [showAudioTranscript, setShowAudioTranscript] = useState(false);

  // Writing mode state
  const [selectedWritingTopicIndex, setSelectedWritingTopicIndex] = useState(0);
  const [writingText, setWritingText] = useState('');
  const [checkedWritingReqs, setCheckedWritingReqs] = useState<Record<number, boolean>>({});

  // Speaking mode state
  const [selectedSpeakingPartIndex, setSelectedSpeakingPartIndex] = useState(0);

  // Sync section ID if initial change occurs
  useEffect(() => {
    if (initialSectionId) {
      setSelectedSectionId(initialSectionId);
    }
  }, [initialSectionId]);

  // Initialize Questions based on selectedSectionId
  useEffect(() => {
    if (!isOpen) return;

    if (selectedSectionId === 'sa' || selectedSectionId === 'ma') {
      setQuestions([]);
      return;
    }

    let targetSections: ExamSection[] = [];
    if (selectedSectionId === 'full') {
      targetSections = EXAM_SECTIONS;
    } else if (selectedSectionId === 'lv') {
      targetSections = EXAM_SECTIONS.filter(s => s.module === 'Leseverstehen');
    } else if (selectedSectionId === 'sb') {
      targetSections = EXAM_SECTIONS.filter(s => s.module === 'Sprachbausteine');
    } else if (selectedSectionId === 'hv') {
      targetSections = EXAM_SECTIONS.filter(s => s.module === 'Hörverstehen');
    } else {
      const found = EXAM_SECTIONS.find(s => s.id === selectedSectionId);
      if (found) {
        targetSections = [found];
      } else {
        targetSections = EXAM_SECTIONS;
      }
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
    setShowAudioTranscript(false);
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

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(userAnswers).length;
  const currentQ = questions[currentIndex];

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
        ? 'Full TELC B2 Practice Test (60 Items)' 
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
      onToast(`Saved score locally (${err.message || 'Database sync standard status'})`, 'info');
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const finalScore = calculateScore();
  const finalPercentage = totalQuestions > 0 ? Math.round((finalScore / totalQuestions) * 100) : 0;
  const isPassed = finalPercentage >= 60;

  const currentWritingTopic = WRITING_TOPICS[selectedWritingTopicIndex];
  const wordCount = writingText.trim() ? writingText.trim().split(/\s+/).length : 0;

  const currentSpeakingPart = SPEAKING_PARTS[selectedSpeakingPartIndex];

  return (
    <div className="fixed inset-0 z-[200] bg-[#0A0C0E] overflow-y-auto flex flex-col font-sans">
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
              telc Deutsch B2 // Modelltest 1
            </div>
            <h2 className="text-sm font-display font-bold uppercase text-[#EDE7DC] truncate max-w-xs sm:max-w-md">
              {selectedSectionId === 'sa' 
                ? 'Schriftlicher Ausdruck (Writing)' 
                : selectedSectionId === 'ma' 
                ? 'Mündlicher Ausdruck (Speaking)' 
                : currentQ?.sectionTitle || 'Practice Mode'}
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
            <option value="full">Full Exam (60 Tasks 1–60)</option>

            <optgroup label="Leseverstehen (20 Items)">
              <option value="lv">LV All (Teil 1–3, Tasks 1–20)</option>
              <option value="lv1">LV Teil 1: Überschriften (1–5)</option>
              <option value="lv2">LV Teil 2: Zeitungsartikel (6–10)</option>
              <option value="lv3">LV Teil 3: Anzeigenzuordnung (11–20)</option>
            </optgroup>

            <optgroup label="Sprachbausteine (20 Items)">
              <option value="sb">SB All (Teil 1–2, Tasks 21–40)</option>
              <option value="sb1">SB Teil 1: Brief Lückentext (21–30)</option>
              <option value="sb2">SB Teil 2: Wortkasten (31–40)</option>
            </optgroup>

            <optgroup label="Hörverstehen (20 Items)">
              <option value="hv">HV All (Teil 1–3, Tasks 41–60)</option>
              <option value="hv1">HV Teil 1: Nachrichten (41–45)</option>
              <option value="hv2">HV Teil 2: Zugspitze Interview (46–55)</option>
              <option value="hv3">HV Teil 3: Durchsagen (56–60)</option>
            </optgroup>

            <optgroup label="Produktiv">
              <option value="sa">SA: Schriftlicher Ausdruck (Brief)</option>
              <option value="ma">MA: Mündlicher Ausdruck (Sprechen)</option>
            </optgroup>
          </select>

          {selectedSectionId !== 'sa' && selectedSectionId !== 'ma' && (
            !submitted ? (
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
            )
          )}
        </div>
      </header>

      {/* Progress Bar (Objective mode) */}
      {selectedSectionId !== 'sa' && selectedSectionId !== 'ma' && (
        <div className="w-full h-1 bg-[#101317]">
          <div
            className="h-full bg-[#E8913C] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / Math.max(1, totalQuestions)) * 100}%` }}
          />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-8">
        {/* WRITING MODE (Schriftlicher Ausdruck) */}
        {selectedSectionId === 'sa' && (
          <div className="space-y-8">
            {/* Topic Switcher */}
            <div className="flex flex-wrap gap-3">
              {WRITING_TOPICS.map((topic, idx) => (
                <button
                  key={topic.id}
                  onClick={() => setSelectedWritingTopicIndex(idx)}
                  className={`px-5 py-3 rounded-xl border text-xs font-display font-bold uppercase tracking-wider transition-all ${
                    idx === selectedWritingTopicIndex
                      ? 'bg-[#E8913C] text-[#0A0C0E] border-[#E8913C]'
                      : 'bg-[#101317] text-[#EDE7DC] border-[rgba(237,231,220,0.13)] hover:border-[#E8913C]'
                  }`}
                >
                  {topic.title}
                </button>
              ))}
            </div>

            {/* Prompt Advertisement Box */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#E8913C] mb-2 flex items-center gap-2">
                <Edit3 className="w-4 h-4" />
                {currentWritingTopic.subtitle}
              </div>
              <h3 className="text-xl font-display font-bold uppercase text-[#EDE7DC] mb-4">
                {currentWritingTopic.adTitle}
              </h3>
              <p className="text-sm text-[#9EA5A8] leading-relaxed mb-6 whitespace-pre-line bg-[#0A0C0E] p-4 rounded-xl border border-[rgba(237,231,220,0.08)]">
                {currentWritingTopic.adContent}
              </p>
              {currentWritingTopic.adAddress && (
                <div className="text-xs font-mono text-[#2E6B72] mb-6">
                  Empfänger-Adresse: {currentWritingTopic.adAddress}
                </div>
              )}

              <div className="mb-4">
                <div className="text-xs uppercase tracking-widest font-bold text-[#EDE7DC] mb-3">
                  Leitpunkte (Sie müssen alle 4 Punkte behandeln):
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentWritingTopic.promptRequirements.map((req, rIdx) => (
                    <label key={rIdx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] text-xs text-[#EDE7DC] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!checkedWritingReqs[rIdx]}
                        onChange={(e) => setCheckedWritingReqs(prev => ({ ...prev, [rIdx]: e.target.checked }))}
                        className="mt-0.5 accent-[#E8913C]"
                      />
                      <span>{req}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Writing Area */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest font-bold text-[#2E6B72]">
                  Ihr Brief / Ihre E-Mail (B2 Richtwert: ca. 150 Wörter)
                </span>
                <span className={`text-xs font-mono px-3 py-1 rounded-full ${
                  wordCount >= 130 ? 'bg-[#2E6B72]/20 text-[#2E6B72]' : 'bg-[#E8913C]/20 text-[#E8913C]'
                }`}>
                  Wortanzahl: {wordCount} Wörter
                </span>
              </div>

              <textarea
                value={writingText}
                onChange={(e) => setWritingText(e.target.value)}
                placeholder="Sehr geehrte Damen und Herren, ich schreibe Ihnen bezüglich Ihrer Anzeige..."
                rows={12}
                className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] rounded-xl p-4 text-sm text-[#EDE7DC] placeholder-[#6C7378] outline-none focus:border-[#E8913C] leading-relaxed font-sans resize-y"
              />

              <div className="mt-4 flex flex-wrap justify-between items-center gap-4">
                <div className="text-xs text-[#9EA5A8]">
                  Achten Sie auf formelle Anrede, Betreffzeile, passende Konjunktionen und Grußformel.
                </div>
                <button
                  onClick={() => {
                    onToast(`Text gespeichert (${wordCount} Wörter). Super Vorbereitung!`, 'success');
                  }}
                  className="px-6 py-3 bg-[#E8913C] text-[#0A0C0E] text-xs font-bold uppercase tracking-wider font-display rounded-lg hover:bg-[#E8913C]/90 transition-colors"
                >
                  Entwurf Speichern
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SPEAKING MODE (Mündlicher Ausdruck) */}
        {selectedSectionId === 'ma' && (
          <div className="space-y-8">
            {/* Part Switcher */}
            <div className="flex flex-wrap gap-3">
              {SPEAKING_PARTS.map((part, idx) => (
                <button
                  key={part.part}
                  onClick={() => setSelectedSpeakingPartIndex(idx)}
                  className={`px-5 py-3 rounded-xl border text-xs font-display font-bold uppercase tracking-wider transition-all ${
                    idx === selectedSpeakingPartIndex
                      ? 'bg-[#E8913C] text-[#0A0C0E] border-[#E8913C]'
                      : 'bg-[#101317] text-[#EDE7DC] border-[rgba(237,231,220,0.13)] hover:border-[#E8913C]'
                  }`}
                >
                  {part.title}
                </button>
              ))}
            </div>

            {/* Speaking Part Card */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
              <div className="flex justify-between items-start mb-4">
                <div className="text-xs uppercase tracking-widest font-semibold text-[#E8913C] flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  {currentSpeakingPart.title}
                </div>
                <span className="text-xs font-mono text-[#2E6B72] bg-[#2E6B72]/10 px-3 py-1 rounded-full border border-[#2E6B72]/30">
                  {currentSpeakingPart.duration}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold uppercase text-[#EDE7DC] mb-4">
                Prüfungsaufgabe & Ablauf
              </h3>
              <p className="text-sm text-[#9EA5A8] leading-relaxed mb-6">
                {currentSpeakingPart.description}
              </p>

              {currentSpeakingPart.readingText && (
                <div className="mb-6 p-5 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)]">
                  <div className="text-xs uppercase tracking-widest font-bold text-[#E8913C] mb-2">
                    Lesetext / Impuls für die Diskussion:
                  </div>
                  <p className="text-sm text-[#EDE7DC] leading-relaxed italic">
                    "{currentSpeakingPart.readingText}"
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest font-bold text-[#EDE7DC]">
                  Gesprächsimpulse & Stichpunkte:
                </div>
                <div className="space-y-2">
                  {currentSpeakingPart.prompts.map((p, pIdx) => (
                    <div key={pIdx} className="p-3 bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] rounded-lg text-xs text-[#9EA5A8] leading-relaxed font-sans">
                      {p}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Useful Phrases Guide */}
            <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
              <h4 className="text-sm font-display font-bold uppercase text-[#EDE7DC] mb-4">
                Wichtige B2 Redemittel für den Mündlichen Ausdruck
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-[#9EA5A8]">
                <div className="p-4 bg-[#0A0C0E] rounded-xl border border-[rgba(237,231,220,0.08)]">
                  <div className="font-bold text-[#E8913C] mb-2 font-display uppercase">Meinung äußern & Begründen</div>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Meiner Meinung nach sollte man berücksichtigen...</li>
                    <li>Ich stehe auf dem Standpunkt, dass...</li>
                    <li>Ein wesentlicher Vorteil/Nachteil besteht darin, dass...</li>
                  </ul>
                </div>
                <div className="p-4 bg-[#0A0C0E] rounded-xl border border-[rgba(237,231,220,0.08)]">
                  <div className="font-bold text-[#2E6B72] mb-2 font-display uppercase">Vorschläge machen & Planen</div>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Wie wäre es, wenn wir Folgendes vereinbaren...</li>
                    <li>Wir könnten uns darauf einigen, dass...</li>
                    <li>Welche Lösung schlägst du für diesen Punkt vor?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* OBJECTIVE EXAM MODE (Questions 1–60) */}
        {selectedSectionId !== 'sa' && selectedSectionId !== 'ma' && currentQ && (
          <div>
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

            {/* Top Toolbar: Section Badge, Reference Toggle & Audio Transcript Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[rgba(237,231,220,0.13)]">
              <div className="text-xs uppercase tracking-widest font-semibold text-[#2E6B72] flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-[#2E6B72]/15 text-[#2E6B72] font-mono font-bold">
                  Task {currentQ.n}/{totalQuestions}
                </span>
                <span>{currentQ.sectionTitle}</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider">
                {currentQ.audioScript && (
                  <button
                    onClick={() => setShowAudioTranscript(!showAudioTranscript)}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                      showAudioTranscript ? 'text-[#2E6B72]' : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
                    }`}
                  >
                    <Headphones className="w-4 h-4" />
                    <span>{showAudioTranscript ? 'Hide Audio Transcript' : 'Show Audio Transcript'}</span>
                  </button>
                )}

                {currentQ.contextData && (
                  <button
                    onClick={() => setShowContextDrawer(!showContextDrawer)}
                    className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                      showContextDrawer ? 'text-[#E8913C]' : 'text-[#9EA5A8] hover:text-[#EDE7DC]'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                    <span>{showContextDrawer ? 'Hide Split Reference Text' : 'Show Split Reference Text'}</span>
                  </button>
                )}
              </div>
            </div>

            {/* SEAMLESS SPLIT SCROLL LAYOUT */}
            <div className={currentQ.contextData && showContextDrawer ? "grid lg:grid-cols-12 gap-8 items-start" : "max-w-3xl mx-auto space-y-6"}>
              
              {/* LEFT COLUMN: Reference Material (Info-Texte / Reading Article / Word Bank / Audio Script) */}
              {(currentQ.contextData || (currentQ.audioScript && showAudioTranscript)) && showContextDrawer && (
                <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24 lg:max-h-[calc(100vh-140px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#2E6B72]/40 scrollbar-track-[#101317]">
                  {/* Audio Script Panel */}
                  {currentQ.audioScript && showAudioTranscript && (
                    <div className="p-5 rounded-2xl bg-[#101317] border border-[#2E6B72]/40">
                      <div className="text-xs uppercase tracking-widest font-bold text-[#2E6B72] mb-3 flex items-center gap-2">
                        <Headphones className="w-4 h-4" />
                        Audio Transcript (Höraufnahme)
                      </div>
                      <p className="text-xs text-[#EDE7DC] leading-relaxed italic font-sans whitespace-pre-line bg-[#0A0C0E] p-4 rounded-xl border border-[rgba(237,231,220,0.08)]">
                        "{currentQ.audioScript}"
                      </p>
                    </div>
                  )}

                  {/* Context Reference Material */}
                  {currentQ.contextData && (
                    <div className="p-5 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
                      <div className="text-xs uppercase tracking-widest font-bold text-[#E8913C] mb-4 flex items-center gap-2 pb-3 border-b border-[rgba(237,231,220,0.08)]">
                        <BookOpen className="w-4 h-4" />
                        {currentQ.contextType === 'texts' ? 'Reference Material / Reading Passages' : 'Word Bank Options'}
                      </div>

                      {currentQ.contextType === 'texts' ? (
                        <div className="space-y-3">
                          {(currentQ.contextData as any[]).map((c: any) => (
                            <div key={c.id} className="p-4 bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] rounded-xl text-xs leading-relaxed text-[#9EA5A8] hover:border-[#E8913C]/30 transition-colors">
                              <div className="font-bold text-[#E8913C] font-mono mb-1 uppercase tracking-wider">
                                [{c.id.toUpperCase()}] {c.title ? `— ${c.title}` : ''}
                              </div>
                              <p className="text-[#EDE7DC] font-sans">{c.text}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          {(currentQ.contextData as string[]).map((w: string, idx: number) => (
                            <span key={idx} className="px-3 py-2 bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] rounded-lg text-xs font-mono text-[#EDE7DC]">
                              {w}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* RIGHT COLUMN: Question Item Card & Options */}
              <div className={currentQ.contextData && showContextDrawer ? "lg:col-span-7 space-y-6" : "space-y-6"}>
                <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
                  {/* Task Question Heading */}
                  <div className="text-base md:text-lg font-sans text-[#EDE7DC] leading-relaxed mb-8">
                    {currentQ.text}
                  </div>

                  {/* Options List */}
                  <div className={currentQ.options.length > 5 ? 'grid grid-cols-2 sm:grid-cols-3 gap-2.5' : 'space-y-3'}>
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
                          className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 cursor-pointer ${borderCls}`}
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-display font-bold text-xs shrink-0 ${
                            userSelected ? 'bg-[#E8913C] text-[#0A0C0E]' : 'bg-[#101317] text-[#EDE7DC] border border-[rgba(237,231,220,0.13)]'
                          }`}>
                            {marker.toUpperCase()}
                          </div>
                          {text && <div className="text-xs sm:text-sm font-sans flex-1 leading-snug">{text}</div>}
                          {submitted && isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-[#2E6B72] shrink-0" />}
                          {submitted && userSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-[#c5443c] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Solution Rationale Box */}
                  {submitted && currentQ.explanation && (
                    <div className="mt-8 p-4 rounded-xl bg-[#2E6B72]/10 border border-[#2E6B72]/30 text-xs text-[#EDE7DC] leading-relaxed">
                      <div className="font-bold uppercase tracking-wider text-[#2E6B72] mb-1 font-display">
                        Solution Rationale (Lösungsschlüssel):
                      </div>
                      <div>{currentQ.explanation}</div>
                    </div>
                  )}
                </div>

                {/* Question Navigation Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-[rgba(237,231,220,0.13)]">
                  <button
                    onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                    className="px-5 py-2.5 border border-[rgba(237,231,220,0.13)] rounded-xl text-xs font-semibold uppercase tracking-widest text-[#EDE7DC] hover:border-[#2E6B72] hover:text-[#2E6B72] transition-colors disabled:opacity-30 disabled:pointer-events-none flex items-center gap-2 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>

                  {/* Question Dot Grid Navigator */}
                  <div className="hidden md:flex flex-wrap gap-1 max-w-xs justify-center">
                    {questions.map((q, idx) => {
                      const isAns = !!userAnswers[q.n];
                      const isCurr = idx === currentIndex;
                      return (
                        <button
                          key={q.n}
                          onClick={() => setCurrentIndex(idx)}
                          className={`w-6 h-6 rounded-md text-[9px] font-mono flex items-center justify-center transition-all cursor-pointer ${
                            isCurr
                              ? 'bg-[#E8913C] text-[#0A0C0E] font-bold'
                              : isAns
                              ? 'bg-[#2E6B72]/30 text-[#2E6B72] border border-[#2E6B72]/50'
                              : 'bg-[#101317] text-[#6C7378] border border-[rgba(237,231,220,0.1)] hover:text-[#EDE7DC]'
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
                    className="px-6 py-2.5 bg-[#EDE7DC] text-[#0A0C0E] rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[#E8913C] transition-colors flex items-center gap-2 font-display cursor-pointer"
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
              </div>

            </div>
          </div>
        )}
      </main>
    </div>
  );
};
