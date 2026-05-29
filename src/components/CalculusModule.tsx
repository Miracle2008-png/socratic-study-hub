import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, TrendingUp } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const calculusTheory = `
# Differential Calculus: Limits and Derivatives

Calculus is the mathematical study of continuous change. It provides a framework for modeling systems in which there is change, and a way to deduce the predictions of such models.

## 1. The Concept of a Limit

A limit is the value that a function (or sequence) "approaches" as the input (or index) approaches some value. Limits are essential to calculus and are used to define continuity, derivatives, and integrals.

$$ \\lim_{x \\to c} f(x) = L $$

This reads as "the limit of $f(x)$ as $x$ approaches $c$ equals $L$."

### Formal Definition (Epsilon-Delta)
The formal definition of a limit, formulated by Weierstrass, states that $\\lim_{x \\to c} f(x) = L$ if and only if for every $\\epsilon > 0$ there exists a $\\delta > 0$ such that for all $x$:
$$ 0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon $$

This means we can make $f(x)$ as close to $L$ as we want (within $\\epsilon$) by taking $x$ sufficiently close to $c$ (within $\\delta$).

## 2. Continuity

A function $f(x)$ is continuous at a point $x=c$ if the limit of $f(x)$ as $x$ approaches $c$ exactly equals the function's value at $c$:
$$ \\lim_{x \\to c} f(x) = f(c) $$

Continuity geometrically means the graph of the function has no holes, jumps, or vertical asymptotes. A continuous curve can be drawn without lifting your pen from the paper.

## 3. The Derivative

The derivative of a function $f$ at a point $x$ represents the instantaneous rate of change of the function at that point. It is defined precisely through limits.

### The Difference Quotient
Consider a point $x$ and a small increment $h$. The average rate of change between $x$ and $x+h$ is the slope of the secant line:
$$ \\text{Average Rate of Change} = \\frac{f(x + h) - f(x)}{h} $$

To find the *instantaneous* rate of change, we take the limit of this difference quotient as $h$ approaches zero:
$$ f'(x) = \\lim_{h \\to 0} \\frac{f(x + h) - f(x)}{h} $$

### Geometric Interpretation

Geometrically, the derivative $f'(x)$ is the slope of the **tangent line** to the curve $y = f(x)$ at the point $(x, f(x))$. 

The difference quotient $\\frac{f(x + h) - f(x)}{h}$ represents the slope of a **secant line** passing through two points on the curve: $(x, f(x))$ and $(x+h, f(x+h))$. 

As $h \\to 0$, the two points merge, and the secant line smoothly transforms into the tangent line.

## 4. Basic Differentiation Rules

Using the limit definition, we can prove several rules that make finding derivatives much easier:

- **Power Rule:** $\\frac{d}{dx}[x^n] = n x^{n-1}$
- **Constant Multiple Rule:** $\\frac{d}{dx}[c f(x)] = c f'(x)$
- **Sum Rule:** $\\frac{d}{dx}[f(x) + g(x)] = f'(x) + g'(x)$
- **Product Rule:** $\\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$
- **Chain Rule:** $\\frac{d}{dx}[f(g(x))] = f'(g(x))g'(x)$

## Interactive Limit Visualization

Use the interactive simulator on the right to visualize this process for the function $f(x) = 0.5x^2$. 
Watch as the interval $h$ shrinks to zero, and observe how the secant line (blue) converges into the perfect tangent line (red).
`;

const CalculusModule: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);
  const [h, setH] = useState(4); // Start with a large h
  const [isAnimating, setIsAnimating] = useState(false);

  // The function to plot: f(x) = 0.5 * x^2
  const f = (x: number) => 0.5 * x * x;
  // Derivative f'(x) = x
  const fPrime = (x: number) => x;

  const basePointX = 2;

  const drawGraph = (ctx: CanvasRenderingContext2D, width: number, height: number, currentH: number) => {
    ctx.clearRect(0, 0, width, height);

    // Setup coordinates: Center bottom-ish
    const scaleX = 40;
    const scaleY = 40;
    const offsetX = width / 2;
    const offsetY = height - 100;

    const toScreenX = (x: number) => offsetX + x * scaleX;
    const toScreenY = (y: number) => offsetY - y * scaleY;

    // Draw Axes
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(90, 77, 65, 0.2)';
    ctx.lineWidth = 2;
    // X axis
    ctx.moveTo(0, offsetY);
    ctx.lineTo(width, offsetY);
    // Y axis
    ctx.moveTo(offsetX, 0);
    ctx.lineTo(offsetX, height);
    ctx.stroke();

    // Draw Function f(x) = 0.5x^2
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(90, 77, 65, 0.8)';
    ctx.lineWidth = 3;
    for (let i = -10; i <= 10; i += 0.1) {
      const sx = toScreenX(i);
      const sy = toScreenY(f(i));
      if (i === -10) ctx.moveTo(sx, sy);
      else ctx.lineTo(sx, sy);
    }
    ctx.stroke();

    // The two points
    const p1x = basePointX;
    const p1y = f(p1x);
    const p2x = basePointX + currentH;
    const p2y = f(p2x);

    // Draw Secant Line (Blue)
    const slopeSecant = currentH === 0 ? fPrime(p1x) : (p2y - p1y) / currentH;
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(52, 152, 219, 0.8)'; // Blue
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    
    // Draw line across screen
    const drawLine = (slope: number, px: number, py: number) => {
      const yAtMinX = py + slope * (-10 - px);
      const yAtMaxX = py + slope * (10 - px);
      ctx.moveTo(toScreenX(-10), toScreenY(yAtMinX));
      ctx.lineTo(toScreenX(10), toScreenY(yAtMaxX));
    };
    drawLine(slopeSecant, p1x, p1y);
    ctx.stroke();
    ctx.setLineDash([]);

    // If h is very close to 0, draw Tangent Line (Red)
    if (Math.abs(currentH) < 0.1) {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(231, 76, 60, 0.9)'; // Red
      ctx.lineWidth = 3;
      drawLine(fPrime(p1x), p1x, p1y);
      ctx.stroke();
    }

    // Draw Points
    ctx.fillStyle = '#2c2a29';
    // Point 1
    ctx.beginPath();
    ctx.arc(toScreenX(p1x), toScreenY(p1y), 6, 0, Math.PI * 2);
    ctx.fill();
    // Point 2
    if (Math.abs(currentH) > 0.05) {
      ctx.fillStyle = '#3498db';
      ctx.beginPath();
      ctx.arc(toScreenX(p2x), toScreenY(p2y), 6, 0, Math.PI * 2);
      ctx.fill();
    }

    // Draw Labels
    ctx.font = '14px Inter';
    ctx.fillStyle = '#2c2a29';
    ctx.fillText(`x`, toScreenX(p1x) - 5, toScreenY(0) + 20);
    if (Math.abs(currentH) > 0.5) {
      ctx.fillText(`x + h`, toScreenX(p2x) - 15, toScreenY(0) + 20);
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    drawGraph(ctx, canvas.width, canvas.height, h);
  }, [h]);

  useEffect(() => {
    if (!isAnimating) return;

    let currentH = h;
    let animationId: number;

    const animate = () => {
      currentH *= 0.95; // Decay h towards 0
      
      if (currentH < 0.01) {
        currentH = 0;
        setH(0);
        setIsAnimating(false);
        return;
      }
      
      setH(currentH);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    setAnimationFrameId(animationId);

    return () => cancelAnimationFrame(animationId);
  }, [isAnimating]);

  const toggleAnimation = () => {
    if (h === 0) setH(4); // Reset if already 0
    setIsAnimating(!isAnimating);
  };

  const resetSimulation = () => {
    setIsAnimating(false);
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    setH(4);
  };

  return (
    <TheoryLayout title="Calculus & Analysis" theoryContent={calculusTheory}>
      <div className="simulator-header">
        <div className="header-title">
          <TrendingUp size={20} className="text-gold-gradient" />
          <h3>Secant to Tangent Limit</h3>
        </div>
        <p className="simulator-desc">
          Watch as <i>h</i> &rarr; 0. The blue secant line connecting <i>x</i> and <i>x+h</i> will converge into the red tangent line, perfectly representing the instantaneous derivative at <i>x</i>.
        </p>
      </div>

      <div className="canvas-container">
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={400} 
          className="physics-canvas"
        />
        
        <div className="overlay-stats">
          <div className="stat-pill">
            <span className="stat-label">Interval (h):</span>
            <span className="stat-value">{h.toFixed(3)}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Secant Slope:</span>
            <span className="stat-value">{h === 0 ? '2.000 (Tangent)' : ((f(basePointX + h) - f(basePointX))/h).toFixed(3)}</span>
          </div>
        </div>
      </div>

      <div className="controls-panel luxury-card mt-4">
        <div className="control-group">
          <label>Interval <i>h</i> Value</label>
          <input 
            type="range" 
            min="0" 
            max="6" 
            step="0.01"
            value={h} 
            onChange={(e) => {
              setIsAnimating(false);
              setH(parseFloat(e.target.value));
            }}
            className="slider"
          />
        </div>

        <div className="action-buttons">
          <button className="icon-btn-large" onClick={resetSimulation} title="Reset">
            <RotateCcw size={20} />
          </button>
          <button className="gold-btn play-btn" onClick={toggleAnimation}>
            {isAnimating ? (
              <><Pause size={18} /> <span>Pause Limit</span></>
            ) : (
              <><Play size={18} /> <span>Animate Limit <i>h</i> &rarr; 0</span></>
            )}
          </button>
        </div>
      </div>

      <style>{`
        .simulator-header { padding: 24px 32px; background: var(--color-white); border-bottom: 1px solid rgba(90, 77, 65, 0.1); }
        .header-title { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .header-title h3 { font-family: var(--font-primary); font-size: 20px; font-weight: 500; }
        .simulator-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; }
        
        .canvas-container { position: relative; width: 100%; height: 400px; background: var(--color-base); overflow: hidden; display: flex; justify-content: center; align-items: center;}
        .physics-canvas { max-width: 100%; height: 100%; box-shadow: inset 0 0 20px rgba(0,0,0,0.02); }
        
        .overlay-stats { position: absolute; top: 20px; left: 20px; display: flex; flex-direction: column; gap: 10px; }
        .stat-pill { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(4px); padding: 8px 16px; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.2); display: flex; gap: 8px; font-size: 13px; box-shadow: var(--shadow-sm); }
        .stat-label { color: var(--color-text-secondary); }
        .stat-value { font-family: monospace; font-weight: 600; color: var(--color-text-primary); }
        
        .controls-panel { padding: 32px; margin: 24px; border-radius: var(--border-radius-md); display: flex; flex-direction: column; gap: 24px; }
        
        .control-group { display: flex; flex-direction: column; gap: 12px; }
        .control-group label { font-size: 13px; font-weight: 500; color: var(--color-text-secondary); }
        
        .slider { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(90, 77, 65, 0.1); border-radius: 2px; outline: none; }
        .slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent); cursor: pointer; transition: transform 0.1s; }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.2); }
        
        .action-buttons { display: flex; gap: 16px; justify-content: center; margin-top: 8px; }
        .icon-btn-large { width: 44px; height: 44px; border-radius: 50%; border: 1px solid rgba(90, 77, 65, 0.1); background: var(--color-white); color: var(--color-text-secondary); display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all var(--transition-fast); }
        .icon-btn-large:hover { color: var(--color-text-primary); border-color: rgba(90, 77, 65, 0.3); transform: rotate(-15deg); }
        
        .gold-btn { display: flex; align-items: center; gap: 8px; padding: 0 32px; height: 44px; background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%); color: white; border: none; border-radius: 22px; font-size: 14px; font-weight: 500; cursor: pointer; transition: all var(--transition-fast); box-shadow: var(--shadow-sm); }
        .gold-btn:hover { box-shadow: var(--shadow-glow); transform: translateY(-1px); }
      `}</style>
    </TheoryLayout>
  );
};

export default CalculusModule;
