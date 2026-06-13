import React, { useEffect, useRef, useState } from 'react';
import katex from 'katex';
import { Play, RotateCcw, CheckCircle2, Search } from 'lucide-react';
import nerdamer from 'nerdamer';
import 'nerdamer/Algebra.js';
import 'nerdamer/Calculus.js';
import 'nerdamer/Solve.js';
import TheoryLayout from './TheoryLayout';

const mathTheory = `
# Advanced Calculus & Analysis

Calculus is the mathematical study of continuous change. It has two major branches, differential calculus and integral calculus; the former concerns instantaneous rates of change, and the slopes of curves, while the latter concerns accumulation of quantities, and areas under or between curves.

## 1. Differential Calculus
The derivative of a function of a real variable measures the sensitivity to change of the function value (output value) with respect to a change in its argument (input value).

The derivative of a function $f$ at $x$ is defined as the limit of the difference quotient as $h$ approaches zero:
$f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h}$

*In the Interactive Solver, you can compute derivatives using the syntax: \`diff(f(x), x)\`*

## 2. Integral Calculus
Integration is the process of finding the anti-derivative. The definite integral of a function $f(x)$ from $a$ to $b$ gives the net signed area bounded by the graph of the function, the $x$-axis, and the vertical lines $x = a$ and $x = b$.

$\\int_{a}^{b} f(x) \\, dx = F(b) - F(a)$

Where $F$ is an antiderivative of $f$ ($F' = f$). This is the Fundamental Theorem of Calculus.

*Try evaluating an integral in the solver using the syntax: \`integrate(x*sin(x), x)\`*

## 3. Function Graphing
On the right side of the module, the Interactive Solver is equipped with a 2D Cartesian graphing canvas. As you type algebraic expressions like \`sin(x)*x\`, the engine will parse the symbolic string into a native javascript function and plot it from $x=-10$ to $x=10$.
`;

const MathModule: React.FC = () => {
  const [inputExpression, setInputExpression] = useState('x * sin(x)');
  const [steps, setSteps] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(-1);
  const [isSolving, setIsSolving] = useState(false);
  const containerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const generateSteps = (expression: string) => {
    try {
      const inputTex = nerdamer(expression).toTeX();
      const outputTex = nerdamer(expression).evaluate().toTeX();
      
      let newSteps = [
        "\\text{Problem: Evaluate }",
        inputTex
      ];

      if (expression.includes('integrate')) {
        newSteps.push("\\text{Applying analytical integration techniques...}");
        newSteps.push("\\text{Simplifying the anti-derivative...}");
      } else if (expression.includes('diff')) {
        newSteps.push("\\text{Applying differentiation rules...}");
      } else if (expression.includes('solve')) {
        newSteps.push("\\text{Isolating variables...}");
      } else {
        newSteps.push("\\text{Evaluating expression algebraically...}");
      }
      
      newSteps.push(`= ${outputTex}`);
      return newSteps;
    } catch (err) {
      return [
        "\\text{Error: Could not parse expression.}",
        "\\text{Use syntax: } integrate(x^2, x) \\text{ or } sin(x)"
      ];
    }
  };

  useEffect(() => {
    steps.forEach((step, index) => {
      const el = containerRefs.current[index];
      if (el) {
        katex.render(step, el, {
          displayMode: true,
          throwOnError: false,
        });
      }
    });
  }, [steps, currentStep]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSolving && currentStep < steps.length - 1) {
      timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1000); // Speed up for better UX
    } else if (currentStep >= steps.length - 1) {
      setIsSolving(false);
    }
    return () => clearTimeout(timer);
  }, [isSolving, currentStep, steps]);

  // Real 2D Graphing Logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 600;
    const height = canvas.height = 300;
    ctx.clearRect(0, 0, width, height);

    const margin = 20;
    const graphWidth = width - margin * 2;
    const graphHeight = height - margin * 2;
    
    // Graph bounds
    const xMin = -10;
    const xMax = 10;
    const yMin = -5;
    const yMax = 5;

    const mapX = (x: number) => margin + ((x - xMin) / (xMax - xMin)) * graphWidth;
    const mapY = (y: number) => height - margin - ((y - yMin) / (yMax - yMin)) * graphHeight;

    // Draw Axes & Grid
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(90, 77, 65, 0.1)';
    ctx.lineWidth = 1;
    // vertical grid lines
    for(let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
      ctx.moveTo(mapX(x), margin); ctx.lineTo(mapX(x), height - margin);
    }
    // horizontal grid lines
    for(let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
      ctx.moveTo(margin, mapY(y)); ctx.lineTo(width - margin, mapY(y));
    }
    ctx.stroke();

    // Main Axes
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(90, 77, 65, 0.4)';
    ctx.lineWidth = 2;
    ctx.moveTo(mapX(0), margin); ctx.lineTo(mapX(0), height - margin);
    ctx.moveTo(margin, mapY(0)); ctx.lineTo(width - margin, mapY(0));
    ctx.stroke();

    try {
      // Extract inner function if it's wrapped in integrate or diff
      let plotExp = inputExpression;
      if (plotExp.startsWith('integrate(')) {
        plotExp = plotExp.substring(10, plotExp.lastIndexOf(','));
      } else if (plotExp.startsWith('diff(')) {
        plotExp = plotExp.substring(5, plotExp.lastIndexOf(','));
      }

      // Build native JS function using Nerdamer
      const f = nerdamer(plotExp).buildFunction(['x']);

      ctx.beginPath();
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 2;

      let first = true;
      const points = 200;
      for (let i = 0; i <= points; i++) {
        const x = xMin + (i / points) * (xMax - xMin);
        try {
          const y = Number(f(x));
          if (isNaN(y) || !isFinite(y)) {
            first = true;
            continue;
          }
          
          const px = mapX(x);
          const py = mapY(y);

          // Prevent drawing huge lines across asymptotes
          if (py < -1000 || py > height + 1000) {
             first = true;
             continue;
          }

          if (first) {
            ctx.moveTo(px, py);
            first = false;
          } else {
            ctx.lineTo(px, py);
          }
        } catch(e) {
          first = true;
        }
      }
      ctx.stroke();
    } catch(e) {
      // Invalid syntax for plotting, just draw axes
    }
  }, [inputExpression]);

  const handleStartSolving = () => {
    if (currentStep === -1) {
      const generated = generateSteps(inputExpression);
      setSteps(generated);
      setCurrentStep(0);
    }
    setIsSolving(true);
  };

  const handleReset = () => {
    setIsSolving(false);
    setCurrentStep(-1);
    setSteps([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputExpression(e.target.value);
    handleReset();
  };

  return (
    <TheoryLayout title="Calculus & Analysis" theoryContent={mathTheory}>
      <div className="math-module">
        <div className="header-input-container luxury-card">
          <div className="search-bar">
            <Search size={18} color="var(--color-text-secondary)" />
            <input 
              type="text" 
              value={inputExpression}
              onChange={handleInputChange}
              placeholder="e.g. integrate(x*sin(x), x)"
            />
          </div>
        </div>

        <div className="solver-container luxury-card">
          <div className="paper-texture">
            {currentStep === -1 && !isSolving && (
              <div className="empty-state">
                <span className="equation-preview">Ready for Synthesis</span>
                <p>Type a mathematical expression above to graph it and derive steps.</p>
              </div>
            )}

            <div className="steps-area">
              {steps.map((_, index) => (
                <div 
                  key={index} 
                  className={`step-wrapper ${index <= currentStep ? 'visible' : 'hidden'}`}
                >
                  <div className="step-indicator">Step {index + 1}</div>
                  <div 
                    ref={(el) => { containerRefs.current[index] = el; }} 
                    className={`katex-container ${index === currentStep && isSolving ? 'writing-animation' : ''}`}
                  ></div>
                </div>
              ))}
            </div>

            {currentStep >= steps.length - 1 && steps.length > 0 && !steps[0].includes('Error') && (
              <div className="completion-message">
                <CheckCircle2 size={20} className="text-gold-gradient" />
                <span>Derivation Complete</span>
              </div>
            )}
          </div>

          <div className="simulation-panel">
            <h4 className="panel-title">Interactive 2D Graph</h4>
            <p className="panel-subtitle">Cartesian plot of f(x) over [-10, 10]</p>
            <div className="canvas-wrapper">
              <canvas ref={canvasRef} className="math-graph-canvas"></canvas>
            </div>
          </div>
          
          <div className="controls">
            <button 
              className="gold-btn" 
              onClick={handleStartSolving}
              disabled={isSolving || (currentStep >= steps.length - 1 && steps.length > 0)}
            >
              <Play size={16} />
              <span>{currentStep === -1 ? 'Synthesize Solution' : 'Continue Derivation'}</span>
            </button>
            
            {(currentStep > -1) && (
              <button className="reset-btn" onClick={handleReset} title="Reset">
                <RotateCcw size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .math-module {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }

        /* ── Input bar ── */
        .header-input-container {
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-input-container .search-bar {
          flex: 1;
          margin-bottom: 0;
          background: rgba(0,0,0,0.2);
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 12px;
          transition: border-color 0.2s;
        }
        .header-input-container .search-bar:focus-within {
          border-color: rgba(212,175,55,0.6);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.08);
        }
        .header-input-container .search-bar input {
          font-family: 'Courier New', monospace;
          font-size: 15px;
          letter-spacing: 0.02em;
        }

        /* ── Main solver card ── */
        .solver-container {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        /* ── Step display area ── */
        .paper-texture {
          background: rgba(255,255,255,0.03);
          border-radius: 12px;
          border: 1px solid rgba(212,175,55,0.12);
          padding: 28px 32px;
          position: relative;
          min-height: 180px;
          flex: 1;
        }

        /* ── Graph panel ── */
        .simulation-panel {
          background: rgba(0,0,0,0.25);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid rgba(212, 175, 55, 0.15);
        }

        .panel-title {
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 3px;
          color: var(--color-text-primary);
        }
        .panel-subtitle {
          font-size: 12px;
          color: var(--color-text-muted);
          margin-bottom: 14px;
        }

        .canvas-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0d0d14;
          border-radius: 10px;
          padding: 8px;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .math-graph-canvas {
          width: 100%;
          height: auto;
          max-height: 220px;
          border-radius: 6px;
        }

        /* ── Empty / ready state ── */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 140px;
          color: var(--color-text-secondary);
          opacity: 0.5;
          gap: 10px;
        }

        .equation-preview {
          font-family: 'Times New Roman', serif;
          font-size: 26px;
          font-style: italic;
        }

        /* ── Steps ── */
        .steps-area { display: flex; flex-direction: column; gap: 20px; }

        .step-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .step-wrapper.visible { opacity: 1; }
        .step-wrapper.hidden { display: none; }

        .step-indicator {
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-accent);
          margin-bottom: 6px;
          align-self: flex-start;
        }

        .katex-container {
          padding: 14px 28px;
          background: rgba(212,175,55,0.04);
          border: 1px solid rgba(212,175,55,0.1);
          border-radius: 8px;
          width: 100%;
          display: flex;
          justify-content: center;
          overflow-x: auto;
        }

        .writing-animation { position: relative; }
        .writing-animation::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: rgba(0,0,0,0.7);
          animation: inkReveal 1.0s cubic-bezier(0.25, 1, 0.5, 1) forwards;
          z-index: 10;
          border-radius: 8px;
        }

        @keyframes inkReveal { 0% { left: 0; } 100% { left: 100%; } }

        .completion-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 28px;
          padding-top: 20px;
          border-top: 1px solid rgba(212, 175, 55, 0.2);
          animation: fadeIn 0.4s ease;
        }
        .completion-message span {
          font-family: var(--font-serif);
          font-size: 17px;
          color: var(--color-text-secondary);
        }

        .controls {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
        }

        .reset-btn {
          padding: 11px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .reset-btn:hover {
          background: rgba(255,255,255,0.1);
          color: var(--color-text-primary);
        }

        .gold-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 28px;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          color: #000;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.4px;
          box-shadow: 0 4px 16px rgba(212,175,55,0.25);
          transition: all 0.15s;
        }
        .gold-btn:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(212,175,55,0.35);
        }
        .gold-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
          background: var(--color-text-secondary);
          box-shadow: none;
        }
      `}</style>
    </TheoryLayout>
  );
};

export default MathModule;
