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
      { id: 'numericalmethods', title: 'Numerical Methods' }
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
      { id: 'electronicssemiconductors', title: 'Electronics & Semiconductors' },
      { id: 'digitallogicmicroprocessors', title: 'Digital Logic & Microprocessors' }
    ]
  },
  'mechanicalaerospace': {
    id: 'mechanicalaerospace',
    title: 'Mechanical & Aerospace',
    description: 'Statics, dynamics, materials, and aerospace mechanics.',
    color: '#ef4444', // Red
    topics: [
      { id: 'staticsequilibriumparticledynamics', title: 'Statics, Equilibrium & Particle Dynamics' },
      { id: 'rigidbodydynamicsvibrations', title: 'Rigid Body Dynamics & Vibrations' },
      { id: 'materialssciencemachinedesign', title: 'Materials Science & Machine Design' },
      { id: 'aerospaceflightpropulsionorbitalmechanics', title: 'Aerospace Flight, Propulsion & Orbital Mechanics' }
    ]
  },
  'thermodynamics': {
    id: 'thermodynamics',
    title: 'Thermodynamics & Heat Transfer',
    description: 'Energy, entropy, power cycles, and all modes of heat transfer from conduction to radiation.',
    color: '#f97316', // Deep Orange
    topics: [
      { id: 'fundamentalspowercycles', title: 'Fundamentals & Power Cycles' },
      { id: 'heatmasstransfer', title: 'Heat & Mass Transfer' }
    ]
  },
  'fluidmechanics': {
    id: 'fluidmechanics',
    title: 'Fluid Mechanics & Aerodynamics',
    description: 'Fluid statics, viscous and inviscid flows, turbomachinery, compressible flow, and aerodynamics.',
    color: '#06b6d4', // Cyan
    topics: [
      { id: 'fluidstaticskinematics', title: 'Fluid Statics & Kinematics' },
      { id: 'advancedflowturbomachinery', title: 'Advanced Flow & Turbomachinery' }
    ]
  },
  'chemicalprocess': {
    id: 'chemicalprocess',
    title: 'Chemical, Process & Petroleum',
    description: 'Material balances, separation processes, reaction engineering, and reservoir engineering.',
    color: '#10b981', // Green
    topics: [
      { id: 'chemicalengineeringfundamentals', title: 'Chemical Engineering Fundamentals' },
      { id: 'processdesignreactionengineering', title: 'Process Design & Reaction Engineering' },
      { id: 'petroleumreservoirengineering', title: 'Petroleum & Reservoir Engineering' }
    ]
  },
  'civilenvironmental': {
    id: 'civilenvironmental',
    title: 'Civil & Environmental',
    description: 'Structural analysis, geotechnics, and environmental infrastructure.',
    color: '#f97316', // Orange
    topics: [
      { id: 'staticsstructuralmechanics', title: 'Statics & Structural Mechanics' },
      { id: 'fluidmechanicshydrology', title: 'Fluid Mechanics & Hydrology' },
      { id: 'geotechnicalengineeringsoils', title: 'Geotechnical Engineering & Soils' },
      { id: 'environmentaltransportation', title: 'Environmental & Transportation' }
    ]
  }
};
