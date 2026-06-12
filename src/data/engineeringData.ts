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
  'thermodynamics': {
    id: 'thermodynamics',
    title: 'Thermodynamics & Heat Transfer',
    description: 'Energy, entropy, power cycles, and all modes of heat transfer from conduction to radiation.',
    color: '#f97316', // Deep Orange
    topics: [
      { id: 'mech-aero-14', title: 'Properties of Pure Substances' },
      { id: 'mech-aero-15', title: 'First Law of Thermodynamics' },
      { id: 'mech-aero-16', title: 'Second Law, Entropy, and Exergy' },
      { id: 'mech-aero-17', title: 'Power Cycles' },
      { id: 'mech-aero-18', title: 'Refrigeration & Heat Pump Cycles' },
      { id: 'mech-aero-19', title: 'Steady & Transient Heat Conduction' },
      { id: 'mech-aero-20', title: 'Convective Heat Transfer' },
      { id: 'mech-aero-21', title: 'Radiation Heat Transfer' },
      { id: 'thermo-1', title: 'Heat Exchangers' },
      { id: 'thermo-2', title: 'Psychrometrics & HVAC Systems' },
      { id: 'thermo-3', title: 'Combustion & Reacting Mixtures' },
      { id: 'thermo-4', title: 'Gas Dynamics & Nozzle Flows' },
      { id: 'thermo-5', title: 'Statistical Thermodynamics' },
      { id: 'thermo-6', title: 'Mass Transfer Fundamentals' },
    ]
  },
  'fluid-mechanics': {
    id: 'fluid-mechanics',
    title: 'Fluid Mechanics & Aerodynamics',
    description: 'Fluid statics, viscous and inviscid flows, turbomachinery, compressible flow, and aerodynamics.',
    color: '#06b6d4', // Cyan
    topics: [
      { id: 'mech-aero-22', title: 'Fluid Statics & Buoyancy' },
      { id: 'mech-aero-23', title: 'Fluid Kinematics & Navier-Stokes' },
      { id: 'mech-aero-24', title: 'Internal Incompressible Flow' },
      { id: 'mech-aero-25', title: 'External Incompressible Flow' },
      { id: 'mech-aero-26', title: 'Turbomachinery' },
      { id: 'mech-aero-27', title: 'Compressible Flow & Shock Waves' },
      { id: 'mech-aero-28', title: 'Inviscid Aerodynamics' },
      { id: 'mech-aero-29', title: 'Finite Wing Theory' },
      { id: 'fluids-1', title: 'Dimensional Analysis & Similitude' },
      { id: 'fluids-2', title: 'Boundary Layer Theory' },
      { id: 'fluids-3', title: 'Turbulence & Turbulence Modeling' },
      { id: 'fluids-4', title: 'Introduction to CFD' },
      { id: 'fluids-5', title: 'Two-Phase & Multiphase Flow' },
      { id: 'fluids-6', title: 'Non-Newtonian Fluid Mechanics' },
    ]
  },
  'chemical-process': {
    id: 'chemical-process',
    title: 'Chemical, Process & Petroleum',
    description: 'Material balances, separation processes, reaction engineering, and reservoir engineering.',
    color: '#10b981', // Green
    topics: [
      { id: 'chem-petro-1', title: 'Material & Energy Balances' },
      { id: 'chem-petro-2', title: 'Chemical Engineering Thermodynamics' },
      { id: 'chem-petro-3', title: 'Transport Phenomena' },
      { id: 'chem-petro-4', title: 'Momentum Transfer & Fluidization' },
      { id: 'chem-petro-5', title: 'Heat Transfer Equipment Design' },
      { id: 'chem-petro-6', title: 'Mass Transfer & Diffusion' },
      { id: 'chem-petro-7', title: 'Separation Processes (Distillation & Absorption)' },
      { id: 'chem-petro-8', title: 'Advanced Separations (Extraction, Membranes)' },
      { id: 'chem-petro-9', title: 'Chemical Reaction Kinetics' },
      { id: 'chem-petro-10', title: 'Reactor Design Engineering' },
      { id: 'chem-petro-11', title: 'Process Dynamics & Control' },
      { id: 'chem-petro-12', title: 'Process Plant Design & Economics' },
      { id: 'chem-petro-13', title: 'Introduction to Petroleum Geology' },
      { id: 'chem-petro-14', title: 'Reservoir Rock & Fluid Properties' },
      { id: 'chem-petro-15', title: 'Drilling Engineering & Well Completion' },
      { id: 'chem-petro-16', title: 'Reservoir Engineering & Simulation' },
      { id: 'chem-petro-17', title: 'Well Logging & Formation Evaluation' },
      { id: 'chem-petro-18', title: 'Production Engineering & Artificial Lift' },
      { id: 'chem-petro-19', title: 'Enhanced Oil Recovery (EOR)' },
      { id: 'chem-petro-20', title: 'Natural Gas Engineering' },
      { id: 'chem-petro-21', title: 'Petroleum Refining & Petrochemicals' }
    ]
  },
  'civil-environmental': {
    id: 'civil-environmental',
    title: 'Civil & Environmental',
    description: 'Structural analysis, geotechnics, and environmental infrastructure.',
    color: '#f97316', // Orange
    topics: [
      { id: 'civil-env-1', title: 'Statics & Solid Mechanics' },
      { id: 'civil-env-2', title: 'Structural Analysis' },
      { id: 'civil-env-3', title: 'Reinforced Concrete Design' },
      { id: 'civil-env-4', title: 'Steel Structure Design' },
      { id: 'civil-env-5', title: 'Soil Mechanics & Geotechnics' },
      { id: 'civil-env-6', title: 'Foundation Engineering' },
      { id: 'civil-env-7', title: 'Fluid Mechanics for Civil Engineering' },
      { id: 'civil-env-8', title: 'Hydrology & Water Resources' },
      { id: 'civil-env-9', title: 'Environmental Engineering Fundamentals' },
      { id: 'civil-env-10', title: 'Water & Wastewater Treatment' },
      { id: 'civil-env-11', title: 'Transportation Engineering' },
      { id: 'civil-env-12', title: 'Surveying & Geomatics' },
      { id: 'civil-env-13', title: 'Construction Management' }
    ]
  }
};
