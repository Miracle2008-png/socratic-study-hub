import React, { useState } from 'react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { ENGINEERING_BRANCHES, EngineeringBranch as BranchType } from '../data/engineeringData';
import { EngineeringBranch } from './EngineeringBranch';
import './engineering.css';

interface EngineeringHubProps {
  onTopicSelect: (topicId: string, branchId?: string) => void;
}

export const EngineeringHub: React.FC<EngineeringHubProps> = ({ onTopicSelect }) => {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null);

  if (selectedBranch) {
    const branch = ENGINEERING_BRANCHES[selectedBranch];
    return (
      <div className="engineering-container anim-fade">
        <button className="back-to-hub-btn" onClick={() => setSelectedBranch(null)}>
          <ArrowLeft size={16} /> Back to Engineering
        </button>
        <EngineeringBranch branch={branch} onTopicSelect={(topicId) => onTopicSelect(topicId, branch.id)} />
      </div>
    );
  }

  return (
    <div className="engineering-hub anim-fade">
      <div className="hub-header">
        <h1>Engineering</h1>
        <p>Select your discipline to access the curriculum roadmap.</p>
      </div>

      <div className="branch-grid">
        {Object.values(ENGINEERING_BRANCHES).map((branch, index) => (
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
              {/* CSS animations will be handled in engineering.css */}
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
