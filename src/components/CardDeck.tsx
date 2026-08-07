import React from 'react';
import { ChevronRight, Play, BookOpen, Headphones, Edit3, MessageSquare, Clock, CheckCircle2 } from 'lucide-react';

interface CardDeckProps {
  onStartSpecificModule: (sectionId: string) => void;
  onStartFullExam: () => void;
}

const MODULE_CARDS = [
  {
    id: 'full',
    code: 'FULL TEST',
    title: 'Gesamter Test (1–60)',
    time: '160 Min.',
    itemsCount: 60,
    desc: 'Alle 60 Aufgaben aus Leseverstehen, Sprachbausteine und Hörverstehen am Stück absolvieren.',
    color: '#E8913C',
    icon: BookOpen,
    subParts: []
  },
  {
    id: 'lv',
    code: 'LV 1–3',
    title: 'Leseverstehen',
    time: '90 Min. (inkl. SB)',
    itemsCount: 20,
    desc: 'Teil 1 (Überschriften 1–5), Teil 2 (Zeitungsartikel 6–10), Teil 3 (Anzeigen 11–20)',
    color: '#E8913C',
    icon: BookOpen,
    subParts: [
      { id: 'lv1', label: 'Teil 1 (1–5)' },
      { id: 'lv2', label: 'Teil 2 (6–10)' },
      { id: 'lv3', label: 'Teil 3 (11–20)' },
    ]
  },
  {
    id: 'sb',
    code: 'SB 1–2',
    title: 'Sprachbausteine',
    time: '90 Min. (inkl. LV)',
    itemsCount: 20,
    desc: 'Teil 1 (Brief Lückentext 21–30), Teil 2 (Wortkasten 31–40)',
    color: '#2E6B72',
    icon: CheckCircle2,
    subParts: [
      { id: 'sb1', label: 'Teil 1 (21–30)' },
      { id: 'sb2', label: 'Teil 2 (31–40)' },
    ]
  },
  {
    id: 'hv',
    code: 'HV 1–3',
    title: 'Hörverstehen',
    time: 'ca. 20 Min.',
    itemsCount: 20,
    desc: 'Teil 1 (Nachrichten 41–45), Teil 2 (Zugspitze Interview 46–55), Teil 3 (Durchsagen 56–60)',
    color: '#E8913C',
    icon: Headphones,
    subParts: [
      { id: 'hv1', label: 'Teil 1 (41–45)' },
      { id: 'hv2', label: 'Teil 2 (46–55)' },
      { id: 'hv3', label: 'Teil 3 (56–60)' },
    ]
  },
  {
    id: 'sa',
    code: 'SA',
    title: 'Schriftlicher Ausdruck',
    time: '30 Min.',
    itemsCount: 2,
    desc: 'Thema 1 (Unfallversicherung) oder Thema 2 (Jugendcamp Beschwerdebrief) mit interaktiver Vorschau',
    color: '#2E6B72',
    icon: Edit3,
    subParts: []
  },
  {
    id: 'ma',
    code: 'MA',
    title: 'Mündlicher Ausdruck',
    time: '15–25 Min.',
    itemsCount: 3,
    desc: 'Teil 1 (Präsentation), Teil 2 (Diskussion Getrennte Schulen), Teil 3 (Seniorenreise-Problemlösung)',
    color: '#E8913C',
    icon: MessageSquare,
    subParts: []
  }
];

export const CardDeck: React.FC<CardDeckProps> = ({ onStartSpecificModule, onStartFullExam }) => {
  return (
    <section id="exams-section" className="py-20 px-6 md:px-12 bg-[#0A0C0E]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Modelltest Selector */}
        <div className="space-y-6 border-b border-[rgba(237,231,220,0.13)] pb-8">
          {/* Modelltest Selector Switcher */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#9EA5A8] whitespace-nowrap font-semibold">
              Select Exam Set:
            </span>
            <button className="px-4 py-1.5 rounded-full bg-[#E8913C] text-[#0A0C0E] text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-md shadow-[#E8913C]/20">
              <span>Modelltest 1</span>
              <span className="text-[9px] bg-[#0A0C0E]/20 px-1.5 py-0.5 rounded uppercase font-extrabold">Aktiv</span>
            </button>
            <button disabled className="px-4 py-1.5 rounded-full bg-[#101317] border border-[rgba(237,231,220,0.13)] text-[#6C7378] text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5 opacity-60 cursor-not-allowed">
              <span>Modelltest 2</span>
              <span className="text-[9px] bg-[#1A1D20] text-[#9EA5A8] px-1.5 py-0.5 rounded">In Kürze</span>
            </button>
            <button disabled className="px-4 py-1.5 rounded-full bg-[#101317] border border-[rgba(237,231,220,0.13)] text-[#6C7378] text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5 opacity-60 cursor-not-allowed">
              <span>Modelltest 3</span>
              <span className="text-[9px] bg-[#1A1D20] text-[#9EA5A8] px-1.5 py-0.5 rounded">In Kürze</span>
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E8913C] mb-2">
                Practice Modules // Modelltest 1
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-tight text-[#EDE7DC]">
                Available Test <span className="text-[#E8913C]">Sections</span>
              </h2>
              <p className="text-sm text-[#9EA5A8] font-sans mt-2 max-w-xl">
                Choose a specific module (Teil 1, 2 or 3) to target your weaknesses or practice the entire 60-item test in real time.
              </p>
            </div>

          <button
            onClick={onStartFullExam}
            className="px-6 py-3.5 bg-[#E8913C] text-[#0A0C0E] text-xs font-bold font-display uppercase tracking-wider rounded-xl hover:bg-[#E8913C]/90 transition-all flex items-center gap-2 self-start md:self-auto cursor-pointer shadow-lg shadow-[#E8913C]/10"
          >
            <Play className="w-4 h-4 fill-current" />
            Start Full 60-Item Test
          </button>
        </div>
      </div>

        {/* Responsive Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULE_CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="p-6 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] hover:border-[#E8913C] transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Pill & Time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] text-xs font-mono font-bold text-[#E8913C]">
                      {card.code}
                    </span>
                    <span className="text-xs font-mono text-[#9EA5A8] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2E6B72]" />
                      {card.time}
                    </span>
                  </div>

                  {/* Title & Icon */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] text-[#E8913C] group-hover:border-[#E8913C]/40 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-bold uppercase text-[#EDE7DC] pt-1 leading-snug">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#9EA5A8] leading-relaxed mb-4 font-sans">
                    {card.desc}
                  </p>

                  {/* Sub-Part Quick Launch Pills */}
                  {card.subParts && card.subParts.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      <span className="text-[10px] uppercase font-mono text-[#6C7378] w-full mb-0.5">Quick Jump to Teil:</span>
                      {card.subParts.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onStartSpecificModule(sub.id);
                          }}
                          className="px-2.5 py-1 rounded-md bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] text-[11px] font-mono font-semibold text-[#E8913C] hover:border-[#E8913C] hover:bg-[#E8913C]/10 transition-colors cursor-pointer"
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-4 border-t border-[rgba(237,231,220,0.08)] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#2E6B72]">
                    {card.itemsCount} {card.itemsCount === 1 ? 'Task' : 'Items'}
                  </span>

                  <button
                    onClick={() => onStartSpecificModule(card.id)}
                    className="px-4 py-2 bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] rounded-lg text-xs font-display font-bold uppercase tracking-wider text-[#EDE7DC] group-hover:border-[#E8913C] group-hover:text-[#E8913C] transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    Start All
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

