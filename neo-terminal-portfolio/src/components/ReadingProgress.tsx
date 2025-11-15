// components/ReadingProgress.tsx
'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-1 bg-terminal-border">
      <div
        className="h-full bg-gradient-to-r from-terminal-cyan to-terminal-green transition-all duration-150"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-terminal-cyan animate-pulse shadow-lg shadow-terminal-cyan/50" />
      </div>
    </div>
  );
}