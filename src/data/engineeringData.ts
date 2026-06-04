import { FileWarning } from 'lucide-react'; // Placeholder icon imports

export interface EngineeringTopic {
  id: string;
  title: string;
  isCompleted?: boolean;
}

export interface EngineeringBranch {
  id: string;
  title: string;
  description: string;
  color: string;
  topics: EngineeringTopic[];
}

export const ENGINEERING_BRANCHES: Record<string, EngineeringBranch> = {
  'engineering-maths': {
    id: 'engineering-maths',
    title: 'Engineering Mathematics',
    description: 'The rigorous mathematical foundation required for all applied physical sciences and modeling.',
    color: '#8b5cf6', // Purple
    topics: [
      { id: 'eng-math-1', title: 'Limits & Continuity' },
      { id: 'eng-math-2', title: 'Differentiation & Derivatives' },
      { id: 'eng-math-3', title: 'Integration Techniques' },
      { id: 'eng-math-4', title: 'Applications of Integration' },
      { id: 'eng-math-5', title: 'Sequences & Power Series' },
      { id: 'eng-math-6', title: 'Partial Derivatives & Gradients' },
      { id: 'eng-math-7', title: 'Multiple Integrals' },
      { id: 'eng-math-8', title: 'Vector Calculus' },
      { id: 'eng-math-9', title: 'The Great Vector Theorems' },
      { id: 'eng-math-10', title: 'First-Order ODEs' },
      { id: 'eng-math-11', title: 'Second-Order Linear ODEs' },
      { id: 'eng-math-12', title: 'The Laplace Transform' },
      { id: 'eng-math-13', title: 'Systems of Linear ODEs' },
      { id: 'eng-math-14', title: 'Series Solutions of ODEs' },
      { id: 'eng-math-15', title: 'Fourier Series & Transforms' },
      { id: 'eng-math-16', title: 'Partial Differential Equations (PDEs)' },
      { id: 'eng-math-17', title: 'Vector Algebra & 3D Geometry' },
      { id: 'eng-math-18', title: 'Matrix Operations & Determinants' },
      { id: 'eng-math-19', title: 'Systems of Linear Equations' },
      { id: 'eng-math-20', title: 'Vector Spaces & Subspaces' },
      { id: 'eng-math-21', title: 'Eigenvalues & Eigenvectors' },
      { id: 'eng-math-22', title: 'Diagonalization & Orthogonality' },
      { id: 'eng-math-23', title: 'Complex Numbers & Algebra' },
      { id: 'eng-math-24', title: 'Analytic Functions' },
      { id: 'eng-math-25', title: 'Complex Integration' },
      { id: 'eng-math-26', title: 'Residue Calculus' },
      { id: 'eng-math-27', title: 'Conformal Mapping' },
      { id: 'eng-math-28', title: 'Probability Theory Basics' },
      { id: 'eng-math-29', title: 'Discrete & Continuous Distributions' },
      { id: 'eng-math-30', title: 'The Central Limit Theorem' },
      { id: 'eng-math-31', title: 'Statistical Inference' },
      { id: 'eng-math-32', title: 'Linear Regression' },
      { id: 'eng-math-33', title: 'Reliability Engineering' },
      { id: 'eng-math-34', title: 'Numerical Root Finding' },
      { id: 'eng-math-35', title: 'Numerical Interpolation & Integration' },
      { id: 'eng-math-36', title: 'Numerical Solutions to ODEs' },
      { id: 'eng-math-37', title: 'Finite Difference Methods' }
    ]
  },
  'electrical-computer': {
    id: 'electrical-computer',
    title: 'Electrical & Computer',
    description: 'Hardware, circuits, electromagnetics, and embedded systems.',
    color: '#eab308', // Yellow/Gold
    topics: []
  },
  'software-cs': {
    id: 'software-cs',
    title: 'Software & CS',
    description: 'Algorithms, data structures, operating systems, and AI.',
    color: '#3b82f6', // Blue
    topics: []
  },
  'mechanical-aerospace': {
    id: 'mechanical-aerospace',
    title: 'Mechanical & Aerospace',
    description: 'Statics, dynamics, thermodynamics, fluids, and aerospace mechanics.',
    color: '#ef4444', // Red
    topics: [
      { id: 'mech-aero-1', title: 'Engineering Statics & Equilibrium' },
      { id: 'mech-aero-2', title: 'Trusses, Frames, and Machines' },
      { id: 'mech-aero-3', title: 'Stress, Strain, and Axial Loading' },
      { id: 'mech-aero-4', title: 'Torsion in Circular Shafts' },
      { id: 'mech-aero-5', title: 'Bending & Shear in Beams' },
      { id: 'mech-aero-6', title: 'Deflection of Beams' },
      { id: 'mech-aero-7', title: '3D Stress States & Failure Theories' },
      { id: 'mech-aero-8', title: 'Particle Kinematics & Kinetics' },
      { id: 'mech-aero-9', title: 'Rigid Body Kinematics' },
      { id: 'mech-aero-10', title: 'Rigid Body Kinetics' },
      { id: 'mech-aero-11', title: 'Energy & Momentum Methods' },
      { id: 'mech-aero-12', title: 'Mechanical Vibrations' },
      { id: 'mech-aero-13', title: 'Multi-DOF Vibrations & Modal Analysis' },
      { id: 'mech-aero-14', title: 'Properties of Pure Substances' },
      { id: 'mech-aero-15', title: 'First Law of Thermodynamics' },
      { id: 'mech-aero-16', title: 'Second Law, Entropy, and Exergy' },
      { id: 'mech-aero-17', title: 'Power Cycles' },
      { id: 'mech-aero-18', title: 'Refrigeration & Heat Pump Cycles' },
      { id: 'mech-aero-19', title: 'Steady & Transient Heat Conduction' },
      { id: 'mech-aero-20', title: 'Convective Heat Transfer' },
      { id: 'mech-aero-21', title: 'Radiation Heat Transfer' },
      { id: 'mech-aero-22', title: 'Fluid Statics & Buoyancy' },
      { id: 'mech-aero-23', title: 'Fluid Kinematics & Navier-Stokes' },
      { id: 'mech-aero-24', title: 'Internal Incompressible Flow' },
      { id: 'mech-aero-25', title: 'External Incompressible Flow' },
      { id: 'mech-aero-26', title: 'Turbomachinery' },
      { id: 'mech-aero-27', title: 'Compressible Flow & Shock Waves' },
      { id: 'mech-aero-28', title: 'Inviscid Aerodynamics' },
      { id: 'mech-aero-29', title: 'Finite Wing Theory' },
      { id: 'mech-aero-30', title: 'Aircraft Flight Mechanics' },
      { id: 'mech-aero-31', title: 'Aircraft Stability & Control' },
      { id: 'mech-aero-32', title: 'Jet Propulsion' },
      { id: 'mech-aero-33', title: 'Rocket Propulsion & Nozzle Theory' },
      { id: 'mech-aero-34', title: 'Orbital Mechanics' },
      { id: 'mech-aero-35', title: 'Material Science' },
      { id: 'mech-aero-36', title: 'Fatigue & Fracture Mechanics' },
      { id: 'mech-aero-37', title: 'Machine Element Design' },
      { id: 'mech-aero-38', title: 'Control Theory for Mechanical Systems' }
    ]
  },
  'chemical-process': {
    id: 'chemical-process',
    title: 'Chemical & Process',
    description: 'Material balances, separation processes, and reaction engineering.',
    color: '#10b981', // Green
    topics: []
  },
  'civil-environmental': {
    id: 'civil-environmental',
    title: 'Civil & Environmental',
    description: 'Structural analysis, geotechnics, and environmental infrastructure.',
    color: '#f97316', // Orange
    topics: []
  },
  'systems-mechatronics': {
    id: 'systems-mechatronics',
    title: 'Systems & Mechatronics',
    description: 'Robotics, control theory, biomechanics, and complex systems.',
    color: '#06b6d4', // Cyan
    topics: []
  }
};
