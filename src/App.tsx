import { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import FocusMode from './components/FocusMode';
import StudyPlanner from './components/StudyPlanner';
import SubjectHub from './components/SubjectHub';
import FormulaBank from './components/FormulaBank';
import TopicModule from './components/TopicModule';
import { DerivationsHub } from './components/DerivationsHub';
import SpacedRepetition from './components/SpacedRepetition';
import Visualizer3D from './components/Visualizer3D';
import SocraticSolver from './components/SocraticSolver';
import UploadHub from './components/UploadHub';
import MindMap from './components/MindMap';
import AiHub from './components/AiHub';
import Grapher2D from './components/Grapher2D';
import { GlobalSearch } from './components/GlobalSearch';
import AiTutorSidebar from './components/AiTutorSidebar';
import { AdvancedCalculator } from './components/AdvancedCalculator';
import { useGamification } from './context/GamificationContext';
import { useStudyProgress } from './context/StudyProgressContext';
import { Search, Bell, Settings, User, X, Check, Activity, Clock, Sparkles, Flame, Trophy, Calculator } from 'lucide-react';
import './index.css';
import './gamification.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [activeTopic, setActiveTopic] = useState<string | null>(null);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isAiTutorOpen, setIsAiTutorOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  // Settings State
  const [userName, setUserName] = useState('Scholar');
  const [studyGoal, setStudyGoal] = useState(25);
  const [activeMenu, setActiveMenu] = useState<'notifications' | 'settings' | 'profile' | null>(null);
  
  const { level, xp, streak, dailyGoalProgress, dailyGoalTarget, addXP } = useGamification();
  const { recordTopicOpen, recordTopicClose } = useStudyProgress();

  // Track how long the user has a topic open
  const activeTopicRef = useRef<{ id: string; subject: string } | null>(null);

  const openTopic = (topicId: string, subject: string, label?: string) => {
    // Close previous if open
    if (activeTopicRef.current) recordTopicClose();
    activeTopicRef.current = { id: topicId, subject };
    recordTopicOpen(topicId, subject, label);
    addXP(10, `Opened topic: ${topicId}`);
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

  // Save study time if user closes/hides the tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) closeTopic();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTabChange = (tabId: string) => {
    closeTopic();
    setActiveTab(tabId);
    setActiveTopic(null);
  };

  const renderContent = () => {
    if (activeTab === 'dashboard') {
      return (
        <Dashboard
          userName={userName}
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
    if (activeTab === 'planner') return <StudyPlanner />;
    if (activeTab === 'socratic') return <SocraticSolver />;
    if (activeTab === 'mindmap') return <MindMap onTopicSelect={(topicId, subject) => {
      setActiveTab(subject);
      setActiveTopic(topicId);
      openTopic(topicId, subject);
    }} />;
    if (activeTab === 'formula_blog') return <FormulaBank />;
    if (activeTab === 'derivations') return <DerivationsHub />;
    if (activeTab === 'flashcards') return <SpacedRepetition />;
    if (activeTab === 'visualizer') return <Visualizer3D />;
    if (activeTab === 'ai_hub') return <AiHub />;
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
      derivations: 'Derivations', flashcards: 'Flashcards',
      visualizer: '3D Visualizer', planner: 'Study Planner',
      socratic: 'Socratic Solver', upload: 'AI Upload Hub',
    };
    return map[id] || id;
  };

  return (
    <div className={`app-container ${isFocusMode ? 'focus-mode-active' : ''}`}>
      {!isFocusMode && (
        <Sidebar
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onFocusModeToggle={() => setIsFocusMode(!isFocusMode)}
          isFocusMode={isFocusMode}
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(d => !d)}
          onCalculatorToggle={() => setIsCalculatorOpen(c => !c)}
        />
      )}

      <main className="main-content">
        {!isFocusMode && (
          <header className="topbar">
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

              <button 
                className={`icon-btn ${activeMenu === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveMenu('settings')}
              >
                <Settings size={18} />
              </button>

              <div className="topbar-dropdown-wrap">
                <button 
                  className={`avatar ${activeMenu === 'profile' ? 'active' : ''}`}
                  onClick={() => setActiveMenu(activeMenu === 'profile' ? null : 'profile')}
                >
                  <User size={18} />
                </button>
                {activeMenu === 'profile' && (
                  <div className="topbar-dropdown profile-dropdown">
                    <div className="dropdown-header">
                      <h4>{userName}</h4>
                      <p className="dd-subtitle">Lumen Academic</p>
                    </div>
                    <button className="dropdown-item-link" onClick={() => setActiveTab('dashboard')}>View Dashboard</button>
                    <button className="dropdown-item-link">Achievements</button>
                    <div className="dropdown-divider" />
                    <button className="dropdown-item-link danger">Sign Out</button>
                  </div>
                )}
              </div>
            </div>
          </header>
        )}

        <div className="content-area page-wrapper">
          {!isFocusMode && activeTopic && (
            <div className="breadcrumbs">
              <button onClick={() => setActiveTopic(null)} className="breadcrumb-link">
                {tabLabel(activeTab)}
              </button>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">{activeTopic.replace(/_/g, ' ')}</span>
            </div>
          )}
          {renderContent()}
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
                <label>Display Name</label>
                <input 
                  type="text" 
                  value={userName} 
                  onChange={(e) => setUserName(e.target.value)}
                  className="settings-input"
                />
              </div>

              <div className="form-group">
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
            </div>

            <div className="modal-footer">
              <button className="gold-btn" onClick={() => setActiveMenu(null)}>
                <Check size={16} /> Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {(activeMenu === 'notifications' || activeMenu === 'profile') && (
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

      <style>{`
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
        .dropdown-header h4 { font-family: var(--font-display); font-size: 13px; font-weight: 600; color: var(--color-text-primary); }
        .dd-subtitle { font-size: 11px; color: var(--color-text-muted); margin-top: 2px; }
        .dropdown-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 12px 16px; border-bottom: var(--border-soft);
          background: transparent;
        }
        .dropdown-item:last-child { border-bottom: none; }
        .dd-icon { width: 28px; height: 28px; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .dd-title { font-size: 13px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .dd-desc { font-size: 11.5px; color: var(--color-text-secondary); margin-top: 2px; line-height: 1.4; }
        .dropdown-item-link {
          width: 100%; text-align: left; padding: 12px 16px;
          font-size: 13px; color: var(--color-text-secondary); font-family: var(--font-primary);
          background: none; border: none; cursor: pointer; transition: background 0.1s;
        }
        .dropdown-item-link:hover { background: var(--color-base-alt); color: var(--color-text-primary); }
        .dropdown-item-link.danger { color: #ef4444; }
        .dropdown-item-link.danger:hover { background: rgba(239,68,68,0.05); }
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
}

export default App;
