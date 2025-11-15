// components/TableOfContents.tsx
'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from content
    const headingRegex = /^#{1,3}\s+(.+)$/gm;
    const matches = [...content.matchAll(headingRegex)];
    
    const extractedHeadings = matches.map((match, index) => {
      const level = match[0].split('#').length - 1;
      const text = match[1].trim();
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      return { id, text, level };
    });
    
    setHeadings(extractedHeadings);

    // Track active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -80% 0px' }
    );

    document.querySelectorAll('h1, h2, h3').forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24">
      <div className="terminal-card bg-terminal-bg">
        <div className="space-y-3">
          <h3 className="text-terminal-cyan font-semibold flex items-center gap-2">
            <span>📑</span>
            Table of Contents
          </h3>
          
          <nav className="space-y-1">
            {headings.map((heading) => (
                    <a 
                    key={heading.id}
                    href={`#${heading.id}`}
                    className={`block text-sm transition-colors ${
                    activeId === heading.id
                    ? 'text-terminal-cyan font-semibold'
                    : 'text-terminal-textMuted hover:text-terminal-cyan'
                    }`}
                    style={{ paddingLeft: `${(heading.level - 1) * 12}px` }}>
                <span className="text-terminal-prompt mr-1">›</span>
                {heading.text}
                </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}