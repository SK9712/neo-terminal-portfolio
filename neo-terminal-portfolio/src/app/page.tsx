import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Home() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="terminal-card animate-fade-in">
          <div className="space-y-4">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 pb-4 border-b border-terminal-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-command"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
              </div>
              <span className="text-terminal-textMuted text-sm ml-2">neo-terminal</span>
            </div>

            {/* Welcome Message */}
            <div className="space-y-2">
              <p className="text-terminal-textMuted">
                <span className="terminal-prompt">❯</span> ./welcome.sh
              </p>
              <div className="pl-4 space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                  {siteConfig.name}
                </h1>
                <p className="text-terminal-text text-lg">
                  System initialized successfully<span className="terminal-cursor"></span>
                </p>
                <p className="text-terminal-textMuted text-base">
                  {siteConfig.description}
                </p>
                
                <div className="pt-4 space-y-1">
                  <p className="text-terminal-textMuted">
                    <span className="text-terminal-cyan">›</span> Version: {siteConfig.version}
                  </p>
                  <p className="text-terminal-textMuted">
                    <span className="text-terminal-cyan">›</span> Status: Development
                  </p>
                  <p className="text-terminal-textMuted">
                    <span className="text-terminal-cyan">›</span> Framework: Next.js 14
                  </p>
                  <p className="text-terminal-textMuted">
                    <span className="text-terminal-cyan">›</span> Last Updated: {siteConfig.lastUpdated}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-4 border-t border-terminal-border">
              <p className="text-terminal-textMuted mb-3">
                <span className="terminal-prompt">❯</span> Quick navigation:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pl-4">
                <Link href="/articles" className="terminal-button text-center">
                  Articles
                </Link>
                <Link href="/projects" className="terminal-button text-center">
                  Projects
                </Link>
                <Link href="/about" className="terminal-button text-center">
                  About
                </Link>
                <Link href="/contact" className="terminal-button text-center">
                  Contact
                </Link>
              </div>
            </div>

            {/* Command Prompt */}
            <div className="pt-4 border-t border-terminal-border">
              <p className="text-terminal-textMuted">
                <span className="terminal-prompt">❯</span>{" "}
                <span className="text-terminal-text">Ready for development...</span>
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="mt-6 text-center text-terminal-textMuted text-sm">
          <p>Next.js 14 • TypeScript • Tailwind CSS • Neo-Terminal Theme</p>
        </div>
      </div>
    </div>
  );
}