import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const quantumTheory = `
# Quantum Mechanics

Quantum mechanics is the foundational theory of modern physics, describing the behaviour of matter and energy at the atomic and subatomic scale. It departs radically from classical physics, introducing fundamental probabilism, wave-particle duality, and quantized observables.

## 1. Historical Origins and Wave-Particle Duality

The quantum revolution began with the failure of classical physics to explain blackbody radiation. Max Planck in 1900 resolved this by postulating that energy is emitted in discrete quanta:
$$ E = hf = \\hbar \\omega $$
where $h = 6.626 \\times 10^{-34}$ J·s is Planck's constant, $f$ is frequency, and $\\hbar = h / 2\\pi$.

Einstein extended this in 1905 to explain the photoelectric effect: light arrives as photons, each carrying energy $E = hf$. For an electron to escape a metal surface with work function $\\phi$:
$$ K_{\\text{max}} = hf - \\phi $$

Louis de Broglie in 1924 proposed that all matter has associated wave properties. For a particle with momentum $p$:
$$ \\lambda = \\frac{h}{p} $$
This was confirmed by Davisson-Germer (1927) when electrons exhibited diffraction patterns identical to X-rays, proving their wave nature.

The double-slit experiment encapsulates the central mystery: even a single electron passing through two slits creates an interference pattern — unless we measure which slit it used, at which point the pattern vanishes. The act of measurement collapses the quantum state.

## 2. The Wavefunction and Probability

In quantum mechanics, the complete description of a particle is its **wavefunction** $\\Psi(\\mathbf{r}, t)$, a complex-valued function of position and time. The physical content comes from the **Born rule** (1926):

$$ P(\\mathbf{r}, t) = |\\Psi(\\mathbf{r}, t)|^2 $$

This gives the probability density for finding the particle at position $\\mathbf{r}$ at time $t$. For the wavefunction to be physically valid, it must be normalized:
$$ \\int_{-\\infty}^{\\infty} |\\Psi(\\mathbf{r}, t)|^2 \\, d^3r = 1 $$

The wavefunction must also be continuous, differentiable, and square-integrable. These mathematical constraints are what force energy quantization.

## 3. The Schrödinger Equation

The time evolution of the wavefunction is governed by the **Schrödinger equation** (1926):

$$ i\\hbar \\frac{\\partial}{\\partial t} \\Psi(\\mathbf{r},t) = \\hat{H} \\Psi(\\mathbf{r},t) $$

where the **Hamiltonian operator** $\\hat{H}$ represents the total energy:
$$ \\hat{H} = -\\frac{\\hbar^2}{2m} \\nabla^2 + V(\\mathbf{r}, t) $$

The first term is the kinetic energy operator, the second is potential energy. For time-independent potentials, we separate variables with $\\Psi(\\mathbf{r},t) = \\psi(\\mathbf{r}) e^{-iEt/\\hbar}$, yielding the **time-independent Schrödinger equation**:

$$ \\hat{H}\\psi = E\\psi $$

This is an eigenvalue equation: the allowed energies $E$ are the eigenvalues, and the wavefunctions $\\psi$ are the corresponding eigenstates.

## 4. Particle in a 1D Infinite Square Well

The simplest exactly solvable system is a particle of mass $m$ confined to a box $0 \\leq x \\leq L$ with infinite potential walls. Inside the box $V = 0$, so:

$$ -\\frac{\\hbar^2}{2m} \\frac{d^2 \\psi}{dx^2} = E\\psi $$

With boundary conditions $\\psi(0) = \\psi(L) = 0$, the solutions are:
$$ \\psi_n(x) = \\sqrt{\\frac{2}{L}} \\sin\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 1, 2, 3, \\ldots $$

Substituting back gives the **quantized energy levels**:
$$ E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2mL^2} = n^2 E_1 $$

The ground state energy $E_1 > 0$ — a particle can never be at rest in a box. This **zero-point energy** is a direct consequence of the Heisenberg uncertainty principle. Note that $E_n \\propto n^2$, so the spacing between energy levels grows with $n$.

## 5. The Heisenberg Uncertainty Principle

Quantum mechanics forbids simultaneous precise knowledge of certain pairs of observables. For position and momentum:
$$ \\Delta x \\cdot \\Delta p_x \\geq \\frac{\\hbar}{2} $$

This is not a measurement limitation — it is a fundamental property of nature. It arises from the non-commutativity of the position and momentum operators:
$$ [\\hat{x}, \\hat{p}] = \\hat{x}\\hat{p} - \\hat{p}\\hat{x} = i\\hbar $$

Similarly for energy and time: $\\Delta E \\cdot \\Delta t \\geq \\hbar/2$. This allows virtual particles to exist briefly within the allowed energy-time window, giving rise to the Casimir effect and Lamb shift.

## 6. Quantum Harmonic Oscillator

The quantum harmonic oscillator (potential $V = \\frac{1}{2}m\\omega^2 x^2$) is the most important exactly solvable system, as it approximates any potential near a minimum.

Using **ladder operators** $\\hat{a}^\\dagger$ (creation) and $\\hat{a}$ (annihilation):
$$ \\hat{H} = \\hbar\\omega\\left(\\hat{a}^\\dagger \\hat{a} + \\frac{1}{2}\\right) $$

The energy eigenvalues are equally spaced:
$$ E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega, \\quad n = 0, 1, 2, \\ldots $$

The zero-point energy $E_0 = \\hbar\\omega/2$ is a profound consequence of the uncertainty principle and explains why liquid helium never freezes at atmospheric pressure.

## Interactive Simulator

The simulator shows $\\psi_n(x)$ (blue wave) oscillating in time via the phase factor $e^{-iE_n t/\\hbar}$, alongside the probability density $|\\psi_n|^2$ (red shading). Adjust $n$ to see how the number of nodes equals $n-1$, and how energy scales as $n^2$.
`;


const QuantumModule: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const animationRef = useRef<number>(0);
  
  const [energyLevel, setEnergyLevel] = useState(3);
  const [wellWidth, setWellWidth] = useState(100);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 600;
    const height = canvas.height = 350;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
      ctx.lineWidth = 2;
      const margin = (width - wellWidth * 4) / 2;
      ctx.moveTo(margin, 50); ctx.lineTo(margin, height - 50);
      ctx.moveTo(width - margin, 50); ctx.lineTo(width - margin, height - 50);
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 3;
      
      const n = energyLevel;
      const L = wellWidth * 4;
      
      for (let x = 0; x <= L; x++) {
        const realPsi = Math.sin((n * Math.PI * x) / L) * Math.cos(time);
        const probDensity = Math.pow(Math.sin((n * Math.PI * x) / L), 2);

        const plotX = margin + x;
        const plotY = height / 2 - realPsi * 100;
        
        if (x === 0) ctx.moveTo(plotX, plotY);
        else ctx.lineTo(plotX, plotY);

        ctx.fillStyle = `rgba(231, 76, 60, ${probDensity * 0.1})`;
        ctx.fillRect(plotX, height/2 - probDensity * 100, 1, probDensity * 200);
      }
      ctx.stroke();

      if (isPlaying) {
        time += 0.05;
        animationRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, energyLevel, wellWidth]);

  return (
    <TheoryLayout title="Quantum Mechanics" theoryContent={quantumTheory}>
      <div className="quantum-module">
        <div className="simulation-workspace luxury-card">
          <div className="canvas-container">
            <canvas ref={canvasRef} className="physics-canvas"></canvas>
          </div>

          <div className="controls-row">
            <button className="gold-btn" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <span>{isPlaying ? 'Pause Time Evolution' : 'Start Time Evolution'}</span>
            </button>
          </div>
          
          <div className="control-panel">
            <div className="param-control">
              <div className="param-labels">
                <label>Energy State (n)</label>
                <span>n = {energyLevel}</span>
              </div>
              <input type="range" min="1" max="10" step="1" value={energyLevel} onChange={(e) => setEnergyLevel(parseInt(e.target.value))} />
            </div>
            
            <div className="param-control">
              <div className="param-labels">
                <label>Well Width (L)</label>
                <span>{wellWidth} pm</span>
              </div>
              <input type="range" min="50" max="140" step="1" value={wellWidth} onChange={(e) => setWellWidth(parseInt(e.target.value))} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .quantum-module { display: flex; flex-direction: column; gap: 24px; animation: fadeIn var(--transition-normal); padding: 12px; }
        .simulation-workspace { padding: 32px; display: flex; flex-direction: column; align-items: center; gap: 32px; }
        .canvas-container { background: var(--color-base-alt); border-radius: var(--border-radius-sm); border: 1px solid rgba(90, 77, 65, 0.05); overflow: hidden; width: 100%; max-width: 800px; }
        .physics-canvas { display: block; width: 100%; height: auto; }
        .controls-row { display: flex; gap: 16px; align-items: center; }
        .gold-btn { display: flex; align-items: center; gap: 8px; padding: 12px 32px; background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-light) 100%); color: white; border-radius: var(--border-radius-full); font-size: 14px; font-weight: 500; box-shadow: var(--shadow-sm); cursor: pointer; border: none; }
        .control-panel { width: 100%; max-width: 800px; display: flex; flex-direction: column; gap: 24px; background: rgba(90, 77, 65, 0.02); padding: 24px; border-radius: 8px; border: 1px solid rgba(90, 77, 65, 0.05); }
        .param-control { display: flex; flex-direction: column; gap: 12px; }
        .param-labels { display: flex; justify-content: space-between; font-size: 13px; color: var(--color-text-secondary); }
        .param-labels span { color: var(--color-text-primary); font-family: monospace; font-weight: 500; }
        input[type="range"] { -webkit-appearance: none; width: 100%; height: 4px; background: rgba(90, 77, 65, 0.1); border-radius: 2px; outline: none; }
        input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 16px; height: 16px; border-radius: 50%; background: var(--color-accent); cursor: pointer; }
      `}</style>
    </TheoryLayout>
  );
};

export default QuantumModule;
