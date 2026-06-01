import React, { useState, useMemo } from 'react';
import { BookOpen, Copy, Check, Search, ChevronRight, Folder, Calculator, Atom, Dna, FlaskConical, Wrench, ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import { formulaTree, CategoryNode, Formula } from '../data/formulas';

// Helper to flatten formulas for search
const flattenFormulas = (nodes: CategoryNode[]): Formula[] => {
  let all: Formula[] = [];
  for (const node of nodes) {
    if (node.formulas) all = [...all, ...node.formulas];
    if (node.children) all = [...all, ...flattenFormulas(node.children)];
  }
  return all;
};

const FormulaBank: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [path, setPath] = useState<CategoryNode[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Current node children
  const currentNode = path.length > 0 ? path[path.length - 1] : null;
  const currentChildren = currentNode ? currentNode.children : formulaTree;
  const currentFormulas = currentNode ? currentNode.formulas : undefined;

  const allFormulasFlat = useMemo(() => flattenFormulas(formulaTree), []);
  const allTags = useMemo(() => Array.from(new Set(allFormulasFlat.flatMap(f => f.tags))).sort(), [allFormulasFlat]);

  // Handle Search
  const isSearching = searchQuery.trim().length > 0 || activeTag !== null;
  
  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return allFormulasFlat.filter(f => {
      const q = searchQuery.toLowerCase();
      const tagMatch = activeTag ? f.tags.includes(activeTag) : true;
      const searchMatch = !q || f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q) || f.tags.some(t => t.toLowerCase().includes(q));
      return tagMatch && searchMatch;
    });
  }, [allFormulasFlat, searchQuery, activeTag, isSearching]);

  const handleCopy = (id: string, latex: string) => {
    navigator.clipboard.writeText(latex).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const drillDown = (node: CategoryNode) => {
    setPath([...path, node]);
    setSearchQuery('');
  };

  const navigateUp = (index: number) => {
    setPath(path.slice(0, index + 1));
  };

  const goHome = () => {
    setPath([]);
    setSearchQuery('');
    setActiveTag(null);
  };

  return (
    <div className="formula-bank anim-fade">
      <div className="fb-header">
        <div>
          <h1 className="fb-title">Formula Bank</h1>
          <p className="fb-subtitle">{allFormulasFlat.length} formulas mapped across engineering and sciences</p>
        </div>
      </div>

      <div className="fb-search-row">
        <div className="fb-search">
          <Search size={16} style={{ color: 'var(--color-text-muted)', flexShrink: 0 }} />
          <input type="text" placeholder="Search across all formulas..."
            value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
          {searchQuery && <button onClick={() => setSearchQuery('')} className="clear-btn">✕</button>}
        </div>
      </div>

      {isSearching && (
        <div className="fb-tags">
          <button className={`fb-tag ${!activeTag ? 'active' : ''}`} onClick={() => setActiveTag(null)}>All</button>
          {allTags.slice(0, 24).map(tag => (
            <button key={tag} className={`fb-tag ${activeTag === tag ? 'active' : ''}`} onClick={() => setActiveTag(activeTag === tag ? null : tag)}>
              {tag}
            </button>
          ))}
        </div>
      )}

      {/* Breadcrumb Navigation */}
      {!isSearching && (
        <div className="fb-breadcrumbs">
          <button onClick={goHome} className="breadcrumb-btn">
            <BookOpen size={14} /> Home
          </button>
          {path.map((node, i) => (
            <React.Fragment key={node.id}>
              <ChevronRight size={14} className="breadcrumb-chevron" />
              <button 
                onClick={() => navigateUp(i)} 
                className={`breadcrumb-btn ${i === path.length - 1 ? 'active' : ''}`}
              >
                {node.label}
              </button>
            </React.Fragment>
          ))}
        </div>
      )}

      <div className="fb-content-area">
        {isSearching ? (
          <div className="fb-formulas-grid search-results">
            {searchResults.length > 0 ? searchResults.map(f => (
              <FormulaCard key={f.id} f={f} copiedId={copiedId} handleCopy={handleCopy} setActiveTag={setActiveTag} activeTag={activeTag} />
            )) : (
              <div className="fb-empty">
                <Search size={32} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
                <p>No formulas match your search.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="fb-folder-view anim-slide-up">
            {/* Render Subfolders */}
            {currentChildren && currentChildren.length > 0 && (
              <div className="fb-folders-grid">
                {currentChildren.map(child => (
                  <button key={child.id} className="folder-card" onClick={() => drillDown(child)}>
                    <div className="folder-icon" style={{ color: child.color || 'var(--color-accent)' }}>
                      {child.icon ? React.createElement(child.icon as any, { size: 24 }) : <Folder size={24} />}
                    </div>
                    <div className="folder-info">
                      <span className="folder-label">{child.label}</span>
                      {child.children && <span className="folder-meta">{child.children.length} sections</span>}
                      {child.formulas && <span className="folder-meta">{child.formulas.length} formulas</span>}
                    </div>
                    <ChevronRight size={20} className="folder-chevron" />
                  </button>
                ))}
              </div>
            )}

            {/* Render Formulas in current folder */}
            {currentFormulas && currentFormulas.length > 0 && (
              <div className="fb-formulas-grid">
                <div className="fb-section-title">
                  <h2>{currentNode?.label} Formulas</h2>
                  <div className="divider"></div>
                </div>
                {currentFormulas.map(f => (
                  <FormulaCard key={f.id} f={f} copiedId={copiedId} handleCopy={handleCopy} setActiveTag={setActiveTag} activeTag={activeTag} />
                ))}
              </div>
            )}

            {(!currentChildren || currentChildren.length === 0) && (!currentFormulas || currentFormulas.length === 0) && (
              <div className="fb-empty">
                <Folder size={32} style={{ color: 'var(--color-text-muted)', marginBottom: 12 }} />
                <p>This section is empty.</p>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        .formula-bank { display:flex; flex-direction:column; gap:20px; max-width:1000px; margin:0 auto; padding-bottom: 60px; }
        .fb-header { display:flex; align-items:flex-end; justify-content:space-between; }
        .fb-title { font-family:var(--font-display); font-size:28px; font-weight:700; margin-bottom:4px; }
        .fb-subtitle { font-size:13px; color:var(--color-text-muted); }
        .fb-search-row { display:flex; gap:12px; }
        .fb-search { flex:1; display:flex; align-items:center; gap:10px; padding:12px 18px; background:var(--color-surface); border:var(--border-soft); border-radius:var(--border-radius-full); box-shadow:var(--shadow-xs); transition:all var(--transition-fast); }
        .fb-search:focus-within { border-color:var(--color-accent); box-shadow:var(--shadow-glow-sm); }
        .fb-search input { flex:1; border:none; background:none; outline:none; font-family:inherit; font-size:14px; color:var(--color-text-primary); }
        .fb-search input::placeholder { color:var(--color-text-muted); }
        .clear-btn { background:none; border:none; color:var(--color-text-muted); cursor:pointer; font-size:14px; display:flex; align-items:center; justify-content:center; }
        
        .fb-tags { display:flex; flex-wrap:wrap; gap:8px; padding: 10px 0; }
        .fb-tag { padding:5px 12px; border-radius:var(--border-radius-full); font-size:12px; font-weight:500; cursor:pointer; border:var(--border-soft); background:var(--color-surface); color:var(--color-text-secondary); transition:all var(--transition-fast); font-family:var(--font-display); }
        .fb-tag:hover,.fb-tag.active { background:var(--color-accent); color:white; border-color:var(--color-accent); }
        .fb-tag.small { padding:2px 8px; font-size:10px; }

        .fb-breadcrumbs { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; padding: 16px; background: var(--color-surface); border-radius: var(--border-radius-md); border: var(--border-soft); }
        .breadcrumb-btn { display: flex; align-items: center; gap: 6px; background: none; border: none; font-size: 14px; color: var(--color-text-secondary); cursor: pointer; transition: color var(--transition-fast); font-family: var(--font-primary); }
        .breadcrumb-btn:hover { color: var(--color-text-primary); }
        .breadcrumb-btn.active { color: var(--color-accent); font-weight: 600; pointer-events: none; }
        .breadcrumb-chevron { color: var(--color-text-muted); }

        .fb-content-area { display: flex; flex-direction: column; gap: 24px; }

        .fb-folders-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
        .folder-card { display: flex; align-items: center; gap: 16px; padding: 20px; background: var(--color-surface); border: var(--border-soft); border-radius: var(--border-radius-md); cursor: pointer; text-align: left; transition: all var(--transition-fast); }
        .folder-card:hover { border-color: var(--color-accent); transform: translateY(-2px); box-shadow: var(--shadow-sm); }
        .folder-icon { width: 48px; height: 48px; border-radius: 12px; background: color-mix(in srgb, currentColor 10%, transparent); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .folder-info { flex: 1; display: flex; flex-direction: column; gap: 4px; }
        .folder-label { font-size: 15px; font-weight: 600; font-family: var(--font-display); color: var(--color-text-primary); }
        .folder-meta { font-size: 12px; color: var(--color-text-muted); }
        .folder-chevron { color: var(--color-text-muted); transition: transform var(--transition-fast); }
        .folder-card:hover .folder-chevron { transform: translateX(4px); color: var(--color-accent); }

        .fb-formulas-grid { display: flex; flex-direction: column; gap: 16px; margin-top: 16px; }
        .search-results { margin-top: 0; }
        .fb-section-title { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; margin-top: 24px; }
        .fb-section-title h2 { font-family: var(--font-display); font-size: 20px; font-weight: 700; white-space: nowrap; }
        .fb-section-title .divider { flex: 1; height: 1px; background: var(--border-soft); }

        .fb-formula-card { display:flex; flex-direction:column; gap:12px; padding:20px; background:var(--color-surface); border:var(--border-soft); border-radius:var(--border-radius-md); transition:border-color var(--transition-fast); }
        .fb-formula-card:hover { border-color:var(--color-accent); box-shadow:var(--shadow-xs); }
        .fb-formula-top { display:flex; align-items:center; justify-content:space-between; }
        .fb-formula-name { font-size:16px; font-weight:600; color:var(--color-text-primary); font-family:var(--font-display); }
        .fb-copy-btn { display:flex; align-items:center; justify-content:center; width:32px; height:32px; border-radius:8px; border:var(--border-soft); color:var(--color-text-muted); transition:all var(--transition-fast); cursor:pointer; background:var(--color-base-alt); }
        .fb-copy-btn:hover { border-color:var(--color-accent); color:var(--color-accent); }
        .fb-formula-render { font-size:18px; padding:16px 20px; background:var(--color-base-alt); border-radius:var(--border-radius-sm); border-left:4px solid var(--color-accent); overflow-x:auto; }
        .fb-formula-desc { font-size:13.5px; color:var(--color-text-secondary); line-height:1.6; margin-top:4px; }
        .fb-formula-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:4px; }

        .fb-empty { text-align:center; padding:60px 20px; color:var(--color-text-muted); display:flex; flex-direction:column; align-items:center; }
      `}</style>
    </div>
  );
};

interface FormulaCardProps {
  f: Formula;
  copiedId: string | null;
  handleCopy: (id: string, latex: string) => void;
  setActiveTag: (tag: string | null) => void;
  activeTag: string | null;
}

const FormulaCard: React.FC<FormulaCardProps> = ({ f, copiedId, handleCopy, setActiveTag, activeTag }) => (
  <div className="fb-formula-card">
    <div className="fb-formula-top">
      <span className="fb-formula-name">{f.name}</span>
      <button className="fb-copy-btn" onClick={() => handleCopy(f.id, f.latex)} title="Copy LaTeX">
        {copiedId === f.id ? <Check size={16} style={{ color: '#10b981' }} /> : <Copy size={16} />}
      </button>
    </div>
    <div className="fb-formula-render">
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {f.latex}
      </ReactMarkdown>
    </div>
    <p className="fb-formula-desc">{f.description}</p>
    <div className="fb-formula-tags">
      {f.tags.map(tag => (
        <button key={tag} className={`fb-tag small ${activeTag === tag ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); setActiveTag(activeTag === tag ? null : tag); }}>
          {tag}
        </button>
      ))}
    </div>
  </div>
);

export default FormulaBank;
