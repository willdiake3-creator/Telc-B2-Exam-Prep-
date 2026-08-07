import React from 'react';
import { ArrowRight, Sparkles, BookOpen, CheckCircle, ShieldCheck, Clock, Award } from 'lucide-react';

interface PortalHeroProps {
  onStartExam: () => void;
  onBrowseModules: () => void;
}

export const PortalHero: React.FC<PortalHeroProps> = ({ onStartExam, onBrowseModules }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 md:px-12 bg-[#0A0C0E] border-b border-[rgba(237,231,220,0.13)] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E8913C]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[250px] bg-[#2E6B72]/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Hero Headline & Actions */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101317] border border-[#E8913C]/40 text-xs font-mono text-[#E8913C]">
              <Sparkles className="w-3.5 h-3.5 text-[#E8913C]" />
              <span className="uppercase tracking-wider font-semibold">TELC DEUTSCH B2 // MODELLTEST 1</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-tight text-[#EDE7DC] leading-[1.08]">
              Master TELC B2 <br />
              <span className="text-[#E8913C]">With Authentic Practice</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm md:text-base font-sans text-[#9EA5A8] max-w-xl leading-relaxed">
              Complete practice simulator based on the official telc GmbH B2 examination blueprint. Test Leseverstehen, Sprachbausteine, Hörverstehen, Schriftlicher and Mündlicher Ausdruck with full solution keys.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onStartExam}
                className="px-8 py-4 bg-[#E8913C] text-[#0A0C0E] text-xs font-bold font-display uppercase tracking-widest rounded-xl hover:bg-[#E8913C]/90 transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#E8913C]/20 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                Launch 60-Task Exam Simulator
              </button>

              <button
                onClick={onBrowseModules}
                className="px-8 py-4 bg-[#101317] border border-[rgba(237,231,220,0.18)] text-[#EDE7DC] text-xs font-bold font-display uppercase tracking-widest rounded-xl hover:border-[#2E6B72] hover:text-[#2E6B72] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Browse Practice Modules
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Features Checklist Pills */}
            <div className="pt-4 flex flex-wrap gap-4 text-xs font-mono text-[#9EA5A8]">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#2E6B72]" />
                <span>60 Official Test Tasks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#2E6B72]" />
                <span>Automated Scoring</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#2E6B72]" />
                <span>Complete Solution Keys</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Interactive Preview Box */}
          <div className="lg:col-span-5">
            <div className="p-6 md:p-8 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] shadow-2xl space-y-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-[rgba(237,231,220,0.1)]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#2E6B72]" />
                  <span className="text-xs font-display font-bold uppercase text-[#EDE7DC]">Exam Overview</span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#E8913C]/10 text-[#E8913C] border border-[#E8913C]/30">
                  telc B2 Standard
                </span>
              </div>

              {/* Module List Overview */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-display font-bold uppercase text-[#EDE7DC]">Leseverstehen (LV 1–3)</div>
                    <div className="text-[11px] text-[#9EA5A8]">Überschriften, Artikel, Info-Anzeigen</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#E8913C]">20 Items</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-display font-bold uppercase text-[#EDE7DC]">Sprachbausteine (SB 1–2)</div>
                    <div className="text-[11px] text-[#9EA5A8]">Brief-Lückentext & Wortkasten</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2E6B72]">20 Items</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-display font-bold uppercase text-[#EDE7DC]">Hörverstehen (HV 1–3)</div>
                    <div className="text-[11px] text-[#9EA5A8]">Nachrichten, Interview, Durchsagen</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#E8913C]">20 Items</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0A0C0E] border border-[rgba(237,231,220,0.08)] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-display font-bold uppercase text-[#EDE7DC]">Schriftlich & Mündlich</div>
                    <div className="text-[11px] text-[#9EA5A8]">B2 Brief & 3-Teilige Sprachtests</div>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2E6B72]">SA + MA</span>
                </div>
              </div>

              {/* Pass Threshold Badge */}
              <div className="p-4 rounded-xl bg-[#2E6B72]/10 border border-[#2E6B72]/30 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-[#2E6B72]" />
                  <div>
                    <div className="text-xs font-display font-bold uppercase text-[#EDE7DC]">Passing Threshold</div>
                    <div className="text-[10px] text-[#9EA5A8]">Min. 180 / 300 Points</div>
                  </div>
                </div>
                <span className="text-lg font-display font-extrabold text-[#E8913C]">60%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
