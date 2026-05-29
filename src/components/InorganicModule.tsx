import React, { useEffect, useRef, useState } from 'react';
import { Box } from 'lucide-react';
import TheoryLayout from './TheoryLayout';

const inorganicTheory = `
# Inorganic Chemistry: Crystal Lattices

In solid-state chemistry, a crystal lattice is a highly ordered, repeating 3D arrangement of atoms or molecules.

## Unit Cells

The smallest repeating unit of a crystal lattice is called the **unit cell**. By repeating this unit cell in three dimensions, the entire crystal can be constructed.

### Common Cubic Structures

1. **Simple Cubic (SC):**
   Atoms are located only at the corners of the cube.
   * Atoms per unit cell: $8 \\times \\frac{1}{8} = 1$
   * Packing efficiency: $52.4\\%$

2. **Body-Centered Cubic (BCC):**
   Atoms at all corners, plus one completely inside the center.
   * Atoms per unit cell: $8 \\times \\frac{1}{8} + 1 = 2$
   * Packing efficiency: $68.0\\%$

3. **Face-Centered Cubic (FCC):**
   Atoms at all corners, plus one in the center of each face.
   * Atoms per unit cell: $8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 4$
   * Packing efficiency: $74.0\\%$ (Maximum possible for spheres)

Use the interactive 3D viewer to rotate and inspect these fundamental unit cells. Notice how the atoms are arranged to maximize packing efficiency in BCC and FCC compared to Simple Cubic.
`;

const InorganicModule: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [latticeType, setLatticeType] = useState<'SC' | 'BCC' | 'FCC'>('FCC');
  const [rotation, setRotation] = useState({ x: 0.5, y: 0.5 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Define vertices of a cube centered at 0,0,0
    const s = 100; // half-size
    const vertices = [
      [-s, -s, -s], [ s, -s, -s], [ s,  s, -s], [-s,  s, -s],
      [-s, -s,  s], [ s, -s,  s], [ s,  s,  s], [-s,  s,  s]
    ];

    const edges = [
      [0,1], [1,2], [2,3], [3,0],
      [4,5], [5,6], [6,7], [7,4],
      [0,4], [1,5], [2,6], [3,7]
    ];

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      // Create rotation matrices
      const cosX = Math.cos(rotation.x);
      const sinX = Math.sin(rotation.x);
      const cosY = Math.cos(rotation.y);
      const sinY = Math.sin(rotation.y);

      const project = (point: number[]) => {
        let x = point[0];
        let y = point[1];
        let z = point[2];

        // Rotate Y
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;
        
        // Rotate X
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        // Perspective projection
        const fov = 400;
        const scale = fov / (fov + z2);

        return {
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          scale: scale
        };
      };

      // Draw Edges
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(90, 77, 65, 0.4)';
      ctx.lineWidth = 2;
      edges.forEach(edge => {
        const p1 = project(vertices[edge[0]]);
        const p2 = project(vertices[edge[1]]);
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
      });
      ctx.stroke();

      // Collect atoms to draw based on lattice type
      let atoms: number[][] = [];
      
      // Corners (All types have this)
      atoms.push(...vertices);

      // Body Center
      if (latticeType === 'BCC') {
        atoms.push([0, 0, 0]);
      }

      // Face Centers
      if (latticeType === 'FCC') {
        atoms.push([0, 0, -s], [0, 0, s]); // Front/Back
        atoms.push([-s, 0, 0], [s, 0, 0]); // Left/Right
        atoms.push([0, -s, 0], [0, s, 0]); // Top/Bottom
      }

      // Project and sort by Z to draw back-to-front
      const projectedAtoms = atoms.map(a => project(a)).sort((a, b) => b.z - a.z);

      // Draw Atoms
      projectedAtoms.forEach(atom => {
        ctx.beginPath();
        // Use a gradient for a 3D sphere look
        const grad = ctx.createRadialGradient(
          atom.x - 5*atom.scale, atom.y - 5*atom.scale, 0,
          atom.x, atom.y, 20*atom.scale
        );
        grad.addColorStop(0, '#f1c40f');
        grad.addColorStop(1, '#d35400');
        
        ctx.fillStyle = grad;
        ctx.arc(atom.x, atom.y, 20 * atom.scale, 0, Math.PI * 2);
        ctx.fill();
        
        // Specular highlight
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.arc(atom.x - 6*atom.scale, atom.y - 6*atom.scale, 5 * atom.scale, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationRef.current);
  }, [latticeType, rotation]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => { isDragging.current = false; };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastMousePos.current.x;
    const dy = e.clientY - lastMousePos.current.y;
    setRotation({
      x: rotation.x + dy * 0.01,
      y: rotation.y + dx * 0.01
    });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <TheoryLayout title="Inorganic Chemistry" theoryContent={inorganicTheory}>
      <div className="simulator-header">
        <div className="header-title">
          <Box size={20} className="text-gold-gradient" />
          <h3>3D Crystal Lattice Viewer</h3>
        </div>
        <p className="simulator-desc">
          Click and drag to rotate the unit cell. Select different lattice structures below to see how atoms pack in 3D space.
        </p>
      </div>

      <div className="canvas-container">
        <canvas 
          ref={canvasRef} 
          width={600} 
          height={400} 
          className="physics-canvas"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ cursor: 'grab' }}
        />
        <div className="overlay-stats">
          <div className="stat-pill">
            <span className="stat-label">Drag to rotate</span>
          </div>
        </div>
      </div>

      <div className="controls-panel luxury-card mt-4">
        <div className="presets-grid">
          <button className={`gold-btn outline ${latticeType === 'SC' ? 'active' : ''}`} onClick={() => setLatticeType('SC')}>Simple Cubic</button>
          <button className={`gold-btn outline ${latticeType === 'BCC' ? 'active' : ''}`} onClick={() => setLatticeType('BCC')}>Body-Centered (BCC)</button>
          <button className={`gold-btn outline ${latticeType === 'FCC' ? 'active' : ''}`} onClick={() => setLatticeType('FCC')}>Face-Centered (FCC)</button>
        </div>
      </div>

      <style>{`
        .simulator-header { padding: 24px 32px; background: var(--color-white); border-bottom: 1px solid rgba(90, 77, 65, 0.1); }
        .header-title { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .header-title h3 { font-family: var(--font-primary); font-size: 20px; font-weight: 500; }
        .simulator-desc { font-size: 14px; color: var(--color-text-secondary); line-height: 1.6; }
        
        .canvas-container { position: relative; width: 100%; height: 400px; background: var(--color-base); overflow: hidden; display: flex; justify-content: center; align-items: center;}
        .physics-canvas { max-width: 100%; height: 100%; box-shadow: inset 0 0 20px rgba(0,0,0,0.02); }
        .physics-canvas:active { cursor: grabbing !important; }
        
        .overlay-stats { position: absolute; top: 20px; left: 20px; display: flex; flex-direction: column; gap: 10px; pointer-events: none;}
        .stat-pill { background: rgba(255, 255, 255, 0.9); backdrop-filter: blur(4px); padding: 8px 16px; border-radius: 20px; border: 1px solid rgba(212, 175, 55, 0.2); display: flex; gap: 8px; font-size: 13px; box-shadow: var(--shadow-sm); }
        .stat-label { color: var(--color-accent); font-weight: 500;}
        
        .controls-panel { padding: 32px; margin: 24px; border-radius: var(--border-radius-md); display: flex; flex-direction: column; gap: 24px; }
        
        .presets-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        
        .gold-btn { padding: 12px 16px; border-radius: 6px; font-size: 13px; font-weight: 500; cursor: pointer; transition: all var(--transition-fast); text-align: center;}
        .gold-btn.outline { background: transparent; border: 1px solid var(--color-accent); color: var(--color-accent); }
        .gold-btn.outline:hover, .gold-btn.outline.active { background: var(--color-accent); color: white; box-shadow: var(--shadow-md);}
      `}</style>
    </TheoryLayout>
  );
};

export default InorganicModule;
