import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Play, RotateCcw, FlaskConical, Atom as AtomIcon, Settings2, Beaker } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const chemistryTheory = `
# Atomic Theory & Chemical Reactions

Chemistry is the science of matter and the changes it undergoes. Two of the most fundamental concepts are atomic orbital theory — which describes where electrons exist in an atom — and acid-base chemistry, which governs many reactions in biological and industrial systems.

## 1. Quantum Mechanical Model of the Atom

The modern atom is described by **quantum mechanics**, not by classical orbits. Electrons do not travel in fixed circular paths around the nucleus; instead, they exist in **orbitals**, which are probability distributions — regions of space where an electron is *likely* to be found.

### Wave Functions and Orbitals
The spatial distribution of an electron is described by a wave function $\\Psi(r, \\theta, \\phi)$. The probability of finding an electron at a point in space is proportional to:
$$P \\propto |\\Psi|^2$$
Orbitals are visualized as surfaces of constant probability density.

### Quantum Numbers
Each electron in an atom is uniquely described by four quantum numbers:
- **Principal** ($n$): Energy level ($n = 1, 2, 3, ...$)
- **Azimuthal** ($\\ell$): Shape ($\\ell = 0$ is $s$, $\\ell = 1$ is $p$, $\\ell = 2$ is $d$)
- **Magnetic** ($m_\\ell$): Orientation ($-\\ell \\leq m_\\ell \\leq \\ell$)
- **Spin** ($m_s$): $+\\frac{1}{2}$ or $-\\frac{1}{2}$

The **orbital simulator** on the right visualizes the electron density $|\\Psi|^2$ for several orbitals.

## 2. Acid-Base Chemistry & Titration

An **acid** is a proton ($H^+$) donor; a **base** is a proton acceptor (Brønsted-Lowry definition). The strength of an acid is quantified by its dissociation constant $K_a$:
$$\\text{pH} = -\\log_{10}[H^+]$$

### Titration Curve
A titration is the controlled addition of a standard solution (titrant) to an analyte. The **equivalence point** is reached when stoichiometric amounts have reacted.

For a **weak acid** with strong base, the **Henderson-Hasselbalch equation** governs the buffer region:
$$\\text{pH} = \\text{pK}_a + \\log_{10}\\left(\\frac{[A^-]}{[HA]}\\right)$$

The distinctive S-shaped titration curve is generated in the **Titration Simulator** in real time.
`;

/* ─── Orbital math ──────────────────────────────────────────────── */
type OrbitalKey = '1s' | '2s' | '2p' | '3d';

const ORBITAL_CONFIGS: Record<OrbitalKey, string> = {
  '1s': '1s — Spherical',
  '2s': '2s — Spherical + Radial Node',
  '2p': '2p — Dumbbell (m=0)',
  '3d': '3d — Cloverleaf (m=0)',
};

function calcDensity(orbital: OrbitalKey, x: number, y: number): number {
  const r = Math.sqrt(x * x + y * y);
  const theta = Math.atan2(y, x);
  const a0 = 1.0;
  switch (orbital) {
    case '1s': { const psi = Math.exp(-r / a0); return psi * psi; }
    case '2s': { const psi = (2 - r / a0) * Math.exp(-r / (2 * a0)); return psi * psi; }
    case '2p': { const psi = r * Math.exp(-r / (2 * a0)) * Math.cos(theta); return psi * psi; }
    case '3d': { const psi = r * r * Math.exp(-r / (3 * a0)) * Math.cos(2 * theta); return psi * psi; }
    default: return 0;
  }
}

/* ─── Titration math ────────────────────────────────────────────── */
function computePH(volBase: number, concAcid: number, concBase: number, pKa: number, acidType: 'strong' | 'weak'): number {
  const volAcid = 25;
  const molesAcid = concAcid * volAcid / 1000;
  const molesBase = concBase * volBase / 1000;
  const excess = molesBase - molesAcid;
  const totalVol = (volAcid + volBase) / 1000;

  if (acidType === 'strong') {
    if (excess < -1e-12) return -Math.log10((molesAcid - molesBase) / totalVol);
    if (Math.abs(excess) < 1e-10) return 7;
    return 14 + Math.log10(excess / totalVol);
  } else {
    if (volBase <= 0) {
      const Ka = Math.pow(10, -pKa);
      const H = (-Ka + Math.sqrt(Ka * Ka + 4 * Ka * concAcid)) / 2;
      return -Math.log10(Math.max(H, 1e-14));
    }
    if (excess < -1e-12) {
      const ha = molesAcid - molesBase;
      const a = molesBase;
      return pKa + Math.log10(a / ha);
    }
    if (Math.abs(excess) < 1e-9) return 8.87;
    return 14 + Math.log10(excess / totalVol);
  }
}

const ChemistryModule: React.FC = () => {
  const orbitalCanvasRef = useRef<HTMLCanvasElement>(null);
  const titrationCanvasRef = useRef<HTMLCanvasElement>(null);

  const [activeSim, setActiveSim] = useState<'orbital' | 'titration'>('orbital');
  const [selectedOrbital, setSelectedOrbital] = useState<OrbitalKey>('1s');

  const [volBase, setVolBase] = useState(0);
  const [concAcid, setConcAcid] = useState(0.1);
  const [concBase, setConcBase] = useState(0.1);
  const [pKa, setPKa] = useState(4.74);
  const [acidType, setAcidType] = useState<'strong' | 'weak'>('weak');
  const [isTitrating, setIsTitrating] = useState(false);
  const animRef = useRef<number>(0);

  /* ── Draw orbital ─────────────────────────────────────────────── */
  const drawOrbital = useCallback(() => {
    const canvas = orbitalCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = (canvas.width = 580);
    const H = (canvas.height = 300);
    ctx.fillStyle = '#FAFAF7';
    ctx.fillRect(0, 0, W, H);

    const cx = W / 2, cy = H / 2, scale = 28, maxR = 7;
    let maxD = 0;
    const step = 2;
    for (let px = 0; px < W; px += step) for (let py = 0; py < H; py += step) {
      const x = (px - cx) / scale, y = (py - cy) / scale;
      if (x * x + y * y > maxR * maxR) continue;
      const d = calcDensity(selectedOrbital, x, y);
      if (d > maxD) maxD = d;
    }
    if (maxD === 0) maxD = 1;

    const img = ctx.createImageData(W, H);
    for (let px = 0; px < W; px++) for (let py = 0; py < H; py++) {
      const x = (px - cx) / scale, y = (py - cy) / scale;
      if (x * x + y * y > maxR * maxR) continue;
      const t = Math.pow(calcDensity(selectedOrbital, x, y) / maxD, 0.38);
      const i = (py * W + px) * 4;
      img.data[i] = Math.round(20 + t * 192);
      img.data[i + 1] = Math.round(18 + t * 157);
      img.data[i + 2] = Math.round(14 + t * 41);
      img.data[i + 3] = Math.round(30 + t * 225);
    }
    ctx.putImageData(img, 0, 0);

    ctx.beginPath();
    ctx.arc(cx, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#5A4D41';
    ctx.fill();

    ctx.fillStyle = 'rgba(90,77,65,0.45)';
    ctx.font = '11px "DM Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(ORBITAL_CONFIGS[selectedOrbital], 12, 18);
    ctx.fillText('Density: |Ψ|²', 12, H - 10);
  }, [selectedOrbital]);

  useEffect(() => { if (activeSim === 'orbital') drawOrbital(); }, [activeSim, drawOrbital]);

  /* ── Draw titration ───────────────────────────────────────────── */
  const drawTitration = useCallback(() => {
    const canvas = titrationCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const W = (canvas.width = 580);
    const H = (canvas.height = 300);
    ctx.fillStyle = '#FAFAF7';
    ctx.fillRect(0, 0, W, H);

    const pad = { l: 48, r: 18, t: 18, b: 38 };
    const gW = W - pad.l - pad.r, gH = H - pad.t - pad.b;
    const maxVol = 60;
    const mapX = (v: number) => pad.l + (v / maxVol) * gW;
    const mapY = (ph: number) => pad.t + gH - (ph / 14) * gH;

    // Grid
    ctx.strokeStyle = 'rgba(90,77,65,0.06)';
    ctx.lineWidth = 1;
    for (let ph = 0; ph <= 14; ph += 2) { ctx.beginPath(); ctx.moveTo(pad.l, mapY(ph)); ctx.lineTo(W - pad.r, mapY(ph)); ctx.stroke(); }
    for (let v = 0; v <= 60; v += 10) { ctx.beginPath(); ctx.moveTo(mapX(v), pad.t); ctx.lineTo(mapX(v), H - pad.b); ctx.stroke(); }

    // Axes
    ctx.strokeStyle = 'rgba(90,77,65,0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(pad.l, pad.t); ctx.lineTo(pad.l, H - pad.b); ctx.lineTo(W - pad.r, H - pad.b);
    ctx.stroke();

    // pH=7 line
    ctx.setLineDash([5, 4]); ctx.strokeStyle = 'rgba(14,165,233,0.3)';
    ctx.beginPath(); ctx.moveTo(pad.l, mapY(7)); ctx.lineTo(W - pad.r, mapY(7)); ctx.stroke();
    ctx.setLineDash([]);

    // Equivalence line
    const eqV = (concAcid * 25) / concBase;
    ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(239,68,68,0.3)';
    ctx.beginPath(); ctx.moveTo(mapX(eqV), pad.t); ctx.lineTo(mapX(eqV), H - pad.b); ctx.stroke();
    ctx.setLineDash([]);

    // Curve
    ctx.beginPath(); ctx.strokeStyle = '#D4AF37'; ctx.lineWidth = 2.5;
    let first = true;
    for (let v = 0; v <= 60; v += 0.4) {
      const ph = Math.max(0, Math.min(14, computePH(v, concAcid, concBase, pKa, acidType)));
      if (first) { ctx.moveTo(mapX(v), mapY(ph)); first = false; } else ctx.lineTo(mapX(v), mapY(ph));
    }
    ctx.stroke();

    // Current point
    const curPH = Math.max(0, Math.min(14, computePH(volBase, concAcid, concBase, pKa, acidType)));
    ctx.beginPath(); ctx.arc(mapX(volBase), mapY(curPH), 7, 0, Math.PI * 2);
    ctx.fillStyle = '#D4AF37'; ctx.shadowColor = 'rgba(212,175,55,0.5)'; ctx.shadowBlur = 12;
    ctx.fill(); ctx.shadowBlur = 0;

    ctx.fillStyle = '#4A3D31'; ctx.font = 'bold 12px "DM Sans", sans-serif';
    ctx.textAlign = 'left';
    const labelX = mapX(volBase) + 10, labelY = Math.max(mapY(curPH) - 8, pad.t + 14);
    ctx.fillText(`pH = ${curPH.toFixed(2)}`, labelX, labelY);

    // Axis ticks
    ctx.fillStyle = 'rgba(90,77,65,0.45)'; ctx.font = '10px "DM Sans", sans-serif';
    for (let ph = 0; ph <= 14; ph += 2) { ctx.textAlign = 'right'; ctx.fillText(String(ph), pad.l - 4, mapY(ph) + 4); }
    for (let v = 0; v <= 60; v += 10) { ctx.textAlign = 'center'; ctx.fillText(String(v), mapX(v), H - pad.b + 16); }

    ctx.textAlign = 'center';
    ctx.fillText('Volume NaOH (mL)', W / 2, H - 4);
    ctx.save(); ctx.translate(11, H / 2); ctx.rotate(-Math.PI / 2); ctx.fillText('pH', 0, 0); ctx.restore();
  }, [volBase, concAcid, concBase, pKa, acidType]);

  useEffect(() => { if (activeSim === 'titration') drawTitration(); }, [activeSim, drawTitration]);

  // Auto-titrate animation
  useEffect(() => {
    if (!isTitrating) { cancelAnimationFrame(animRef.current); return; }
    let lastTime = 0;
    const step = (t: number) => {
      if (t - lastTime > 40) {
        lastTime = t;
        setVolBase(prev => {
          if (prev >= 60) { setIsTitrating(false); return prev; }
          return Math.min(60, prev + 0.5);
        });
      }
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [isTitrating]);

  useEffect(() => { if (activeSim === 'titration') drawTitration(); }, [volBase, drawTitration, activeSim]);

  return (
    <TheoryLayout title="Chemistry Lab" theoryContent={chemistryTheory}>
      <div className="chem-module">
        <div className="sim-tabs">
          <button className={`sim-tab ${activeSim === 'orbital' ? 'active' : ''}`} onClick={() => setActiveSim('orbital')}>
            <AtomIcon size={14} /> Atomic Orbitals
          </button>
          <button className={`sim-tab ${activeSim === 'titration' ? 'active' : ''}`} onClick={() => setActiveSim('titration')}>
            <FlaskConical size={14} /> Acid-Base Titration
          </button>
        </div>

        {activeSim === 'orbital' && (
          <div className="sim-workspace luxury-card">
            <div className="canvas-container">
              <canvas ref={orbitalCanvasRef} className="chem-canvas" />
            </div>
            <div className="orbital-controls">
              {(Object.keys(ORBITAL_CONFIGS) as OrbitalKey[]).map(k => (
                <button key={k} className={`orbital-btn ${selectedOrbital === k ? 'active' : ''}`} onClick={() => setSelectedOrbital(k)}>
                  {k}
                </button>
              ))}
            </div>
            <p className="sim-hint">
              Cross-section of the electron probability density |Ψ|². Gold = high probability. Click an orbital to switch.
            </p>
          </div>
        )}

        {activeSim === 'titration' && (
          <>
            <div className="sim-workspace luxury-card">
              <div className="canvas-container">
                <canvas ref={titrationCanvasRef} className="chem-canvas" />
              </div>
              <div className="titration-scrubber">
                <label className="scrubber-label">
                  <span>Volume NaOH added</span>
                  <span className="scrubber-val">{volBase.toFixed(1)} mL</span>
                </label>
                <input type="range" min={0} max={60} step={0.5}
                  value={volBase} onChange={e => { setIsTitrating(false); setVolBase(parseFloat(e.target.value)); }} />
              </div>
              <div className="controls-row">
                <button className="gold-btn" onClick={() => { setVolBase(0); setTimeout(() => setIsTitrating(true), 50); }}>
                  <Play size={14} /> Auto-Titrate
                </button>
                <button className="reset-btn" onClick={() => { setIsTitrating(false); setVolBase(0); }} title="Reset">
                  <RotateCcw size={14} />
                </button>
              </div>
            </div>

            <div className="control-panel luxury-card">
              <div className="panel-header">
                <Settings2 size={17} style={{ color: 'var(--color-accent)' }} />
                <h4>Titration Parameters</h4>
              </div>
              <div className="parameter-group">
                <div className="param-control">
                  <div className="param-labels"><label>Acid Type</label></div>
                  <div className="acid-type-toggle">
                    <button className={`acid-type-btn ${acidType === 'weak' ? 'active' : ''}`} onClick={() => setAcidType('weak')}>Weak Acid</button>
                    <button className={`acid-type-btn ${acidType === 'strong' ? 'active' : ''}`} onClick={() => setAcidType('strong')}>Strong Acid</button>
                  </div>
                </div>
                <div className="param-control">
                  <div className="param-labels"><label>Acid Concentration (M)</label><span>{concAcid.toFixed(2)}</span></div>
                  <input type="range" min={0.01} max={0.5} step={0.01} value={concAcid} onChange={e => setConcAcid(parseFloat(e.target.value))} />
                </div>
                <div className="param-control">
                  <div className="param-labels"><label>Base (NaOH) Concentration (M)</label><span>{concBase.toFixed(2)}</span></div>
                  <input type="range" min={0.01} max={0.5} step={0.01} value={concBase} onChange={e => setConcBase(parseFloat(e.target.value))} />
                </div>
                {acidType === 'weak' && (
                  <div className="param-control">
                    <div className="param-labels"><label>pKₐ of Acid</label><span>{pKa.toFixed(2)}</span></div>
                    <input type="range" min={2} max={12} step={0.01} value={pKa} onChange={e => setPKa(parseFloat(e.target.value))} />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      <style>{`
        .chem-module { display: flex; flex-direction: column; gap: 20px; }

        .sim-tabs {
          display: flex; gap: 10px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(90,77,65,0.08);
        }

        .sim-tab {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 18px;
          font-size: 13.5px; font-weight: 500;
          color: var(--color-text-secondary);
          background: transparent; border: 1px solid transparent;
          border-radius: var(--border-radius-sm);
          cursor: pointer; transition: var(--transition-fast);
          font-family: var(--font-display);
        }
        .sim-tab.active {
          color: var(--color-text-primary);
          background: var(--color-white);
          border-color: rgba(212,175,55,0.3);
          box-shadow: var(--shadow-sm);
        }
        .sim-tab:hover:not(.active) { background: rgba(90,77,65,0.04); }

        .sim-workspace { display: flex; flex-direction: column; gap: 18px; padding: 24px; }

        .canvas-container {
          background: var(--color-base-alt);
          border-radius: var(--border-radius-sm);
          border: 1px solid rgba(90,77,65,0.06);
          overflow: hidden;
        }

        .chem-canvas { display: block; width: 100%; height: auto; }

        .orbital-controls { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }

        .orbital-btn {
          padding: 8px 22px; border-radius: var(--border-radius-full);
          font-family: 'Courier New', monospace; font-size: 14px; font-weight: 600;
          color: var(--color-text-secondary); background: var(--color-base-alt);
          border: 1px solid var(--color-border); cursor: pointer; transition: var(--transition-fast);
        }
        .orbital-btn.active {
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          color: white; border-color: transparent;
          box-shadow: 0 4px 12px rgba(212,175,55,0.3);
        }
        .orbital-btn:hover:not(.active) { border-color: var(--color-accent); color: var(--color-accent); }

        .sim-hint { font-size: 12px; color: var(--color-text-muted); text-align: center; line-height: 1.6; font-family: var(--font-display); }

        .titration-scrubber { display: flex; flex-direction: column; gap: 8px; }
        .scrubber-label { display: flex; justify-content: space-between; font-size: 13px; color: var(--color-text-secondary); font-family: var(--font-display); }
        .scrubber-val { font-family: monospace; color: var(--color-accent); font-weight: 600; }

        .controls-row { display: flex; gap: 12px; align-items: center; justify-content: center; }

        .gold-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent-light));
          color: white; border-radius: var(--border-radius-full);
          font-size: 14px; font-weight: 500; border: none;
          box-shadow: var(--shadow-sm); cursor: pointer;
          font-family: var(--font-display); transition: var(--transition-fast);
        }
        .gold-btn:hover { box-shadow: var(--shadow-glow); transform: translateY(-1px); }

        .reset-btn {
          padding: 10px; border-radius: 50%; background: var(--color-base);
          border: 1px solid rgba(90,77,65,0.1); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: var(--color-text-secondary); transition: var(--transition-fast);
        }
        .reset-btn:hover { color: var(--color-accent); border-color: rgba(212,175,55,0.3); }

        .control-panel { padding: 24px; }
        .panel-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .panel-header h4 { font-family: var(--font-display); font-size: 15px; font-weight: 600; }

        .parameter-group { display: flex; flex-direction: column; gap: 18px; }
        .param-control { display: flex; flex-direction: column; gap: 8px; }
        .param-labels { display: flex; justify-content: space-between; font-size: 13px; color: var(--color-text-secondary); font-family: var(--font-display); }
        .param-labels span { font-family: monospace; color: var(--color-text-primary); font-weight: 500; }

        input[type="range"] {
          -webkit-appearance: none; width: 100%; height: 4px;
          background: rgba(90,77,65,0.1); border-radius: 2px;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none; appearance: none;
          width: 14px; height: 14px; border-radius: 50%;
          background: var(--color-accent); cursor: pointer;
        }

        .acid-type-toggle { display: flex; gap: 8px; }
        .acid-type-btn {
          flex: 1; padding: 8px 12px;
          border-radius: var(--border-radius-sm); font-size: 13px; font-weight: 500;
          font-family: var(--font-display); border: 1px solid var(--color-border);
          background: var(--color-base-alt); color: var(--color-text-secondary);
          cursor: pointer; transition: var(--transition-fast);
        }
        .acid-type-btn.active {
          background: rgba(212,175,55,0.12);
          border-color: rgba(212,175,55,0.3);
          color: var(--color-accent); font-weight: 600;
        }
      `}</style>
    </TheoryLayout>
  );
};

export default ChemistryModule;
