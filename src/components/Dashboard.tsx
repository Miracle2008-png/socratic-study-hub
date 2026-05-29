import React, { useState } from 'react';
import {
  BookOpen, TrendingUp, Clock, Flame, Target, Award,
  Calculator, Atom, FlaskConical, Network, Dna,
  BarChart2, Calendar, Star, ChevronRight, Zap, Brain, ArrowUpRight, Sparkles
} from 'lucide-react';
import { useGamification } from '../context/GamificationContext';

const subjectColors: Record<string, string> = {
  Physics: '#0ea5e9',
  Math: '#8b5cf6',
  Chemistry: '#10b981',
  Biology: '#ec4899',
};

const subjectIcons: Record<string, React.ElementType> = {
  Physics: Atom, Math: Calculator, Chemistry: FlaskConical,
  Biology: Dna,
};

interface Activity {
  subject: string;
  topic: string;
  duration: string;
  timestamp: string;
}

const recentActivity: Activity[] = [
  { subject: 'Physics', topic: 'Quantum Mechanics', duration: '45 min', timestamp: '2 hours ago' },
  { subject: 'Math', topic: 'Differential Calculus', duration: '30 min', timestamp: '5 hours ago' },
  { subject: 'Chemistry', topic: 'Organic Chemistry', duration: '60 min', timestamp: 'Yesterday' },
  { subject: 'Biology', topic: 'Molecular Genetics', duration: '40 min', timestamp: '2 days ago' },
];

const subjectProgress = [
  { subject: 'Mathematics', progress: 62, topics: 12, color: '#8b5cf6', glow: 'rgba(139,92,246,0.3)' },
  { subject: 'Physics', progress: 54, topics: 12, color: '#0ea5e9', glow: 'rgba(14,165,233,0.3)' },
  { subject: 'Chemistry', progress: 48, topics: 15, color: '#10b981', glow: 'rgba(16,185,129,0.3)' },
  { subject: 'Biology', progress: 36, topics: 12, color: '#ec4899', glow: 'rgba(236,72,153,0.3)' },
];

const quickTopics = [
  { label: 'Quantum Mechanics', topicId: 'quantum_mechanics', subject: 'Physics', tabId: 'physics', color: '#0ea5e9', icon: Atom },
  { label: 'Differential Calculus', topicId: 'differential_calculus', subject: 'Math', tabId: 'math', color: '#8b5cf6', icon: Calculator },
  { label: 'Linear Algebra', topicId: 'linear_algebra', subject: 'Math', tabId: 'math', color: '#8b5cf6', icon: Brain },
  { label: 'Thermodynamics', topicId: 'advanced_thermodynamics', subject: 'Physics', tabId: 'physics', color: '#0ea5e9', icon: Zap },
  { label: 'Organic Chemistry', topicId: 'organic_chemistry', subject: 'Chemistry', tabId: 'chemistry', color: '#10b981', icon: FlaskConical },
  { label: 'Molecular Genetics', topicId: 'molecular_genetics', subject: 'Biology', tabId: 'biology', color: '#ec4899', icon: Dna },
];

interface DashboardProps {
  userName: string;
  studyGoal: number;
  onTopicSelect?: (topicId: string, subject: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userName, studyGoal, onTopicSelect }) => {
  const { xp, level, streak, dailyGoalProgress, dailyGoalTarget } = useGamification();

  const [greeting] = useState(() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
  });

  const dailyPct = Math.min(100, Math.round((dailyGoalProgress / dailyGoalTarget) * 100));
  const circumference = 2 * Math.PI * 36;
  const dashOffset = circumference - (circumference * dailyPct) / 100;

  return (
    <div className="dashboard anim-fade">

      {/* ── Hero ─────────────────────────────────── */}
      <div className="dash-hero">
        <div className="dash-hero-orb dash-hero-orb-1" />
        <div className="dash-hero-orb dash-hero-orb-2" />
        <div className="dash-hero-orb dash-hero-orb-3" />

        <div className="dash-hero-left">
          <div className="dash-greeting-pill">
            <Sparkles size={12} />
            {greeting}, {userName}
          </div>
          <h1 className="dash-headline">Your Academic<br /><span className="dash-headline-accent">Command Centre</span></h1>
          <p className="dash-subline">
            You have <strong>3 study sessions</strong> planned today and <strong>2 topics</strong> due for review.
          </p>
          <div className="dash-hero-ctas">
            <button className="gold-btn" style={{ fontSize: '13px', padding: '10px 22px' }}>
              <Zap size={14} /> Continue Learning
            </button>
            <button className="dash-ghost-btn">
              <Calendar size={14} /> View Schedule
            </button>
          </div>
        </div>

        <div className="dash-hero-right">
          <div className="dash-xp-ring-card">
            <svg width="100" height="100" viewBox="0 0 100 100" className="dash-ring-svg">
              <circle cx="50" cy="50" r="36" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="36" fill="none"
                stroke="url(#goldGrad)" strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                transform="rotate(-90 50 50)"
                style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4,0,0.2,1)' }}
              />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#E8D38B" />
                </linearGradient>
              </defs>
            </svg>
            <div className="dash-ring-inner">
              <div className="dash-ring-pct">{dailyPct}%</div>
              <div className="dash-ring-label">Daily Goal</div>
            </div>
          </div>

          <div className="dash-hero-badges">
            <div className="dash-badge-item">
              <Flame size={20} style={{ color: '#f97316' }} />
              <div>
                <div className="dash-badge-num" style={{ color: '#f97316' }}>{streak}</div>
                <div className="dash-badge-lbl">Streak</div>
              </div>
            </div>
            <div className="dash-badge-divider" />
            <div className="dash-badge-item">
              <Award size={20} style={{ color: '#8b5cf6' }} />
              <div>
                <div className="dash-badge-num" style={{ color: '#8b5cf6' }}>Lv {level}</div>
                <div className="dash-badge-lbl">{xp.toLocaleString()} XP</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Row ─────────────────────────────── */}
      <div className="dash-stats-grid">
        {[
          { label: 'Study Streak', value: `${streak}`, sub: 'days in a row', icon: Flame, color: '#f97316', glow: 'rgba(249,115,22,0.2)', trend: '+2 this week' },
          { label: 'Hours This Week', value: '0', sub: 'hours studied', icon: Clock, color: '#0ea5e9', glow: 'rgba(14,165,233,0.2)', trend: 'Track sessions' },
          { label: 'Topics Mastered', value: '0', sub: 'across all subjects', icon: Award, color: '#10b981', glow: 'rgba(16,185,129,0.2)', trend: 'Keep going!' },
          { label: 'Daily Goal', value: `${dailyPct}%`, sub: `${dailyGoalProgress}/${dailyGoalTarget} XP`, icon: Target, color: '#8b5cf6', glow: 'rgba(139,92,246,0.2)', trend: `${Math.max(0, dailyGoalTarget - dailyGoalProgress)} XP left` },
        ].map((s, i) => (
          <div key={i} className="dash-stat-card" style={{ '--glow': s.glow } as React.CSSProperties}>
            <div className="dash-stat-top">
              <div className="dash-stat-icon" style={{ background: s.glow, color: s.color }}>
                <s.icon size={18} strokeWidth={2} />
              </div>
              <span className="dash-stat-trend">{s.trend}</span>
            </div>
            <div className="dash-stat-val" style={{ color: s.color }}>{s.value}</div>
            <div className="dash-stat-label">{s.label}</div>
            <div className="dash-stat-sub">{s.sub}</div>
            <div className="dash-stat-glow-bar" style={{ background: s.color }} />
          </div>
        ))}
      </div>

      {/* ── Main 2-col ─────────────────────────────── */}
      <div className="dash-main-grid">

        {/* Subject Progress */}
        <div className="dash-glass-panel">
          <div className="panel-header">
            <div className="panel-title-row">
              <BarChart2 size={16} style={{ color: 'var(--color-accent)' }} />
              <h3 className="panel-title">Subject Mastery</h3>
            </div>
            <span className="panel-link">All subjects →</span>
          </div>
          <div className="subject-progress-list">
            {subjectProgress.map(sp => (
              <div key={sp.subject} className="sp-row">
                <div className="sp-info">
                  <span className="sp-name">{sp.subject}</span>
                  <span className="sp-pct" style={{ color: sp.color }}>{sp.progress}%</span>
                </div>
                <div className="sp-bar-track">
                  <div
                    className="sp-bar-fill"
                    style={{
                      width: `${sp.progress}%`,
                      background: `linear-gradient(90deg, ${sp.color}, ${sp.color}aa)`,
                      boxShadow: `0 0 8px ${sp.glow}`
                    }}
                  />
                </div>
                <div className="sp-topics-row">
                  <span className="sp-topics">{sp.topics} topics available</span>
                  <span className="sp-done" style={{ color: sp.color }}>{Math.round(sp.topics * sp.progress / 100)} completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="dash-glass-panel">
          <div className="panel-header">
            <div className="panel-title-row">
              <Clock size={16} style={{ color: 'var(--color-accent)' }} />
              <h3 className="panel-title">Recent Activity</h3>
            </div>
            <span className="panel-link">History →</span>
          </div>
          <div className="activity-list">
            {recentActivity.map((a, i) => {
              const Icon = subjectIcons[a.subject] || BookOpen;
              const color = subjectColors[a.subject] || 'var(--color-accent)';
              return (
                <div key={i} className="activity-item">
                  <div className="act-icon" style={{ background: `${color}18`, color }}>
                    {React.createElement(Icon as any, { size: 16, strokeWidth: 1.8 })}
                  </div>
                  <div className="act-info">
                    <div className="act-topic">{a.topic}</div>
                    <div className="act-subject" style={{ color }}>{a.subject} • {a.duration}</div>
                  </div>
                  <div className="act-time">{a.timestamp}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Quick Access ─────────────────────────── */}
      <div className="dash-glass-panel">
        <div className="panel-header">
          <div className="panel-title-row">
            <Zap size={16} style={{ color: 'var(--color-accent)' }} />
            <h3 className="panel-title">Quick Access</h3>
          </div>
          <span className="panel-sub">Jump into any topic instantly</span>
        </div>
        <div className="quick-grid">
          {quickTopics.map((qt) => (
            <button
              key={qt.label}
              className="quick-card"
              onClick={() => onTopicSelect?.(qt.topicId, qt.tabId)}
              style={{ '--card-color': qt.color } as React.CSSProperties}
            >
              <div className="quick-icon" style={{ background: `${qt.color}18`, color: qt.color }}>
                <qt.icon size={18} strokeWidth={1.8} />
              </div>
              <div className="quick-text">
                <div className="quick-topic">{qt.label}</div>
                <div className="quick-subject" style={{ color: qt.color }}>{qt.subject}</div>
              </div>
              <ArrowUpRight size={14} className="quick-arrow" />
            </button>
          ))}
        </div>
      </div>

      {/* ── Today's Timeline ─────────────────────── */}
      <div className="dash-glass-panel">
        <div className="panel-header">
          <div className="panel-title-row">
            <Calendar size={16} style={{ color: 'var(--color-accent)' }} />
            <h3 className="panel-title">Today's Study Timeline</h3>
          </div>
          <span className="panel-link">Edit Plan →</span>
        </div>
        <div className="plan-timeline">
          {[
            { time: '09:00 – 10:30', subject: 'Physics', topic: 'Statistical Mechanics', color: '#0ea5e9', done: true },
            { time: '11:00 – 12:00', subject: 'Mathematics', topic: 'Complex Analysis', color: '#8b5cf6', done: true },
            { time: '14:00 – 15:30', subject: 'Chemistry', topic: 'Spectroscopy Methods', color: '#10b981', done: false },
          ].map((item, i, arr) => (
            <div key={i} className={`plan-item ${item.done ? 'done' : 'upcoming'}`}>
              <div className="plan-time">{item.time}</div>
              <div className="plan-dot-col">
                <div className="plan-dot" style={{ background: item.done ? '#10b981' : item.color, boxShadow: item.done ? 'none' : `0 0 12px ${item.color}80` }} />
                {i < arr.length - 1 && <div className="plan-line" />}
              </div>
              <div className="plan-content">
                <div className="plan-topic">{item.topic}</div>
                <div className="plan-subject" style={{ color: item.color }}>{item.subject}</div>
              </div>
              {item.done
                ? <span className="plan-badge done-badge">✓ Done</span>
                : <span className="plan-badge upcoming-badge">Upcoming</span>
              }
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dashboard {
          display: flex;
          flex-direction: column;
          gap: 24px;
          max-width: 1200px;
        }

        /* ── Hero ── */
        .dash-hero {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 48px 56px;
          border-radius: 24px;
          background: linear-gradient(135deg, var(--color-surface-raised) 0%, var(--color-surface) 100%);
          border: 1px solid var(--color-border-strong);
          box-shadow: var(--shadow-lg);
        }

        [data-theme="dark"] .dash-hero {
          background: linear-gradient(135deg, #1e1b14 0%, #15120d 100%);
          border-color: rgba(212,175,55,0.15);
        }

        .dash-hero-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(60px);
        }
        .dash-hero-orb-1 { width: 300px; height: 300px; top: -100px; right: -60px; background: rgba(212,175,55,0.08); }
        .dash-hero-orb-2 { width: 200px; height: 200px; bottom: -80px; left: 100px; background: rgba(139,92,246,0.07); }
        .dash-hero-orb-3 { width: 150px; height: 150px; top: 20px; left: -40px; background: rgba(14,165,233,0.06); }

        .dash-hero-left { position: relative; z-index: 2; flex: 1; }

        .dash-greeting-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(212,175,55,0.12);
          border: 1px solid rgba(212,175,55,0.25);
          color: var(--color-accent);
          padding: 5px 14px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
          font-family: var(--font-display);
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }

        .dash-headline {
          font-family: var(--font-serif);
          font-size: 36px;
          font-weight: 600;
          line-height: 1.2;
          color: var(--color-text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .dash-headline-accent {
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dash-subline {
          font-size: 15px;
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: 28px;
          max-width: 420px;
        }

        .dash-hero-ctas { display: flex; gap: 12px; align-items: center; }

        .dash-ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: transparent;
          border: 1px solid var(--color-border-strong);
          border-radius: 99px;
          color: var(--color-text-secondary);
          font-size: 13px;
          font-weight: 500;
          font-family: var(--font-display);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .dash-ghost-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }

        .dash-hero-right {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .dash-xp-ring-card {
          position: relative;
          width: 100px;
          height: 100px;
        }
        .dash-ring-svg { width: 100%; height: 100%; }
        .dash-ring-inner {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .dash-ring-pct {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          color: var(--color-accent);
          line-height: 1;
        }
        .dash-ring-label {
          font-size: 9px;
          color: var(--color-text-muted);
          font-family: var(--font-display);
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        .dash-hero-badges {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 16px;
          padding: 14px 20px;
          box-shadow: var(--shadow-sm);
        }
        .dash-badge-item { display: flex; align-items: center; gap: 10px; }
        .dash-badge-num { font-family: var(--font-display); font-size: 20px; font-weight: 700; line-height: 1; }
        .dash-badge-lbl { font-size: 11px; color: var(--color-text-muted); font-family: var(--font-display); }
        .dash-badge-divider { width: 1px; height: 32px; background: var(--color-border); }

        /* ── Stats Grid ── */
        .dash-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        @media (max-width: 1000px) { .dash-stats-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .dash-stats-grid { grid-template-columns: 1fr; } }

        .dash-stat-card {
          position: relative;
          overflow: hidden;
          padding: 24px;
          border-radius: 16px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
          cursor: default;
        }

        [data-theme="dark"] .dash-stat-card {
          background: linear-gradient(135deg, rgba(30,27,20,0.8), rgba(20,18,14,0.9));
        }

        .dash-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md), 0 0 24px var(--glow, transparent);
          border-color: var(--color-border-strong);
        }

        .dash-stat-glow-bar {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 0 0 16px 16px;
          opacity: 0.6;
        }

        .dash-stat-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 16px; }
        .dash-stat-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .dash-stat-trend { font-size: 11px; color: var(--color-text-muted); text-align: right; line-height: 1.4; max-width: 90px; font-family: var(--font-display); }
        .dash-stat-val { font-family: var(--font-display); font-size: 36px; font-weight: 800; line-height: 1; margin-bottom: 6px; }
        .dash-stat-label { font-size: 14px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .dash-stat-sub { font-size: 12px; color: var(--color-text-muted); margin-top: 3px; }

        /* ── Glass Panel ── */
        .dash-glass-panel {
          padding: 28px;
          border-radius: 20px;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          transition: box-shadow var(--transition-fast);
        }

        [data-theme="dark"] .dash-glass-panel {
          background: linear-gradient(135deg, rgba(28,25,18,0.85), rgba(18,16,10,0.9));
          border-color: rgba(212,175,55,0.1);
        }

        .dash-glass-panel:hover { box-shadow: var(--shadow-md); }

        /* ── Main 2-col ── */
        .dash-main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 768px) { .dash-main-grid { grid-template-columns: 1fr; } }

        .panel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border); }
        .panel-title-row { display: flex; align-items: center; gap: 10px; }
        .panel-title { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--color-text-primary); letter-spacing: 0.3px; }
        .panel-link { font-size: 12px; color: var(--color-accent); font-weight: 600; cursor: pointer; font-family: var(--font-display); transition: opacity var(--transition-fast); }
        .panel-link:hover { opacity: 0.7; }
        .panel-sub { font-size: 12px; color: var(--color-text-muted); }

        /* ── Subject Progress ── */
        .subject-progress-list { display: flex; flex-direction: column; gap: 20px; }
        .sp-row { display: flex; flex-direction: column; gap: 8px; }
        .sp-info { display: flex; align-items: center; justify-content: space-between; }
        .sp-name { font-size: 14px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .sp-pct { font-size: 14px; font-weight: 700; font-family: var(--font-display); }
        .sp-bar-track {
          height: 8px;
          background: var(--color-base-alt);
          border-radius: 99px;
          overflow: hidden;
        }
        .sp-bar-fill {
          height: 100%;
          border-radius: 99px;
          transition: width 1s cubic-bezier(0.25,1,0.5,1);
        }
        .sp-topics-row { display: flex; justify-content: space-between; }
        .sp-topics { font-size: 11px; color: var(--color-text-muted); }
        .sp-done { font-size: 11px; font-weight: 600; }

        /* ── Activity ── */
        .activity-list { display: flex; flex-direction: column; gap: 4px; }
        .activity-item {
          display: flex; align-items: center; gap: 14px;
          padding: 12px 10px;
          border-radius: 12px;
          transition: background var(--transition-fast);
          cursor: default;
        }
        .activity-item:hover { background: var(--color-base-alt); }
        .act-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .act-info { flex: 1; min-width: 0; }
        .act-topic { font-size: 14px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .act-subject { font-size: 12px; font-weight: 600; font-family: var(--font-display); margin-top: 2px; }
        .act-time { font-size: 11px; color: var(--color-text-muted); flex-shrink: 0; }

        /* ── Quick Grid ── */
        .quick-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 12px;
        }

        .quick-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          border-radius: 14px;
          border: 1px solid var(--color-border);
          background: var(--color-base-alt);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
          width: 100%;
          position: relative;
          overflow: hidden;
        }

        .quick-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--card-color, transparent), transparent 70%);
          opacity: 0;
          transition: opacity var(--transition-fast);
        }

        .quick-card:hover {
          transform: translateY(-3px);
          border-color: var(--card-color, var(--color-border-strong));
          box-shadow: 0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px var(--card-color, transparent);
        }

        .quick-card:hover::before { opacity: 0.04; }

        .quick-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          position: relative; z-index: 1;
        }

        .quick-text { flex: 1; position: relative; z-index: 1; }
        .quick-topic { font-size: 13px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .quick-subject { font-size: 11px; font-weight: 600; margin-top: 2px; font-family: var(--font-display); }

        .quick-arrow {
          color: var(--color-text-muted);
          flex-shrink: 0;
          position: relative; z-index: 1;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .quick-card:hover .quick-arrow { transform: translate(2px, -2px); color: var(--card-color, var(--color-accent)); }

        /* ── Timeline ── */
        .plan-timeline { display: flex; flex-direction: column; }
        .plan-item {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 14px 0;
          transition: all var(--transition-fast);
        }
        .plan-item.done { opacity: 0.55; }
        .plan-item.upcoming .plan-content { }

        .plan-time {
          font-size: 12px; color: var(--color-text-muted);
          font-family: var(--font-display); font-weight: 500;
          width: 120px; flex-shrink: 0; padding-top: 2px;
        }

        .plan-dot-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .plan-dot { width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; transition: box-shadow 0.3s; }
        .plan-line { width: 2px; flex: 1; min-height: 32px; background: var(--color-border); margin-top: 5px; }

        .plan-content { flex: 1; }
        .plan-topic { font-size: 15px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .plan-subject { font-size: 12px; font-weight: 600; font-family: var(--font-display); margin-top: 3px; }

        .plan-badge {
          font-size: 11px; font-weight: 700;
          padding: 3px 12px; border-radius: 99px;
          font-family: var(--font-display); flex-shrink: 0; margin-top: 2px;
        }
        .done-badge { color: #10b981; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.2); }
        .upcoming-badge { color: var(--color-accent); background: rgba(212,175,55,0.1); border: 1px solid rgba(212,175,55,0.2); }

        @media (max-width: 900px) {
          .dash-hero { flex-direction: column; padding: 36px 28px; }
          .dash-hero-right { flex-direction: row; width: 100%; justify-content: center; }
          .dash-headline { font-size: 28px; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
