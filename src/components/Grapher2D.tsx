import React, { useRef, useEffect, useState, useCallback } from 'react';
import { evaluate, parse } from 'mathjs';
import { Plus, Trash2, ZoomIn, ZoomOut, Maximize2, RefreshCw, Download, Eye, EyeOff } from 'lucide-react';

interface PlotFunction {
  id: string;
  expr: string;
  color: string;
  visible: boolean;
  error: string | null;
}

interface ViewBox {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
}

const PALETTE = [
  '#6366f1', '#ec4899', '#10b981', '#f59e0b',
  '#0ea5e9', '#ef4444', '#a855f7', '#14b8a6',
];

const DEFAULT_VIEW: ViewBox = { xMin: -10, xMax: 10, yMin: -8, yMax: 8 };

const PRESET_FUNCTIONS = [
  { label: 'Sine', expr: 'sin(x)' },
  { label: 'Cosine', expr: 'cos(x)' },
  { label: 'Quadratic', expr: 'x^2' },
  { label: 'Cubic', expr: 'x^3 - 3*x' },
  { label: 'Natural Log', expr: 'log(x)' },
  { label: 'Exponential', expr: 'e^x' },
  { label: 'Tangent', expr: 'tan(x)' },
  { label: 'Absolute', expr: 'abs(x)' },
  { label: 'Gaussian', expr: 'e^(-x^2)' },
  { label: 'Sinc', expr: 'sin(x)/x' },
  { label: 'Square Root', expr: 'sqrt(abs(x))' },
  { label: '1/x', expr: '1/x' },
];

function evalExpr(expr: string, x: number): number {
  try {
    const result = evaluate(expr, { x, e: Math.E, pi: Math.PI });
    if (typeof result !== 'number' || !isFinite(result)) return NaN;
    return result;
  } catch {
    return NaN;
  }
}

function canvasToWorld(cx: number, cy: number, canvas: HTMLCanvasElement, view: ViewBox) {
  const wx = view.xMin + (cx / canvas.width) * (view.xMax - view.xMin);
  const wy = view.yMax - (cy / canvas.height) * (view.yMax - view.yMin);
  return { wx, wy };
}

function worldToCanvas(wx: number, wy: number, canvas: HTMLCanvasElement, view: ViewBox) {
  const cx = ((wx - view.xMin) / (view.xMax - view.xMin)) * canvas.width;
  const cy = ((view.yMax - wy) / (view.yMax - view.yMin)) * canvas.height;
  return { cx, cy };
}

const Grapher2D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [functions, setFunctions] = useState<PlotFunction[]>([
    { id: '1', expr: 'sin(x)', color: PALETTE[0], visible: true, error: null },
    { id: '2', expr: 'x^2 / 4', color: PALETTE[1], visible: true, error: null },
  ]);
  const [view, setView] = useState<ViewBox>(DEFAULT_VIEW);
  const [dragging, setDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [newExpr, setNewExpr] = useState('');
  const [crosshair, setCrosshair] = useState<{ x: number; y: number } | null>(null);

  // ── Draw ──────────────────────────────────────────────
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    const isDark = document.documentElement.dataset.theme === 'dark';
    const bg = isDark ? '#0e0c08' : '#faf9f6';
    const gridColor = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
    const gridMajor = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    const axisColor = isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.3)';
    const textColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    const { xMin, xMax, yMin, yMax } = view;
    const xRange = xMax - xMin;
    const yRange = yMax - yMin;

    // Nice grid step
    const rawStep = xRange / 10;
    const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
    const steps = [1, 2, 2.5, 5, 10].map(s => s * mag);
    const step = steps.find(s => xRange / s >= 6 && xRange / s <= 14) ?? steps[steps.length - 1];

    const toCanvasX = (wx: number) => ((wx - xMin) / xRange) * W;
    const toCanvasY = (wy: number) => ((yMax - wy) / yRange) * H;

    // Grid lines
    const xStart = Math.ceil(xMin / step) * step;
    for (let gx = xStart; gx <= xMax; gx += step) {
      const cx = toCanvasX(gx);
      const isMajor = Math.abs(Math.round(gx / step) % 5) === 0;
      ctx.strokeStyle = isMajor ? gridMajor : gridColor;
      ctx.lineWidth = isMajor ? 1 : 0.5;
      ctx.beginPath();
      ctx.moveTo(cx, 0);
      ctx.lineTo(cx, H);
      ctx.stroke();
    }

    const yStep = step * (yRange / xRange);
    const yStart = Math.ceil(yMin / yStep) * yStep;
    for (let gy = yStart; gy <= yMax; gy += yStep) {
      const cy = toCanvasY(gy);
      const isMajor = Math.abs(Math.round(gy / yStep) % 5) === 0;
      ctx.strokeStyle = isMajor ? gridMajor : gridColor;
      ctx.lineWidth = isMajor ? 1 : 0.5;
      ctx.beginPath();
      ctx.moveTo(0, cy);
      ctx.lineTo(W, cy);
      ctx.stroke();
    }

    // Axes
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 1.5;
    const ox = toCanvasX(0);
    const oy = toCanvasY(0);
    if (ox >= 0 && ox <= W) {
      ctx.beginPath(); ctx.moveTo(ox, 0); ctx.lineTo(ox, H); ctx.stroke();
    }
    if (oy >= 0 && oy <= H) {
      ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(W, oy); ctx.stroke();
    }

    // Axis labels
    ctx.fillStyle = textColor;
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    for (let gx = xStart; gx <= xMax; gx += step) {
      if (Math.abs(gx) < step * 0.01) continue;
      const cx = toCanvasX(gx);
      const labelY = Math.min(Math.max(oy + 14, 14), H - 6);
      ctx.fillText(
        Number(gx.toPrecision(4)).toString(),
        cx, labelY
      );
    }
    ctx.textAlign = 'right';
    for (let gy = yStart; gy <= yMax; gy += yStep) {
      if (Math.abs(gy) < yStep * 0.01) continue;
      const cy = toCanvasY(gy);
      const labelX = Math.min(Math.max(ox - 6, 6), W - 6);
      ctx.fillText(Number(gy.toPrecision(4)).toString(), labelX, cy + 4);
    }

    // Plot functions
    const SAMPLES = W * 2;
    functions.forEach(fn => {
      if (!fn.visible || fn.error) return;
      ctx.strokeStyle = fn.color;
      ctx.lineWidth = 2.5;
      ctx.lineJoin = 'round';
      ctx.shadowColor = fn.color;
      ctx.shadowBlur = 4;

      ctx.beginPath();
      let penDown = false;
      let prevY = NaN;

      for (let i = 0; i <= SAMPLES; i++) {
        const wx = xMin + (i / SAMPLES) * xRange;
        const wy = evalExpr(fn.expr, wx);
        const cx = (i / SAMPLES) * W;
        const cy = toCanvasY(wy);

        const inBounds = isFinite(wy) && cy >= -H * 2 && cy <= H * 3;
        // Break line on discontinuity (e.g. tan asymptotes)
        const bigJump = Math.abs(cy - prevY) > H * 0.6;

        if (inBounds && !bigJump) {
          if (!penDown) { ctx.moveTo(cx, cy); penDown = true; }
          else ctx.lineTo(cx, cy);
        } else {
          penDown = false;
        }
        prevY = cy;
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    });

    // Crosshair
    if (crosshair) {
      const { x: wx, y: wy } = crosshair;
      const cx = toCanvasX(wx);
      const cy = toCanvasY(wy);
      ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
      ctx.setLineDash([]);

      // Dot
      ctx.fillStyle = '#D4AF37';
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [functions, view, crosshair]);

  useEffect(() => { draw(); }, [draw]);

  // Resize observer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ro = new ResizeObserver(() => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      draw();
    });
    ro.observe(canvas);
    // Size immediately so first draw has real dimensions
    if (canvas.offsetWidth > 0 && canvas.offsetHeight > 0) {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    }
    return () => ro.disconnect();
  }, [draw]);

  // ── Interactions ──────────────────────────────────────
  const handleWheel = useCallback((e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    const factor = e.deltaY > 0 ? 1.12 : 0.89;
    setView(v => {
      const xRange = v.xMax - v.xMin;
      const yRange = v.yMax - v.yMin;
      const pivotX = v.xMin + mx * xRange;
      const pivotY = v.yMax - my * yRange;
      return {
        xMin: pivotX - mx * xRange * factor,
        xMax: pivotX + (1 - mx) * xRange * factor,
        yMin: pivotY - (1 - my) * yRange * factor,
        yMax: pivotY + my * yRange * factor,
      };
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;

    setView(v => {
      const wx = v.xMin + mx * (v.xMax - v.xMin);
      const wy = v.yMax - my * (v.yMax - v.yMin);
      setCursor({ x: wx, y: wy, visible: true });
      return v;
    });

    if (!dragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;
    setLastMouse({ x: e.clientX, y: e.clientY });

    setView(v => {
      const xRange = v.xMax - v.xMin;
      const yRange = v.yMax - v.yMin;
      const wx = -dx / rect.width * xRange;
      const wy = dy / rect.height * yRange;
      return { xMin: v.xMin + wx, xMax: v.xMax + wx, yMin: v.yMin + wy, yMax: v.yMax + wy };
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width;
    const my = (e.clientY - rect.top) / rect.height;
    setView(v => {
      const wx = v.xMin + mx * (v.xMax - v.xMin);
      const wy = v.yMax - my * (v.yMax - v.yMin);
      setCrosshair(c => (c && Math.abs(c.x - wx) < 0.1 && Math.abs(c.y - wy) < 0.1) ? null : { x: wx, y: wy });
      return v;
    });
  };

  // ── Function management ───────────────────────────────
  const validateExpr = (expr: string): string | null => {
    try { parse(expr); return null; } catch (err: any) { return err.message; }
  };

  const addFunction = (expr?: string) => {
    const e = expr ?? newExpr.trim();
    const error = e ? validateExpr(e) : null;
    const id = Date.now().toString();
    const color = PALETTE[functions.length % PALETTE.length];
    setFunctions(fs => [...fs, { id, expr: e, color, visible: true, error }]);
    setNewExpr('');
  };

  const updateExpr = (id: string, expr: string) => {
    const error = validateExpr(expr);
    setFunctions(fs => fs.map(f => f.id === id ? { ...f, expr, error } : f));
  };

  const toggleVisible = (id: string) =>
    setFunctions(fs => fs.map(f => f.id === id ? { ...f, visible: !f.visible } : f));

  const removeFunction = (id: string) =>
    setFunctions(fs => fs.filter(f => f.id !== id));

  const zoom = (factor: number) => {
    setView(v => {
      const cx = (v.xMin + v.xMax) / 2;
      const cy = (v.yMin + v.yMax) / 2;
      const hw = (v.xMax - v.xMin) / 2 * factor;
      const hh = (v.yMax - v.yMin) / 2 * factor;
      return { xMin: cx - hw, xMax: cx + hw, yMin: cy - hh, yMax: cy + hh };
    });
  };

  const downloadPNG = () => {
    const canvas = canvasRef.current!;
    const link = document.createElement('a');
    link.download = 'graph.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  return (
    <div className="grapher-root anim-fade">
      <div className="grapher-header">
        <div>
          <h2 className="grapher-title">2D Function Grapher</h2>
          <p className="grapher-sub">Plot any mathematical expression · scroll to zoom · drag to pan · click to pin crosshair</p>
        </div>
      </div>

      <div className="grapher-layout">
        {/* ── Canvas ── */}
        <div className="grapher-canvas-wrap">
          <canvas
            ref={canvasRef}
            className="grapher-canvas"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => { setDragging(false); setCursor(c => ({ ...c, visible: false })); }}
            onClick={handleClick}
            style={{ cursor: dragging ? 'grabbing' : 'crosshair' }}
          />

          {/* Cursor coords */}
          {cursor.visible && (
            <div className="grapher-coords">
              x = {cursor.x.toFixed(3)},  y = {cursor.y.toFixed(3)}
            </div>
          )}

          {/* Crosshair info */}
          {crosshair && (
            <div className="grapher-pin">
              ({crosshair.x.toFixed(4)}, {crosshair.y.toFixed(4)})
            </div>
          )}

          {/* Zoom controls */}
          <div className="grapher-zoom-btns">
            <button className="gz-btn" onClick={() => zoom(0.75)} title="Zoom in"><ZoomIn size={16} /></button>
            <button className="gz-btn" onClick={() => zoom(1.33)} title="Zoom out"><ZoomOut size={16} /></button>
            <button className="gz-btn" onClick={() => setView(DEFAULT_VIEW)} title="Reset view"><RefreshCw size={16} /></button>
            <button className="gz-btn" onClick={downloadPNG} title="Download PNG"><Download size={16} /></button>
          </div>

          {/* Axis labels */}
          <div className="grapher-axis-info">
            <span>x: [{view.xMin.toFixed(1)}, {view.xMax.toFixed(1)}]</span>
            <span>y: [{view.yMin.toFixed(1)}, {view.yMax.toFixed(1)}]</span>
          </div>
        </div>

        {/* ── Controls Panel ── */}
        <div className="grapher-panel">

          {/* Function list */}
          <div className="gp-section">
            <div className="gp-section-title">Functions</div>
            <div className="gp-fn-list">
              {functions.map(fn => (
                <div key={fn.id} className={`gp-fn-row ${fn.error ? 'has-error' : ''}`}>
                  <div className="gp-fn-top">
                    <div className="gp-color-dot" style={{ background: fn.color }} />
                    <span className="gp-fn-label">f(x) =</span>
                    <input
                      className="gp-fn-input"
                      value={fn.expr}
                      onChange={e => updateExpr(fn.id, e.target.value)}
                      spellCheck={false}
                    />
                    <button className="gp-icon-btn" onClick={() => toggleVisible(fn.id)} title="Toggle">
                      {fn.visible ? <Eye size={14} /> : <EyeOff size={14} />}
                    </button>
                    <button className="gp-icon-btn danger" onClick={() => removeFunction(fn.id)} title="Remove">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  {fn.error && <div className="gp-fn-error">{fn.error}</div>}
                </div>
              ))}
            </div>

            {/* Add function */}
            <div className="gp-add-row">
              <input
                className="gp-fn-input"
                placeholder="e.g. sin(x) * cos(2*x)"
                value={newExpr}
                onChange={e => setNewExpr(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addFunction()}
                spellCheck={false}
              />
              <button className="gp-add-btn" onClick={() => addFunction()}>
                <Plus size={16} /> Add
              </button>
            </div>
          </div>

          {/* Presets */}
          <div className="gp-section">
            <div className="gp-section-title">Quick Presets</div>
            <div className="gp-presets">
              {PRESET_FUNCTIONS.map(p => (
                <button
                  key={p.expr}
                  className="gp-preset-btn"
                  onClick={() => addFunction(p.expr)}
                  title={p.expr}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* View controls */}
          <div className="gp-section">
            <div className="gp-section-title">View Range</div>
            <div className="gp-range-grid">
              {(['xMin','xMax','yMin','yMax'] as const).map(key => (
                <div key={key} className="gp-range-field">
                  <label>{key}</label>
                  <input
                    type="number"
                    value={view[key]}
                    onChange={e => setView(v => ({ ...v, [key]: parseFloat(e.target.value) || v[key] }))}
                    className="gp-range-input"
                  />
                </div>
              ))}
            </div>
            <button className="gp-reset-btn" onClick={() => setView(DEFAULT_VIEW)}>
              <RefreshCw size={13} /> Reset View
            </button>
          </div>

          {/* Math reference */}
          <div className="gp-section">
            <div className="gp-section-title">Math Reference</div>
            <div className="gp-ref">
              <div className="gp-ref-row"><code>sin(x)</code><code>cos(x)</code><code>tan(x)</code></div>
              <div className="gp-ref-row"><code>sqrt(x)</code><code>abs(x)</code><code>log(x)</code></div>
              <div className="gp-ref-row"><code>e^x</code><code>x^2</code><code>pi</code></div>
              <div className="gp-ref-row"><code>floor(x)</code><code>ceil(x)</code><code>sign(x)</code></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .grapher-root {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: calc(100vh - 180px);
          min-height: 600px;
        }

        .grapher-header { }
        .grapher-title {
          font-family: var(--font-serif);
          font-size: 26px;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: 4px;
        }
        .grapher-sub {
          font-size: 13px;
          color: var(--color-text-muted);
          font-family: var(--font-display);
        }

        .grapher-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 20px;
          flex: 1;
          min-height: 0;
        }

        @media (max-width: 900px) {
          .grapher-layout { grid-template-columns: 1fr; }
          .grapher-root { height: auto; }
        }

        /* ── Canvas ── */
        .grapher-canvas-wrap {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          background: var(--color-surface);
          height: 100%;
          min-height: 460px;
        }

        .grapher-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          touch-action: none;
          user-select: none;
        }

        .grapher-coords {
          position: absolute;
          bottom: 44px;
          left: 12px;
          background: rgba(0,0,0,0.55);
          color: rgba(255,255,255,0.9);
          font-family: 'Courier New', monospace;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 6px;
          pointer-events: none;
          backdrop-filter: blur(4px);
        }

        .grapher-pin {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(212,175,55,0.15);
          border: 1px solid rgba(212,175,55,0.4);
          color: var(--color-accent);
          font-family: 'Courier New', monospace;
          font-size: 12px;
          padding: 5px 12px;
          border-radius: 8px;
          pointer-events: none;
          backdrop-filter: blur(8px);
        }

        .grapher-zoom-btns {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .gz-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--color-glass);
          border: 1px solid var(--color-border);
          color: var(--color-text-secondary);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
          backdrop-filter: blur(8px);
        }
        .gz-btn:hover {
          background: var(--color-surface);
          color: var(--color-accent);
          border-color: rgba(212,175,55,0.3);
          transform: scale(1.05);
        }

        .grapher-axis-info {
          position: absolute;
          bottom: 10px;
          right: 12px;
          display: flex;
          gap: 12px;
          font-size: 11px;
          color: var(--color-text-muted);
          font-family: var(--font-display);
          pointer-events: none;
        }

        /* ── Panel ── */
        .grapher-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
          padding-right: 2px;
        }

        .gp-section {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 14px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        [data-theme="dark"] .gp-section {
          background: linear-gradient(135deg, rgba(28,25,18,0.85), rgba(18,16,10,0.9));
          border-color: rgba(212,175,55,0.1);
        }

        .gp-section-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--color-accent);
          font-family: var(--font-display);
        }

        .gp-fn-list { display: flex; flex-direction: column; gap: 8px; }

        .gp-fn-row {
          border: 1px solid var(--color-border);
          border-radius: 10px;
          padding: 10px;
          background: var(--color-base-alt);
          transition: border-color var(--transition-fast);
        }
        .gp-fn-row.has-error { border-color: #ef4444; }

        .gp-fn-top {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gp-color-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 6px currentColor;
        }

        .gp-fn-label {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: var(--color-text-muted);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .gp-fn-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          color: var(--color-text-primary);
          min-width: 0;
        }

        .gp-fn-error {
          font-size: 11px;
          color: #ef4444;
          margin-top: 4px;
          font-family: var(--font-display);
        }

        .gp-icon-btn {
          display: flex; align-items: center; justify-content: center;
          width: 28px; height: 28px;
          border-radius: 7px;
          border: 1px solid transparent;
          background: transparent;
          color: var(--color-text-muted);
          cursor: pointer;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }
        .gp-icon-btn:hover { background: var(--color-base); color: var(--color-text-primary); border-color: var(--color-border); }
        .gp-icon-btn.danger:hover { color: #ef4444; border-color: rgba(239,68,68,0.3); background: rgba(239,68,68,0.05); }

        .gp-add-row {
          display: flex;
          gap: 8px;
          align-items: center;
        }

        .gp-add-btn {
          display: flex; align-items: center; gap: 5px;
          padding: 8px 14px;
          border-radius: 9px;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          color: white;
          font-size: 13px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          font-family: var(--font-display);
          transition: all var(--transition-fast);
          box-shadow: 0 3px 10px rgba(201,168,76,0.3);
        }
        .gp-add-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 18px rgba(201,168,76,0.4); }

        /* Presets */
        .gp-presets {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .gp-preset-btn {
          padding: 5px 10px;
          border-radius: 7px;
          border: 1px solid var(--color-border);
          background: var(--color-base-alt);
          color: var(--color-text-secondary);
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-display);
          transition: all var(--transition-fast);
        }
        .gp-preset-btn:hover {
          background: rgba(212,175,55,0.1);
          color: var(--color-accent);
          border-color: rgba(212,175,55,0.3);
        }

        /* Range */
        .gp-range-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .gp-range-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .gp-range-field label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-muted);
          font-family: var(--font-display);
        }
        .gp-range-input {
          width: 100%;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid var(--color-border);
          background: var(--color-base-alt);
          color: var(--color-text-primary);
          font-size: 13px;
          font-family: 'Courier New', monospace;
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .gp-range-input:focus { border-color: var(--color-accent); }

        .gp-reset-btn {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          padding: 8px;
          border-radius: 9px;
          border: 1px solid var(--color-border);
          background: transparent;
          color: var(--color-text-muted);
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          font-family: var(--font-display);
          transition: all var(--transition-fast);
        }
        .gp-reset-btn:hover { color: var(--color-accent); border-color: rgba(212,175,55,0.3); }

        /* Reference */
        .gp-ref { display: flex; flex-direction: column; gap: 6px; }
        .gp-ref-row { display: flex; gap: 6px; flex-wrap: wrap; }
        .gp-ref-row code {
          padding: 3px 8px;
          background: var(--color-base-alt);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          font-size: 11px;
          color: var(--color-text-secondary);
          font-family: 'Courier New', monospace;
        }
      `}</style>
    </div>
  );
};

export default Grapher2D;
