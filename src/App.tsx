import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SubjectHub from './components/SubjectHub';
import TopicModule from './components/TopicModule';
import { GlobalSearch } from './components/GlobalSearch';
import AiTutorSidebar from './components/AiTutorSidebar';
import { AdvancedCalculator } from './components/AdvancedCalculator';

const FocusMode = lazy(() => import('./components/FocusMode'));
const StudyPlanner = lazy(() => import('./components/StudyPlanner'));
const FormulaBank = lazy(() => import('./components/FormulaBank'));
const DerivationsHub = lazy(() => import('./components/DerivationsHub').then(m => ({ default: m.DerivationsHub })));
const SpacedRepetition = lazy(() => import('./components/SpacedRepetition'));
const Visualizer3D = lazy(() => import('./components/Visualizer3D'));
const SocraticSolver = lazy(() => import('./components/SocraticSolver'));
const UploadHub = lazy(() => import('./components/UploadHub'));
const MindMap = lazy(() => import('./components/MindMap'));
const AiHub = lazy(() => import('./components/AiHub'));
const EssayGrader = lazy(() => import('./components/EssayGrader').then(m => ({ default: m.EssayGrader })));
const MockExam = lazy(() => import('./components/MockExam').then(m => ({ default: m.MockExam })));
const PredictorHub = lazy(() => import('./components/PredictorHub').then(m => ({ default: m.PredictorHub })));
const SatDashboard = lazy(() => import('./components/SatDashboard').then(m => ({ default: m.SatDashboard })));
const SatMockExam = lazy(() => import('./components/SatMockExam').then(m => ({ default: m.SatMockExam })));
const Grapher2D = lazy(() => import('./components/Grapher2D'));
const CalculusSolver = lazy(() => import('./components/CalculusSolver').then(m => ({ default: m.CalculusSolver })));
import { GamificationProvider, useGamification } from './context/GamificationContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginScreen } from './components/LoginScreen';
import { UpdatePasswordScreen } from './components/UpdatePasswordScreen';
import { SessionExpiredScreen } from './components/SessionExpiredScreen';
import { supabase } from './utils/supabase';
import { StudyProgressProvider, useStudyProgress } from './context/StudyProgressContext';
import { Search, Bell, Settings, User, X, Check, Activity, Clock, Sparkles, Flame, Trophy, Calculator, Menu, ChevronDown, ShieldAlert } from 'lucide-react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { AdminDashboard } from './components/AdminDashboard';
import { PremiumProvider, usePremium } from './context/PremiumContext';
import { ProUpgradeScreen } from './components/ProUpgradeScreen';
import { initializeFlutterwavePayment } from './utils/flutterwave';
import './index.css';
import './gamification.css';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [activeSatModule, setActiveSatModule] = useState<'Reading & Writing' | 'Math' | null>(null);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isAiTutorOpen, setIsAiTutorOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSessionExpired, setIsSessionExpired] = useState(false);

  // Settings State
  const [studyGoal, setStudyGoal] = useState(25);
  const [geminiApiKey, setGeminiApiKey] = useState(() => localStorage.getItem('lumen_gemini_key') || '');
  const [fullWidth, setFullWidth] = useState(() => localStorage.getItem('lumen_full_width') !== 'false');

  useEffect(() => {
    localStorage.setItem('lumen_full_width', String(fullWidth));
  }, [fullWidth]);

  const [activeMenu, setActiveMenu] = useState<'notifications' | 'settings' | 'profile' | 'profile_modal' | 'stats_modal' | null>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu === 'profile' && profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu]);
  
  const { level, xp, streak, dailyGoalProgress, dailyGoalTarget, addXP } = useGamification();
  const { currentUser, signOut, recoveryMode, clearRecoveryMode } = useAuth();
  const { recordTopicOpen, recordTopicClose, isSatMode } = useStudyProgress();
  const { freeInsights, isPro, upgradeToPro } = usePremium();
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const isAdmin = currentUser?.email === 'miraclechimdindu2008@gmail.com' || currentUser?.email === 'miraclechimdindu2025@gmail.com';

  useEffect(() => {
    if (currentUser) {
      setShowLoginModal(false);
    }
  }, [currentUser]);

  // Track how long the user has a topic open
  const activeTopicRef = useRef<{ id: string; subject: string } | null>(null);

  const openTopic = (topicId: string, subject: string, label?: string) => {
    // Close previous if open
    if (activeTopicRef.current) recordTopicClose();
    activeTopicRef.current = { id: topicId, subject };
    recordTopicOpen(topicId, subject, label);
  };

  const closeTopic = () => {
    if (activeTopicRef.current) {
      recordTopicClose();
      activeTopicRef.current = null;
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (geminiApiKey) {
      localStorage.setItem('lumen_gemini_key', geminiApiKey);
    } else {
      localStorage.removeItem('lumen_gemini_key');
    }
  }, [geminiApiKey]);

  // Save study time if user closes/hides the tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) closeTopic();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Inactivity Tracker
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const INACTIVITY_LIMIT = 30 * 60 * 1000; // 30 minutes

    const resetTimer = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (!isSessionExpired) {
        timeoutRef.current = setTimeout(() => {
          setIsSessionExpired(true);
          signOut(); // Force sign out as requested (Option B)
        }, INACTIVITY_LIMIT);
      }
    };

    resetTimer();
    const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
    
    events.forEach(event => window.addEventListener(event, resetTimer));

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [isSessionExpired, signOut]);

  const handleTabChange = (tabId: string) => {
    closeTopic();
    setActiveTab(tabId);
    setActiveTopic(null);
    setIsMobileMenuOpen(false); // Close mobile menu when changing tabs
  };

  const renderContent = () => {
    if (isSessionExpired) {
      return (
        <SessionExpiredScreen 
          onLoginClick={() => {
            setIsSessionExpired(false);
            setShowLoginModal(true);
          }} 
        />
      );
    }

    const isPremiumFeature = ['upload', 'socratic', 'mindmap', 'visualizer', 'ai_hub', 'essay_grader', 'mock_exam', 'predictor_hub'].includes(activeTab);
    
    // TEMPORARILY DISABLED PREMIUM BARRIER AS PER USER REQUEST
    if (false && isPremiumFeature && freeInsights === 0 && !isPro) {
      const featureNames: Record<string, string> = {
        'upload': 'Upload Hub',
        'socratic': 'Socratic Solver',
        'mindmap': 'AI Knowledge Map',
        'visualizer': '3D Visualizer',
        'ai_hub': 'AI Study Hub',
        'essay_grader': 'Essay Grader',
        'mock_exam': 'Mock Exam Generator',
        'predictor_hub': 'Future Predictor'
      };
      const handleUpgradeClick = () => {
        if (!currentUser) {
          setShowLoginModal(true);
        } else {
          initializeFlutterwavePayment({
            email: currentUser.email || '',
            name: currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Lumen User',
            amount: 24.99,
            onSuccess: () => {
              upgradeToPro();
              alert("Payment successful! Welcome to Lumen Pro.");
            },
            onClose: () => {
              console.log("Payment modal closed");
            }
          });
        }
      };

      return (
        <ProUpgradeScreen 
          featureName={featureNames[activeTab] || 'Premium Feature'}
          isGuest={!currentUser}
          onUpgradeClick={handleUpgradeClick} 
        />
      );
    }

    if (activeSatModule) {
      return <SatMockExam domain={activeSatModule} onExit={() => setActiveSatModule(null)} />;
    }

    if (activeTab === 'dashboard') {
      if (isSatMode) {
        return <SatDashboard onStartModule={(domain) => setActiveSatModule(domain)} />;
      }
      return (
        <Dashboard
          userName={currentUser?.user_metadata?.full_name || currentUser?.email?.split('@')[0] || 'Scholar'}
          studyGoal={studyGoal}
          onTopicSelect={(topicId, subject) => {
            setActiveTab(subject);
            setActiveTopic(topicId);
            openTopic(topicId, subject);
          }}
        />
      );
    }
    if (activeTab === 'upload') return <UploadHub />;
    if (activeTab === 'admin' && isAdmin) return <AdminDashboard />;
    if (activeTab === 'planner') return <StudyPlanner />;
    if (activeTab === 'socratic') return <SocraticSolver />;
    if (activeTab === 'mindmap') return <MindMap onTopicSelect={(topicId, subject) => {
      setActiveTab(subject);
      setActiveTopic(topicId);
      openTopic(topicId, subject);
    }} />;
    if (activeTab === 'formula_blog') return <FormulaBank />;
    if (activeTab === 'calculus_solver') return <CalculusSolver />;
    if (activeTab === 'derivations') return <DerivationsHub />;
    if (activeTab === 'flashcards') return <SpacedRepetition />;
    if (activeTab === 'visualizer') return <Visualizer3D />;
    if (activeTab === 'ai_hub') return <AiHub />;
    if (activeTab === 'essay_grader') return <EssayGrader />;
    if (activeTab === 'mock_exam') return <MockExam />;
    if (activeTab === 'predictor_hub') return <PredictorHub />;
    if (activeTab === 'grapher') return <Grapher2D />;

    if (activeTab === 'math') {
      if (activeTopic) return <TopicModule topicId={activeTopic} />;
      return <SubjectHub subject="mathematics" onTopicSelect={(id) => { setActiveTopic(id); openTopic(id, 'math'); }} />;
    }
    if (activeTab === 'physics') {
      if (activeTopic) return <TopicModule topicId={activeTopic} />;
      return <SubjectHub subject="physics" onTopicSelect={(id) => { setActiveTopic(id); openTopic(id, 'physics'); }} />;
    }
    if (activeTab === 'chemistry') {
      if (activeTopic) return <TopicModule topicId={activeTopic} />;
      return <SubjectHub subject="chemistry" onTopicSelect={(id) => { setActiveTopic(id); openTopic(id, 'chemistry'); }} />;
    }
    if (activeTab === 'engineering') {
      if (activeTopic) return <TopicModule topicId={activeTopic} />;
      return <SubjectHub subject="engineering" onTopicSelect={(id) => { setActiveTopic(id); openTopic(id, 'engineering'); }} />;
    }
    if (activeTab === 'biology') {
      if (activeTopic) return <TopicModule topicId={activeTopic} />;
      return <SubjectHub subject="biology" onTopicSelect={(id) => { setActiveTopic(id); openTopic(id, 'biology'); }} />;
    }

    return (
      <div className="empty-state luxury-card">
        <h2>Coming Soon</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
          This module is under construction.
        </p>
        <button className="gold-btn mt-4" onClick={() => setActiveTopic(null)}>
          Return to Hub
        </button>
      </div>
    );
  };

  const tabLabel = (id: string) => {
    const map: Record<string, string> = {
      math: 'Mathematics', physics: 'Physics', chemistry: 'Chemistry',
      biology: 'Biology', ai_hub: 'AI Hub', grapher: '2D Grapher',
      mindmap: 'Knowledge Map', formula_blog: 'Formula Bank',
      calculus_solver: 'Calculus Solver',
      essay_grader: 'Essay Grader', mock_exam: 'Mock Exam', predictor_hub: 'Predictor Hub',
      derivations: 'Derivations', socratic: 'Socratic Solver',
      planner: 'Study Planner', upload: 'AI Upload Hub',
      flashcards: 'Flashcards', visualizer: '3D Visualizer',
      dashboard: 'Dashboard', admin: 'Admin Panel'
    };
    return map[id] || id;
  };


  return (
    <div className={`app-container ${isFocusMode ? 'focus-mode-active' : ''} ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} data-layout={fullWidth ? 'full' : 'constrained'}>
      {!isFocusMode && (

        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => {
            handleTabChange(tab);
            setActiveSatModule(null);
          }}
          onFocusModeToggle={() => setIsFocusMode(!isFocusMode)}
          isFocusMode={isFocusMode}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(d => !d)}
          onCalculatorToggle={() => setIsCalculatorOpen(c => !c)}
          isAdmin={isAdmin}
        />
      )}

      <main className="main-content" onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}>
        {!isFocusMode && (
          <header className="topbar">
            <button className="mobile-menu-btn" onClick={(e) => { e.stopPropagation(); setIsMobileMenuOpen(!isMobileMenuOpen); }}>
              <Menu size={20} />
            </button>
            <GlobalSearch onSelect={(subject, topicId) => {
              setActiveTab(subject);
              setActiveTopic(topicId);
            }} />

            <div className="gamification-header">
              <div className="stat-pill streak">
                <Flame size={16} /> {streak} Day Streak
              </div>
              <div className="stat-pill level">
                <Trophy size={16} /> Lvl {level}
                <div className="xp-bar-mini">
                  <div className="xp-fill-mini" style={{ width: `${(xp % 500) / 500 * 100}%` }}></div>
                </div>
              </div>
              <div className="stat-pill daily-goal">
                <span>Daily XP: {dailyGoalProgress}/{dailyGoalTarget}</span>
              </div>
            </div>

            <div className="user-controls-interactive">
              <div className="topbar-dropdown-wrap">
                <button 
                  className={`icon-btn ${activeMenu === 'notifications' ? 'active' : ''}`}
                  onClick={() => setActiveMenu(activeMenu === 'notifications' ? null : 'notifications')}
                >
                  <Bell size={18} />
                  <span className="notification-dot" />
                </button>
                {activeMenu === 'notifications' && (
                  <div className="topbar-dropdown">
                    <div className="dropdown-header">
                      <h4>Notifications</h4>
                    </div>
                    <div className="dropdown-item">
                      <div className="dd-icon" style={{ color: '#f59e0b', background: 'rgba(245,158,11,0.1)' }}><Clock size={14} /></div>
                      <div>
                        <div className="dd-title">Upcoming Session</div>
                        <div className="dd-desc">Chemistry (Spectroscopy) in 15 mins</div>
                      </div>
                    </div>
                    <div className="dropdown-item">
                      <div className="dd-icon" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)' }}><Activity size={14} /></div>
                      <div>
                        <div className="dd-title">Streak Protected</div>
                        <div className="dd-desc">You've hit 12 days in a row!</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                className={`icon-btn ${isCalculatorOpen ? 'active' : ''}`}
                onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
                title="Advanced Calculator"
              >
                <Calculator size={18} />
              </button>

              <div className="topbar-dropdown-wrap" ref={profileDropdownRef}>
                {!currentUser ? (
                  <button className="gold-btn" style={{ padding: '8px 16px', fontSize: 13 }} onClick={() => setShowLoginModal(true)}>
                    Sign In
                  </button>
                ) : (
                  <>
                    <button 
                      className={`profile-btn ${activeMenu === 'profile' ? 'active' : ''}`}
                      onClick={() => setActiveMenu(activeMenu === 'profile' ? null : 'profile')}
                    >
                      <div className="avatar">
                        {(currentUser.user_metadata?.full_name?.[0] || currentUser.email?.[0] || 'S').toUpperCase()}
                      </div>
                      <div className="profile-details">
                        <span className="profile-name" style={{ fontWeight: 600 }}>{currentUser.user_metadata?.full_name || currentUser.email || 'Scholar'}</span>
                        <span className="profile-level" style={{ fontSize: 11, color: 'var(--color-accent)' }}>Lvl {level} ✦ {xp} XP</span>
                      </div>
                      <ChevronDown size={14} style={{ marginLeft: 4, flexShrink: 0, color: 'var(--color-text-muted)' }} />
                    </button>
                    {activeMenu === 'profile' && (
                      <div className="topbar-dropdown profile-dropdown">
                        <div className="dropdown-header">
                          <h4>{currentUser.user_metadata?.full_name || currentUser.email?.split('@')[0] || 'Scholar'}</h4>
                          <p className="dd-subtitle">Lumen Academic</p>
                        </div>
                        <button className="dropdown-item" onClick={() => setActiveMenu('profile_modal')}>My Profile</button>
                        <button className="dropdown-item" onClick={() => setActiveMenu('stats_modal')}>Progress Stats</button>
                        <button className="dropdown-item" onClick={() => setActiveMenu('settings')}>Settings</button>
                        <div style={{ height: 1, background: 'var(--color-border)', margin: '4px 0' }} />
                        <button className="dropdown-item" style={{ color: '#ef4444' }} onClick={() => { signOut(); setActiveMenu(null); }}>Sign Out</button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </header>
        )}

        <div className="content-area page-wrapper anim-fade" key={`${activeTab}-${activeTopic || 'none'}`}>
          {!isFocusMode && activeTopic && (
            <div className="breadcrumbs">
              <button onClick={() => setActiveTopic(null)} className="breadcrumb-link">
                {tabLabel(activeTab)}
              </button>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">{activeTopic.replace(/_/g, ' ')}</span>
            </div>
          )}
          <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', padding: '100px', color: 'var(--color-text-muted)' }}>Loading...</div>}>
            {renderContent()}
          </Suspense>
        </div>
      </main>

      {activeMenu === 'settings' && (
        <div className="modal-overlay">
          <div className="settings-modal luxury-card anim-fade">
            <div className="modal-header">
              <h2>Platform Settings</h2>
              <button className="icon-btn" onClick={() => setActiveMenu(null)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="form-group">
                <label>Account Email</label>
                <input 
                  type="text" 
                  value={currentUser?.email || ''} 
                  disabled
                  className="settings-input"
                  style={{ opacity: 0.7 }}
                />
              </div>

              <div className="form-group" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--color-border)' }}>
                <label style={{ margin: 0 }}>Full-Width Layout</label>
                <button 
                  className={`gold-btn ${fullWidth ? 'active' : ''}`} 
                  onClick={() => setFullWidth(!fullWidth)}
                  style={{ padding: '6px 12px', minWidth: 60, background: fullWidth ? 'var(--color-accent)' : 'var(--color-base-alt)', color: fullWidth ? '#000' : 'var(--color-text)' }}
                >
                  {fullWidth ? 'ON' : 'OFF'}
                </button>
              </div>

              <div className="form-group" style={{ marginTop: 16 }}>
                <label>Weekly Study Goal (Hours)</label>
                <input 
                  type="number" 
                  value={studyGoal} 
                  onChange={(e) => setStudyGoal(Number(e.target.value))}
                  min="1"
                  max="100"
                  className="settings-input"
                />
              </div>

              <div className="form-group">
                <label>Premium AI: Gemini API Key (Optional)</label>
                <input 
                  type="password" 
                  value={geminiApiKey} 
                  onChange={(e) => setGeminiApiKey(e.target.value)}
                  placeholder="AIzaSy..."
                  className="settings-input"
                />
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 4 }}>
                  Add a free Google Gemini key to unlock flawless AI summarization, flashcards, and math extraction from your PDFs.
                </p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="gold-btn" onClick={() => setActiveMenu(null)}>
                <Check size={16} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'profile_modal' && (
        <div className="modal-overlay" onClick={() => setActiveMenu(null)}>
          <div className="settings-modal luxury-card anim-fade" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>My Profile</h2>
              <button className="icon-btn" onClick={() => setActiveMenu(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body" style={{ alignItems: 'center', textAlign: 'center' }}>
              <div className="avatar" style={{ width: 80, height: 80, fontSize: 32, marginBottom: 16 }}>
                {(currentUser?.user_metadata?.full_name?.[0] || currentUser?.email?.[0] || 'S').toUpperCase()}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {currentUser?.user_metadata?.full_name || currentUser?.email?.split('@')[0] || 'Scholar'}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>{currentUser?.email}</p>
              
              <div style={{ display: 'flex', gap: 24, marginTop: 24, width: '100%', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: 'var(--color-accent)' }}>{level}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Level</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#ef4444' }}>{streak}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Day Streak</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#3b82f6' }}>{xp}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Total XP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'stats_modal' && (
        <div className="modal-overlay" onClick={() => setActiveMenu(null)}>
          <div className="settings-modal luxury-card anim-fade" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Progress Stats</h2>
              <button className="icon-btn" onClick={() => setActiveMenu(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{ padding: 16, background: 'var(--color-base)', borderRadius: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Daily Goal</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-accent)' }}>{dailyGoalProgress} / {dailyGoalTarget} XP</span>
                </div>
                <div style={{ height: 8, background: 'var(--color-base-alt)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${Math.min(100, (dailyGoalProgress / dailyGoalTarget) * 100)}%`, background: 'var(--color-accent)', borderRadius: 4 }} />
                </div>
                <p style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 12, textAlign: 'center' }}>
                  Keep learning to reach your daily goal!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeMenu === 'notifications' && (
        <div 
          className="click-outside-overlay" 
          onClick={() => setActiveMenu(null)}
          style={{ position: 'fixed', inset: 0, zIndex: 99 }}
        />
      )}

      <AiTutorSidebar isOpen={isAiTutorOpen} onClose={() => setIsAiTutorOpen(false)} />
      <AdvancedCalculator isOpen={isCalculatorOpen} onClose={() => setIsCalculatorOpen(false)} />

      {!isAiTutorOpen && !isFocusMode && (
        <button 
          className="global-ai-btn" 
          onClick={() => setIsAiTutorOpen(true)}
          title="Ask LUMEN-X"
        >
          <Sparkles size={24} />
        </button>
      )}

      {(showLoginModal || recoveryMode) && (
        <div className="login-modal-overlay anim-fade">
          {/* Animated floating orbs */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="login-orb"
              style={{
                width: `${8 + i * 5}px`,
                height: `${8 + i * 5}px`,
                left: `${8 + i * 12}%`,
                bottom: `-${20 + i * 5}px`,
                background: i % 3 === 0 ? 'var(--color-accent)' : i % 3 === 1 ? '#6366f1' : '#ec4899',
                animationDuration: `${8 + i * 2.5}s`,
                animationDelay: `${i * 1.2}s`,
                opacity: 0.7,
              }}
            />
          ))}
          {recoveryMode ? (
            <UpdatePasswordScreen 
              onSuccess={() => { clearRecoveryMode(); setShowLoginModal(false); }} 
              onClose={() => { clearRecoveryMode(); setShowLoginModal(false); }} 
            />
          ) : (
            <LoginScreen onClose={() => setShowLoginModal(false)} />
          )}
        </div>
      )}

      <style>{`
        .login-modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: radial-gradient(ellipse at 20% 50%, rgba(212,175,55,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.08) 0%, transparent 60%),
                      linear-gradient(135deg, #0a0a0f 0%, #0d0d18 40%, #0a0f1a 100%);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(0px);
          overflow: hidden;
          animation: loginOverlayIn 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes loginOverlayIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .login-modal-close {
          position: absolute;
          top: 32px;
          right: 32px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
          z-index: 10000;
        }
        
        .login-modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .user-controls-interactive {
          display: flex; align-items: center; gap: 12px; position: relative; z-index: 100;
        }
        .topbar-dropdown-wrap { position: relative; }
        .notification-dot {
          position: absolute; top: 8px; right: 8px; width: 6px; height: 6px;
          border-radius: 50%; background: #ef4444; border: 2px solid var(--color-base);
        }
        .icon-btn.active, .avatar.active {
          border-color: var(--color-accent);
          color: var(--color-accent);
        }
        .topbar-dropdown {
          position: absolute; top: calc(100% + 10px); right: 0;
          width: 280px; background: var(--color-surface);
          border: var(--border-soft); border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-md); z-index: 110;
          animation: fadeSlideIn 0.2s ease;
        }
        .profile-dropdown { width: 220px; }
        .dropdown-header {
          padding: 14px 16px; border-bottom: var(--border-soft);
        }
        .dropdown-header h4 { font-family: var(--font-display); font-size: 13px; font-weight: 600; color: var(--color-text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .dd-subtitle { font-size: 11px; color: var(--color-text-muted); margin-top: 2px; }
        .dropdown-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 16px; border-bottom: var(--border-soft);
          background: transparent; width: 100%; border: none; text-align: left;
        }
        .dropdown-item:last-child { border-bottom: none; }
        .dd-icon { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .dd-title { font-size: 13px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .dd-desc { font-size: 11.5px; color: var(--color-text-secondary); margin-top: 2px; line-height: 1.4; }
        .dropdown-item:hover { background: var(--color-base-alt); color: var(--color-text-primary); }
        .dropdown-item.danger { color: #ef4444; }
        .dropdown-item.danger:hover { background: rgba(239,68,68,0.05); }
        .dropdown-divider { height: 1px; background: var(--color-border); }
        .modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center; z-index: 200;
        }
        .settings-modal {
          width: 100%; max-width: 440px; background: var(--color-surface);
          border-radius: var(--border-radius-lg); overflow: hidden;
        }
        .modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 20px 24px; border-bottom: var(--border-soft);
        }
        .modal-header h2 { font-family: var(--font-display); font-size: 18px; font-weight: 600; }
        .modal-body { padding: 24px; display: flex; flex-direction: column; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; }
        .form-group label { font-size: 13px; font-weight: 600; color: var(--color-text-secondary); font-family: var(--font-display); }
        .settings-input {
          padding: 12px 16px; border-radius: var(--border-radius-sm);
          border: 1px solid var(--color-border-strong); background: var(--color-base-alt);
          color: var(--color-text-primary); font-family: var(--font-primary); font-size: 14px;
          outline: none; transition: border-color var(--transition-fast);
        }
        .settings-input:focus { border-color: var(--color-accent); }
        .modal-footer {
          padding: 20px 24px; border-top: var(--border-soft);
          display: flex; justify-content: flex-end; background: var(--color-base-alt);
        }
        .global-ai-btn {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
          color: white;
          border: none;
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .global-ai-btn:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 12px 28px rgba(212, 175, 55, 0.5);
        }
      `}</style>
    </div>
  );
};

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <GamificationProvider>
          <StudyProgressProvider>
            <PremiumProvider>
              <AppContent />
            </PremiumProvider>
          </StudyProgressProvider>
        </GamificationProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
