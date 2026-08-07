import React from 'react';
import { CheckCircle, Target, Award, Clock } from 'lucide-react';

export const MethodSection: React.FC = () => {
  return (
    <section id="method" className="py-24 px-6 md:px-12 bg-[#0A0C0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#2E6B72] mb-4">
              Methodology & Structure
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold uppercase tracking-tight text-[#EDE7DC] leading-tight mb-8">
              Why Official <br />
              <span className="text-[#E8913C]">TELC B2 Standard</span> Matters
            </h2>
            <p className="text-sm md:text-base text-[#9EA5A8] font-sans leading-relaxed mb-8">
              TELC Deutsch B2 tests higher-level language proficiency required for university admission, medical recognition, and professional careers in Germany, Austria, and Switzerland.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
                <div className="p-2.5 rounded-lg bg-[#E8913C]/10 text-[#E8913C] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold uppercase text-[#EDE7DC] mb-1">
                    Authentic Item Pool
                  </h4>
                  <p className="text-xs text-[#9EA5A8] leading-relaxed">
                    Every task in this simulator corresponds verbatim to the official telc GmbH Übungstest 1 blueprint, ensuring true exam difficulty.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
                <div className="p-2.5 rounded-lg bg-[#2E6B72]/10 text-[#2E6B72] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold uppercase text-[#EDE7DC] mb-1">
                    Auto-Scoring & Rationale Keys
                  </h4>
                  <p className="text-xs text-[#9EA5A8] leading-relaxed">
                    Instantly evaluate your answers against the official Lösungsschlüssel and read detailed grammatical and contextual explanations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
                <div className="p-2.5 rounded-lg bg-[#E8913C]/10 text-[#E8913C] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold uppercase text-[#EDE7DC] mb-1">
                    Timed Exam Simulation
                  </h4>
                  <p className="text-xs text-[#9EA5A8] leading-relaxed">
                    Build time management skills across the 90-minute Leseverstehen/Sprachbausteine blocks and 20-minute Hörverstehen tests.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden border border-[rgba(237,231,220,0.13)] bg-[#101317] relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                alt="Students studying for TELC"
                className="w-full h-full object-cover brightness-50 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C0E] via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-[#101317]/90 backdrop-blur-md border border-[rgba(237,231,220,0.13)]">
                <div className="text-[10px] uppercase tracking-widest text-[#2E6B72] font-semibold mb-2">
                  Official Passing Threshold
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-display font-extrabold text-[#E8913C]">60%</span>
                  <span className="text-xs text-[#9EA5A8]">Minimum 180 / 300 total points</span>
                </div>
                <div className="mt-3 text-xs text-[#6C7378]">
                  Candidates must pass both written (Schriftliche Prüfung) and oral (Mündliche Prüfung) sub-sections.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
