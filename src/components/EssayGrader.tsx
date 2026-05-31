import React, { useState } from 'react';
import { PenTool, Target, UploadCloud, ChevronRight, Activity, FileText, CheckCircle, BrainCircuit } from 'lucide-react';
import { usePremium } from '../context/PremiumContext';
import { useGamification } from '../context/GamificationContext';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { GeminiService } from '../services/GeminiService';

export const EssayGrader: React.FC = () => {
  const { useInsight } = usePremium();
  const { addXP } = useGamification();
  const [essayText, setEssayText] = useState('');
  const [rubric, setRubric] = useState('university');
  const [isGrading, setIsGrading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleGrade = async () => {
    if (!essayText.trim()) return;
    
    // Check for API key first
    if (!GeminiService.getApiKey()) {
      alert("Please add your Gemini API Key in the Settings panel first.");
      return;
    }

    // Deduct insight
    if (!useInsight()) return;

    setIsGrading(true);
    
    try {
      const realFeedback = await GeminiService.gradeEssay(essayText, rubric);
      setFeedback(realFeedback);
      addXP(500, 'Essay Evaluated');
    } catch (error: any) {
      setFeedback(`## ❌ Error Grading Essay\n\n${error.message}\n\nPlease check your API key and internet connection.`);
    } finally {
      setIsGrading(false);
    }
  };

  return (
    <div className="essay-grader anim-fade" style={{ height: '100%', overflowY: 'auto', padding: '20px' }}>
      <div className="dash-hero" style={{ padding: '30px', marginBottom: '24px' }}>
        <div className="dash-hero-left">
          <h1 className="dash-headline" style={{ fontSize: '28px' }}>AI Essay <span className="dash-headline-accent">Grader</span></h1>
          <p className="dash-subline" style={{ maxWidth: '600px' }}>
            Paste your essay, project, or thesis below. The AI will act as a strict university professor, predicting your grade and highlighting exact areas of improvement before you submit it.
          </p>
        </div>
        <div className="dash-hero-right" style={{ opacity: 0.2 }}>
          <PenTool size={100} />
        </div>
      </div>

      <div className="grader-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        
        {/* Left Side: Input */}
        <div className="dash-glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-text-primary)' }}>Your Essay</span>
            
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Grading Strictness:</span>
              <select 
                value={rubric}
                onChange={(e) => setRubric(e.target.value)}
                style={{ background: 'var(--color-base-alt)', border: '1px solid var(--color-border)', borderRadius: '6px', color: 'var(--color-text-primary)', padding: '4px 8px', fontSize: '12px', outline: 'none' }}
              >
                <option value="high_school">High School</option>
                <option value="university">University (Strict)</option>
                <option value="ivy_league">Ivy League (Ruthless)</option>
              </select>
            </div>
          </div>
          
          <textarea 
            value={essayText}
            onChange={(e) => setEssayText(e.target.value)}
            placeholder="Paste your essay here..."
            style={{ 
              width: '100%', flex: 1, minHeight: '400px', padding: '16px', 
              background: 'var(--color-base-alt)', border: '1px solid var(--color-border)', 
              borderRadius: '12px', color: 'var(--color-text-primary)', fontSize: '14px',
              resize: 'none', outline: 'none', fontFamily: 'var(--font-primary)',
              lineHeight: '1.6'
            }}
          />
          
          <button 
            className="gold-btn pulse-glow" 
            onClick={handleGrade}
            disabled={!essayText.trim() || isGrading}
            style={{ width: '100%', padding: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: !essayText.trim() ? 0.5 : 1 }}
          >
            {isGrading ? (
              <><div className="dot-flashing" style={{ margin: '0 10px' }}></div> Grading...</>
            ) : (
              <><BrainCircuit size={18} /> Evaluate Essay (1 Insight)</>
            )}
          </button>
        </div>

        {/* Right Side: Output */}
        <div className="dash-glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="panel-header" style={{ marginBottom: '16px' }}>
            <div className="panel-title-row">
              <Activity size={16} style={{ color: 'var(--color-accent)' }} />
              <h3 className="panel-title">Professor's Feedback</h3>
            </div>
          </div>
          
          <div className="feedback-content" style={{ flex: 1, background: 'var(--color-base-alt)', borderRadius: '12px', border: '1px solid var(--color-border)', padding: '24px', overflowY: 'auto' }}>
            {feedback ? (
              <div className="markdown-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{feedback}</ReactMarkdown>
              </div>
            ) : isGrading ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', color: 'var(--color-text-muted)' }}>
                <BrainCircuit size={48} className="spin-slow" style={{ color: 'var(--color-accent)' }} />
                <p>Analyzing argument structure and syntax...</p>
              </div>
            ) : (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px', color: 'var(--color-text-muted)', textAlign: 'center' }}>
                <FileText size={48} style={{ opacity: 0.2 }} />
                <p style={{ maxWidth: '200px', fontSize: '14px' }}>Paste your essay and hit evaluate to see your predicted grade.</p>
              </div>
            )}
          </div>
        </div>

      </div>

      <style>{`
        .markdown-body h2 {
          color: var(--color-accent);
          font-family: var(--font-display);
          font-size: 24px;
          margin-top: 0;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 12px;
        }
        .markdown-body h3 {
          color: var(--color-text-primary);
          font-family: var(--font-display);
          font-size: 16px;
          margin-top: 20px;
          margin-bottom: 12px;
        }
        .markdown-body p, .markdown-body ul {
          color: var(--color-text-secondary);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .markdown-body li {
          margin-bottom: 8px;
        }
        .markdown-body strong {
          color: var(--color-text-primary);
        }
        
        @media (max-width: 900px) {
          .grader-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
