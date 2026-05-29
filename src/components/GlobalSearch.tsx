import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { mathContentExt } from '../data/mathContentExt';
import { physicsContentExt } from '../data/physicsContentExt';
import { chemistryContentExt } from '../data/chemistryContentExt';

interface GlobalSearchProps {
  onSelect: (subject: string, topicId: string) => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const searchIndex = useMemo(() => {
    const formatId = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, '_');
    return [
      ...Object.keys(mathContentExt).map(k => ({ id: formatId(k), title: k, subject: 'math' })),
      ...Object.keys(physicsContentExt).map(k => ({ id: formatId(k), title: k, subject: 'physics' })),
      ...Object.keys(chemistryContentExt).map(k => ({ id: formatId(k), title: k, subject: 'chemistry' }))
    ];
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return searchIndex.filter(item => item.title.toLowerCase().includes(q)).slice(0, 6);
  }, [query, searchIndex]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (subject: string, id: string) => {
    setQuery('');
    setIsOpen(false);
    onSelect(subject, id);
  };

  return (
    <div className="search-bar-container" ref={containerRef}>
      <div className="search-bar luxury-card">
        <Search size={18} />
        <input 
          type="text" 
          placeholder="Search topics, formulas, or notes..." 
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="search-dropdown">
          {results.map((result) => (
            <div 
              key={result.subject + result.id} 
              className="search-result-item"
              onClick={() => handleSelect(result.subject, result.id)}
            >
              <div className="search-result-title">{result.title}</div>
              <div className="search-result-subject">{result.subject}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
