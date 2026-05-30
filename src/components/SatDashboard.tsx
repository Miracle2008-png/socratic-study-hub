import React from 'react';
import { Target, TrendingUp, BookOpen, Calculator, Brain, ArrowRight } from 'lucide-react';
import { usePremium } from '../context/PremiumContext';
import { useStudyProgress } from '../context/StudyProgressContext';

export const SatDashboard: React.FC<{ onStartModule: (domain: 'Reading & Writing' | 'Math') => void }> = ({ onStartModule }) => {
  const { useInsight } = usePremium();
  const { toggleSatMode } = useStudyProgress();
  
  // Hardcoded for now. In a fully realized app, we'd calculate this from past mock scores.
  const currentScore = 1320; 
  const mathScore = 680;
  const readingScore = 640;

  return (
    <div className="sat-dashboard anim-fade" style={{ height: '100%', overflowY: 'auto', padding: '30px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h1 className="dash-headline" style={{ fontSize: '32px', margin: 0 }}>SAT Prep <span className="dash-headline-accent">Headquarters</span></h1>
            <span style={{ background: '#10b98122', color: '#10b981', padding: '4px 12px', borderRadius: '16px', fontSize: '12px', fontWeight: 800, border: '1px solid #10b981' }}>LIVE</span>
          </div>
          <p className="dash-subline" style={{ marginTop: '8px' }}>Your elite training ground for the Digital SAT.</p>
        </div>
        <button 
          onClick={toggleSatMode}
          className="dash-ghost-btn" 
          style={{ borderColor: '#ef4444', color: '#ef4444' }}
        >
          Exit SAT Mode
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', marginBottom: '32px' }}>
        
        {/* Score Visualizer */}
        <div className="dash-glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>Predicted Score</h3>
          
          <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', background: 'conic-gradient(var(--color-accent) 0%, var(--color-accent) 82%, var(--color-base-alt) 82%, var(--color-base-alt) 100%)', boxShadow: '0 0 30px rgba(212,175,55,0.1)' }}>
            <div style={{ position: 'absolute', width: '180px', height: '180px', background: 'var(--color-base)', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '48px', fontWeight: 800, color: 'var(--color-text-primary)' }}>{currentScore}</span>
              <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>/ 1600</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '24px', marginTop: '32px', width: '100%', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#3b82f6', fontWeight: 700, fontSize: '24px' }}>{readingScore}</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', textTransform: 'uppercase' }}>Reading</div>
            </div>
            <div style={{ width: '1px', background: 'var(--color-border)' }}></div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#ef4444', fontWeight: 700, fontSize: '24px' }}>{mathScore}</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', textTransform: 'uppercase' }}>Math</div>
            </div>
          </div>
        </div>

        {/* Modules & Domains */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            
            <div className="dash-glass-panel hover-lift" style={{ cursor: 'pointer', border: '1px solid #3b82f644' }} onClick={() => onStartModule('Reading & Writing')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ background: '#3b82f622', padding: '12px', borderRadius: '12px' }}>
                  <BookOpen size={24} color="#3b82f6" />
                </div>
                <ArrowRight size={20} color="var(--color-text-muted)" />
              </div>
              <h3 style={{ fontSize: '20px', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Reading & Writing Module</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '16px' }}>10 questions • Bluebook format • Full text passages.</p>
              <button className="gold-btn" style={{ width: '100%', background: '#3b82f6', color: '#fff' }}>Start Practice</button>
            </div>

            <div className="dash-glass-panel hover-lift" style={{ cursor: 'pointer', border: '1px solid #ef444444' }} onClick={() => onStartModule('Math')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ background: '#ef444422', padding: '12px', borderRadius: '12px' }}>
                  <Calculator size={24} color="#ef4444" />
                </div>
                <ArrowRight size={20} color="var(--color-text-muted)" />
              </div>
              <h3 style={{ fontSize: '20px', color: 'var(--color-text-primary)', marginBottom: '8px' }}>Math Module</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '16px' }}>10 questions • Heart of Algebra • Desmos enabled.</p>
              <button className="gold-btn" style={{ width: '100%', background: '#ef4444', color: '#fff' }}>Start Practice</button>
            </div>

          </div>

          <div className="dash-glass-panel">
            <h3 style={{ fontSize: '16px', color: 'var(--color-text-primary)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}><Target size={18} color="var(--color-accent)"/> Target Domain Weaknesses</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <DomainBar title="Heart of Algebra" pct={85} color="#ef4444" />
              <DomainBar title="Information & Ideas" pct={60} color="#3b82f6" />
              <DomainBar title="Advanced Math" pct={45} color="#ef4444" />
              <DomainBar title="Craft & Structure" pct={75} color="#3b82f6" />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

const DomainBar = ({ title, pct, color }: { title: string, pct: number, color: string }) => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
      <span style={{ color: 'var(--color-text-primary)' }}>{title}</span>
      <span style={{ color: 'var(--color-text-muted)' }}>{pct}%</span>
    </div>
    <div style={{ width: '100%', height: '6px', background: 'var(--color-base-alt)', borderRadius: '3px', overflow: 'hidden' }}>
      <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '3px' }}></div>
    </div>
  </div>
);
