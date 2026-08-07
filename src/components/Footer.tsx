import React from 'react';
import { ExternalLink, BookOpen } from 'lucide-react';

interface FooterProps {
  onStartExam: () => void;
  onOpenAuth: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onStartExam, onOpenAuth }) => {
  return (
    <footer className="pt-24 pb-12 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E8913C] mb-3">
            Ready to Certify?
          </div>
          <h2 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight text-[#EDE7DC] leading-none mb-4">
            Start Your <br />
            <span className="text-[#E8913C]">TELC B2 Prep</span>
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#9EA5A8] max-w-md leading-relaxed">
            All practice materials follow the official telc Deutsch B2 Übungstest 1 framework. Sign in to track your score history and pass probability.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={onStartExam}
            className="px-8 py-4 bg-[#E8913C] text-[#0A0C0E] text-xs font-bold uppercase tracking-widest font-display rounded-lg hover:bg-[#E8913C]/90 transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4" />
            Launch Practice Test
          </button>
          <a
            href="https://www.telc.net"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-[rgba(237,231,220,0.2)] text-[#EDE7DC] text-xs font-semibold uppercase tracking-widest font-display rounded-lg hover:border-[#2E6B72] hover:text-[#2E6B72] transition-colors flex items-center gap-2"
          >
            telc.net Official
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-[rgba(237,231,220,0.1)] flex flex-col sm:flex-row justify-between items-center text-[10.5px] uppercase tracking-widest text-[#6C7378] font-mono gap-4">
        <div>© 2026 CERTIFIED TELC B2 PREP. ALL RIGHTS RESERVED.</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#EDE7DC]">Leseverstehen</a>
          <a href="#" className="hover:text-[#EDE7DC]">Sprachbausteine</a>
          <a href="#" className="hover:text-[#EDE7DC]">Hörverstehen</a>
        </div>
      </div>

      <div className="text-[25vw] font-display font-extrabold uppercase leading-none text-[#EDE7DC]/[0.02] text-center pointer-events-none select-none mt-12">
        TELC.B2
      </div>
    </footer>
  );
};
