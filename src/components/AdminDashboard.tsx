import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Shield, BarChart3, Users, CheckCircle, Search, Trash2 } from 'lucide-react';
import { User } from 'firebase/auth';
import { fetchAllAttemptsForAdmin, getUserAttempts, ADMIN_EMAIL } from '../firebase';
import { ExamAttempt } from '../types';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User | null;
  onToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  currentUser,
  onToast
}) => {
  const [attempts, setAttempts] = useState<ExamAttempt[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async () => {
    if (!currentUser) return;
    setLoading(true);
    try {
      if (currentUser.email === ADMIN_EMAIL) {
        // Fetch all candidates if permitted
        const all = await fetchAllAttemptsForAdmin();
        if (all.length > 0) {
          setAttempts(all);
        } else {
          // Fallback to current user's attempts
          const mine = await getUserAttempts(currentUser);
          setAttempts(mine);
        }
      } else {
        const mine = await getUserAttempts(currentUser);
        setAttempts(mine);
      }
    } catch (err: any) {
      // If admin root fetch failed due to firestore rule restrictions, load candidate's own records
      try {
        const mine = await getUserAttempts(currentUser);
        setAttempts(mine);
      } catch (innerErr) {
        onToast('Error loading attempts from database', 'error');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen, currentUser]);

  if (!isOpen) return null;

  const filteredAttempts = attempts.filter(a => 
    a.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (a.sectionTitle && a.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalAttempts = attempts.length;
  const avgScore = totalAttempts > 0 
    ? Math.round(attempts.reduce((acc, curr) => acc + curr.percentage, 0) / totalAttempts) 
    : 0;
  const passedCount = attempts.filter(a => a.passed).length;
  const passRate = totalAttempts > 0 ? Math.round((passedCount / totalAttempts) * 100) : 0;

  return (
    <div className="fixed inset-0 z-[200] bg-[#0A0C0E] overflow-y-auto flex flex-col p-6 md:p-12">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 border-b border-[rgba(237,231,220,0.13)] pb-6">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#2E6B72] mb-1">
              Firestore Database Analytics // {currentUser?.email}
            </div>
            <h2 className="text-3xl font-display font-bold uppercase tracking-tight text-[#EDE7DC]">
              Admin Dashboard & Transcript Logs
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              disabled={loading}
              className="px-4 py-2 border border-[rgba(237,231,220,0.13)] rounded-lg text-xs uppercase tracking-wider font-semibold text-[#EDE7DC] hover:border-[#E8913C] hover:text-[#E8913C] transition-colors flex items-center gap-2"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              onClick={onClose}
              className="p-2 border border-[rgba(237,231,220,0.13)] rounded-lg text-[#9EA5A8] hover:text-[#EDE7DC] hover:border-[#EDE7DC] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
            <div className="text-xs uppercase tracking-widest text-[#9EA5A8] font-semibold mb-2">
              Total Submissions
            </div>
            <div className="text-4xl font-display font-extrabold text-[#EDE7DC]">
              {totalAttempts}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
            <div className="text-xs uppercase tracking-widest text-[#9EA5A8] font-semibold mb-2">
              Average Score
            </div>
            <div className="text-4xl font-display font-extrabold text-[#E8913C]">
              {avgScore}%
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#101317] border border-[rgba(237,231,220,0.13)]">
            <div className="text-xs uppercase tracking-widest text-[#9EA5A8] font-semibold mb-2">
              Pass Rate (≥ 60%)
            </div>
            <div className="text-4xl font-display font-extrabold text-[#2E6B72]">
              {passRate}%
            </div>
          </div>
        </div>

        {/* Search & Table */}
        <div className="mb-6 flex justify-between items-center">
          <div className="relative max-w-sm w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6C7378]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by candidate email or section..."
              className="w-full bg-[#101317] border border-[rgba(237,231,220,0.13)] text-[#EDE7DC] text-xs pl-10 pr-4 py-2.5 rounded-lg outline-none focus:border-[#E8913C] transition-colors"
            />
          </div>

          <span className="text-xs font-mono text-[#6C7378]">
            Showing {filteredAttempts.length} of {attempts.length} records
          </span>
        </div>

        {/* Table Container */}
        <div className="rounded-2xl border border-[rgba(237,231,220,0.13)] bg-[#101317] overflow-hidden">
          <div className="grid grid-cols-4 p-4 border-b border-[rgba(237,231,220,0.13)] text-[10px] uppercase tracking-widest text-[#6C7378] font-semibold">
            <div>Candidate Email</div>
            <div>Test Section</div>
            <div>Score / Percentage</div>
            <div className="text-right">Pass Status</div>
          </div>

          {loading ? (
            <div className="p-12 text-center text-xs text-[#9EA5A8]">
              Loading database records...
            </div>
          ) : filteredAttempts.length === 0 ? (
            <div className="p-12 text-center text-xs text-[#9EA5A8]">
              No examination attempts recorded yet.
            </div>
          ) : (
            <div className="divide-y divide-[rgba(237,231,220,0.08)]">
              {filteredAttempts.map((attempt, idx) => (
                <div key={attempt.id || idx} className="grid grid-cols-4 p-4 items-center hover:bg-[#0A0C0E]/50 transition-colors">
                  <div className="text-xs text-[#EDE7DC] font-mono truncate">
                    {attempt.email}
                  </div>
                  <div className="text-xs text-[#9EA5A8] font-sans truncate">
                    {attempt.sectionTitle || 'Full TELC B2 Practice Test'}
                  </div>
                  <div className="text-xs font-mono text-[#EDE7DC]">
                    {attempt.score} / {attempt.total} ({attempt.percentage}%)
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-[9.5px] uppercase tracking-wider font-semibold font-mono ${
                      attempt.passed 
                        ? 'bg-[#2E6B72]/20 text-[#2E6B72] border border-[#2E6B72]/40' 
                        : 'bg-[#c5443c]/20 text-[#c5443c] border border-[#c5443c]/40'
                    }`}>
                      {attempt.passed ? 'PASSED' : 'RETRY'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
