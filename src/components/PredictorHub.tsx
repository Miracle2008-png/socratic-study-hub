import React, { useState } from 'react';
import { usePremium } from '../context/PremiumContext';
import { useGamification } from '../context/GamificationContext';
import { GeminiService } from '../services/GeminiService';
import { Globe, Target, Briefcase, GraduationCap, ChevronRight, AlertTriangle, RefreshCw, Star } from 'lucide-react';

export const PredictorHub: React.FC = () => {
  const { useInsight } = usePremium();
  const { addXP } = useGamification();

  const [profile, setProfile] = useState({
    gpa: '',
    satScore: '',
    interests: '',
    extracurriculars: '',
    region: 'Global'
  });

  const [predictionState, setPredictionState] = useState<'setup' | 'predicting' | 'results' | 'error'>('setup');
  const [errorMessage, setErrorMessage] = useState('');
  const [results, setResults] = useState<any>(null);

  const handlePredict = async () => {
    if (!profile.gpa || !profile.interests) {
      alert("Please enter at least your GPA and interests.");
      return;
    }

    if (!GeminiService.getApiKey()) {
      alert("Please add your Gemini API Key in the Settings panel first.");
      return;
    }

    // This is a massive feature, it costs 2 insights
    if (!useInsight()) return;
    if (!useInsight()) return; // Call twice to deduct 2 (in a real app, update context to allow deduct(2))

    setPredictionState('predicting');

    try {
      const data = await GeminiService.predictUniversityAndCareer(profile);
      setResults(data);
      setPredictionState('results');
      addXP(1000, 'Ran Future Predictor');
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to predict future.');
      setPredictionState('error');
    }
  };

  const updateProfile = (field: keyof typeof profile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="predictor-hub anim-fade" style={{ height: '100%', overflowY: 'auto', padding: '20px' }}>
      
      <div className="dash-hero" style={{ padding: '30px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 className="dash-headline" style={{ fontSize: '28px' }}>Global Future <span className="dash-headline-accent">Predictor</span></h1>
          <p className="dash-subline" style={{ maxWidth: '600px' }}>
            Enter your academic profile. Our elite AI counselor will analyze your data to predict your SAT score, match you with global universities, and recommend high-growth careers.
          </p>
        </div>
        <Globe size={64} style={{ color: 'var(--color-accent)', opacity: 0.3 }} />
      </div>

      {predictionState === 'setup' && (
        <div className="dash-glass-panel" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', padding: '32px' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={labelStyle}>Current/Target GPA</label>
              <input type="text" value={profile.gpa} onChange={(e) => updateProfile('gpa', e.target.value)} placeholder="e.g. 3.8 or 95%" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>SAT Score (Optional)</label>
              <input type="text" value={profile.satScore} onChange={(e) => updateProfile('satScore', e.target.value)} placeholder="e.g. 1450" style={inputStyle} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Academic Interests / Favorite Subjects</label>
            <input type="text" value={profile.interests} onChange={(e) => updateProfile('interests', e.target.value)} placeholder="e.g. Computer Science, Physics, Writing" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Extracurriculars & Achievements</label>
            <textarea value={profile.extracurriculars} onChange={(e) => updateProfile('extracurriculars', e.target.value)} placeholder="e.g. Debate Club President, built a mobile app" style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} />
          </div>

          <div>
            <label style={labelStyle}>Preferred University Region</label>
            <select value={profile.region} onChange={(e) => updateProfile('region', e.target.value)} style={inputStyle}>
              <option value="Global">Around the World (Global Search)</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Europe">Europe</option>
              <option value="Australia">Australia</option>
              <option value="Asia">Asia</option>
            </select>
          </div>

          <button className="gold-btn pulse-glow" onClick={handlePredict} style={{ padding: '16px', fontSize: '16px', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <Star size={20} style={{ marginRight: '8px' }} /> Run Global Predictor (2 Insights)
          </button>
        </div>
      )}

      {predictionState === 'predicting' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', gap: '20px' }}>
          <RefreshCw size={48} className="spin-slow" style={{ color: 'var(--color-accent)' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}>Analyzing Global Data...</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Cross-referencing admission trends and career salaries.</p>
        </div>
      )}

      {predictionState === 'error' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh', gap: '20px', textAlign: 'center' }}>
          <AlertTriangle size={48} style={{ color: '#ef4444' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#ef4444' }}>Prediction Failed</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>{errorMessage}</p>
          <button className="gold-btn" onClick={() => setPredictionState('setup')}>Try Again</button>
        </div>
      )}

      {predictionState === 'results' && results && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div className="dash-glass-panel">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)', marginBottom: '16px', fontSize: '18px' }}>
                <Target size={20} /> SAT & Academic Forecast
              </h3>
              <p style={{ color: 'var(--color-text-primary)', lineHeight: 1.6 }}>{results.satPrediction}</p>
            </div>

            <div className="dash-glass-panel">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)', marginBottom: '16px', fontSize: '18px' }}>
                <Briefcase size={20} /> Top Career Matches
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {results.careers?.map((c: any, i: number) => (
                  <div key={i} style={{ background: 'var(--color-base)', padding: '16px', borderRadius: '8px', borderLeft: '3px solid var(--color-accent)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <strong style={{ color: 'var(--color-text-primary)' }}>{c.title}</strong>
                      <span style={{ color: '#10b981', fontWeight: 600, fontSize: '14px' }}>{c.salary}</span>
                    </div>
                    <div style={{ color: 'var(--color-text-secondary)', fontSize: '13px', lineHeight: 1.5 }}>{c.match}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="dash-glass-panel">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)', marginBottom: '16px', fontSize: '18px' }}>
                <ChevronRight size={20} /> Next Steps (Action Plan)
              </h3>
              <ul style={{ color: 'var(--color-text-primary)', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {results.actionPlan?.map((step: string, i: number) => (
                  <li key={i} style={{ lineHeight: 1.5 }}>{step}</li>
                ))}
              </ul>
            </div>

          </div>

          <div className="dash-glass-panel" style={{ height: 'fit-content' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent)', marginBottom: '20px', fontSize: '18px' }}>
              <GraduationCap size={20} /> University Matches ({profile.region})
            </h3>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#ef4444', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Reach Schools</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {results.universities?.reach?.map((u: any, i: number) => <UniCard key={i} uni={u} color="#ef4444" />)}
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ color: '#f59e0b', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Target Schools</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {results.universities?.target?.map((u: any, i: number) => <UniCard key={i} uni={u} color="#f59e0b" />)}
              </div>
            </div>

            <div>
              <h4 style={{ color: '#10b981', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Safety Schools</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {results.universities?.safety?.map((u: any, i: number) => <UniCard key={i} uni={u} color="#10b981" />)}
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

const UniCard = ({ uni, color }: { uni: any, color: string }) => (
  <div style={{ background: 'var(--color-base)', padding: '16px', borderRadius: '8px', border: `1px solid ${color}33` }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
      <div>
        <div style={{ color: 'var(--color-text-primary)', fontWeight: 600, fontSize: '15px' }}>{uni.name}</div>
        <div style={{ color: 'var(--color-text-muted)', fontSize: '12px', marginTop: '2px' }}><Globe size={10} style={{display:'inline', marginRight: '4px'}}/>{uni.location}</div>
      </div>
      <div style={{ background: `${color}22`, color: color, padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>
        {uni.chance} Match
      </div>
    </div>
    <div style={{ color: 'var(--color-text-secondary)', fontSize: '13px', lineHeight: 1.4 }}>{uni.why}</div>
  </div>
);

const labelStyle = {
  display: 'block',
  fontSize: '12px',
  color: 'var(--color-text-muted)',
  marginBottom: '6px',
  textTransform: 'uppercase' as const,
  letterSpacing: '1px'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  background: 'var(--color-base-alt)',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  color: 'var(--color-text-primary)',
  fontSize: '14px',
  fontFamily: 'var(--font-primary)',
  outline: 'none'
};
