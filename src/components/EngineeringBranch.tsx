import React from 'react';
import { EngineeringBranch as BranchType } from '../data/engineeringData';
import { Play, CheckCircle } from 'lucide-react';
import './engineering.css';

interface EngineeringBranchProps {
  branch: BranchType;
  onTopicSelect: (topicId: string) => void;
}

export const EngineeringBranch: React.FC<EngineeringBranchProps> = ({ branch, onTopicSelect }) => {
  return (
    <div className="engineering-roadmap">
      <div className="roadmap-header" style={{ '--branch-color': branch.color } as React.CSSProperties}>
        <div className="header-glow" />
        <h1>{branch.title}</h1>
        <p>{branch.description}</p>
      </div>

      <div className="roadmap-container">
        <div className="roadmap-spine" style={{ backgroundColor: branch.color }} />
        
        <div className="roadmap-nodes">
          {branch.topics.map((topic, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={topic.id} 
                className={`roadmap-node-wrapper ${isLeft ? 'left' : 'right'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="node-connector" style={{ backgroundColor: branch.color }} />
                
                <div 
                  className="roadmap-node luxury-card"
                  onClick={() => onTopicSelect(topic.id)}
                  style={{ '--node-color': branch.color } as React.CSSProperties}
                >
                  <div className="node-status">
                    {topic.isCompleted ? <CheckCircle className="completed-icon" size={20} /> : <div className="pending-dot" />}
                  </div>
                  <div className="node-content">
                    <span className="node-number">Module {index + 1}</span>
                    <h3>{topic.title}</h3>
                  </div>
                  <div className="node-action">
                    <Play size={18} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
