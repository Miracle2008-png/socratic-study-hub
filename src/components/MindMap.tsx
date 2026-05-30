import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
  Connection,
  Edge
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useGamification } from '../context/GamificationContext';
import { usePremium } from '../context/PremiumContext';

const initialNodes = [
  // Math Branch
  { id: 'math', position: { x: 400, y: 100 }, data: { label: 'Mathematics (Core)' }, style: { background: '#1e1b4b', color: '#818cf8', border: '1px solid #4f46e5', borderRadius: '8px', padding: '10px 20px', fontWeight: 'bold' } },
  { id: 'calc', position: { x: 200, y: 250 }, data: { label: 'Calculus', subject: 'math', topicId: 'single_variable_calculus' }, style: { background: 'rgba(99,102,241,0.1)', border: '1px solid #6366f1', cursor: 'pointer' } },
  { id: 'linalg', position: { x: 600, y: 250 }, data: { label: 'Linear Algebra', subject: 'math', topicId: 'linear_algebra_matrices_vectors_' }, style: { background: 'rgba(99,102,241,0.1)', border: '1px solid #6366f1', cursor: 'pointer' } },
  { id: 'diff', position: { x: 100, y: 400 }, data: { label: 'Derivatives', subject: 'math', topicId: 'single_variable_calculus' }, style: { cursor: 'pointer' } },
  { id: 'int', position: { x: 300, y: 400 }, data: { label: 'Integrals', subject: 'math', topicId: 'single_variable_calculus' }, style: { cursor: 'pointer' } },
  { id: 'matrices', position: { x: 500, y: 400 }, data: { label: 'Matrices', subject: 'math', topicId: 'linear_algebra_matrices_vectors_' }, style: { cursor: 'pointer' } },
  { id: 'vectors', position: { x: 700, y: 400 }, data: { label: 'Vectors', subject: 'math', topicId: 'vector_algebra_3d_geometry' }, style: { cursor: 'pointer' } },
  
  // Physics Branch
  { id: 'phys', position: { x: 1000, y: 100 }, data: { label: 'Physics (Core)' }, style: { background: '#082f49', color: '#38bdf8', border: '1px solid #0ea5e9', borderRadius: '8px', padding: '10px 20px', fontWeight: 'bold' } },
  { id: 'class_mech', position: { x: 850, y: 250 }, data: { label: 'Classical Mechanics', subject: 'physics', topicId: 'kinematics' }, style: { background: 'rgba(14,165,233,0.1)', border: '1px solid #0ea5e9', cursor: 'pointer' } },
  { id: 'e_m', position: { x: 1150, y: 250 }, data: { label: 'Electromagnetism', subject: 'physics', topicId: 'magnetism_electromagnetism' }, style: { background: 'rgba(14,165,233,0.1)', border: '1px solid #0ea5e9', cursor: 'pointer' } },
  { id: 'kinematics', position: { x: 800, y: 400 }, data: { label: 'Kinematics', subject: 'physics', topicId: 'kinematics' }, style: { cursor: 'pointer' } },
  { id: 'dynamics', position: { x: 950, y: 400 }, data: { label: 'Dynamics', subject: 'physics', topicId: 'force_newton_s_laws' }, style: { cursor: 'pointer' } },

  // Chemistry Branch
  { id: 'chem', position: { x: 1600, y: 100 }, data: { label: 'Chemistry (Core)' }, style: { background: '#064e3b', color: '#34d399', border: '1px solid #10b981', borderRadius: '8px', padding: '10px 20px', fontWeight: 'bold' } },
  { id: 'org', position: { x: 1450, y: 250 }, data: { label: 'Organic Chemistry', subject: 'chemistry', topicId: 'organic_chemistry_i_structure_nomenclature_stereochemistry' }, style: { background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', cursor: 'pointer' } },
  { id: 'phys_chem', position: { x: 1750, y: 250 }, data: { label: 'Physical Chemistry', subject: 'chemistry', topicId: 'reaction_kinetics' }, style: { background: 'rgba(16,185,129,0.1)', border: '1px solid #10b981', cursor: 'pointer' } },

  // Cross-disciplinary Links
  { id: 'thermo', position: { x: 1300, y: 400 }, data: { label: 'Thermodynamics', subject: 'physics', topicId: 'thermodynamics' }, style: { background: 'rgba(245,158,11,0.1)', border: '1px dashed #f59e0b', cursor: 'pointer' } },
  { id: 'qm', position: { x: 1400, y: 550 }, data: { label: 'Quantum Mechanics', subject: 'physics', topicId: 'quantum_physics' }, style: { background: 'rgba(239,68,68,0.1)', border: '1px dashed #ef4444', cursor: 'pointer' } },
];

interface MindMapProps {
  onTopicSelect?: (topicId: string, subject: string) => void;
}

const defaultEdgeOptions = {
  type: 'smoothstep',
  markerEnd: { type: MarkerType.ArrowClosed },
  animated: true,
  style: { stroke: 'var(--color-border-strong)', strokeWidth: 2 },
};

const initialEdges = [
  { id: 'e1', source: 'math', target: 'calc' },
  { id: 'e2', source: 'math', target: 'linalg' },
  { id: 'e3', source: 'calc', target: 'diff' },
  { id: 'e4', source: 'calc', target: 'int' },
  { id: 'e5', source: 'linalg', target: 'matrices' },
  { id: 'e6', source: 'linalg', target: 'vectors' },
  
  { id: 'e7', source: 'phys', target: 'class_mech' },
  { id: 'e8', source: 'phys', target: 'e_m' },
  { id: 'e9', source: 'class_mech', target: 'kinematics' },
  { id: 'e10', source: 'class_mech', target: 'dynamics' },

  { id: 'e11', source: 'chem', target: 'org' },
  { id: 'e12', source: 'chem', target: 'phys_chem' },

  // Cross links
  { id: 'e13', source: 'phys_chem', target: 'thermo', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e14', source: 'class_mech', target: 'thermo', style: { stroke: '#f59e0b', strokeWidth: 2, strokeDasharray: '5,5' } },
  
  { id: 'e15', source: 'phys_chem', target: 'qm', style: { stroke: '#ef4444', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e16', source: 'e_m', target: 'qm', style: { stroke: '#ef4444', strokeWidth: 2, strokeDasharray: '5,5' } },
  { id: 'e17', source: 'linalg', target: 'qm', label: 'Hilbert Spaces', style: { stroke: '#6366f1', strokeWidth: 1, strokeDasharray: '5,5' } },
];

const MindMap: React.FC<MindMapProps> = ({ onTopicSelect }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { addXP } = useGamification();
  const { useInsight } = usePremium();

  const onConnect = useCallback(
    (params: Connection | Edge) => {
      if (!useInsight()) return;
      setEdges((eds) => addEdge({ ...params, ...defaultEdgeOptions }, eds));
      addXP(1500, 'Created Knowledge Link');
    },
    [setEdges, addXP, useInsight],
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: any) => {
    if (onTopicSelect && node.data?.topicId && node.data?.subject) {
      onTopicSelect(node.data.topicId, node.data.subject);
    }
  }, [onTopicSelect]);

  return (
    <div className="mindmap-container anim-fade">
      <div className="mindmap-header">
        <h1>Curriculum Knowledge Graph</h1>
        <p>Explore how different subjects connect. Drag nodes, connect ideas, and earn XP for mapping your brain.</p>
      </div>
      
      <div className="flow-wrapper luxury-card">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
          minZoom={0.2}
          proOptions={{ hideAttribution: true }}
        >
          <Background color="var(--color-border-strong)" gap={16} />
          <Controls />
          <MiniMap 
            nodeColor={(node) => {
              if (node.id.includes('math') || node.id.includes('calc')) return '#6366f1';
              if (node.id.includes('phys')) return '#0ea5e9';
              if (node.id.includes('chem')) return '#10b981';
              return '#475569';
            }}
            maskColor="var(--color-base-deep)"
            style={{ backgroundColor: 'var(--color-surface)', border: 'var(--border-soft)' }}
          />
        </ReactFlow>
      </div>

      <style>{`
        .mindmap-container {
          display: flex; flex-direction: column; gap: 24px; padding: 20px 0;
          height: calc(100vh - 80px);
        }
        
        .mindmap-header h1 {
          font-family: var(--font-serif); font-size: 28px; font-weight: 700;
          color: var(--color-text-primary); margin: 0 0 8px;
        }
        .mindmap-header p {
          font-size: 14px; color: var(--color-text-secondary); margin: 0;
        }

        .flow-wrapper {
          flex: 1; border-radius: var(--border-radius-lg); overflow: hidden;
          background: var(--color-base-deep); position: relative;
        }

        .react-flow__node {
          background: var(--color-surface);
          border: var(--border-soft);
          color: var(--color-text-primary);
          border-radius: var(--border-radius-sm);
          padding: 10px 16px;
          font-family: var(--font-primary);
          font-size: 12px;
          box-shadow: var(--shadow-sm);
          transition: all var(--transition-fast);
        }
        .react-flow__node:hover {
          box-shadow: var(--shadow-glow); transform: translateY(-2px);
        }
        
        .react-flow__handle {
          background: var(--color-accent);
          width: 8px; height: 8px;
        }

        /* Controls panel — dark theme override */
        .react-flow__controls {
          background: var(--color-surface, #1c1814) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4) !important;
          overflow: hidden;
        }
        .react-flow__controls-button {
          background: var(--color-surface, #1c1814) !important;
          border: none !important;
          border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          color: var(--color-text-primary, #e8e0d0) !important;
          width: 28px !important;
          height: 28px !important;
        }
        .react-flow__controls-button:last-child {
          border-bottom: none !important;
        }
        .react-flow__controls-button:hover {
          background: rgba(212,175,55,0.12) !important;
        }
        .react-flow__controls-button svg {
          fill: var(--color-text-primary, #e8e0d0) !important;
          max-width: 14px; max-height: 14px;
        }

        /* Hide ReactFlow attribution badge */
        .react-flow__attribution {
          display: none !important;
        }

        /* MiniMap dark theme */
        .react-flow__minimap {
          background: var(--color-surface, #1c1814) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 8px !important;
          overflow: hidden;
        }
        .react-flow__minimap-mask {
          fill: rgba(0,0,0,0.5) !important;
        }
      `}</style>
    </div>
  );
};

export default MindMap;
