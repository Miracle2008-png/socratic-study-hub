import React, { useState } from 'react';
import { ArrowLeft, Maximize, Minimize } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

interface FocusModeProps {
  title: string;
  content: string;
  onExit: () => void;
}

const FocusMode: React.FC<FocusModeProps> = ({ title, content, onExit }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleExit = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    onExit();
  };

  return (
    <div className="focus-container">
      <header className="focus-header">
        <button className="back-btn" onClick={handleExit}>
          <ArrowLeft size={20} />
          <span>Exit Focus</span>
        </button>
        <span className="focus-title text-gold-gradient">{title}</span>
        <button className="icon-btn" onClick={toggleFullscreen}>
          {isFullscreen ? (
            <Minimize size={20} color="var(--color-text-secondary)" />
          ) : (
            <Maximize size={20} color="var(--color-text-secondary)" />
          )}
        </button>
      </header>

      <div className="focus-content">
        <div className="paper luxury-card">
          <div className="tm-prose">
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
                    : <code className="tm-code-inline">{children}</code>;
                },
                pre: ({ children }) => <pre className="tm-pre">{children}</pre>
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <style>{`
        .focus-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: var(--color-base);
          z-index: 100;
          display: flex;
          flex-direction: column;
          animation: fadeIn var(--transition-normal);
        }

        .focus-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 48px;
          border-bottom: var(--border-soft);
          background-color: var(--color-surface);
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-text-secondary);
          transition: var(--transition-fast);
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 16px;
        }

        .back-btn:hover {
          color: var(--color-text-primary);
        }

        .focus-title {
          font-family: var(--font-serif);
          font-size: 18px;
          letter-spacing: 0.5px;
          font-weight: bold;
        }

        .icon-btn {
          padding: 8px;
          border-radius: 50%;
          transition: var(--transition-fast);
          background: none;
          border: none;
          cursor: pointer;
        }

        .icon-btn:hover {
          background-color: var(--color-border);
        }

        .focus-content {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 64px;
          overflow-y: auto;
          background-color: var(--color-base);
        }

        .paper {
          max-width: 900px;
          width: 100%;
          min-height: 80vh;
          padding: 80px;
          background: var(--color-surface);
          box-shadow: var(--shadow-lg);
          border: none;
          border-radius: var(--border-radius-lg);
        }
      `}</style>
    </div>
  );
};

export default FocusMode;

