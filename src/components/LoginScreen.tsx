import React, { useState, useEffect } from 'react';
import { Mail, Lock, BrainCircuit, Sparkles, CheckCircle, Loader2, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

// ── Sign-in progress animation steps ──────────────────────────────────────────
const LOGIN_STEPS = [
  { id: 'auth',      label: 'Verifying credentials...',       duration: 600  },
  { id: 'profile',   label: 'Loading your profile...',        duration: 500  },
  { id: 'progress',  label: 'Syncing your study progress...',  duration: 700  },
  { id: 'ai',        label: 'Initialising AI systems...',      duration: 500  },
  { id: 'done',      label: 'Welcome back! 🚀',               duration: 400  },
];

const SignInProgress: React.FC<{ email: string; onComplete: () => void }> = ({ email, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  useEffect(() => {
    let stepIndex = 0;

    const runStep = () => {
      if (stepIndex >= LOGIN_STEPS.length) {
        setTimeout(onComplete, 300);
        return;
      }
      setCurrentStep(stepIndex);
      const dur = LOGIN_STEPS[stepIndex].duration;
      setTimeout(() => {
        setCompletedSteps(prev => [...prev, stepIndex]);
        stepIndex++;
        runStep();
      }, dur);
    };

    runStep();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const name = email.split('@')[0];

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', padding: '48px 32px', textAlign: 'center',
      animation: 'fadeIn 0.4s ease',
    }}>
      {/* Avatar ring */}
      <div style={{
        position: 'relative', width: 96, height: 96,
        marginBottom: 32,
      }}>
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'rotate(-90deg)' }} viewBox="0 0 96 96">
          <circle cx="48" cy="48" r="44" fill="none" stroke="rgba(212,175,55,0.1)" strokeWidth="4" />
          <circle
            cx="48" cy="48" r="44" fill="none"
            stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round"
            strokeDasharray={276}
            strokeDashoffset={276 - (276 * ((currentStep + 1) / LOGIN_STEPS.length))}
            style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.4,0,0.2,1)' }}
          />
        </svg>
        <div style={{
          position: 'absolute', inset: 8,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--color-base-alt), var(--color-base-deep))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, fontWeight: 800, color: 'var(--color-accent)',
          textTransform: 'uppercase',
        }}>
          {name.charAt(0)}
        </div>
      </div>

      <h2 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>
        Hey, {name}!
      </h2>
      <p style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 40 }}>
        Setting up your personalised workspace…
      </p>

      <div style={{ width: '100%', maxWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {LOGIN_STEPS.map((step, i) => {
          const isComplete = completedSteps.includes(i);
          const isActive = currentStep === i && !isComplete;
          const isPending = i > currentStep;
          return (
            <div
              key={step.id}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                opacity: isPending ? 0.3 : 1,
                transition: 'opacity 0.4s ease',
              }}
            >
              <div style={{ flexShrink: 0, width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isComplete
                  ? <CheckCircle size={22} color="#10b981" strokeWidth={2.5} />
                  : isActive
                    ? <Loader2 size={20} color="var(--color-accent)" style={{ animation: 'spin 0.9s linear infinite' }} />
                    : <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-border-strong)' }} />
                }
              </div>
              <span style={{
                fontSize: 14, fontWeight: isActive ? 600 : 400,
                color: isComplete ? '#10b981' : isActive ? 'var(--color-text-primary)' : 'var(--color-text-muted)',
                transition: 'color 0.3s',
              }}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div style={{ width: '100%', maxWidth: 320, height: 4, background: 'var(--color-border)', borderRadius: 99, marginTop: 32, overflow: 'hidden' }}>
        <div style={{
          height: '100%',
          width: `${((currentStep + 1) / LOGIN_STEPS.length) * 100}%`,
          background: 'linear-gradient(90deg, var(--color-accent-dark), var(--color-accent))',
          borderRadius: 99,
          transition: 'width 0.6s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: '0 0 12px rgba(212,175,55,0.4)',
        }} />
      </div>
    </div>
  );
};

// ── Main Login Screen ─────────────────────────────────────────────────────────
export const LoginScreen: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [pendingEmail, setPendingEmail] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const { mockLogin } = useAuth();

  const triggerLogin = (emailAddr: string) => {
    setPendingEmail(emailAddr);
    setShowProgress(true);
  };

  const handleProgressComplete = () => {
    mockLogin(pendingEmail);
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      triggerLogin('scholar@gmail.com');
    }, 400);
  };

  const handleEmailAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { setError('Please enter an email.'); return; }
    if (!password) { setError('Please enter a password.'); return; }
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      triggerLogin(email);
    }, 400);
  };

  return (
    <>
      <style>{`
        @keyframes floatUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes shimmer {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.3); }
          50%       { box-shadow: 0 0 0 10px rgba(212,175,55,0); }
        }
        .login-field {
          display: flex; align-items: center;
          background: var(--color-base-alt);
          border: 1.5px solid var(--color-border);
          border-radius: 12px;
          padding: 0 16px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .login-field.focused {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.12);
        }
        .login-field input {
          width: 100%; padding: 14px 10px;
          background: transparent; border: none;
          color: var(--color-text-primary); outline: none;
          font-size: 15px; font-family: var(--font-primary);
        }
        .login-field input::placeholder { color: var(--color-text-muted); }
        .social-btn {
          width: 100%; padding: 14px;
          background: var(--color-base-alt);
          border: 1.5px solid var(--color-border);
          border-radius: 14px;
          color: var(--color-text-primary);
          font-size: 15px; font-weight: 600;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          cursor: pointer; transition: all 0.2s;
          margin-bottom: 24px;
        }
        .social-btn:hover { border-color: rgba(212,175,55,0.4); background: var(--color-base-deep); transform: translateY(-1px); }
        .login-submit {
          width: 100%; padding: 15px;
          background: linear-gradient(135deg, var(--color-accent-dark), var(--color-accent));
          border: none; border-radius: 14px;
          color: #000; font-size: 15px; font-weight: 700;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: all 0.25s; letter-spacing: 0.3px;
        }
        .login-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212,175,55,0.35);
        }
        .login-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .bypass-btn {
          width: 100%; padding: 11px;
          margin-top: 16px; background: transparent;
          border: 1px dashed var(--color-border);
          border-radius: 10px; color: var(--color-text-muted);
          cursor: pointer; font-size: 12px; transition: all 0.2s;
        }
        .bypass-btn:hover { border-color: rgba(212,175,55,0.3); color: var(--color-accent); }
      `}</style>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px', width: '100%', maxWidth: 420,
      }}>
        <div
          className="luxury-card"
          style={{ width: '100%', padding: showProgress ? 0 : '44px 40px', position: 'relative', zIndex: 100, overflow: 'hidden', transition: 'padding 0.4s' }}
        >
          {showProgress ? (
            <SignInProgress email={pendingEmail} onComplete={handleProgressComplete} />
          ) : (
            <>
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: 32, animation: 'floatUp 0.5s ease both' }}>
                <div style={{
                  display: 'inline-flex', padding: 14, marginBottom: 18,
                  background: 'linear-gradient(135deg, rgba(212,175,55,0.12), rgba(212,175,55,0.04))',
                  borderRadius: '50%',
                  border: '1px solid rgba(212,175,55,0.2)',
                  animation: 'pulse-glow 3s ease infinite',
                }}>
                  <BrainCircuit size={34} color="var(--color-accent)" />
                </div>
                <h1 style={{ fontSize: 26, fontWeight: 800, marginBottom: 8, letterSpacing: '-0.5px', color: 'var(--color-text-primary)' }}>
                  Socratic Study Hub
                </h1>
                <p style={{ color: 'var(--color-text-muted)', fontSize: 14, lineHeight: 1.5 }}>
                  {isLogin ? 'Sign in to continue your learning journey.' : 'Create an account to get started.'}
                </p>
              </div>

              {/* Error */}
              {error && (
                <div style={{
                  background: 'rgba(239,68,68,0.08)', color: '#ef4444',
                  padding: '12px 16px', borderRadius: 10, marginBottom: 20,
                  fontSize: 13, border: '1px solid rgba(239,68,68,0.2)',
                  animation: 'floatUp 0.3s ease',
                }}>
                  {error}
                </div>
              )}

              {/* Google */}
              <button className="social-btn" onClick={handleGoogleLogin} disabled={loading} style={{ animationDelay: '0.05s', animation: 'floatUp 0.5s 0.05s ease both' }}>
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </button>

              {/* Divider */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24, animation: 'floatUp 0.5s 0.1s ease both' }}>
                <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
                <span style={{ color: 'var(--color-text-muted)', fontSize: 11, fontWeight: 600, letterSpacing: '1px' }}>OR</span>
                <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
              </div>

              {/* Form */}
              <form onSubmit={handleEmailAuth} style={{ animation: 'floatUp 0.5s 0.15s ease both' }}>
                <div style={{ marginBottom: 14 }}>
                  <div className={`login-field ${focusedField === 'email' ? 'focused' : ''}`}>
                    <Mail size={17} color="var(--color-text-muted)" />
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div className={`login-field ${focusedField === 'password' ? 'focused' : ''}`}>
                    <Lock size={17} color="var(--color-text-muted)" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      onFocus={() => setFocusedField('password')}
                      onBlur={() => setFocusedField(null)}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(v => !v)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-muted)', padding: '4px', display: 'flex' }}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="login-submit" disabled={loading}>
                  {loading
                    ? <><Loader2 size={16} style={{ animation: 'spin 0.9s linear infinite' }} /> Processing…</>
                    : <>{isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={16} /></>
                  }
                </button>
              </form>

              <p style={{ textAlign: 'center', marginTop: 20, fontSize: 14, color: 'var(--color-text-muted)', animation: 'floatUp 0.5s 0.2s ease both' }}>
                {isLogin ? "Don't have an account? " : 'Already have an account? '}
                <button
                  type="button"
                  onClick={() => { setIsLogin(!isLogin); setError(''); }}
                  style={{ background: 'none', border: 'none', color: 'var(--color-accent)', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
              </p>

              <button
                type="button"
                className="bypass-btn"
                onClick={() => triggerLogin('miraclechimdindu2008@gmail.com')}
              >
                ⚡ Admin Quick Login
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
