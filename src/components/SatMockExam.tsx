import React, { useState, useEffect } from 'react';
import { Clock, Calculator, Flag, ChevronLeft, ChevronRight, X, Maximize, AlertTriangle, RefreshCw } from 'lucide-react';
import { GeminiService } from '../services/GeminiService';
import { useGamification } from '../context/GamificationContext';

interface SatQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface SatMockExamProps {
  domain: 'Reading & Writing' | 'Math';
  onExit: () => void;
}

export const SatMockExam: React.FC<SatMockExamProps> = ({ domain, onExit }) => {
  const { addXP } = useGamification();
  
  const [questions, setQuestions] = useState<SatQuestion[]>([]);
  const [examState, setExamState] = useState<'generating' | 'taking' | 'results' | 'error'>('generating');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [crossedOut, setCrossedOut] = useState<Record<number, Set<number>>>({});
  
  const [timeLeft, setTimeLeft] = useState(domain === 'Reading & Writing' ? 1920 : 2100); // 32 min RW, 35 min Math
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    generateModule();
  }, [domain]);

  useEffect(() => {
    if (examState !== 'taking') return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          submitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [examState]);

  const generateModule = async () => {
    setExamState('generating');
    try {
      const data = await GeminiService.generateSatModule(domain);
      if (Array.isArray(data) && data.length > 0) {
        setQuestions(data);
        setExamState('taking');
      } else {
        throw new Error("Invalid format from AI.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || 'Failed to generate SAT Module.');
      setExamState('error');
    }
  };

  const toggleFlag = () => {
    const newFlagged = new Set(flagged);
    if (newFlagged.has(currentQIndex)) {
      newFlagged.delete(currentQIndex);
    } else {
      newFlagged.add(currentQIndex);
    }
    setFlagged(newFlagged);
  };

  const toggleCrossOut = (e: React.MouseEvent, qIndex: number, optIndex: number) => {
    e.stopPropagation(); // prevent selecting the answer
    setCrossedOut(prev => {
      const currentCrossed = prev[qIndex] ? new Set(prev[qIndex]) : new Set<number>();
      if (currentCrossed.has(optIndex)) {
        currentCrossed.delete(optIndex);
      } else {
        currentCrossed.add(optIndex);
      }
      return { ...prev, [qIndex]: currentCrossed };
    });
  };

  const submitExam = () => {
    setExamState('results');
    const score = Object.entries(answers).reduce((acc, [qIdx, aIdx]) => {
      return aIdx === questions[parseInt(qIdx)].correctIndex ? acc + 1 : acc;
    }, 0);
    addXP(score * 400, `SAT ${domain} Module Completed`);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (examState === 'generating') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f8f9fa', color: '#334155' }}>
        <RefreshCw size={48} className="spin-slow" style={{ color: '#0052cc', marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'sans-serif', fontWeight: 600 }}>Constructing Official Module...</h2>
        <p style={{ color: '#64748b' }}>Writing passages and calibrating distractor difficulty.</p>
      </div>
    );
  }

  if (examState === 'error') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', background: '#f8f9fa', color: '#334155' }}>
        <AlertTriangle size={48} style={{ color: '#ef4444', marginBottom: '20px' }} />
        <h2 style={{ fontFamily: 'sans-serif', fontWeight: 600 }}>Connection Error</h2>
        <p style={{ color: '#64748b' }}>{errorMessage}</p>
        <button onClick={onExit} style={{ padding: '10px 20px', background: '#0052cc', color: 'white', border: 'none', borderRadius: '4px', marginTop: '20px', cursor: 'pointer' }}>Return to Dashboard</button>
      </div>
    );
  }

  if (examState === 'results') {
    const score = Object.entries(answers).reduce((acc, [qIdx, aIdx]) => {
      return aIdx === questions[parseInt(qIdx)].correctIndex ? acc + 1 : acc;
    }, 0);

    return (
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', background: 'white', color: 'black', minHeight: '100%' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '16px' }}>Module Complete</h1>
        <p style={{ fontSize: '20px', color: '#64748b', marginBottom: '32px' }}>You scored {score} / {questions.length} on {domain}</p>
        
        {questions.map((q, i) => (
          <div key={i} style={{ marginBottom: '32px', padding: '20px', border: `1px solid ${answers[i] === q.correctIndex ? '#10b981' : '#ef4444'}`, borderRadius: '8px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>Question {i + 1}</h3>
            <p style={{ whiteSpace: 'pre-wrap', marginBottom: '16px', fontSize: '14px' }}>{q.question}</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
              {q.options.map((opt, optIdx) => (
                <div key={optIdx} style={{ padding: '12px', background: optIdx === q.correctIndex ? '#10b98122' : answers[i] === optIdx ? '#ef444422' : '#f8f9fa', borderRadius: '4px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px' }}>
                  <span style={{ fontWeight: 600 }}>{String.fromCharCode(65 + optIdx)}</span>
                  <span>{opt}</span>
                </div>
              ))}
            </div>

            <div style={{ padding: '16px', background: '#f1f5f9', borderRadius: '4px', fontSize: '14px', lineHeight: 1.5 }}>
              <strong>Explanation:</strong><br/>
              {q.explanation}
            </div>
          </div>
        ))}
        
        <button onClick={onExit} style={{ padding: '12px 24px', background: '#0052cc', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 600, width: '100%' }}>
          Return to Dashboard
        </button>
      </div>
    );
  }

  // Bluebook Theme Variables
  const cbBlue = "#0052cc";
  const cbBg = "#f4f5f7";
  const cbBorder = "#dfe1e6";
  const cbText = "#172b4d";

  const q = questions[currentQIndex];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: cbBg, color: cbText, fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <header style={{ height: '60px', background: 'white', borderBottom: `1px solid ${cbBorder}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ fontWeight: 600, fontSize: '16px' }}>Section 1: {domain}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#f4f5f7', padding: '6px 12px', borderRadius: '20px' }}>
          <Clock size={16} />
          <span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{formatTime(timeLeft)}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {domain === 'Math' && (
            <button 
              onClick={() => setShowCalculator(!showCalculator)}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'transparent', border: 'none', cursor: 'pointer', color: cbBlue, fontWeight: 600 }}
            >
              <Calculator size={18} />
              Calculator
            </button>
          )}
          <button 
            onClick={submitExam}
            style={{ background: cbBlue, color: 'white', border: 'none', padding: '6px 16px', borderRadius: '4px', fontWeight: 600, cursor: 'pointer' }}
          >
            End Section
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        
        {/* Passages on left if Reading, otherwise centered */}
        {domain === 'Reading & Writing' ? (
          <>
            <div style={{ flex: 1, borderRight: `2px solid ${cbBorder}`, padding: '40px', overflowY: 'auto', fontSize: '16px', lineHeight: 2, background: 'white' }}>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {q.question.split('\n\n')[0]} {/* Assuming the AI puts passage then prompt */}
              </div>
            </div>
            <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ background: '#000', color: '#fff', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontWeight: 700 }}>
                  {currentQIndex + 1}
                </div>
                <button 
                  onClick={toggleFlag}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'transparent', border: 'none', cursor: 'pointer', color: flagged.has(currentQIndex) ? '#d97706' : '#64748b', fontWeight: 600 }}
                >
                  <Flag size={18} fill={flagged.has(currentQIndex) ? '#d97706' : 'transparent'} />
                  Mark for Review
                </button>
              </div>
              
              <div style={{ fontSize: '16px', fontWeight: 600, marginBottom: '24px' }}>
                 {q.question.split('\n\n').slice(1).join('\n\n')}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {q.options.map((opt, i) => {
                  const isSelected = answers[currentQIndex] === i;
                  const isCrossed = crossedOut[currentQIndex]?.has(i);
                  return (
                    <div 
                      key={i}
                      onClick={() => !isCrossed && setAnswers(prev => ({ ...prev, [currentQIndex]: i }))}
                      style={{ 
                        display: 'flex', alignItems: 'center', padding: '16px', 
                        border: `2px solid ${isSelected ? cbBlue : cbBorder}`, 
                        borderRadius: '8px', background: 'white', cursor: isCrossed ? 'default' : 'pointer',
                        opacity: isCrossed ? 0.5 : 1,
                        position: 'relative'
                      }}
                    >
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: `1px solid ${isSelected ? cbBlue : '#8c98a4'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', background: isSelected ? cbBlue : 'transparent', color: isSelected ? 'white' : 'inherit', fontWeight: 600, fontSize: '12px' }}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div style={{ textDecoration: isCrossed ? 'line-through' : 'none', flex: 1 }}>{opt}</div>
                      
                      <button 
                        onClick={(e) => toggleCrossOut(e, currentQIndex, i)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#a1a1aa', padding: '4px' }}
                        title="Eliminate Option"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div style={{ flex: 1, padding: '40px', overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '600px', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ background: '#000', color: '#fff', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px', fontWeight: 700 }}>
                  {currentQIndex + 1}
                </div>
                <button 
                  onClick={toggleFlag}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'transparent', border: 'none', cursor: 'pointer', color: flagged.has(currentQIndex) ? '#d97706' : '#64748b', fontWeight: 600 }}
                >
                  <Flag size={18} fill={flagged.has(currentQIndex) ? '#d97706' : 'transparent'} />
                  Mark for Review
                </button>
              </div>
              
              <div style={{ fontSize: '18px', marginBottom: '32px', whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>
                 {q.question}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {q.options.map((opt, i) => {
                  const isSelected = answers[currentQIndex] === i;
                  const isCrossed = crossedOut[currentQIndex]?.has(i);
                  return (
                    <div 
                      key={i}
                      onClick={() => !isCrossed && setAnswers(prev => ({ ...prev, [currentQIndex]: i }))}
                      style={{ 
                        display: 'flex', alignItems: 'center', padding: '16px', 
                        border: `2px solid ${isSelected ? cbBlue : cbBorder}`, 
                        borderRadius: '8px', background: 'white', cursor: isCrossed ? 'default' : 'pointer',
                        opacity: isCrossed ? 0.5 : 1
                      }}
                    >
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', border: `1px solid ${isSelected ? cbBlue : '#8c98a4'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px', background: isSelected ? cbBlue : 'transparent', color: isSelected ? 'white' : 'inherit', fontWeight: 600, fontSize: '12px' }}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <div style={{ textDecoration: isCrossed ? 'line-through' : 'none', flex: 1 }}>{opt}</div>
                      
                      <button 
                        onClick={(e) => toggleCrossOut(e, currentQIndex, i)}
                        style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#a1a1aa', padding: '4px' }}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Footer Navigator */}
      <footer style={{ height: '70px', background: 'white', borderTop: `1px solid ${cbBorder}`, display: 'flex', alignItems: 'center', padding: '0 24px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQIndex(i)}
              style={{
                width: '32px', height: '32px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '14px', fontWeight: 600,
                background: currentQIndex === i ? cbBlue : 'transparent',
                color: currentQIndex === i ? 'white' : cbText,
                border: `1px solid ${currentQIndex === i ? cbBlue : flagged.has(i) ? '#d97706' : answers[i] !== undefined ? cbBorder : cbBorder + '88'}`,
                borderStyle: answers[i] === undefined && !flagged.has(i) && currentQIndex !== i ? 'dashed' : 'solid',
                position: 'relative'
              }}
            >
              {i + 1}
              {flagged.has(i) && <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', background: '#d97706', borderRadius: '50%' }}></div>}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button 
            onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQIndex === 0}
            style={{ background: 'white', color: cbBlue, border: `1px solid ${cbBlue}`, padding: '8px 24px', borderRadius: '4px', fontWeight: 600, cursor: currentQIndex === 0 ? 'not-allowed' : 'pointer', opacity: currentQIndex === 0 ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <ChevronLeft size={16} /> Back
          </button>
          <button 
            onClick={() => setCurrentQIndex(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={currentQIndex === questions.length - 1}
            style={{ background: cbBlue, color: 'white', border: 'none', padding: '8px 24px', borderRadius: '4px', fontWeight: 600, cursor: currentQIndex === questions.length - 1 ? 'not-allowed' : 'pointer', opacity: currentQIndex === questions.length - 1 ? 0.5 : 1, display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Next <ChevronRight size={16} />
          </button>
        </div>
      </footer>

    </div>
  );
};
