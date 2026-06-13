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
  'engineeringmaths': {
    id: 'engineeringmaths',
    title: 'Engineering Mathematics',
    description: 'The rigorous mathematical foundation required for all applied physical sciences and modeling.',
    color: '#8b5cf6', // Purple
    topics: [
      { id: 'limitscontinuity', title: 'Limits & Continuity' },
      { id: 'differentiationderivatives', title: 'Differentiation & Derivatives' },
      { id: 'integrationtechniques', title: 'Integration Techniques' },
      { id: 'applicationsofintegration', title: 'Applications of Integration' },
      { id: 'sequencespowerseries', title: 'Sequences & Power Series' },
      { id: 'partialderivativesgradients', title: 'Partial Derivatives & Gradients' },
      { id: 'multipleintegrals', title: 'Multiple Integrals' },
      { id: 'vectorcalculus', title: 'Vector Calculus' },
      { id: 'differentialequationsodespdes', title: 'Differential Equations (ODEs & PDEs)' },
      { id: 'linearalgebramatrices', title: 'Linear Algebra & Matrices' },
      { id: 'complexanalysis', title: 'Complex Analysis' },
      { id: 'probabilitystatistics', title: 'Probability & Statistics' },
      { id: 'numericalmethods', title: 'Numerical Methods' },
      { id: 'fourieranalysis', title: 'Fourier Analysis & Transforms' },
      { id: 'laplacetransforms', title: 'Laplace Transforms' },
      { id: 'discrete-mathematics', title: 'Discrete Mathematics' }
    ]
  },
  'electricalcomputer': {
    id: 'electricalcomputer',
    title: 'Electrical & Computer',
    description: 'Circuits, electronics, electromagnetics, data structures, algorithms, and control systems.',
    color: '#eab308', // Yellow/Gold
    topics: [
      { id: 'dccircuitanalysis', title: 'DC Circuit Analysis' },
      { id: 'accircuitanalysis', title: 'AC Circuit Analysis' },
      { id: 'transient-analysis', title: 'Transient Circuit Analysis' },
      { id: 'electronicssemiconductors', title: 'Solid-State Electronics & Semiconductors' },
      { id: 'analog-circuits', title: 'Analog Circuit Design (Op-Amps)' },
      { id: 'digitallogicmicroprocessors', title: 'Digital Logic Design' },
      { id: 'microprocessors-microcontrollers', title: 'Microprocessors & Microcontrollers' },
      { id: 'signals-systems', title: 'Signals and Systems' },
      { id: 'digital-signal-processing', title: 'Digital Signal Processing (DSP)' },
      { id: 'electromagnetics', title: 'Electromagnetic Fields & Waves' },
      { id: 'control-systems', title: 'Feedback Control Systems' },
      { id: 'power-systems', title: 'Power Systems & Energy Conversion' },
      { id: 'computer-architecture', title: 'Computer Architecture' },
      { id: 'embedded-systems', title: 'Embedded Systems' }
    ]
  },
  'mechanicalaerospace': {
    id: 'mechanicalaerospace',
    title: 'Mechanical & Aerospace',
    description: 'Statics, dynamics, materials, and aerospace mechanics.',
    color: '#ef4444', // Red
    topics: [
      { id: 'staticsequilibriumparticledynamics', title: 'Statics & Equilibrium' },
      { id: 'particle-rigid-body-kinematics', title: 'Particle & Rigid Body Kinematics' },
      { id: 'rigidbodydynamicsvibrations', title: 'Rigid Body Dynamics' },
      { id: 'mechanical-vibrations', title: 'Mechanical Vibrations' },
      { id: 'mechanics-of-materials', title: 'Mechanics of Materials (Solid Mechanics)' },
      { id: 'materialssciencemachinedesign', title: 'Materials Science & Engineering' },
      { id: 'machine-design', title: 'Machine Element Design' },
      { id: 'manufacturing-processes', title: 'Manufacturing Processes' },
      { id: 'aerospaceflightpropulsionorbitalmechanics', title: 'Flight Mechanics & Aerodynamics' },
      { id: 'aerospace-propulsion', title: 'Aerospace Propulsion Systems' },
      { id: 'orbital-mechanics', title: 'Orbital Mechanics & Astrodynamics' },
      { id: 'finite-element-analysis', title: 'Finite Element Analysis (FEA)' }
    ]
  },
  'thermodynamics': {
    id: 'thermodynamics',
    title: 'Thermodynamics & Heat Transfer',
    description: 'Energy, entropy, power cycles, and all modes of heat transfer from conduction to radiation.',
    color: '#f97316', // Deep Orange
    topics: [
      { id: 'thermo-properties', title: 'Properties of Pure Substances' },
      { id: 'first-law', title: 'First Law of Thermodynamics (Energy)' },
      { id: 'second-law', title: 'Second Law of Thermodynamics (Entropy)' },
      { id: 'exergy', title: 'Exergy & Availability Analysis' },
      { id: 'fundamentalspowercycles', title: 'Vapor & Gas Power Cycles' },
      { id: 'refrigeration', title: 'Refrigeration & Heat Pump Cycles' },
      { id: 'thermodynamic-relations', title: 'Thermodynamic Property Relations' },
      { id: 'gas-mixtures', title: 'Gas Mixtures & Psychrometrics' },
      { id: 'chemical-reactions', title: 'Chemical Reactions & Combustion' },
      { id: 'conduction', title: 'Heat Transfer: Steady & Transient Conduction' },
      { id: 'convection', title: 'Heat Transfer: Forced & Natural Convection' },
      { id: 'radiation', title: 'Heat Transfer: Thermal Radiation' },
      { id: 'heatmasstransfer', title: 'Mass Transfer Fundamentals' },
      { id: 'heat-exchangers', title: 'Heat Exchanger Design' }
    ]
  },
  'fluidmechanics': {
    id: 'fluidmechanics',
    title: 'Fluid Mechanics & Aerodynamics',
    description: 'Fluid statics, viscous and inviscid flows, turbomachinery, compressible flow, and aerodynamics.',
    color: '#06b6d4', // Cyan
    topics: [
      { id: 'fluid-properties', title: 'Fluid Properties' },
      { id: 'fluidstaticskinematics', title: 'Fluid Statics & Buoyancy' },
      { id: 'fluid-kinematics', title: 'Fluid Kinematics & Reynolds Transport Theorem' },
      { id: 'bernoulli-energy', title: 'Bernoulli & Energy Equations' },
      { id: 'momentum-analysis', title: 'Momentum Analysis of Flow Systems' },
      { id: 'dimensional-analysis', title: 'Dimensional Analysis & Modeling' },
      { id: 'internal-flow', title: 'Internal Flow (Pipe Flow & Friction)' },
      { id: 'external-flow', title: 'External Flow (Drag & Lift)' },
      { id: 'compressible-flow', title: 'Compressible Flow & Shock Waves' },
      { id: 'advancedflowturbomachinery', title: 'Turbomachinery (Pumps & Turbines)' },
      { id: 'navier-stokes', title: 'Navier-Stokes Equations & Exact Solutions' },
      { id: 'boundary-layer', title: 'Boundary Layer Theory' },
      { id: 'computational-fluid-dynamics', title: 'Introduction to CFD' }
    ]
  },
  'chemicalprocess': {
    id: 'chemicalprocess',
    title: 'Chemical, Process & Petroleum',
    description: 'Material balances, separation processes, reaction engineering, and reservoir engineering.',
    color: '#10b981', // Green
    topics: [
      { id: 'chemicalengineeringfundamentals', title: 'Material & Energy Balances' },
      { id: 'thermo-chemical', title: 'Chemical Engineering Thermodynamics' },
      { id: 'fluid-flow-chem', title: 'Fluid Flow in Chemical Processes' },
      { id: 'heat-transfer-chem', title: 'Heat Transfer Operations' },
      { id: 'mass-transfer-separations', title: 'Mass Transfer & Separation Processes' },
      { id: 'processdesignreactionengineering', title: 'Chemical Reaction Engineering (Kinetics)' },
      { id: 'process-control', title: 'Process Dynamics & Control' },
      { id: 'plant-design', title: 'Chemical Plant Design & Economics' },
      { id: 'petroleumreservoirengineering', title: 'Petroleum Reservoir Engineering' },
      { id: 'drilling-engineering', title: 'Drilling & Well Engineering' },
      { id: 'petroleum-production', title: 'Petroleum Production Engineering' },
      { id: 'polymers', title: 'Polymer Science & Engineering' }
    ]
  },
  'civilenvironmental': {
    id: 'civilenvironmental',
    title: 'Civil & Environmental',
    description: 'Structural analysis, geotechnics, and environmental infrastructure.',
    color: '#f97316', // Orange
    topics: [
      { id: 'staticsstructuralmechanics', title: 'Statics & Solid Mechanics' },
      { id: 'structural-analysis', title: 'Structural Analysis' },
      { id: 'steel-design', title: 'Structural Steel Design' },
      { id: 'concrete-design', title: 'Reinforced Concrete Design' },
      { id: 'fluidmechanicshydrology', title: 'Fluid Mechanics (Civil)' },
      { id: 'hydrology-water-resources', title: 'Hydrology & Water Resources Engineering' },
      { id: 'geotechnicalengineeringsoils', title: 'Soil Mechanics & Geotechnics' },
      { id: 'foundation-engineering', title: 'Foundation Engineering' },
      { id: 'environmentaltransportation', title: 'Environmental Engineering Fundamentals' },
      { id: 'water-wastewater', title: 'Water & Wastewater Treatment' },
      { id: 'transportation-engineering', title: 'Transportation & Highway Engineering' },
      { id: 'surveying-geomatics', title: 'Surveying & Geomatics' },
      { id: 'construction-management', title: 'Construction Management' }
    ]
  }
};
