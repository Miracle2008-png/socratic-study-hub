import React, { useState } from 'react';
import { FlaskConical, Beaker, Atom as AtomIcon, Network } from 'lucide-react';

const elements = [
  { num: 1, symbol: 'H', name: 'Hydrogen', group: 'nonmetal', col: 1, row: 1 },
  { num: 2, symbol: 'He', name: 'Helium', group: 'noble', col: 18, row: 1 },
  { num: 3, symbol: 'Li', name: 'Lithium', group: 'alkali', col: 1, row: 2 },
  { num: 4, symbol: 'Be', name: 'Beryllium', group: 'alkaline', col: 2, row: 2 },
  { num: 5, symbol: 'B', name: 'Boron', group: 'metalloid', col: 13, row: 2 },
  { num: 6, symbol: 'C', name: 'Carbon', group: 'nonmetal', col: 14, row: 2 },
  { num: 7, symbol: 'N', name: 'Nitrogen', group: 'nonmetal', col: 15, row: 2 },
  { num: 8, symbol: 'O', name: 'Oxygen', group: 'nonmetal', col: 16, row: 2 },
  { num: 9, symbol: 'F', name: 'Fluorine', group: 'halogen', col: 17, row: 2 },
  { num: 10, symbol: 'Ne', name: 'Neon', group: 'noble', col: 18, row: 2 },
  { num: 11, symbol: 'Na', name: 'Sodium', group: 'alkali', col: 1, row: 3 },
  { num: 12, symbol: 'Mg', name: 'Magnesium', group: 'alkaline', col: 2, row: 3 },
  { num: 13, symbol: 'Al', name: 'Aluminum', group: 'metal', col: 13, row: 3 },
  { num: 14, symbol: 'Si', name: 'Silicon', group: 'metalloid', col: 14, row: 3 },
  { num: 15, symbol: 'P', name: 'Phosphorus', group: 'nonmetal', col: 15, row: 3 },
  { num: 16, symbol: 'S', name: 'Sulfur', group: 'nonmetal', col: 16, row: 3 },
  { num: 17, symbol: 'Cl', name: 'Chlorine', group: 'halogen', col: 17, row: 3 },
  { num: 18, symbol: 'Ar', name: 'Argon', group: 'noble', col: 18, row: 3 },
];

const ChemistryModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'reactions' | 'periodic'>('reactions');
  const [selectedElement, setSelectedElement] = useState(elements[5]); // Carbon default

  return (
    <div className="chemistry-module">
      <div className="module-header luxury-card">
        <div className="title-row">
          <FlaskConical size={24} className="text-gold-gradient" />
          <h3>Chemical Intelligence</h3>
        </div>
        <p>Explore molecular structures and thermodynamic principles.</p>

        <div className="sim-tabs">
          <button 
            className={`sim-tab ${activeTab === 'reactions' ? 'active' : ''}`}
            onClick={() => setActiveTab('reactions')}
          >
            Reaction Dynamics
          </button>
          <button 
            className={`sim-tab ${activeTab === 'periodic' ? 'active' : ''}`}
            onClick={() => setActiveTab('periodic')}
          >
            Interactive Elements
          </button>
        </div>
      </div>

      {activeTab === 'reactions' ? (
        <div className="reaction-container">
          <div className="reaction-equation luxury-card">
            <h4>Haber Process Synthesis</h4>
            <div className="equation">
              N<span className="sub">2(g)</span> + 3H<span className="sub">2(g)</span> ⇌ 2NH<span className="sub">3(g)</span>
            </div>
            <div className="enthalpy">
              ΔH = -92.4 kJ/mol
            </div>
          </div>

          <div className="diagram-grid">
            <div className="luxury-card diagram-card">
              <div className="card-header">
                <Network size={18} className="text-gold-gradient" />
                <h4>Energy Profile</h4>
              </div>
              <div className="svg-container">
                <svg viewBox="0 0 300 150" className="energy-chart">
                  <path d="M 20 80 Q 50 80, 80 80 C 120 80, 130 20, 150 20 C 170 20, 200 120, 280 120" 
                        fill="none" stroke="var(--color-accent)" strokeWidth="3" />
                  <line x1="20" y1="80" x2="80" y2="80" stroke="var(--color-text-primary)" strokeWidth="2" strokeDasharray="4" />
                  <line x1="200" y1="120" x2="280" y2="120" stroke="var(--color-text-primary)" strokeWidth="2" strokeDasharray="4" />
                  <text x="30" y="70" fontSize="12" fill="var(--color-text-secondary)">Reactants</text>
                  <text x="220" y="110" fontSize="12" fill="var(--color-text-secondary)">Products</text>
                  <text x="140" y="15" fontSize="10" fill="var(--color-accent)">Activation Energy</text>
                </svg>
              </div>
            </div>

            <div className="luxury-card info-card">
              <div className="card-header">
                <Beaker size={18} className="text-gold-gradient" />
                <h4>Le Chatelier's Principle</h4>
              </div>
              <ul className="principle-list">
                <li>
                  <strong>Pressure:</strong> Increasing pressure shifts equilibrium to the right (fewer moles of gas).
                </li>
                <li>
                  <strong>Temperature:</strong> Decreasing temperature favors the exothermic forward reaction.
                </li>
                <li>
                  <strong>Catalyst:</strong> Iron catalyst speeds up both reactions equally without shifting equilibrium.
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="periodic-container luxury-card">
          <div className="periodic-layout">
            <div className="periodic-grid">
              {elements.map(el => (
                <div 
                  key={el.symbol}
                  className={`element-cell ${el.group} ${selectedElement.symbol === el.symbol ? 'selected' : ''}`}
                  style={{ gridColumn: el.col, gridRow: el.row }}
                  onClick={() => setSelectedElement(el)}
                >
                  <span className="el-num">{el.num}</span>
                  <span className="el-sym">{el.symbol}</span>
                </div>
              ))}
            </div>

            <div className="element-details">
              <div className={`detail-card ${selectedElement.group}`}>
                <div className="detail-header">
                  <span className="detail-num">{selectedElement.num}</span>
                  <AtomIcon size={24} className="detail-icon" />
                </div>
                <h2 className="detail-sym">{selectedElement.symbol}</h2>
                <h3 className="detail-name">{selectedElement.name}</h3>
                <div className="detail-group">Group: <span>{selectedElement.group}</span></div>
                
                <div className="detail-stats">
                  <div className="stat-row">
                    <span>Atomic Mass</span>
                    <span>~{(selectedElement.num * 2.01).toFixed(2)} u</span>
                  </div>
                  <div className="stat-row">
                    <span>Electron Config</span>
                    <span>[He] 2s...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .chemistry-module {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeIn var(--transition-normal);
        }

        .module-header {
          padding: 32px 48px;
        }

        .title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .title-row h3 {
          font-family: var(--font-primary);
          font-size: 24px;
          font-weight: 500;
        }

        .sim-tabs {
          display: flex;
          gap: 16px;
          margin-top: 24px;
          border-bottom: 1px solid rgba(90, 77, 65, 0.1);
          padding-bottom: 16px;
        }

        .sim-tab {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          color: var(--color-text-secondary);
          background: transparent;
          border: 1px solid transparent;
          border-radius: var(--border-radius-sm);
          transition: var(--transition-fast);
        }

        .sim-tab:hover {
          background: rgba(90, 77, 65, 0.05);
        }

        .sim-tab.active {
          color: var(--color-text-primary);
          background: var(--color-white);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: var(--shadow-sm);
        }

        /* Reactions Styles */
        .reaction-container {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .reaction-equation {
          padding: 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .reaction-equation h4 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
        }

        .equation {
          font-family: var(--font-serif);
          font-size: 42px;
          color: var(--color-text-primary);
          margin-bottom: 16px;
          letter-spacing: 2px;
        }

        .sub {
          font-size: 0.5em;
          vertical-align: sub;
        }

        .enthalpy {
          font-family: monospace;
          font-size: 16px;
          color: var(--color-accent);
          padding: 8px 16px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: var(--border-radius-full);
        }

        .diagram-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .diagram-card, .info-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }

        .card-header h4 {
          font-family: var(--font-primary);
          font-size: 18px;
        }

        .svg-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(90, 77, 65, 0.02);
          border-radius: var(--border-radius-sm);
        }

        .energy-chart {
          width: 100%;
          max-width: 400px;
        }

        .principle-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .principle-list li {
          font-size: 15px;
          line-height: 1.6;
          color: var(--color-text-secondary);
          padding: 16px;
          background: rgba(90, 77, 65, 0.02);
          border-left: 3px solid var(--color-accent);
          border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
        }

        .principle-list strong {
          color: var(--color-text-primary);
          display: block;
          margin-bottom: 4px;
        }

        /* Periodic Table Styles */
        .periodic-container {
          padding: 48px;
        }

        .periodic-layout {
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }

        .periodic-grid {
          display: grid;
          grid-template-columns: repeat(18, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 4px;
          flex: 2;
        }

        .element-cell {
          aspect-ratio: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(90, 77, 65, 0.1);
          border-radius: 4px;
          cursor: pointer;
          transition: all var(--transition-fast);
          background: var(--color-white);
        }

        .element-cell:hover {
          transform: scale(1.1);
          box-shadow: var(--shadow-sm);
          z-index: 10;
        }

        .element-cell.selected {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 2px var(--color-accent-light);
          z-index: 5;
        }

        .el-num {
          font-size: 8px;
          color: var(--color-text-secondary);
          align-self: flex-start;
          padding-left: 4px;
        }

        .el-sym {
          font-family: var(--font-serif);
          font-size: 16px;
          font-weight: bold;
          color: var(--color-text-primary);
        }

        /* Element Groups Colors */
        .element-cell.nonmetal { background: rgba(212, 175, 55, 0.05); }
        .element-cell.noble { background: rgba(180, 160, 220, 0.1); }
        .element-cell.alkali { background: rgba(220, 100, 100, 0.05); }
        .element-cell.alkaline { background: rgba(220, 150, 100, 0.05); }
        .element-cell.metalloid { background: rgba(100, 200, 150, 0.05); }
        .element-cell.halogen { background: rgba(100, 180, 220, 0.05); }
        .element-cell.metal { background: rgba(150, 150, 150, 0.05); }

        .element-details {
          flex: 1;
          min-width: 250px;
        }

        .detail-card {
          padding: 32px;
          border-radius: var(--border-radius-md);
          background: var(--color-base-alt);
          border: 1px solid rgba(212, 175, 55, 0.2);
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .detail-header {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .detail-num {
          font-family: monospace;
          font-size: 24px;
          color: var(--color-text-secondary);
        }

        .detail-icon {
          color: var(--color-accent);
          opacity: 0.5;
        }

        .detail-sym {
          font-family: var(--font-serif);
          font-size: 64px;
          line-height: 1;
          margin-bottom: 8px;
          color: var(--color-text-primary);
        }

        .detail-name {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 8px;
        }

        .detail-group {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-text-secondary);
          margin-bottom: 32px;
        }

        .detail-group span {
          color: var(--color-accent);
        }

        .detail-stats {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 12px;
          border-top: 1px solid rgba(90, 77, 65, 0.1);
          padding-top: 24px;
        }

        .stat-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--color-text-secondary);
        }

        .stat-row span:last-child {
          color: var(--color-text-primary);
          font-family: monospace;
        }
      `}</style>
    </div>
  );
};

export default ChemistryModule;
