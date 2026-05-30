import React, { useState, Suspense, useMemo, useRef, useCallback, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float } from '@react-three/drei';
import { FunctionSquare, Atom, Zap, Layers, Triangle, Wind } from 'lucide-react';
import * as THREE from 'three';
import { Loader2, Wand2 } from 'lucide-react';

/* ─── debounce ─── */
function useDebounce<T>(value: T, delay: number): T {
  const [d, setD] = useState(value);
  useEffect(() => { const t = setTimeout(() => setD(value), delay); return () => clearTimeout(t); }, [value, delay]);
  return d;
}

/* ══════════════════════ MATH SCENES ══════════════════════ */

function buildSurface(eq: string, res: number, domain: number) {
  const geo = new THREE.PlaneGeometry(domain, domain, res, res);
  geo.rotateX(-Math.PI / 2);
  try {
    const safe = eq
      .replace(/\bsin\b/g,'Math.sin').replace(/\bcos\b/g,'Math.cos').replace(/\btan\b/g,'Math.tan')
      .replace(/\bsqrt\b/g,'Math.sqrt').replace(/\babs\b/g,'Math.abs')
      .replace(/\bexp\b/g,'Math.exp').replace(/\blog\b/g,'Math.log')
      .replace(/\bpi\b/gi,'Math.PI').replace(/\be\b/g,'Math.E').replace(/\^/g,'**');
    // eslint-disable-next-line no-new-func
    const fn = new Function('x','z',`"use strict";try{return +(${safe});}catch(e){return 0;}`);
    const pos = geo.getAttribute('position') as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const y = fn(pos.getX(i), pos.getZ(i));
      pos.setY(i, isFinite(y) ? Math.max(-7, Math.min(7, y)) : 0);
    }
    geo.computeVertexNormals();
  } catch { /**/ }
  return geo;
}

const PRESETS = [
  { label: 'sin+cos', eq: 'sin(x)+cos(z)' },
  { label: 'Saddle', eq: 'x*x-z*z' },
  { label: 'Ripple', eq: 'sin(sqrt(x*x+z*z))' },
  { label: 'Paraboloid', eq: '(x*x+z*z)/6' },
  { label: 'Peaks', eq: '3*(1-x)**2*exp(-(x**2)-(z+1)**2)-10*(x/5-x**3-z**5)*exp(-x**2-z**2)' },
];

function MathSurface({ eq }: { eq: string }) {
  const ref = useRef<THREE.Mesh>(null);
  const geo = useMemo(() => buildSurface(eq, 48, 12), [eq]);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = Math.sin(clock.elapsedTime * 0.3) * 0.07;
  });
  return (
    <group>
      <mesh ref={ref} geometry={geo} receiveShadow castShadow>
        <meshStandardMaterial color="#c9a84c" roughness={0.25} metalness={0.65} side={THREE.DoubleSide} />
      </mesh>
      <mesh geometry={geo}>
        <meshBasicMaterial color="#fff" wireframe transparent opacity={0.07} />
      </mesh>
    </group>
  );
}

/* Conic Sections */
function ConicScene({ type }: { type: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.3;
  });

  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    if (type === 'circle') {
      for (let t = 0; t <= Math.PI * 2; t += 0.05)
        pts.push(new THREE.Vector3(Math.cos(t) * 2, 0, Math.sin(t) * 2));
    } else if (type === 'ellipse') {
      for (let t = 0; t <= Math.PI * 2; t += 0.05)
        pts.push(new THREE.Vector3(Math.cos(t) * 3, 0, Math.sin(t) * 1.5));
    } else if (type === 'parabola') {
      for (let x = -3; x <= 3; x += 0.1)
        pts.push(new THREE.Vector3(x, 0, x * x * 0.5));
    } else {
      for (let t = -1.4; t <= 1.4; t += 0.05) {
        pts.push(new THREE.Vector3(Math.cosh(t) * 1.5, 0, Math.sinh(t) * 1.5));
        pts.push(new THREE.Vector3(-Math.cosh(t) * 1.5, 0, Math.sinh(t) * 1.5));
      }
    }
    return pts;
  }, [type]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry().setFromPoints(points);
    return g;
  }, [points]);

  return (
    <group ref={ref}>
      <primitive object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#c9a84c', linewidth: 2 }))} />
      {/* focal points */}
      {[[-1.3, 0, 0], [1.3, 0, 0]].map((p, i) => (
        <mesh key={i} position={p as [number,number,number]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.8} />
        </mesh>
      ))}
      <gridHelper args={[10, 20, '#333', '#222']} />
    </group>
  );
}

/* Vector field */
function VectorFieldScene({ fnStr }: { fnStr: string }) {
  const arrows = useMemo(() => {
    const list: { pos: [number,number,number]; dir: THREE.Vector3 }[] = [];
    let fn: (x: number, z: number) => [number, number];
    try {
      const safe = fnStr
        .replace(/\bsin\b/g,'Math.sin').replace(/\bcos\b/g,'Math.cos')
        .replace(/\bpi\b/gi,'Math.PI');
      // eslint-disable-next-line no-new-func
      fn = new Function('x','z',`"use strict";try{${safe}}catch(e){return [0,0];}`) as any;
    } catch {
      fn = (x, z) => [-z, x];
    }
    for (let x = -3; x <= 3; x += 1.5) {
      for (let z = -3; z <= 3; z += 1.5) {
        const [vx, vz] = fn(x, z) ?? [0, 0];
        const dir = new THREE.Vector3(vx, 0, vz).normalize();
        list.push({ pos: [x, 0, z], dir });
      }
    }
    return list;
  }, [fnStr]);

  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => { if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.15; });

  return (
    <group ref={ref}>
      <gridHelper args={[10, 14, '#333', '#222']} />
      {arrows.map(({ pos, dir }, i) => {
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0), dir.lengthSq() > 0.001 ? dir : new THREE.Vector3(0,1,0));
        return (
          <group key={i} position={pos} quaternion={quat}>
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.04, 0.04, 0.6, 8]} />
              <meshStandardMaterial color="#3b82f6" />
            </mesh>
            <mesh position={[0, 0.65, 0]}>
              <coneGeometry args={[0.1, 0.25, 8]} />
              <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.4} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/* ══════════════════════ CHEMISTRY SCENES ══════════════════════ */

function Bond({ from, to, color = '#888' }: { from:[number,number,number]; to:[number,number,number]; color?:string }) {
  const dx=to[0]-from[0], dy=to[1]-from[1], dz=to[2]-from[2];
  const len=Math.sqrt(dx*dx+dy*dy+dz*dz);
  const mid:THREE.Vector3 = new THREE.Vector3((from[0]+to[0])/2,(from[1]+to[1])/2,(from[2]+to[2])/2);
  const dir=new THREE.Vector3(dx,dy,dz).normalize();
  const axis=new THREE.Vector3(0,1,0).cross(dir).normalize();
  const angle=Math.acos(Math.max(-1,Math.min(1,new THREE.Vector3(0,1,0).dot(dir))));
  const quat=new THREE.Quaternion().setFromAxisAngle(axis.lengthSq()<0.001?new THREE.Vector3(1,0,0):axis,angle);
  return (
    <mesh position={mid.toArray() as [number,number,number]} quaternion={quat}>
      <cylinderGeometry args={[0.07,0.07,len,10]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.4} />
    </mesh>
  );
}

const METHANE_H: [number,number,number][] = [[0,1.55,0],[1.46,-0.52,0],[-0.73,-0.52,1.26],[-0.73,-0.52,-1.26]];
const BENZENE: [number,number,number][] = Array.from({length:6},(_,i)=>{
  const a=(i/6)*Math.PI*2; return [Math.cos(a)*1.4,0,Math.sin(a)*1.4] as [number,number,number];
});

function ChemScene({ type }: { type: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_,dt) => { if(ref.current){ ref.current.rotation.y+=dt*0.35; ref.current.rotation.x+=dt*0.06; }});

  if (type === 'methane') return (
    <group ref={ref}>
      <mesh><sphereGeometry args={[0.42,32,32]}/><meshStandardMaterial color="#555" metalness={0.5} roughness={0.2}/></mesh>
      {METHANE_H.map((p,i)=>(
        <group key={i}>
          <mesh position={p}><sphereGeometry args={[0.25,24,24]}/><meshStandardMaterial color="#e8e8ff" roughness={0.4}/></mesh>
          <Bond from={[0,0,0]} to={p} color="#888"/>
        </group>
      ))}
    </group>
  );

  if (type === 'benzene') return (
    <group ref={ref} rotation={[Math.PI/2,0,0]}>
      {BENZENE.map((p,i)=>(
        <group key={i}>
          <mesh position={p}><sphereGeometry args={[0.28,24,24]}/><meshStandardMaterial color="#444" metalness={0.6} roughness={0.2}/></mesh>
          <Bond from={p} to={BENZENE[(i+1)%6]} color="#c9a84c"/>
          <mesh position={[p[0]*1.65,p[1],p[2]*1.65] as [number,number,number]}>
            <sphereGeometry args={[0.16,16,16]}/><meshStandardMaterial color="#dde" roughness={0.5}/>
          </mesh>
        </group>
      ))}
      <mesh><torusGeometry args={[0.9,0.04,8,60]}/><meshBasicMaterial color="#c9a84c" transparent opacity={0.5}/></mesh>
    </group>
  );

  if (type === 'water') {
    const O:[number,number,number]=[0,0,0];
    const H1:[number,number,number]=[-0.96,0.58,0];
    const H2:[number,number,number]=[0.96,0.58,0];
    return (
      <group ref={ref}>
        <mesh position={O}><sphereGeometry args={[0.45,32,32]}/><meshStandardMaterial color="#ef4444" roughness={0.2} metalness={0.3}/></mesh>
        <mesh position={H1}><sphereGeometry args={[0.28,24,24]}/><meshStandardMaterial color="#e8e8ff" roughness={0.4}/></mesh>
        <mesh position={H2}><sphereGeometry args={[0.28,24,24]}/><meshStandardMaterial color="#e8e8ff" roughness={0.4}/></mesh>
        <Bond from={O} to={H1} color="#888"/>
        <Bond from={O} to={H2} color="#888"/>
      </group>
    );
  }

  // CO2: linear
  const C:[number,number,number]=[0,0,0];
  const O1:[number,number,number]=[-1.16,0,0];
  const O2:[number,number,number]=[1.16,0,0];
  return (
    <group ref={ref}>
      <mesh position={C}><sphereGeometry args={[0.36,32,32]}/><meshStandardMaterial color="#555" metalness={0.5} roughness={0.2}/></mesh>
      <mesh position={O1}><sphereGeometry args={[0.38,32,32]}/><meshStandardMaterial color="#ef4444" roughness={0.2}/></mesh>
      <mesh position={O2}><sphereGeometry args={[0.38,32,32]}/><meshStandardMaterial color="#ef4444" roughness={0.2}/></mesh>
      <Bond from={[-0.1,0.08,0]} to={[-1.06,0.08,0]} color="#c9a84c"/>
      <Bond from={[-0.1,-0.08,0]} to={[-1.06,-0.08,0]} color="#c9a84c"/>
      <Bond from={[0.1,0.08,0]} to={[1.06,0.08,0]} color="#c9a84c"/>
      <Bond from={[0.1,-0.08,0]} to={[1.06,-0.08,0]} color="#c9a84c"/>
    </group>
  );
}

/* ══════════════════════ PHYSICS SCENES ══════════════════════ */

function MagneticScene() {
  const ref = useRef<THREE.Group>(null);
  useFrame(({clock}) => { if(ref.current) ref.current.rotation.y=clock.elapsedTime*0.25; });
  return (
    <group ref={ref}>
      {Array.from({length:12},(_,i)=>(
        <mesh key={i} position={[0,(i-5.5)*0.28,0]} rotation={[Math.PI/2,0,0]}>
          <torusGeometry args={[1.2,0.06,16,64]}/>
          <meshStandardMaterial color="#c9a84c" metalness={0.9} roughness={0.1}/>
        </mesh>
      ))}
      {[0.4,0.75,1.1].map((r,i)=>(
        <mesh key={i} rotation={[Math.PI/2,0,0]} scale={r}>
          <torusGeometry args={[1.6,0.015,8,80]}/>
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.25-i*0.05}/>
        </mesh>
      ))}
      <mesh>
        <cylinderGeometry args={[0.22,0.22,3.2,24]}/>
        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.9} transparent opacity={0.4}/>
      </mesh>
      <Float speed={3} floatIntensity={0.6} rotationIntensity={1.5}>
        <mesh><octahedronGeometry args={[0.35,0]}/><meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.7}/></mesh>
      </Float>
    </group>
  );
}

function WaveScene() {
  const geo = useMemo(()=>new THREE.PlaneGeometry(14,14,60,60),[]);
  useFrame(({clock})=>{
    const t=clock.elapsedTime;
    const pos=geo.getAttribute('position') as THREE.BufferAttribute;
    for(let i=0;i<pos.count;i++){
      const x=pos.getX(i),z=pos.getZ(i);
      pos.setY(i,Math.sin(Math.sqrt(x*x+z*z)*1.2-t*2.5)*Math.exp(-Math.sqrt(x*x+z*z)*0.15)*1.5);
    }
    pos.needsUpdate=true; geo.computeVertexNormals();
  });
  return (
    <group rotation={[-Math.PI/2,0,0]} position={[0,-0.5,0]}>
      <mesh geometry={geo}><meshStandardMaterial color="#3b82f6" roughness={0.1} metalness={0.5} side={THREE.DoubleSide}/></mesh>
      <mesh geometry={geo}><meshBasicMaterial color="#93c5fd" wireframe transparent opacity={0.12}/></mesh>
    </group>
  );
}

function ProjectileScene({ v0Str, angleDegStr }: { v0Str: string; angleDegStr: string }) {
  const v0 = Math.max(1, Math.min(20, parseFloat(v0Str) || 10));
  const angleDeg = Math.max(5, Math.min(85, parseFloat(angleDegStr) || 45));
  const angle = (angleDeg * Math.PI) / 180;
  const g = 9.8;
  const tTotal = (2 * v0 * Math.sin(angle)) / g;
  const range = v0 * Math.cos(angle) * tTotal;

  const curve = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const steps = 60;
    for (let i = 0; i <= steps; i++) {
      const t = (i / steps) * tTotal;
      const x = v0 * Math.cos(angle) * t - range / 2;
      const y = v0 * Math.sin(angle) * t - 0.5 * g * t * t;
      pts.push(new THREE.Vector3(x * 0.35, y * 0.35, 0));
    }
    return new THREE.CatmullRomCurve3(pts);
  }, [v0, angle, tTotal, range]);

  const tubeGeo = useMemo(() => new THREE.TubeGeometry(curve, 60, 0.05, 8, false), [curve]);

  const ballRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);
  useFrame((_,dt) => {
    t.current = (t.current + dt * 0.5) % tTotal;
    const frac = t.current / tTotal;
    const pt = curve.getPoint(frac);
    if (ballRef.current) ballRef.current.position.copy(pt);
  });

  return (
    <group>
      <mesh geometry={tubeGeo}>
        <meshStandardMaterial color="#c9a84c" roughness={0.3} metalness={0.5}/>
      </mesh>
      <mesh ref={ballRef}>
        <sphereGeometry args={[0.18,24,24]}/>
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5}/>
      </mesh>
      <gridHelper args={[12,20,'#333','#222']} position={[0,-0.05,0]}/>
    </group>
  );
}

function SHMScene() {
  const ballRef = useRef<THREE.Mesh>(null);
  const springLines = useRef<THREE.Line>(null);
  useFrame(({clock})=>{
    const t=clock.elapsedTime;
    const x=Math.cos(t*2)*2.5;
    if(ballRef.current) ballRef.current.position.x=x;
    if(springLines.current){
      const pts:THREE.Vector3[]=[];
      const n=24;
      for(let i=0;i<=n;i++){
        const frac=i/n;
        const sx=-3.5+frac*(x+3.5);
        const sy=Math.sin(frac*Math.PI*6)*0.3*(1-Math.abs(frac-0.5));
        pts.push(new THREE.Vector3(sx,sy,0));
      }
      const geo=springLines.current.geometry as THREE.BufferGeometry;
      geo.setFromPoints(pts);
      geo.computeBoundingSphere();
    }
  });
  return (
    <group>
      {/* Wall */}
      <mesh position={[-3.8,0,0]}>
        <boxGeometry args={[0.3,2,0.3]}/>
        <meshStandardMaterial color="#555" metalness={0.5}/>
      </mesh>
      {/* Spring line */}
      <primitive object={new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-3.5,0,0),new THREE.Vector3(0,0,0)]),
        new THREE.LineBasicMaterial({color:'#c9a84c',linewidth:2})
      )} ref={springLines}/>
      {/* Ball */}
      <mesh ref={ballRef} position={[2.5,0,0]}>
        <sphereGeometry args={[0.4,32,32]}/>
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.4} roughness={0.2} metalness={0.5}/>
      </mesh>
      {/* Equilibrium line */}
      <primitive object={new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,-1.5,0),new THREE.Vector3(0,1.5,0)]),
        new THREE.LineDashedMaterial({color:'#444',dashSize:0.2,gapSize:0.15})
      )}/>
      <gridHelper args={[10,20,'#333','#222']}/>
    </group>
  );
}

/* ══════════════════════ MAIN COMPONENT ══════════════════════ */
type Mode = 'math' | 'chemistry' | 'physics';

const MATH_MODES = [
  { id: 'surface', label: 'Surface f(x,z)' },
  { id: 'conic', label: 'Conic Sections' },
  { id: 'vector', label: 'Vector Field' },
];
const CHEM_MODES = [
  { id: 'methane', label: 'Methane CH₄' },
  { id: 'benzene', label: 'Benzene C₆H₆' },
  { id: 'water', label: 'Water H₂O' },
  { id: 'co2', label: 'Carbon Dioxide' },
];
const PHYS_MODES = [
  { id: 'magnetic', label: 'Magnetic Field' },
  { id: 'wave', label: 'Wave Propagation' },
  { id: 'projectile', label: 'Projectile Motion' },
  { id: 'shm', label: 'Simple Harmonic Motion' },
];
const CONIC_TYPES = ['circle','ellipse','parabola','hyperbola'];

const DESCRIPTIONS: Record<string, string> = {
  surface: 'Type any function f(x,z). Supported: sin, cos, tan, sqrt, abs, exp, log, pi, e, **. Graph rebuilds 400 ms after you stop typing.',
  conic: 'Conic sections are the intersections of a plane with a cone. Red dots mark the focal points. Circle: e=0, Ellipse: 0<e<1, Parabola: e=1, Hyperbola: e>1.',
  vector: 'Enter two component functions: return [vx(x,z), vz(x,z)]. Each arrow shows the direction and magnitude of the field at that point.',
  methane: 'Methane (CH\u2084) \u2014 sp\u00b3 hybridization. The four C\u2013H bonds point to the corners of a tetrahedron (109.5\u00b0) to minimize electron repulsion (VSEPR).',
  benzene: 'Benzene (C\u2086H\u2086) \u2014 sp\u00b2 hybridization. The gold ring represents the delocalized \u03c0 electron cloud satisfying Huckel\'s rule (6 \u03c0-electrons, n=1).',
  water: 'Water (H\u2082O) \u2014 sp\u00b3 hybridization but bent geometry (104.5\u00b0). The two lone pairs push the H\u2013O\u2013H bond angle below the tetrahedral ideal.',
  co2: 'Carbon dioxide (CO\u2082) \u2014 sp hybridization. Two double bonds (shown as double cylinders) force a perfectly linear geometry (180\u00b0).',
  magnetic: 'A solenoid generates a uniform field inside its core. Blue rings show the toroidal magnetic flux lines following Ampere\'s circuital law.',
  wave: 'A radial wave y = sin(r \u2212 t) \u00b7 e^(\u2212\u03b1r). Amplitude decays with distance as energy spreads outward (inverse square law).',
  projectile: 'Projectile launched at angle \u03b8 with speed v\u2080. The red ball follows the parabolic arc y = v\u2080sin(\u03b8)t \u2212 \u00bdgt\u00b2. Drag is ignored.',
  shm: 'Simple harmonic motion: x(t) = A\u00b7cos(\u03c9t). The spring pulls the blue ball back toward equilibrium with restoring force F = \u2212kx.',
};

const Visualizer3D: React.FC = () => {
  const [mode, setMode] = useState<Mode>('math');
  const [mathSub, setMathSub] = useState('surface');
  const [chemSub, setChemSub] = useState('benzene');
  const [physSub, setPhysSub] = useState('magnetic');
  const [conicType, setConicType] = useState('circle');

  // Editable params
  const [rawEq, setRawEq] = useState('sin(x)+cos(z)');
  const [rawVec, setRawVec] = useState('return [-z, x];');
  const [rawV0, setRawV0] = useState('10');
  const [rawAngle, setRawAngle] = useState('45');

  // AI Prompt
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAiGenerate = () => {
    if (!aiPrompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const p = aiPrompt.toLowerCase();
      if (p.includes('methane') || p.includes('ch4')) { setMode('chemistry'); setChemSub('methane'); }
      else if (p.includes('benzene') || p.includes('c6h6')) { setMode('chemistry'); setChemSub('benzene'); }
      else if (p.includes('water') || p.includes('h2o')) { setMode('chemistry'); setChemSub('water'); }
      else if (p.includes('co2') || p.includes('carbon dioxide')) { setMode('chemistry'); setChemSub('co2'); }
      else if (p.includes('magnetic') || p.includes('magnet')) { setMode('physics'); setPhysSub('magnetic'); }
      else if (p.includes('wave')) { setMode('physics'); setPhysSub('wave'); }
      else if (p.includes('projectile') || p.includes('throw')) { setMode('physics'); setPhysSub('projectile'); }
      else if (p.includes('shm') || p.includes('harmonic') || p.includes('spring')) { setMode('physics'); setPhysSub('shm'); }
      else if (p.includes('vector') || p.includes('field')) { setMode('math'); setMathSub('vector'); }
      else if (p.includes('conic') || p.includes('circle') || p.includes('ellipse')) { setMode('math'); setMathSub('conic'); }
      else { 
        setMode('math'); setMathSub('surface'); 
        const match = p.match(/(?:graph|plot)\s+([^a-zA-Z]*[a-zA-Z].*)/);
        if (match) setRawEq(match[1].trim());
      }
      setIsGenerating(false);
      setAiPrompt('');
    }, 800);
  };

  const eq = useDebounce(rawEq, 400);
  const vecFn = useDebounce(rawVec, 500);
  const v0 = useDebounce(rawV0, 300);
  const angleDeg = useDebounce(rawAngle, 300);

  const descKey = mode === 'math' ? mathSub : mode === 'chemistry' ? chemSub : physSub;

  const subModes = mode === 'math' ? MATH_MODES : mode === 'chemistry' ? CHEM_MODES : PHYS_MODES;
  const activeSub = mode === 'math' ? mathSub : mode === 'chemistry' ? chemSub : physSub;
  const setActiveSub = mode === 'math' ? setMathSub : mode === 'chemistry' ? setChemSub : setPhysSub;

  return (
    <div className="vis-root anim-fade">
      {/* Header */}
      <div className="vis-header">
        <div>
          <h1 className="vis-title">3D Interactive Visualizer</h1>
          <p className="vis-subtitle">Explore maths, chemistry and physics in real time</p>
        </div>
        <div className="vis-tab-bar">
          {([['math','Calculus & Geometry', FunctionSquare],['chemistry','Chemistry', Atom],['physics','Physics', Zap]] as const).map(([id,label,Icon])=>(
            <button key={id} className={`vis-tab ${mode===id?'active':''}`} onClick={()=>setMode(id)}>
              <Icon size={14}/>{label}
            </button>
          ))}
        </div>
      </div>

      {/* AI Generation Bar */}
      <div className="vis-ai-bar luxury-card">
        <Wand2 size={16} className="text-gold-gradient" />
        <input 
          type="text" 
          value={aiPrompt}
          onChange={e => setAiPrompt(e.target.value)}
          placeholder="Describe what you want to visualize (e.g. 'show me a methane molecule' or 'graph x*x-z*z')"
          onKeyDown={e => { if (e.key === 'Enter') handleAiGenerate(); }}
          disabled={isGenerating}
        />
        <button onClick={handleAiGenerate} disabled={!aiPrompt.trim() || isGenerating}>
          {isGenerating ? <Loader2 size={14} className="spinner" /> : 'Generate'}
        </button>
      </div>

      {/* Sub-mode chips */}
      <div className="vis-sub-bar">
        {subModes.map(m=>(
          <button key={m.id} className={`vis-chip ${activeSub===m.id?'active':''}`} onClick={()=>setActiveSub(m.id)}>
            {m.label}
          </button>
        ))}
      </div>

      {/* Conic sub-selector */}
      {mode==='math' && mathSub==='conic' && (
        <div className="vis-sub-bar">
          {CONIC_TYPES.map(t=>(
            <button key={t} className={`vis-chip small ${conicType===t?'active':''}`} onClick={()=>setConicType(t)}>
              {t.charAt(0).toUpperCase()+t.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* Canvas */}
      <div className="vis-canvas-wrap">
        <div className="vis-hint"><Layers size={13}/><span>Drag · Scroll · Pinch</span></div>

        {/* Editable inputs overlay */}
        {mode==='math' && mathSub==='surface' && (
          <div className="vis-input-bar">
            <span className="vis-eq-label">f(x,z) =</span>
            <input className="vis-eq-input" value={rawEq} onChange={e=>setRawEq(e.target.value)} spellCheck={false} placeholder="sin(x)+cos(z)"/>
          </div>
        )}
        {mode==='math' && mathSub==='surface' && (
          <div className="vis-presets">
            {PRESETS.map(p=>(
              <button key={p.eq} className={`vis-chip small ${rawEq===p.eq?'active':''}`} onClick={()=>setRawEq(p.eq)}>{p.label}</button>
            ))}
          </div>
        )}
        {mode==='math' && mathSub==='vector' && (
          <div className="vis-input-bar">
            <span className="vis-eq-label">field:</span>
            <input className="vis-eq-input wide" value={rawVec} onChange={e=>setRawVec(e.target.value)} spellCheck={false} placeholder="return [-z, x];"/>
          </div>
        )}
        {mode==='physics' && physSub==='projectile' && (
          <div className="vis-input-bar">
            <span className="vis-eq-label">v₀ (m/s):</span>
            <input className="vis-eq-input narrow" value={rawV0} onChange={e=>setRawV0(e.target.value)} type="number" min="1" max="20"/>
            <span className="vis-eq-label" style={{marginLeft:12}}>angle (°):</span>
            <input className="vis-eq-input narrow" value={rawAngle} onChange={e=>setRawAngle(e.target.value)} type="number" min="5" max="85"/>
          </div>
        )}

        <Canvas
          camera={{ position: [6, 5, 6], fov: 48 }}
          shadows
          dpr={[1, 1.5]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
        >
          <ambientLight intensity={0.6}/>
          <spotLight position={[10,12,8]} angle={0.2} penumbra={1} intensity={1.4} castShadow shadow-mapSize={1024}/>
          <pointLight position={[-8,-6,-8]} intensity={0.4}/>

          <Suspense fallback={null}>
            {mode==='math' && mathSub==='surface' && <group position={[0,-1.5,0]}><MathSurface eq={eq}/><gridHelper args={[20,30,'#333','#222']} position={[0,-0.05,0]}/></group>}
            {mode==='math' && mathSub==='conic' && <ConicScene type={conicType}/>}
            {mode==='math' && mathSub==='vector' && <VectorFieldScene fnStr={vecFn}/>}

            {mode==='chemistry' && (chemSub==='methane'||chemSub==='benzene'||chemSub==='water'||chemSub==='co2') && (
              <group>
                <ChemScene type={chemSub}/>
                <ContactShadows position={[0,-2.5,0]} opacity={0.3} scale={10} blur={2.5} far={4}/>
              </group>
            )}

            {mode==='physics' && physSub==='magnetic' && <MagneticScene/>}
            {mode==='physics' && physSub==='wave' && <WaveScene/>}
            {mode==='physics' && physSub==='projectile' && <ProjectileScene v0Str={v0} angleDegStr={angleDeg}/>}
            {mode==='physics' && physSub==='shm' && <SHMScene/>}

            <Environment preset="city"/>
          </Suspense>

          <OrbitControls
            enablePan enableZoom enableRotate
            autoRotate={mode==='chemistry'}
            autoRotateSpeed={0.6}
            dampingFactor={0.07}
            enableDamping
            minDistance={2} maxDistance={22}
          />
        </Canvas>
      </div>

      {/* Description */}
      <div className="vis-desc luxury-card">
        <p className="vis-desc-text">{DESCRIPTIONS[descKey]}</p>
      </div>

      <style>{`
        .vis-root{display:flex;flex-direction:column;gap:18px;padding:20px 0;}
        .vis-header{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:14px;}
        .vis-title{font-family:var(--font-serif);font-size:24px;font-weight:700;color:var(--color-text-primary);margin:0 0 3px;}
        .vis-subtitle{font-size:13px;color:var(--color-text-secondary);margin:0;}
        .vis-tab-bar{display:flex;gap:6px;background:var(--color-base-alt);padding:5px;border-radius:var(--border-radius-full);border:var(--border-soft);}
        .vis-tab{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:20px;background:transparent;color:var(--color-text-secondary);font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;border:none;}
        .vis-tab:hover{color:var(--color-text-primary);}
        .vis-tab.active{background:var(--color-surface);color:var(--color-accent);box-shadow:var(--shadow-sm);}
        
        .vis-ai-bar{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;margin-bottom:4px;}
        .vis-ai-bar input{flex:1;background:transparent;border:none;color:var(--color-text-primary);font-size:14px;outline:none;}
        .vis-ai-bar button{padding:6px 16px;border-radius:20px;background:rgba(201,168,76,0.1);color:var(--color-accent);font-weight:700;font-size:13px;border:none;cursor:pointer;display:flex;align-items:center;gap:6px;}
        .vis-ai-bar button:hover:not(:disabled){background:rgba(201,168,76,0.2);}
        .vis-ai-bar button:disabled{opacity:0.5;cursor:not-allowed;}
        
        .vis-sub-bar{display:flex;gap:7px;flex-wrap:wrap;}
        .vis-chip{padding:6px 13px;border-radius:20px;background:var(--color-base-alt);border:var(--border-soft);color:var(--color-text-secondary);font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;}
        .vis-chip.small{padding:4px 10px;font-size:12px;}
        .vis-chip:hover{color:var(--color-text-primary);}
        .vis-chip.active{background:rgba(201,168,76,0.15);border-color:var(--color-accent);color:var(--color-accent);}
        .vis-canvas-wrap{width:100%;height:500px;position:relative;background:linear-gradient(135deg,#0d0d1a 0%,#0a1628 100%);border-radius:var(--border-radius-lg);overflow:hidden;border:var(--border-soft);}
        @media(max-width:600px){.vis-canvas-wrap{height:340px;}}
        .vis-hint{position:absolute;top:14px;left:18px;z-index:10;display:flex;align-items:center;gap:6px;color:rgba(255,255,255,0.4);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.8px;pointer-events:none;}
        .vis-input-bar{position:absolute;top:12px;right:14px;z-index:10;display:flex;align-items:center;gap:8px;background:rgba(0,0,0,0.55);backdrop-filter:blur(10px);padding:9px 16px;border-radius:11px;border:1px solid rgba(201,168,76,0.3);}
        .vis-eq-label{color:var(--color-accent);font-family:var(--font-serif);font-size:15px;font-style:italic;font-weight:600;white-space:nowrap;}
        .vis-eq-input{background:transparent;border:none;color:#fff;font-family:monospace;font-size:14px;width:180px;outline:none;}
        .vis-eq-input.wide{width:220px;}
        .vis-eq-input.narrow{width:60px;}
        @media(max-width:600px){.vis-input-bar{top:auto;bottom:12px;right:8px;left:8px;}.vis-eq-input,.vis-eq-input.wide{width:100%;}}
        .vis-presets{position:absolute;bottom:14px;left:14px;z-index:10;display:flex;gap:5px;flex-wrap:wrap;}
        @media(max-width:600px){.vis-presets{display:none;}}
        .vis-desc{padding:18px 26px;}
        .vis-desc-text{font-size:14px;color:var(--color-text-secondary);line-height:1.7;margin:0;}
      `}</style>
    </div>
  );
};

export default Visualizer3D;
