import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, HelpCircle, CheckCircle, XCircle, Lightbulb, RefreshCw, Variable, Sigma, Activity, Maximize2, X, Camera, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { CameraScanner } from './CameraScanner';
import katex from 'katex';

// Simulated Socratic Logic Tree for a Calculus problem
// In a real app, this would be powered by a backend LLM with a specific system prompt
const MOCK_PROBLEM = {
  id: 'calc_opt_1',
  title: 'Optimization: Maximum Area of a Rectangle',
  context: 'A farmer has 2400 ft of fencing and wants to fence off a rectangular field that borders a straight river. He needs no fence along the river.',
  goal: 'What are the dimensions of the field that has the largest area?',
  initialMessage: "Let's break this down together. What is the first thing we should do when approaching an optimization problem like this?",
  steps: [
    {
      id: 'step1_variables',
      keywords: ['draw', 'picture', 'variables', 'x', 'y', 'width', 'length', 'equation', 'label'],
      response: "Excellent. Drawing a picture and defining our variables is the perfect first step. Let's call the width perpendicular to the river $x$, and the length parallel to the river $y$. What equation can we write for the total amount of fencing used?",
      hints: [
        'Think about how to represent the unknown dimensions.',
        'We have two sides of one length, and one side of the other length (since the river forms the fourth side).',
        'Let $x$ be the width and $y$ be the length. What is $2x + y$ equal to?'
      ]
    },
    {
      id: 'step2_constraint',
      keywords: ['2x+y=2400', '2x + y = 2400', '2400 = 2x + y', '2400=2x+y'],
      response: 'Spot on! $2x + y = 2400$ is our constraint equation. Now, what is the quantity we are trying to maximize, and what is its equation?',
      hints: [
        'Read the goal of the problem again. What are we trying to find the "largest" of?',
        'We want to maximize the area of the rectangle.',
        'The area $A$ of a rectangle is width times length. What is that in terms of $x$ and $y$?'
      ]
    },
    {
      id: 'step3_objective',
      keywords: ['area', 'a=xy', 'a = xy', 'xy', 'x*y'],
      response: 'Perfect, $A = xy$. But this equation has two variables ($x$ and $y$). To find the maximum using calculus, we need $A$ as a function of just ONE variable. How can we use our constraint equation ($2x + y = 2400$) to help?',
      hints: [
        'Can you solve the constraint equation for one of the variables?',
        'Solve $2x + y = 2400$ for $y$.',
        'Substitute $y = 2400 - 2x$ into the area equation.'
      ]
    },
    {
      id: 'step4_substitution',
      keywords: ['substitute', 'y=2400-2x', '2400x-2x^2', '2400x - 2x^2', 'a = x(2400-2x)'],
      response: 'Exactly! Substituting $y = 2400 - 2x$ gives us $A(x) = x(2400 - 2x) = 2400x - 2x^2$. Now that we have a function of a single variable, how do we find its maximum value?',
      hints: [
        'Think back to the First Derivative Test.',
        'Maximums and minimums occur at critical points.',
        'Take the derivative of $A(x)$ with respect to $x$, and set it equal to zero.'
      ]
    },
    {
      id: 'step5_derivative',
      keywords: ['derivative', 'differentiate', "'a' = 2400 - 4x", '2400-4x', '2400 - 4x', 'set to 0', 'zero'],
      response: "Great job! The derivative is $A'(x) = 2400 - 4x$. Setting this to zero gives $2400 - 4x = 0$. What is the value of $x$?",
      hints: [
        'Solve the linear equation $2400 - 4x = 0$.',
        'Add $4x$ to both sides, then divide by 4.',
        '$x = 600$'
      ]
    },
    {
      id: 'step6_solve_x',
      keywords: ['600', 'x=600', 'x = 600'],
      response: 'Yes, $x = 600$ ft. This is our width. Are we done? What else do we need to find?',
      hints: [
        'Read the original question: "What are the dimensions..."',
        'We have the width $x$. We still need the length $y$.',
        'Plug $x = 600$ back into our constraint equation $y = 2400 - 2x$.'
      ]
    },
    {
      id: 'step7_final',
      keywords: ['1200', 'y=1200', 'y = 1200', 'length is 1200'],
      response: 'Outstanding! The dimensions that maximize the area are a width of 600 ft and a length of 1200 ft. You solved the entire optimization problem step-by-step. Well done!',
      hints: [],
      isFinal: true
    }
  ]
};

interface ChatMessage {
  id: string;
  sender: 'tutor' | 'student' | 'system';
  text: string;
  timestamp: number;
}

const SocraticSolver: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [hintIndex, setHintIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [scannedSteps, setScannedSteps] = useState<string[] | null>(null);
  const [wbMode, setWbMode] = useState<'view' | 'draw' | 'equation'>('view');
  
  // Drawing & Equation state
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [equationText, setEquationText] = useState('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const stepsContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize chat
  useEffect(() => {
    setMessages([
      { id: 'msg-0', sender: 'system', text: `**Problem:** ${MOCK_PROBLEM.context} \\n\\n**Goal:** ${MOCK_PROBLEM.goal}`, timestamp: Date.now() },
      { id: 'msg-1', sender: 'tutor', text: MOCK_PROBLEM.initialMessage, timestamp: Date.now() + 100 }
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (scannedSteps && wbMode === 'view') {
      scannedSteps.forEach((step, index) => {
        const el = stepsContainerRefs.current[index];
        if (el) {
          try {
            katex.render(step, el, { displayMode: true, throwOnError: false });
          } catch (e) {}
        }
      });
    }
  }, [scannedSteps, wbMode]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    ctx.moveTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    ctx.lineTo((e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const processStudentInput = (text: string) => {
    const step = MOCK_PROBLEM.steps[currentStep];
    const normalizedInput = text.toLowerCase().replace(/\\s+/g, '');
    
    // Check if input matches any keywords for the current step
    let matched = false;
    for (const keyword of step.keywords) {
      if (normalizedInput.includes(keyword.replace(/\\s+/g, ''))) {
        matched = true;
        break;
      }
    }

    setIsTyping(true);
    
    setTimeout(() => {
      setIsTyping(false);
      if (matched) {
        setMessages(prev => [...prev, {
          id: `msg-${Date.now()}`,
          sender: 'tutor',
          text: step.response,
          timestamp: Date.now()
        }]);
        setHintIndex(0);
        if (!step.isFinal) {
          setCurrentStep(prev => prev + 1);
        } else {
          // Problem complete
          setMessages(prev => [...prev, {
            id: `msg-sys-${Date.now()}`,
            sender: 'system',
            text: '🎉 **Problem Mastered!** You successfully guided the logic from start to finish.',
            timestamp: Date.now()
          }]);
        }
      } else {
        // Did not match
        setMessages(prev => [...prev, {
          id: `msg-${Date.now()}`,
          sender: 'tutor',
          text: "I'm not quite seeing that. Think about what we are trying to achieve in this specific step. Would you like a hint?",
          timestamp: Date.now()
        }]);
      }
    }, 1000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMsg: ChatMessage = {
      id: `msg-stu-${Date.now()}`,
      sender: 'student',
      text: input,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    processStudentInput(newMsg.text);
  };

  const handleRequestHint = () => {
    const step = MOCK_PROBLEM.steps[currentStep];
    if (step.isFinal || hintIndex >= step.hints.length) return;

    setMessages(prev => [...prev, {
      id: `msg-hint-${Date.now()}`,
      sender: 'student',
      text: "Can I get a hint?",
      timestamp: Date.now()
    }]);

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: `msg-tutor-hint-${Date.now()}`,
        sender: 'tutor',
        text: `**Hint ${hintIndex + 1}:** ${step.hints[hintIndex]}`,
        timestamp: Date.now()
      }]);
      setHintIndex(prev => prev + 1);
    }, 600);
  };

  const handleScanComplete = (expr: string, steps: string[]) => {
    setShowScanner(false);
    setWbMode('view');
    setScannedSteps(steps);
    // Add a message from the tutor acknowledging the scan
    setMessages(prev => [...prev, {
      id: `msg-sys-${Date.now()}`,
      sender: 'system',
      text: `**Scanned Equation:** $$${expr}$$`,
      timestamp: Date.now()
    }, {
      id: `msg-tutor-${Date.now()}`,
      sender: 'tutor',
      text: "I've scanned the equation and derived the solution in your workspace. What part of the derivation would you like to discuss?",
      timestamp: Date.now()
    }]);
  };

  return (
    <div className="socratic-module anim-fade">
      {showScanner && (
        <CameraScanner 
          onClose={() => setShowScanner(false)} 
          onScanComplete={handleScanComplete}
        />
      )}
      <div className="sm-layout">
        
        {/* Left Panel: Whiteboard & Workspace */}
        <div className="sm-workspace luxury-card">
          <div className="sm-header">
            <Variable size={20} style={{ color: 'var(--color-accent)' }} />
            <h2>Interactive Workspace</h2>
          </div>
          
          <div className="sm-problem-statement">
            <h3>{MOCK_PROBLEM.title}</h3>
            <p>{MOCK_PROBLEM.context}</p>
            <div className="sm-goal">
              <strong>Goal:</strong> {MOCK_PROBLEM.goal}
            </div>
          </div>

          <div className="sm-whiteboard">
            {/* Simulated Scratchpad/Whiteboard */}
            <div className="sm-wb-toolbar">
              <button className={`sm-wb-tool ${wbMode === 'view' ? 'active-tool' : ''}`} onClick={() => setWbMode('view')}>
                <Camera size={16} className={wbMode === 'view' ? '' : "text-gold-gradient"} /> View/Scan
              </button>
              <button className={`sm-wb-tool ${wbMode === 'draw' ? 'active-tool' : ''}`} onClick={() => setWbMode('draw')}>
                <Activity size={16} /> Draw
              </button>
              <button className={`sm-wb-tool ${wbMode === 'equation' ? 'active-tool' : ''}`} onClick={() => setWbMode('equation')}>
                <Sigma size={16} /> Equation
              </button>
              <div className="sm-wb-spacer"></div>
              <button className="sm-wb-tool" onClick={() => setShowScanner(true)}>
                <Camera size={16} className="text-gold-gradient" /> Snap Equation
              </button>
              <button className="sm-wb-tool"><Maximize2 size={16} /></button>
            </div>
            <div className="sm-wb-canvas" style={{ flexDirection: 'column' }}>
              {wbMode === 'draw' && (
                <div style={{ width: '100%', height: '100%', position: 'relative', cursor: 'crosshair', background: '#222' }}>
                  <canvas 
                    ref={canvasRef}
                    width={800}
                    height={600}
                    style={{ width: '100%', height: '100%', display: 'block' }}
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                  <div style={{ position: 'absolute', bottom: 15, right: 15, background: 'rgba(0,0,0,0.6)', padding: '6px 12px', borderRadius: '4px', fontSize: 12, color: '#d4af37' }}>
                    Hold and drag to draw
                  </div>
                  <button 
                    onClick={clearCanvas}
                    style={{ position: 'absolute', top: 15, right: 15, background: 'rgba(0,0,0,0.8)', border: '1px solid rgba(212,175,55,0.4)', padding: '6px 12px', borderRadius: '6px', fontSize: 12, color: '#d4af37', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#d4af37'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'}
                  >
                    <Trash2 size={14} /> Clear Canvas
                  </button>
                </div>
              )}

              {wbMode === 'equation' && (
                <div style={{ width: '90%', height: '100%', display: 'flex', flexDirection: 'column', gap: '20px', paddingTop: '20px' }}>
                  <div style={{ padding: '24px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.2)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>LaTeX Editor</span>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="sm-latex-btn" onClick={() => setEquationText(prev => prev + '\\int_{a}^{b} ')}>∫</button>
                        <button className="sm-latex-btn" onClick={() => setEquationText(prev => prev + '\\frac{}{} ')}>x/y</button>
                        <button className="sm-latex-btn" onClick={() => setEquationText(prev => prev + '\\sqrt{} ')}>√</button>
                        <button className="sm-latex-btn" onClick={() => setEquationText(prev => prev + '\\pi ')}>π</button>
                        <button className="sm-latex-btn" onClick={() => setEquationText(prev => prev + '\\sum_{i=1}^{n} ')}>∑</button>
                      </div>
                    </div>
                     <textarea 
                        value={equationText}
                        onChange={(e) => setEquationText(e.target.value)}
                        placeholder="Type LaTeX here... (e.g. \int_{0}^{\infty} e^{-x^2} dx = \frac{\sqrt{\pi}}{2})"
                        style={{ width: '100%', minHeight: '80px', padding: '16px', background: 'var(--color-base-alt)', border: '1px solid var(--color-border)', borderRadius: '8px', color: 'var(--color-accent)', fontSize: '16px', outline: 'none', resize: 'vertical', fontFamily: 'var(--font-mono)' }}
                     />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '24px', background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 8px 32px rgba(212,175,55,0.05)' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>Live Preview</span>
                    <div className="katex-rendered-preview" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', overflowX: 'auto', padding: '20px' }}>
                      {equationText ? (
                         <span dangerouslySetInnerHTML={{ __html: katex.renderToString(equationText, { throwOnError: false, displayMode: true }) }} />
                      ) : (
                         <span style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}>Your beautifully rendered math will appear here...</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {wbMode === 'view' && (
                scannedSteps ? (
                  <div className="scanned-derivation">
                    {scannedSteps.map((step, index) => (
                      <div key={index} className="derivation-step">
                        <div className="step-num">Step {index + 1}</div>
                        <div ref={el => { stepsContainerRefs.current[index] = el; }} className="katex-rendered"></div>
                      </div>
                    ))}
                    <div className="success-badge">
                      <CheckCircle size={16} /> Derivation Complete
                    </div>
                  </div>
                ) : (
                  <div className="sm-wb-placeholder">
                    <Variable size={48} />
                    <p>Digital scratchpad for working out intermediate steps.</p>
                    <span>(Click "Snap Equation" to simulate mobile scanning!)</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Panel: Socratic AI Chat */}
        <div className="sm-chat luxury-card">
          <div className="sm-header">
            <Bot size={20} style={{ color: 'var(--color-accent)' }} />
            <h2>Socratic AI Tutor</h2>
          </div>

          <div className="sm-messages">
            {messages.map(msg => (
              <div key={msg.id} className={`sm-msg-wrapper ${msg.sender}`}>
                {msg.sender === 'tutor' && <div className="sm-avatar tutor"><Bot size={16} /></div>}
                
                <div className={`sm-bubble ${msg.sender}`}>
                  <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                    {msg.text}
                  </ReactMarkdown>
                </div>
                
                {msg.sender === 'student' && <div className="sm-avatar student"><User size={16} /></div>}
              </div>
            ))}
            {isTyping && (
              <div className="sm-msg-wrapper tutor">
                <div className="sm-avatar tutor"><Bot size={16} /></div>
                <div className="sm-bubble tutor typing">
                  <div className="dot-flashing"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="sm-input-area">
            {currentStep < MOCK_PROBLEM.steps.length && (
              <button 
                className="sm-hint-btn" 
                onClick={handleRequestHint}
                disabled={hintIndex >= MOCK_PROBLEM.steps[currentStep].hints.length}
              >
                <Lightbulb size={16} /> 
                {hintIndex >= (MOCK_PROBLEM.steps[currentStep]?.hints.length || 0) 
                  ? 'No more hints' 
                  : 'Get a Hint'}
              </button>
            )}
            
            <form onSubmit={handleSend} className="sm-form">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your mathematical step here..."
                className="sm-input"
              />
              <button type="submit" className="sm-send-btn" disabled={!input.trim()}>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .socratic-module {
          width: 100%; height: calc(100vh - 40px);
          display: flex; flex-direction: column;
        }

        .sm-layout {
          display: grid; grid-template-columns: 1fr 450px;
          gap: 24px; height: 100%;
        }

        @media (max-width: 1024px) {
          .sm-layout { grid-template-columns: 1fr; grid-template-rows: auto 600px; }
        }

        .sm-header {
          display: flex; align-items: center; gap: 10px;
          padding: 20px 24px; border-bottom: var(--border-soft);
        }
        .sm-header h2 {
          font-family: var(--font-display); font-size: 16px; font-weight: 700;
          color: var(--color-text-primary); margin: 0;
        }

        /* Scanner & Math Input Styles */
        .scanned-derivation { display: flex; flex-direction: column; gap: 20px; padding: 30px; width: 100%; max-width: 800px; }
        .math-step { padding: 15px; background: rgba(0,0,0,0.2); border-radius: 8px; border-left: 3px solid var(--color-accent); font-size: 1.1em; }
        .sm-latex-btn {
          background: rgba(201,168,76,0.1);
          border: 1px solid rgba(201,168,76,0.3);
          color: var(--color-accent);
          border-radius: 6px;
          padding: 6px 10px;
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .sm-latex-btn:hover {
          background: rgba(201,168,76,0.2);
          border-color: var(--color-accent);
        }
        .sm-problem-statement h3 {
          font-family: var(--font-serif); font-size: 20px; font-weight: 600;
          color: var(--color-text-primary); margin: 0 0 12px;
        }

        /* ─── Workspace ─── */
        .sm-workspace {
          display: flex; flex-direction: column; overflow: hidden;
        }

        .sm-problem-statement {
          padding: 24px; background: rgba(201,168,76,0.03);
          border-bottom: var(--border-soft);
        }
        .sm-problem-statement p {
          font-size: 15px; color: var(--color-text-secondary); line-height: 1.6; margin: 0 0 16px;
        }
        .sm-goal {
          background: rgba(16,185,129,0.1); border-left: 3px solid #10b981;
          padding: 12px 16px; font-size: 14px; color: var(--color-text-primary);
          border-radius: 0 8px 8px 0;
        }

        .sm-whiteboard {
          flex: 1; display: flex; flex-direction: column;
          background: var(--color-base-deep);
        }
        .sm-wb-toolbar {
          display: flex; gap: 8px; padding: 12px; border-bottom: var(--border-soft);
          background: var(--color-surface);
        }
        .sm-wb-tool {
          display: flex; align-items: center; gap: 6px;
          background: var(--color-base-alt); border: var(--border-soft);
          color: var(--color-text-secondary); padding: 6px 12px;
          border-radius: var(--border-radius-sm); font-size: 12px; font-weight: 600;
          cursor: pointer; transition: all var(--transition-fast);
        }
        .sm-wb-tool:hover, .sm-wb-tool.active-tool { background: var(--color-base); color: var(--color-accent); border-color: rgba(212,175,55,0.3); }
        .sm-wb-spacer { flex: 1; }

        .sm-wb-canvas {
          flex: 1; display: flex; align-items: center; justify-content: center;
          position: relative;
        }
        .sm-wb-placeholder {
          text-align: center; color: var(--color-text-muted);
          display: flex; flex-direction: column; align-items: center; gap: 12px;
        }
        .sm-wb-placeholder p { font-size: 16px; font-weight: 600; font-family: var(--font-display); margin: 0; }
        .sm-wb-placeholder span { font-size: 13px; font-style: italic; }

        .scanned-derivation {
          width: 100%; height: 100%; overflow-y: auto; padding: 32px;
          display: flex; flex-direction: column; gap: 24px;
        }
        .derivation-step {
          background: var(--color-surface); padding: 16px 24px;
          border-radius: var(--border-radius-md); border: var(--border-soft);
          box-shadow: var(--shadow-sm); animation: fadeSlideUp 0.5s ease backwards;
        }
        .step-num { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--color-accent); margin-bottom: 8px; font-weight: 600; }
        .katex-rendered { overflow-x: auto; }
        .success-badge { display: flex; align-items: center; gap: 8px; justify-content: center; color: var(--color-accent); font-weight: 600; padding: 16px; }

        /* ─── Chat ─── */
        .sm-chat {
          display: flex; flex-direction: column; overflow: hidden;
        }

        .sm-messages {
          flex: 1; overflow-y: auto; padding: 24px;
          display: flex; flex-direction: column; gap: 20px;
        }

        .sm-msg-wrapper {
          display: flex; align-items: flex-end; gap: 12px; max-width: 90%;
        }
        .sm-msg-wrapper.tutor { align-self: flex-start; }
        .sm-msg-wrapper.student { align-self: flex-end; }
        .sm-msg-wrapper.system {
          align-self: center; max-width: 100%;
          background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3);
          padding: 12px 20px; border-radius: var(--border-radius-md);
          text-align: center;
        }

        .sm-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .sm-avatar.tutor { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); color: white; }
        .sm-avatar.student { background: var(--color-base-alt); color: var(--color-text-secondary); border: var(--border-soft); }

        .sm-bubble {
          padding: 14px 18px; border-radius: 20px; font-size: 14.5px;
          line-height: 1.6; color: var(--color-text-primary);
        }
        .sm-bubble p { margin: 0; }
        .sm-bubble .katex-display { margin: 10px 0; font-size: 16px; }

        .sm-bubble.tutor {
          background: var(--color-base-alt); border: var(--border-soft);
          border-bottom-left-radius: 4px;
        }
        .sm-bubble.student {
          background: var(--color-surface); border: 1px solid var(--color-accent);
          border-bottom-right-radius: 4px; box-shadow: 0 4px 12px rgba(201,168,76,0.05);
        }
        
        .sm-bubble.system p { font-size: 13px; font-weight: 600; color: var(--color-accent); }

        /* Typing Indicator */
        .typing { display: flex; align-items: center; justify-content: center; height: 48px; min-width: 60px; }
        .dot-flashing {
          position: relative; width: 6px; height: 6px; border-radius: 5px;
          background-color: var(--color-accent); color: var(--color-accent);
          animation: dot-flashing 1s infinite linear alternate; animation-delay: 0.5s;
        }
        .dot-flashing::before, .dot-flashing::after {
          content: ''; display: inline-block; position: absolute; top: 0;
          width: 6px; height: 6px; border-radius: 5px;
          background-color: var(--color-accent); color: var(--color-accent);
          animation: dot-flashing 1s infinite alternate;
        }
        .dot-flashing::before { left: -12px; animation-delay: 0s; }
        .dot-flashing::after { left: 12px; animation-delay: 1s; }
        @keyframes dot-flashing {
          0% { background-color: var(--color-accent); }
          50%, 100% { background-color: rgba(201,168,76,0.2); }
        }

        /* ─── Input Area ─── */
        .sm-input-area {
          padding: 20px; background: var(--color-base-alt);
          border-top: var(--border-soft);
        }

        .sm-hint-btn {
          display: flex; align-items: center; gap: 6px;
          background: transparent; color: var(--color-accent);
          border: 1px solid var(--color-accent); padding: 6px 14px;
          border-radius: 16px; font-size: 12px; font-weight: 600;
          cursor: pointer; transition: all var(--transition-fast);
          margin-bottom: 12px;
        }
        .sm-hint-btn:hover:not(:disabled) { background: rgba(201,168,76,0.1); }
        .sm-hint-btn:disabled { opacity: 0.5; cursor: not-allowed; border-color: var(--color-border-strong); color: var(--color-text-muted); }

        .sm-form {
          display: flex; gap: 10px;
        }
        .sm-input {
          flex: 1; background: var(--color-surface); border: var(--border-soft);
          padding: 14px 20px; border-radius: var(--border-radius-full);
          color: var(--color-text-primary); font-size: 14px;
          transition: all var(--transition-fast);
        }
        .sm-input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 2px rgba(201,168,76,0.1); }
        
        .sm-send-btn {
          width: 48px; height: 48px; border-radius: 50%;
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
          border: none; color: white; display: flex; align-items: center; justify-content: center;
          cursor: pointer; transition: all var(--transition-fast); flex-shrink: 0;
        }
        .sm-send-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: var(--shadow-glow); }
        .sm-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

      `}</style>
    </div>
  );
};

export default SocraticSolver;
