import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, Brain, Bot, Lightbulb, FileText, Zap, AlertCircle, Key } from 'lucide-react';
import { GeminiService } from '../services/GeminiService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const SYSTEM_PROMPT = `You are LUMEN-X, an elite academic AI tutor specialised in Physics, Mathematics, Chemistry, Biology and general academic study. 
You give precise, well-structured responses using markdown. 
When explaining maths or science, always use LaTeX notation enclosed in $ for inline and $$ for display maths.
Be concise but thorough. If a student asks for a practice problem, generate one immediately.`;

const AiHub: React.FC = () => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<{role: 'user'|'ai', content: string}[]>([
    {
      role: 'ai',
      content: "Hello! I'm **LUMEN-X**, your advanced academic copilot. I can explain concepts, generate practice problems, and help you study across **Physics, Math, Chemistry, and Biology**. What would you like to explore today?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState('');
  const [hasApiKey, setHasApiKey] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasApiKey(!!localStorage.getItem('lumen_gemini_key'));
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat, isTyping]);

  const handleSend = async () => {
    if (!query.trim() || isTyping) return;

    const userMsg = query.trim();
    setChat(prev => [...prev, { role: 'user', content: userMsg }]);
    setQuery('');
    setIsTyping(true);
    setError('');

    try {
      // Build conversation history as a single prompt (Gemini free endpoint is stateless)
      const history = chat
        .map(m => `${m.role === 'ai' ? 'LUMEN-X' : 'Student'}: ${m.content}`)
        .join('\n\n');
      const fullPrompt = `${history}\n\nStudent: ${userMsg}\n\nLUMEN-X:`;

      const response = await GeminiService.generateContent(fullPrompt, SYSTEM_PROMPT);
      setChat(prev => [...prev, { role: 'ai', content: response }]);
    } catch (err: any) {
      const msg = err.message || 'Something went wrong.';
      setError(msg);
      // Fallback: smart local responses
      const lower = userMsg.toLowerCase();
      let fallback = "I need a Gemini API key to give you a full AI response. Add one in **Settings** (top bar). In the meantime, try the **Upload Hub** or **Socratic Solver** for guided learning.";
      if (lower.includes('quantum')) {
        fallback = "**Quantum Mechanics** describes nature at the atomic/subatomic scale. Key ideas:\n- Wave-particle duality\n- The Schrödinger equation: $i\\hbar \\frac{\\partial}{\\partial t}|\\psi\\rangle = \\hat{H}|\\psi\\rangle$\n- Heisenberg uncertainty: $\\Delta x \\cdot \\Delta p \\geq \\frac{\\hbar}{2}$\n\nWould you like a practice problem?";
      } else if (lower.includes('calculus') || lower.includes('derivative') || lower.includes('integral')) {
        fallback = "**Calculus core rules:**\n- Power rule: $\\frac{d}{dx}x^n = nx^{n-1}$\n- Chain rule: $\\frac{d}{dx}f(g(x)) = f'(g(x)) \\cdot g'(x)$\n- Fundamental theorem: $\\int_a^b f(x)\\,dx = F(b) - F(a)$\n\nAdd a Gemini key in Settings for full AI-powered explanations.";
      } else if (lower.includes('practice') || lower.includes('quiz') || lower.includes('problem')) {
        fallback = "**Sample Problem:**\nA ball is thrown upward with an initial velocity of $20\\,\\text{m/s}$. How high does it go?\n\n*Hint:* Use $v^2 = u^2 - 2gh$ and set $v = 0$ at the peak.\n\nAdd your Gemini key in Settings to get AI-generated personalised problems!";
      }
      setChat(prev => [...prev, { role: 'ai', content: fallback }]);
    } finally {
      setIsTyping(false);
    }
  };

  const suggestions = [
    { icon: Lightbulb, text: "Explain Quantum Entanglement" },
    { icon: FileText, text: "Generate a Calculus practice problem" },
    { icon: Zap, text: "Summarise Organic Chemistry reactions" },
    { icon: Brain, text: "What is Newton's Second Law?" },
  ];

  return (
    <div className="ai-hub anim-fade">
      <div className="ai-header luxury-card">
        <div className="ai-header-left">
          <div className="ai-icon-wrap">
            <Sparkles size={24} className="ai-sparkle-icon" />
          </div>
          <div>
            <h1 className="ai-title text-gold-gradient">AI Study Hub</h1>
            <p className="ai-subtitle">Your personal, advanced academic copilot powered by Gemini.</p>
          </div>
        </div>
        <div className="ai-badge">
          <Brain size={14} /> {hasApiKey ? 'Gemini Connected' : 'Add API Key in Settings'}
        </div>
      </div>

      {!hasApiKey && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '14px 20px', borderRadius: 12,
          background: 'rgba(212,175,55,0.06)', border: '1px solid rgba(212,175,55,0.2)',
          fontSize: 13, color: 'var(--color-text-secondary)',
        }}>
          <Key size={16} color="var(--color-accent)" />
          <span>
            Add a free <strong style={{ color: 'var(--color-accent)' }}>Google Gemini API key</strong> in
            Settings (top bar) to unlock full AI responses. Until then, smart fallback answers are used.
          </span>
        </div>
      )}

      <div className="ai-chat-container luxury-card">
        <div className="chat-window">
          {chat.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
              <div className="chat-avatar">
                {msg.role === 'ai' ? <Bot size={18} /> : 'U'}
              </div>
              <div className="chat-bubble">
                <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
                  {msg.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="chat-message ai typing-indicator">
              <div className="chat-avatar"><Bot size={18} /></div>
              <div className="chat-bubble">
                <div className="dots"><span>.</span><span>.</span><span>.</span></div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <div className="chat-suggestions">
          {suggestions.map((s, i) => (
            <button key={i} className="suggestion-pill" onClick={() => setQuery(s.text)}>
              <s.icon size={14} />
              <span>{s.text}</span>
            </button>
          ))}
        </div>

        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Ask about a concept, request a quiz, or explore a topic..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button className="send-btn" onClick={handleSend} disabled={!query.trim() || isTyping}>
            <Send size={18} />
          </button>
        </div>
      </div>

      <style>{`
        .ai-hub { display: flex; flex-direction: column; gap: 20px; height: 100%; max-width: 900px; margin: 0 auto; }
        
        .ai-header { display: flex; align-items: center; justify-content: space-between; padding: 24px 32px; background: linear-gradient(to right, var(--color-base), var(--color-base-alt)); border-radius: var(--border-radius-lg); }
        .ai-header-left { display: flex; align-items: center; gap: 16px; }
        .ai-icon-wrap { width: 56px; height: 56px; border-radius: 16px; background: rgba(201,168,76,0.1); display: flex; align-items: center; justify-content: center; color: var(--color-accent); border: 1px solid rgba(201,168,76,0.2); animation: pulse-glow 3s ease infinite; }
        .ai-title { font-family: var(--font-display); font-size: 24px; font-weight: 700; margin-bottom: 4px; }
        .ai-subtitle { font-size: 14px; color: var(--color-text-secondary); }
        .ai-badge { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: var(--color-base-deep); border-radius: 20px; font-size: 11px; font-weight: 700; color: var(--color-accent); border: 1px solid rgba(212,175,55,0.2); letter-spacing: 0.5px; text-transform: uppercase; font-family: var(--font-display); }

        .ai-chat-container { flex: 1; display: flex; flex-direction: column; min-height: 500px; padding: 0; overflow: hidden; border-radius: var(--border-radius-lg); }
        
        .chat-window { flex: 1; padding: 32px; overflow-y: auto; display: flex; flex-direction: column; gap: 20px; }
        .chat-message { display: flex; gap: 14px; max-width: 88%; }
        .chat-message.user { align-self: flex-end; flex-direction: row-reverse; }
        .chat-message.ai { align-self: flex-start; }
        
        .chat-avatar { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: var(--font-display); font-weight: 700; font-size: 13px; }
        .user .chat-avatar { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); color: #000; box-shadow: var(--shadow-sm); }
        .ai .chat-avatar { background: var(--color-base-deep); color: var(--color-accent); border: var(--border-soft); }
        
        .chat-bubble { padding: 14px 20px; border-radius: 18px; font-size: 14.5px; line-height: 1.65; }
        .chat-bubble p { margin: 0 0 8px; }
        .chat-bubble p:last-child { margin-bottom: 0; }
        .chat-bubble ul, .chat-bubble ol { padding-left: 20px; margin: 8px 0; }
        .chat-bubble li { margin-bottom: 4px; }
        .chat-bubble strong { color: var(--color-text-primary); }
        .chat-bubble .katex-display { margin: 10px 0; overflow-x: auto; }
        .user .chat-bubble { background: var(--color-base-deep); color: var(--color-text-primary); border-top-right-radius: 4px; border: var(--border-soft); }
        .ai .chat-bubble { background: rgba(201,168,76,0.03); color: var(--color-text-primary); border: 1px solid rgba(201,168,76,0.12); border-top-left-radius: 4px; }
        
        .chat-suggestions { display: flex; gap: 8px; padding: 0 32px 14px; overflow-x: auto; flex-wrap: wrap; }
        .suggestion-pill { display: flex; align-items: center; gap: 8px; padding: 7px 14px; background: var(--color-base-alt); border: var(--border-soft); border-radius: 20px; font-size: 12px; color: var(--color-text-secondary); cursor: pointer; transition: all var(--transition-fast); white-space: nowrap; font-family: var(--font-primary); font-weight: 500; }
        .suggestion-pill:hover { background: var(--color-base-deep); color: var(--color-accent); border-color: rgba(212,175,55,0.3); transform: translateY(-1px); }

        .chat-input-area { padding: 16px 24px; border-top: var(--border-soft); background: var(--color-base); display: flex; gap: 14px; align-items: center; }
        .chat-input-area input { flex: 1; padding: 14px 22px; border-radius: 100px; border: 1.5px solid var(--color-border-strong); background: var(--color-surface); color: var(--color-text-primary); font-size: 14px; font-family: inherit; transition: all var(--transition-fast); }
        .chat-input-area input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(201,168,76,0.1); }
        .send-btn { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); display: flex; align-items: center; justify-content: center; color: #000; border: none; cursor: pointer; transition: all var(--transition-fast); flex-shrink: 0; box-shadow: 0 4px 16px rgba(212,175,55,0.3); }
        .send-btn:hover:not(:disabled) { transform: scale(1.08); box-shadow: 0 6px 20px rgba(212,175,55,0.45); }
        .send-btn:disabled { opacity: 0.45; cursor: not-allowed; background: var(--color-border-strong); color: var(--color-text-muted); box-shadow: none; }
        
        .dots span { animation: blink 1.4s infinite both; font-size: 22px; font-weight: bold; color: var(--color-accent); }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default AiHub;
