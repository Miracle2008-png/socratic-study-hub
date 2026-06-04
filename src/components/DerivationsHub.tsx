import React, { useState, useMemo, useEffect } from 'react';
import { mathContentExt } from '../data/mathContentExt';
import { physicsContentExt } from '../data/physicsContentExt';
import { ContentGenerator } from '../utils/nlpEngine';
import { Calculator, Atom, Search, X, BookOpen } from 'lucide-react';
import { TypewriterMarkdown } from './TypewriterMarkdown';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const MathTitle: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split('$');
  return (
    <>
      {parts.map((part, i) => {
        if (i % 2 === 1) {
          return <span key={i} dangerouslySetInnerHTML={{ __html: katex.renderToString(part, { throwOnError: false }) }} />;
        }
        return <React.Fragment key={i}>{part}</React.Fragment>;
      })}
    </>
  );
};

export const DerivationsHub: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState<'all' | 'mathematics' | 'physics'>('all');
  const [search, setSearch] = useState('');
  const [selectedDerivation, setSelectedDerivation] = useState<{ title: string, content: string, subject: string, topicTitle: string } | null>(null);

  // Extract all derivations globally
  const allDerivations = useMemo(() => {
    const extracted: Array<{ subject: string, topicTitle: string, title: string, content: string }> = [];

    // Math
    Object.entries(mathContentExt).forEach(([title, content]) => {
      const derivations = ContentGenerator.extractDerivations(content);
      derivations.forEach(d => {
        extracted.push({ subject: 'mathematics', topicTitle: title, title: d.title, content: d.content });
      });
    });

    // Physics
    Object.entries(physicsContentExt).forEach(([title, content]) => {
      const derivations = ContentGenerator.extractDerivations(content);
      derivations.forEach(d => {
        extracted.push({ subject: 'physics', topicTitle: title, title: d.title, content: d.content });
      });
    });

    return extracted;
  }, []);

  const filteredDerivations = allDerivations.filter(d => {
    if (activeSubject !== 'all' && d.subject !== activeSubject) return false;
    if (search && !d.title.toLowerCase().includes(search.toLowerCase()) && !d.topicTitle.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedDerivation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [selectedDerivation]);

  return (
    <div className="module-container">
      <div className="module-header glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 24, padding: '24px 32px', borderRadius: 16 }}>
        <div>
          <h1 className="text-gold-gradient" style={{ fontSize: '2.5rem', marginBottom: 8 }}>Derivations & Proofs</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>
            Master the underlying logic of Mathematics and Physics.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <div className="search-bar" style={{ width: '250px', flex: '1 1 200px' }}>
            <Search size={18} color="var(--color-text-secondary)" />
            <input 
              type="text" 
              placeholder="Search proofs..." 
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          
          <div style={{ display: 'flex', background: 'var(--color-surface)', borderRadius: 24, padding: 4, border: 'var(--border-soft)' }}>
            <button 
              onClick={() => setActiveSubject('all')}
              style={{
                padding: '8px 16px', borderRadius: 20, border: 'none', cursor: 'pointer',
                background: activeSubject === 'all' ? 'var(--color-accent)' : 'transparent',
                color: activeSubject === 'all' ? '#000' : 'var(--color-text-secondary)',
                fontWeight: 600
              }}
            >
              All
            </button>
            <button 
              onClick={() => setActiveSubject('mathematics')}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', borderRadius: 20, border: 'none', cursor: 'pointer',
                background: activeSubject === 'mathematics' ? 'var(--color-math)' : 'transparent',
                color: activeSubject === 'mathematics' ? '#000' : 'var(--color-text-secondary)',
                fontWeight: 600
              }}
            >
              <Calculator size={16} /> Math
            </button>
            <button 
              onClick={() => setActiveSubject('physics')}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', borderRadius: 20, border: 'none', cursor: 'pointer',
                background: activeSubject === 'physics' ? 'var(--color-physics)' : 'transparent',
                color: activeSubject === 'physics' ? '#000' : 'var(--color-text-secondary)',
                fontWeight: 600
              }}
            >
              <Atom size={16} /> Physics
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 24 }}>
        {filteredDerivations.map((deriv, idx) => (
          <div key={idx} className="luxury-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                {deriv.subject === 'mathematics' ? <Calculator size={16} color="var(--color-math)"/> : <Atom size={16} color="var(--color-physics)"/>}
                <span style={{ 
                  fontSize: '0.8rem', 
                  color: deriv.subject === 'mathematics' ? 'var(--color-math)' : 'var(--color-physics)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {deriv.topicTitle}
                </span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: 12, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
                <MathTitle text={deriv.title} />
              </h3>
            </div>
            
            <button 
              onClick={() => setSelectedDerivation(deriv)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-primary)',
                padding: '12px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 600,
                marginTop: 20,
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-bg-elevated)'; e.currentTarget.style.borderColor = 'var(--color-accent)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'var(--color-surface)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
            >
              <BookOpen size={18} />
              View Proof
            </button>
          </div>
        ))}
      </div>
      
      {filteredDerivations.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--color-text-secondary)' }}>
          <p>No derivations found matching your search.</p>
        </div>
      )}

      {/* Full-Screen Derivation Modal */}
      {selectedDerivation && (
        <div 
          className="anim-fade-in"
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(10, 10, 12, 0.7)',
            backdropFilter: 'blur(16px)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedDerivation(null);
          }}
        >
          <div 
            className="anim-slide-up glass-panel"
            style={{
              width: '100%',
              maxWidth: '800px',
              maxHeight: '90vh',
              borderRadius: '24px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              overflow: 'hidden'
            }}
          >
            <div style={{ 
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
              padding: '24px 32px', borderBottom: '1px solid var(--color-border)' 
            }}>
              <div>
                <span style={{ 
                  fontSize: '0.85rem', 
                  color: selectedDerivation.subject === 'mathematics' ? 'var(--color-math)' : 'var(--color-physics)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {selectedDerivation.topicTitle}
                </span>
                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-text-primary)', marginTop: 4 }}>
                  <MathTitle text={selectedDerivation.title} />
                </h2>
              </div>
              <button 
                onClick={() => setSelectedDerivation(null)}
                style={{
                  background: 'var(--color-surface)', border: 'none',
                  width: 40, height: 40, borderRadius: '50%',
                  display: 'flex', justifyContent: 'center', alignItems: 'center',
                  cursor: 'pointer', color: 'var(--color-text-secondary)'
                }}
              >
                <X size={20} />
              </button>
            </div>
            
            <div style={{ padding: '32px', overflowY: 'auto', flex: 1 }}>
              <TypewriterMarkdown 
                content={selectedDerivation.content} 
                speed={300} // Fast but readable reveal
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

