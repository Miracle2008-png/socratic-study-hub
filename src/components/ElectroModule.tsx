import React, { useEffect, useRef, useState } from 'react';
import { PlusCircle, MinusCircle, RotateCcw } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const electroTheory = `
# Electromagnetism

Electromagnetism is one of the four fundamental forces of nature. It governs the interactions of electrically charged particles and is responsible for virtually all phenomena encountered in daily life, from the structure of atoms to the transmission of light.

## 1. Electric Charge and Coulomb's Law

Electric charge is a fundamental conserved property of matter. Charges come in two types — positive (protons) and negative (electrons) — with the elementary charge $e = 1.602 \\times 10^{-19}$ C. Like charges repel; unlike charges attract.

**Coulomb's Law** gives the electrostatic force between two point charges $q_1$ and $q_2$ separated by distance $r$:
$$ \\mathbf{F} = k_e \\frac{q_1 q_2}{r^2} \\hat{\\mathbf{r}} $$

where $k_e = \\frac{1}{4\\pi\\varepsilon_0} = 8.99 \\times 10^9$ N·m²/C² and $\\varepsilon_0 = 8.854 \\times 10^{-12}$ F/m is the permittivity of free space.

## 2. The Electric Field

The electric field $\\mathbf{E}$ at a point is defined as the force per unit positive test charge:
$$ \\mathbf{E} = \\lim_{q_0 \\to 0} \\frac{\\mathbf{F}}{q_0} $$

For a point charge $q$, the field at distance $r$ is:
$$ \\mathbf{E} = k_e \\frac{q}{r^2} \\hat{\\mathbf{r}} $$

The **superposition principle** states that the total field from multiple charges is the vector sum of individual fields:
$$ \\mathbf{E}_{\\text{total}} = \\sum_i k_e \\frac{q_i}{r_i^2} \\hat{\\mathbf{r}}_i $$

Electric field lines point from $+$ to $-$, with density proportional to field magnitude. The **electric potential** $V$ is the work done per unit charge to bring a test charge from infinity:
$$ V = k_e \\frac{q}{r}, \\qquad \\mathbf{E} = -\\nabla V $$

## 3. Gauss's Law

Gauss's Law relates the net electric flux through any closed surface to the enclosed charge:
$$ \\oint_S \\mathbf{E} \\cdot d\\mathbf{A} = \\frac{Q_{\\text{enc}}}{\\varepsilon_0} $$

In differential form: $\\nabla \\cdot \\mathbf{E} = \\rho / \\varepsilon_0$, where $\\rho$ is charge density. Gauss's law makes it trivial to find fields for symmetric charge distributions (spheres, cylinders, planes).

## 4. Magnetostatics and the Biot-Savart Law

A moving charge $q$ with velocity $\\mathbf{v}$ in a magnetic field $\\mathbf{B}$ experiences the **Lorentz force**:
$$ \\mathbf{F} = q\\mathbf{v} \\times \\mathbf{B} $$

The **Biot-Savart Law** gives the magnetic field produced by a current element $Id\\mathbf{l}$:
$$ d\\mathbf{B} = \\frac{\\mu_0}{4\\pi} \\frac{I\\, d\\mathbf{l} \\times \\hat{\\mathbf{r}}}{r^2} $$

where $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A is the permeability of free space.

**Ampère's Law** (for steady currents) gives the line integral of $\\mathbf{B}$ around a closed loop:
$$ \\oint_C \\mathbf{B} \\cdot d\\mathbf{l} = \\mu_0 I_{\\text{enc}} $$

## 5. Faraday's Law and Electromagnetic Induction

Michael Faraday discovered that a changing magnetic flux through a loop induces an electromotive force (EMF). **Faraday's Law**:
$$ \\mathcal{E} = -\\frac{d\\Phi_B}{dt}, \\qquad \\Phi_B = \\int_S \\mathbf{B} \\cdot d\\mathbf{A} $$

The negative sign (Lenz's Law) means the induced current opposes the change that created it. This is the principle behind generators, transformers, and MRI machines.

**Self-inductance** $L$ of a coil (in henries) relates flux to current: $\\Phi_B = LI$. The induced EMF is $\\mathcal{E} = -L \\frac{dI}{dt}$.

## 6. Maxwell's Equations

James Clerk Maxwell unified electricity, magnetism, and optics into four elegant equations. In differential form:

| Law | Differential Form |
|---|---|
| Gauss's Law | $\\nabla \\cdot \\mathbf{E} = \\rho/\\varepsilon_0$ |
| Gauss's (Magnetism) | $\\nabla \\cdot \\mathbf{B} = 0$ |
| Faraday's Law | $\\nabla \\times \\mathbf{E} = -\\partial\\mathbf{B}/\\partial t$ |
| Ampère-Maxwell | $\\nabla \\times \\mathbf{B} = \\mu_0\\mathbf{J} + \\mu_0\\varepsilon_0 \\partial\\mathbf{E}/\\partial t$ |

Maxwell's stroke of genius was adding the **displacement current** $\\varepsilon_0 \\partial\\mathbf{E}/\\partial t$ to Ampère's law. This led directly to the prediction of electromagnetic waves travelling at speed:
$$ c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 2.998 \\times 10^8 \\text{ m/s} $$

This is precisely the speed of light — Maxwell had unified optics with electromagnetism.

## 7. Energy in Electromagnetic Fields

The energy density stored in electric and magnetic fields:
$$ u_E = \\frac{\\varepsilon_0 E^2}{2}, \\qquad u_B = \\frac{B^2}{2\\mu_0} $$

Energy flow is described by the **Poynting vector**:
$$ \\mathbf{S} = \\frac{1}{\\mu_0} \\mathbf{E} \\times \\mathbf{B} $$

$\\mathbf{S}$ points in the direction of electromagnetic energy transport, with magnitude equal to power per unit area (W/m²).

## Interactive Vector Field Simulator

Place positive (red) and negative (blue) point charges on the canvas. The simulator calculates the net $\\mathbf{E}$ field at a grid of points using the superposition principle, rendering arrows scaled by field magnitude. Watch how field lines connect opposite charges and terminate on charges of the same sign.
`;


interface Charge {
  x: number;
  y: number;
  q: number;
}

const ElectroModule: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [charges, setCharges] = useState<Charge[]>([
    { x: 150, y: 150, q: 1 },
    { x: 450, y: 150, q: -1 }
  ]);

  const addCharge = (q: number) => {
    setCharges(prev => [
      ...prev,
      { x: 300 + (Math.random() * 100 - 50), y: 150 + (Math.random() * 100 - 50), q }
    ]);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 600;
    const height = canvas.height = 350;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.beginPath();
      ctx.strokeStyle = 'rgba(90, 77, 65, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 40) { ctx.moveTo(i, 0); ctx.lineTo(i, height); }
      for (let i = 0; i < height; i += 40) { ctx.moveTo(0, i); ctx.lineTo(width, i); }
      ctx.stroke();

      const resolution = 25;
      for (let x = 0; x < width; x += resolution) {
        for (let y = 0; y < height; y += resolution) {
          let Ex = 0;
          let Ey = 0;
          
          charges.forEach(c => {
            const dx = x - c.x;
            const dy = y - c.y;
            const distSq = dx*dx + dy*dy;
            if (distSq > 10) { 
              const dist = Math.sqrt(distSq);
              const E = c.q / distSq; 
              Ex += E * (dx / dist);
              Ey += E * (dy / dist);
            }
          });

          const Emag = Math.sqrt(Ex*Ex + Ey*Ey);
          if (Emag > 0.0001) {
            const scale = Math.min(10, Emag * 5000);
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + (Ex/Emag)*scale, y + (Ey/Emag)*scale);
            ctx.strokeStyle = `rgba(212, 175, 55, ${Math.min(0.8, Emag * 10000)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      charges.forEach(c => {
        ctx.beginPath();
        ctx.arc(c.x, c.y, 12, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(c.x - 4, c.y - 4, 2, c.x, c.y, 12);
        if (c.q > 0) {
          gradient.addColorStop(0, '#ff9a9e');
          gradient.addColorStop(1, '#e74c3c');
        } else {
          gradient.addColorStop(0, '#a1c4fd');
          gradient.addColorStop(1, '#3498db');
        }
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        ctx.fillStyle = 'white';
        ctx.font = '16px monospace';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(c.q > 0 ? '+' : '-', c.x, c.y);
      });
    };

    draw();

  }, [charges]);

  return (
    <TheoryLayout title="Electromagnetism" theoryContent={electroTheory}>
      <div className="electro-module">
        <div className="simulation-workspace luxury-card">
          <div className="canvas-container">
            <canvas ref={canvasRef} className="physics-canvas"></canvas>
          </div>

          <div className="controls-row">
            <button className="gold-btn" onClick={() => addCharge(1)} style={{ background: '#e74c3c' }}>
              <PlusCircle size={16} /> Add + Charge
            </button>
            <button className="gold-btn" onClick={() => addCharge(-1)} style={{ background: '#3498db' }}>
              <MinusCircle size={16} /> Add - Charge
            </button>
            <button className="reset-btn" onClick={() => setCharges([])} title="Clear Canvas">
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .electro-module { display: flex; flex-direction: column; gap: 24px; animation: fadeIn var(--transition-normal); padding: 12px;}
        .simulation-workspace { padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 24px; }
        .canvas-container { background: var(--color-base-alt); border-radius: var(--border-radius-sm); border: 1px solid rgba(90, 77, 65, 0.05); overflow: hidden; width: 100%; cursor: crosshair; }
        .physics-canvas { display: block; width: 100%; height: auto; }
        .controls-row { display: flex; gap: 16px; align-items: center; flex-wrap: wrap; justify-content: center;}
        .gold-btn { display: flex; align-items: center; gap: 8px; padding: 10px 20px; color: white; border-radius: var(--border-radius-full); font-size: 13px; font-weight: 500; box-shadow: var(--shadow-sm); cursor: pointer; border: none; transition: transform 0.2s;}
        .gold-btn:hover { transform: translateY(-2px); }
        .reset-btn { padding: 10px; border-radius: 50%; background: var(--color-base); color: var(--color-text-secondary); display: flex; align-items: center; justify-content: center; transition: var(--transition-fast); border: 1px solid rgba(90, 77, 65, 0.1); cursor: pointer;}
        .reset-btn:hover { background: var(--color-white); color: var(--color-text-primary); }
      `}</style>
    </TheoryLayout>
  );
};

export default ElectroModule;
