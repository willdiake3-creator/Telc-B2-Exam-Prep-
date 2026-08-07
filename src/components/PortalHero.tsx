import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface PortalHeroProps {
  onStartExam: () => void;
  onBrowseModules: () => void;
}

export const PortalHero: React.FC<PortalHeroProps> = ({ onStartExam, onBrowseModules }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const vh = window.innerHeight;
      const progress = Math.min(scroll / (vh * 1.2), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftTranslate = scrollProgress * 100;
  const rightTranslate = scrollProgress * 100;
  const scale = 1.05 - scrollProgress * 0.05;
  const overlayOpacity = scrollProgress * 0.35;
  const dotOffset = scrollProgress * 35;
  const wordmarkSplit = scrollProgress * 18;

  return (
    <section className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden isolation-auto flex items-center justify-center">
        {/* Top & Bottom Subtitles */}
        <div className="absolute top-20 left-6 md:left-12 text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#6C7378] z-40">
          Certification // <span className="text-[#E8913C]">TELC Deutsch B2</span>
        </div>
        <div className="absolute bottom-8 right-6 md:right-12 text-[10.5px] uppercase tracking-[0.2em] font-semibold text-[#6C7378] z-40 text-right opacity-70">
          Past Papers // Übungstest 1 // Official Solution Key
        </div>

        {/* Splitting Portal Panels */}
        <div
          className="absolute top-0 left-0 w-[50.5%] h-full bg-[#0A0C0E] border-r border-[rgba(237,231,220,0.13)] z-20 pointer-events-none transition-transform duration-75 ease-out"
          style={{ transform: `translateX(-${leftTranslate}%)` }}
        />
        <div
          className="absolute top-0 right-0 w-[50.5%] h-full bg-[#0A0C0E] border-l border-[rgba(237,231,220,0.13)] z-20 pointer-events-none transition-transform duration-75 ease-out"
          style={{ transform: `translateX(${rightTranslate}%)` }}
        />

        {/* Animated Accent Dots */}
        <div
          className="w-2 h-2 rounded-full bg-[#E8913C] shadow-[0_0_12px_#E8913C] absolute z-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75 ease-out"
          style={{
            transform: `translate(calc(-50% - ${dotOffset}vw), calc(-50% - ${dotOffset}vh))`
          }}
        />
        <div
          className="w-2 h-2 rounded-full bg-[#2E6B72] shadow-[0_0_12px_#2E6B72] absolute z-25 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-transform duration-75 ease-out"
          style={{
            transform: `translate(calc(-50% + ${dotOffset}vw), calc(-50% + ${dotOffset}vh))`
          }}
        />

        {/* Portal Wordmark */}
        <div className="absolute z-30 pointer-events-none flex items-center font-display uppercase tracking-tighter text-[clamp(4rem,15vw,16rem)] leading-none select-none">
          <span
            className="font-extrabold text-[#EDE7DC] transition-transform duration-75 ease-out inline-block"
            style={{ transform: `translateX(-${wordmarkSplit}vw)` }}
          >
            TELC
          </span>
          <span
            className="font-light text-[#E8913C] transition-transform duration-75 ease-out inline-block ml-4"
            style={{ transform: `translateX(${wordmarkSplit}vw)` }}
          >
            B2
          </span>
        </div>

        {/* Hero Background Image */}
        <div
          className="absolute inset-0 z-10 transition-transform duration-75 ease-out"
          style={{ transform: `scale(${scale})` }}
        >
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
            alt="TELC Examination Preparation"
            className="w-full h-full object-cover brightness-[0.35]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#2E6B72] to-[#E8913C] mix-blend-overlay pointer-events-none"
            style={{ opacity: overlayOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0C0E]/40 to-[#0A0C0E]" />
        </div>

        {/* Center Content CTA Overlay */}
        <div className="relative z-40 max-w-3xl mx-auto px-6 text-center mt-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101317]/90 border border-[#E8913C]/40 mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#E8913C]" />
            <span className="text-[10px] uppercase tracking-widest text-[#EDE7DC] font-semibold">
              Official 2011 telc GmbH Exam Cycle
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight text-[#EDE7DC] leading-none mb-6">
            Master TELC Deutsch B2 <br className="hidden sm:inline" />
            <span className="text-[#E8913C]">Authentic Exam Prep</span>
          </h1>

          <p className="text-sm md:text-base font-sans text-[#9EA5A8] max-w-xl mx-auto mb-8 leading-relaxed">
            Practice Leseverstehen, Sprachbausteine, and Hörverstehen with authentic past questions, automated grading, and complete rationale keys.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartExam}
              className="w-full sm:w-auto px-8 py-4 bg-[#E8913C] text-[#0A0C0E] text-xs uppercase tracking-widest font-bold font-display rounded-lg hover:bg-[#E8913C]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#E8913C]/10"
            >
              <BookOpen className="w-4 h-4" />
              Launch Exam Simulator
            </button>
            <button
              onClick={onBrowseModules}
              className="w-full sm:w-auto px-8 py-4 border border-[rgba(237,231,220,0.2)] text-[#EDE7DC] text-xs uppercase tracking-widest font-semibold font-display rounded-lg hover:border-[#2E6B72] hover:text-[#2E6B72] transition-all flex items-center justify-center gap-2"
            >
              Browse Practice Modules
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
