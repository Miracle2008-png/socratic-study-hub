import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

interface TypewriterMarkdownProps {
  content: string;
  speed?: number; // ms per step
  onComplete?: () => void;
}

export const TypewriterMarkdown: React.FC<TypewriterMarkdownProps> = ({ content, speed = 400, onComplete }) => {
  const [visibleSteps, setVisibleSteps] = useState(0);

  // Group content into safe tokens (characters for text, full blocks for math)
  const tokens = useMemo(() => {
    // Split by display math $$...$$ and inline math $...$
    const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[^$]+\$)/);
    const result: string[] = [];
    
    parts.forEach((part, index) => {
      if (index % 2 === 1) {
        // Math block (atomic token)
        result.push(part);
      } else {
        // Plain text (split into small chunks of 2 characters for performance + smooth typing)
        const chars = part.split('');
        for (let i = 0; i < chars.length; i += 2) {
          result.push(chars.slice(i, i + 2).join(''));
        }
      }
    });
    return result;
  }, [content]);

  useEffect(() => {
    // Reset when content changes
    setVisibleSteps(0);
  }, [content]);

  useEffect(() => {
    if (visibleSteps < tokens.length) {
      // Very fast interval for smooth typing (e.g. 15ms per chunk)
      const timer = setTimeout(() => {
        setVisibleSteps(prev => prev + 1);
      }, 15);
      return () => clearTimeout(timer);
    } else {
      if (onComplete) onComplete();
    }
  }, [visibleSteps, tokens.length, onComplete]);

  const visibleContent = tokens.slice(0, visibleSteps).join('');

  return (
    <div className="typewriter-markdown tm-prose">
      <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
        {visibleContent}
      </ReactMarkdown>
      {visibleSteps < tokens.length && (
        <span className="cursor-blink" style={{ display: 'inline-block', width: 8, height: 16, background: 'var(--color-accent)', marginLeft: 4, animation: 'blink 1s step-end infinite' }} />
      )}
    </div>
  );
};
