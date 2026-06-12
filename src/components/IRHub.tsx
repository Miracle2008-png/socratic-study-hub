import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { IR_BRANCHES } from '../data/internationalRelationsData';
import { EngineeringBranch as BranchView } from './EngineeringBranch';
import './engineering.css'; // Reusing engineering styles for consistency

interface IRHubProps {
  onTopicSelect: (topicId: string, branchId?: string) => void;
}

export const IRHub: React.FC<IRHubProps> = ({ onTopicSelect }) => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  if (selectedBranch) {
    const branch = IR_BRANCHES[selectedBranch];
    return (
      <div className="engineering-container anim-fade">
        <button className="back-to-hub-btn" onClick={() => setSelectedBranch(null)}>
          <ArrowLeft size={16} /> Back to International Relations
        </button>
        <BranchView branch={branch} onTopicSelect={(topicId) => onTopicSelect(topicId, branch.id)} />
      </div>
    );
  }

  return (
    <div className="engineering-hub anim-fade">
      <div className="hub-header">
        <h1>International Relations</h1>
        <p>Select your discipline to access the curriculum roadmap.</p>
      </div>

      <div className="branch-grid">
        {Object.values(IR_BRANCHES).map((branch, index) => (
          <div 
            key={branch.id}
            className="branch-card"
            style={{ 
              '--card-color': branch.color,
              animationDelay: `${index * 0.1}s` 
            } as React.CSSProperties}
            onClick={() => setSelectedBranch(branch.id)}
          >
            <div className="branch-bg-anim">
              <div className="bg-shape shape-1" />
              <div className="bg-shape shape-2" />
            </div>
            <div className="branch-content">
              <h2>{branch.title}</h2>
              <p>{branch.description}</p>
              <div className="branch-footer">
                <span>{branch.topics.length} Modules</span>
                <ChevronRight size={20} className="arrow-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
