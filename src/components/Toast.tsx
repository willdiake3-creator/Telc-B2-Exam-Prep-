import React from 'react';
import { CheckCircle2, AlertCircle, X, Info } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-[500] flex flex-col gap-3 max-w-sm w-full px-4 pointer-events-none">
      {toasts.map((toast) => {
        const isSuccess = toast.type === 'success';
        const isError = toast.type === 'error';

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-start gap-3 p-4 rounded-xl border backdrop-blur-xl shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5 ${
              isSuccess
                ? 'bg-[#101317]/95 border-[#2E6B72]/50 text-[#EDE7DC]'
                : isError
                ? 'bg-[#101317]/95 border-[#c5443c]/50 text-[#EDE7DC]'
                : 'bg-[#101317]/95 border-[#E8913C]/50 text-[#EDE7DC]'
            }`}
          >
            <div className="mt-0.5 shrink-0">
              {isSuccess && <CheckCircle2 className="w-5 h-5 text-[#2E6B72]" />}
              {isError && <AlertCircle className="w-5 h-5 text-[#c5443c]" />}
              {!isSuccess && !isError && <Info className="w-5 h-5 text-[#E8913C]" />}
            </div>
            <div className="flex-1 text-xs font-sans leading-relaxed tracking-wide">
              {toast.message}
            </div>
            <button
              onClick={() => onDismiss(toast.id)}
              className="text-[#6C7378] hover:text-[#EDE7DC] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
