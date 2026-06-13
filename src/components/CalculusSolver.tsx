import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import katex from 'katex';
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
      { label: '$\\int$', insert: '\\int ', tip: 'Integral' },
      { label: '$\\iint$', insert: '\\iint ', tip: 'Double Integral' },
      { label: '$\\iiint$', insert: '\\iiint ', tip: 'Triple Integral' },
      { label: '$\\oint$', insert: '\\oint ', tip: 'Contour Integral' },
      { label: '$\\frac{d}{dx}$', insert: '\\frac{d}{dx}', tip: 'Derivative' },
      { label: '$\\frac{dy}{dx}$', insert: '\\frac{dy}{dx}', tip: 'dy over dx' },
      { label: '$\\partial$', insert: '\\partial ', tip: 'Partial derivative' },
      { label: '$\\frac{\\partial}{\\partial x}$', insert: '\\frac{\\partial}{\\partial x}', tip: 'Partial d/dx' },
      { label: '$\\lim$', insert: '\\lim_{x \\to }', tip: 'Limit' },
      { label: '$\\lim_{x \\to 0}$', insert: '\\lim_{x \\to 0}', tip: 'Limit to 0' },
      { label: '$\\lim_{x \\to \\infty}$', insert: '\\lim_{x \\to \\infty}', tip: 'Limit to infinity' },
      { label: "$f'(x)$", insert: "f'(x)", tip: 'First derivative notation' },
      { label: "$f''(x)$", insert: "f''(x)", tip: 'Second derivative notation' },
      { label: '$\\Delta$', insert: '\\Delta ', tip: 'Delta (change)' },
      { label: '$dx$', insert: '\\,dx', tip: 'Differential dx' },
      { label: '$dy$', insert: '\\,dy', tip: 'Differential dy' },
      { label: '$dt$', insert: '\\,dt', tip: 'Differential dt' },
      { label: '$\\sum$', insert: '\\sum_{n=1}^{\\infty}', tip: 'Summation' },
      { label: '$\\prod$', insert: '\\prod_{n=1}^{\\infty}', tip: 'Product' },
      { label: '$\\nabla$', insert: '\\nabla ', tip: 'Gradient / del' },
    ],
  },
  {
    label: 'Functions',
    symbols: [
      { label: '$\\sin$', insert: '\\sin(x)', tip: 'Sine' },
      { label: '$\\cos$', insert: '\\cos(x)', tip: 'Cosine' },
      { label: '$\\tan$', insert: '\\tan(x)', tip: 'Tangent' },
      { label: '$\\csc$', insert: '\\csc(x)', tip: 'Cosecant' },
      { label: '$\\sec$', insert: '\\sec(x)', tip: 'Secant' },
      { label: '$\\cot$', insert: '\\cot(x)', tip: 'Cotangent' },
      { label: '$\\arcsin$', insert: '\\arcsin(x)', tip: 'Inverse sine' },
      { label: '$\\arccos$', insert: '\\arccos(x)', tip: 'Inverse cosine' },
      { label: '$\\arctan$', insert: '\\arctan(x)', tip: 'Inverse tangent' },
      { label: '$\\sinh$', insert: '\\sinh(x)', tip: 'Hyperbolic sine' },
      { label: '$\\cosh$', insert: '\\cosh(x)', tip: 'Hyperbolic cosine' },
      { label: '$\\tanh$', insert: '\\tanh(x)', tip: 'Hyperbolic tangent' },
      { label: '$\\ln$', insert: '\\ln(x)', tip: 'Natural log' },
      { label: '$\\log_{10}$', insert: '\\log(x)', tip: 'Log base 10' },
      { label: '$\\log_a$', insert: '\\log_{a}(x)', tip: 'Log base a' },
      { label: '$e^x$', insert: 'e^{x}', tip: 'Exponential' },
      { label: '$a^x$', insert: 'a^{x}', tip: 'General exponential' },
      { label: '$\\sqrt{x}$', insert: '\\sqrt{x}', tip: 'Square root' },
      { label: '$\\sqrt[3]{x}$', insert: '\\sqrt[3]{x}', tip: 'Cube root' },
      { label: '$|x|$', insert: '|x|', tip: 'Absolute value' },
    ],
  },
  {
    label: 'Algebra & Fractions',
    symbols: [
      { label: '$\\frac{a}{b}$', insert: '\\frac{a}{b}', tip: 'Fraction' },
      { label: '$x^n$', insert: 'x^{n}', tip: 'Power' },
      { label: '$x^2$', insert: 'x^{2}', tip: 'Square' },
      { label: '$x^3$', insert: 'x^{3}', tip: 'Cube' },
      { label: '$x^{-1}$', insert: 'x^{-1}', tip: 'Reciprocal' },
      { label: '$\\pm$', insert: '\\pm ', tip: 'Plus or minus' },
      { label: '$\\times$', insert: '\\times ', tip: 'Times' },
      { label: '$\\div$', insert: '\\div ', tip: 'Divide' },
      { label: '$\\neq$', insert: '\\neq ', tip: 'Not equal' },
      { label: '$\\leq$', insert: '\\leq ', tip: 'Less or equal' },
      { label: '$\\geq$', insert: '\\geq ', tip: 'Greater or equal' },
      { label: '$\\approx$', insert: '\\approx ', tip: 'Approximately' },
      { label: '$\\infty$', insert: '\\infty', tip: 'Infinity' },
      { label: '$\\propto$', insert: '\\propto ', tip: 'Proportional' },
    ],
  },
  {
    label: 'Greek Letters',
    symbols: [
      { label: '$\\alpha$', insert: '\\alpha ', tip: 'alpha' },
      { label: '$\\beta$', insert: '\\beta ', tip: 'beta' },
      { label: '$\\gamma$', insert: '\\gamma ', tip: 'gamma' },
      { label: '$\\delta$', insert: '\\delta ', tip: 'delta' },
      { label: '$\\epsilon$', insert: '\\epsilon ', tip: 'epsilon' },
      { label: '$\\zeta$', insert: '\\zeta ', tip: 'zeta' },
      { label: '$\\theta$', insert: '\\theta ', tip: 'theta' },
      { label: '$\\lambda$', insert: '\\lambda ', tip: 'lambda' },
      { label: '$\\mu$', insert: '\\mu ', tip: 'mu' },
      { label: '$\\pi$', insert: '\\pi ', tip: 'pi' },
      { label: '$\\rho$', insert: '\\rho ', tip: 'rho' },
      { label: '$\\sigma$', insert: '\\sigma ', tip: 'sigma (lowercase)' },
      { label: '$\\Sigma$', insert: '\\Sigma ', tip: 'Sigma (uppercase)' },
      { label: '$\\tau$', insert: '\\tau ', tip: 'tau' },
      { label: '$\\phi$', insert: '\\phi ', tip: 'phi' },
      { label: '$\\psi$', insert: '\\psi ', tip: 'psi' },
      { label: '$\\omega$', insert: '\\omega ', tip: 'omega' },
      { label: '$\\Omega$', insert: '\\Omega ', tip: 'Omega' },
    ],
  },
  {
    label: 'Bounds & Notation',
    symbols: [
      { label: '$\\int_a^b$', insert: '\\int_a^b ', tip: 'Definite integral a to b' },
      { label: '$\\int_0^\\infty$', insert: '\\int_0^\\infty ', tip: 'Integral 0 to infinity' },
      { label: '$\\int_{-\\infty}^\\infty$', insert: '\\int_{-\\infty}^{\\infty} ', tip: 'Integral over all reals' },
      { label: '$\\sum_k^n$', insert: '\\sum_{k=0}^{n}', tip: 'Sum k=0 to n' },
      { label: '$\\{ \\}$', insert: '\\{ \\}', tip: 'Set braces' },
      { label: '$\\lfloor x \\rfloor$', insert: '\\lfloor x \\rfloor', tip: 'Floor function' },
      { label: '$\\lceil x \\rceil$', insert: '\\lceil x \\rceil', tip: 'Ceiling function' },
      { label: '$\\|\\mathbf{v}\\|$', insert: '\\|\\mathbf{v}\\|', tip: 'Vector norm' },
      { label: '$\\to$', insert: '\\to ', tip: 'Arrow (approaches)' },
      { label: '$\\Rightarrow$', insert: '\\Rightarrow ', tip: 'Implies' },
      { label: '$\\iff$', insert: '\\iff ', tip: 'If and only if' },
      { label: '$\\forall$', insert: '\\forall ', tip: 'For all' },
      { label: '$\\exists$', insert: '\\exists ', tip: 'There exists' },
      { label: '$\\in$', insert: '\\in ', tip: 'Element of' },
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
        <p>Enter an integral, limit, or ODE — our AI solves it step-by-step with LaTeX formatting.</p>
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

              {/* Symbol grid — rendered via KaTeX directly */}
              <div className="sym-grid">
                {SYMBOL_GROUPS[activeGroup].symbols.map(sym => {
                  let rendered = sym.label;
                  try {
                    // Strip wrapping $ signs and render with KaTeX
                    const tex = sym.label.replace(/^\$+|\$+$/g, '');
                    rendered = katex.renderToString(tex, { throwOnError: false, displayMode: false });
                  } catch (_) {}
                  return (
                    <button
                      key={sym.tip}
                      className="sym-btn"
                      title={sym.tip}
                      onClick={() => insertSymbol(sym.insert)}
                      dangerouslySetInnerHTML={{ __html: rendered }}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* ── Live Rendered Preview (PRIMARY) ── */}
        <div className="solver-preview-area">
          <div className="solver-preview-label">Rendered Expression</div>
          <div className="solver-preview-display">
            {problem.trim() ? (
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
              >
                {`$$ ${problem} $$`}
              </ReactMarkdown>
            ) : (
              <span className="solver-preview-placeholder">Your expression will appear here as rendered math…</span>
            )}
          </div>
        </div>

        {/* ── LaTeX Source Input ── */}
        <div className="solver-source-wrap">
          <div className="solver-preview-label">LaTeX Source</div>
          <textarea
            ref={textareaRef}
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="e.g. \int x^2 \sin(x)\,dx  or  \lim_{x \to 0} \frac{\sin x}{x}"
            className="solver-textarea"
            disabled={loading}
          />
        </div>

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
        .solver-source-wrap {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .solver-preview-area {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .solver-preview-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: var(--color-accent);
          opacity: 0.8;
        }

        .solver-preview-display {
          min-height: 90px;
          background: rgba(212,175,55,0.04);
          border: 1px solid rgba(212,175,55,0.2);
          border-radius: 10px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          overflow-x: auto;
        }

        .solver-preview-placeholder {
          color: var(--color-text-muted);
          font-style: italic;
          font-size: 14px;
        }

        .solver-textarea {
          width: 100%;
          min-height: 72px;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--color-border);
          border-radius: var(--border-radius-md);
          padding: 12px 16px;
          color: var(--color-text-primary);
          font-family: 'Courier New', monospace;
          font-size: 14px;
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
