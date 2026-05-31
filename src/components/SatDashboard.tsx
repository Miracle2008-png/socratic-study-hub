import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, BookOpen, Calculator, Brain, ArrowRight, Loader2, Sparkles, AlertCircle, Clock } from 'lucide-react';
import { usePremium } from '../context/PremiumContext';
import { useStudyProgress } from '../context/StudyProgressContext';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabase';

export const SatDashboard: React.FC<{ onStartModule: (domain: 'Reading & Writing' | 'Math') => void }> = ({ onStartModule }) => {
  const { toggleSatMode } = useStudyProgress();
  const { currentUser } = useAuth();
  
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [displayScore, setDisplayScore] = useState(0);
  const [displayMath, setDisplayMath] = useState(0);
  const [displayReading, setDisplayReading] = useState(0);
  const [showBars, setShowBars] = useState(false);

  // Target Scores (Real Data)
  const [targetMath, setTargetMath] = useState(0);
  const [targetReading, setTargetReading] = useState(0);
  const targetScore = targetMath + targetReading;

  useEffect(() => {
    // Simulate analyzing past mock data
    const analyzeTimer = setTimeout(() => {
      setIsAnalyzing(false);
      
      // Start score animations shortly after analysis finishes
      setTimeout(() => {
        const duration = 1500; // 1.5 seconds animation
        const steps = 60;
        const interval = duration / steps;
        
        let step = 0;
        const animInterval = setInterval(() => {
          step++;
          const progress = step / steps;
          // Ease out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          
          setDisplayScore(Math.floor(targetScore * easeOut));
          setDisplayMath(Math.floor(targetMath * easeOut));
          setDisplayReading(Math.floor(targetReading * easeOut));
          
          if (step >= steps) {
            clearInterval(animInterval);
            setDisplayScore(targetScore);
            setDisplayMath(targetMath);
            setDisplayReading(targetReading);
            setShowBars(true); // Trigger bar animations
          }
        }, interval);
      }, 300);

    }, 2000);

    return () => clearTimeout(analyzeTimer);
  }, [targetMath, targetReading, targetScore]);

  useEffect(() => {
    if (!currentUser) return;
    const fetchScores = async () => {
      const { data } = await supabase.from('sat_scores').select('*').eq('user_id', currentUser.id).single();
      if (data) {
        setTargetMath(data.math_score || 0);
        setTargetReading(data.reading_score || 0);
      }
    };
    fetchScores();
  }, [currentUser]);

  // Domain weaknesses are hidden for now as we need granular data from mocks
  const domainWeaknesses: any[] = [];

  if (isAnalyzing) {
    return (
      <div className="sat-dashboard anim-fade" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '30px', background: 'var(--color-bg)' }}>
        <div style={{ position: 'relative', display: 'inline-flex', marginBottom: '32px' }}>
          <div style={{ position: 'absolute', inset: -20, background: 'var(--color-accent)', filter: 'blur(30px)', opacity: 0.15, borderRadius: '50%', animation: 'pulse 2s infinite' }}></div>
          <Loader2 size={56} color="var(--color-accent)" className="spin" style={{ position: 'relative', zIndex: 1 }} />
        </div>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '12px', letterSpacing: '-0.5px' }}>Analyzing mock exam history...</h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', fontWeight: 500 }}>Calibrating your personalized SAT trajectory</p>
      </div>
    );
  }

  return (
    <div className="sat-dashboard anim-fade" style={{ height: '100%', overflowY: 'auto', padding: '30px 40px', background: 'var(--color-bg)' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '24px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
            <div style={{ background: 'linear-gradient(135deg, #fff, #aaa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              <h1 style={{ fontSize: '36px', fontWeight: 800, margin: 0, letterSpacing: '-0.5px' }}>Bluebook™ Tracker</h1>
            </div>
            <span style={{ background: '#10b98115', color: '#10b981', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, border: '1px solid #10b98133', display: 'flex', alignItems: 'center', gap: '6px', letterSpacing: '0.5px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block', boxShadow: '0 0 10px #10b981' }}></span>
              LIVE DATA
            </span>
          </div>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '16px', margin: 0, fontWeight: 500 }}>Your elite, data-driven training ground for the Digital SAT.</p>
        </div>
        <button 
          onClick={toggleSatMode}
          className="dash-ghost-btn hover-lift" 
          style={{ borderColor: 'rgba(239, 68, 68, 0.3)', color: '#ef4444', background: 'rgba(239, 68, 68, 0.05)', padding: '10px 24px', borderRadius: '12px', fontWeight: 600 }}
        >
          Exit SAT Mode
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 2fr', gap: '32px', marginBottom: '40px' }}>
        
        {/* Score Visualizer */}
        <div className="dash-glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 32px', background: 'linear-gradient(180deg, rgba(30,30,30,0.6) 0%, rgba(15,15,15,0.9) 100%)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
          
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)', opacity: 0.3 }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', width: '100%', justifyContent: 'center' }}>
            <Brain size={20} color="var(--color-accent)" />
            <h3 style={{ fontSize: '15px', textTransform: 'uppercase', letterSpacing: '3px', color: 'var(--color-text-secondary)', margin: 0, fontWeight: 700 }}>Predicted Score</h3>
          </div>
          
          <div style={{ position: 'relative', width: '240px', height: '240px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: `conic-gradient(var(--color-accent) 0%, var(--color-accent) ${(displayScore/1600)*100}%, rgba(255,255,255,0.03) ${(displayScore/1600)*100}%, rgba(255,255,255,0.03) 100%)`, boxShadow: '0 0 40px rgba(212,175,55,0.1)', transition: 'background 0.1s linear' }}>
            <div style={{ position: 'absolute', width: '216px', height: '216px', background: 'var(--color-bg)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)' }}>
              <span style={{ fontSize: '64px', fontWeight: 800, color: 'var(--color-text-primary)', lineHeight: 1, textShadow: '0 0 20px rgba(212,175,55,0.2)' }}>{displayScore}</span>
              <span style={{ fontSize: '16px', color: 'var(--color-text-muted)', marginTop: '8px', fontWeight: 600, letterSpacing: '2px' }}>/ 1600</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', marginTop: '48px', width: '100%', justifyContent: 'center' }}>
            <div style={{ flex: 1, textAlign: 'center', background: 'rgba(59, 130, 246, 0.03)', padding: '20px 16px', borderRadius: '16px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
              <div style={{ color: '#60a5fa', fontWeight: 800, fontSize: '32px', marginBottom: '6px' }}>{displayReading}</div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>Reading</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center', background: 'rgba(239, 68, 68, 0.03)', padding: '20px 16px', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.1)' }}>
              <div style={{ color: '#f87171', fontWeight: 800, fontSize: '32px', marginBottom: '6px' }}>{displayMath}</div>
              <div style={{ color: 'var(--color-text-secondary)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: 600 }}>Math</div>
            </div>
          </div>
        </div>

        {/* Modules & Domains */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            
            {/* Reading Card */}
            <div className="dash-glass-panel exam-card reading-card" onClick={() => onStartModule('Reading & Writing')}>
              <div className="exam-card-header">
                <div className="exam-icon-wrapper reading-icon">
                  <BookOpen size={24} />
                </div>
                <div className="exam-status reading-status">Ready</div>
              </div>
              <div className="exam-card-body">
                <h3>Reading & Writing</h3>
                <p>Module 1 & 2 • Official Bluebook Format • Standard Time</p>
                <div className="exam-stats">
                  <span><Clock size={14}/> 64 min</span>
                  <span><Target size={14}/> 54 Qs</span>
                </div>
              </div>
              <div className="exam-card-footer reading-footer">
                <button className="exam-btn reading-btn">
                  Start Practice <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Math Card */}
            <div className="dash-glass-panel exam-card math-card" onClick={() => onStartModule('Math')}>
              <div className="exam-card-header">
                <div className="exam-icon-wrapper math-icon">
                  <Calculator size={24} />
                </div>
                <div className="exam-status math-status">Ready</div>
              </div>
              <div className="exam-card-body">
                <h3>Mathematics</h3>
                <p>Module 1 & 2 • Desmos Integration • Standard Time</p>
                <div className="exam-stats">
                  <span><Clock size={14}/> 70 min</span>
                  <span><Target size={14}/> 44 Qs</span>
                </div>
              </div>
              <div className="exam-card-footer math-footer">
                <button className="exam-btn math-btn">
                  Start Practice <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>

          {/* Weaknesses */}
          <div className="dash-glass-panel target-domains-panel" style={{ padding: '32px', background: 'rgba(20,20,20,0.5)', border: '1px solid rgba(255,255,255,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: '12px', margin: 0, letterSpacing: '0.5px' }}>
                <TrendingUp size={22} color="var(--color-accent)"/> Target Domain Weaknesses
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-text-muted)', fontSize: '13px', fontWeight: 500 }}>
                <AlertCircle size={14}/> Focus areas to reach 1500+
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px 48px' }}>
              {targetScore === 0 ? (
                <div style={{ gridColumn: '1 / -1', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', color: 'var(--color-text-muted)', fontSize: '14px', textAlign: 'center' }}>
                  Take a mock exam to reveal your domain weaknesses.
                </div>
              ) : domainWeaknesses.length > 0 ? (
                domainWeaknesses.map((domain, i) => (
                  <DomainBar key={i} title={domain.title} pct={domain.pct} color={domain.color} show={showBars} index={i} />
                ))
              ) : (
                <div style={{ gridColumn: '1 / -1', padding: '20px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', color: 'var(--color-text-muted)', fontSize: '14px', textAlign: 'center' }}>
                  Detailed domain analysis requires taking more mock exams to generate sufficient data.
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

const DomainBar = ({ title, pct, color, show, index }: { title: string, pct: number, color: string, show: boolean, index: number }) => {
  const [currentPct, setCurrentPct] = useState(0);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setCurrentPct(pct);
      }, index * 200); // Stagger animations nicely
    }
  }, [show, pct, index]);

  return (
    <div className="domain-bar-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>
        <span style={{ color: 'var(--color-text-primary)' }}>{title}</span>
        <span style={{ color: color, fontWeight: 800 }}>{currentPct}%</span>
      </div>
      <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.04)', borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.02)' }}>
        <div style={{ 
          width: `${currentPct}%`, 
          height: '100%', 
          background: color, 
          borderRadius: '4px',
          transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          boxShadow: `0 0 12px ${color}66`
        }}></div>
      </div>
    </div>
  );
};
