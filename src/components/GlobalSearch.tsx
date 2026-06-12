import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search, Command, X, BookOpen } from 'lucide-react';
import { ALL_TOPICS } from '../data/topicCompiler';

interface GlobalSearchProps {
  onSelect: (subject: string, topicId: string) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchIndex = useMemo(() => {
    return Object.values(ALL_TOPICS).map(topic => ({
      id: topic.id,
      title: topic.title,
      subject: topic.subject,
      difficulty: topic.difficulty || 'Intermediate'
    }));
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter(item => 
      item.title.toLowerCase().includes(q) || item.subject.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [query, searchIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const handleSelect = (subject: string, id: string) => {
    setQuery('');
    setIsOpen(false);
    onSelect(subject, id);
  };

  return (
    <>
      {/* Trigger Button in Header */}
      <button 
        className="search-trigger-btn"
        onClick={() => setIsOpen(true)}
      >
        <Search size={16} />
        <span className="search-placeholder">Search topics, formulas...</span>
        <div className="search-shortcut">
          <Command size={12} /> K
        </div>
      </button>

      {/* Global Overlay Modal */}
      {isOpen && (
        <div className="global-search-overlay" onClick={() => setIsOpen(false)}>
          <div className="global-search-modal" onClick={e => e.stopPropagation()}>
            <div className="search-modal-header">
              <Search size={20} className="search-icon" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="What do you want to learn?" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="icon-btn" onClick={() => setIsOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="search-modal-results">
              {query.trim() && results.length === 0 ? (
                <div className="search-empty">
                  <BookOpen size={32} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
                  <p>No results found for "{query}"</p>
                </div>
              ) : (
                results.map((result) => (
                  <div 
                    key={result.subject + result.id} 
                    className="search-result-item"
                    onClick={() => handleSelect(result.subject, result.id)}
                  >
                    <div className="result-info">
                      <div className="search-result-title">{result.title}</div>
                      <div className="search-result-subject">{result.subject} • {result.difficulty}</div>
                    </div>
                    <div className="result-action">Go →</div>
                  </div>
                ))
              )}
              {!query.trim() && (
                <div className="search-empty">
                  <Command size={32} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
                  <p>Search across mathematics, physics, chemistry, biology, and engineering.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .search-trigger-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: var(--color-base-alt);
          border: 1px solid var(--color-border);
          padding: 8px 16px;
          border-radius: 20px;
          color: var(--color-text-secondary);
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
          width: 260px;
        }
        .search-trigger-btn:hover {
          background: var(--color-base-deep);
          border-color: var(--color-accent);
          color: var(--color-text-primary);
        }
        .search-placeholder {
          flex: 1;
          text-align: left;
          font-size: 13.5px;
        }
        .search-shortcut {
          display: flex;
          align-items: center;
          gap: 4px;
          background: var(--color-base);
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          color: var(--color-text-muted);
          border: 1px solid var(--color-border);
        }
        .global-search-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding-top: 10vh;
          animation: searchFadeIn 0.2s ease;
        }
        .global-search-modal {
          width: 100%;
          max-width: 640px;
          background: var(--color-surface);
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          border: 1px solid var(--color-border-strong);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: searchSlideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .search-modal-header {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border-bottom: 1px solid var(--color-border);
          background: var(--color-base);
        }
        .search-modal-header .search-icon {
          color: var(--color-accent);
          margin-right: 16px;
        }
        .search-modal-header input {
          flex: 1;
          background: transparent;
          border: none;
          color: var(--color-text-primary);
          font-size: 18px;
          outline: none;
        }
        .search-modal-header input::placeholder {
          color: var(--color-text-muted);
        }
        .search-modal-results {
          max-height: 400px;
          overflow-y: auto;
          padding: 8px;
        }
        .search-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          color: var(--color-text-secondary);
          text-align: center;
        }
        .search-result-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          margin: 4px;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .search-result-item:hover {
          background: var(--color-base-alt);
        }
        .search-result-item:hover .result-action {
          opacity: 1;
          transform: translateX(0);
        }
        .search-result-title {
          font-weight: 600;
          color: var(--color-text-primary);
          font-size: 15px;
          margin-bottom: 4px;
        }
        .search-result-subject {
          font-size: 12px;
          color: var(--color-text-muted);
          text-transform: capitalize;
        }
        .result-action {
          font-size: 13px;
          font-weight: 600;
          color: var(--color-accent);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.2s;
        }
        @keyframes searchFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes searchSlideDown {
          from { opacity: 0; transform: translateY(-20px); scale: 0.98; }
          to { opacity: 1; transform: translateY(0); scale: 1; }
        }
      `}</style>
    </>
  );
};
