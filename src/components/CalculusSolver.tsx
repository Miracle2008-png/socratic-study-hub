import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Calculator, Sparkles, Send, Loader2, ChevronDown, ChevronUp } from 'lucide-react';
import { GeminiService } from '../services/GeminiService';

interface SolverResult {
  problem: string;
  steps: string[];
  finalAnswer: string;
  concept: string;
}

// ── Complete Calculus Symbol Keyboard ──────────────────────────────────────
const SYMBOL_GROUPS = [
  {
    label: 'Calculus',
    symbols: [
      { label: '∫', insert: '\\int ', tip: 'Integral' },
      { label: '∬', insert: '\\iint ', tip: 'Double Integral' },
      { label: '∭', insert: '\\iiint ', tip: 'Triple Integral' },
      { label: '∮', insert: '\\oint ', tip: 'Contour Integral' },
      { label: 'd/dx', insert: '\\frac{d}{dx}', tip: 'Derivative' },
      { label: 'dy/dx', insert: '\\frac{dy}{dx}', tip: 'dy over dx' },
      { label: '∂', insert: '\\partial ', tip: 'Partial derivative' },
      { label: '∂/∂x', insert: '\\frac{\\partial}{\\partial x}', tip: 'Partial d/dx' },
      { label: 'lim', insert: '\\lim_{x \\to }', tip: 'Limit' },
      { label: 'lim→0', insert: '\\lim_{x \\to 0}', tip: 'Limit to 0' },
      { label: 'lim→∞', insert: '\\lim_{x \\to \\infty}', tip: 'Limit to infinity' },
      { label: "f'(x)", insert: "f'(x)", tip: 'First derivative notation' },
      { label: "f''(x)", insert: "f''(x)", tip: 'Second derivative notation' },
      { label: 'Δ', insert: '\\Delta ', tip: 'Delta (change)' },
      { label: 'dx', insert: '\\,dx', tip: 'Differential dx' },
      { label: 'dy', insert: '\\,dy', tip: 'Differential dy' },
      { label: 'dt', insert: '\\,dt', tip: 'Differential dt' },
      { label: '∑', insert: '\\sum_{n=1}^{\\infty}', tip: 'Summation' },
      { label: '∏', insert: '\\prod_{n=1}^{\\infty}', tip: 'Product' },
      { label: 'nabla ∇', insert: '\\nabla ', tip: 'Gradient / del' },
    ],
  },
  {
    label: 'Functions',
    symbols: [
      { label: 'sin', insert: '\\sin(x)', tip: 'Sine' },
      { label: 'cos', insert: '\\cos(x)', tip: 'Cosine' },
      { label: 'tan', insert: '\\tan(x)', tip: 'Tangent' },
      { label: 'csc', insert: '\\csc(x)', tip: 'Cosecant' },
      { label: 'sec', insert: '\\sec(x)', tip: 'Secant' },
      { label: 'cot', insert: '\\cot(x)', tip: 'Cotangent' },
      { label: 'arcsin', insert: '\\arcsin(x)', tip: 'Inverse sine' },
      { label: 'arccos', insert: '\\arccos(x)', tip: 'Inverse cosine' },
      { label: 'arctan', insert: '\\arctan(x)', tip: 'Inverse tangent' },
      { label: 'sinh', insert: '\\sinh(x)', tip: 'Hyperbolic sine' },
      { label: 'cosh', insert: '\\cosh(x)', tip: 'Hyperbolic cosine' },
      { label: 'tanh', insert: '\\tanh(x)', tip: 'Hyperbolic tangent' },
      { label: 'ln', insert: '\\ln(x)', tip: 'Natural log' },
      { label: 'log', insert: '\\log(x)', tip: 'Log base 10' },
      { label: 'logₐ', insert: '\\log_{a}(x)', tip: 'Log base a' },
      { label: 'eˣ', insert: 'e^{x}', tip: 'Exponential' },
      { label: 'aˣ', insert: 'a^{x}', tip: 'General exponential' },
      { label: '√x', insert: '\\sqrt{x}', tip: 'Square root' },
      { label: '∛x', insert: '\\sqrt[3]{x}', tip: 'Cube root' },
      { label: '|x|', insert: '|x|', tip: 'Absolute value' },
    ],
  },
  {
    label: 'Algebra & Fractions',
    symbols: [
      { label: 'a/b', insert: '\\frac{a}{b}', tip: 'Fraction' },
      { label: 'xⁿ', insert: 'x^{n}', tip: 'Power' },
      { label: 'x²', insert: 'x^{2}', tip: 'Square' },
      { label: 'x³', insert: 'x^{3}', tip: 'Cube' },
      { label: 'x⁻¹', insert: 'x^{-1}', tip: 'Reciprocal' },
      { label: '±', insert: '\\pm ', tip: 'Plus or minus' },
      { label: '×', insert: '\\times ', tip: 'Times' },
      { label: '÷', insert: '\\div ', tip: 'Divide' },
      { label: '≠', insert: '\\neq ', tip: 'Not equal' },
      { label: '≤', insert: '\\leq ', tip: 'Less or equal' },
      { label: '≥', insert: '\\geq ', tip: 'Greater or equal' },
      { label: '≈', insert: '\\approx ', tip: 'Approximately' },
      { label: '∞', insert: '\\infty', tip: 'Infinity' },
      { label: '∝', insert: '\\propto ', tip: 'Proportional' },
    ],
  },
  {
    label: 'Greek Letters',
    symbols: [
      { label: 'α', insert: '\\alpha ', tip: 'alpha' },
      { label: 'β', insert: '\\beta ', tip: 'beta' },
      { label: 'γ', insert: '\\gamma ', tip: 'gamma' },
      { label: 'δ', insert: '\\delta ', tip: 'delta' },
      { label: 'ε', insert: '\\epsilon ', tip: 'epsilon' },
      { label: 'ζ', insert: '\\zeta ', tip: 'zeta' },
      { label: 'θ', insert: '\\theta ', tip: 'theta' },
      { label: 'λ', insert: '\\lambda ', tip: 'lambda' },
      { label: 'μ', insert: '\\mu ', tip: 'mu' },
      { label: 'π', insert: '\\pi ', tip: 'pi' },
      { label: 'ρ', insert: '\\rho ', tip: 'rho' },
      { label: 'σ', insert: '\\sigma ', tip: 'sigma (lowercase)' },
      { label: 'Σ', insert: '\\Sigma ', tip: 'Sigma (uppercase)' },
      { label: 'τ', insert: '\\tau ', tip: 'tau' },
      { label: 'φ', insert: '\\phi ', tip: 'phi' },
      { label: 'ψ', insert: '\\psi ', tip: 'psi' },
      { label: 'ω', insert: '\\omega ', tip: 'omega' },
      { label: 'Ω', insert: '\\Omega ', tip: 'Omega' },
    ],
  },
  {
    label: 'Bounds & Notation',
    symbols: [
      { label: '[a,b]', insert: '\\int_a^b ', tip: 'Definite integral a to b' },
      { label: '[0,∞]', insert: '\\int_0^\\infty ', tip: 'Integral 0 to infinity' },
      { label: '[-∞,∞]', insert: '\\int_{-\\infty}^{\\infty} ', tip: 'Integral over all reals' },
      { label: '∑ⁿ', insert: '\\sum_{k=0}^{n}', tip: 'Sum k=0 to n' },
      { label: '{...}', insert: '\\{ \\}', tip: 'Set braces' },
      { label: '⌊x⌋', insert: '\\lfloor x \\rfloor', tip: 'Floor function' },
      { label: '⌈x⌉', insert: '\\lceil x \\rceil', tip: 'Ceiling function' },
      { label: '‖v‖', insert: '\\|\\mathbf{v}\\|', tip: 'Vector norm' },
      { label: '→', insert: '\\to ', tip: 'Arrow (approaches)' },
      { label: '⇒', insert: '\\Rightarrow ', tip: 'Implies' },
      { label: '⟺', insert: '\\iff ', tip: 'If and only if' },
      { label: '∀', insert: '\\forall ', tip: 'For all' },
      { label: '∃', insert: '\\exists ', tip: 'There exists' },
      { label: '∈', insert: '\\in ', tip: 'Element of' },
    ],
  },
];

export const CalculusSolver: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState<SolverResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [keyboardOpen, setKeyboardOpen] = useState(true);
  const [activeGroup, setActiveGroup] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertSymbol = (text: string) => {
    const el = textareaRef.current;
    if (!el) {
      setProblem(p => p + text);
      return;
    }
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const newVal = problem.slice(0, start) + text + problem.slice(end);
    setProblem(newVal);
    // Restore cursor position after state update
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + text.length, start + text.length);
    });
  };

  const handleSolve = async () => {
    if (!problem.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const solution = await GeminiService.solveCalculus(problem);
      setResult(solution);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to solve problem. Ensure your API key is set.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSolve();
    }
  };

  return (
    <div className="calculus-solver-container anim-fade">
      <div className="solver-header luxury-card">
        <div className="solver-title">
          <Calculator size={24} className="text-gold-gradient" />
          <h2>AI Calculus Solver</h2>
        </div>
        <p>Enter an integral, limit, or ODE, and our AI will solve it step-by-step with LaTeX formatting.</p>
      </div>

      <div className="solver-input-area luxury-card">
        {/* ── Symbol Keyboard ── */}
        <div className="sym-keyboard">
          <button
            className="sym-keyboard-toggle"
            onClick={() => setKeyboardOpen(o => !o)}
          >
            <span>∫ Symbol Keyboard</span>
            {keyboardOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {keyboardOpen && (
            <div className="sym-keyboard-body">
              {/* Group tabs */}
              <div className="sym-group-tabs">
                {SYMBOL_GROUPS.map((g, i) => (
                  <button
                    key={g.label}
                    className={`sym-tab ${activeGroup === i ? 'active' : ''}`}
                    onClick={() => setActiveGroup(i)}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              {/* Symbol grid */}
              <div className="sym-grid">
                {SYMBOL_GROUPS[activeGroup].symbols.map(sym => (
                  <button
                    key={sym.label}
                    className="sym-btn"
                    title={sym.tip}
                    onClick={() => insertSymbol(sym.insert)}
                  >
                    {sym.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ── Input ── */}
        <textarea
          ref={textareaRef}
          value={problem}
          onChange={(e) => setProblem(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="e.g., Integrate x^2 * sin(x) dx, or Find the limit as x approaches 0 of sin(x)/x..."
          className="solver-textarea"
          disabled={loading}
        />
        <div className="solver-actions">
          <button
            className="gold-btn"
            onClick={handleSolve}
            disabled={loading || !problem.trim()}
          >
            {loading ? <Loader2 size={16} className="spin" /> : <Send size={16} />}
            <span>{loading ? 'Solving...' : 'Solve Problem'}</span>
          </button>
        </div>
      </div>

      {error && (
        <div className="solver-error luxury-card">
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div className="solver-result-area luxury-card anim-slide-up">
          <div className="result-section">
            <h3 className="text-gold-gradient">Problem</h3>
            <div className="math-display">
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {result.problem}
              </ReactMarkdown>
            </div>
          </div>

          <div className="result-section">
            <h3 className="text-gold-gradient">Step-by-Step Solution</h3>
            <div className="steps-cards">
              {result.steps.map((step, idx) => (
                <div key={idx} className="step-card">
                  <div className="step-badge">Step {idx + 1}</div>
                  <div className="step-body">
                    <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                      {step}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-section final-answer-section">
            <h3 className="text-gold-gradient">Final Answer</h3>
            <div className="math-display final-answer">
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                {result.finalAnswer}
              </ReactMarkdown>
            </div>
          </div>

          <div className="result-section concept-section">
            <div className="concept-header">
              <Sparkles size={16} className="text-gold-gradient" />
              <h3>Core Concept</h3>
            </div>
            <p className="concept-text">{result.concept}</p>
          </div>
        </div>
      )}

      <style>{`
        .calculus-solver-container {
          display: flex;
          flex-direction: column;
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
          padding-bottom: 40px;
        }

        .solver-header { padding: 24px; }

        .solver-title {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .solver-title h2 {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
        }

        .solver-header p {
          color: var(--color-text-secondary);
          font-size: 14px;
        }

        .solver-input-area {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* ── Symbol Keyboard ── */
        .sym-keyboard {
          border: 1px solid var(--color-border);
          border-radius: 12px;
          overflow: hidden;
          background: rgba(0,0,0,0.15);
        }

        .sym-keyboard-toggle {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: transparent;
          border: none;
          color: var(--color-accent);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          font-family: var(--font-display);
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .sym-keyboard-toggle:hover { background: rgba(212,175,55,0.06); }

        .sym-keyboard-body {
          border-top: 1px solid var(--color-border);
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .sym-group-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .sym-tab {
          padding: 5px 12px;
          border-radius: 20px;
          border: 1px solid var(--color-border);
          background: transparent;
          color: var(--color-text-secondary);
          font-size: 11px;
          font-weight: 600;
          font-family: var(--font-display);
          cursor: pointer;
          transition: all var(--transition-fast);
          letter-spacing: 0.3px;
        }
        .sym-tab:hover { border-color: rgba(212,175,55,0.4); color: var(--color-accent); }
        .sym-tab.active {
          background: rgba(212,175,55,0.15);
          border-color: rgba(212,175,55,0.5);
          color: var(--color-accent);
        }

        .sym-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .sym-btn {
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          background: var(--color-base-alt);
          color: var(--color-text-primary);
          font-size: 13px;
          font-family: 'Courier New', monospace;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
          min-width: 36px;
          text-align: center;
        }
        .sym-btn:hover {
          background: rgba(212,175,55,0.15);
          border-color: rgba(212,175,55,0.4);
          color: var(--color-accent);
          transform: translateY(-1px);
          box-shadow: 0 3px 8px rgba(212,175,55,0.15);
        }
        .sym-btn:active { transform: translateY(0); }

        /* ── Textarea ── */
        .solver-textarea {
          width: 100%;
          min-height: 100px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius-md);
          padding: 16px;
          color: var(--color-text-primary);
          font-family: var(--font-primary);
          font-size: 15px;
          resize: vertical;
          outline: none;
          transition: border-color var(--transition-fast);
          box-sizing: border-box;
        }
        .solver-textarea:focus { border-color: var(--color-accent); }

        .solver-actions {
          display: flex;
          justify-content: flex-end;
        }

        .solver-error {
          padding: 16px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.3);
          color: #f87171;
        }

        .solver-result-area {
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .result-section h3 {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .math-display {
          background: rgba(0, 0, 0, 0.2);
          padding: 20px;
          border-radius: var(--border-radius-md);
          border: 1px solid var(--color-border);
          overflow-x: auto;
          font-size: 16px;
        }

        .steps-cards { display: flex; flex-direction: column; gap: 12px; }

        .step-card {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--color-border);
          border-left: 3px solid var(--color-accent);
          border-radius: var(--border-radius-md);
          overflow: hidden;
        }

        .step-badge {
          background: rgba(212, 175, 55, 0.1);
          border-bottom: 1px solid var(--color-border);
          color: var(--color-accent);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 16px;
        }

        .step-body {
          padding: 16px;
          font-size: 15px;
          line-height: 1.7;
          color: var(--color-text-primary);
          overflow-x: auto;
        }
        .step-body p { margin: 0; }

        .final-answer-section {
          background: rgba(212, 175, 55, 0.05);
          padding: 24px;
          border-radius: var(--border-radius-md);
          border: 1px solid rgba(212, 175, 55, 0.2);
        }

        .final-answer {
          font-size: 20px;
          background: transparent;
          border: none;
          padding: 0;
        }

        .concept-section {
          background: var(--color-base-alt);
          padding: 20px;
          border-radius: var(--border-radius-md);
        }

        .concept-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .concept-header h3 { margin: 0; }

        .concept-text {
          color: var(--color-text-secondary);
          font-size: 14px;
          line-height: 1.6;
        }

        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};
