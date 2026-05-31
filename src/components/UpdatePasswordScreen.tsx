import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Loader2, ArrowRight, CheckCircle, KeyRound, X } from 'lucide-react';
import { supabase } from '../utils/supabase';

interface UpdatePasswordScreenProps {
  onSuccess: () => void;
  onClose?: () => void;
}

export const UpdatePasswordScreen: React.FC<UpdatePasswordScreenProps> = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);
    const { error: err } = await supabase.auth.updateUser({
      password: password
    });
    setLoading(false);

    if (err) {
      setError(err.message || 'Failed to update password.');
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 420, padding: '20px' }}>
      {onClose && (
        <button onClick={onClose} style={{ position: 'absolute', top: 28, right: 28, background: 'rgba(255,255,255,0.1)', border: '1px solid var(--color-border)', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--color-text-muted)', zIndex: 10 }}>
          <X size={18} />
        </button>
      )}

      <div className="luxury-card" style={{ width: '100%', padding: '44px 40px', overflow: 'hidden' }}>
        {isSuccess ? (
          <div style={{ textAlign: 'center', animation: 'floatUp 0.5s ease' }}>
            <div style={{ display: 'inline-flex', padding: 20, marginBottom: 20, background: 'rgba(16,185,129,0.1)', borderRadius: '50%', border: '1px solid rgba(16,185,129,0.3)' }}>
              <CheckCircle size={36} color="#10b981" />
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 8 }}>Password Updated</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.6, marginBottom: 20 }}>
              Your password has been successfully reset. Redirecting you to the dashboard...
            </p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: 28 }}>
              <div style={{ display: 'inline-flex', padding: 14, marginBottom: 16, background: 'linear-gradient(135deg,rgba(212,175,55,0.12),rgba(212,175,55,0.04))', borderRadius: '50%', border: '1px solid rgba(212,175,55,0.2)' }}>
                <KeyRound size={30} color="var(--color-accent)" />
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>Create New Password</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 13 }}>Enter a strong password for your account.</p>
            </div>

            {error && <div style={{ background: 'rgba(239,68,68,0.08)', color: '#ef4444', padding: '12px 16px', borderRadius: 10, marginBottom: 16, fontSize: 13, border: '1px solid rgba(239,68,68,0.2)' }}>{error}</div>}

            <form onSubmit={handleUpdate} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className={`login-field ${focusedField === 'password' ? 'focused' : ''}`}>
                <Lock size={17} color="var(--color-text-muted)" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="New password (min. 6 chars)" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  onFocus={() => setFocusedField('password')} 
                  onBlur={() => setFocusedField(null)} 
                  required 
                />
                <button type="button" onClick={() => setShowPassword(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: '4px', display: 'flex' }}>
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>

              <div className={`login-field ${focusedField === 'confirm' ? 'focused' : ''}`}>
                <Lock size={17} color="var(--color-text-muted)" />
                <input 
                  type="password" 
                  placeholder="Confirm new password" 
                  value={confirmPassword} 
                  onChange={e => setConfirmPassword(e.target.value)} 
                  onFocus={() => setFocusedField('confirm')} 
                  onBlur={() => setFocusedField(null)} 
                  required 
                />
              </div>

              <button type="submit" className="login-submit" disabled={loading} style={{ marginTop: 10 }}>
                {loading ? <><Loader2 size={16} style={{ animation: 'spin 0.9s linear infinite' }} /> Updating…</> : <>Save Password <ArrowRight size={16} /></>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
