import React, { useState, useEffect } from 'react';
import { Flashcard, SRSEngine, Grade } from '../data/srsEngine';
import { ContentGenerator } from '../utils/nlpEngine';
import { BrainCircuit, Check, X, RotateCcw, ArrowRight, Plus, Trash2, Loader2, BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { useAuth } from '../context/AuthContext';
import { supabase } from '../utils/supabase';

const initialDeck: Flashcard[] = [
  SRSEngine.createCard('1', 'math', 'Derivative of $x^n$', '$n x^{n-1}$'),
  SRSEngine.createCard('2', 'physics', "Newton's Second Law", '$F = ma$'),
  SRSEngine.createCard('3', 'chemistry', 'Ideal Gas Law', '$PV = nRT$'),
  SRSEngine.createCard('4', 'biology', 'Hardy-Weinberg Equation', '$p^2 + 2pq + q^2 = 1$'),
  SRSEngine.createCard('5', 'math', "Euler's Identity", '$e^{i\\pi} + 1 = 0$'),
];

const SUBJECTS = ['math', 'physics', 'chemistry', 'biology', 'other'];

const SpacedRepetition: React.FC = () => {
  const { currentUser } = useAuth();
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState<'review' | 'mycards' | 'add'>('review');

  // Add card form
  const [newFront, setNewFront] = useState('');
  const [newBack, setNewBack] = useState('');
  const [newSubject, setNewSubject] = useState('math');

  // Generate from notes
  const [notesText, setNotesText] = useState('');
  const [notesSubject, setNotesSubject] = useState('math');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCount, setGeneratedCount] = useState<number | null>(null);

  useEffect(() => {
    if (!currentUser) return;
    const fetchDeck = async () => {
      const { data, error } = await supabase.from('flashcards_decks').select('cards').eq('user_id', currentUser.id).single();
      if (data && data.cards && data.cards.length > 0) {
        setDeck(data.cards as Flashcard[]);
        setDueCards((data.cards as Flashcard[]).filter((c) => c.nextReviewDate <= Date.now()));
      } else {
        setDeck(initialDeck);
        setDueCards(initialDeck);
      }
    };
    fetchDeck();
  }, [currentUser]);

  const saveDeck = async (newDeck: Flashcard[]) => {
    setDeck(newDeck);
    setDueCards(newDeck.filter(c => c.nextReviewDate <= Date.now()));
    if (currentUser) {
      await supabase.from('flashcards_decks').upsert({
        user_id: currentUser.id,
        cards: newDeck as any,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' });
    }
  };

  const handleGrade = (grade: Grade) => {
    const updated = SRSEngine.gradeCard(dueCards[currentCardIdx], grade);
    const newDeck = deck.map(c => c.id === updated.id ? updated : c);
    saveDeck(newDeck);
    setIsFlipped(false);
    setCurrentCardIdx(prev => prev + 1);
  };

  const addManualCard = () => {
    if (!newFront.trim() || !newBack.trim()) return;
    const card = SRSEngine.createCard(Date.now().toString(), newSubject, newFront.trim(), newBack.trim());
    const newDeck = [...deck, card];
    saveDeck(newDeck);
    setNewFront('');
    setNewBack('');
  };

  const deleteCard = (id: string) => {
    saveDeck(deck.filter(c => c.id !== id));
  };

  const generateFromNotes = () => {
    if (!notesText.trim()) return;
    setIsGenerating(true);
    setGeneratedCount(null);
    setTimeout(() => {
      const generated = ContentGenerator.generateFlashcards(notesText);
      const newCards: Flashcard[] = generated.map((fc: any, i: number) =>
        SRSEngine.createCard(`gen_${Date.now()}_${i}`, notesSubject, fc.front, fc.back)
      );
      const newDeck = [...deck, ...newCards];
      saveDeck(newDeck);
      setGeneratedCount(newCards.length);
      setIsGenerating(false);
      setNotesText('');
    }, 900);
  };

  const tabs = [
    { id: 'review' as const, label: 'Review Due', count: dueCards.filter(c => c.nextReviewDate <= Date.now()).length },
    { id: 'mycards' as const, label: 'My Cards', count: deck.length },
    { id: 'add' as const, label: 'Add Cards', count: null },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', borderRadius: 10,
    border: '1px solid var(--color-border)', background: 'var(--color-base-alt)',
    color: 'var(--color-text-primary)', fontSize: 14, fontFamily: 'var(--font-body)',
    outline: 'none', boxSizing: 'border-box',
  };

  const selectStyle: React.CSSProperties = {
    ...inputStyle, cursor: 'pointer', width: 'auto', minWidth: 140,
  };

  return (
    <div className="srs-module anim-fade">

      {/* Top Navigation Tabs */}
      <div className="srs-nav-tabs">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`srs-nav-tab ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
            {t.count !== null && (
              <span className={`srs-tab-badge ${t.id === 'review' && t.count > 0 ? 'badge-due' : ''}`}>
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* ── REVIEW TAB ── */}
      {activeTab === 'review' && (() => {
        const due = dueCards.filter(c => c.nextReviewDate <= Date.now());
        if (currentCardIdx >= due.length) {
          return (
            <div className="srs-complete luxury-card">
              <BrainCircuit size={48} style={{ color: '#10b981', marginBottom: 16 }} />
              <h2>All caught up!</h2>
              <p>{deck.length === 0
                ? 'No cards yet — head to "Add Cards" to create some.'
                : "You've reviewed all due flashcards. Come back tomorrow!"}</p>
              <button className="srs-reset-btn" onClick={() => {
                const reset = deck.map(c => ({ ...c, nextReviewDate: Date.now() }));
                saveDeck(reset);
                setCurrentCardIdx(0);
              }}>
                <RotateCcw size={16} /> Reset Review
              </button>
              {deck.length === 0 && (
                <button className="gold-btn" style={{ marginTop: 12 }} onClick={() => setActiveTab('add')}>
                  <Plus size={16} /> Add Cards
                </button>
              )}
            </div>
          );
        }

        const card = due[currentCardIdx];
        return (
          <>
            <div className="srs-header">
              <div>
                <h1 className="srs-title">Flashcard Review</h1>
                <p className="srs-subtitle">Spaced Repetition Algorithm</p>
              </div>
              <div className="srs-progress">Card {currentCardIdx + 1} of {due.length}</div>
            </div>

            <div className="srs-card-container">
              <div className={`srs-flashcard luxury-card ${isFlipped ? 'flipped' : ''}`}>
                <div className="srs-card-front">
                  <div className="srs-card-topic">{card.topicId.toUpperCase()}</div>
                  <div className="srs-card-content">
                    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                      {card.front}
                    </ReactMarkdown>
                  </div>
                  {!isFlipped && (
                    <button className="srs-flip-btn" onClick={() => setIsFlipped(true)}>
                      Show Answer <ArrowRight size={16} />
                    </button>
                  )}
                </div>
                <div className="srs-card-back">
                  <div className="srs-card-topic">ANSWER</div>
                  <div className="srs-card-content">
                    <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                      {card.back}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            </div>

            {isFlipped && (
              <div className="srs-controls anim-fade-up">
                <h3>How well did you remember this?</h3>
                <div className="srs-grading-row">
                  {([0,1,3,4,5] as Grade[]).map((g, _, arr) => {
                    const labels: Record<number,string> = {0:'Blackout',1:'Wrong',3:'Hard',4:'Good',5:'Perfect'};
                    const colors: Record<number,string> = {0:'#ef4444',1:'#f97316',3:'#eab308',4:'#84cc16',5:'#10b981'};
                    return (
                      <button key={g} className={`srs-grade-btn grade-${g}`}
                        onClick={() => handleGrade(g)}
                        style={{ '--grade-color': colors[g] } as React.CSSProperties}>
                        <span className="g-num">{g}</span>
                        <span className="g-label">{labels[g]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        );
      })()}

      {/* ── MY CARDS TAB ── */}
      {activeTab === 'mycards' && (
        <div className="srs-mycards">
          <div className="srs-section-header">
            <h2>My Cards <span style={{ color: 'var(--color-text-muted)', fontSize: 16 }}>({deck.length})</span></h2>
            <button className="srs-add-inline-btn" onClick={() => setActiveTab('add')}>
              <Plus size={14} /> Add Cards
            </button>
          </div>
          {deck.length === 0 ? (
            <div className="srs-empty luxury-card">
              <BookOpen size={40} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
              <p>No cards yet. Head to <strong>Add Cards</strong> to get started.</p>
            </div>
          ) : (
            <div className="srs-card-list">
              {deck.map(c => (
                <div key={c.id} className="srs-card-row luxury-card">
                  <span className="srs-card-subject-badge">{c.topicId}</span>
                  <div className="srs-card-row-text">
                    <div className="srs-row-front">
                      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                        {c.front}
                      </ReactMarkdown>
                    </div>
                    <div className="srs-row-back">
                      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                        {c.back}
                      </ReactMarkdown>
                    </div>
                  </div>
                  <button className="srs-delete-btn" onClick={() => deleteCard(c.id)}>
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── ADD CARDS TAB ── */}
      {activeTab === 'add' && (
        <div className="srs-add-section">

          {/* Manual Card Creation */}
          <div className="srs-add-block luxury-card">
            <h3><Plus size={18} style={{ marginRight: 8 }} />Create a Card Manually</h3>
            <div className="srs-form-row">
              <label>Subject</label>
              <select value={newSubject} onChange={e => setNewSubject(e.target.value)} style={selectStyle}>
                {SUBJECTS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
              </select>
            </div>
            <div className="srs-form-row">
              <label>Front (Question / Concept)</label>
              <textarea
                value={newFront}
                onChange={e => setNewFront(e.target.value)}
                placeholder="e.g. What is the integral of sin(x)?"
                rows={2}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
            <div className="srs-form-row">
              <label>Back (Answer / Formula)</label>
              <textarea
                value={newBack}
                onChange={e => setNewBack(e.target.value)}
                placeholder="e.g. $-\\cos(x) + C$"
                rows={2}
                style={{ ...inputStyle, resize: 'vertical' }}
              />
            </div>
            <button
              className="srs-add-btn"
              onClick={addManualCard}
              disabled={!newFront.trim() || !newBack.trim()}
            >
              <Plus size={16} /> Add Card
            </button>
          </div>

          {/* Generate from Notes */}
          <div className="srs-add-block luxury-card">
            <h3><BrainCircuit size={18} style={{ marginRight: 8 }} />Generate from Notes</h3>
            <p className="srs-hint">Paste lecture notes, textbook text or any study material — we'll extract flashcards automatically.</p>
            <div className="srs-form-row">
              <label>Subject</label>
              <select value={notesSubject} onChange={e => setNotesSubject(e.target.value)} style={selectStyle}>
                {SUBJECTS.map(s => <option key={s} value={s}>{s.charAt(0).toUpperCase() + s.slice(1)}</option>)}
              </select>
            </div>
            <div className="srs-form-row">
              <label>Your Notes</label>
              <textarea
                value={notesText}
                onChange={e => { setNotesText(e.target.value); setGeneratedCount(null); }}
                placeholder="Paste your lecture notes, textbook paragraphs, or any study content here..."
                rows={8}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 160 }}
              />
            </div>
            {generatedCount !== null && (
              <div style={{
                padding: '10px 16px', borderRadius: 10, marginBottom: 12,
                background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.25)',
                color: '#10b981', fontSize: 14, fontWeight: 600,
              }}>
                ✓ Generated {generatedCount} new flashcard{generatedCount !== 1 ? 's' : ''}!
              </div>
            )}
            <button
              className="srs-add-btn"
              onClick={generateFromNotes}
              disabled={!notesText.trim() || isGenerating}
            >
              {isGenerating ? <><Loader2 size={16} className="spinner" /> Generating...</> : <><BrainCircuit size={16} /> Generate Flashcards</>}
            </button>
          </div>

        </div>
      )}

      <style>{`
        .srs-module { display: flex; flex-direction: column; align-items: center; padding: 20px 0; gap: 0; }

        /* ─── Nav Tabs ─── */
        .srs-nav-tabs {
          display: flex; gap: 4px; padding: 6px; border-radius: 16px;
          background: var(--color-base-alt); border: 1px solid var(--color-border);
          margin-bottom: 32px; width: 100%; max-width: 700px; justify-content: center;
          flex-wrap: wrap;
        }
        .srs-nav-tab {
          display: flex; align-items: center; gap: 8px; padding: 10px 24px;
          border-radius: 12px; border: none; background: transparent;
          color: var(--color-text-secondary); font-family: var(--font-display);
          font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;
        }
        .srs-nav-tab:hover { color: var(--color-text-primary); }
        .srs-nav-tab.active { background: var(--color-surface); color: var(--color-accent); box-shadow: 0 2px 8px rgba(0,0,0,0.15); }
        .srs-tab-badge {
          display: inline-flex; align-items: center; justify-content: center;
          min-width: 20px; height: 20px; padding: 0 6px;
          border-radius: 10px; font-size: 11px; font-weight: 800;
          background: var(--color-base); color: var(--color-text-muted);
        }
        .badge-due { background: rgba(201,168,76,0.2); color: var(--color-accent); }

        /* ─── Review ─── */
        .srs-header { display: flex; justify-content: space-between; align-items: flex-end; width: 100%; max-width: 700px; margin-bottom: 30px; }
        .srs-title { font-family: var(--font-serif); font-size: 28px; font-weight: 700; color: var(--color-text-primary); margin: 0 0 4px; }
        .srs-subtitle { font-size: 14px; color: var(--color-text-secondary); margin: 0; }
        .srs-progress { background: rgba(201,168,76,0.1); color: var(--color-accent); padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: 700; font-family: var(--font-display); }

        .srs-card-container { perspective: 1000px; width: 100%; max-width: 700px; margin-bottom: 40px; }
        .srs-flashcard { width: 100%; min-height: 340px; position: relative; transition: transform 0.6s cubic-bezier(0.4,0,0.2,1); transform-style: preserve-3d; cursor: pointer; }
        .srs-flashcard.flipped { transform: rotateY(180deg); cursor: default; }
        .srs-card-front, .srs-card-back {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          -webkit-backface-visibility: hidden; backface-visibility: hidden;
          padding: 40px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          background: var(--color-surface); border-radius: inherit;
        }
        .srs-card-back { transform: rotateY(180deg); border: 2px solid var(--color-accent); background: linear-gradient(135deg, var(--color-surface), rgba(201,168,76,0.03)); }
        .srs-card-topic { position: absolute; top: 20px; left: 24px; font-size: 11px; font-weight: 800; font-family: var(--font-display); color: var(--color-text-muted); letter-spacing: 1.5px; }
        .srs-card-content { font-size: 22px; color: var(--color-text-primary); line-height: 1.5; }
        .srs-card-content .katex-display { margin: 20px 0; font-size: 26px; }
        .srs-flip-btn { position: absolute; bottom: 30px; display: flex; align-items: center; gap: 8px; background: transparent; color: var(--color-accent); border: 1px solid var(--color-accent); padding: 10px 24px; border-radius: var(--border-radius-full); font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .srs-flip-btn:hover { background: rgba(201,168,76,0.1); }

        .srs-controls { width: 100%; max-width: 700px; text-align: center; }
        .srs-controls h3 { font-size: 15px; font-family: var(--font-display); color: var(--color-text-secondary); margin-bottom: 16px; }
        .srs-grading-row { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
        .srs-grade-btn { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 10px 16px; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; cursor: pointer; transition: all 0.2s; min-width: 80px; }
        .srs-grade-btn:hover { border-color: var(--grade-color, var(--color-accent)); color: var(--grade-color, var(--color-accent)); transform: translateY(-2px); }
        .g-num { font-size: 18px; font-weight: 800; font-family: var(--font-display); }
        .g-label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

        .srs-complete { text-align: center; padding: 60px 40px; max-width: 500px; margin: 20px auto; display: flex; flex-direction: column; align-items: center; }
        .srs-complete h2 { font-family: var(--font-serif); font-size: 26px; margin-bottom: 12px; }
        .srs-complete p { color: var(--color-text-secondary); margin-bottom: 24px; }
        .srs-reset-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 50px; background: var(--color-base-alt); color: var(--color-text-primary); border: 1px solid var(--color-border); cursor: pointer; transition: all 0.2s; font-weight: 600; font-family: var(--font-display); }
        .srs-reset-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }

        /* ─── My Cards ─── */
        .srs-mycards { width: 100%; max-width: 700px; }
        .srs-section-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
        .srs-section-header h2 { font-family: var(--font-serif); font-size: 22px; margin: 0; }
        .srs-add-inline-btn { display: flex; align-items: center; gap: 6px; padding: 8px 16px; border-radius: 50px; border: 1px solid var(--color-accent); background: rgba(201,168,76,0.08); color: var(--color-accent); font-size: 13px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: var(--font-display); }
        .srs-add-inline-btn:hover { background: rgba(201,168,76,0.15); }
        .srs-empty { text-align: center; padding: 48px; color: var(--color-text-secondary); }
        .srs-card-list { display: flex; flex-direction: column; gap: 10px; }
        .srs-card-row { display: flex; align-items: center; gap: 14px; padding: 14px 18px; }
        .srs-card-subject-badge { flex-shrink: 0; padding: 4px 10px; border-radius: 20px; background: rgba(201,168,76,0.12); color: var(--color-accent); font-size: 11px; font-weight: 800; text-transform: uppercase; font-family: var(--font-display); letter-spacing: 0.5px; }
        .srs-card-row-text { flex: 1; min-width: 0; }
        .srs-row-front { font-size: 14px; font-weight: 600; color: var(--color-text-primary); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
        .srs-row-back { font-size: 12px; color: var(--color-text-muted); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
        .srs-row-front p, .srs-row-back p { margin: 0; }
        .srs-delete-btn { flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 32px; height: 32px; border-radius: 8px; border: 1px solid transparent; background: transparent; color: var(--color-text-muted); cursor: pointer; transition: all 0.2s; }
        .srs-delete-btn:hover { background: rgba(239,68,68,0.1); color: #ef4444; border-color: rgba(239,68,68,0.3); }

        /* ─── Add Cards ─── */
        .srs-add-section { width: 100%; max-width: 700px; display: flex; flex-direction: column; gap: 24px; }
        .srs-add-block { padding: 28px; }
        .srs-add-block h3 { display: flex; align-items: center; font-family: var(--font-display); font-size: 16px; font-weight: 700; margin: 0 0 16px; }
        .srs-hint { font-size: 13px; color: var(--color-text-muted); margin: -8px 0 16px; line-height: 1.5; }
        .srs-form-row { display: flex; flex-direction: column; gap: 6px; margin-bottom: 14px; }
        .srs-form-row label { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-text-muted); font-family: var(--font-display); }
        .srs-add-btn { display: flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 50px; border: none; background: var(--color-accent); color: var(--color-base-deep); font-size: 14px; font-weight: 700; cursor: pointer; transition: all 0.2s; font-family: var(--font-display); }
        .srs-add-btn:hover:not(:disabled) { background: var(--color-accent-light); transform: translateY(-1px); }
        .srs-add-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spinner { animation: spin 0.8s linear infinite; }
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .anim-fade-up { animation: fadeSlideUp 0.3s ease; }
      `}</style>
    </div>
  );
};

export default SpacedRepetition;
