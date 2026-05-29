import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Activity, Settings2 } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const physicsTheory = `
# Classical Mechanics

Classical mechanics describes the motion of macroscopic objects, from projectiles to parts of machinery, and astronomical objects. Formulated primarily by Sir Isaac Newton, it remains one of the most successful and intuitive physical theories ever constructed.

## 1. Kinematics of Projectile Motion

Projectile motion describes the trajectory of an object subject only to the acceleration of gravity ($g$). When a particle is launched with an initial velocity $v_0$ at an angle $\\theta$ to the horizontal, its motion is confined to a 2D plane.

The brilliance of Galilean kinematics is the realization that horizontal and vertical components of motion are entirely independent.

### Vector Decomposition
- $v_{x} = v_0 \\cos(\\theta)$
- $v_{y} = v_0 \\sin(\\theta)$

Since there is no air resistance (in an ideal model), acceleration is solely due to gravity in the negative $y$ direction:
- $a_x = 0$
- $a_y = -g$

### Equations of Motion
Integrating the acceleration equations with respect to time yields the velocity:
- $v_x(t) = v_0 \\cos(\\theta)$
- $v_y(t) = v_0 \\sin(\\theta) - gt$

Integrating once more yields the position equations:
- $x(t) = x_0 + (v_0 \\cos\\theta)t$
- $y(t) = y_0 + (v_0 \\sin\\theta)t - \\frac{1}{2}gt^2$

By eliminating $t$ from these parametric equations, we can find the equation of the trajectory in the $xy$-plane:
$$ y(x) = y_0 + x \\tan\\theta - \\frac{gx^2}{2v_0^2 \\cos^2\\theta} $$
This is the equation of a downward-opening parabola, proving that projectile motion follows a parabolic path.

### The Bounce Mechanic (Inelastic Collisions)
When the projectile collides with the ground, it undergoes a partially inelastic collision. The vertical velocity is reversed and scaled by a coefficient of restitution, $C_R$, which represents the ratio of final to initial relative velocity:
$$ v_{y, \\text{after}} = -C_R \\cdot v_{y, \\text{before}} $$
If $C_R = 1$, the collision is perfectly elastic. If $C_R < 1$, kinetic energy is lost to heat and sound upon impact.

## 2. Simple Harmonic Motion (Pendulum)

A simple pendulum consists of a point mass $m$ hanging from a massless, inextensible string of length $L$. The restoring force that drives the oscillation is the tangential component of gravity.

### Force and Torque
The gravitational force on the mass is $mg$. Breaking this down into radial and tangential components, we find the restoring force:
$$ F_{\\text{tangential}} = -mg \\sin(\\theta) $$

Using Newton's Second Law for rotational motion ($\\tau = I\\alpha$), where the moment of inertia $I = mL^2$ and the torque $\\tau = -mgL \\sin\\theta$:
$$ -mgL \\sin\\theta = mL^2 \\frac{d^2\\theta}{dt^2} $$

### The Differential Equation
Dividing by $mL^2$, we arrive at the non-linear differential equation governing the pendulum:
$$ \\frac{d^2\\theta}{dt^2} + \\frac{g}{L}\\sin\\theta = 0 $$

For small angles ($\\theta < 15^\\circ$), we can use the Taylor series expansion $\\sin\\theta \\approx \\theta$, leading to Simple Harmonic Motion (SHM):
$$ \\theta(t) = \\theta_0 \\cos(\\omega t + \\phi) $$
where the angular frequency is $\\omega = \\sqrt{\\frac{g}{L}}$.

**In the simulator on the right, we do NOT use the small-angle approximation.** We use numerical integration (Euler-Cromer method) to solve the exact non-linear equation, allowing for accurate simulation of massive pendulum swings.

## 3. Energy Conservation in Systems

In an isolated system with conservative forces, the total mechanical energy $E$ remains constant.

As the pendulum swings, Kinetic Energy ($K$) and Potential Energy ($U$) continuously exchange:
- **Kinetic Energy:** $K = \\frac{1}{2}mv^2$
- **Potential Energy:** $U = mgh = mgL(1 - \\cos\\theta)$

Total Energy $E = K + U = \\text{constant}$. 
Notice on the **Live Energy Graph** how the sum of the red (Kinetic) and blue (Potential) curves forms a perfectly flat line at the top. When air damping is introduced, you will see this total energy line slowly decay, illustrating the Second Law of Thermodynamics.
`;

const PhysicsModule: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const graphRef = useRef<HTMLCanvasElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSim, setActiveSim] = useState<'pendulum' | 'projectile'>('pendulum');
  
  // Interactive Params
  const [pGravity, setPGravity] = useState(9.81);
  const [pLength, setPLength] = useState(150);
  const [pDamping, setPDamping] = useState(0.995);
  
  const [projInitVel, setProjInitVel] = useState(30);
  const [projAngle, setProjAngle] = useState(60);
  const [projGravity] = useState(9.81);
  const [projBounce, setProjBounce] = useState(0.7);

  // Physics State
  const stateRef = useRef({
    angle: Math.PI / 4,
    velocity: 0,
    acceleration: 0,
    
    // Projectile standard units (meters)
    projX: 2, // start 2 meters right
    projY: 2, // start 2 meters high
    projVx: 0,
    projVy: 0,
    path: [] as {x: number, y: number}[],
    
    lastTime: 0,
    energyHistory: [] as { k: number, p: number }[]
  });

  const animationRef = useRef<number>(0);

  useEffect(() => {
    const rad = (projAngle * Math.PI) / 180;
    stateRef.current.projVx = projInitVel * Math.cos(rad);
    stateRef.current.projVy = projInitVel * Math.sin(rad); // Positive is UP in standard physics
    stateRef.current.projX = 2;
    stateRef.current.projY = 2;
    stateRef.current.path = [];
  }, [projInitVel, projAngle, activeSim]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const graph = graphRef.current;
    if (!canvas || !graph) return;
    
    const ctx = canvas.getContext('2d');
    const gCtx = graph.getContext('2d');
    if (!ctx || !gCtx) return;

    // Fixed canvas size for layout
    const width = canvas.width = 600;
    const height = canvas.height = 350;
    
    const gWidth = graph.width = 400;
    const gHeight = graph.height = 100;

    // Simulation scale: 1 meter = 10 pixels for projectile
    const scale = 10; 

    const drawGrid = () => {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(90, 77, 65, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 40) { ctx.moveTo(i, 0); ctx.lineTo(i, height); }
      for (let i = 0; i < height; i += 40) { ctx.moveTo(0, i); ctx.lineTo(width, i); }
      ctx.stroke();
    };

    const drawPendulum = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();

      const originX = width / 2;
      const originY = 50;
      const { angle } = stateRef.current;

      const bobX = originX + pLength * Math.sin(angle);
      const bobY = originY + pLength * Math.cos(angle);

      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(bobX, bobY);
      ctx.strokeStyle = 'rgba(90, 77, 65, 0.4)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(originX, originY, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#5A4D41';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(bobX, bobY, 15, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(bobX - 5, bobY - 5, 2, bobX, bobY, 15);
      gradient.addColorStop(0, '#F5E6B4');
      gradient.addColorStop(1, '#D4AF37');
      ctx.fillStyle = gradient;
      ctx.shadowColor = 'rgba(212, 175, 55, 0.4)';
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const drawProjectile = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();

      const state = stateRef.current;

      // Draw path
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      if (state.path.length > 0) {
        ctx.moveTo(state.path[0].x * scale, height - state.path[0].y * scale);
        for (let i = 1; i < state.path.length; i++) {
          ctx.lineTo(state.path[i].x * scale, height - state.path[i].y * scale);
        }
      }
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw projectile
      const drawX = state.projX * scale;
      const drawY = height - state.projY * scale; // Invert Y for canvas

      ctx.beginPath();
      ctx.arc(drawX, drawY, 12, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(drawX - 3, drawY - 3, 2, drawX, drawY, 12);
      gradient.addColorStop(0, '#E5E5E5');
      gradient.addColorStop(1, '#5A4D41');
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Ground line
      ctx.beginPath();
      ctx.moveTo(0, height - 2);
      ctx.lineTo(width, height - 2);
      ctx.strokeStyle = '#2C2A29';
      ctx.lineWidth = 4;
      ctx.stroke();
    };

    const drawGraph = () => {
      gCtx.clearRect(0, 0, gWidth, gHeight);
      const history = stateRef.current.energyHistory;
      if (history.length === 0) return;

      const maxPoints = 100;
      const displayHistory = history.slice(Math.max(history.length - maxPoints, 0));
      const step = gWidth / maxPoints;

      gCtx.beginPath();
      gCtx.strokeStyle = '#e74c3c';
      gCtx.lineWidth = 2;
      for (let i = 0; i < displayHistory.length; i++) {
        const x = i * step;
        const y = gHeight - (displayHistory[i].k * gHeight);
        if (i === 0) gCtx.moveTo(x, y);
        else gCtx.lineTo(x, y);
      }
      gCtx.stroke();

      gCtx.beginPath();
      gCtx.strokeStyle = '#3498db';
      gCtx.lineWidth = 2;
      for (let i = 0; i < displayHistory.length; i++) {
        const x = i * step;
        const y = gHeight - (displayHistory[i].p * gHeight);
        if (i === 0) gCtx.moveTo(x, y);
        else gCtx.lineTo(x, y);
      }
      gCtx.stroke();
    };

    const updatePhysics = (timestamp: number) => {
      let state = stateRef.current;
      
      if (!state.lastTime) state.lastTime = timestamp;
      let dt = (timestamp - state.lastTime) / 1000;
      if (dt > 0.05) dt = 0.05; // Cap dt for physics stability
      state.lastTime = timestamp;

      // Speed up simulation time 3x so it doesn't take forever to fall
      const simDt = dt * 3;

      if (activeSim === 'pendulum') {
        const scaleGrav = pGravity * 50; 
        state.acceleration = (-1 * scaleGrav / pLength) * Math.sin(state.angle);
        state.velocity += state.acceleration * simDt;
        state.velocity *= Math.pow(pDamping, simDt * 60);
        state.angle += state.velocity * simDt;
        
        const vMax = Math.sqrt(2 * scaleGrav * pLength * (1 - Math.cos(Math.PI/4)));
        const k = Math.min(1, Math.pow(Math.abs(state.velocity * pLength) / vMax, 2));
        const p = Math.min(1, (1 - Math.cos(state.angle)) / (1 - Math.cos(Math.PI/4)));
        
        state.energyHistory.push({ k: isNaN(k) ? 0 : k, p: isNaN(p) ? 0 : p });
        if (state.energyHistory.length > 200) state.energyHistory.shift();

        drawPendulum();
      } else {
        // Projectile kinematics (Strict 2D standard physics)
        state.projVy -= projGravity * simDt; // Gravity pulls DOWN (-)
        state.projX += state.projVx * simDt;
        state.projY += state.projVy * simDt;
        
        // Bounce collision with floor (y=0)
        if (state.projY <= 1.2) { // 1.2 accounts for ball radius (12px / 10 scale)
          state.projY = 1.2;
          state.projVy = -state.projVy * projBounce; // Bounce with energy loss
          
          // Friction applied only when touching floor
          state.projVx *= 0.95; 
        }

        // Track path (subsample for performance)
        if (state.path.length === 0 || Math.abs(state.path[state.path.length-1].x - state.projX) > 0.5) {
          state.path.push({x: state.projX, y: state.projY});
        }
        
        // Energy calculations (approximated max values for scaling)
        const totalV = Math.sqrt(state.projVx*state.projVx + state.projVy*state.projVy);
        const maxV = projInitVel;
        const k = Math.min(1, (totalV / maxV) * 0.5);
        const p = Math.min(1, state.projY / 40); // 40m roughly max height
        
        state.energyHistory.push({ k, p });
        if (state.energyHistory.length > 200) state.energyHistory.shift();

        drawProjectile();
      }

      drawGraph();

      if (isPlaying) {
        animationRef.current = requestAnimationFrame(updatePhysics);
      }
    };

    if (isPlaying) {
      stateRef.current.lastTime = performance.now();
      animationRef.current = requestAnimationFrame(updatePhysics);
    } else {
      activeSim === 'pendulum' ? drawPendulum() : drawProjectile();
      drawGraph();
    }

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, activeSim, pGravity, pLength, pDamping, projInitVel, projGravity, projAngle, projBounce]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const resetSimulation = () => {
    setIsPlaying(false);
    stateRef.current.lastTime = 0;
    stateRef.current.energyHistory = [];
    
    if (activeSim === 'pendulum') {
      stateRef.current.angle = Math.PI / 4;
      stateRef.current.velocity = 0;
    } else {
      const rad = (projAngle * Math.PI) / 180;
      stateRef.current.projVx = projInitVel * Math.cos(rad);
      stateRef.current.projVy = projInitVel * Math.sin(rad);
      stateRef.current.projX = 2;
      stateRef.current.projY = 2;
      stateRef.current.path = [];
    }
    
    setTimeout(() => {
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 16);
    }, 10);
  };

  return (
    <TheoryLayout title="Classical Mechanics" theoryContent={physicsTheory}>
      <div className="physics-module">
        <div className="sim-tabs">
          <button 
            className={`sim-tab ${activeSim === 'pendulum' ? 'active' : ''}`}
            onClick={() => { setActiveSim('pendulum'); setIsPlaying(false); resetSimulation(); }}
          >
            Harmonic Oscillator
          </button>
          <button 
            className={`sim-tab ${activeSim === 'projectile' ? 'active' : ''}`}
            onClick={() => { setActiveSim('projectile'); setIsPlaying(false); resetSimulation(); }}
          >
            Projectile Kinematics
          </button>
        </div>

        <div className="simulation-workspace luxury-card">
          <div className="canvas-container">
            <canvas ref={canvasRef} className="physics-canvas"></canvas>
          </div>

          <div className="controls-row">
            <button className="gold-btn" onClick={togglePlay}>
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'Pause' : 'Start'}</span>
            </button>
            <button className="reset-btn" onClick={resetSimulation} title="Reset">
              <RotateCcw size={16} />
            </button>
          </div>
          
          <div className="telemetry-panel">
            <div className="telemetry-header">
              <Activity size={16} className="text-gold-gradient" />
              <span>Live Energy Graph</span>
            </div>
            <div className="graph-container">
              <canvas ref={graphRef} className="energy-graph"></canvas>
              <div className="graph-legend">
                <span className="legend-item"><span className="dot red"></span> Kinetic</span>
                <span className="legend-item"><span className="dot blue"></span> Potential</span>
              </div>
            </div>
          </div>
        </div>

        <div className="control-panel luxury-card">
          <div className="panel-header">
            <Settings2 size={20} className="text-gold-gradient" />
            <h4>Simulation Parameters</h4>
          </div>

          {activeSim === 'pendulum' ? (
            <div className="parameter-group">
              <div className="param-control">
                <div className="param-labels">
                  <label>Gravity (m/s²)</label>
                  <span>{pGravity.toFixed(2)}</span>
                </div>
                <input type="range" min="1" max="25" step="0.1" value={pGravity} onChange={(e) => setPGravity(parseFloat(e.target.value))} />
              </div>
              
              <div className="param-control">
                <div className="param-labels">
                  <label>String Length</label>
                  <span>{pLength}</span>
                </div>
                <input type="range" min="50" max="250" step="1" value={pLength} onChange={(e) => setPLength(parseInt(e.target.value))} />
              </div>

              <div className="param-control">
                <div className="param-labels">
                  <label>Air Damping</label>
                  <span>{pDamping.toFixed(3)}</span>
                </div>
                <input type="range" min="0.900" max="1.000" step="0.001" value={pDamping} onChange={(e) => setPDamping(parseFloat(e.target.value))} />
              </div>
            </div>
          ) : (
            <div className="parameter-group">
              <div className="param-control">
                <div className="param-labels">
                  <label>Init Velocity (m/s)</label>
                  <span>{projInitVel}</span>
                </div>
                <input type="range" min="5" max="50" step="1" value={projInitVel} onChange={(e) => {setProjInitVel(parseInt(e.target.value)); resetSimulation();}} />
              </div>
              
              <div className="param-control">
                <div className="param-labels">
                  <label>Angle (deg)</label>
                  <span>{projAngle}°</span>
                </div>
                <input type="range" min="10" max="90" step="1" value={projAngle} onChange={(e) => { setProjAngle(parseInt(e.target.value)); resetSimulation(); }} />
              </div>

              <div className="param-control">
                <div className="param-labels">
                  <label>Bounciness (C_R)</label>
                  <span>{projBounce.toFixed(2)}</span>
                </div>
                <input type="range" min="0.1" max="1.0" step="0.05" value={projBounce} onChange={(e) => setProjBounce(parseFloat(e.target.value))} />
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .physics-module {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeIn var(--transition-normal);
        }
        
        .sim-tabs {
          display: flex;
          gap: 16px;
          border-bottom: 1px solid rgba(90, 77, 65, 0.1);
          padding-bottom: 16px;
        }

        .sim-tab {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-secondary);
          background: transparent;
          border: 1px solid transparent;
          border-radius: var(--border-radius-sm);
          transition: var(--transition-fast);
        }

        .sim-tab.active {
          color: var(--color-text-primary);
          background: var(--color-white);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: var(--shadow-sm);
        }

        .simulation-workspace {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 24px;
        }

        .canvas-container {
          background: var(--color-base-alt);
          border-radius: var(--border-radius-sm);
          border: 1px solid rgba(90, 77, 65, 0.05);
          overflow: hidden;
          width: 100%;
        }

        .physics-canvas {
          display: block;
          width: 100%;
          height: auto;
        }

        .controls-row {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .gold-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%);
          color: white;
          border-radius: var(--border-radius-full);
          font-size: 14px;
          font-weight: 500;
          box-shadow: var(--shadow-sm);
        }

        .reset-btn {
          padding: 10px;
          border-radius: 50%;
          background: var(--color-base);
          border: 1px solid rgba(90, 77, 65, 0.1);
        }

        .telemetry-panel {
          width: 100%;
          background: rgba(90, 77, 65, 0.02);
          border: 1px solid rgba(90, 77, 65, 0.05);
          border-radius: var(--border-radius-sm);
          padding: 16px;
        }

        .telemetry-header {
          display: flex; align-items: center; gap: 8px; margin-bottom: 12px; font-family: var(--font-serif);
        }

        .energy-graph {
          width: 100%; height: 80px; background: var(--color-white); border: 1px solid rgba(90, 77, 65, 0.1);
        }

        .graph-legend {
          display: flex; gap: 24px; font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;
        }

        .legend-item { display: flex; align-items: center; gap: 6px; }
        .dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot.red { background: #e74c3c; }
        .dot.blue { background: #3498db; }

        .control-panel { padding: 24px; }
        .panel-header { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .panel-header h4 { font-family: var(--font-primary); font-size: 16px; }
        .parameter-group { display: flex; flex-direction: column; gap: 20px; }
        .param-control { display: flex; flex-direction: column; gap: 8px; }
        .param-labels { display: flex; justify-content: space-between; font-size: 13px; color: var(--color-text-secondary); }
        .param-labels span { font-family: monospace; color: var(--color-text-primary); font-weight: 500;}
        input[type="range"] { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(90, 77, 65, 0.1); border-radius: 2px; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 14px; height: 14px; border-radius: 50%; background: var(--color-accent); cursor: pointer; }
      `}</style>
    </TheoryLayout>
  );
};

export default PhysicsModule;
