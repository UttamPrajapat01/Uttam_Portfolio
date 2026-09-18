import React, { useState, useEffect } from 'react';
import { 
  X, 
  Lock, 
  ShieldCheck, 
  Mail, 
  FolderGit2, 
  Layers, 
  Trash2, 
  CheckCircle, 
  AlertCircle,
  KeyRound,
  Server
} from 'lucide-react';
import { ContactMessage } from '../types/portfolio';
import { contactService } from '../services/contactService';
import { projects, skillsList } from '../data/portfolioData';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'inbox' | 'projects' | 'skills' | 'architecture'>('inbox');
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    if (isOpen) {
      loadMessages();
    }
  }, [isOpen]);

  const loadMessages = () => {
    setMessages(contactService.getStoredMessages());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === 'admin123' || passcode === 'uttam2026') {
      setIsAuthenticated(true);
      setAuthError('');
      loadMessages();
    } else {
      setAuthError('Invalid administrator credential passcode. (Use demo passcode: admin123)');
    }
  };

  const handleDeleteMessage = (id: string) => {
    contactService.deleteMessage(id);
    loadMessages();
  };

  const handleMarkAsRead = (id: string) => {
    contactService.markAsRead(id);
    loadMessages();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50 dark:bg-[#090d16]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span>Developer CMS & Administration Console</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 font-semibold">
                  v1.0 Ready
                </span>
              </h2>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Data layer management & contact inquiry hub
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isAuthenticated ? (
            /* Passcode Screen */
            <div className="max-w-md mx-auto py-12 text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                <Lock className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Administrator Authentication
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Access protected content management tools and portfolio inquiries.
                </p>
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2 text-left">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-3 text-left">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Passcode Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={passcode}
                      onChange={(e) => setPasscode(e.target.value)}
                      placeholder="Enter administrator passcode..."
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                    <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400">
                  💡 Hint: Enter <code className="text-blue-600 dark:text-cyan-400 font-mono font-bold">admin123</code> to preview admin controls.
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
                >
                  Unlock Admin Console
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Console */
            <div className="space-y-6">
              {/* Navigation Tabs */}
              <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <button
                  onClick={() => setActiveTab('inbox')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeTab === 'inbox'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Inquiries ({messages.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  <span>Projects ({projects.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeTab === 'skills'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Skills Schema ({skillsList.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                    activeTab === 'architecture'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <Server className="w-3.5 h-3.5" />
                  <span>Backend Architecture</span>
                </button>
              </div>

              {/* Tab 1: Inbox */}
              {activeTab === 'inbox' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      Captured Inquiries
                    </h3>
                    <button
                      onClick={loadMessages}
                      className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    >
                      Refresh
                    </button>
                  </div>

                  {messages.length === 0 ? (
                    <div className="p-8 text-center rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-xs">
                      No inquiries currently in queue. Submit a message through the contact form to see it appear here instantly!
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`p-4 rounded-xl border transition-all ${
                            msg.read
                              ? 'bg-slate-50 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800'
                              : 'bg-blue-50/50 dark:bg-slate-900/80 border-blue-200 dark:border-blue-500/40 shadow-sm'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-900 dark:text-white text-xs">{msg.name}</span>
                                <span className="text-slate-500 dark:text-slate-400 text-[11px] font-mono">&lt;{msg.email}&gt;</span>
                                {!msg.read && (
                                  <span className="w-2 h-2 rounded-full bg-blue-600" title="New unread" />
                                )}
                              </div>
                              <div className="text-xs font-semibold text-blue-700 dark:text-cyan-400 mt-1">
                                {msg.subject}
                              </div>
                            </div>

                            <div className="flex items-center gap-1">
                              {!msg.read && (
                                <button
                                  onClick={() => handleMarkAsRead(msg.id)}
                                  className="p-1 rounded text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400"
                                  title="Mark as read"
                                >
                                  <CheckCircle className="w-4 h-4" />
                                </button>
                              )}
                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="p-1 rounded text-slate-400 hover:text-rose-600 dark:hover:text-rose-400"
                                title="Delete inquiry"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          <p className="mt-2 text-xs text-slate-700 dark:text-slate-300 bg-white dark:bg-black/20 p-2.5 rounded-lg font-mono leading-relaxed border border-slate-200/80 dark:border-transparent">
                            {msg.message}
                          </p>
                          <div className="mt-2 text-[10px] text-slate-500 font-mono">
                            Logged: {new Date(msg.createdAt).toLocaleString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Projects */}
              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Projects are driven dynamically by <code className="text-blue-600 dark:text-cyan-400 font-mono font-semibold">src/data/portfolioData.ts</code>. Ready for ASP.NET Core Web API CRUD operations.
                  </div>
                  <div className="space-y-3">
                    {projects.map((p) => (
                      <div key={p.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-bold text-slate-900 dark:text-white">{p.title}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">{p.category} • {p.technologies.slice(0, 3).join(', ')}</div>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 font-semibold">
                          Active
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Skills */}
              {activeTab === 'skills' && (
                <div className="space-y-4">
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    Schema contains {skillsList.length} verified technical skills across 7 categories without arbitrary percentages.
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {skillsList.map((s) => (
                      <div key={s.id} className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-xs">
                        <div className="font-semibold text-slate-900 dark:text-white">{s.name}</div>
                        <div className="text-[10px] text-slate-500">{s.category}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Backend Architecture */}
              {activeTab === 'architecture' && (
                <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="text-blue-600 dark:text-cyan-400 font-bold">
                    // Future ASP.NET Core Web API + PostgreSQL Integration Spec
                  </div>
                  <div>
                    Controller: <span className="text-blue-700 dark:text-blue-400 font-semibold">[ApiController] Route("api/v1/portfolio")</span>
                  </div>
                  <div>
                    Entity Framework Core DbContext: <span className="text-indigo-600 dark:text-indigo-400 font-semibold">PortfolioDbContext</span>
                  </div>
                  <div>
                    Entities:
                    <ul className="list-disc pl-5 mt-1 space-y-0.5 text-slate-600 dark:text-slate-400">
                      <li>UserProfile (Name, Title, Bio, Contacts)</li>
                      <li>Skills (Name, Category, Description, Icon)</li>
                      <li>Experiences (Company, Role, Period, Responsibilities)</li>
                      <li>Projects (Title, ShortDesc, Category, Features, RepoUrl)</li>
                      <li>Certifications (Title, Org, Date, ProofUrl)</li>
                      <li>ContactMessages (Name, Email, Subject, Body, Timestamp, IsRead)</li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090d16] flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {isAuthenticated ? 'Admin Session Active' : 'Protected Area'}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
          >
            Close Panel
          </button>
        </div>

      </div>
    </div>
  );
};
