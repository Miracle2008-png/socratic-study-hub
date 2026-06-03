import React, { useState, useRef, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';
import katex from 'katex';
import 'katex/dist/katex.min.css';
import {
  BookOpen, Clock, ChevronDown, ChevronRight, Copy, Check,
  Lightbulb, HelpCircle, Menu, X, Download, Star,
  ArrowRight, Bookmark, Eye, List, Zap, LayoutList, FileText, CheckCircle, Plus, Network, Maximize, Lock
} from 'lucide-react';
import { fetchTopicContent } from '../data/topicCompiler';
import { TopicContent } from '../data/topicContent';
import { TextRank, ContentGenerator } from '../utils/nlpEngine';
import { useGamification } from '../context/GamificationContext';
import MindMap from './MindMap';
import FocusMode from './FocusMode';

interface TopicModuleProps {
  topicId: string;
  externalFocusMode?: boolean;
  onExternalFocusExit?: () => void;
}

const difficultyConfig = {
  Foundational: { color: '#10b981', bg: 'rgba(16,185,129,0.1)', label: 'Foundational' },
  Intermediate:  { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',  label: 'Intermediate'  },
  Advanced:      { color: '#ef4444', bg: 'rgba(239,68,68,0.1)',   label: 'Advanced'      },
  University:    { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)',  label: 'University'    },
};

type TabType = 'read' | 'summary' | 'flashcards' | 'quiz' | 'mindmap' | 'explain' | 'derivations' | 'exam';

const TopicModule: React.FC<TopicModuleProps> = ({ topicId, externalFocusMode = false, onExternalFocusExit }) => {
  const [topic, setTopic] = useState<TopicContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchTopicContent(topicId)
      .then(data => {
        setTopic(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load topic:", err);
        setIsLoading(false);
      });
  }, [topicId]);

  const { xp, addXP } = useGamification();

  const [activeTab, setActiveTab] = useState<TabType>('read');
  const [activeSectionIdx, setActiveSectionIdx] = useState<number | null>(null);
  const [openProblems, setOpenProblems] = useState<Record<number, boolean>>({});
  const [shownHints, setShownHints] = useState<Record<number, boolean>>({});
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  
  // NLP State
  const [isProcessing, setIsProcessing] = useState(false);
  const [nlpData, setNlpData] = useState<{
    summary: string[];
    flashcards: Array<{front: string, back: string, type: string}>;
    quiz: Array<{question: string, options: string[], answerIndex: number}>;
    exam: Array<{question: string, type: string}>;
    explanation: string;
    derivations: Array<{title: string, content: string}>;
  } | null>(null);

  // Progressive Reading State
  const [currentReadIdx, setCurrentReadIdx] = useState(0);
  const [unlockedIdx, setUnlockedIdx] = useState(0);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [isFlashcardFlipped, setIsFlashcardFlipped] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  const sectionContent = useMemo(() => {
    if (!topic || !topic.sections[currentReadIdx]) return '';
    const s = topic.sections[currentReadIdx];
    const prefix = '#'.repeat(s.level);
    return `${prefix} ${s.heading}\n\n${s.content}`;
  }, [topic, currentReadIdx]);

  const handleNextSection = () => {
    if (!topic) return;
    if (currentReadIdx < topic.sections.length - 1) {
      const nextIdx = currentReadIdx + 1;
      setCurrentReadIdx(nextIdx);
      if (nextIdx > unlockedIdx) {
        setUnlockedIdx(nextIdx);
        addXP(150, 'Section Completed');
      }
      if (contentRef.current) contentRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Completed the whole topic
      addXP(1000, 'Topic Mastered');
      handleTabSwitch('quiz');
    }
  };

  // NLP Processing Hook
  useEffect(() => {
    if (!topic || activeTab === 'read') return;
    
    // Only process once
    if (nlpData) return;

    setIsProcessing(true);
    
    // Process asynchronously to avoid blocking UI
    setTimeout(() => {
      try {
        const textToProcess = topic.sections.map(s => s.content).join(' ');
        
        // Generate NLP data
        const summary = TextRank.summarize(textToProcess, 0.5, 12);
        const flashcards = ContentGenerator.generateFlashcards(textToProcess);
        const quiz = ContentGenerator.generateQuiz(textToProcess);
        const exam = ContentGenerator.generateExamQuestions(textToProcess);
        const explanation = ContentGenerator.explainLikeIm12(textToProcess);
        const derivations = (topic.subject === 'mathematics' || topic.subject === 'physics') 
          ? ContentGenerator.extractDerivations(textToProcess) 
          : [];

        setNlpData({ summary, flashcards, quiz, exam, explanation, derivations });
      } catch (err) {
        console.error("NLP Engine Error:", err);
      } finally {
        setIsProcessing(false);
      }
    }, 100); // Tiny delay to allow tab switch render
  }, [activeTab, topic, nlpData]);

  // Handle Tab Switch
  const handleTabSwitch = (tab: TabType) => {
    setActiveTab(tab);
    if (tab !== 'read' && !nlpData && !isProcessing) {
      // Triggered by useEffect
    }
  };

  const submitQuiz = () => {
    if (!nlpData) return;
    setQuizSubmitted(true);
    let correct = 0;
    Object.entries(quizAnswers).forEach(([qIdx, ansIdx]) => {
      if (nlpData.quiz[parseInt(qIdx)].answerIndex === ansIdx) correct++;
    });
    
    // Massive XP Reward for passing quiz
    if (correct > 0) {
      addXP(correct * 3500, 'Quiz Master Bonus'); // +3500 XP per correct question!
    }
  };

  if (isLoading) {
    return (
      <div className="topic-module-placeholder luxury-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
        <Zap size={48} className="nlp-pulse" style={{ color: 'var(--color-accent)', marginBottom: 16 }} />
        <h2>Loading Module...</h2>
        <p style={{color: 'var(--color-text-secondary)'}}>Preparing topic materials and exercises</p>
      </div>
    );
  }

  if (!topic) {
    return (
      <div className="topic-module-placeholder luxury-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', gap: 16 }}>
        <BookOpen size={48} style={{ color: 'var(--color-accent)' }} />
        <h2 style={{ margin: 0 }}>Topic Not Found</h2>
        <p style={{ color: 'var(--color-text-secondary)', margin: 0, fontSize: 14, textAlign: 'center' }}>
          This topic couldn't be loaded. It may have moved or the link is outdated.
        </p>
        <button
          className="gold-btn"
          style={{ marginTop: 8 }}
          onClick={() => window.history.back()}
        >
          ← Go Back
        </button>
      </div>
    );
  }

  const topicFullContent = topic.sections.map(s => `${'#'.repeat(s.level)} ${s.heading}\n\n${s.content}`).join('\n\n');

  const isFocusModeActive = isFocusMode || externalFocusMode;

  if (isFocusModeActive) {
    return (
      <FocusMode 
        title={topic.title}
        content={topicFullContent}
        onExit={() => {
          setIsFocusMode(false);
          if (onExternalFocusExit) onExternalFocusExit();
        }}
      />
    );
  }

  const diff = difficultyConfig[topic.difficulty as keyof typeof difficultyConfig] || difficultyConfig.Intermediate;

  return (
    <div className="topic-module anim-fade">
      {/* Hero Header */}
      <div className="tm-hero luxury-card">
        <div className="tm-hero-content">
          <div className="tm-meta-row">
            <span className="tm-difficulty-badge" style={{ color: diff.color, background: diff.bg }}>
              {diff.label}
            </span>
            <span className="tm-read-time">
              <Clock size={12} />
              Section {currentReadIdx + 1} of {topic.sections.length}
            </span>
            <span className="tm-section-count">
              <Eye size={12} />
              {Math.round(((unlockedIdx + 1) / topic.sections.length) * 100)}% Mastered
            </span>
          </div>
          <h1 className="tm-hero-title">{topic.title}</h1>
          
          {/* Dynamic Tabs */}
          <div className="tm-tabs">
            <button className={`tm-tab ${activeTab === 'read' ? 'active' : ''}`} onClick={() => handleTabSwitch('read')}>
              <BookOpen size={16} /> Read
            </button>
            <button className={`tm-tab ${activeTab === 'summary' ? 'active' : ''}`} onClick={() => handleTabSwitch('summary')}>
              <FileText size={16} /> AI Summary
            </button>
            <button className={`tm-tab ${activeTab === 'flashcards' ? 'active' : ''}`} onClick={() => handleTabSwitch('flashcards')}>
              <LayoutList size={16} /> Flashcards
            </button>
            <button className={`tm-tab ${activeTab === 'quiz' ? 'active' : ''}`} onClick={() => handleTabSwitch('quiz')}>
              <CheckCircle size={16} /> Practice Quiz
            </button>
            <button className={`tm-tab ${activeTab === 'exam' ? 'active' : ''}`} onClick={() => handleTabSwitch('exam')}>
              <HelpCircle size={16} /> Exam Questions
            </button>
            <button className={`tm-tab ${activeTab === 'explain' ? 'active' : ''}`} onClick={() => handleTabSwitch('explain')}>
              <Lightbulb size={16} /> Explain like I'm 12
            </button>
            <button className={`tm-tab ${activeTab === 'mindmap' ? 'active' : ''}`} onClick={() => handleTabSwitch('mindmap')}>
              <Network size={16} /> Visual Mind Map
            </button>
            {(topic.subject === 'mathematics' || topic.subject === 'physics') && (
              <button className={`tm-tab ${activeTab === 'derivations' ? 'active' : ''}`} onClick={() => handleTabSwitch('derivations')}>
                <Zap size={16} /> Derivations & Proofs
              </button>
            )}
          </div>
        </div>
        
        <div className="tm-hero-actions">
          <button
            className="tm-bookmark-btn"
            style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            onClick={() => setIsFocusMode(true)}
          >
            <Maximize size={18} />
            Focus
          </button>
          <button
            className={`tm-bookmark-btn ${bookmarked ? 'active' : ''}`}
            onClick={() => setBookmarked(!bookmarked)}
          >
            <Bookmark size={18} fill={bookmarked ? 'currentColor' : 'none'} />
            {bookmarked ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>

      {/* Main Content + Sidebar Layout */}
      <div className="tm-body">
        
        {/* Main Area */}
        <div className="tm-main-area luxury-card">
          {activeTab === 'read' && (
            <div className="tm-prose" ref={contentRef}>
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h1: ({ children }) => <h1 className="tm-h1">{children}</h1>,
                  h2: ({ children }) => <h2 className="tm-h2">{children}</h2>,
                  h3: ({ children }) => <h3 className="tm-h3">{children}</h3>,
                  h4: ({ children }) => <h4 className="tm-h4">{children}</h4>,
                  p:  ({ children }) => <p  className="tm-p">{children}</p>,
                  ul: ({ children }) => <ul className="tm-ul">{children}</ul>,
                  ol: ({ children }) => <ol className="tm-ol">{children}</ol>,
                  li: ({ children }) => <li className="tm-li">{children}</li>,
                  strong: ({ children }) => <strong className="tm-strong">{children}</strong>,
                  em: ({ children }) => <em className="tm-em">{children}</em>,
                  blockquote: ({ children }) => <blockquote className="tm-blockquote">{children}</blockquote>,
                  hr: () => <hr className="tm-hr" />,
                  table: ({ children }) => (
                    <div className="tm-table-wrap">
                      <table className="tm-table">{children}</table>
                    </div>
                  ),
                  th: ({ children }) => <th className="tm-th">{children}</th>,
                  td: ({ children }) => <td className="tm-td">{children}</td>,
                  code: ({ children, className }) => {
                    const isBlock = className?.includes('language');
                    return isBlock
                      ? <code className="tm-code-block">{children}</code>
                      : <code className="tm-code">{children}</code>;
                  },
                }}
              >
                {topic.subject === 'engineering' ? sectionContent : topicFullContent}
              </ReactMarkdown>

              {topic.subject === 'engineering' ? (
                <div className="tm-read-nav">
                  <button 
                    className="tm-nav-btn secondary"
                    disabled={currentReadIdx === 0}
                    onClick={() => {
                      setCurrentReadIdx(prev => prev - 1);
                      if (contentRef.current) contentRef.current.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    ← Previous Section
                  </button>
                  <div className="tm-nav-progress">
                    <div className="progress-track">
                      <div className="progress-fill" style={{ width: `${((currentReadIdx + 1) / topic.sections.length) * 100}%` }}></div>
                    </div>
                    <span>{currentReadIdx + 1} / {topic.sections.length}</span>
                  </div>
                  <button 
                    className="tm-nav-btn primary"
                    onClick={handleNextSection}
                  >
                    {currentReadIdx === topic.sections.length - 1 ? 'Take the Quiz →' : 'Next Section →'}
                  </button>
                </div>
              ) : (
                <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}>
                  <button 
                    className="tm-nav-btn primary"
                    onClick={() => handleTabSwitch('quiz')}
                    style={{ width: '200px' }}
                  >
                    Take the Quiz →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* AI NLP Views */}
          {activeTab !== 'read' && isProcessing && (
            <div className="nlp-loading">
              <Zap size={32} className="nlp-pulse" style={{ color: 'var(--color-accent)' }} />
              <h3>AI Engine Processing...</h3>
              <p>Analyzing text structure and generating {activeTab}...</p>
            </div>
          )}

          {activeTab === 'summary' && !isProcessing && nlpData && (
            <div className="nlp-summary-view">
              <h2 className="tm-h2"><Zap size={20} style={{display:'inline', marginRight: 8, color: 'var(--color-accent)'}}/> AI Summary</h2>
              <p className="tm-p" style={{color: 'var(--color-text-secondary)', marginBottom: 24}}>
                Key points extracted from this chapter using semantic analysis.
              </p>
              <div className="summary-points">
                {nlpData.summary.map((sent, i) => {
                  // Strip raw markdown symbols that TextRank may have copied verbatim
                  const clean = sent.replace(/^#{1,6}\s*/gm, '').replace(/\\n/g, ' ').replace(/---/g, '').trim();
                  if (!clean) return null;
                  return (
                    <div key={i} className="summary-point">
                      <span className="summary-num">{i + 1}</span>
                      <div className="summary-text" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                        <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                          {clean}
                        </ReactMarkdown>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'explain' && !isProcessing && nlpData && (
            <div className="nlp-explain-view">
              <h2 className="tm-h2"><Lightbulb size={20} style={{display:'inline', marginRight: 8, color: 'var(--color-accent)'}}/> Explain Like I'm 12</h2>
              <p className="tm-p" style={{color: 'var(--color-text-secondary)', marginBottom: 24}}>
                Complex textbook language, automatically simplified so a 12-year-old can understand it. No fluff, just the core concept.
              </p>
              <div className="explain-content" style={{
                background: 'rgba(212, 175, 55, 0.05)', border: '1px solid rgba(212, 175, 55, 0.2)', padding: '24px', borderRadius: '8px', fontSize: '18px', lineHeight: '1.6'
              }}>
                <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{nlpData.explanation}</ReactMarkdown>
              </div>
            </div>
          )}

          {activeTab === 'flashcards' && !isProcessing && nlpData && (
            <div className="nlp-flashcards-view">
              <h2 className="tm-h2"><LayoutList size={20} style={{display:'inline', marginRight: 8, color: 'var(--color-accent)'}}/> Auto-Generated Flashcards</h2>
              
              {nlpData.flashcards.length === 0 ? (
                <p>Not enough definitional content detected to generate flashcards.</p>
              ) : (
                <div className="flashcard-deck">
                  <div className="flashcard-progress">
                    <span>Card {flashcardIndex + 1} of {nlpData.flashcards.length}</span>
                    <span className="fc-type-badge">{nlpData.flashcards[flashcardIndex].type}</span>
                  </div>
                  
                  <div className={`flashcard-container ${isFlashcardFlipped ? 'flipped' : ''}`} onClick={() => setIsFlashcardFlipped(!isFlashcardFlipped)}>
                    <div className="flashcard-inner">
                      <div className="flashcard-front">
                        <span className="fc-label">FRONT</span>
                        <div className="fc-content">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                            {nlpData.flashcards[flashcardIndex].front}
                          </ReactMarkdown>
                        </div>
                        <span className="fc-hint">Click to flip</span>
                      </div>
                      <div className="flashcard-back">
                        <span className="fc-label">BACK</span>
                        <div className="fc-content">
                          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                            {nlpData.flashcards[flashcardIndex].back}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flashcard-controls">
                    <button 
                      className="fc-btn" 
                      disabled={flashcardIndex === 0} 
                      onClick={() => { setFlashcardIndex(prev => prev - 1); setIsFlashcardFlipped(false); }}
                    >
                      ← Previous
                    </button>
                    <button 
                      className="fc-btn primary" 
                      onClick={() => {
                        // Send to SRS engine (mocked for now)
                        alert("Added to your spaced repetition deck!");
                      }}
                    >
                      <Plus size={16} /> Send to SRS Deck
                    </button>
                    <button 
                      className="fc-btn" 
                      disabled={flashcardIndex === nlpData.flashcards.length - 1} 
                      onClick={() => { setFlashcardIndex(prev => prev + 1); setIsFlashcardFlipped(false); }}
                    >
                      Next →
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'quiz' && !isProcessing && nlpData && (
            <div className="nlp-quiz-view">
               <h2 className="tm-h2"><CheckCircle size={20} style={{display:'inline', marginRight: 8, color: 'var(--color-accent)'}}/> Practice Knowledge Check</h2>
               <p className="tm-p">Pass this AI-generated quiz to prove your mastery of the topic.</p>

               {nlpData.quiz.length === 0 ? (
                 <p>Not enough content to generate a quiz.</p>
               ) : (
                 <div className="quiz-container">
                   {nlpData.quiz.map((q, qIdx) => (
                     <div key={qIdx} className="quiz-question-block">
                       <h4 className="quiz-q-text">
                         <span className="quiz-q-num">{qIdx + 1}</span>
                         <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.question}</ReactMarkdown>
                       </h4>
                       <div className="quiz-options">
                         {q.options.map((opt, oIdx) => {
                           const isSelected = quizAnswers[qIdx] === oIdx;
                           const isCorrect = q.answerIndex === oIdx;
                           let stateClass = '';
                           if (quizSubmitted) {
                             if (isCorrect) stateClass = 'correct';
                             else if (isSelected && !isCorrect) stateClass = 'incorrect';
                           } else if (isSelected) {
                             stateClass = 'selected';
                           }

                           return (
                             <button 
                               key={oIdx} 
                               className={`quiz-opt-btn ${stateClass}`}
                               onClick={() => !quizSubmitted && setQuizAnswers(prev => ({...prev, [qIdx]: oIdx}))}
                               disabled={quizSubmitted}
                             >
                               <span className="opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                               <span className="opt-text"><ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{opt}</ReactMarkdown></span>
                             </button>
                           );
                         })}
                       </div>
                     </div>
                   ))}

                   {!quizSubmitted && (
                     <button 
                       className="submit-quiz-btn"
                       disabled={Object.keys(quizAnswers).length < nlpData.quiz.length}
                       onClick={submitQuiz}
                     >
                       Submit Answers
                     </button>
                   )}

                   {quizSubmitted && (
                     <div className="quiz-results">
                       <h3>Quiz Complete!</h3>
                       <p>You scored {Object.entries(quizAnswers).filter(([q, a]) => nlpData.quiz[parseInt(q)].answerIndex === a).length} out of {nlpData.quiz.length}.</p>
                       <p className="xp-reward">+ {Object.entries(quizAnswers).filter(([q, a]) => nlpData.quiz[parseInt(q)].answerIndex === a).length * 500} XP Awarded!</p>
                     </div>
                   )}
                 </div>
               )}
            </div>
          )}

          {activeTab === 'mindmap' && (
            <div className="tm-mindmap-view anim-fade-up" style={{ width: '100%', height: '500px', background: 'var(--color-bg-elevated)', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              <MindMap />
            </div>
          )}

          {activeTab === 'derivations' && nlpData && (
            <div className="tm-derivations anim-fade-up">
              <h2>Mathematical Derivations & Proofs</h2>
              <p className="tm-subtext">Key mathematical proofs extracted automatically from this topic.</p>
              
              {nlpData.derivations.length === 0 ? (
                <div className="tm-empty" style={{textAlign: 'center', padding: '40px', background: 'var(--color-bg-elevated)', borderRadius: '12px'}}>
                  <p style={{color: 'var(--color-text-muted)'}}>No mathematical derivations found in this topic.</p>
                </div>
              ) : (
                <div className="tm-deriv-list" style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                  {nlpData.derivations.map((d, i) => (
                    <div key={i} className="tm-deriv-card" style={{padding: '24px', background: 'var(--color-bg-elevated)', borderRadius: '12px', border: '1px solid var(--color-border)'}}>
                      <h3 className="tm-deriv-title" style={{marginTop: 0, marginBottom: '16px', color: 'var(--color-accent)'}}>{d.title}</h3>
                      <div className="tm-deriv-content tm-prose">
                        <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                          {d.content}
                        </ReactMarkdown>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'exam' && !isProcessing && nlpData && (
            <div className="tm-exam-view anim-fade-up">
              <div className="exam-header">
                <div>
                  <h2 className="tm-h2"><HelpCircle size={20} style={{display:'inline', marginRight: 8, color: 'var(--color-accent)'}}/> Exam-Style Questions</h2>
                  <p className="tm-p">AI-generated essay and short-answer questions based on this topic. Practice writing full answers.</p>
                </div>
                <button className="exam-print-btn" onClick={() => window.print()}>
                  <Download size={14} /> Print / Export
                </button>
              </div>

              {(!nlpData.exam || nlpData.exam.length === 0) ? (
                <div className="tm-empty-state">
                  <HelpCircle size={32} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
                  <p>Read more sections of this topic to generate exam questions.</p>
                </div>
              ) : (
                <div className="exam-questions-list">
                  {nlpData.exam.map((q: any, i: number) => (
                    <ExamQuestionCard key={i} index={i} question={q.question} type={q.type} />
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

        {/* Sticky Sidebar */}
        {activeTab === 'read' && (
          <aside className="tm-sidebar">
            {/* Table of Contents Widget */}
            <div className="tm-widget luxury-card">
              <div className="tm-widget-header">
                <List size={16} style={{ color: 'var(--color-accent)' }} />
                <h3>Contents</h3>
              </div>
              <div className="tm-toc-sidebar">
                {topic.sections.map((s, i) => {
                  const isLocked = i > unlockedIdx;
                  return (
                    <button
                      key={i}
                      className={`sidebar-toc-entry level-${s.level} ${currentReadIdx === i ? 'active' : ''} ${isLocked ? 'locked' : ''}`}
                      onClick={() => {
                        if (!isLocked) setCurrentReadIdx(i);
                      }}
                      disabled={isLocked}
                    >
                      {s.heading}
                      {isLocked && <Lock size={14} className="lock-icon" style={{ color: 'var(--color-text-muted)' }} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Key Formulas */}
            {topic.keyFormulas && topic.keyFormulas.length > 0 && (
              <div className="tm-widget luxury-card">
                <div className="tm-widget-header">
                  <Star size={16} style={{ color: 'var(--color-accent)' }} />
                  <h3>Key Formulas</h3>
                </div>
                <div className="tm-formulas-list">
                  {topic.keyFormulas.map((f, i) => (
                    <div key={i} className="tm-formula-item">
                      <div className="tm-formula-top">
                        <span className="tm-formula-name">{f.name}</span>
                        <button
                          className="tm-copy-btn"
                          onClick={() => {
                            navigator.clipboard.writeText(f.latex).then(() => {
                              setCopiedFormula(f.latex);
                              setTimeout(() => setCopiedFormula(null), 2000);
                            });
                          }}
                        >
                          {copiedFormula === f.latex ? <Check size={12} style={{ color: '#10b981' }} /> : <Copy size={12} />}
                        </button>
                      </div>
                      <div
                        className="tm-formula-render"
                        dangerouslySetInnerHTML={{
                          __html: (() => {
                            try {
                              return katex.renderToString(f.latex, { throwOnError: false, displayMode: true });
                            } catch {
                              return `<code style="font-size:13px;opacity:0.7">${f.latex}</code>`;
                            }
                          })()
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        )}
      </div>

      <style>{`
        /* ─── Layout ─────────────────────────────────────────── */
        .topic-module {
          display: flex; flex-direction: column; gap: 24px;
          animation: fadeIn var(--transition-normal);
        }

        /* ─── Hero ───────────────────────────────────────────── */
        .tm-hero {
          padding: 32px 40px;
          background: linear-gradient(135deg, var(--color-base), var(--color-base-alt));
        }

        .tm-meta-row {
          display: flex; align-items: center; gap: 14px; margin-bottom: 16px;
        }

        .tm-difficulty-badge {
          font-size: 11px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; padding: 4px 12px;
          border-radius: var(--border-radius-full);
          font-family: var(--font-display);
        }

        .tm-read-time, .tm-section-count {
          display: flex; align-items: center; gap: 5px;
          font-size: 12px; color: var(--color-text-muted);
          font-family: var(--font-display);
        }

        .tm-hero-title {
          font-family: var(--font-serif); font-size: 36px; font-weight: 700;
          color: var(--color-text-primary); line-height: 1.2; margin-bottom: 24px;
        }

        .tm-tabs {
          display: flex; gap: 12px; border-bottom: 1px solid var(--color-border);
          padding-bottom: 0;
        }

        .tm-tab {
          background: transparent; border: none; padding: 12px 20px;
          color: var(--color-text-secondary); font-family: var(--font-display);
          font-size: 14px; font-weight: 600; cursor: pointer;
          display: flex; align-items: center; gap: 8px;
          border-bottom: 3px solid transparent; transition: all 0.2s;
        }

        .tm-tab:hover { color: var(--color-text-primary); }
        .tm-tab.active { color: var(--color-accent); border-bottom-color: var(--color-accent); }

        .tm-hero-actions {
          position: absolute; top: 32px; right: 40px;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .tm-bookmark-btn {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 18px; border-radius: var(--border-radius-full);
          background: var(--color-surface); border: var(--border-soft);
          color: var(--color-text-secondary); font-size: 13px; font-weight: 600;
          cursor: pointer; transition: all var(--transition-fast);
          font-family: var(--font-display);
        }
        .tm-bookmark-btn:hover, .tm-bookmark-btn.active {
          color: var(--color-accent); border-color: var(--color-accent);
          background: rgba(201,168,76,0.08);
        }

        /* ─── Body ───────────────────────────────────────────── */
        .tm-body {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 24px;
          align-items: start;
        }

        .tm-main-area {
          padding: 48px 56px;
          min-height: 500px;
        }

        /* ─── NLP Loading ────────────────────────────────────── */
        .nlp-loading {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          height: 300px; text-align: center;
        }
        .nlp-pulse { animation: pulse 1.5s infinite; margin-bottom: 16px; }
        .nlp-loading h3 { font-family: var(--font-display); font-size: 20px; color: var(--color-text-primary); margin-bottom: 8px; }
        .nlp-loading p { color: var(--color-text-secondary); font-size: 14px; }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.7; }
          100% { transform: scale(1); opacity: 1; }
        }

        /* ─── Summary View ───────────────────────────────────── */
        .summary-list { display: flex; flex-direction: column; gap: 16px; }
        .summary-item { 
          background: var(--color-base-alt); padding: 16px 20px; 
          border-radius: var(--border-radius-md); border-left: 3px solid var(--color-accent);
        }

        /* ─── Flashcard View ─────────────────────────────────── */
        .flashcard-deck { display: flex; flex-direction: column; align-items: center; padding: 20px 0; }
        .flashcard-progress { font-family: var(--font-display); font-size: 13px; color: var(--color-text-muted); margin-bottom: 16px; text-transform: uppercase; letter-spacing: 1px;}
        
        .flashcard-container {
          width: 100%; max-width: 600px; height: 350px; perspective: 1000px; cursor: pointer;
        }
        .flashcard-inner {
          width: 100%; height: 100%; position: relative; transition: transform 0.6s; transform-style: preserve-3d;
        }
        .flashcard-container.flipped .flashcard-inner { transform: rotateY(180deg); }
        
        .flashcard-front, .flashcard-back {
          position: absolute; width: 100%; height: 100%; backface-visibility: hidden;
          background: var(--color-base-alt); border: 1px solid var(--color-border-strong);
          border-radius: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center;
          padding: 40px; text-align: center; box-shadow: var(--shadow-md);
        }
        .flashcard-back {
          transform: rotateY(180deg); background: var(--color-surface); border-color: var(--color-accent);
        }

        .fc-label { position: absolute; top: 20px; left: 24px; font-size: 11px; font-weight: 700; color: var(--color-text-muted); letter-spacing: 2px; }
        .fc-content { font-size: 24px; font-weight: 600; color: var(--color-text-primary); font-family: var(--font-serif); }
        .fc-hint { position: absolute; bottom: 20px; font-size: 12px; color: var(--color-text-muted); font-style: italic; }

        .flashcard-controls { display: flex; gap: 16px; margin-top: 32px; align-items: center; }
        .fc-btn {
          padding: 10px 20px; border-radius: var(--border-radius-full); font-weight: 600; font-family: var(--font-display);
          background: var(--color-surface); border: var(--border-soft); color: var(--color-text-primary); cursor: pointer;
        }
        .fc-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .fc-btn.primary { background: rgba(16,185,129,0.1); border-color: #10b981; color: #10b981; display: flex; align-items: center; gap: 8px;}
        .fc-btn:hover:not(:disabled) { border-color: var(--color-accent); }

        /* ─── Quiz View ──────────────────────────────────────── */
        .quiz-container { display: flex; flex-direction: column; gap: 32px; max-width: 700px; }
        .quiz-question-block { background: var(--color-base-alt); padding: 24px; border-radius: 12px; border: var(--border-soft); }
        .quiz-q-text { font-family: var(--font-serif); font-size: 18px; margin-bottom: 20px; display: flex; gap: 12px; align-items: flex-start;}
        .quiz-q-num { background: var(--color-accent); color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px;}
        
        .quiz-options { display: flex; flex-direction: column; gap: 12px; }
        .quiz-opt-btn {
          display: flex; align-items: center; gap: 16px; padding: 14px 20px;
          background: var(--color-surface); border: 2px solid var(--color-border);
          border-radius: 8px; cursor: pointer; text-align: left; transition: all 0.2s;
        }
        .quiz-opt-btn:hover:not(:disabled) { border-color: var(--color-accent); background: rgba(201,168,76,0.05); }
        .quiz-opt-btn.selected { border-color: var(--color-accent); background: rgba(201,168,76,0.1); }
        .quiz-opt-btn.correct { border-color: #10b981; background: rgba(16,185,129,0.1); }
        .quiz-opt-btn.incorrect { border-color: #ef4444; background: rgba(239,68,68,0.1); }
        
        .opt-letter { font-weight: 700; color: var(--color-text-muted); font-family: var(--font-display); }
        .quiz-opt-btn.selected .opt-letter { color: var(--color-accent); }
        .opt-text { flex: 1; font-size: 15px; color: var(--color-text-primary); }

        .submit-quiz-btn {
          background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
          color: white; border: none; padding: 16px; border-radius: 8px; font-size: 16px; font-weight: 700;
          cursor: pointer; font-family: var(--font-display); margin-top: 16px;
        }
        .submit-quiz-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .quiz-results {
          background: rgba(16,185,129,0.1); border: 1px solid #10b981; padding: 24px;
          border-radius: 12px; text-align: center; margin-top: 16px;
        }
        .quiz-results h3 { color: #10b981; font-family: var(--font-display); font-size: 24px; margin-bottom: 8px; }
        .quiz-results p { color: var(--color-text-primary); font-size: 16px; }
        .xp-reward { font-weight: 800; font-size: 20px !important; color: var(--color-accent) !important; margin-top: 12px; }

        /* ─── Typography & Shared ────────────────────────────── */
        .tm-prose { max-width: 720px; }
        .tm-h1 { font-family: var(--font-serif); font-size: 28px; font-weight: 700; margin: 0 0 24px; padding-bottom: 16px; border-bottom: 2px solid var(--color-accent); }
        .tm-h2 { font-family: var(--font-serif); font-size: 22px; font-weight: 600; margin: 48px 0 16px; padding: 20px 24px; background: var(--color-base-alt); border-radius: var(--border-radius-md); border-left: 4px solid var(--color-accent); }
        .tm-h3 { font-family: var(--font-display); font-size: 16px; font-weight: 700; margin: 32px 0 12px; }
        .tm-h4 { font-family: var(--font-display); font-size: 14px; font-weight: 600; color: var(--color-accent); margin: 24px 0 8px; text-transform: uppercase; }
        .tm-p { font-size: 15.5px; line-height: 1.9; margin-bottom: 18px; }
        .tm-ul, .tm-ol { margin: 0 0 20px 0; padding-left: 0; list-style: none; }
        .tm-li { font-size: 15px; line-height: 1.8; padding: 5px 0 5px 28px; position: relative; }
        .tm-ul .tm-li::before { content: '▹'; position: absolute; left: 8px; color: var(--color-accent); font-weight: 700; }
        .tm-ol { counter-reset: item; }
        .tm-ol .tm-li { counter-increment: item; }
        .tm-ol .tm-li::before { content: counter(item) '.'; position: absolute; left: 0; color: var(--color-accent); font-weight: 700; font-family: var(--font-display); font-size: 13px; }
        .tm-strong { font-weight: 700; }
        .tm-em { font-style: italic; color: var(--color-text-secondary); }
        .tm-blockquote { margin: 24px 0; padding: 20px 24px; background: rgba(201,168,76,0.06); border-left: 4px solid var(--color-accent); border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; font-style: italic; color: var(--color-text-secondary); }
        .tm-hr { border: none; height: 1px; background: linear-gradient(90deg, transparent, var(--color-accent), transparent); margin: 40px 0; opacity: 0.4; }
        .tm-table-wrap { overflow-x: auto; margin: 24px 0; border-radius: var(--border-radius-md); border: var(--border-soft); }
        .tm-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .tm-th { background: var(--color-base-alt); padding: 12px 16px; font-weight: 700; text-align: left; border-bottom: 2px solid var(--color-accent); text-transform: uppercase; }
        .tm-td { padding: 11px 16px; border-bottom: var(--border-soft); vertical-align: top; }
        .tm-code { background: var(--color-base-deep); padding: 3px 8px; border-radius: 5px; font-family: 'Courier New', monospace; color: var(--color-accent-dark); }
        .tm-code-block { display: block; background: var(--color-base-deep); padding: 20px 24px; border-radius: var(--border-radius-md); overflow-x: auto; border: var(--border-soft); margin: 16px 0; }
        .tm-prose .katex-display { margin: 24px 0; padding: 20px 28px; background: var(--color-base-alt); border-radius: var(--border-radius-md); border-left: 4px solid var(--color-accent); overflow-x: auto; }

        /* ─── Sidebar ─────────────────────────────────────────── */
        .tm-sidebar { display: flex; flex-direction: column; gap: 20px; position: sticky; top: 24px; }
        .tm-widget { padding: 20px; }
        .tm-widget-header { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid var(--color-border); }
        .tm-widget-header h3 { font-family: var(--font-display); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-primary); }

        /* ─── Key Formulas ── */
        .tm-formulas-list { display: flex; flex-direction: column; gap: 10px; }
        .tm-formula-item {
          border-radius: 12px;
          border: 1px solid var(--color-border);
          background: var(--color-base-alt);
          overflow: hidden;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }
        .tm-formula-item:hover {
          border-color: rgba(212,175,55,0.35);
          box-shadow: 0 4px 16px rgba(212,175,55,0.08);
        }
        .tm-formula-top {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px 8px;
          border-bottom: 1px solid var(--color-border);
        }
        .tm-formula-name {
          font-family: var(--font-display); font-size: 11px; font-weight: 700;
          letter-spacing: 0.8px; text-transform: uppercase;
          color: var(--color-accent);
        }
        .tm-copy-btn {
          display: flex; align-items: center; justify-content: center;
          width: 26px; height: 26px; border-radius: 7px;
          border: 1px solid var(--color-border); background: transparent;
          color: var(--color-text-muted); cursor: pointer;
          transition: all var(--transition-fast); flex-shrink: 0;
        }
        .tm-copy-btn:hover { background: var(--color-surface); color: var(--color-accent); border-color: rgba(212,175,55,0.35); }
        .tm-formula-render {
          padding: 14px 16px;
          display: flex; align-items: center; justify-content: center;
          overflow-x: auto;
          min-height: 52px;
        }
        .tm-formula-render .katex-display { margin: 0 !important; }
        .tm-formula-render .katex { font-size: 1.1em !important; }
        
        .sidebar-toc-entry {
          display: block; width: 100%; text-align: left; padding: 8px 12px;
          background: none; border: none; color: var(--color-text-secondary);
          font-size: 13px; cursor: pointer; border-radius: 6px;
          transition: all 0.2s;
        }
        .sidebar-toc-entry.level-2 { padding-left: 20px; }
        .sidebar-toc-entry.level-3 { padding-left: 32px; font-size: 12px; }
        .sidebar-toc-entry:hover:not(:disabled) { background: var(--color-base-alt); color: var(--color-accent); }
        .sidebar-toc-entry.active { background: rgba(201,168,76,0.1); color: var(--color-accent); font-weight: 600; border-left: 2px solid var(--color-accent); }
        .sidebar-toc-entry.locked { opacity: 0.5; cursor: not-allowed; display: flex; justify-content: space-between; align-items: center; }
        .lock-icon { font-size: 11px; }

        /* ─── Read Nav ────────────────────────────────────────── */
        .tm-read-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 48px; padding-top: 24px; border-top: var(--border-soft); }
        .tm-nav-btn { padding: 12px 24px; border-radius: var(--border-radius-full); font-weight: 700; font-family: var(--font-display); font-size: 14px; cursor: pointer; transition: all 0.2s; }
        .tm-nav-btn.primary { background: var(--color-accent); color: var(--color-base-deep); border: none; }
        .tm-nav-btn.primary:hover { background: var(--color-accent-light); transform: translateY(-2px); }
        .tm-nav-btn.secondary { background: transparent; border: 1px solid var(--color-border); color: var(--color-text-secondary); }
        .tm-nav-btn.secondary:hover:not(:disabled) { color: var(--color-text-primary); border-color: var(--color-text-muted); }
        .tm-nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .tm-nav-progress { display: flex; flex-direction: column; align-items: center; gap: 8px; font-size: 12px; color: var(--color-text-muted); font-weight: 600; font-family: var(--font-display); }
        .progress-track { width: 120px; height: 6px; background: var(--color-base-alt); border-radius: 3px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--color-accent); transition: width 0.3s ease; }

        /* ─── Flashcard Additions ─────────────────────────────── */
        .fc-type-badge { background: rgba(201,168,76,0.1); color: var(--color-accent); padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(201,168,76,0.3); }
        .flashcard-progress { display: flex; justify-content: space-between; align-items: center; width: 100%; max-width: 500px; margin-bottom: 20px; font-weight: 600; font-family: var(--font-display); color: var(--color-text-secondary); }

        /* ─── Summary Points ──────────────────────────────────── */
        .summary-points { display: flex; flex-direction: column; gap: 16px; max-width: 720px; }
        .summary-point {
          display: flex; align-items: flex-start; gap: 16px;
          background: var(--color-base-alt); border-radius: 10px;
          padding: 16px 20px; border: var(--border-soft);
        }
        .summary-num {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 50%;
          background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.4);
          color: var(--color-accent); font-weight: 700; font-size: 13px;
          font-family: var(--font-display);
          display: flex; align-items: center; justify-content: center;
        }
        .summary-text {
          margin: 0; font-size: 15px; line-height: 1.75;
          color: var(--color-text-primary);
        }

        /* ─── Exam Tab ───────────────────────────────────────────── */
        .tm-exam-view { display: flex; flex-direction: column; gap: 24px; max-width: 800px; }
        .exam-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
        .exam-print-btn { display: flex; align-items: center; gap: 6px; padding: 8px 16px; border-radius: 20px; background: var(--color-base-alt); border: var(--border-soft); color: var(--color-text-secondary); cursor: pointer; font-size: 13px; white-space: nowrap; transition: all var(--transition-fast); flex-shrink: 0; }
        .exam-print-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }
        .exam-questions-list { display: flex; flex-direction: column; gap: 20px; }
        .exam-q-card { background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; overflow: hidden; transition: border-color 0.2s; }
        .exam-q-card:hover { border-color: rgba(201,168,76,0.3); }
        .exam-q-header { display: flex; align-items: flex-start; gap: 16px; padding: 20px 24px; }
        .exam-q-num { width: 32px; height: 32px; border-radius: 8px; background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3); color: var(--color-accent); font-weight: 800; font-size: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: var(--font-display); }
        .exam-q-body { flex: 1; }
        .exam-q-type { display: inline-block; font-size: 10px; font-weight: 800; letter-spacing: 1px; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px; text-transform: uppercase; }
        .exam-q-type.essay { background: rgba(139,92,246,0.12); color: #8b5cf6; }
        .exam-q-type.short { background: rgba(16,185,129,0.12); color: #10b981; }
        .exam-q-text { font-size: 15px; color: var(--color-text-primary); line-height: 1.6; margin: 0; font-weight: 500; }
        .exam-q-answer-area { padding: 0 24px 20px; }
        .exam-answer-textarea { width: 100%; min-height: 100px; background: var(--color-base-alt); border: 1px solid var(--color-border); border-radius: 8px; padding: 12px 16px; color: var(--color-text-primary); font-family: var(--font-primary); font-size: 14px; resize: vertical; outline: none; transition: border-color 0.2s; box-sizing: border-box; }
        .exam-answer-textarea:focus { border-color: var(--color-accent); }
        .exam-hint-toggle { display: flex; align-items: center; gap: 6px; background: none; border: none; color: var(--color-text-muted); font-size: 13px; cursor: pointer; padding: 8px 0; transition: color 0.2s; }
        .exam-hint-toggle:hover { color: var(--color-accent); }
        .exam-hint-box { margin-top: 8px; padding: 14px 18px; background: rgba(201,168,76,0.05); border: 1px solid rgba(201,168,76,0.2); border-radius: 8px; font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }
        .tm-empty-state { text-align: center; padding: 48px; background: var(--color-base-alt); border-radius: 12px; color: var(--color-text-muted); }

      `}</style>
    </div>
  );
};

export default TopicModule;

// ── ExamQuestionCard ────────────────────────────────────────────────────────
const ExamQuestionCard: React.FC<{ index: number; question: string; type: string }> = ({ index, question, type }) => {
  const [showHint, setShowHint] = useState(false);
  const [answer, setAnswer] = useState('');
  const typeClass = type?.toLowerCase().includes('essay') ? 'essay' : 'short';
  const typeLabel = type || 'Short Answer';

  // Generate a simple hint from the question text itself
  const hint = `Focus your answer on the key concepts implied by the question. Structure your response with an introduction, key evidence/reasoning, and a conclusion. Aim for ${typeClass === 'essay' ? '3–5 paragraphs' : '2–4 sentences'}.`;

  return (
    <div className="exam-q-card">
      <div className="exam-q-header">
        <div className="exam-q-num">{index + 1}</div>
        <div className="exam-q-body">
          <span className={`exam-q-type ${typeClass}`}>{typeLabel}</span>
          <div className="exam-q-text" style={{ margin: 0, fontSize: '15.5px', lineHeight: '1.6' }}>
            <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
              {question}
            </ReactMarkdown>
          </div>
        </div>
      </div>
      <div className="exam-q-answer-area">
        <textarea
          className="exam-answer-textarea"
          placeholder="Write your answer here…"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
        />
        <button className="exam-hint-toggle" onClick={() => setShowHint(h => !h)}>
          <Lightbulb size={13} /> {showHint ? 'Hide' : 'Show'} Answer Guidance
        </button>
        {showHint && <div className="exam-hint-box">{hint}</div>}
      </div>
    </div>
  );
};
