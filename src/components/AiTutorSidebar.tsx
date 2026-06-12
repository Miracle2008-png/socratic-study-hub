import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ALL_TOPICS } from '../data/topicCompiler';

interface AiTutorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab?: string | null;
  activeTopic?: string | null;
}

const AiTutorSidebar: React.FC<AiTutorSidebarProps> = ({ isOpen, onClose, activeTab, activeTopic }) => {
  const [query, setQuery] = useState('');
  
  // Resolve topic title for context
  const resolvedTopicId = activeTopic?.includes('/') ? activeTopic.split('/').pop()! : activeTopic;
  const normalizedId = resolvedTopicId?.toLowerCase().replace(/\s+/g, '-');
  const topicObj = normalizedId ? ALL_TOPICS[normalizedId] || ALL_TOPICS[resolvedTopicId!] : null;
  const topicTitle = topicObj ? topicObj.title : (activeTopic ? activeTopic.replace(/-/g, ' ') : null);

  const initialMessage = topicTitle 
    ? `Hi! I'm LUMEN-X, your AI tutor. I see you're currently studying **${topicTitle}**. I can explain this topic, generate practice questions, or clarify concepts. How can I help?`
    : "Hi! I'm LUMEN-X, your AI tutor. I can explain the content on your screen, generate practice questions, or clarify concepts. How can I help?";

  const [chat, setChat] = useState<{role: 'user'|'ai', content: string}[]>([
    { role: 'ai', content: initialMessage }
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Update greeting if topic changes and user hasn't chatted yet
  useEffect(() => {
    if (chat.length === 1 && chat[0].role === 'ai') {
      setChat([{ role: 'ai', content: initialMessage }]);
    }
  }, [topicTitle, initialMessage, chat.length]);

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
      let response = `That's an excellent question about ${topicTitle || 'this subject'}. The underlying theory connects deeply with the fundamental principles we're studying.`;
      
      if (currentQuery.toLowerCase().includes('explain')) {
        response = `I'll break this down: Think of ${topicTitle || 'this concept'} like a foundational building block. The key is understanding how the governing rules apply dynamically.`;
      } else if (currentQuery.toLowerCase().includes('practice')) {
        response = `Sure! Let's do a practice problem for ${topicTitle || 'this topic'}. What happens to the system if we double the primary input variable?`;
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
              <ReactMarkdown>{msg.content}</ReactMarkdown>
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
          placeholder={topicTitle ? `Ask about ${topicTitle}...` : "Ask LUMEN-X..."} 
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
        .tutor-bubble p { margin: 0; }
        .tutor-bubble p:not(:last-child) { margin-bottom: 8px; }
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

