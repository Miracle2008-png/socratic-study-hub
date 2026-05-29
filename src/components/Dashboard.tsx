import React, { useState } from 'react';
import {
  BookOpen, TrendingUp, Clock, Flame, Target, Award,
  Calculator, Atom, FlaskConical, Network, Dna,
  BarChart2, Calendar, Star, ChevronRight, Zap, Brain
} from 'lucide-react';
import { useGamification } from '../context/GamificationContext';

const subjectColors: Record<string, string> = {
  Physics: 'var(--color-physics)',
  Math: 'var(--color-math)',
  Chemistry: 'var(--color-chemistry)',
  Biology: 'var(--color-biology)',
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

interface StatCard {
  label: string;
  value: string;
  sub: string;
  icon: React.ElementType;
  trend: string;
  color: string;
}

const stats: StatCard[] = [
  { label: 'Study Streak', value: '12', sub: 'days in a row', icon: Flame, trend: '+2 this week', color: '#ef4444' },
  { label: 'Hours This Week', value: '18.5', sub: 'hours studied', icon: Clock, trend: '+3.2 vs last week', color: 'var(--color-physics)' },
  { label: 'Topics Mastered', value: '34', sub: 'across all subjects', icon: Award, trend: '+5 this month', color: '#10b981' },
  { label: 'Weekly Goal', value: '74%', sub: '18.5 / 25 hours', icon: Target, trend: '6.5 hrs remaining', color: 'var(--color-math)' },
];

const subjectProgress = [
  { subject: 'Mathematics', progress: 62, topics: 12, color: 'var(--color-math)' },
  { subject: 'Physics', progress: 54, topics: 12, color: 'var(--color-physics)' },
  { subject: 'Chemistry', progress: 48, topics: 15, color: 'var(--color-chemistry)' },
  { subject: 'Biology', progress: 36, topics: 12, color: 'var(--color-biology)' },
];

const quickTopics = [
  { label: 'Quantum Mechanics', topicId: 'quantum_mechanics', subject: 'Physics', tabId: 'physics', color: 'var(--color-physics)' },
  { label: 'Differential Calculus', topicId: 'differential_calculus', subject: 'Math', tabId: 'math', color: 'var(--color-math)' },
  { label: 'Linear Algebra', topicId: 'linear_algebra', subject: 'Math', tabId: 'math', color: 'var(--color-math)' },
  { label: 'Thermodynamics', topicId: 'advanced_thermodynamics', subject: 'Physics', tabId: 'physics', color: 'var(--color-physics)' },
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

  return (
    <div className="dashboard anim-fade">
      {/* Hero */}
      <div className="dash-hero">
        <div className="dash-hero-text">
          <p className="dash-greeting">{greeting}, {userName} ✦</p>
          <h1 className="dash-headline">Your Academic Command Centre</h1>
          <p className="dash-subline">
            You have <strong>3 study sessions</strong> planned today and <strong>2 topics</strong> due for review.
          </p>
        </div>
        <div className="dash-hero-badge">
          <div className="streak-display">
            <Flame size={28} style={{ color: '#ef4444' }} />
            <div>
              <div className="streak-num">{streak}</div>
              <div className="streak-lbl">Day Streak</div>
            </div>
          </div>
          <div className="streak-display" style={{ marginLeft: 16 }}>
            <Award size={28} style={{ color: '#8b5cf6' }} />
            <div>
              <div className="streak-num">Lvl {level}</div>
              <div className="streak-lbl">{xp} XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="dash-stats-grid">
        <div className="stat-card luxury-card">
          <div className="stat-card-top">
            <div className="stat-icon" style={{ background: `color-mix(in srgb, #ef4444 14%, transparent)`, color: '#ef4444' }}>
              <Flame size={20} strokeWidth={1.8} />
            </div>
            <span className="stat-trend">+0 today</span>
          </div>
          <div className="stat-value" style={{ color: '#ef4444' }}>{streak}</div>
          <div className="stat-label">Study Streak</div>
          <div className="stat-sub">days in a row</div>
        </div>

        <div className="stat-card luxury-card">
          <div className="stat-card-top">
            <div className="stat-icon" style={{ background: `color-mix(in srgb, var(--color-physics) 14%, transparent)`, color: 'var(--color-physics)' }}>
              <Clock size={20} strokeWidth={1.8} />
            </div>
            <span className="stat-trend">+0 vs last week</span>
          </div>
          <div className="stat-value" style={{ color: 'var(--color-physics)' }}>0</div>
          <div className="stat-label">Hours This Week</div>
          <div className="stat-sub">hours studied</div>
        </div>

        <div className="stat-card luxury-card">
          <div className="stat-card-top">
            <div className="stat-icon" style={{ background: `color-mix(in srgb, #10b981 14%, transparent)`, color: '#10b981' }}>
              <Award size={20} strokeWidth={1.8} />
            </div>
            <span className="stat-trend">+0 this month</span>
          </div>
          <div className="stat-value" style={{ color: '#10b981' }}>0</div>
          <div className="stat-label">Topics Mastered</div>
          <div className="stat-sub">across all subjects</div>
        </div>

        <div className="stat-card luxury-card">
          <div className="stat-card-top">
            <div className="stat-icon" style={{ background: `color-mix(in srgb, var(--color-math) 14%, transparent)`, color: 'var(--color-math)' }}>
              <Target size={20} strokeWidth={1.8} />
            </div>
            <span className="stat-trend">{Math.max(0, dailyGoalTarget - dailyGoalProgress)} XP remaining</span>
          </div>
          <div className="stat-value" style={{ color: 'var(--color-math)' }}>{Math.min(100, Math.round((dailyGoalProgress / dailyGoalTarget) * 100))}%</div>
          <div className="stat-label">Daily Goal</div>
          <div className="stat-sub">{dailyGoalProgress} / {dailyGoalTarget} XP</div>
        </div>
      </div>

      {/* Main 2-col grid */}
      <div className="dash-main-grid">
        {/* Left: Subject Progress */}
        <div className="dash-panel luxury-card">
          <div className="panel-header">
            <div className="panel-title-row">
              <BarChart2 size={16} style={{ color: 'var(--color-accent)' }} />
              <h3 className="panel-title">Subject Progress</h3>
            </div>
            <span className="panel-link">View all →</span>
          </div>
          <div className="subject-progress-list">
            {subjectProgress.map(sp => (
              <div key={sp.subject} className="sp-row">
                <div className="sp-info">
                  <span className="sp-name">{sp.subject}</span>
                  <span className="sp-topics">{sp.topics} topics</span>
                </div>
                <div className="sp-bar-wrap">
                  <div className="sp-bar-track">
                    <div
                      className="sp-bar-fill"
                      style={{ width: `${sp.progress}%`, background: sp.color }}
                    />
                  </div>
                  <span className="sp-pct" style={{ color: sp.color }}>{sp.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Recent Activity */}
        <div className="dash-panel luxury-card">
          <div className="panel-header">
            <div className="panel-title-row">
              <Clock size={16} style={{ color: 'var(--color-accent)' }} />
              <h3 className="panel-title">Recent Activity</h3>
            </div>
          </div>
          <div className="activity-list">
            {recentActivity.map((a, i) => {
              const Icon = subjectIcons[a.subject] || BookOpen;
              const color = subjectColors[a.subject] || 'var(--color-accent)';
              return (
                <div key={i} className="activity-item">
                  <div className="act-icon" style={{ background: `color-mix(in srgb, ${color} 12%, transparent)`, color }}>
                    {React.createElement(Icon as any, { size: 15, strokeWidth: 1.8 })}
                  </div>
                  <div className="act-info">
                    <div className="act-topic">{a.topic}</div>
                    <div className="act-subject" style={{ color }}>{a.subject}</div>
                  </div>
                  <div className="act-meta">
                    <div className="act-duration"><Clock size={11} /> {a.duration}</div>
                    <div className="act-time">{a.timestamp}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Access Topics */}
      <div className="dash-panel luxury-card">
        <div className="panel-header">
          <div className="panel-title-row">
            <Zap size={16} style={{ color: 'var(--color-accent)' }} />
            <h3 className="panel-title">Quick Access</h3>
          </div>
          <span className="panel-sub">Resume where you left off</span>
        </div>
        <div className="quick-grid">
          {quickTopics.map((qt) => (
            <button 
              key={qt.label} 
              className="quick-card"
              onClick={() => onTopicSelect?.(qt.topicId, qt.tabId)}
            >
              <div className="quick-dot" style={{ background: qt.color }} />
              <div className="quick-text">
                <div className="quick-topic">{qt.label}</div>
                <div className="quick-subject" style={{ color: qt.color }}>{qt.subject}</div>
              </div>
              <ChevronRight size={14} style={{ color: 'var(--color-text-muted)', marginLeft: 'auto' }} />
            </button>
          ))}
        </div>
      </div>

      {/* Today's Plan */}
      <div className="dash-panel luxury-card">
        <div className="panel-header">
          <div className="panel-title-row">
            <Calendar size={16} style={{ color: 'var(--color-accent)' }} />
            <h3 className="panel-title">Today's Study Plan</h3>
          </div>
          <span className="panel-link">Edit Plan →</span>
        </div>
        <div className="plan-timeline">
          {[
            { time: '09:00 – 10:30', subject: 'Physics', topic: 'Statistical Mechanics', color: 'var(--color-physics)', done: true },
            { time: '11:00 – 12:00', subject: 'Math', topic: 'Complex Analysis', color: 'var(--color-math)', done: true },
            { time: '14:00 – 15:30', subject: 'Chemistry', topic: 'Spectroscopy Methods', color: 'var(--color-chemistry)', done: false },
          ].map((item, i, arr) => (
            <div key={i} className={`plan-item ${item.done ? 'done' : ''}`}>
              <div className="plan-time">{item.time}</div>
              <div className="plan-dot-col">
                <div className="plan-dot" style={{ background: item.done ? '#10b981' : item.color }} />
                {i < arr.length - 1 && <div className="plan-line" />}
              </div>
              <div className="plan-content">
                <div className="plan-topic">{item.topic}</div>
                <div className="plan-subject" style={{ color: item.color }}>{item.subject}</div>
              </div>
              {item.done && <span className="plan-badge">✓ Done</span>}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .dashboard { display: flex; flex-direction: column; gap: 20px; max-width: 1100px; }

        /* Hero */
        .dash-hero {
          display: flex; align-items: center; justify-content: space-between;
          padding: 28px 32px;
          background: linear-gradient(135deg, var(--color-base-alt) 0%, var(--color-base) 100%);
          border-radius: var(--border-radius-lg);
          border: var(--border-soft);
          box-shadow: var(--shadow-sm);
          gap: 24px;
        }

        .dash-greeting { font-size: 13px; font-weight: 600; color: var(--color-accent); letter-spacing: 0.5px; font-family: var(--font-display); margin-bottom: 6px; }
        .dash-headline { font-family: var(--font-serif); font-size: 26px; font-weight: 600; color: var(--color-text-primary); margin-bottom: 8px; }
        .dash-subline { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; }

        .dash-hero-badge {
          flex-shrink: 0;
          padding: 20px 24px;
          background: var(--color-surface);
          border: var(--border-soft);
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-sm);
        }

        .streak-display { display: flex; align-items: center; gap: 14px; }
        .streak-num { font-family: var(--font-display); font-size: 28px; font-weight: 700; color: var(--color-text-primary); line-height: 1; }
        .streak-lbl { font-size: 12px; color: var(--color-text-muted); font-family: var(--font-display); }

        /* Stats Grid */
        .dash-stats-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 14px; }

        .stat-card { padding: 20px; }
        .stat-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
        .stat-icon { width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; }
        .stat-trend { font-size: 11px; color: var(--color-text-muted); font-family: var(--font-display); text-align: right; line-height: 1.4; max-width: 100px; }
        .stat-value { font-family: var(--font-display); font-size: 30px; font-weight: 700; line-height: 1; margin-bottom: 4px; }
        .stat-label { font-size: 14px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .stat-sub { font-size: 12px; color: var(--color-text-muted); margin-top: 2px; }

        /* 2-col grid */
        .dash-main-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 768px) { .dash-main-grid { grid-template-columns: 1fr; } }

        .dash-panel { padding: 22px; }

        .panel-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
        .panel-title-row { display: flex; align-items: center; gap: 8px; }
        .panel-title { font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--color-text-primary); }
        .panel-link { font-size: 12px; color: var(--color-accent); font-weight: 600; cursor: pointer; font-family: var(--font-display); }
        .panel-sub { font-size: 12px; color: var(--color-text-muted); }

        /* Subject Progress */
        .subject-progress-list { display: flex; flex-direction: column; gap: 16px; }
        .sp-row { display: flex; flex-direction: column; gap: 6px; }
        .sp-info { display: flex; align-items: center; justify-content: space-between; }
        .sp-name { font-size: 13px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .sp-topics { font-size: 11px; color: var(--color-text-muted); }
        .sp-bar-wrap { display: flex; align-items: center; gap: 10px; }
        .sp-bar-track { flex: 1; height: 6px; background: var(--color-base-alt); border-radius: 4px; overflow: hidden; }
        .sp-bar-fill { height: 100%; border-radius: 4px; transition: width 0.8s cubic-bezier(0.25,1,0.5,1); }
        .sp-pct { font-size: 12px; font-weight: 700; font-family: var(--font-display); min-width: 34px; text-align: right; }

        /* Activity */
        .activity-list { display: flex; flex-direction: column; }
        .activity-item {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 0; border-bottom: var(--border-soft);
          transition: background var(--transition-fast);
        }
        .activity-item:last-child { border-bottom: none; }
        .act-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .act-info { flex: 1; min-width: 0; }
        .act-topic { font-size: 13px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .act-subject { font-size: 11px; font-weight: 600; font-family: var(--font-display); margin-top: 2px; }
        .act-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 2px; flex-shrink: 0; }
        .act-duration { display: flex; align-items: center; gap: 4px; font-size: 11px; color: var(--color-text-secondary); font-family: var(--font-display); }
        .act-time { font-size: 10px; color: var(--color-text-muted); }

        /* Quick Grid */
        .quick-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 10px; }
        .quick-card {
          display: flex; align-items: center; gap: 10px;
          padding: 12px 14px; border-radius: var(--border-radius-sm);
          border: var(--border-soft); background: var(--color-base-alt);
          cursor: pointer; transition: all var(--transition-fast); text-align: left;
          width: 100%;
        }
        .quick-card:hover { background: var(--color-surface); border-color: var(--color-border-strong); transform: translateY(-1px); box-shadow: var(--shadow-xs); }
        .quick-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .quick-topic { font-size: 13px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .quick-subject { font-size: 11px; font-weight: 600; margin-top: 1px; font-family: var(--font-display); }

        /* Timeline */
        .plan-timeline { display: flex; flex-direction: column; gap: 0; }
        .plan-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 12px 0; position: relative;
          opacity: 1; transition: opacity 0.2s;
        }
        .plan-item.done { opacity: 0.6; }
        .plan-time { font-size: 11px; color: var(--color-text-muted); font-family: var(--font-display); width: 110px; flex-shrink: 0; padding-top: 3px; }
        .plan-dot-col { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
        .plan-dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
        .plan-line { width: 2px; flex: 1; min-height: 28px; background: var(--color-border); margin-top: 4px; }
        .plan-content { flex: 1; }
        .plan-topic { font-size: 14px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-display); }
        .plan-subject { font-size: 12px; font-weight: 600; font-family: var(--font-display); margin-top: 2px; }
        .plan-badge { font-size: 11px; font-weight: 700; color: #10b981; background: rgba(16,185,129,0.1); padding: 2px 10px; border-radius: var(--border-radius-full); font-family: var(--font-display); flex-shrink: 0; }
      `}</style>
    </div>
  );
};

export default Dashboard;
