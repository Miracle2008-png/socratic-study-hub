import React, { useEffect, useRef, useState } from 'react';
import { Zap } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const thermoTheory = `
# Thermodynamics: The Ideal Gas Law

Thermodynamics is the branch of physics that deals with heat, work, and temperature, and their relation to energy, entropy, and the physical properties of matter and radiation.

## The Ideal Gas Law

The ideal gas law is the equation of state of a hypothetical ideal gas. It is a good approximation of the behavior of many gases under many conditions.

$$ PV = nRT $$

Where:
* $P$ is the pressure of the gas
* $V$ is the volume of the gas
* $n$ is the amount of substance (in moles)
* $R$ is the ideal gas constant ($8.314 \\text{ J/(mol K)}$)
* $T$ is the absolute temperature (in Kelvin)

## Kinetic Theory of Gases

Macroscopic properties like pressure and temperature emerge from the microscopic motion of thousands of particles colliding with each other and the walls of their container.

* **Temperature** is proportional to the average kinetic energy of the particles: $E_k = \\frac{3}{2}kT$
* **Pressure** is caused by the force of particles bouncing off the walls.

In the interactive simulator, observe how increasing the temperature speeds up the particles, resulting in a higher collision rate (pressure) against the walls.
`;

const ThermoModule: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [temperature, setTemperature] = useState(300); // Kelvin
  const [volume, setVolume] = useState(1.0); // Relative scale 0.5 to 1.5

  // Simulation state
  const particlesRef = useRef<{x: number, y: number, vx: number, vy: number}[]>([]);
  const lastTimeRef = useRef<number>(0);
  const animationRef = useRef<number>(0);

  const N = 100; // Number of particles

  useEffect(() => {
    // Initialize particles
    const initParticles = () => {
      const p = [];
      for(let i=0; i<N; i++) {
        p.push({
          x: Math.random() * 400 + 100,
          y: Math.random() * 300 + 50,
          vx: (Math.random() - 0.5) * 100,
          vy: (Math.random() - 0.5) * 100
        });
      }
      particlesRef.current = p;
    };
    initParticles();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000; // seconds
      lastTimeRef.current = time;

      ctx.clearRect(0, 0, width, height);

      // Box dimensions based on volume
      const boxWidth = 400 * volume;
      const boxHeight = 300;
      const boxX = (width - boxWidth) / 2;
      const boxY = (height - boxHeight) / 2;

      // Draw Box
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(90, 77, 65, 0.8)';
      ctx.lineWidth = 4;
      ctx.rect(boxX, boxY, boxWidth, boxHeight);
      ctx.stroke();

      // Velocity multiplier based on Temperature
      // v_rms is proportional to sqrt(T)
      const vMultiplier = Math.sqrt(temperature / 300) * 1.5;

      ctx.fillStyle = 'rgba(212, 175, 55, 0.8)';

      particlesRef.current.forEach(p => {
        // Move particle
        // We apply the velocity multiplier here. To make it smooth, we actually scale the applied dt.
        p.x += p.vx * vMultiplier * dt;
        p.y += p.vy * vMultiplier * dt;

        // Bounce off walls
        if (p.x < boxX + 4) { p.x = boxX + 4; p.vx *= -1; }
        if (p.x > boxX + boxWidth - 4) { p.x = boxX + boxWidth - 4; p.vx *= -1; }
        if (p.y < boxY + 4) { p.y = boxY + 4; p.vy *= -1; }
        if (p.y > boxY + boxHeight - 4) { p.y = boxY + boxHeight - 4; p.vy *= -1; }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [temperature, volume]);

  const pressure = (temperature / 300) / volume;

  return (
    <TheoryLayout title="Thermodynamics" theoryContent={thermoTheory}>
      <div className="simulator-header">
        <div className="header-title">
          <Zap size={20} className="text-gold-gradient" />
          <h3>Particle Kinetics Simulator</h3>
        </div>
        <p className="simulator-desc">
          Observe the real-time motion of gas particles in a sealed container. Adjust the temperature to add thermal energy, or change the volume to see the effect on pressure.
        </p>
      </div>

      <div className="canvas-container">
        <canvas ref={canvasRef} width={600} height={400} className="physics-canvas" />
        
        <div className="overlay-stats">
          <div className="stat-pill">
            <span className="stat-label">Pressure (rel):</span>
            <span className="stat-value">{pressure.toFixed(2)} P₀</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Volume:</span>
            <span className="stat-value">{volume.toFixed(2)} V₀</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Temp:</span>
            <span className="stat-value">{temperature} K</span>
          </div>
        </div>
      </div>

      <div className="controls-panel luxury-card mt-4">
        <div className="control-group">
          <div className="label-row">
            <label>Temperature ($T$)</label>
            <span>{temperature} K</span>
          </div>
          <input 
            type="range" 
            min="50" 
            max="1000" 
            step="10"
            value={temperature} 
            onChange={(e) => setTemperature(parseInt(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group mt-4">
          <div className="label-row">
            <label>Container Volume ($V$)</label>
            <span>{volume.toFixed(2)}</span>
          </div>
          <input 
            type="range" 
            min="0.5" 
            max="1.5" 
            step="0.05"
            value={volume} 
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="slider"
          />
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
        .label-row { display: flex; justify-content: space-between; font-size: 13px; font-weight: 500; color: var(--color-text-secondary); }
        
        .slider { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(90, 77, 65, 0.1); border-radius: 2px; outline: none; }
        .slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent); cursor: pointer; transition: transform 0.1s; }
        .slider::-webkit-slider-thumb:hover { transform: scale(1.2); }
      `}</style>
    </TheoryLayout>
  );
};

export default ThermoModule;
