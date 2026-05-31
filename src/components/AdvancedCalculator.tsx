import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Calculator, History, Sparkles, Copy, Trash2, 
  Settings, HelpCircle, Delete, CornerDownLeft, ChevronLeft, ChevronRight,
  ZoomIn, ZoomOut
} from 'lucide-react';
import * as math from 'mathjs';

interface AdvancedCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

interface HistoryItem {
  expression: string;
  result: string;
  timestamp: string;
}

const SCIENTIFIC_CONSTANTS = [
  { name: 'Speed of Light (c)', value: '299792458 m / s', symbol: 'c' },
  { name: 'Planck Constant (h)', value: '6.62607015e-34 J * s', symbol: 'h' },
  { name: 'Gravitational Constant (G)', value: '6.6743e-11 m^3 / (kg * s^2)', symbol: 'G' },
  { name: 'Acceleration of Gravity (g)', value: '9.80665 m / s^2', symbol: 'g' },
  { name: 'Gas Constant (R)', value: '8.31446 J / (mol * K)', symbol: 'R' },
  { name: 'Boltzmann Constant (k)', value: '1.380649e-23 J / K', symbol: 'k' },
  { name: 'Electron Mass (me)', value: '9.1093837e-31 kg', symbol: 'me' },
  { name: 'Avogadro Number (NA)', value: '6.02214076e23 mol^-1', symbol: 'NA' },
  { name: 'Pi (π)', value: '3.141592653589793', symbol: 'pi' },
  { name: 'Euler\'s Number (e)', value: '2.718281828459045', symbol: 'e' },
];

export const AdvancedCalculator: React.FC<AdvancedCalculatorProps> = ({ isOpen, onClose }) => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [activeTab, setActiveTab] = useState<'history' | 'constants' | 'help'>('history');
  const [showPanel, setShowPanel] = useState(true);
  const [copied, setCopied] = useState(false);
  
  // Compute position lazily on first render so it's never off-screen
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [scale, setScale] = useState(1);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const calculatorRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Set safe initial position once the component knows the viewport size
  useEffect(() => {
    if (isOpen && position === null) {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const calcW = showPanel ? 740 : 380;
      setPosition({
        x: Math.max(8, Math.min(w - calcW - 8, w - calcW - 20)),
        y: Math.max(70, Math.min(h - 540, 120)),
      });
    }
  }, [isOpen]);

  // Auto-focus the input every time the calculator opens
  useEffect(() => {
    if (isOpen) {
      // Small delay lets the open animation settle before focus
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const safePos = position ?? { x: Math.max(8, window.innerWidth - 400), y: 120 };

  // Typing Feel State
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const playThock = (type: 'key' | 'eval' | 'clear' = 'key') => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const now = audioCtx.currentTime;

      // ── Layer 1: Filtered noise burst (the crisp "click" transient) ──
      const bufLen = Math.floor(audioCtx.sampleRate * 0.035);
      const buf = audioCtx.createBuffer(1, bufLen, audioCtx.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufLen; i++) {
        // Exponential decay envelope baked into the noise buffer
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufLen * 0.12));
      }
      const noise = audioCtx.createBufferSource();
      noise.buffer = buf;

      // Band-pass filter: centre ~1.8 kHz gives a satisfying "tck" not "shhh"
      const bp = audioCtx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.frequency.value = type === 'eval' ? 900 : 1800;
      bp.Q.value = 0.7;

      const noiseGain = audioCtx.createGain();
      noiseGain.gain.setValueAtTime(type === 'clear' ? 0.18 : 0.28, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      noise.connect(bp);
      bp.connect(noiseGain);
      noiseGain.connect(audioCtx.destination);
      noise.start(now);
      noise.stop(now + 0.04);

      // ── Layer 2: Low sine "body" thump ──
      const body = audioCtx.createOscillator();
      body.type = 'sine';
      const startFreq = type === 'eval' ? 90 : type === 'clear' ? 160 : 130;
      const endFreq   = type === 'eval' ? 45 : type === 'clear' ? 100 : 70;
      body.frequency.setValueAtTime(startFreq, now);
      body.frequency.exponentialRampToValueAtTime(endFreq, now + 0.07);

      const bodyGain = audioCtx.createGain();
      bodyGain.gain.setValueAtTime(type === 'eval' ? 0.45 : 0.28, now);
      bodyGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      body.connect(bodyGain);
      bodyGain.connect(audioCtx.destination);
      body.start(now);
      body.stop(now + 0.08);

    } catch (_) {
      // Audio API unavailable — silent fallback
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if modifier keys are pressed
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      
      playThock();
      let k = e.key;
      if (k === 'Enter') k = 'EVAL';
      else if (k === 'Escape') k = 'C';
      else if (k === 'Backspace') k = 'BACK';
      
      setActiveKey(k);
    };

    const handleKeyUp = () => {
      setActiveKey(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isOpen]);

  const renderBtn = (labelNode: React.ReactNode, actionStr: string, className: string, matchKeys: string[]) => {
    const isPressed = matchKeys.includes(activeKey || '');
    const soundType = actionStr === 'EVAL' ? 'eval' : actionStr === 'CLEAR' ? 'clear' : 'key';
    return (
      <button 
        className={`calc-btn ${className} ${isPressed ? 'pressed' : ''}`}
        onMouseDown={(e) => e.preventDefault()} // prevent input from losing focus
        onClick={() => {
          playThock(soundType);
          setActiveKey(matchKeys[0]);
          setTimeout(() => setActiveKey(null), 150);
          
          if (actionStr === 'EVAL') handleEvaluate();
          else if (actionStr === 'CLEAR') handleClear();
          else if (actionStr === 'BACK') handleBackspace();
          else handleInsert(actionStr);

          // Return focus to input so keyboard keeps working
          inputRef.current?.focus();
        }}
      >
        {labelNode}
      </button>
    );
  };

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('lumen_calc_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const saveHistory = (newHistory: HistoryItem[]) => {
    setHistory(newHistory);
    localStorage.setItem('lumen_calc_history', JSON.stringify(newHistory));
  };

  const handleEvaluate = (exprToEvaluate?: string) => {
    let targetExpr = exprToEvaluate !== undefined ? exprToEvaluate : expression;
    if (!targetExpr.trim()) return;

    // Intercept and format derivative calls for mathjs (which expects a quoted string and a variable)
    // e.g. derivative(6x-2) -> derivative('6x-2', 'x')
    targetExpr = targetExpr
      .replace(/derivative\(([^,']+)\)/gi, "derivative('$1', 'x')")
      .replace(/diff\(([^,']+)\)/gi, "derivative('$1', 'x')");

    // Intercept integral calls (mathjs lacks native analytical integration)
    const intMatch = targetExpr.match(/^(?:integral|int|integrate)\(([^,)]+)(?:,\s*([a-z]))?\)$/i);
    if (intMatch) {
      const expr = intMatch[1].trim();
      const variable = intMatch[2] || 'x';
      const v = variable;
      const c = expr.replace(/\s+/g, '');
      let out = `∫(${expr}) d${v} = ?`;

      // Powers: x^n → x^(n+1)/(n+1)
      const powMatch = c.match(/^([+-]?\d*\.?\d*)\*?([a-z])\^([+-]?\d+\.?\d*)$/);
      if (powMatch) {
        const coeff = powMatch[1] === '' || powMatch[1] === '+' ? 1 : powMatch[1] === '-' ? -1 : parseFloat(powMatch[1]);
        const n = parseFloat(powMatch[3]);
        if (n !== -1) {
          const newN = n + 1;
          const newCoeff = coeff / newN;
          const coeffStr = Math.abs(newCoeff) === 1 ? (newCoeff < 0 ? '-' : '') : `${newCoeff}`;
          out = `${coeffStr}${v}^${newN} + C`;
        } else {
          out = `ln|${v}| + C`;
        }
      }
      // Simple variable: x → x²/2
      else if (c === v) out = `${v}^2 / 2 + C`;
      else if (c === `2${v}`) out = `${v}^2 + C`;
      else if (c === `3${v}`) out = `3${v}^2 / 2 + C`;
      else if (c === `${v}^2`) out = `${v}^3 / 3 + C`;
      else if (c === `${v}^3`) out = `${v}^4 / 4 + C`;
      else if (c === `${v}^4`) out = `${v}^5 / 5 + C`;
      else if (c === `${v}^(-1)` || c === `1/${v}`) out = `ln|${v}| + C`;
      // Trig
      else if (c === `sin(${v})`) out = `-cos(${v}) + C`;
      else if (c === `cos(${v})`) out = `sin(${v}) + C`;
      else if (c === `tan(${v})`) out = `-ln|cos(${v})| + C`;
      else if (c === `sec(${v})^2` || c === `sec^2(${v})`) out = `tan(${v}) + C`;
      else if (c === `csc(${v})^2` || c === `csc^2(${v})`) out = `-cot(${v}) + C`;
      else if (c === `sec(${v})*tan(${v})`) out = `sec(${v}) + C`;
      else if (c === `csc(${v})*cot(${v})`) out = `-csc(${v}) + C`;
      else if (c === `sin(${v})^2` || c === `sin^2(${v})`) out = `${v}/2 - sin(2${v})/4 + C`;
      else if (c === `cos(${v})^2` || c === `cos^2(${v})`) out = `${v}/2 + sin(2${v})/4 + C`;
      // Exponentials & logs
      else if (c === `e^${v}` || c === `exp(${v})`) out = `e^${v} + C`;
      else if (c === `ln(${v})`) out = `${v}·ln(${v}) - ${v} + C`;
      else if (c === `log(${v})`) out = `${v}·log(${v}) - ${v}/ln(10) + C`;
      else if (c === `a^${v}`) out = `a^${v} / ln(a) + C`;
      // Inverse trig
      else if (c === `1/sqrt(1-${v}^2)`) out = `arcsin(${v}) + C`;
      else if (c === `1/(1+${v}^2)`) out = `arctan(${v}) + C`;
      else if (c === `1/(${v}*sqrt(${v}^2-1))`) out = `arcsec(|${v}|) + C`;
      // Hyperbolic
      else if (c === `sinh(${v})`) out = `cosh(${v}) + C`;
      else if (c === `cosh(${v})`) out = `sinh(${v}) + C`;
      // Constants
      else if (/^[+-]?\d+\.?\d*$/.test(c)) out = `${c}·${v} + C`;
      // n*x^m fallback
      else {
        const genPow = c.match(/^([+-]?\d*\.?\d*)\*?${v}\^(\d+)$/);
        if (genPow) {
          const co = genPow[1] === '' ? 1 : parseFloat(genPow[1]);
          const n = parseInt(genPow[2]);
          out = `${co / (n + 1)}·${v}^${n + 1} + C`;
        }
      }

      setResult(out);
      setError('');
      const newItem: HistoryItem = {
        expression: targetExpr,
        result: out,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      saveHistory([newItem, ...history].slice(0, 50));
      return;
    }

    try {
      // Evaluate using mathjs
      const evaluated = math.evaluate(targetExpr);
      let output = '';

      if (evaluated !== undefined && evaluated !== null) {
        if (typeof evaluated === 'object' && evaluated.entries) {
          // If it's a matrix or array
          output = JSON.stringify(evaluated.entries);
        } else if (typeof evaluated === 'function') {
          output = 'Function defined';
        } else {
          // General format
          output = math.format(evaluated, { precision: 14 });
        }
      } else {
        output = 'Undefined';
      }

      setResult(output);
      setError('');

      // Add to history
      const newItem: HistoryItem = {
        expression: targetExpr,
        result: output,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      };
      
      const updatedHistory = [newItem, ...history].slice(0, 50);
      saveHistory(updatedHistory);
    } catch (err: any) {
      setError(err.message || 'Syntax Error');
      setResult('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEvaluate();
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
    setError('');
  };

  const handleBackspace = () => {
    setExpression(prev => prev.slice(0, -1));
  };

  const handleInsert = (text: string) => {
    setExpression(prev => prev + text);
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const clearHistory = () => {
    saveHistory([]);
  };

  // Dragging event handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    // Only drag from title bar, not buttons
    if ((e.target as HTMLElement).closest('button')) return;
    setDragging(true);
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    dragStart.current = {
      x: clientX - safePos.x,
      y: clientY - safePos.y
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      
      const currentWidth = (showPanel ? 740 : 380) * scale;
      const currentHeight = 520 * scale;
      
      // Clamp to window boundaries
      const newX = Math.max(10, Math.min(window.innerWidth - currentWidth - 10, clientX - dragStart.current.x));
      const newY = Math.max(10, Math.min(window.innerHeight - currentHeight - 10, clientY - dragStart.current.y));
      setPosition({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove, { passive: false });
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [dragging, showPanel, scale]);

  if (!isOpen) return null;

  return (
    <div 
      ref={calculatorRef}
      className={`advanced-calc-container luxury-card ${showPanel ? 'with-panel' : ''}`}
      style={{
        '--calc-x': `${safePos.x}px`,
        '--calc-y': `${safePos.y}px`,
        zIndex: 9999,
        display: 'flex',
        overflow: 'hidden',
        backdropFilter: 'blur(16px)',
        background: 'var(--color-glass)',
        border: '1px solid var(--color-border-strong)',
        boxShadow: 'var(--shadow-lg), var(--shadow-glow-sm)',
        color: 'var(--color-text-primary)',
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
      } as React.CSSProperties}
    >
      {/* Sidebar Panel inside Calculator */}
      {showPanel && (
        <div className="calc-side-panel">
          <div className="side-panel-header">
            <button 
              className={`panel-tab ${activeTab === 'history' ? 'active' : ''}`}
              onClick={() => setActiveTab('history')}
            >
              <History size={14} /> History
            </button>
            <button 
              className={`panel-tab ${activeTab === 'constants' ? 'active' : ''}`}
              onClick={() => setActiveTab('constants')}
            >
              <Sparkles size={14} /> Constants
            </button>
            <button 
              className={`panel-tab ${activeTab === 'help' ? 'active' : ''}`}
              onClick={() => setActiveTab('help')}
            >
              <HelpCircle size={14} /> Syntax
            </button>
          </div>

          <div className="side-panel-content">
            {activeTab === 'history' && (
              <div className="calc-history-list">
                <div className="history-section-header">
                  <span>Recent Computations</span>
                  {history.length > 0 && (
                    <button className="clear-history-btn" onClick={clearHistory}>
                      <Trash2 size={12} /> Clear
                    </button>
                  )}
                </div>
                {history.length === 0 ? (
                  <div className="empty-panel-state">
                    <History size={24} style={{ opacity: 0.3 }} />
                    <p>No calculation history yet</p>
                  </div>
                ) : (
                  history.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="history-item-calc"
                      onClick={() => setExpression(item.expression)}
                    >
                      <div className="hist-expr text-truncate">{item.expression}</div>
                      <div className="hist-res text-gold-gradient font-bold text-truncate">= {item.result}</div>
                      <div className="hist-time">{item.timestamp}</div>
                    </div>
                  ))
                )}
              </div>
            )}

            {activeTab === 'constants' && (
              <div className="calc-constants-list">
                <div className="panel-section-title">Physical Constants</div>
                {SCIENTIFIC_CONSTANTS.map((c, idx) => (
                  <div 
                    key={idx} 
                    className="calc-constant-item"
                    onClick={() => handleInsert(c.symbol)}
                    title={`Click to insert ${c.symbol} (${c.value})`}
                  >
                    <div className="constant-info">
                      <span className="constant-symbol text-gold-gradient font-bold">{c.symbol}</span>
                      <span className="constant-name">{c.name}</span>
                    </div>
                    <span className="constant-value">{math.format(math.evaluate(c.value), { precision: 6 })}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'help' && (
              <div className="calc-help-content">
                <div className="panel-section-title">MathJS Expression Syntax</div>
                
                <div className="help-section">
                  <h4>Scientific & Trig</h4>
                  <ul>
                    <li><code>sin(pi/2)</code>, <code>cos(45 deg)</code>, <code>tan(x)</code></li>
                    <li><code>log(100, 10)</code>, <code>log(e)</code>, <code>ln(x)</code></li>
                    <li><code>sqrt(16)</code>, <code>2^3</code>, <code>5!</code> (factorial)</li>
                  </ul>
                </div>

                <div className="help-section">
                  <h4>Algebraic & Functions</h4>
                  <ul>
                    <li><code>simplify("2x + 3x")</code> → <code>5x</code></li>
                    <li><code>derivative("x^2 + 3x", "x")</code> → <code>2x + 3</code></li>
                  </ul>
                </div>

                <div className="help-section">
                  <h4>Units & Conversions</h4>
                  <ul>
                    <li><code>5 cm + 2 inch</code> → <code>10.08 cm</code></li>
                    <li><code>50 m/s to mph</code> → <code>111.8468 mph</code></li>
                    <li><code>90 deg to rad</code> → <code>1.57079 rad</code></li>
                  </ul>
                </div>

                <div className="help-section">
                  <h4>Complex Numbers</h4>
                  <ul>
                    <li><code>2 + 3i</code></li>
                    <li><code>(2 + 3i) * (1 - i)</code></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Main Calculator Body */}
      <div className="calc-main-body">
        {/* Draggable Title Bar */}
        <div 
          className="calc-titlebar"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          style={{ cursor: dragging ? 'grabbing' : 'grab' }}
        >
          <div className="calc-title">
            <Calculator size={16} className="text-gold-gradient" />
            <span className="font-bold letter-spacing-1">LUMEN-X ENGINE</span>
          </div>
          <div className="calc-actions">
            <button 
              className="icon-btn-calc-toggle" 
              onClick={() => setScale(s => Math.max(0.5, s - 0.1))}
              title="Decrease Size"
            >
              <ZoomOut size={16} />
            </button>
            <button 
              className="icon-btn-calc-toggle" 
              onClick={() => setScale(s => Math.min(1.5, s + 0.1))}
              title="Increase Size"
            >
              <ZoomIn size={16} />
            </button>
            <button 
              className="icon-btn-calc-toggle" 
              onClick={() => setShowPanel(p => !p)}
              title={showPanel ? "Hide panel" : "Show history & constants"}
            >
              {showPanel ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
            </button>
            <button className="icon-btn-calc-close" onClick={onClose}>
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Display Screen */}
        <div className="calc-screen">
          <div className="calc-expression-row">
            <input 
              ref={inputRef}
              type="text" 
              value={expression}
              onChange={(e) => setExpression(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter equation…  e.g.  integrate(x^3)  or  derivative(sin(x))"
              className="calc-input"
            />
          </div>
          <div className="calc-result-row">
            {error ? (
              <span className="calc-error">{error}</span>
            ) : (
              <div className="calc-success-row">
                <span className="calc-equals">=</span>
                <span className="calc-result text-gold-gradient">{result || '0'}</span>
                {result && (
                  <button className="calc-copy-btn" onClick={handleCopy} title="Copy Result">
                    {copied ? 'Copied' : <Copy size={13} />}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Button Grid Pad */}
        <div className="calc-pad-grid">
          {/* Row 1: Trig & Higher Math */}
          {renderBtn('sin', 'sin(', 'fn-btn', ['s', 'sin'])}
          {renderBtn('cos', 'cos(', 'fn-btn', ['c', 'cos'])}
          {renderBtn('tan', 'tan(', 'fn-btn', ['t', 'tan'])}
          {renderBtn('log', 'log(', 'fn-btn', ['l', 'log'])}
          {renderBtn('ln', 'ln(', 'fn-btn', ['n', 'ln'])}
          {renderBtn('x^y', '^', 'fn-btn', ['^'])}

          {/* Row 2: Variable, parenthesis, operators */}
          {renderBtn('x', 'x', 'fn-btn', ['x'])}
          {renderBtn('i', 'i', 'fn-btn', ['i'])}
          {renderBtn('(', '(', 'fn-btn', ['('])}
          {renderBtn(')', ')', 'fn-btn', [')'])}
          {renderBtn('√', 'sqrt(', 'fn-btn', ['r', 'R'])}
          {renderBtn('÷', ' / ', 'op-btn', ['/'])}

          {/* Row 3: Numbers & operators */}
          {renderBtn('7', '7', 'num-btn', ['7'])}
          {renderBtn('8', '8', 'num-btn', ['8'])}
          {renderBtn('9', '9', 'num-btn', ['9'])}
          {renderBtn('C', 'CLEAR', 'clear-btn', ['C', 'c', 'Clear'])}
          {renderBtn(<Delete size={16} />, 'BACK', 'action-btn', ['BACK', 'Delete'])}
          {renderBtn('×', ' * ', 'op-btn', ['*'])}

          {/* Row 4 */}
          {renderBtn('4', '4', 'num-btn', ['4'])}
          {renderBtn('5', '5', 'num-btn', ['5'])}
          {renderBtn('6', '6', 'num-btn', ['6'])}
          {renderBtn('int', 'integral(', 'fn-btn', ['I'])}
          {renderBtn('diff', 'derivative(', 'fn-btn', ['D'])}
          {renderBtn('−', ' - ', 'op-btn', ['-'])}

          {/* Row 5 */}
          {renderBtn('1', '1', 'num-btn', ['1'])}
          {renderBtn('2', '2', 'num-btn', ['2'])}
          {renderBtn('3', '3', 'num-btn', ['3'])}
          {renderBtn('to', ' to ', 'fn-btn', ['_'])}
          {renderBtn('deg', ' deg', 'fn-btn', ['g'])}
          {renderBtn('+', ' + ', 'op-btn', ['+'])}

          {/* Row 6 */}
          {renderBtn('0', '0', 'num-btn double', ['0'])}
          {renderBtn('.', '.', 'num-btn', ['.'])}
          {renderBtn('π', 'pi', 'fn-btn', ['p', 'pi'])}
          {renderBtn(
            <>Evaluate <CornerDownLeft size={14} style={{ marginLeft: 6 }} /></>, 
            'EVAL', 
            'eval-btn triple', 
            ['EVAL', '=']
          )}
        </div>
      </div>

      <style>{`
        .advanced-calc-container {
          position: fixed;
          left: var(--calc-x);
          top: var(--calc-y);
          width: 380px;
          height: 520px;
          border-radius: var(--border-radius-md);
          display: flex;
          box-shadow: var(--shadow-lg);
          user-select: none;
          transition: width 0.2s cubic-bezier(0.25, 1, 0.5, 1), transform 0.2s;
        }

        .advanced-calc-container.with-panel {
          width: 740px;
        }

        .calc-side-panel {
          width: 360px;
          border-right: 1px solid var(--color-border);
          background: rgba(18, 16, 14, 0.4);
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .side-panel-header {
          display: flex;
          border-bottom: 1px solid var(--color-border);
          background: rgba(18, 16, 14, 0.6);
        }

        .panel-tab {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px 6px;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 500;
          color: var(--color-text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
        }

        .panel-tab:hover {
          color: var(--color-text-primary);
          background: rgba(255, 255, 255, 0.02);
        }

        .panel-tab.active {
          color: var(--color-accent);
          border-bottom-color: var(--color-accent);
          background: rgba(212, 175, 55, 0.04);
        }

        .side-panel-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }

        .calc-history-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .history-section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .clear-history-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          background: none;
          border: none;
          color: #ef4444;
          font-size: 11px;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.15s;
        }

        .clear-history-btn:hover {
          opacity: 1;
        }

        .history-item-calc {
          padding: 10px 12px;
          border-radius: var(--border-radius-xs);
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .history-item-calc:hover {
          background: rgba(212, 175, 55, 0.05);
          border-color: rgba(212, 175, 55, 0.15);
        }

        .hist-expr {
          font-size: 12.5px;
          color: var(--color-text-secondary);
          font-family: monospace;
        }

        .hist-res {
          font-size: 14px;
          margin-top: 4px;
          font-family: monospace;
        }

        .hist-time {
          font-size: 9.5px;
          color: var(--color-text-muted);
          text-align: right;
          margin-top: 2px;
        }

        .empty-panel-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          color: var(--color-text-muted);
          gap: 8px;
          font-size: 12px;
        }

        .calc-constants-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .panel-section-title {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-text-secondary);
          margin-bottom: 8px;
          font-family: var(--font-display);
        }

        .calc-constant-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 10px;
          border-radius: var(--border-radius-xs);
          background: rgba(255, 255, 255, 0.02);
          cursor: pointer;
          transition: all 0.15s ease;
          border: 1px solid transparent;
        }

        .calc-constant-item:hover {
          background: rgba(212, 175, 55, 0.05);
          border-color: rgba(212, 175, 55, 0.15);
        }

        .constant-info {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .constant-symbol {
          font-family: monospace;
          font-size: 13px;
          width: 24px;
        }

        .constant-name {
          font-size: 11.5px;
          color: var(--color-text-secondary);
        }

        .constant-value {
          font-family: monospace;
          font-size: 12px;
          color: var(--color-text-primary);
        }

        .calc-help-content {
          font-size: 12px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .help-section h4 {
          font-size: 11px;
          text-transform: uppercase;
          color: var(--color-accent);
          margin-bottom: 4px;
          font-family: var(--font-display);
        }

        .help-section ul {
          list-style: none;
          padding-left: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .help-section code {
          font-family: monospace;
          background: rgba(0,0,0,0.2);
          padding: 1px 4px;
          border-radius: 3px;
          color: var(--color-text-primary);
        }

        /* Main calculator area */
        .calc-main-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          background: transparent;
        }

        .calc-titlebar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 20px;
          border-bottom: 1px solid var(--color-border);
          background: rgba(28, 25, 20, 0.3);
        }

        .calc-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-family: var(--font-display);
        }

        .calc-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-btn-calc-toggle, .icon-btn-calc-close {
          background: none;
          border: none;
          width: 26px;
          height: 26px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-text-secondary);
          cursor: pointer;
          transition: all 0.15s;
        }

        .icon-btn-calc-toggle:hover, .icon-btn-calc-close:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text-primary);
        }

        .icon-btn-calc-close:hover {
          background: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }

        .calc-screen {
          padding: 18px 20px;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .calc-expression-row {
          width: 100%;
        }

        .calc-input {
          width: 100%;
          background: none;
          border: none;
          color: var(--color-text-primary);
          font-family: monospace;
          font-size: 18px;
          outline: none;
          padding: 0;
        }

        .calc-input::placeholder {
          color: var(--color-text-muted);
          font-size: 13px;
        }

        .calc-result-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          min-height: 32px;
          text-align: right;
        }

        .calc-success-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .calc-equals {
          color: var(--color-text-muted);
          font-family: monospace;
          font-size: 16px;
        }

        .calc-result {
          font-family: monospace;
          font-size: 22px;
          font-weight: 600;
          word-break: break-all;
        }

        .calc-copy-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          font-size: 11px;
        }

        .calc-copy-btn:hover {
          background: rgba(255,255,255,0.05);
          color: var(--color-accent);
        }

        .calc-error {
          color: #f87171;
          font-size: 12px;
          font-family: monospace;
          text-align: right;
          word-break: break-all;
        }

        .calc-pad-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1px;
          background: var(--color-border);
          padding: 1px;
        }

        .calc-btn {
          border: none;
          cursor: pointer;
          font-size: 13.5px;
          font-family: var(--font-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.1s ease;
          outline: none;
        }

        .num-btn {
          background: rgba(28, 25, 20, 0.45);
          color: var(--color-text-primary);
          font-weight: 500;
        }

        .num-btn:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .fn-btn {
          background: rgba(20, 18, 16, 0.35);
          color: var(--color-accent);
          font-family: var(--font-display);
          font-size: 12px;
        }

        .fn-btn:hover {
          background: rgba(212, 175, 55, 0.08);
          color: var(--color-accent-light);
        }

        .op-btn {
          background: rgba(20, 18, 16, 0.5);
          color: var(--color-accent);
          font-size: 16px;
          font-weight: 500;
        }

        .op-btn:hover {
          background: rgba(212, 175, 55, 0.12);
        }

        .clear-btn {
          background: rgba(220, 38, 38, 0.1);
          color: #f87171;
          font-weight: 600;
        }

        .clear-btn:hover {
          background: rgba(220, 38, 38, 0.2);
        }

        .action-btn {
          background: rgba(20, 18, 16, 0.45);
          color: var(--color-text-secondary);
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-text-primary);
        }

        .eval-btn {
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          color: var(--color-base);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 13px;
        }

        .eval-btn:hover {
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
          box-shadow: inset 0 0 10px rgba(255,255,255,0.2);
        }

        .double {
          grid-column: span 2;
        }

        .triple {
          grid-column: span 3;
        }

        .font-bold {
          font-weight: 600;
        }
        
        .letter-spacing-1 {
          letter-spacing: 1px;
        }

        .calc-btn.pressed {
          transform: scale(0.92);
          box-shadow: inset 0 3px 8px rgba(0,0,0,0.4);
          filter: brightness(1.2);
        }

        /* ─── Responsive Mobile Adjustments ─── */
        @media (max-width: 768px) {
          .advanced-calc-container {
            left: 0 !important;
            bottom: 0 !important;
            top: auto !important;
            width: 100vw !important;
            height: 85vh !important;
            border-radius: 20px 20px 0 0;
            flex-direction: column-reverse;
          }
          .advanced-calc-container.with-panel {
            width: 100vw !important;
            height: 90vh !important;
          }
          .calc-side-panel {
            width: 100%;
            height: 40%;
            border-right: none;
            border-top: 1px solid var(--color-border);
          }
          .calc-main-body {
            height: auto;
            flex: 1;
          }
          .calc-titlebar {
            cursor: default !important; /* disable drag cursor on mobile */
          }
          .calc-input {
            font-size: 16px;
          }
          .calc-btn {
            font-size: 13px;
          }
          .eval-btn {
            font-size: 11px;
          }
          .calc-result {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};
