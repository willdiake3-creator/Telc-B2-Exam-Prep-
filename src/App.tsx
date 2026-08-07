import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './firebase';
import { Navbar } from './components/Navbar';
import { PortalHero } from './components/PortalHero';
import { MethodSection } from './components/MethodSection';
import { CardDeck } from './components/CardDeck';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ExamModal } from './components/ExamModal';
import { AdminDashboard } from './components/AdminDashboard';
import { ToastContainer, ToastMessage } from './components/Toast';

export default function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [examOpen, setExamOpen] = useState(false);
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleStartExam = (sectionId?: string) => {
    setSelectedSectionId(sectionId || 'full');
    setExamOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0A0C0E] text-[#EDE7DC] font-sans antialiased selection:bg-[#E8913C] selection:text-[#0A0C0E]">
      <Navbar
        user={currentUser}
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenExam={() => handleStartExam('full')}
        onToast={addToast}
      />

      <PortalHero
        onStartExam={() => handleStartExam('full')}
        onBrowseModules={() => {
          document.getElementById('exams-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <MethodSection />

      <CardDeck
        onStartSpecificModule={(secId) => handleStartExam(secId)}
        onStartFullExam={() => handleStartExam('full')}
      />

      {/* Overview Stats Bar */}
      <section id="roster" className="py-20 px-6 md:px-12 bg-[#0A0C0E]">
        <div className="max-w-7xl mx-auto space-y-0">
          <div className="border-t border-[rgba(237,231,220,0.13)] flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 hover:bg-[#101317]/50 transition-colors px-4 rounded-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E8913C]">
              Items in Exam Blueprint
            </span>
            <span className="text-4xl md:text-6xl font-display font-extrabold">
              50 Questions
            </span>
            <span className="text-xs uppercase tracking-widest text-[#6C7378] font-mono">
              Auto-Scored against Lösungsschlüssel
            </span>
          </div>

          <div className="border-t border-[rgba(237,231,220,0.13)] flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 hover:bg-[#101317]/50 transition-colors px-4 rounded-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#2E6B72]">
              Maximum Points
            </span>
            <span className="text-4xl md:text-6xl font-display font-extrabold">
              300 Points
            </span>
            <span className="text-xs uppercase tracking-widest text-[#6C7378] font-mono">
              Schriftlich (225) + Mündlich (75)
            </span>
          </div>

          <div className="border-t border-b border-[rgba(237,231,220,0.13)] flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 hover:bg-[#101317]/50 transition-colors px-4 rounded-xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#E8913C]">
              Passing Standard
            </span>
            <span className="text-4xl md:text-6xl font-display font-extrabold">
              60% Pass Rate
            </span>
            <span className="text-xs uppercase tracking-widest text-[#6C7378] font-mono">
              Certificate B2 Recognized Worldwide
            </span>
          </div>
        </div>
      </section>

      <Footer
        onStartExam={() => handleStartExam('full')}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      {/* Modals & Toasts */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        currentUser={currentUser}
        onToast={addToast}
      />

      <ExamModal
        isOpen={examOpen}
        onClose={() => setExamOpen(false)}
        currentUser={currentUser}
        initialSectionId={selectedSectionId}
        onToast={addToast}
        onOpenAuth={() => setAuthModalOpen(true)}
      />

      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        currentUser={currentUser}
        onToast={addToast}
      />

      <ToastContainer toasts={toasts} onDismiss={removeToast} />
    </div>
  );
}
