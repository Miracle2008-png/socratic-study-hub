import React from 'react';
import {
  Network, Brain, Moon, Sun, ChevronDown, ChevronRight, Sparkles,
  Calculator, Atom, FlaskConical, Dna, LayoutDashboard, Calendar, BookOpen, PenTool,
  BrainCircuit, Box, MessageSquare, UploadCloud, Map, FunctionSquare, TrendingUp, ShieldAlert,
  Target, Globe
} from 'lucide-react';
import { useStudyProgress } from '../context/StudyProgressContext';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onFocusModeToggle: () => void;
  isFocusMode: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
  onCalculatorToggle?: () => void;
  isAdmin?: boolean;
}

const subjects = [
  { id: 'math', label: 'Mathematics', icon: Calculator, color: 'var(--color-math)' },
  { id: 'physics', label: 'Physics', icon: Atom, color: 'var(--color-physics)' },
  { id: 'chemistry', label: 'Chemistry', icon: FlaskConical, color: 'var(--color-chemistry)' },
  { id: 'biology', label: 'Biology', icon: Dna, color: '#22c55e' },
  { id: 'engineering', label: 'Engineering', icon: Box, color: '#f59e0b' },
  { id: 'ai_hub', label: 'AI Study Hub', icon: Sparkles, color: 'var(--color-accent)' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onFocusModeToggle, darkMode, toggleDarkMode, onCalculatorToggle, isAdmin }) => {
  const [subjectsOpen, setSubjectsOpen] = React.useState(true);
  const { isSatMode, toggleSatMode } = useStudyProgress();

    const tools = [
      { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
      { id: 'upload', label: 'AI Upload Hub', icon: UploadCloud },
      { id: 'planner', label: 'Study Planner', icon: Calendar },
      { id: 'socratic', label: 'Socratic Solver', icon: MessageSquare },
      { id: 'mock_exam', label: 'Mock Exam', icon: Brain },
      { id: 'essay_grader', label: 'Essay Grader', icon: PenTool },
      { id: 'predictor_hub', label: 'Future Predictor', icon: Globe },
      { id: 'mindmap', label: 'Knowledge Map', icon: Map },
      { id: 'grapher', label: '2D Grapher', icon: TrendingUp },
      { id: 'formula_blog', label: 'Formula Bank', icon: BookOpen },
      { id: 'calculus_solver', label: 'Calculus Solver', icon: Calculator },
      { id: 'derivations', label: 'Derivations', icon: FunctionSquare },
      { id: 'flashcards', label: 'Flashcards (SRS)', icon: BrainCircuit },
      { id: 'visualizer', label: '3D Visualizer', icon: Box },
    ];

  if (isAdmin) {
    tools.push({ id: 'admin', label: 'Admin Panel', icon: ShieldAlert });
  }

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <button
          className="logo-mark"
          onClick={() => setActiveTab('dashboard')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
        >
          <div className="logo-icon-wrap">✦</div>
          <div>
            <h1 className="logo">LUMEN</h1>
            <p className="logo-sub">Academic Platform</p>
          </div>
        </button>
      </div>

      {/* Global SAT Toggle */}
      <div style={{ padding: '0 12px 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <button 
          onClick={toggleSatMode}
          className={`nav-item ${isSatMode ? 'active' : ''}`}
          style={{ 
            background: isSatMode ? 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%)' : 'var(--color-base-alt)',
            color: isSatMode ? '#000' : 'var(--color-text-primary)',
            justifyContent: 'center',
            fontWeight: 800,
            border: isSatMode ? 'none' : '1px solid var(--color-border)',
            boxShadow: isSatMode ? '0 4px 12px rgba(212,175,55,0.3)' : 'none'
          }}
        >
          <Target size={16} /> 
          <span>{isSatMode ? "SAT MODE: ON" : "ENABLE SAT MODE"}</span>
        </button>
      </div>

      <nav className="sidebar-nav">
        {/* Tools */}
        <div className="nav-section-label">Tools</div>
        {tools.map(item => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${active ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon"><Icon size={17} strokeWidth={active ? 2 : 1.6} /></span>
              <span>{item.label}</span>
              {active && <span className="nav-active-dot" />}
            </button>
          );
        })}

        {/* Subjects */}
        <button className="nav-section-label collapsible" onClick={() => setSubjectsOpen(o => !o)}>
          <span>Subjects</span>
          {subjectsOpen ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
        </button>

        {subjectsOpen && subjects.map(item => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item ${active ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="nav-icon" style={{ color: active ? item.color : undefined }}>
                <Icon size={17} strokeWidth={active ? 2 : 1.6} />
              </span>
              <span>{item.label}</span>
              {active && <span className="nav-active-bar" style={{ background: item.color }} />}
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button className="dark-mode-row" onClick={toggleDarkMode}>
          <div className="dm-label">
            {darkMode ? <Moon size={15} /> : <Sun size={15} />}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
          <div className={`dm-toggle ${darkMode ? 'on' : ''}`}>
            <div className="dm-knob" />
          </div>
        </button>

        {onCalculatorToggle && (
          <button className="calc-sidebar-btn" onClick={onCalculatorToggle}>
            <Calculator size={15} />
            <span>Calculator</span>
          </button>
        )}

        <button className="focus-btn" onClick={onFocusModeToggle}>
          <PenTool size={16} />
          <span>Focus Mode</span>
        </button>
      </div>

      <style>{`
        .sidebar {
          width: var(--sidebar-width);
          min-height: 100vh;
          border-right: 1px solid var(--color-border);
          background: var(--color-base);
          display: flex;
          flex-direction: column;
          padding: 24px 12px;
          position: sticky;
          top: 0;
          overflow-y: auto;
          transition: background var(--transition-normal);
          z-index: 100;
          flex-shrink: 0;
        }

        [data-theme="dark"] .sidebar {
          background: #0e0c08;
          border-right-color: rgba(212,175,55,0.08);
        }

        .sidebar-header { margin-bottom: 32px; padding: 4px 8px 20px; border-bottom: 1px solid var(--color-border); }

        .logo-mark { display: flex; align-items: center; gap: 12px; }

        .logo-icon-wrap {
          width: 38px; height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent-light));
          display: flex; align-items: center; justify-content: center;
          font-size: 18px;
          color: white;
          box-shadow: 0 4px 12px rgba(201,168,76,0.35);
          flex-shrink: 0;
        }

        .logo {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 800;
          letter-spacing: 3px;
          margin-bottom: 1px;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo-sub {
          font-size: 9px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          font-family: var(--font-display);
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .nav-section-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          padding: 16px 10px 5px;
          font-family: var(--font-display);
          cursor: default;
          background: none;
          border: none;
          width: 100%;
        }

        .nav-section-label.collapsible { cursor: pointer; }
        .nav-section-label.collapsible:hover { color: var(--color-text-secondary); }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 10px;
          color: var(--color-text-muted);
          font-size: 13.5px;
          font-weight: 500;
          transition: all var(--transition-fast);
          width: 100%;
          text-align: left;
          position: relative;
          font-family: var(--font-display);
          border: 1px solid transparent;
        }

        .nav-item:hover {
          background: var(--color-base-alt);
          color: var(--color-text-primary);
          border-color: var(--color-border);
        }

        .nav-item.active {
          background: rgba(212,175,55,0.1);
          color: var(--color-accent);
          font-weight: 700;
          border-color: rgba(212,175,55,0.2);
        }

        [data-theme="dark"] .nav-item.active {
          background: rgba(212,175,55,0.08);
          border-color: rgba(212,175,55,0.15);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          width: 20px;
          flex-shrink: 0;
          transition: color var(--transition-fast);
        }

        .nav-active-dot {
          margin-left: auto;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
          box-shadow: 0 0 6px var(--color-accent);
        }

        .nav-active-bar {
          position: absolute;
          right: 0;
          top: 8px;
          bottom: 8px;
          width: 3px;
          border-radius: 3px 0 0 3px;
        }

        .sidebar-footer {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px 0 4px;
          border-top: 1px solid var(--color-border);
        }

        .dark-mode-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid var(--color-border);
          background: var(--color-base-alt);
          font-size: 13px;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          width: 100%;
        }
        .dark-mode-row:hover { border-color: var(--color-accent); color: var(--color-accent); }

        .dm-label { display: flex; align-items: center; gap: 8px; font-family: var(--font-display); font-size: 13px; font-weight: 500; }

        .dm-toggle {
          width: 36px; height: 20px;
          border-radius: 10px;
          background: var(--color-border-strong);
          position: relative;
          transition: background var(--transition-fast);
          flex-shrink: 0;
        }
        .dm-toggle.on { background: var(--color-accent); }

        .dm-knob {
          position: absolute;
          top: 3px; left: 3px;
          width: 14px; height: 14px;
          border-radius: 50%;
          background: white;
          transition: transform var(--transition-fast);
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
        }
        .dm-toggle.on .dm-knob { transform: translateX(16px); }

        .calc-sidebar-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 9px 14px;
          border-radius: 10px;
          border: 1px solid var(--color-border);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 13px;
          font-weight: 500;
          transition: all var(--transition-fast);
          font-family: var(--font-display);
          cursor: pointer;
          width: 100%;
        }
        .calc-sidebar-btn:hover {
          background: var(--color-base-alt);
          color: var(--color-accent);
          border-color: rgba(212,175,55,0.3);
        }

        .focus-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 10px;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          color: white;
          font-size: 13px;
          font-weight: 600;
          border: none;
          transition: all var(--transition-fast);
          font-family: var(--font-display);
          cursor: pointer;
          width: 100%;
          box-shadow: 0 4px 16px rgba(201,168,76,0.25);
        }
        .focus-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(201,168,76,0.4);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
