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
      <section id="roster" className="py-16 px-6 md:px-12 bg-[#0A0C0E] border-t border-[rgba(237,231,220,0.13)]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] space-y-2">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#E8913C]">
              Exam Blueprint Items
            </div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-[#EDE7DC]">
              60 Questions
            </div>
            <div className="text-xs text-[#9EA5A8]">
              Auto-Scored against Official Lösungsschlüssel
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] space-y-2">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#2E6B72]">
              Maximum Points
            </div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-[#EDE7DC]">
              300 Points
            </div>
            <div className="text-xs text-[#9EA5A8]">
              Schriftliche (225) + Mündliche Prüfung (75)
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)] space-y-2">
            <div className="text-xs uppercase tracking-widest font-semibold text-[#E8913C]">
              Official Pass Standard
            </div>
            <div className="text-3xl md:text-4xl font-display font-extrabold text-[#EDE7DC]">
              60% Minimum
            </div>
            <div className="text-xs text-[#9EA5A8]">
              TELC Certificate B2 Recognized Worldwide
            </div>
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
