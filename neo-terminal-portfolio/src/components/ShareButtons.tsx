'use client';

import { useState } from 'react';
import { copyToClipboard } from '@/lib/utils';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  };

  return (
    <div className="space-y-3">
      <h3 className="text-terminal-cyan font-semibold flex items-center gap-2">
        <span>🔗</span>
        Share this article
      </h3>

      <div className="flex flex-wrap gap-3">

        <a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-button text-sm hover:scale-105 transition-transform"
        >
          <span className="mr-2">𝕏</span>
          Twitter
        </a>

        <a
          href={shareLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-button text-sm hover:scale-105 transition-transform"
        >
          <span className="mr-2">💼</span>
          LinkedIn
        </a>

        <a
          href={shareLinks.reddit}
          target="_blank"
          rel="noopener noreferrer"
          className="terminal-button text-sm hover:scale-105 transition-transform"
        >
          <span className="mr-2">🤖</span>
          Reddit
        </a>

        <button
          onClick={handleCopy}
          className="terminal-button text-sm hover:scale-105 transition-transform"
        >
          {copied ? (
            <>
              <span className="mr-2">✓</span>
              Copied!
            </>
          ) : (
            <>
              <span className="mr-2">📋</span>
              Copy Link
            </>
          )}
        </button>
      </div>

      <div className="text-xs text-terminal-textMuted font-mono">
        <span className="text-terminal-prompt">›</span> Share on social media or copy link
      </div>
    </div>
  );
}
