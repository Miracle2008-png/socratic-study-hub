import React from 'react';
import {
  Network, Brain, Moon, Sun, ChevronDown, ChevronRight, Sparkles,
  Calculator, Atom, FlaskConical, Dna, LayoutDashboard, Calendar, BookOpen, PenTool,
  BrainCircuit, Box, MessageSquare, UploadCloud, Map, FunctionSquare
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onFocusModeToggle: () => void;
  isFocusMode: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
  onCalculatorToggle?: () => void;
}

const subjects = [
  { id: 'math', label: 'Mathematics', icon: Calculator, color: 'var(--color-math)' },
  { id: 'physics', label: 'Physics', icon: Atom, color: 'var(--color-physics)' },
  { id: 'chemistry', label: 'Chemistry', icon: FlaskConical, color: 'var(--color-chemistry)' },
  { id: 'ai_hub', label: 'AI Study Hub', icon: Sparkles, color: 'var(--color-accent)' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onFocusModeToggle, darkMode, toggleDarkMode, onCalculatorToggle }) => {
  const [subjectsOpen, setSubjectsOpen] = React.useState(true);

  const tools = [
    { id: 'dashboard', label: 'Library', icon: LayoutDashboard },
    { id: 'upload', label: 'AI Upload Hub', icon: UploadCloud },
    { id: 'planner', label: 'Study Planner', icon: Calendar },
    { id: 'socratic', label: 'Socratic Solver', icon: MessageSquare },
    { id: 'mindmap', label: 'Knowledge Map', icon: Map },
    { id: 'formula_blog', label: 'Formula Bank', icon: BookOpen },
    { id: 'derivations', label: 'Derivations', icon: FunctionSquare },
    { id: 'flashcards', label: 'Flashcards (SRS)', icon: BrainCircuit },
    { id: 'visualizer', label: '3D Visualizer', icon: Box },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-header">
        <button 
          className="logo-mark" 
          onClick={() => setActiveTab('dashboard')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
        >
          <span className="logo-icon">✦</span>
          <div>
            <h1 className="logo text-gold-gradient">LUMEN</h1>
            <p className="logo-sub">Academic Platform</p>
          </div>
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
        {/* Dark Mode Toggle */}
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
          border-right: var(--border-soft);
          background: var(--color-base);
          display: flex;
          flex-direction: column;
          padding: 28px 16px;
          position: sticky;
          top: 0;
          overflow-y: auto;
          transition: background var(--transition-normal), border-color var(--transition-normal);
          z-index: 100;
          flex-shrink: 0;
        }

        .sidebar-header { margin-bottom: 36px; padding: 0 8px; }

        .logo-mark { display: flex; align-items: center; gap: 10px; }

        .logo-icon {
          font-size: 24px;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }

        .logo {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 1px;
        }

        .logo-sub {
          font-size: 10px;
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
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-text-muted);
          padding: 14px 10px 6px;
          font-family: var(--font-display);
          cursor: default;
        }

        .nav-section-label.collapsible { cursor: pointer; }
        .nav-section-label.collapsible:hover { color: var(--color-text-secondary); }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: var(--border-radius-sm);
          color: var(--color-text-secondary);
          font-size: 14px;
          font-weight: 400;
          transition: all var(--transition-fast);
          width: 100%;
          text-align: left;
          position: relative;
          font-family: var(--font-primary);
        }

        .nav-item:hover {
          background: var(--color-base-alt);
          color: var(--color-text-primary);
        }

        .nav-item.active {
          background: var(--color-base-alt);
          color: var(--color-text-primary);
          font-weight: 600;
        }

        .nav-icon {
          display: flex;
          align-items: center;
          width: 20px;
          flex-shrink: 0;
          color: inherit;
          transition: color var(--transition-fast);
        }

        .nav-active-dot {
          margin-left: auto;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--color-accent);
        }

        .nav-active-bar {
          position: absolute;
          right: 0;
          top: 6px;
          bottom: 6px;
          width: 3px;
          border-radius: 3px 0 0 3px;
        }

        .sidebar-footer {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0 0 4px;
        }

        .dark-mode-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          border-radius: var(--border-radius-sm);
          border: var(--border-soft);
          background: var(--color-base-alt);
          font-size: 13px;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          width: 100%;
        }
        .dark-mode-row:hover { border-color: var(--color-accent); color: var(--color-text-primary); }

        .dm-label { display: flex; align-items: center; gap: 8px; font-family: var(--font-display); font-size: 13px; font-weight: 500; }

        .dm-toggle {
          width: 36px;
          height: 20px;
          border-radius: 10px;
          background: var(--color-border-strong);
          position: relative;
          transition: background var(--transition-fast);
          flex-shrink: 0;
        }
        .dm-toggle.on { background: var(--color-accent); }

        .dm-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 14px;
          height: 14px;
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
          padding: 11px 16px;
          border-radius: var(--border-radius-sm);
          border: var(--border-soft);
          background: transparent;
          color: var(--color-text-secondary);
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
          border-color: var(--color-accent);
        }

        .focus-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 11px 16px;
          border-radius: var(--border-radius-sm);
          border: var(--border-soft);
          background: transparent;
          color: var(--color-text-secondary);
          font-size: 13px;
          font-weight: 500;
          transition: all var(--transition-fast);
          font-family: var(--font-display);
          cursor: pointer;
          width: 100%;
        }
        .focus-btn:hover {
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 16px rgba(201,168,76,0.3);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
