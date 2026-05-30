import React, { useState, useRef } from 'react';
import { UploadCloud, Link as LinkIcon, FileText, MonitorPlay, Image as ImageIcon, CheckCircle, BrainCircuit, List, PlayCircle, Loader2 } from 'lucide-react';
import { TextRank, ContentGenerator } from '../utils/nlpEngine';
import { TypewriterMarkdown } from './TypewriterMarkdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { useGamification } from '../context/GamificationContext';

const UploadHub: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'parsing' | 'analyzing' | 'done'>('idle');
  const [urlInput, setUrlInput] = useState('');
  const [results, setResults] = useState<{ summary: string[], flashcards: any[], quiz: any[], exam: any[], formulas: any[] } | null>(null);
  const [activeResultTab, setActiveResultTab] = useState<'summary' | 'flashcards' | 'quiz' | 'exam' | 'formulas'>('summary');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizRevealed, setQuizRevealed] = useState<Record<number, boolean>>({});
  const [pastedText, setPastedText] = useState('');
  const [fileName, setFileName] = useState('');
  const [binaryWarning, setBinaryWarning] = useState(false);
  const [fileText, setFileText] = useState('');
  const { addXP } = useGamification();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  };

  const readFileAsText = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const textTypes = ['text/plain', 'text/markdown', 'text/csv', 'application/json', 'text/html'];
      const isText = textTypes.includes(file.type) || /\.(txt|md|csv|json|html|tex|py|js|ts)$/i.test(file.name);
      if (isText) {
        const reader = new FileReader();
        reader.onload = (e) => resolve((e.target?.result as string) || '');
        reader.onerror = () => resolve('');
        reader.readAsText(file);
      } else {
        // PDF / image / docx etc — can't parse in browser
        setBinaryWarning(true);
        resolve('');
      }
    });
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault(); e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setBinaryWarning(false);
    const text = await readFileAsText(file);
    setFileText(text);
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    setBinaryWarning(false);
    const text = await readFileAsText(file);
    setFileText(text);
  };

  const processUpload = (text: string) => {
    if (!text.trim()) return;
    setUploadState('uploading');
    setTimeout(() => setUploadState('parsing'), 1200);
    setTimeout(() => {
      setUploadState('analyzing');
      const summary = TextRank.summarize(text, 0.3, 5);
      const flashcards = ContentGenerator.generateFlashcards(text);
      const quiz = ContentGenerator.generateQuiz(text);
      const exam = ContentGenerator.generateExamQuestions(text);
      const formulas = ContentGenerator.extractFormulas(text);
      setResults({ summary, flashcards, quiz, exam, formulas });
    }, 3000);
    setTimeout(() => {
      setUploadState('done');
      addXP(500, 'Document Processed');
    }, 4500);
  };

  const handleAnalyze = () => {
    const text = fileText || pastedText;
    if (text.trim()) {
      processUpload(text);
    }
  };

  const handleReset = () => {
    setUploadState('idle');
    setResults(null);
    setFileText('');
    setPastedText('');
    setFileName('');
    setBinaryWarning(false);
    setQuizAnswers({});
    setQuizRevealed({});
  };

  if (uploadState === 'done' && results) {
    return (
      <div className="upload-results anim-fade">
        <div className="results-header luxury-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <h1>AI Analysis Complete</h1>
              <p>{fileName ? `Processed: ${fileName}` : 'Your text has been processed into study materials.'}</p>
            </div>
            <button
              onClick={handleReset}
              style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '10px 18px', borderRadius: 10,
                border: '1px solid var(--color-border)',
                background: 'var(--color-base-alt)',
                color: 'var(--color-text-secondary)',
                fontSize: 13, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'var(--font-display)',
                whiteSpace: 'nowrap',
              }}
            >
              ← Analyze Another
            </button>
          </div>
          <div className="result-tabs">
            <button className={`tab-btn ${activeResultTab === 'summary' ? 'active' : ''}`} onClick={() => setActiveResultTab('summary')}>
              <List size={16} /> Summary
            </button>
            <button className={`tab-btn ${activeResultTab === 'flashcards' ? 'active' : ''}`} onClick={() => setActiveResultTab('flashcards')}>
              <BrainCircuit size={16} /> Auto-Flashcards
            </button>
            <button className={`tab-btn ${activeResultTab === 'quiz' ? 'active' : ''}`} onClick={() => setActiveResultTab('quiz')}>
              <CheckCircle size={16} /> Quick Quiz
            </button>
            <button className={`tab-btn ${activeResultTab === 'exam' ? 'active' : ''}`} onClick={() => setActiveResultTab('exam')}>
              <FileText size={16} /> Exam Questions
            </button>
            <button className={`tab-btn ${activeResultTab === 'formulas' ? 'active' : ''}`} onClick={() => setActiveResultTab('formulas')}>
              <BrainCircuit size={16} /> Formulas
            </button>
          </div>
        </div>

        <div className="results-content luxury-card">
          {activeResultTab === 'summary' && (
            <div className="summary-view">
              <h3>Extractive Summary (TextRank Algorithm)</h3>
              <ul>
                {results.summary.map((sent, i) => (
                  <li key={i}><p>{sent}</p></li>
                ))}
              </ul>
            </div>
          )}

          {activeResultTab === 'flashcards' && (
            <div className="flashcards-view">
              <div className="fc-summary-panel">
                <h3><BrainCircuit size={18} style={{marginRight: 8}}/> Auto-Generated Flashcards</h3>
                <div className="fc-stats">
                  <div className="stat-pill"><strong>{results.flashcards.length}</strong> Cards Created</div>
                  <div className="stat-pill type-pill">Concepts & Definitions</div>
                </div>
                <p className="subtext">These have been automatically extracted from your document and added to your Spaced Repetition deck.</p>
              </div>

              <div className="fc-interactive-deck">
                {results.flashcards.map((fc, i) => (
                  <div key={i} className="fc-preview-card">
                    <div className="fc-preview-header">
                      <span className="fc-type-badge">{fc.type || 'CONCEPT'}</span>
                    </div>
                    <div className="fc-front"><strong>Q:</strong> <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{fc.front}</ReactMarkdown></div>
                    <div className="fc-back"><strong>A:</strong> <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{fc.back}</ReactMarkdown></div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeResultTab === 'quiz' && (
            <div className="quiz-view">
              <h3>Knowledge Check</h3>
              {(() => {
                const answered = Object.keys(quizAnswers).length;
                const correct = results.quiz.reduce((acc: number, q: any, i: number) =>
                  quizAnswers[i] === q.answerIndex ? acc + 1 : acc, 0);
                return answered > 0 && (
                  <div className="quiz-score-bar">
                    <span className="score-label">Score: <strong style={{ color: correct === answered ? '#10b981' : 'var(--color-accent)' }}>{correct}/{answered}</strong></span>
                    <div className="score-progress-bg">
                      <div className="score-progress-fill" style={{ width: `${(correct / Math.max(answered, 1)) * 100}%`, background: correct === answered ? '#10b981' : 'var(--color-accent)' }} />
                    </div>
                  </div>
                );
              })()}
              {results.quiz.map((q: any, i: number) => {
                const selected = quizAnswers[i];
                const isAnswered = selected !== undefined;
                const isCorrect = selected === q.answerIndex;
                return (
                  <div key={i} className={`quiz-question ${isAnswered ? (isCorrect ? 'q-correct' : 'q-wrong') : ''}`}>
                    <h4>{i + 1}. <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.question}</ReactMarkdown></h4>
                    <div className="quiz-options">
                      {q.options.map((opt: string, j: number) => {
                        let btnClass = 'quiz-opt-btn';
                        if (isAnswered) {
                          if (j === q.answerIndex) btnClass += ' opt-correct';
                          else if (j === selected) btnClass += ' opt-wrong';
                          else btnClass += ' opt-dim';
                        }
                        return (
                          <button
                            key={j}
                            className={btnClass}
                            disabled={isAnswered}
                            onClick={() => {
                              setQuizAnswers(prev => ({ ...prev, [i]: j }));
                              if (j === q.answerIndex) addXP(200, 'Correct Quiz Answer');
                            }}
                          >
                            <span className="opt-letter">{['A','B','C','D'][j]}</span>
                            <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{opt}</ReactMarkdown>
                            {isAnswered && j === q.answerIndex && <span className="opt-icon">✓</span>}
                            {isAnswered && j === selected && j !== q.answerIndex && <span className="opt-icon">✗</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeResultTab === 'exam' && (
            <div className="exam-view">
              <h3>Generated Exam Questions</h3>
              <p className="subtext" style={{ marginBottom: '24px' }}>Practice with open-ended and essay-style questions derived from the text.</p>
              <div className="exam-questions-grid">
                {results.exam.map((q, i) => (
                  <div key={i} className="exam-question-card luxury-card">
                    <span className="fc-type-badge">{q.type}</span>
                    <h4 style={{ marginTop: '12px', fontSize: '16px', lineHeight: '1.5' }}><ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{q.question}</ReactMarkdown></h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeResultTab === 'formulas' && (
            <div className="formulas-view">
              <h3>Extracted Formulas & Equations</h3>
              <p className="subtext" style={{ marginBottom: '24px' }}>We found these mathematical expressions in your document.</p>
              <div className="formulas-list">
                {results.formulas.length > 0 ? results.formulas.map((f, i) => (
                  <div key={i} className="formula-card">
                    <div className="formula-math">
                       <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{`$$${f.formula.replace(/\$/g, '')}$$`}</ReactMarkdown>
                    </div>
                    <div className="formula-context">
                      <strong>Context:</strong> "{f.context}"
                    </div>
                  </div>
                )) : (
                  <div className="no-formulas">No formulas detected in this document.</div>
                )}
              </div>
            </div>
          )}
        </div>

        <style>{`
          .upload-results { display: flex; flex-direction: column; gap: 24px; padding: 20px 0; max-width: 900px; margin: 0 auto; }
          .results-header { text-align: center; padding: 40px; }
          .results-header h1 { font-family: var(--font-serif); color: var(--color-text-primary); margin-bottom: 8px; }
          .results-header p { color: var(--color-text-secondary); margin-bottom: 24px; }
          
          .result-tabs { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; }
          .tab-btn { display: flex; align-items: center; gap: 8px; padding: 10px 20px; border-radius: 20px; background: var(--color-base-alt); border: var(--border-soft); color: var(--color-text-secondary); cursor: pointer; transition: all var(--transition-fast); font-weight: 600; font-size: 14px; }
          .tab-btn:hover { color: var(--color-text-primary); border-color: var(--color-border-strong); }
          .tab-btn.active { background: rgba(201,168,76,0.1); color: var(--color-accent); border-color: var(--color-accent); }

          .results-content { padding: 40px; min-height: 400px; }
          .results-content h3 { display: flex; align-items: center; font-family: var(--font-display); color: var(--color-text-primary); border-bottom: 2px solid var(--color-accent); padding-bottom: 12px; margin-bottom: 24px; }
          
          .summary-view ul { padding-left: 20px; color: var(--color-text-primary); line-height: 1.6; }
          .summary-view li { margin-bottom: 16px; }

          .fc-summary-panel { margin-bottom: 32px; }
          .fc-stats { display: flex; gap: 12px; margin-bottom: 16px; }
          .stat-pill { background: var(--color-base-deep); border: 1px solid var(--color-border); padding: 6px 12px; border-radius: 12px; font-size: 13px; color: var(--color-text-secondary); }
          .stat-pill strong { color: var(--color-text-primary); font-size: 14px; margin-right: 4px; }
          .type-pill { color: var(--color-accent); border-color: rgba(201,168,76,0.3); background: rgba(201,168,76,0.05); }
          
          .subtext { color: var(--color-text-muted); font-size: 13px; }
          
          .fc-interactive-deck { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; }
          .fc-preview-card { background: var(--color-base-alt); border: 1px solid var(--color-border); padding: 24px; border-radius: var(--border-radius-md); box-shadow: 0 4px 12px rgba(0,0,0,0.1); transition: transform 0.2s; }
          .fc-preview-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.2); border-color: rgba(201,168,76,0.3); }
          
          .fc-preview-header { margin-bottom: 16px; display: flex; justify-content: flex-end; }
          .fc-type-badge { background: rgba(201,168,76,0.1); color: var(--color-accent); padding: 4px 10px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(201,168,76,0.3); }
          
          .fc-front { font-weight: 600; color: var(--color-text-primary); margin-bottom: 16px; font-size: 15px; line-height: 1.5; }
          .fc-back { color: var(--color-text-secondary); font-size: 14px; padding-top: 16px; border-top: 1px dashed rgba(255,255,255,0.1); line-height: 1.5; }

          .quiz-score-bar { display: flex; align-items: center; gap: 16px; background: var(--color-base-alt); border: 1px solid var(--color-border); border-radius: 12px; padding: 12px 20px; margin-bottom: 28px; }
          .score-label { font-size: 14px; color: var(--color-text-secondary); white-space: nowrap; }
          .score-progress-bg { flex: 1; height: 6px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden; }
          .score-progress-fill { height: 100%; border-radius: 4px; transition: width 0.4s ease; }

          .quiz-question { margin-bottom: 32px; padding: 20px; border-radius: 12px; border: 1px solid var(--color-border); transition: border-color 0.2s; }
          .quiz-question.q-correct { border-color: rgba(16,185,129,0.4); background: rgba(16,185,129,0.03); }
          .quiz-question.q-wrong { border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.03); }
          .quiz-question h4 { margin-bottom: 16px; color: var(--color-text-primary); font-size: 16px; display: flex; gap: 8px; }
          .quiz-options { display: flex; flex-direction: column; gap: 10px; }
          .quiz-opt-btn { display: flex; align-items: center; gap: 12px; text-align: left; padding: 12px 20px; background: var(--color-base-alt); border: 1px solid var(--color-border); border-radius: var(--border-radius-sm); color: var(--color-text-secondary); cursor: pointer; transition: all var(--transition-fast); font-size: 14px; position: relative; }
          .quiz-opt-btn:not(:disabled):hover { background: rgba(201,168,76,0.05); color: var(--color-accent); border-color: var(--color-accent); }
          .quiz-opt-btn:disabled { cursor: default; }
          .quiz-opt-btn.opt-correct { background: rgba(16,185,129,0.1) !important; border-color: #10b981 !important; color: #10b981 !important; }
          .quiz-opt-btn.opt-wrong { background: rgba(239,68,68,0.1) !important; border-color: #ef4444 !important; color: #ef4444 !important; }
          .quiz-opt-btn.opt-dim { opacity: 0.4; }
          .opt-letter { display: inline-flex; align-items: center; justify-content: center; width: 24px; height: 24px; border-radius: 6px; background: rgba(255,255,255,0.06); font-size: 11px; font-weight: 700; flex-shrink: 0; }
          .opt-icon { margin-left: auto; font-size: 16px; flex-shrink: 0; }

          .exam-questions-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
          .exam-question-card { padding: 24px; border: 1px solid var(--border-soft); border-radius: var(--border-radius-md); background: var(--color-surface); }
          
          .formulas-list { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
          .formula-card { background: var(--color-base-deep); padding: 20px; border-radius: var(--border-radius-md); border: 1px solid var(--border-soft); display: flex; flex-direction: column; gap: 12px; }
          .formula-math { font-size: 18px; color: var(--color-accent); text-align: center; padding: 10px; background: rgba(0,0,0,0.2); border-radius: 8px; overflow-x: auto; }
          .formula-context { font-size: 13px; color: var(--color-text-secondary); font-style: italic; line-height: 1.4; }
          .no-formulas { padding: 40px; text-align: center; color: var(--color-text-muted); background: var(--color-base-alt); border-radius: 8px; grid-column: span 2; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="upload-hub anim-fade">
      <div className="uh-header">
        <h1 className="uh-title">AI Study Hub</h1>
        <p className="uh-subtitle">Upload anything. Get summaries, flashcards, and quizzes instantly.</p>
      </div>

      <div className="uh-main">
        {/* URL Input Area */}
        <div className="url-bar luxury-card">
          <LinkIcon size={20} className="url-icon" />
          <input 
            type="text" 
            placeholder="Paste a YouTube or Article link..." 
            value={urlInput}
            onChange={e => setUrlInput(e.target.value)}
            disabled={uploadState !== 'idle'}
          />
          <button className="url-submit" onClick={() => processUpload(urlInput)} disabled={!urlInput || uploadState !== 'idle'}>
            Analyze
          </button>
        </div>

        <div className="or-divider"><span>OR UPLOAD FILES</span></div>

        {/* Drag and Drop Area */}
        <div 
          className={`drop-zone luxury-card ${dragActive ? 'drag-active' : ''} ${uploadState !== 'idle' ? 'processing' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {uploadState === 'idle' ? (
            <div className="drop-content">
              <div className="upload-icon-ring">
                <UploadCloud size={32} />
              </div>
              {fileName ? (
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'var(--color-accent)', fontWeight: 700, marginBottom: 4 }}>✓ {fileName}</p>
                  <p style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>File loaded — click Analyze below</p>
                </div>
              ) : (
                <>
                  <h3>Drag &amp; Drop your notes here</h3>
                  <p>Supports .txt, .md, .csv, .json and plain text files</p>
                </>
              )}

              {binaryWarning && (
                <div style={{
                  marginTop: 12, padding: '10px 16px', borderRadius: 10,
                  background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)',
                  color: '#f87171', fontSize: 13, textAlign: 'center', maxWidth: 420
                }}>
                  📄 PDFs, images and DOCX files can't be read in the browser.<br />
                  <strong>Paste your text below instead.</strong>
                </div>
              )}

              <div className="supported-formats">
                <div className="fmt"><FileText size={16} /> TXT / MD</div>
                <div className="fmt"><MonitorPlay size={16} /> Paste Text</div>
                <div className="fmt"><ImageIcon size={16} /> Notes</div>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept=".txt,.md,.csv,.json,.html,.tex,.py,.js,.ts"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
              <button className="browse-btn" onClick={() => fileInputRef.current?.click()}>
                Browse Files
              </button>
            </div>
          ) : (
            <div className="processing-content">
              <div className="spinner-ring">
                <Loader2 size={40} className="spinner" />
              </div>
              <h3 className="pulse-text">
                {uploadState === 'uploading' && 'Uploading document...'}
                {uploadState === 'parsing' && 'Extracting text and equations...'}
                {uploadState === 'analyzing' && 'AI generating flashcards & summaries...'}
              </h3>
              
              <div className="progress-container">
                <div className={`progress-bar ${uploadState}`}></div>
              </div>
            </div>
          )}
        </div>

        {/* Paste text area + Analyze button */}
        {uploadState === 'idle' && (
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Or paste your text / notes here
            </label>
            <textarea
              value={pastedText}
              onChange={e => setPastedText(e.target.value)}
              placeholder="Paste lecture notes, textbook paragraphs, article text, or any content you want to study..."
              style={{
                width: '100%', minHeight: 140, padding: '14px 16px',
                borderRadius: 12, border: '1px solid var(--color-border)',
                background: 'var(--color-base-alt)', color: 'var(--color-text-primary)',
                fontSize: 14, lineHeight: 1.6, resize: 'vertical',
                fontFamily: 'var(--font-body)', outline: 'none', boxSizing: 'border-box',
              }}
            />
            <button
              onClick={handleAnalyze}
              disabled={!fileText && !pastedText.trim()}
              style={{
                alignSelf: 'flex-end', padding: '12px 32px',
                borderRadius: 50, border: 'none',
                background: (fileText || pastedText.trim()) ? 'var(--color-accent)' : 'var(--color-base-alt)',
                color: (fileText || pastedText.trim()) ? 'var(--color-base-deep)' : 'var(--color-text-muted)',
                fontSize: 15, fontWeight: 700, cursor: (fileText || pastedText.trim()) ? 'pointer' : 'not-allowed',
                fontFamily: 'var(--font-display)', transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: 8,
              }}
            >
              <PlayCircle size={18} /> Analyze Content
            </button>
          </div>
        )}
      </div>

      <style>{`
        .upload-hub { display: flex; flex-direction: column; align-items: center; max-width: 800px; margin: 0 auto; padding: 40px 0; }
        
        .uh-header { text-align: center; margin-bottom: 40px; }
        .uh-title { font-family: var(--font-serif); font-size: 36px; color: var(--color-text-primary); margin-bottom: 12px; }
        .uh-subtitle { font-size: 16px; color: var(--color-text-secondary); }

        .uh-main { width: 100%; display: flex; flex-direction: column; gap: 24px; }

        .url-bar { display: flex; align-items: center; padding: 12px 16px; border-radius: var(--border-radius-full); }
        .url-icon { color: var(--color-text-muted); margin-right: 12px; }
        .url-bar input { flex: 1; background: transparent; border: none; color: var(--color-text-primary); font-size: 15px; outline: none; }
        .url-bar input::placeholder { color: var(--color-text-muted); }
        .url-submit { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); color: white; border: none; padding: 8px 24px; border-radius: 20px; font-weight: 600; cursor: pointer; transition: all var(--transition-fast); }
        .url-submit:hover:not(:disabled) { box-shadow: var(--shadow-glow); transform: translateY(-1px); }
        .url-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        .or-divider { text-align: center; position: relative; margin: 10px 0; }
        .or-divider::before { content: ''; position: absolute; top: 50%; left: 0; right: 0; height: 1px; background: var(--border-soft); z-index: 1; }
        .or-divider span { position: relative; z-index: 2; background: var(--color-base); padding: 0 16px; font-size: 12px; font-weight: 700; color: var(--color-text-muted); letter-spacing: 1px; }

        .drop-zone { border: 2px dashed var(--border-soft); border-radius: var(--border-radius-lg); min-height: 400px; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; position: relative; overflow: hidden; }
        .drop-zone.drag-active { border-color: var(--color-accent); background: rgba(201,168,76,0.05); }
        .drop-zone.processing { border-style: solid; border-color: var(--color-accent); }

        .drop-content { display: flex; flex-direction: column; align-items: center; text-align: center; padding: 40px; }
        .upload-icon-ring { width: 80px; height: 80px; border-radius: 50%; background: rgba(201,168,76,0.1); color: var(--color-accent); display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
        .drop-content h3 { font-family: var(--font-display); font-size: 20px; color: var(--color-text-primary); margin-bottom: 8px; }
        .drop-content p { color: var(--color-text-secondary); margin-bottom: 32px; font-size: 14px; }

        .supported-formats { display: flex; gap: 16px; margin-bottom: 32px; }
        .fmt { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: var(--color-base); border-radius: var(--border-radius-sm); font-size: 12px; font-weight: 600; color: var(--color-text-secondary); }

        .browse-btn { background: var(--color-surface); border: 1px solid var(--color-accent); color: var(--color-accent); padding: 12px 32px; border-radius: var(--border-radius-full); font-weight: 600; font-size: 15px; cursor: pointer; transition: all var(--transition-fast); }
        .browse-btn:hover { background: rgba(201,168,76,0.1); }

        /* Processing State */
        .processing-content { display: flex; flex-direction: column; align-items: center; width: 100%; max-width: 400px; padding: 40px; }
        .spinner-ring { color: var(--color-accent); margin-bottom: 24px; }
        .spinner { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        .pulse-text { font-family: var(--font-display); font-size: 16px; color: var(--color-text-primary); text-align: center; margin-bottom: 32px; animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .5; } }

        .progress-container { width: 100%; height: 6px; background: var(--color-base); border-radius: 3px; overflow: hidden; }
        .progress-bar { height: 100%; background: var(--color-accent); transition: width 1s ease; }
        .progress-bar.uploading { width: 30%; }
        .progress-bar.parsing { width: 60%; }
        .progress-bar.analyzing { width: 90%; }
      `}</style>
    </div>
  );
};

export default UploadHub;
