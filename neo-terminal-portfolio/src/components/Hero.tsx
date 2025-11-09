'use client';

import { useState } from 'react';
import Link from 'next/link';
import Typewriter from './Typewriter';
import { siteConfig } from '@/lib/config';

export default function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="terminal-card animate-fade-in">
      <div className="space-y-4">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 pb-4 border-b border-terminal-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-terminal-error hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-command hover:opacity-80 transition-opacity cursor-pointer"></div>
            <div className="w-3 h-3 rounded-full bg-terminal-success hover:opacity-80 transition-opacity cursor-pointer"></div>
          </div>
          <span className="text-terminal-textMuted text-sm ml-2">
            sushant@neo-terminal:~
          </span>
        </div>

        {/* Command Execution */}
        <div className="space-y-3">
          <p className="text-terminal-textMuted">
            <span className="terminal-prompt">❯</span> ./welcome.sh
          </p>

          {/* Output */}
          <div className="pl-4 space-y-4">
            {/* Welcome Message */}
            <div className="space-y-2">
              <Typewriter
                text="Welcome to Neo-Terminal"
                speed={40}
                className="text-2xl md:text-4xl font-bold text-gradient block"
                onComplete={() => setShowSubtitle(true)}
              />
              
              {showSubtitle && (
                <Typewriter
                  text={siteConfig.description}
                  speed={30}
                  delay={200}
                  className="text-terminal-textMuted text-lg block"
                  onComplete={() => setShowButtons(true)}
                />
              )}
            </div>

            {/* System Info */}
            {showButtons && (
              <div className="space-y-2 animate-fade-in">
                <p className="text-terminal-success flex items-center gap-2">
                  <span className="w-2 h-2 bg-terminal-success rounded-full animate-pulse"></span>
                  System operational
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-cyan">›</span>
                    <span className="text-terminal-textMuted">Version:</span>
                    <span className="text-terminal-text">{siteConfig.version}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-cyan">›</span>
                    <span className="text-terminal-textMuted">Status:</span>
                    <span className="text-terminal-green">Live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-cyan">›</span>
                    <span className="text-terminal-textMuted">Framework:</span>
                    <span className="text-terminal-text">Next.js 14</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-cyan">›</span>
                    <span className="text-terminal-textMuted">Theme:</span>
                    <span className="text-terminal-cyan">Neo-Terminal</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {showButtons && (
          <div className="pt-4 border-t border-terminal-border animate-slide-up">
            <p className="text-terminal-textMuted mb-3">
              <span className="terminal-prompt">❯</span> Quick navigation:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pl-4">
              <Link
                href="/articles"
                className="terminal-button text-center hover:scale-105 transition-transform"
              >
                <span className="text-terminal-prompt mr-1">›</span>
                Articles
              </Link>
              <Link
                href="/projects"
                className="terminal-button text-center hover:scale-105 transition-transform"
              >
                <span className="text-terminal-prompt mr-1">›</span>
                Projects
              </Link>
              <Link
                href="/about"
                className="terminal-button text-center hover:scale-105 transition-transform"
              >
                <span className="text-terminal-prompt mr-1">›</span>
                About
              </Link>
              <Link
                href="/contact"
                className="terminal-button text-center hover:scale-105 transition-transform"
              >
                <span className="text-terminal-prompt mr-1">›</span>
                Contact
              </Link>
            </div>
          </div>
        )}

        {/* Command Prompt */}
        <div className="pt-4 border-t border-terminal-border">
          <p className="text-terminal-textMuted flex items-center">
            <span className="terminal-prompt">❯</span>
            <span className="ml-2 text-terminal-text">
              Type 'help' for available commands
            </span>
            <span className="terminal-cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
}