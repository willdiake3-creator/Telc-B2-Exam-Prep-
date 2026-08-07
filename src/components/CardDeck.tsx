import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Play, CheckCircle } from 'lucide-react';
import { EXAM_SECTIONS } from '../data/examData';

interface CardDeckProps {
  onStartSpecificModule: (sectionId: string) => void;
  onStartFullExam: () => void;
}

const MODULE_CARDS = [
  {
    id: 'lv1',
    code: 'LV 1-3',
    title: 'Leseverstehen',
    time: '90 Min.',
    itemsCount: 20,
    desc: 'Teil 1 (Überschriften), Teil 2 (Mehrfachauswahl), Teil 3 (Anzeigenzuordnung)',
    color: '#E8913C'
  },
  {
    id: 'sb1',
    title: 'Sprachbausteine',
    code: 'SB 1-2',
    time: 'Inkl. LV',
    itemsCount: 20,
    desc: 'Teil 1 (Brief Lückentext a/b/c), Teil 2 (Zeitungstext Wortkasten a–o)',
    color: '#2E6B72'
  },
  {
    id: 'hv',
    title: 'Hörverstehen',
    code: 'HV 1-2',
    time: 'ca. 20 Min.',
    itemsCount: 10,
    desc: 'Teil 1 & 2 (Globalverstehen & Detailverstehen mit Richtig/Falsch)',
    color: '#E8913C'
  },
  {
    id: 'sa',
    title: 'Schriftl. Ausdruck',
    code: 'SA',
    time: '30 Min.',
    itemsCount: 1,
    desc: 'B2 Brief/E-Mail verfassen (Beschwerde oder Bewerbung mit Leitpunkten)',
    color: '#2E6B72'
  },
  {
    id: 'ma',
    title: 'Mündl. Ausdruck',
    code: 'MA',
    time: '15–25 Min.',
    itemsCount: 3,
    desc: 'Teil 1 (Kontaktaufnahme), Teil 2 (Gespräch über ein Thema), Teil 3 (Problemlösung)',
    color: '#E8913C'
  }
];

export const CardDeck: React.FC<CardDeckProps> = ({ onStartSpecificModule, onStartFullExam }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const activeModule = MODULE_CARDS[activeCardIndex];

  return (
    <section id="exams-section" className="py-24 px-6 md:px-12 bg-[#101317] border-y border-[rgba(237,231,220,0.13)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E8913C] mb-3">
              Practice Modules // Übungstest 1
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#EDE7DC] leading-none mb-6">
              Available Test <br />
              <span className="text-[#E8913C]">Sections</span>
            </h2>
            <p className="text-sm font-sans text-[#9EA5A8] max-w-md leading-relaxed mb-8">
              Full-length TELC Deutsch B2 simulation split into interactive modules. Practice individual sections or simulate the complete 50-item exam.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={onStartFullExam}
                className="px-8 py-4 bg-[#EDE7DC] text-[#0A0C0E] text-xs uppercase tracking-widest font-bold font-display rounded-lg hover:bg-[#E8913C] transition-colors flex items-center gap-2"
              >
                <Play className="w-4 h-4" />
                Start Full 50-Item Test
              </button>
              <button
                onClick={() => onStartSpecificModule(activeModule.id)}
                className="px-8 py-4 border border-[rgba(237,231,220,0.2)] text-[#EDE7DC] text-xs uppercase tracking-widest font-semibold font-display rounded-lg hover:border-[#2E6B72] hover:text-[#2E6B72] transition-colors"
              >
                Practice Selected: {activeModule.code}
              </button>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                {MODULE_CARDS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveCardIndex(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === activeCardIndex ? 'w-8 bg-[#E8913C]' : 'w-2 bg-[#6C7378]'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs font-mono text-[#6C7378]">
                Module {activeCardIndex + 1} / {MODULE_CARDS.length}
              </span>
            </div>
          </div>

          {/* Card Stack Display */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full max-w-sm h-[380px] perspective-1000">
              {MODULE_CARDS.map((card, idx) => {
                const offset = idx - activeCardIndex;
                const isVisible = Math.abs(offset) <= 2;
                if (!isVisible) return null;

                const zIndex = 30 - Math.abs(offset) * 5;
                const translateY = offset * 12;
                const scale = 1 - Math.abs(offset) * 0.05;
                const opacity = 1 - Math.abs(offset) * 0.3;

                return (
                  <div
                    key={card.id}
                    onClick={() => setActiveCardIndex(idx)}
                    className="absolute inset-0 bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] p-8 rounded-2xl shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between select-none"
                    style={{
                      zIndex,
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      opacity
                    }}
                  >
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-xs font-mono font-bold uppercase text-[#E8913C]">
                          {card.code}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-[#6C7378] font-semibold">
                          {card.time}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-bold uppercase text-[#EDE7DC] mb-3">
                        {card.title}
                      </h3>

                      <p className="text-xs font-sans text-[#9EA5A8] leading-relaxed mb-6">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[rgba(237,231,220,0.1)] flex items-center justify-between">
                      <span className="text-xs font-mono text-[#2E6B72]">
                        {card.itemsCount} {card.itemsCount === 1 ? 'Task' : 'Questions'}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onStartSpecificModule(card.id);
                        }}
                        className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#EDE7DC] hover:text-[#E8913C] transition-colors"
                      >
                        Start Section
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
