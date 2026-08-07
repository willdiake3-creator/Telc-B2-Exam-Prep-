import React, { useState } from 'react';
import { X, LogIn, UserPlus, Sparkles } from 'lucide-react';
import { User } from 'firebase/auth';
import { loginWithEmail, registerWithEmail, loginWithGoogle } from '../firebase';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onToast
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleEmailAuth = async (isSignUp: boolean) => {
    if (!email || !password) {
      setErrorMsg('Please enter both email and password.');
      return;
    }
    setErrorMsg(null);
    setLoading(true);

    try {
      if (isSignUp) {
        await registerWithEmail(email, password);
        onToast('Account created successfully!', 'success');
      } else {
        await loginWithEmail(email, password);
        onToast('Signed in successfully!', 'success');
      }
      onClose();
    } catch (err: any) {
      const msg = err.message ? err.message.replace('Firebase: ', '') : 'Authentication failed';
      setErrorMsg(msg);
      onToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setErrorMsg(null);
    setLoading(true);

    try {
      await loginWithGoogle();
      onToast('Signed in with Google!', 'success');
      onClose();
    } catch (err: any) {
      const msg = err.message ? err.message.replace('Firebase: ', '') : 'Google Auth failed';
      setErrorMsg(msg);
      onToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[300] bg-[#0A0C0E]/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#101317] border border-[rgba(237,231,220,0.13)] p-8 relative rounded-2xl shadow-2xl animate-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#9EA5A8] hover:text-[#E8913C] transition-colors p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="text-xs uppercase tracking-[0.2em] text-[#E8913C] font-semibold mb-1">
            TELC.B2 // PORTAL ACCESS
          </div>
          <h2 className="text-2xl font-bold font-display uppercase tracking-tight text-[#EDE7DC]">
            Candidate Authentication
          </h2>
          <p className="text-xs text-[#9EA5A8] mt-1">
            Sign in to auto-score your TELC B2 tests and save attempts to your transcript.
          </p>
        </div>

        {errorMsg && (
          <div className="mb-4 p-3 bg-[#c5443c]/10 border border-[#c5443c]/40 rounded-lg text-xs text-[#c5443c]">
            {errorMsg}
          </div>
        )}

        <div className="space-y-4">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#6C7378] font-semibold mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="candidate@example.com"
              className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] focus:border-[#E8913C] text-[#EDE7DC] text-sm px-4 py-3 rounded-lg outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#6C7378] font-semibold mb-1.5">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full bg-[#0A0C0E] border border-[rgba(237,231,220,0.13)] focus:border-[#E8913C] text-[#EDE7DC] text-sm px-4 py-3 rounded-lg outline-none transition-colors"
            />
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            disabled={loading}
            onClick={() => handleEmailAuth(false)}
            className="w-full py-3.5 bg-[#E8913C] text-[#0A0C0E] text-xs font-semibold uppercase tracking-widest rounded-lg hover:bg-[#E8913C]/90 transition-colors flex items-center justify-center gap-2 font-display"
          >
            <LogIn className="w-4 h-4" />
            Sign In to Account
          </button>

          <button
            disabled={loading}
            onClick={() => handleEmailAuth(true)}
            className="w-full py-3.5 border border-[rgba(237,231,220,0.13)] text-[#EDE7DC] text-xs font-semibold uppercase tracking-widest rounded-lg hover:border-[#E8913C] hover:text-[#E8913C] transition-all flex items-center justify-center gap-2 font-display"
          >
            <UserPlus className="w-4 h-4" />
            Create Candidate Account
          </button>

          <div className="flex items-center gap-3 my-2">
            <div className="flex-1 h-px bg-[rgba(237,231,220,0.13)]" />
            <span className="text-[10px] uppercase tracking-widest text-[#6C7378]">OR</span>
            <div className="flex-1 h-px bg-[rgba(237,231,220,0.13)]" />
          </div>

          <button
            disabled={loading}
            onClick={handleGoogleAuth}
            className="w-full py-3.5 border border-[rgba(237,231,220,0.13)] text-[#EDE7DC] text-xs font-semibold uppercase tracking-widest rounded-lg hover:border-[#2E6B72] hover:text-[#2E6B72] transition-all flex items-center justify-center gap-2 font-display"
          >
            <Sparkles className="w-4 h-4 text-[#2E6B72]" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};
