import React, { useState, useRef } from 'react';
import { Download, BookOpen, Menu, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

interface TheoryLayoutProps {
  title: string;
  theoryContent: string;
  children: React.ReactNode;
}

const TheoryLayout: React.FC<TheoryLayoutProps> = ({ title, theoryContent, children }) => {
  const [activePanel, setActivePanel] = useState<'theory' | 'sim' | 'both'>('both');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const theoryRef = useRef<HTMLDivElement>(null);

  // Extract headings for table of contents
  const headings = theoryContent
    .split('\n')
    .filter(line => line.startsWith('## ') || line.startsWith('# '))
    .map(line => ({
      level: line.startsWith('## ') ? 2 : 1,
      text: line.replace(/^#+\s/, '')
    }));

  const handleDownloadPDF = () => {
    window.print();
  };

  const scrollToHeading = (text: string) => {
    const headingEls = theoryRef.current?.querySelectorAll('h1, h2, h3');
    headingEls?.forEach(el => {
      if (el.textContent?.trim() === text) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    setIsTocOpen(false);
  };

  return (
    <div className="theory-layout anim-fade">
      {/* Toolbar */}
      <div className="theory-toolbar">
        <div className="theory-title-wrap">
          <BookOpen size={18} style={{ color: 'var(--color-accent)', flexShrink: 0 }} />
          <h2 className="theory-toolbar-title">{title}</h2>
        </div>

        <div className="theory-toolbar-actions">
          {/* Panel toggle */}
          <div className="panel-switcher">
            <button className={`ps-btn ${activePanel === 'theory' ? 'active' : ''}`} onClick={() => setActivePanel('theory')}>
              Theory
            </button>
            <button className={`ps-btn ${activePanel === 'both' ? 'active' : ''}`} onClick={() => setActivePanel('both')}>
              Split
            </button>
            <button className={`ps-btn ${activePanel === 'sim' ? 'active' : ''}`} onClick={() => setActivePanel('sim')}>
              Simulator
            </button>
          </div>

          {/* TOC */}
          {headings.length > 0 && (
            <div style={{ position: 'relative' }}>
              <button className="theory-icon-btn" onClick={() => setIsTocOpen(o => !o)} title="Table of Contents">
                {isTocOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
              {isTocOpen && (
                <div className="toc-dropdown">
                  <div className="toc-header">Contents</div>
                  {headings.map((h, i) => (
                    <button key={i} className="toc-item" style={{ paddingLeft: h.level === 2 ? 24 : 12 }} onClick={() => scrollToHeading(h.text)}>
                      {h.text}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <button className="theory-icon-btn download-pdf-btn" onClick={handleDownloadPDF} title="Download PDF">
            <Download size={16} />
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className={`theory-body panel-${activePanel}`}>
        {/* Theory Panel */}
        {(activePanel === 'theory' || activePanel === 'both') && (
          <div className="theory-column" ref={theoryRef}>
            <div className="theory-content">
              <ReactMarkdown
                remarkPlugins={[remarkMath, remarkGfm]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h1: ({ children }) => <h1 className="theory-h1">{children}</h1>,
                  h2: ({ children }) => <h2 className="theory-h2">{children}</h2>,
                  h3: ({ children }) => <h3 className="theory-h3">{children}</h3>,
                  p: ({ children }) => <p className="theory-p">{children}</p>,
                  ul: ({ children }) => <ul className="theory-ul">{children}</ul>,
                  li: ({ children }) => <li className="theory-li">{children}</li>,
                  strong: ({ children }) => <strong className="theory-strong">{children}</strong>,
                  blockquote: ({ children }) => <blockquote className="theory-blockquote">{children}</blockquote>,
                  table: ({ children }) => (
                    <div className="theory-table-wrap">
                      <table className="theory-table">{children}</table>
                    </div>
                  ),
                  th: ({ children }) => <th className="theory-th">{children}</th>,
                  td: ({ children }) => <td className="theory-td">{children}</td>,
                  code: ({ children }) => <code className="theory-code">{children}</code>,
                }}
              >
                {theoryContent}
              </ReactMarkdown>
            </div>
          </div>
        )}

        {/* Divider */}
        {activePanel === 'both' && <div className="theory-divider" />}

        {/* Simulator Panel */}
        {(activePanel === 'sim' || activePanel === 'both') && (
          <div className="simulator-column">
            {children}
          </div>
        )}
      </div>

      <style>{`
        .theory-layout {
          display: flex; flex-direction: column;
          gap: 0; height: calc(100vh - var(--topbar-height) - 100px);
          min-height: 600px;
          background: var(--color-surface);
          border: var(--border-soft);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        /* Toolbar */
        .theory-toolbar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px;
          border-bottom: var(--border-soft);
          background: var(--color-base);
          flex-shrink: 0;
        }

        .theory-title-wrap { display: flex; align-items: center; gap: 10px; }
        .theory-toolbar-title {
          font-family: var(--font-display); font-size: 15px; font-weight: 600;
          color: var(--color-text-primary);
        }

        .theory-toolbar-actions { display: flex; align-items: center; gap: 8px; }

        .panel-switcher {
          display: flex; align-items: center;
          background: var(--color-base-alt);
          border-radius: var(--border-radius-full);
          padding: 3px;
          border: var(--border-soft);
        }

        .ps-btn {
          padding: 5px 14px; border-radius: var(--border-radius-full);
          font-size: 12px; font-weight: 500; color: var(--color-text-muted);
          transition: all var(--transition-fast); cursor: pointer;
          font-family: var(--font-display);
        }
        .ps-btn.active { background: var(--color-surface); color: var(--color-text-primary); box-shadow: var(--shadow-xs); }
        .ps-btn:hover:not(.active) { color: var(--color-text-primary); }

        .theory-icon-btn {
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px; border-radius: 8px;
          border: var(--border-soft); color: var(--color-text-secondary);
          background: var(--color-surface); cursor: pointer;
          transition: all var(--transition-fast);
        }
        .theory-icon-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }

        /* TOC Dropdown */
        .toc-dropdown {
          position: absolute; top: calc(100% + 8px); right: 0;
          width: 280px; background: var(--color-surface);
          border: var(--border-soft); border-radius: var(--border-radius-md);
          box-shadow: var(--shadow-md); z-index: 100;
          overflow: hidden; animation: fadeSlideIn 0.2s ease;
        }
        .toc-header {
          padding: 12px 16px; font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: var(--color-text-muted);
          border-bottom: var(--border-soft); font-family: var(--font-display);
        }
        .toc-item {
          display: block; width: 100%; text-align: left;
          padding: 9px 16px; font-size: 13px; color: var(--color-text-secondary);
          transition: all var(--transition-fast); cursor: pointer;
          font-family: var(--font-primary);
        }
        .toc-item:hover { background: var(--color-base-alt); color: var(--color-accent); padding-left: 20px; }

        /* Body Layout */
        .theory-body {
          display: flex; flex: 1; overflow: hidden;
        }

        .theory-body.panel-theory .theory-column { flex: 1; }
        .theory-body.panel-sim .simulator-column { flex: 1; }
        .theory-body.panel-both .theory-column { flex: 0 0 54%; }
        .theory-body.panel-both .simulator-column { flex: 1; }

        .theory-divider { width: 1px; background: var(--color-border); flex-shrink: 0; }

        /* Theory Column */
        .theory-column {
          overflow-y: auto; overflow-x: hidden;
          padding: 32px 36px; flex: 1;
        }

        .theory-content { max-width: 680px; }

        /* Theory Typography */
        .theory-h1 {
          font-family: var(--font-serif); font-size: 26px; font-weight: 600;
          color: var(--color-text-primary); margin: 0 0 20px;
          padding-bottom: 12px; border-bottom: 2px solid var(--color-accent);
          line-height: 1.25;
        }

        .theory-h2 {
          font-family: var(--font-serif); font-size: 20px; font-weight: 500;
          color: var(--color-text-primary); margin: 32px 0 12px;
          padding-left: 12px;
          border-left: 3px solid var(--color-accent);
        }

        .theory-h3 {
          font-family: var(--font-display); font-size: 15px; font-weight: 600;
          color: var(--color-text-primary); margin: 24px 0 8px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        .theory-p {
          font-size: 14.5px; color: var(--color-text-primary);
          line-height: 1.85; margin-bottom: 14px;
        }

        .theory-ul {
          margin: 0 0 16px 0; padding-left: 0; list-style: none;
        }
        .theory-li {
          font-size: 14px; color: var(--color-text-primary);
          line-height: 1.7; padding: 4px 0 4px 22px; position: relative;
        }
        .theory-li::before {
          content: '›'; position: absolute; left: 6px;
          color: var(--color-accent); font-weight: 700;
        }

        .theory-strong { font-weight: 700; color: var(--color-text-primary); }

        .theory-blockquote {
          margin: 16px 0; padding: 14px 20px;
          background: rgba(201,168,76,0.06);
          border-left: 4px solid var(--color-accent);
          border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
          font-style: italic; color: var(--color-text-secondary);
        }

        .theory-table-wrap { overflow-x: auto; margin: 16px 0; }
        .theory-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        .theory-th {
          background: var(--color-base-alt); padding: 10px 14px;
          font-weight: 600; font-family: var(--font-display);
          text-align: left; border-bottom: 2px solid var(--color-accent);
          color: var(--color-text-primary); font-size: 12px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }
        .theory-td {
          padding: 10px 14px; border-bottom: var(--border-soft);
          color: var(--color-text-primary); vertical-align: top;
        }
        .theory-table tr:last-child .theory-td { border-bottom: none; }
        .theory-table tr:hover .theory-td { background: var(--color-base-alt); }

        .theory-code {
          background: var(--color-base-alt); padding: 2px 6px;
          border-radius: 4px; font-family: 'Courier New', monospace;
          font-size: 13px; color: var(--color-accent-dark);
        }

        /* KaTeX display math blocks */
        .theory-content .katex-display {
          margin: 20px 0; padding: 16px 20px;
          background: var(--color-base-alt);
          border-radius: var(--border-radius-sm);
          border-left: 3px solid var(--color-accent);
          overflow-x: auto;
        }

        /* Simulator Column */
        .simulator-column {
          overflow-y: auto; padding: 20px;
          background: var(--color-base-alt);
          border-left: var(--border-soft);
        }
      `}</style>
    </div>
  );
};

export default TheoryLayout;
