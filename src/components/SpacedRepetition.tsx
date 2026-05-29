import React, { useState, useEffect } from 'react';
import { Flashcard, SRSEngine, Grade } from '../data/srsEngine';
import { BrainCircuit, Check, X, RotateCcw, ArrowRight } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Seed data
const initialDeck: Flashcard[] = [
  SRSEngine.createCard('1', 'math', 'Derivative of $x^n$', '$n x^{n-1}$'),
  SRSEngine.createCard('2', 'physics', "Newton's Second Law", '$F = ma$'),
  SRSEngine.createCard('3', 'chemistry', 'Ideal Gas Law', '$PV = nRT$'),
  SRSEngine.createCard('4', 'biology', 'Hardy-Weinberg Equation', '$p^2 + 2pq + q^2 = 1$'),
  SRSEngine.createCard('5', 'math', "Euler's Identity", '$e^{i\\pi} + 1 = 0$'),
];

const SpacedRepetition: React.FC = () => {
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [dueCards, setDueCards] = useState<Flashcard[]>([]);
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // In a real app, load from localStorage/DB
    const saved = localStorage.getItem('srs_deck');
    if (saved) {
      const parsedDeck = JSON.parse(saved);
      setDeck(parsedDeck);
      setDueCards(parsedDeck.filter((c: Flashcard) => c.nextReviewDate <= Date.now()));
    } else {
      setDeck(initialDeck);
      setDueCards(initialDeck);
      localStorage.setItem('srs_deck', JSON.stringify(initialDeck));
    }
  }, []);

  const handleGrade = (grade: Grade) => {
    const currentCard = dueCards[currentCardIdx];
    const updatedCard = SRSEngine.gradeCard(currentCard, grade);
    
    const newDeck = deck.map(c => c.id === updatedCard.id ? updatedCard : c);
    setDeck(newDeck);
    localStorage.setItem('srs_deck', JSON.stringify(newDeck));

    // Move to next card
    setIsFlipped(false);
    setCurrentCardIdx(prev => prev + 1);
  };

  if (currentCardIdx >= dueCards.length) {
    return (
      <div className="srs-module anim-fade">
        <div className="srs-complete luxury-card">
          <BrainCircuit size={48} style={{ color: '#10b981', marginBottom: 16 }} />
          <h2>You're all caught up!</h2>
          <p>You have reviewed all due flashcards. Check back tomorrow!</p>
          <button className="srs-reset-btn" onClick={() => {
            // For demo purposes, reset the deck times
            const resetDeck = deck.map(c => ({ ...c, nextReviewDate: Date.now() }));
            setDeck(resetDeck);
            setDueCards(resetDeck);
            setCurrentCardIdx(0);
            localStorage.setItem('srs_deck', JSON.stringify(resetDeck));
          }}>
            <RotateCcw size={16} /> Reset Deck for Demo
          </button>
        </div>
        <style>{`
          .srs-complete {
            text-align: center; padding: 60px; max-width: 500px; margin: 40px auto;
          }
          .srs-reset-btn {
            display: inline-flex; align-items: center; gap: 8px;
            margin-top: 24px; padding: 10px 20px; border-radius: var(--border-radius-full);
            background: var(--color-base-alt); color: var(--color-text-primary);
            border: var(--border-soft); cursor: pointer;
            transition: all var(--transition-fast);
          }
          .srs-reset-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }
        `}</style>
      </div>
    );
  }

  const currentCard = dueCards[currentCardIdx];

  return (
    <div className="srs-module anim-fade">
      <div className="srs-header">
        <div>
          <h1 className="srs-title">Flashcard Review</h1>
          <p className="srs-subtitle">Spaced Repetition Algorithm</p>
        </div>
        <div className="srs-progress">
          Card {currentCardIdx + 1} of {dueCards.length}
        </div>
      </div>

      <div className="srs-card-container">
        <div className={`srs-flashcard luxury-card ${isFlipped ? 'flipped' : ''}`}>
          <div className="srs-card-front">
            <div className="srs-card-topic">{currentCard.topicId.toUpperCase()}</div>
            <div className="srs-card-content">
              <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                {currentCard.front}
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
                {currentCard.back}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>

      {isFlipped && (
        <div className="srs-controls anim-fade-up">
          <h3>How well did you remember this?</h3>
          <div className="srs-grading-row">
            <button className="srs-grade-btn grade-0" onClick={() => handleGrade(0)}>
              <span className="g-num">0</span> <span className="g-label">Blackout</span>
            </button>
            <button className="srs-grade-btn grade-1" onClick={() => handleGrade(1)}>
              <span className="g-num">1</span> <span className="g-label">Wrong</span>
            </button>
            <button className="srs-grade-btn grade-3" onClick={() => handleGrade(3)}>
              <span className="g-num">3</span> <span className="g-label">Hard</span>
            </button>
            <button className="srs-grade-btn grade-4" onClick={() => handleGrade(4)}>
              <span className="g-num">4</span> <span className="g-label">Good</span>
            </button>
            <button className="srs-grade-btn grade-5" onClick={() => handleGrade(5)}>
              <span className="g-num">5</span> <span className="g-label">Perfect</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .srs-module {
          display: flex; flex-direction: column; align-items: center; padding: 20px 0;
        }

        .srs-header {
          display: flex; justify-content: space-between; align-items: flex-end;
          width: 100%; max-width: 700px; margin-bottom: 30px;
        }

        .srs-title {
          font-family: var(--font-serif); font-size: 28px; font-weight: 700;
          color: var(--color-text-primary); margin: 0 0 4px;
        }
        
        .srs-subtitle {
          font-size: 14px; color: var(--color-text-secondary); margin: 0;
        }

        .srs-progress {
          background: rgba(201,168,76,0.1); color: var(--color-accent);
          padding: 6px 14px; border-radius: 20px; font-size: 13px;
          font-weight: 700; font-family: var(--font-display);
        }

        /* ─── Card Flip Logic ─── */
        .srs-card-container {
          perspective: 1000px; width: 100%; max-width: 700px; margin-bottom: 40px;
        }

        .srs-flashcard {
          width: 100%; min-height: 350px; position: relative;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d; cursor: pointer;
        }

        .srs-flashcard.flipped { transform: rotateY(180deg); cursor: default; }

        .srs-card-front, .srs-card-back {
          position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          -webkit-backface-visibility: hidden; backface-visibility: hidden;
          padding: 40px; display: flex; flex-direction: column;
          align-items: center; justify-content: center; text-align: center;
          background: var(--color-surface); border-radius: inherit;
        }

        .srs-card-back {
          transform: rotateY(180deg);
          border: 2px solid var(--color-accent);
          background: linear-gradient(135deg, var(--color-surface), rgba(201,168,76,0.03));
        }

        .srs-card-topic {
          position: absolute; top: 20px; left: 24px;
          font-size: 11px; font-weight: 800; font-family: var(--font-display);
          color: var(--color-text-muted); letter-spacing: 1.5px;
        }

        .srs-card-content {
          font-size: 24px; color: var(--color-text-primary); line-height: 1.5;
        }
        
        .srs-card-content .katex-display { margin: 20px 0; font-size: 28px; }

        .srs-flip-btn {
          position: absolute; bottom: 30px;
          display: flex; align-items: center; gap: 8px;
          background: transparent; color: var(--color-accent);
          border: 1px solid var(--color-accent); padding: 10px 24px;
          border-radius: var(--border-radius-full); font-size: 14px;
          font-weight: 600; cursor: pointer; transition: all var(--transition-fast);
        }
        .srs-flip-btn:hover { background: rgba(201,168,76,0.1); }

        /* ─── Controls ─── */
        .srs-controls {
          width: 100%; max-width: 700px; text-align: center;
        }

        .srs-controls h3 {
          font-size: 16px; font-family: var(--font-display);
          color: var(--color-text-primary); margin-bottom: 20px;
        }

        .srs-grading-row {
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
        }

        .srs-grade-btn {
          display: flex; flex-direction: column; align-items: center; gap: 6px;
          padding: 12px 20px; background: var(--color-surface);
          border: var(--border-soft); border-radius: var(--border-radius-md);
          cursor: pointer; transition: all var(--transition-fast);
          min-width: 100px;
        }

        .g-num { font-size: 18px; font-weight: 800; font-family: var(--font-display); }
        .g-label { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; }

        .grade-0:hover { border-color: #ef4444; color: #ef4444; }
        .grade-1:hover { border-color: #f97316; color: #f97316; }
        .grade-3:hover { border-color: #eab308; color: #eab308; }
        .grade-4:hover { border-color: #84cc16; color: #84cc16; }
        .grade-5:hover { border-color: #10b981; color: #10b981; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .anim-fade-up { animation: fadeSlideUp 0.3s ease; }
      `}</style>
    </div>
  );
};

export default SpacedRepetition;
