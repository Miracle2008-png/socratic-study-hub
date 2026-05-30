import React, { useState } from 'react';
import { supabase } from '../utils/supabase';
import { BookOpen, GraduationCap, Mail, Lock, BrainCircuit } from 'lucide-react';

export const LoginScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        }
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        else {
            alert('Signup successful! Please check your email for verification.');
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      background: 'var(--color-bg)'
    }}>
      <div className="luxury-card" style={{ maxWidth: 400, width: '100%', padding: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ display: 'inline-flex', padding: 12, background: 'var(--color-base-alt)', borderRadius: '50%', marginBottom: 16 }}>
            <BrainCircuit size={32} color="var(--color-accent)" />
          </div>
          <h1 style={{ fontSize: 24, marginBottom: 8 }}>Socratic Study Hub</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 14 }}>
            Sign in to sync your progress and access Premium AI.
          </p>
        </div>

        {error && (
          <div style={{ background: '#ef444422', color: '#ef4444', padding: '12px', borderRadius: '8px', marginBottom: '20px', fontSize: '13px' }}>
            {error}
          </div>
        )}

        <button 
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            width: '100%',
            padding: '14px',
            background: 'var(--color-base-alt)',
            border: '1px solid var(--color-border)',
            borderRadius: '12px',
            color: 'var(--color-text)',
            fontSize: '15px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            cursor: loading ? 'not-allowed' : 'pointer',
            marginBottom: '24px'
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
          <span style={{ color: 'var(--color-text-muted)', fontSize: 12 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
        </div>

        <form onSubmit={handleEmailAuth}>
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-base-alt)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '0 16px' }}>
              <Mail size={18} color="var(--color-text-muted)" />
              <input 
                type="email" 
                placeholder="Email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', padding: '14px', background: 'transparent', border: 'none', color: 'var(--color-text)', outline: 'none' }}
                required
              />
            </div>
          </div>
          <div style={{ marginBottom: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-base-alt)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '0 16px' }}>
              <Lock size={18} color="var(--color-text-muted)" />
              <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', padding: '14px', background: 'transparent', border: 'none', color: 'var(--color-text)', outline: 'none' }}
                required
              />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={loading}
            className="gold-btn"
            style={{ width: '100%', padding: '14px', fontSize: 15, justifyContent: 'center' }}
          >
            {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 14, color: 'var(--color-text-secondary)' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontWeight: 600, cursor: 'pointer' }}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </p>
      </div>
    </div>
  );
};
