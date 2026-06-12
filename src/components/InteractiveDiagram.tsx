import React, { useState, useMemo, useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Panel
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';
import { Maximize, Minimize, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import CustomNode from './CustomNode';

interface InteractiveDiagramProps {
  content: string;
}

const nodeTypes = {
  custom: CustomNode,
};

// Auto-layout function
const getLayoutedElements = (nodes: any[], edges: any[], direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    // Default node size for layout calculations
    dagreGraph.setNode(node.id, { width: 150, height: 50 });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      position: {
        x: nodeWithPosition.x - 75,
        y: nodeWithPosition.y - 25,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};

const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({ content }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedNode, setSelectedNode] = useState<any>(null);

  // Parse the JSON content
  const diagramData = useMemo(() => {
    try {
      return JSON.parse(content);
    } catch (e) {
      console.error("Failed to parse diagram JSON", e);
      return { nodes: [], edges: [], direction: 'TB' };
    }
  }, [content]);

  // Apply default styles and calculate layout
  const { initialNodes, initialEdges } = useMemo(() => {
    const processedNodes = (diagramData.nodes || []).map((node: any) => {
      const defaultStyle = {
        background: 'var(--color-surface, #1c1814)',
        color: 'var(--color-text-primary, #e8e0d0)',
        border: '1px solid var(--color-border-strong, #3a3228)',
        borderRadius: '8px',
        padding: node.data?.icon ? '10px 20px 10px 40px' : '10px 20px',
        fontFamily: 'var(--font-primary, "Inter", sans-serif)',
        fontSize: '12px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
      };

      return {
        ...node,
        // Force custom node type to support icons
        type: node.type || 'custom',
        style: { ...defaultStyle, ...node.style },
      };
    });

    const processedEdges = (diagramData.edges || []).map((edge: any) => {
      return {
        ...edge,
        type: edge.type || 'smoothstep',
        markerEnd: edge.markerEnd || { type: MarkerType.ArrowClosed },
        style: { stroke: 'var(--color-accent, #d4af37)', strokeWidth: 2, ...edge.style },
      };
    });

    // Check if any node has a hardcoded position. If not, auto-layout.
    const needsAutoLayout = processedNodes.every((n: any) => !n.position || (n.position.x === 0 && n.position.y === 0));

    if (needsAutoLayout) {
      const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
        processedNodes,
        processedEdges,
        diagramData.direction || 'TB'
      );
      return { initialNodes: layoutedNodes, initialEdges: layoutedEdges };
    }

    return { initialNodes: processedNodes, initialEdges: processedEdges };
  }, [diagramData]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback((_: any, node: any) => {
    if (node.data?.description) {
      setSelectedNode(node);
    }
  }, []);

  if (!diagramData.nodes || diagramData.nodes.length === 0) {
    return (
      <div style={{ padding: 20, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8 }}>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0 }}>Invalid or empty diagram data.</p>
        <pre style={{ fontSize: 10, marginTop: 10, opacity: 0.5 }}>{content}</pre>
      </div>
    );
  }

  return (
    <div className={`interactive-diagram-container luxury-card ${isFullscreen ? 'fullscreen' : ''}`}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        minZoom={0.2}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="var(--color-border-strong, #3a3228)" gap={16} />
        
        <Controls />
        <MiniMap 
          nodeColor={(node) => String(node.style?.background || '#475569')}
          maskColor="rgba(0,0,0,0.5)"
          style={{ backgroundColor: 'var(--color-base-deep, #0a0908)', border: '1px solid var(--color-border, #2a241c)' }}
        />

        <Panel position="top-right" style={{ pointerEvents: 'auto' }}>
          <button 
            className="diagram-fullscreen-btn" 
            onClick={() => setIsFullscreen(!isFullscreen)}
            title="Toggle Fullscreen"
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
        </Panel>
      </ReactFlow>

      {/* Side Panel for Node Descriptions */}
      {selectedNode && (
        <div className="diagram-side-panel">
          <div className="panel-header">
            <h3>{selectedNode.data.label}</h3>
            <button className="panel-close" onClick={() => setSelectedNode(null)}><X size={18} /></button>
          </div>
          <div className="panel-content tm-prose">
            <ReactMarkdown>{selectedNode.data.description}</ReactMarkdown>
          </div>
        </div>
      )}
      
      <style>{`
        .interactive-diagram-container {
          border-radius: var(--border-radius-md, 12px);
          overflow: hidden;
          background: var(--color-base-deep, #0a0908);
          border: 1px solid var(--color-border, #2a241c);
          height: 400px;
          width: 100%;
          position: relative;
          margin: 24px 0;
          transition: all 0.3s ease;
        }

        .interactive-diagram-container.fullscreen {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          height: 100vh; width: 100vw;
          z-index: 1000;
          margin: 0;
          border-radius: 0;
        }
        
        .interactive-diagram-container .react-flow__node {
          transition: all 0.2s ease;
        }
        
        .interactive-diagram-container .react-flow__node:hover {
          box-shadow: 0 0 15px rgba(212,175,55,0.4) !important;
          transform: translateY(-2px);
        }

        /* Custom Node Styling */
        .custom-diagram-node {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .node-content {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .node-icon-wrapper {
          color: var(--color-accent, #d4af37);
          display: flex;
          align-items: center;
        }

        .node-label {
          font-weight: 500;
        }

        .diagram-fullscreen-btn {
          background: var(--color-surface, #1c1814);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          color: var(--color-text-primary, #e8e0d0);
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 16px rgba(0,0,0,0.4);
          transition: all 0.2s;
        }

        .diagram-fullscreen-btn:hover {
          background: rgba(212,175,55,0.12);
          border-color: rgba(212,175,55,0.4);
          color: var(--color-accent);
        }

        /* Side Panel Styling */
        .diagram-side-panel {
          position: absolute;
          top: 16px;
          bottom: 16px;
          right: 16px;
          width: 320px;
          background: var(--color-surface, #1c1814);
          border: 1px solid rgba(212,175,55,0.3);
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.6);
          display: flex;
          flex-direction: column;
          z-index: 100;
          animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          overflow: hidden;
        }

        .panel-header {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(0,0,0,0.2);
        }

        .panel-header h3 {
          margin: 0;
          font-size: 16px;
          color: var(--color-accent);
        }

        .panel-close {
          background: none; border: none; color: var(--color-text-secondary); cursor: pointer;
        }
        .panel-close:hover { color: #ef4444; }

        .panel-content {
          padding: 16px;
          overflow-y: auto;
          flex: 1;
        }
        .panel-content p { font-size: 13px; line-height: 1.6; color: var(--color-text-secondary); }

        @keyframes slideIn {
          from { transform: translateX(120%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default InteractiveDiagram;
