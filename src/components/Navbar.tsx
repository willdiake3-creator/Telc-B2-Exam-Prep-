import React, { useState } from 'react';
import { User } from 'firebase/auth';
import { Shield, LogOut, Menu, X, BookOpen, BarChart2 } from 'lucide-react';
import { ADMIN_EMAIL, logout } from '../firebase';

interface NavbarProps {
  user: User | null;
  onOpenAuth: () => void;
  onOpenAdmin: () => void;
  onOpenExam: () => void;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  onOpenAuth,
  onOpenAdmin,
  onOpenExam,
  onToast
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAdmin = user && user.email === ADMIN_EMAIL;

  const handleLogout = async () => {
    try {
      await logout();
      onToast('Signed out successfully', 'info');
    } catch (err) {
      onToast('Error signing out', 'error');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-[60px] bg-[#0A0C0E]/80 backdrop-blur-md border-b border-[rgba(237,231,220,0.13)] z-[100] px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="#" className="font-display font-extrabold text-base tracking-tight text-[#EDE7DC]">
          TELC<span className="text-[#E8913C]">.</span>B2
        </a>
        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-[#101317] border border-[rgba(237,231,220,0.13)] text-[9.5px] uppercase tracking-widest text-[#2E6B72] font-semibold">
          Übungstest 1
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#method" className="text-[10.5px] uppercase tracking-[0.15em] font-semibold text-[#9EA5A8] hover:text-[#E8913C] transition-colors">
          Method
        </a>
        <a href="#exams-section" className="text-[10.5px] uppercase tracking-[0.15em] font-semibold text-[#9EA5A8] hover:text-[#E8913C] transition-colors">
          Modules
        </a>
        <a href="#roster" className="text-[10.5px] uppercase tracking-[0.15em] font-semibold text-[#9EA5A8] hover:text-[#E8913C] transition-colors">
          Standards
        </a>

        {isAdmin && (
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.15em] font-semibold text-[#2E6B72] hover:text-[#E8913C] transition-colors"
          >
            <Shield className="w-3.5 h-3.5" />
            Admin Dashboard
          </button>
        )}

        <button
          onClick={onOpenExam}
          className="flex items-center gap-1.5 text-[10.5px] uppercase tracking-[0.15em] font-semibold text-[#E8913C] hover:text-[#EDE7DC] transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5" />
          Start Simulator
        </button>

        {user ? (
          <div className="flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#101317] border border-[#2E6B72]/40">
            <div className="w-6 h-6 rounded-full bg-[#2E6B72] text-[#EDE7DC] flex items-center justify-center text-[10px] font-bold">
              {(user.email || 'U')[0].toUpperCase()}
            </div>
            <span className="text-[10.5px] font-mono text-[#9EA5A8] truncate max-w-[120px]">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              title="Sign Out"
              className="text-[#9EA5A8] hover:text-[#E8913C] transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <button
            onClick={onOpenAuth}
            className="text-[10.5px] uppercase tracking-[0.15em] font-semibold border border-[#EDE7DC] px-4 py-1.5 rounded-full hover:bg-[#EDE7DC] hover:text-[#0A0C0E] transition-all"
          >
            Portal Access
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center gap-3">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-[#EDE7DC]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[60px] left-0 w-full bg-[#101317] border-b border-[rgba(237,231,220,0.13)] p-6 flex flex-col space-y-4 animate-in slide-in-from-top-2">
          <a
            href="#method"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-[#9EA5A8] hover:text-[#E8913C]"
          >
            Method
          </a>
          <a
            href="#exams-section"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-[#9EA5A8] hover:text-[#E8913C]"
          >
            Modules
          </a>
          <a
            href="#roster"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-[#9EA5A8] hover:text-[#E8913C]"
          >
            Standards
          </a>

          {isAdmin && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdmin();
              }}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#2E6B72]"
            >
              <Shield className="w-4 h-4" /> Admin Dashboard
            </button>
          )}

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenExam();
            }}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#E8913C]"
          >
            <BookOpen className="w-4 h-4" /> Start Simulator
          </button>

          {user ? (
            <div className="pt-4 border-t border-[rgba(237,231,220,0.13)] flex items-center justify-between">
              <span className="text-xs font-mono text-[#9EA5A8]">{user.email}</span>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 text-xs text-[#c5443c]"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-3 bg-[#E8913C] text-[#0A0C0E] text-xs font-semibold uppercase tracking-widest rounded-lg"
            >
              Portal Access
            </button>
          )}
        </div>
      )}
    </nav>
  );
};
