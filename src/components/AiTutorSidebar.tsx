import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot } from 'lucide-react';

interface AiTutorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiTutorSidebar: React.FC<AiTutorSidebarProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<{role: 'user'|'ai', content: string}[]>([
    {
      role: 'ai',
      content: "Hi! I'm LUMEN-X, your AI tutor. I can explain the content on your screen, generate practice questions, or clarify concepts. How can I help?"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [chat, isTyping, isOpen]);

  if (!isOpen) return null;

  const handleSend = () => {
    if (!query.trim()) return;
    
    setChat(prev => [...prev, { role: 'user', content: query }]);
    const currentQuery = query;
    setQuery('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let response = "That's an excellent question. The underlying theory connects deeply with the fundamental equations we're studying.";
      if (currentQuery.toLowerCase().includes('explain')) {
        response = "I'll break this down: Think of it like a spring system. Energy is conserved but changes forms between kinetic and potential, dictated by the governing differential equations.";
      } else if (currentQuery.toLowerCase().includes('practice')) {
        response = "Sure. Try this: A particle is in an infinite square well of width L. If it transitions from n=2 to n=1, what is the energy of the emitted photon?";
      }
      setChat(prev => [...prev, { role: 'ai', content: response }]);
    }, 1500);
  };

  return (
    <div className="ai-tutor-sidebar">
      <div className="ai-tutor-header">
        <div className="ai-tutor-title">
          <Sparkles size={16} className="text-gold-gradient" />
          <span className="text-gold-gradient" style={{ fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '0.5px' }}>LUMEN-X Tutor</span>
        </div>
        <button className="icon-btn" onClick={onClose}><X size={18} /></button>
      </div>

      <div className="ai-tutor-chat">
        {chat.map((msg, idx) => (
          <div key={idx} className={`tutor-msg ${msg.role}`}>
            <div className="tutor-avatar">
              {msg.role === 'ai' ? <Bot size={14} /> : 'U'}
            </div>
            <div className="tutor-bubble">
              <p>{msg.content}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="tutor-msg ai">
            <div className="tutor-avatar"><Bot size={14} /></div>
            <div className="tutor-bubble">
              <div className="dots"><span>.</span><span>.</span><span>.</span></div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="ai-tutor-input">
        <input 
          type="text" 
          placeholder="Ask LUMEN-X..." 
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button className="tutor-send-btn" onClick={handleSend} disabled={!query.trim() || isTyping}>
          <Send size={14} />
        </button>
      </div>

      <style>{`
        .ai-tutor-sidebar {
          position: fixed; top: 0; right: 0; bottom: 0; width: 340px;
          background: var(--color-base-alt); border-left: var(--border-soft);
          box-shadow: -4px 0 24px rgba(0,0,0,0.1);
          display: flex; flex-direction: column;
          z-index: 200; animation: slideInRight var(--transition-normal);
        }

        .ai-tutor-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 20px; border-bottom: var(--border-soft);
          background: var(--color-base);
        }

        .ai-tutor-title { display: flex; align-items: center; gap: 8px; }

        .ai-tutor-chat {
          flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px;
        }

        .tutor-msg { display: flex; gap: 12px; max-width: 90%; }
        .tutor-msg.user { align-self: flex-end; flex-direction: row-reverse; }
        
        .tutor-avatar {
          width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-family: var(--font-display); font-weight: 700; font-size: 11px; flex-shrink: 0;
        }
        .user .tutor-avatar { background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light)); color: white; }
        .ai .tutor-avatar { background: var(--color-base-deep); color: var(--color-accent); border: var(--border-soft); }

        .tutor-bubble { padding: 12px 16px; border-radius: 12px; font-size: 13.5px; line-height: 1.5; }
        .user .tutor-bubble { background: var(--color-base-deep); color: var(--color-text-primary); border-top-right-radius: 4px; }
        .ai .tutor-bubble { background: var(--color-surface); color: var(--color-text-primary); border: var(--border-soft); border-top-left-radius: 4px; }

        .ai-tutor-input {
          padding: 16px; border-top: var(--border-soft); background: var(--color-base);
          display: flex; gap: 12px; align-items: center;
        }

        .ai-tutor-input input {
          flex: 1; padding: 12px 16px; border-radius: 20px; border: 1px solid var(--color-border-strong);
          background: var(--color-surface); color: var(--color-text-primary); font-size: 13px; font-family: inherit;
        }
        .ai-tutor-input input:focus { outline: none; border-color: var(--color-accent); }

        .tutor-send-btn {
          width: 36px; height: 36px; border-radius: 50%; background: linear-gradient(135deg, var(--color-accent), var(--color-accent-light));
          display: flex; align-items: center; justify-content: center; color: white; border: none; cursor: pointer;
        }
        .tutor-send-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .dots span { animation: blink 1.4s infinite both; font-size: 16px; font-weight: bold; }
        .dots span:nth-child(2) { animation-delay: 0.2s; }
        .dots span:nth-child(3) { animation-delay: 0.4s; }

        @keyframes slideInRight { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
    </div>
  );
};

export default AiTutorSidebar;
