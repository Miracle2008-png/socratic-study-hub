import React from 'react';
import {
  Calculator, Atom, FlaskConical, Network, Dna,
  Zap, Orbit, Brain, BookOpen, BarChart2, Sigma,
  GitBranch, Cpu, Database, Lock, Globe, Microscope,
  Leaf, Heart, Eye, Wind, Beaker, Layers, TrendingUp,
  Radio, Flame, Droplets, Bug, TreePine, Activity,
  LockKeyhole, Unlock
} from 'lucide-react';
import { ALL_TOPICS } from '../data/topicCompiler';
import { useGamification } from '../context/GamificationContext';

interface Topic {
  id: string;
  title: string;
  description: string;
  progress: number;
  icon: React.ElementType;
  difficulty: 'Foundational' | 'Intermediate' | 'Advanced' | 'University';
}

interface SubjectData {
  title: string;
  subtitle: string;
  color: string;
  bgGradient: string;
  icon: React.ElementType;
  topics: Topic[];
}

// Extract the first real sentence from markdown content, stripping headers and LaTeX
const extractDescription = (content: string): string => {
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip empty lines, markdown headers, LaTeX blocks, list items, and HTML
    if (!trimmed) continue;
    if (trimmed.startsWith('#')) continue;
    if (trimmed.startsWith('$$') || trimmed.startsWith('$')) continue;
    if (trimmed.startsWith('-') || trimmed.startsWith('*') || /^\d+\./.test(trimmed)) continue;
    if (trimmed.startsWith('<') || trimmed.startsWith('|')) continue;
    if (trimmed.length < 20) continue; // Too short to be a real sentence
    // Strip inline markdown syntax
    const clean = trimmed
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/`(.+?)`/g, '$1')
      .replace(/\[(.+?)\]\(.+?\)/g, '$1')
      .replace(/\$.*?\$/g, '')
      .trim();
    if (clean.length > 20) {
      return clean.length > 120 ? clean.substring(0, 120) + '…' : clean;
    }
  }
  return 'Explore this topic in depth.';
};

// Map the ALL_TOPICS to our SubjectHub Topic format
const generateDynamicTopics = (subjectKey: string): Topic[] => {
  return Object.values(ALL_TOPICS)
    .filter(t => t.subject === subjectKey)
    .map(t => ({
      id: t.id,
      title: t.title,
      description: extractDescription(t.sections[0]?.content || ''),
      progress: Math.floor(Math.random() * 20), // Placeholder for actual user progress
      icon: getIconForTopic(t.title),
      difficulty: t.difficulty as any,
    }));
};

const getIconForTopic = (title: string): React.ElementType => {
  const t = title.toLowerCase();
  if (t.includes('calc')) return Sigma;
  if (t.includes('algebra') || t.includes('equation')) return Calculator;
  if (t.includes('quantum') || t.includes('atom')) return Atom;
  if (t.includes('mechanic') || t.includes('motion') || t.includes('force')) return Orbit;
  if (t.includes('circuit') || t.includes('electric')) return Zap;
  if (t.includes('digital') || t.includes('boolean') || t.includes('logic')) return Network;
  if (t.includes('analogue') || t.includes('analog') || t.includes('transistor') || t.includes('diode')) return Zap;
  if (t.includes('electro') || t.includes('magnet')) return Zap;
  if (t.includes('thermo') || t.includes('heat')) return Flame;
  if (t.includes('organic') || t.includes('bond') || t.includes('reaction')) return Beaker;
  if (t.includes('genetics') || t.includes('dna')) return Dna;
  if (t.includes('cell') || t.includes('micro')) return Microscope;
  if (t.includes('neuro') || t.includes('brain')) return Brain;
  if (t.includes('data') || t.includes('stat')) return BarChart2;
  if (t.includes('fluid') || t.includes('transport') || t.includes('separation')) return BookOpen;
  if (t.includes('software') || t.includes('civil') || t.includes('material')) return BookOpen;
  return BookOpen;
};

const subjects: Record<string, SubjectData> = {
  mathematics: {
    title: 'Mathematics',
    subtitle: 'Pure and applied mathematics from foundations to frontiers.',
    color: 'var(--color-math)',
    bgGradient: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.02) 100%)',
    icon: Calculator,
    topics: generateDynamicTopics('mathematics')
  },
  physics: {
    title: 'Physics',
    subtitle: 'From Newtonian mechanics to quantum field theory.',
    color: 'var(--color-physics)',
    bgGradient: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(14,165,233,0.02) 100%)',
    icon: Atom,
    topics: generateDynamicTopics('physics')
  },
  chemistry: {
    title: 'Chemistry',
    subtitle: 'Molecular science from atomic structure to synthesis.',
    color: 'var(--color-chemistry)',
    bgGradient: 'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.02) 100%)',
    icon: FlaskConical,
    topics: generateDynamicTopics('chemistry')
  },
  biology: {
    title: 'Biology',
    subtitle: 'Life sciences from molecular mechanisms to ecosystems.',
    color: 'var(--color-biology)',
    bgGradient: 'linear-gradient(135deg, rgba(236,72,153,0.08) 0%, rgba(236,72,153,0.02) 100%)',
    icon: Dna,
    topics: generateDynamicTopics('biology')
  },
  engineering: {
    title: 'Engineering',
    subtitle: 'Applying math and science to design, build, and optimize.',
    color: '#f59e0b',
    bgGradient: 'linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.02) 100%)',
    icon: Network,
    topics: generateDynamicTopics('engineering')
  }
};

interface SubjectHubProps {
  subject: string;
  onTopicSelect: (topicId: string) => void;
}

const difficultyConfig = {
  Foundational: { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
  Intermediate: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
  Advanced: { color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
  University: { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
};

const SubjectHub: React.FC<SubjectHubProps> = ({ subject, onTopicSelect }) => {
  const data = subjects[subject];
  const { level } = useGamification(); // Soft progression lock
  
  if (!data) return null;

  const Icon = data.icon;
  const avgProgress = data.topics.length > 0 ? Math.round(data.topics.reduce((s, t) => s + t.progress, 0) / data.topics.length) : 0;

  // Group topics by difficulty
  const groupedTopics = {
    Foundational: data.topics.filter(t => t.difficulty === 'Foundational'),
    Intermediate: data.topics.filter(t => t.difficulty === 'Intermediate'),
    Advanced: data.topics.filter(t => t.difficulty === 'Advanced'),
    University: data.topics.filter(t => t.difficulty === 'University'),
  };

  return (
    <div className="subject-hub anim-fade">
      {/* Header */}
      <div className="hub-hero" style={{ background: data.bgGradient, borderColor: `color-mix(in srgb, ${data.color} 20%, transparent)` }}>
        <div className="hub-hero-icon" style={{ background: `color-mix(in srgb, ${data.color} 15%, transparent)`, color: data.color }}>
          {React.createElement(Icon as any, { size: 32, strokeWidth: 1.5 })}
        </div>
        <div className="hub-hero-text">
          <h1 className="hub-title">{data.title}</h1>
          <p className="hub-subtitle">{data.subtitle}</p>
        </div>
        <div className="hub-overall-progress">
          <svg width="64" height="64" viewBox="0 0 64 64">
            <circle cx="32" cy="32" r="26" fill="none" stroke="var(--color-border)" strokeWidth="5" />
            <circle
              cx="32" cy="32" r="26" fill="none"
              stroke={data.color} strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 26}`}
              strokeDashoffset={`${2 * Math.PI * 26 * (1 - avgProgress / 100)}`}
              transform="rotate(-90 32 32)"
              style={{ transition: 'stroke-dashoffset 1s ease' }}
            />
          </svg>
          <div className="hub-progress-label">
            <span className="hub-progress-pct" style={{ color: data.color }}>{avgProgress}%</span>
            <span className="hub-progress-text">avg</span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="hub-stats-row">
        <div className="hub-stat-chip">
          <span className="hub-stat-num">{data.topics.length}</span>
          <span className="hub-stat-lbl">Topics</span>
        </div>
        <div className="hub-stat-chip">
          <span className="hub-stat-num">{groupedTopics.Foundational.length}</span>
          <span className="hub-stat-lbl" style={{ color: '#10b981' }}>Foundational</span>
        </div>
        <div className="hub-stat-chip">
          <span className="hub-stat-num">{groupedTopics.Intermediate.length}</span>
          <span className="hub-stat-lbl" style={{ color: '#f59e0b' }}>Intermediate</span>
        </div>
        <div className="hub-stat-chip">
          <span className="hub-stat-num">{groupedTopics.University.length}</span>
          <span className="hub-stat-lbl" style={{ color: '#8b5cf6' }}>University</span>
        </div>
      </div>

      {/* Render each difficulty tier */}
      {(['Foundational', 'Intermediate', 'Advanced', 'University'] as const).map(tier => {
        const topicsInTier = groupedTopics[tier];
        if (topicsInTier.length === 0) return null;
        
        const diff = difficultyConfig[tier];
        const isAdvanced = tier === 'Advanced' || tier === 'University';
        
        // Soft lock Recommendation
        const recommendedLevel = tier === 'University' ? 5 : tier === 'Advanced' ? 3 : 1;
        const needsRecommendation = level < recommendedLevel;

        return (
          <div key={tier} className="hub-tier-section">
            <h2 className="tier-header" style={{ color: diff.color }}>
              <div className="tier-header-icon" style={{ background: diff.bg }}>
                {isAdvanced ? <Activity size={16} /> : <BookOpen size={16} />}
              </div>
              {tier} Stage
            </h2>
            
            <div className="hub-grid">
              {topicsInTier.map((topic) => {
                const TopicIcon = topic.icon;
                const circumference = 2 * Math.PI * 16;
                const offset = circumference * (1 - topic.progress / 100);
                return (
                  <button
                    key={topic.id}
                    className="topic-card"
                    onClick={() => onTopicSelect(topic.id)}
                  >
                    <div className="topic-card-top">
                      <div className="topic-icon-wrap" style={{ background: `color-mix(in srgb, ${data.color} 10%, transparent)`, color: data.color }}>
                        {React.createElement(TopicIcon as any, { size: 20 })}
                      </div>
                      <div className="topic-ring-wrap">
                        <svg width="40" height="40" viewBox="0 0 40 40">
                          <circle cx="20" cy="20" r="16" fill="none" stroke="var(--color-border)" strokeWidth="3.5" />
                          <circle
                            cx="20" cy="20" r="16" fill="none"
                            stroke={data.color} strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={offset}
                            transform="rotate(-90 20 20)"
                          />
                        </svg>
                        <span className="topic-ring-pct" style={{ color: data.color }}>{topic.progress}%</span>
                      </div>
                    </div>

                    <h3 className="topic-title">{topic.title}</h3>
                    <p className="topic-desc">{topic.description}</p>

                    <div className="topic-footer">
                      {needsRecommendation && isAdvanced ? (
                        <span className="difficulty-tag soft-lock">
                          <LockKeyhole size={10} style={{ display: 'inline', marginRight: 4 }} />
                          Rec: Lvl {recommendedLevel}
                        </span>
                      ) : (
                        <span className="difficulty-tag" style={{ color: diff.color, background: diff.bg }}>
                          {topic.difficulty}
                        </span>
                      )}
                      <span className="topic-cta" style={{ color: data.color }}>Open →</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <style>{`
        .subject-hub { display: flex; flex-direction: column; gap: 32px; }

        .hub-hero {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px 32px;
          border-radius: var(--border-radius-lg);
          border: 1px solid;
          position: relative;
          overflow: hidden;
        }

        .hub-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at top right, rgba(255,255,255,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hub-hero-icon {
          width: 64px; height: 64px; border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .hub-hero-text { flex: 1; }
        .hub-title { font-family: var(--font-display); font-size: 26px; font-weight: 700; margin-bottom: 4px; }
        .hub-subtitle { font-size: 14px; color: var(--color-text-secondary); line-height: 1.5; }

        .hub-overall-progress { position: relative; flex-shrink: 0; margin-left: auto; }
        .hub-progress-label { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .hub-progress-pct { font-size: 15px; font-weight: 700; font-family: var(--font-display); line-height: 1; }
        .hub-progress-text { font-size: 9px; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.5px; }

        .hub-stats-row {
          display: flex; gap: 12px; flex-wrap: wrap;
        }

        .hub-stat-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 18px;
          background: var(--color-surface);
          border: var(--border-soft);
          border-radius: var(--border-radius-full);
          box-shadow: var(--shadow-xs);
        }

        .hub-stat-num { font-size: 18px; font-weight: 700; font-family: var(--font-display); color: var(--color-text-primary); }
        .hub-stat-lbl { font-size: 12px; color: var(--color-text-secondary); font-weight: 500; }

        .hub-tier-section { display: flex; flex-direction: column; gap: 16px; }
        
        .tier-header {
          display: flex; align-items: center; gap: 10px;
          font-family: var(--font-display); font-size: 18px; font-weight: 700;
          padding-bottom: 12px; border-bottom: var(--border-soft);
          margin-bottom: 8px;
        }
        .tier-header-icon {
          width: 28px; height: 28px; border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
        }

        .hub-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 16px;
        }

        .topic-card {
          display: flex; flex-direction: column; gap: 12px;
          padding: 22px;
          background: var(--color-surface);
          border: var(--border-soft);
          border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-xs);
          text-align: left;
          cursor: pointer;
          transition: all var(--transition-fast);
          position: relative;
          overflow: hidden;
        }

        .topic-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .topic-card:hover { box-shadow: var(--shadow-md); transform: translateY(-3px); border-color: var(--color-border-strong); }
        .topic-card:hover::before { transform: translateX(0); }

        .topic-card-top { display: flex; align-items: center; justify-content: space-between; }

        .topic-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
        }

        .topic-ring-wrap { position: relative; width: 40px; height: 40px; }
        .topic-ring-pct {
          position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
          font-size: 9px; font-weight: 700; font-family: var(--font-display);
        }

        .topic-title { font-family: var(--font-display); font-size: 15px; font-weight: 600; color: var(--color-text-primary); line-height: 1.3; }
        .topic-desc { font-size: 12.5px; color: var(--color-text-secondary); line-height: 1.6; flex: 1; }

        .topic-footer { display: flex; align-items: center; justify-content: space-between; margin-top: 4px; }

        .difficulty-tag {
          font-size: 10px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
          padding: 3px 10px; border-radius: var(--border-radius-full);
          font-family: var(--font-display);
          display: flex; align-items: center;
        }
        
        .soft-lock {
          color: var(--color-text-secondary);
          background: var(--color-base);
          border: 1px solid var(--color-border);
        }

        .topic-cta { font-size: 12px; font-weight: 600; font-family: var(--font-display); opacity: 0.8; transition: opacity var(--transition-fast); }
        .topic-card:hover .topic-cta { opacity: 1; }
      `}</style>
    </div>
  );
};

export default SubjectHub;
