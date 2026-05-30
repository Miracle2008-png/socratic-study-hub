import React from 'react';
import { Sparkles, Check, Zap, Brain, Shield, ChevronRight } from 'lucide-react';

interface ProUpgradeScreenProps {
  featureName: string;
  onUpgradeClick: () => void;
}

export const ProUpgradeScreen: React.FC<ProUpgradeScreenProps> = ({ featureName, onUpgradeClick }) => {
  return (
    <div className="pro-upgrade-container fade-in">
      <div className="pro-upgrade-content">
        <div className="pro-badge">
          <Sparkles size={14} />
          <span>Lumen Pro Exclusive</span>
        </div>
        
        <h1 className="pro-title">
          Unlock <span>{featureName}</span>
        </h1>
        
        <p className="pro-subtitle">
          Take your academic journey to the absolute highest level. Join the elite students using Lumen Pro to master complex subjects in half the time.
        </p>
        
        <div className="pro-pricing-card">
          <div className="pricing-header">
            <h3>Lumen Pro</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">49</span>
              <span className="period">.99</span>
            </div>
            <p className="billing-info">One-Time Payment • Lifetime Access</p>
          </div>
          
          <div className="pro-features-list">
            <div className="pro-feature">
              <div className="feature-icon-wrap"><Zap size={16} /></div>
              <span>Unlimited Socratic AI Tutoring</span>
            </div>
            <div className="pro-feature">
              <div className="feature-icon-wrap"><Brain size={16} /></div>
              <span>Upload & Analyze Unlimited PDFs/Textbooks</span>
            </div>
            <div className="pro-feature">
              <div className="feature-icon-wrap"><Check size={16} /></div>
              <span>Advanced 3D Visualizer Access</span>
            </div>
            <div className="pro-feature">
              <div className="feature-icon-wrap"><Shield size={16} /></div>
              <span>Priority Elite Support</span>
            </div>
          </div>
          
          <button className="pro-upgrade-btn pulse-glow" onClick={onUpgradeClick}>
            Unlock Lifetime Access
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .pro-upgrade-container {
          width: 100%;
          height: 100%;
          min-height: calc(100vh - 80px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        /* Luxurious animated background glow */
        .pro-upgrade-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, rgba(0,0,0,0) 70%);
          z-index: 0;
          animation: slowPulse 6s infinite alternate;
          pointer-events: none;
        }

        @keyframes slowPulse {
          0% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.9); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
        }

        .pro-upgrade-content {
          max-width: 500px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .pro-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(212,175,55,0.15);
          color: var(--color-accent);
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 24px;
          border: 1px solid rgba(212,175,55,0.3);
        }

        .pro-title {
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 800;
          margin-bottom: 16px;
          line-height: 1.2;
        }

        .pro-title span {
          background: linear-gradient(135deg, var(--color-accent) 0%, #fff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .pro-subtitle {
          color: var(--color-text-secondary);
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 40px;
          max-width: 400px;
        }

        .pro-pricing-card {
          width: 100%;
          background: var(--color-base-alt);
          border-radius: 24px;
          padding: 40px;
          border: 1px solid var(--color-border);
          position: relative;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
          overflow: hidden;
        }

        .pro-pricing-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--color-accent-dark), var(--color-accent), var(--color-accent-light));
        }

        .pricing-header {
          margin-bottom: 32px;
        }

        .pricing-header h3 {
          font-family: var(--font-display);
          font-size: 18px;
          color: var(--color-text-secondary);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 16px;
        }

        .price {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 4px;
          margin-bottom: 8px;
        }

        .currency {
          font-size: 24px;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-top: 6px;
        }

        .amount {
          font-family: var(--font-display);
          font-size: 56px;
          font-weight: 800;
          line-height: 1;
        }

        .period {
          font-size: 16px;
          color: var(--color-text-muted);
          align-self: flex-end;
          margin-bottom: 8px;
        }

        .billing-info {
          font-size: 13px;
          color: var(--color-text-muted);
        }

        .pro-features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
          text-align: left;
        }

        .pro-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 500;
        }

        .feature-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(212,175,55,0.1);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .pro-upgrade-btn {
          width: 100%;
          padding: 18px;
          border-radius: 16px;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          font-family: var(--font-display);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .pro-upgrade-btn::after {
          content: '';
          position: absolute;
          top: -50%; left: -50%;
          width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: rotate(45deg);
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .pulse-glow {
          box-shadow: 0 0 20px rgba(212,175,55,0.4);
        }

        .pro-upgrade-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(212,175,55,0.5);
        }
      `}</style>
    </div>
  );
};
