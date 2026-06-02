import React from 'react';
import { Clock, LogIn } from 'lucide-react';

interface SessionExpiredScreenProps {
  onLoginClick: () => void;
}

export const SessionExpiredScreen: React.FC<SessionExpiredScreenProps> = ({ onLoginClick }) => {
  return (
    <div className="session-expired-screen" style={{
      position: 'fixed', inset: 0, zIndex: 9999, background: 'var(--color-bg-elevated)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '24px', textAlign: 'center'
    }}>
      <div className="ses-card luxury-card" style={{ maxWidth: 400, width: '100%', padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(239, 68, 68, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
          <Clock size={32} color="#ef4444" />
        </div>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 24, marginBottom: 12 }}>Session Expired</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 32, lineHeight: 1.5 }}>
          You've been inactive for 30 minutes. For your security, your session has been locked and you have been signed out.
          <br /><br />
          <strong style={{ color: 'var(--color-text-primary)' }}>Don't worry — all your study progress, XP, and streaks have been safely automatically saved.</strong>
        </p>
        <button 
          onClick={onLoginClick}
          className="tm-nav-btn primary" 
          style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px 24px', fontSize: 16 }}
        >
          <LogIn size={18} />
          Sign In Again
        </button>
      </div>
    </div>
  );
};
