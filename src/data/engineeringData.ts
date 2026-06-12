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
    description: 'Circuits, electronics, electromagnetics, data structures, algorithms, and control systems.',
    color: '#eab308', // Yellow/Gold
    topics: [
      { id: 'ece-1', title: 'DC Circuit Analysis' },
      { id: 'ece-2', title: 'AC Circuit Analysis' },
      { id: 'ece-3', title: 'Electronics & Semiconductors' },
      { id: 'ece-4', title: 'Digital Logic & Microprocessors' }
    ]
  },
  'mechanical-aerospace': {
    id: 'mechanical-aerospace',
    title: 'Mechanical & Aerospace',
    description: 'Statics, dynamics, materials, and aerospace mechanics.',
    color: '#ef4444', // Red
    topics: [
      { id: 'mech-aero-1', title: 'Statics, Equilibrium & Particle Dynamics' },
      { id: 'mech-aero-2', title: 'Rigid Body Dynamics & Vibrations' },
      { id: 'mech-aero-3', title: 'Materials Science & Machine Design' },
      { id: 'mech-aero-4', title: 'Aerospace Flight, Propulsion & Orbital Mechanics' }
    ]
  },
  'thermodynamics': {
    id: 'thermodynamics',
    title: 'Thermodynamics & Heat Transfer',
    description: 'Energy, entropy, power cycles, and all modes of heat transfer from conduction to radiation.',
    color: '#f97316', // Deep Orange
    topics: [
      { id: 'thermo-1', title: 'Fundamentals & Power Cycles' },
      { id: 'thermo-2', title: 'Heat & Mass Transfer' }
    ]
  },
  'fluid-mechanics': {
    id: 'fluid-mechanics',
    title: 'Fluid Mechanics & Aerodynamics',
    description: 'Fluid statics, viscous and inviscid flows, turbomachinery, compressible flow, and aerodynamics.',
    color: '#06b6d4', // Cyan
    topics: [
      { id: 'fluids-1', title: 'Fluid Statics & Kinematics' },
      { id: 'fluids-2', title: 'Advanced Flow & Turbomachinery' }
    ]
  },
  'chemical-process': {
    id: 'chemical-process',
    title: 'Chemical, Process & Petroleum',
    description: 'Material balances, separation processes, reaction engineering, and reservoir engineering.',
    color: '#10b981', // Green
    topics: [
      { id: 'chem-1', title: 'Chemical Engineering Fundamentals' },
      { id: 'chem-2', title: 'Process Design & Reaction Engineering' },
      { id: 'chem-3', title: 'Petroleum & Reservoir Engineering' }
    ]
  },
  'civil-environmental': {
    id: 'civil-environmental',
    title: 'Civil & Environmental',
    description: 'Structural analysis, geotechnics, and environmental infrastructure.',
    color: '#f97316', // Orange
    topics: [
      { id: 'civ-1', title: 'Statics & Structural Mechanics' },
      { id: 'civ-2', title: 'Fluid Mechanics & Hydrology' },
      { id: 'civ-3', title: 'Geotechnical Engineering & Soils' },
      { id: 'civ-4', title: 'Environmental & Transportation' }
    ]
  }
};
