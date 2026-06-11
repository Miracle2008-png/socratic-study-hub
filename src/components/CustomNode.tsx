import React from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import * as LucideIcons from 'lucide-react';

const CustomNode = ({ data, isConnectable }: NodeProps) => {
  // Dynamically resolve the Lucide icon from the string name
  const IconComponent = data.icon ? (LucideIcons as any)[data.icon as string] : null;

  return (
    <div className="custom-diagram-node">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} />
      
      <div className="node-content">
        {IconComponent && (
          <div className="node-icon-wrapper">
            <IconComponent size={20} strokeWidth={1.5} />
          </div>
        )}
        <div className="node-label">{data.label as string}</div>
      </div>

      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} />
    </div>
  );
};

export default CustomNode;
