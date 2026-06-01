import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import { Calculator, Sparkles, Send, Loader2 } from 'lucide-react';
import { GeminiService } from '../services/GeminiService';

interface SolverResult {
  problem: string;
  steps: string[];
  finalAnswer: string;
  concept: string;
}

export const CalculusSolver: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [result, setResult] = useState<SolverResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
        <textarea
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
            <ol className="steps-list">
              {result.steps.map((step, idx) => (
                <li key={idx} className="step-item">
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                    {step}
                  </ReactMarkdown>
                </li>
              ))}
            </ol>
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

        .solver-header {
          padding: 24px;
        }

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
          gap: 16px;
        }

        .solver-textarea {
          width: 100%;
          min-height: 120px;
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
        }

        .solver-textarea:focus {
          border-color: var(--color-accent);
        }

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

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding-left: 20px;
          color: var(--color-text-primary);
        }

        .step-item {
          line-height: 1.6;
          font-size: 15px;
        }

        .step-item p {
          margin: 0;
        }

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

        .concept-header h3 {
          margin: 0;
        }

        .concept-text {
          color: var(--color-text-secondary);
          font-size: 14px;
          line-height: 1.6;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
