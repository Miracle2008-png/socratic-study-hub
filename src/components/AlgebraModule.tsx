import React, { useEffect, useRef, useState } from 'react';
import { Network } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const algebraTheory = `
# Linear Algebra: Matrix Transformations

Linear algebra is central to almost all areas of mathematics. It focuses on vector spaces and linear mappings between such spaces.

## Vectors and Matrices

A vector is a mathematical object that has both magnitude and direction. A matrix is a rectangular array of numbers that can represent a linear transformation.

$$ 
\\mathbf{v} = \\begin{bmatrix} x \\\\ y \\end{bmatrix}, \\quad 
A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} 
$$

When a matrix $A$ multiplies a vector $\\mathbf{v}$, it maps $\\mathbf{v}$ to a new vector $A\\mathbf{v}$:

$$ 
A\\mathbf{v} = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} ax + by \\\\ cx + dy \\end{bmatrix} 
$$

## Linear Transformations

Matrices act as functions that transform space. The columns of the matrix dictate where the fundamental basis vectors ($\\hat{i}$ and $\\hat{j}$) will land.

* **Identity:** Leaves space unchanged.
* **Scaling:** Stretches or squashes space.
* **Rotation:** Rotates space around the origin.
* **Shear:** Skews space along an axis.

Use the interactive simulator to apply these transformations to a 2D Cartesian grid and observe how the basis vectors (red and green arrows) map to new locations.
`;

const AlgebraModule: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [matrix, setMatrix] = useState({ a: 1, b: 0, c: 0, d: 1 });

  const applyTransformation = (a: number, b: number, c: number, d: number) => {
    setMatrix({ a, b, c, d });
  };

  const drawGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, m: typeof matrix) => {
    ctx.clearRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const scale = 40;

    const transform = (x: number, y: number) => {
      // Apply matrix transformation:
      // x' = ax + by
      // y' = cx + dy
      // Note: y is inverted on canvas
      const newX = m.a * x + m.b * y;
      const newY = m.c * x + m.d * y;
      return { 
        x: centerX + newX * scale, 
        y: centerY - newY * scale 
      };
    };

    // Draw background un-transformed grid lightly
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(90, 77, 65, 0.05)';
    ctx.lineWidth = 1;
    for (let i = -10; i <= 10; i++) {
      ctx.moveTo(centerX + i * scale, 0);
      ctx.lineTo(centerX + i * scale, height);
      ctx.moveTo(0, centerY - i * scale);
      ctx.lineTo(width, centerY - i * scale);
    }
    ctx.stroke();

    // Draw transformed grid
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(90, 77, 65, 0.2)';
    ctx.lineWidth = 1;
    for (let i = -10; i <= 10; i++) {
      // Vertical lines transformed
      const p1 = transform(i, -10);
      const p2 = transform(i, 10);
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      // Horizontal lines transformed
      const p3 = transform(-10, i);
      const p4 = transform(10, i);
      ctx.moveTo(p3.x, p3.y);
      ctx.lineTo(p4.x, p4.y);
    }
    ctx.stroke();

    // Draw transformed Axes
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(90, 77, 65, 0.8)';
    ctx.lineWidth = 2;
    const xAxisStart = transform(-10, 0);
    const xAxisEnd = transform(10, 0);
    ctx.moveTo(xAxisStart.x, xAxisStart.y);
    ctx.lineTo(xAxisEnd.x, xAxisEnd.y);

    const yAxisStart = transform(0, -10);
    const yAxisEnd = transform(0, 10);
    ctx.moveTo(yAxisStart.x, yAxisStart.y);
    ctx.lineTo(yAxisEnd.x, yAxisEnd.y);
    ctx.stroke();

    // Draw Basis Vectors i-hat (red) and j-hat (green)
    const drawArrow = (fromX: number, fromY: number, toX: number, toY: number, color: string) => {
      const headlen = 10; // length of head in pixels
      const dx = toX - fromX;
      const dy = toY - fromY;
      const angle = Math.atan2(dy, dx);
      
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = 3;
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
      ctx.lineTo(toX, toY);
      ctx.fill();
    };

    const origin = transform(0, 0);
    const iHat = transform(1, 0);
    const jHat = transform(0, 1);

    drawArrow(origin.x, origin.y, iHat.x, iHat.y, '#e74c3c'); // i-hat Red
    drawArrow(origin.x, origin.y, jHat.x, jHat.y, '#2ecc71'); // j-hat Green
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    drawGrid(ctx, canvas.width, canvas.height, matrix);
  }, [matrix]);

  return (
    <TheoryLayout title="Linear Algebra" theoryContent={algebraTheory}>
      <div className="simulator-header">
        <div className="header-title">
          <Network size={20} className="text-gold-gradient" />
          <h3>2D Vector Space Transformations</h3>
        </div>
        <p className="simulator-desc">
          Apply matrices to transform the Cartesian plane. Notice how the fundamental basis vectors {"$\\hat{i}$"} (red) and {"$\\hat{j}$"} (green) dictate the entire space.
        </p>
      </div>

      <div className="canvas-container">
        <canvas ref={canvasRef} width={600} height={400} className="physics-canvas" />
        
        <div className="matrix-display luxury-card">
          <div className="matrix-bracket left-bracket"></div>
          <div className="matrix-grid">
            <span>{matrix.a.toFixed(1)}</span>
            <span>{matrix.b.toFixed(1)}</span>
            <span>{matrix.c.toFixed(1)}</span>
            <span>{matrix.d.toFixed(1)}</span>
          </div>
          <div className="matrix-bracket right-bracket"></div>
        </div>
      </div>

      <div className="controls-panel luxury-card mt-4">
        <div className="presets-grid">
          <button className="gold-btn outline" onClick={() => applyTransformation(1, 0, 0, 1)}>Identity</button>
          <button className="gold-btn outline" onClick={() => applyTransformation(2, 0, 0, 2)}>Scale 2x</button>
          <button className="gold-btn outline" onClick={() => applyTransformation(0, -1, 1, 0)}>Rotate 90°</button>
          <button className="gold-btn outline" onClick={() => applyTransformation(1, 1, 0, 1)}>X-Shear</button>
          <button className="gold-btn outline" onClick={() => applyTransformation(1, 0, 0, -1)}>Reflect Y</button>
          <button className="gold-btn outline" onClick={() => applyTransformation(0.707, -0.707, 0.707, 0.707)}>Rotate 45°</button>
        </div>

        <div className="manual-controls">
          <div className="slider-group">
            <label>a ({"$\\hat{i}_x$"})</label>
            <input type="range" min="-3" max="3" step="0.1" value={matrix.a} onChange={(e) => setMatrix({...matrix, a: parseFloat(e.target.value)})} className="slider" />
          </div>
          <div className="slider-group">
            <label>b ({"$\\hat{j}_x$"})</label>
            <input type="range" min="-3" max="3" step="0.1" value={matrix.b} onChange={(e) => setMatrix({...matrix, b: parseFloat(e.target.value)})} className="slider" />
          </div>
          <div className="slider-group">
            <label>c ({"$\\hat{i}_y$"})</label>
            <input type="range" min="-3" max="3" step="0.1" value={matrix.c} onChange={(e) => setMatrix({...matrix, c: parseFloat(e.target.value)})} className="slider" />
          </div>
          <div className="slider-group">
            <label>d ({"$\\hat{j}_y$"})</label>
            <input type="range" min="-3" max="3" step="0.1" value={matrix.d} onChange={(e) => setMatrix({...matrix, d: parseFloat(e.target.value)})} className="slider" />
          </div>
        </div>
      </div>

      <style>{`
        .simulator-header { padding: 24px 32px; background: var(--color-white); border-bottom: 1px solid rgba(90, 77, 65, 0.1); }
        .header-title { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .header-title h3 { font-family: var(--font-primary); font-size: 20px; font-weight: 500; }
        .simulator-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; }
        
        .canvas-container { position: relative; width: 100%; height: 400px; background: var(--color-base); overflow: hidden; display: flex; justify-content: center; align-items: center;}
        .physics-canvas { max-width: 100%; height: 100%; box-shadow: inset 0 0 20px rgba(0,0,0,0.02); }
        
        .matrix-display { position: absolute; top: 20px; left: 20px; background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(4px); padding: 12px 16px; display: flex; align-items: stretch; gap: 8px; font-family: 'Lora', serif; font-size: 20px; font-weight: 500; color: var(--color-text-primary); }
        .matrix-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 24px; text-align: center; }
        .matrix-bracket { width: 8px; border: 2px solid var(--color-text-primary); }
        .left-bracket { border-right: none; }
        .right-bracket { border-left: none; }
        
        .controls-panel { padding: 32px; margin: 24px; border-radius: var(--border-radius-md); display: flex; flex-direction: column; gap: 24px; }
        
        .presets-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        
        .manual-controls { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 16px; padding-top: 24px; border-top: 1px solid rgba(90, 77, 65, 0.1); }
        .slider-group { display: flex; flex-direction: column; gap: 8px; }
        .slider-group label { font-size: 13px; font-weight: 500; color: var(--color-text-secondary); }
        
        .slider { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(90, 77, 65, 0.1); border-radius: 2px; outline: none; }
        .slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent); cursor: pointer; transition: transform 0.1s; }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.2); }

        .gold-btn { padding: 10px 16px; border-radius: 6px; font-size: 13px; font-weight: 500; cursor: pointer; transition: all var(--transition-fast); }
        .gold-btn.outline { background: transparent; border: 1px solid var(--color-accent); color: var(--color-accent); }
        .gold-btn.outline:hover { background: var(--color-accent); color: white; }
      `}</style>
    </TheoryLayout>
  );
};

export default AlgebraModule;
