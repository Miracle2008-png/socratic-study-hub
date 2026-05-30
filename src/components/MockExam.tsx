import React, { useState, useEffect } from 'react';
import { Target, Clock, AlertTriangle, CheckCircle, ChevronRight, List, BrainCircuit, RefreshCw } from 'lucide-react';
import { usePremium } from '../context/PremiumContext';
import { useGamification } from '../context/GamificationContext';
import { GeminiService } from '../services/GeminiService';

interface MockQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const MockExam: React.FC = () => {
  const { useInsight } = usePremium();
  const { addXP } = useGamification();
  
  const [examTopic, setExamTopic] = useState('');
  const [isSatMode, setIsSatMode] = useState(false);
  const [examState, setExamState] = useState<'setup' | 'generating' | 'taking' | 'results' | 'error'>('setup');
  const [errorMessage, setErrorMessage] = useState('');
  const [questions, setQuestions] = useState<MockQuestion[]>([]);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 mins

  useEffect(() => {
    let timer: any;
    if (examState === 'taking' && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0 && examState === 'taking') {
      submitExam();
    }
    return () => clearInterval(timer);
  }, [examState, timeLeft]);

  const generateExam = async () => {
    if (!examTopic.trim()) return;
    
    if (!GeminiService.getApiKey()) {
      alert("Please add your Gemini API Key in the Settings panel first.");
      return;
    }

    if (!useInsight()) return;

    setExamState('generating');
    
    try {
      const generatedQuestions = await GeminiService.generateMockExam(examTopic, isSatMode);
      if (Array.isArray(generatedQuestions) && generatedQuestions.length > 0) {
        setQuestions(generatedQuestions);
        setExamState('taking');
        setTimeLeft(isSatMode ? 1200 : 600); // More time for SAT
        setCurrentQIndex(0);
        setAnswers({});
      } else {
        throw new Error("Invalid format returned by AI.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to generate exam.');
      setExamState('error');
    }
  };

  const selectAnswer = (optIndex: number) => {
    setAnswers(prev => ({ ...prev, [currentQIndex]: optIndex }));
  };

  const nextQ = () => {
    if (currentQIndex < questions.length - 1) {
      setCurrentQIndex(prev => prev + 1);
    } else {
      submitExam();
    }
  };

  const submitExam = () => {
    setExamState('results');
    const score = Object.entries(answers).reduce((acc, [qIdx, aIdx]) => {
      return aIdx === questions[parseInt(qIdx)].correctIndex ? acc + 1 : acc;
    }, 0);
    addXP(score * (isSatMode ? 300 : 200), 'Mock Exam Completed');
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="mock-exam anim-fade" style={{ height: '100%', overflowY: 'auto', padding: '20px' }}>
      {examState === 'setup' && (
        <div style={{ maxWidth: '600px', margin: '40px auto' }}>
          <div className="dash-glass-panel" style={{ textAlign: 'center', padding: '40px' }}>
            <Target size={48} style={{ color: 'var(--color-accent)', marginBottom: '20px' }} />
            <h1 className="dash-headline" style={{ fontSize: '28px', marginBottom: '16px' }}>Generate <span className="dash-headline-accent">Mock Exam</span></h1>
            <p className="dash-subline" style={{ margin: '0 auto 30px' }}>
              Enter a subject, chapter, or topic. Lumen will generate a timed, university-level multiple-choice exam to test your readiness.
            </p>
            
            <input 
              type="text" 
              value={examTopic}
              onChange={(e) => setExamTopic(e.target.value)}
              placeholder={isSatMode ? "e.g. SAT Math: Heart of Algebra" : "e.g. Quantum Mechanics Chapter 3"}
              style={{ width: '100%', padding: '16px', background: 'var(--color-base)', border: '1px solid var(--color-border)', borderRadius: '12px', color: 'white', fontSize: '16px', marginBottom: '20px', outline: 'none', textAlign: 'center' }}
            />
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '24px' }}>
              <input 
                type="checkbox" 
                id="satMode" 
                checked={isSatMode}
                onChange={(e) => setIsSatMode(e.target.checked)}
                style={{ cursor: 'pointer', width: '18px', height: '18px', accentColor: 'var(--color-accent)' }}
              />
              <label htmlFor="satMode" style={{ color: 'var(--color-text-secondary)', cursor: 'pointer', fontWeight: 600 }}>
                Enable SAT Test Mode (Official Format)
              </label>
            </div>
            
            <button 
              className="gold-btn pulse-glow" 
              onClick={generateExam}
              disabled={!examTopic.trim()}
              style={{ width: '100%', padding: '16px', fontSize: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', opacity: !examTopic.trim() ? 0.5 : 1 }}
            >
              <BrainCircuit size={20} /> Generate Exam (1 Insight)
            </button>
          </div>
        </div>
      )}

      {examState === 'generating' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', gap: '20px' }}>
          <RefreshCw size={48} className="spin-slow" style={{ color: 'var(--color-accent)' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text-primary)' }}>Constructing Exam...</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Analyzing curriculum for {examTopic}</p>
        </div>
      )}

      {examState === 'error' && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', gap: '20px', textAlign: 'center' }}>
          <AlertTriangle size={48} style={{ color: '#ef4444' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', color: '#ef4444' }}>Generation Failed</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>{errorMessage}</p>
          <button className="gold-btn" onClick={() => setExamState('setup')}>Try Again</button>
        </div>
      )}

      {examState === 'taking' && questions.length > 0 && (
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="dash-glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px' }}>
            <div>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {isSatMode ? 'SAT Mode' : 'Topic'}
              </span>
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text-primary)' }}>{examTopic}</div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: timeLeft < 60 ? '#ef4444' : 'var(--color-text-primary)', fontWeight: 700, fontSize: '20px', fontFamily: 'var(--font-mono)' }}>
              <Clock size={20} /> {formatTime(timeLeft)}
            </div>
          </div>
          
          <div className="dash-glass-panel">
            <div style={{ fontSize: '12px', color: 'var(--color-accent)', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Question {currentQIndex + 1} of {questions.length}
            </div>
            
            <h3 style={{ fontSize: '20px', color: 'var(--color-text-primary)', lineHeight: 1.5, marginBottom: '24px', fontFamily: 'var(--font-primary)' }}>
              {questions[currentQIndex]?.question}
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {questions[currentQIndex]?.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => selectAnswer(i)}
                  style={{
                    padding: '16px 20px', textAlign: 'left', borderRadius: '12px', fontSize: '15px', lineHeight: 1.4, transition: 'all 0.2s',
                    background: answers[currentQIndex] === i ? 'rgba(212,175,55,0.1)' : 'var(--color-base-alt)',
                    border: `1px solid ${answers[currentQIndex] === i ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    color: answers[currentQIndex] === i ? 'var(--color-accent)' : 'var(--color-text-primary)',
                    cursor: 'pointer'
                  }}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button 
              onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
              disabled={currentQIndex === 0}
              style={{ padding: '12px 24px', background: 'transparent', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-text-primary)', opacity: currentQIndex === 0 ? 0.3 : 1, cursor: currentQIndex === 0 ? 'default' : 'pointer' }}
            >
              Previous
            </button>
            <button 
              className="gold-btn"
              onClick={nextQ}
              disabled={answers[currentQIndex] === undefined}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: answers[currentQIndex] === undefined ? 0.5 : 1 }}
            >
              {currentQIndex === questions.length - 1 ? 'Submit Exam' : 'Next Question'} <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {examState === 'results' && questions.length > 0 && (() => {
        const score = Object.entries(answers).reduce((acc, [qIdx, aIdx]) => {
          return aIdx === questions[parseInt(qIdx)].correctIndex ? acc + 1 : acc;
        }, 0);
        const pct = Math.round((score / questions.length) * 100);
        
        return (
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="dash-hero" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, fontFamily: 'var(--font-display)', color: pct >= 80 ? '#10b981' : pct >= 60 ? '#f59e0b' : '#ef4444' }}>
                {pct}%
              </div>
              <h2 style={{ fontSize: '24px', color: 'var(--color-text-primary)', marginTop: '8px', marginBottom: '16px' }}>
                {pct >= 80 ? 'Excellent Work!' : pct >= 60 ? 'Good Effort.' : 'Needs Review.'}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)' }}>You scored {score} out of {questions.length} on {examTopic}.</p>
              
              <button className="dash-ghost-btn" onClick={() => setExamState('setup')} style={{ marginTop: '24px' }}>
                Take Another Exam
              </button>
            </div>
            
            <h3 style={{ fontSize: '18px', color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>Detailed Review</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {questions.map((q, i) => {
                const isCorrect = answers[i] === q.correctIndex;
                return (
                  <div key={i} className="dash-glass-panel" style={{ borderLeft: `4px solid ${isCorrect ? '#10b981' : '#ef4444'}` }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      {isCorrect ? <CheckCircle size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} /> : <AlertTriangle size={20} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />}
                      <div>
                        <div style={{ fontSize: '15px', color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '12px' }}>{q.question}</div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                          {q.options.map((opt, optIdx) => {
                            let bg = 'var(--color-base-alt)';
                            let border = '1px solid var(--color-border)';
                            let color = 'var(--color-text-muted)';
                            
                            if (optIdx === q.correctIndex) {
                              bg = 'rgba(16, 185, 129, 0.1)'; border = '1px solid #10b981'; color = '#10b981';
                            } else if (optIdx === answers[i] && !isCorrect) {
                              bg = 'rgba(239, 68, 68, 0.1)'; border = '1px solid #ef4444'; color = '#ef4444';
                            }
                            
                            return (
                              <div key={optIdx} style={{ padding: '10px 14px', borderRadius: '8px', background: bg, border, color, fontSize: '14px' }}>
                                {opt} {optIdx === answers[i] && '(Your Answer)'}
                              </div>
                            );
                          })}
                        </div>
                        
                        {!isCorrect && (
                          <div style={{ background: 'rgba(212,175,55,0.05)', border: '1px solid rgba(212,175,55,0.2)', padding: '12px', borderRadius: '8px' }}>
                            <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '6px' }}>AI Explanation</div>
                            <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{q.explanation}</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

    </div>
  );
};
