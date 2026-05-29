import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, Brain, Bot, Lightbulb, FileText, Zap } from 'lucide-react';

const AiHub: React.FC = () => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<{role: 'user'|'ai', content: string}[]>([
    {
      role: 'ai',
      content: "Hello! I am LUMEN's Integrated AI. I can generate practice questions, summarize complex topics, or explain concepts across Physics, Math, Chemistry, and Biology. What would you like to study today?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat, isTyping]);

  const handleSend = () => {
    if (!query.trim()) return;
    
    setChat(prev => [...prev, { role: 'user', content: query }]);
    const currentQuery = query;
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let response = "I can certainly help you with that. The core principles involve understanding the underlying mathematical frameworks and applying them to physical systems.";
      if (currentQuery.toLowerCase().includes('quantum')) {
        response = "Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles. Would you like me to generate a practice problem on the Schrödinger equation?";
      } else if (currentQuery.toLowerCase().includes('practice')) {
        response = "Here is a practice problem: Calculate the final velocity of a 2kg object dropped from a height of 10 meters, ignoring air resistance. (Hint: Use conservation of energy).";
      }
      setChat(prev => [...prev, { role: 'ai', content: response }]);
    }, 1500);
  };

  const suggestions = [
    { icon: Lightbulb, text: "Explain Quantum Entanglement" },
    { icon: FileText, text: "Generate Calculus Quiz" },
    { icon: Zap, text: "Summarize Organic Reactions" }
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
            <p className="ai-subtitle">Your personal, advanced academic copilot.</p>
          </div>
        </div>
        <div className="ai-badge">
          <Brain size={14} /> Powered by LUMEN-X
        </div>
      </div>

      <div className="ai-chat-container luxury-card">
        <div className="chat-window">
          {chat.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.role}`}>
              <div className="chat-avatar">
                {msg.role === 'ai' ? <Bot size={18} /> : 'U'}
              </div>
              <div className="chat-bubble">
                <p>{msg.content}</p>
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
        .ai-hub { display: flex; flex-direction: column; gap: 24px; height: 100%; max-width: 900px; margin: 0 auto; }
        
        .ai-header { display: flex; align-items: center; justify-content: space-between; padding: 24px 32px; background: linear-gradient(to right, var(--color-base), var(--color-base-alt)); border-radius: var(--border-radius-lg); }
        .ai-header-left { display: flex; align-items: center; gap: 16px; }
        .ai-icon-wrap { width: 56px; height: 56px; border-radius: 16px; background: rgba(201,168,76,0.1); display: flex; align-items: center; justify-content: center; color: var(--color-accent); border: 1px solid rgba(201,168,76,0.2); }
        .ai-title { font-family: var(--font-display); font-size: 24px; font-weight: 700; margin-bottom: 4px; }
        .ai-subtitle { font-size: 14px; color: var(--color-text-secondary); }
        .ai-badge { display: flex; align-items: center; gap: 6px; padding: 6px 12px; background: var(--color-base-deep); border-radius: 20px; font-size: 11px; font-weight: 700; color: var(--color-text-primary); border: var(--border-soft); letter-spacing: 0.5px; text-transform: uppercase; font-family: var(--font-display); }

        .ai-chat-container { flex: 1; display: flex; flex-direction: column; min-height: 500px; padding: 0; overflow: hidden; border-radius: var(--border-radius-lg); }
        
        .chat-window { flex: 1; padding: 32px; overflow-y: auto; display: flex; flex-direction: column; gap: 24px; }
        .chat-message { display: flex; gap: 16px; max-width: 85%; }
        .chat-message.user { align-self: flex-end; flex-direction: row-reverse; }
        .chat-message.ai { align-self: flex-start; }
        
        .chat-avatar { width: 36px; height: 36px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-family: var(--font-display); font-weight: 700; font-size: 14px; }
        .user .chat-avatar { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); color: white; box-shadow: var(--shadow-sm); }
        .ai .chat-avatar { background: var(--color-base-deep); color: var(--color-accent); border: var(--border-soft); }
        
        .chat-bubble { padding: 16px 20px; border-radius: 18px; font-size: 14.5px; line-height: 1.6; }
        .user .chat-bubble { background: var(--color-base-deep); color: var(--color-text-primary); border-top-right-radius: 4px; border: var(--border-soft); }
        .ai .chat-bubble { background: transparent; color: var(--color-text-primary); border: 1px solid rgba(201,168,76,0.15); border-top-left-radius: 4px; background: rgba(201,168,76,0.03); }
        
        .chat-suggestions { display: flex; gap: 10px; padding: 0 32px 16px; overflow-x: auto; }
        .suggestion-pill { display: flex; align-items: center; gap: 8px; padding: 8px 16px; background: var(--color-base-alt); border: var(--border-soft); border-radius: 20px; font-size: 13px; color: var(--color-text-secondary); cursor: pointer; transition: all var(--transition-fast); white-space: nowrap; font-family: var(--font-primary); font-weight: 500; }
        .suggestion-pill:hover { background: var(--color-base-deep); color: var(--color-accent); border-color: var(--color-accent); transform: translateY(-1px); box-shadow: var(--shadow-xs); }

        .chat-input-area { padding: 20px 32px; border-top: var(--border-soft); background: var(--color-base); display: flex; gap: 16px; align-items: center; }
        .chat-input-area input { flex: 1; padding: 16px 24px; border-radius: 100px; border: 1px solid var(--color-border-strong); background: var(--color-surface); color: var(--color-text-primary); font-size: 15px; font-family: inherit; transition: all var(--transition-fast); }
        .chat-input-area input:focus { outline: none; border-color: var(--color-accent); box-shadow: 0 0 0 3px rgba(201,168,76,0.1); }
        .send-btn { width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); display: flex; align-items: center; justify-content: center; color: white; border: none; cursor: pointer; transition: all var(--transition-fast); flex-shrink: 0; box-shadow: var(--shadow-sm); }
        .send-btn:hover:not(:disabled) { transform: scale(1.05); box-shadow: var(--shadow-md); }
        .send-btn:disabled { opacity: 0.5; cursor: not-allowed; background: var(--color-border-strong); color: var(--color-text-muted); box-shadow: none; }
        
        .dots span { animation: blink 1.4s infinite both; font-size: 20px; font-weight: bold; }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes blink { 0% { opacity: 0.2; } 20% { opacity: 1; } 100% { opacity: 0.2; } }
      `}</style>
    </div>
  );
};

export default AiHub;
