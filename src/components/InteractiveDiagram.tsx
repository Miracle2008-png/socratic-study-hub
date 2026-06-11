import React, { useMemo } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

interface InteractiveDiagramProps {
  content: string;
}

const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({ content }) => {
  // Parse the JSON content
  const diagramData = useMemo(() => {
    try {
      return JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse diagram JSON", e);
      return { nodes: [], edges: [] };
    }
  }, [content]);

  // Apply default styles to nodes if not explicitly provided
  const processedNodes = useMemo(() => {
    return (diagramData.nodes || []).map((node: any) => {
      // Default theme for the diagram nodes
      const defaultStyle = {
        background: 'var(--color-surface, #1c1814)',
        color: 'var(--color-text-primary, #e8e0d0)',
        border: '1px solid var(--color-border-strong, #3a3228)',
        borderRadius: '8px',
        padding: '10px 20px',
        fontFamily: 'var(--font-primary, "Inter", sans-serif)',
        fontSize: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      };

      return {
        ...node,
        style: { ...defaultStyle, ...node.style },
      };
    });
  }, [diagramData.nodes]);

  // Apply default styles to edges
  const processedEdges = useMemo(() => {
    return (diagramData.edges || []).map((edge: any) => {
      return {
        ...edge,
        type: edge.type || 'smoothstep',
        markerEnd: edge.markerEnd || { type: MarkerType.ArrowClosed },
        style: { stroke: 'var(--color-accent, #d4af37)', strokeWidth: 2, ...edge.style },
      };
    });
  }, [diagramData.edges]);

  const [nodes, setNodes, onNodesChange] = useNodesState(processedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(processedEdges);

  // Update state if content changes
  React.useEffect(() => {
    setNodes(processedNodes);
    setEdges(processedEdges);
  }, [processedNodes, processedEdges, setNodes, setEdges]);

  if (!diagramData.nodes || diagramData.nodes.length === 0) {
    return (
      <div style={{ padding: 20, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8 }}>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Invalid or empty diagram data.</p>
        <pre style={{ fontSize: 10, marginTop: 10, opacity: 0.5 }}>{content}</pre>
      </div>
    );
  }

  return (
    <div className="interactive-diagram-container luxury-card" style={{ height: '400px', width: '100%', position: 'relative', margin: '24px 0' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        minZoom={0.2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="var(--color-border-strong, #3a3228)" gap={16} />
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            return node.style?.background || '#475569';
          }}
          maskColor="rgba(0,0,0,0.5)"
          style={{ backgroundColor: 'var(--color-base-deep, #0a0908)', border: '1px solid var(--color-border, #2a241c)' }}
        />
      </ReactFlow>
      
      <style>{`
        .interactive-diagram-container {
          border-radius: var(--border-radius-md, 12px);
          overflow: hidden;
          background: var(--color-base-deep, #0a0908);
          border: 1px solid var(--color-border, #2a241c);
        }
        
        .interactive-diagram-container .react-flow__node {
          transition: all 0.2s ease;
        }
        
        .interactive-diagram-container .react-flow__node:hover {
          box-shadow: 0 0 15px rgba(212,175,55,0.4) !important;
          transform: translateY(-2px);
        }

        .interactive-diagram-container .react-flow__controls {
          background: var(--color-surface, #1c1814) !important;
          border: 1px solid rgba(255,255,255,0.08) !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4) !important;
          overflow: hidden;
        }
        .interactive-diagram-container .react-flow__controls-button {
          background: var(--color-surface, #1c1814) !important;
          border: none !important;
          border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          color: var(--color-text-primary, #e8e0d0) !important;
          width: 28px !important;
          height: 28px !important;
        }
        .interactive-diagram-container .react-flow__controls-button:last-child {
          border-bottom: none !important;
        }
        .interactive-diagram-container .react-flow__controls-button:hover {
          background: rgba(212,175,55,0.12) !important;
        }
        .interactive-diagram-container .react-flow__controls-button svg {
          fill: var(--color-text-primary, #e8e0d0) !important;
        }
        
        .interactive-diagram-container .react-flow__attribution {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default InteractiveDiagram;
