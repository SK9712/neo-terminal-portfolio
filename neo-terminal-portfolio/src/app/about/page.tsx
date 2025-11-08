import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about me and my work',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-8" />

        {/* Page Header */}
        <div className="terminal-card mb-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-terminal-textMuted">
              <span className="terminal-prompt">❯</span> cat about.md
            </p>
            <div className="pl-4">
              <h1 className="text-4xl font-bold text-gradient mb-2">
                About Me
              </h1>
              <p className="text-terminal-textMuted">
                Developer & Builder<span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6">
          {/* Bio Section */}
          <div className="terminal-card animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Bio
              </h2>
              <div className="pl-6 space-y-3 text-terminal-text">
                <p>
                  Hello! I'm {siteConfig.author.name}, a passionate developer focused on building
                  innovative solutions and learning new technologies.
                </p>
                <p className="text-terminal-textMuted">
                  This portfolio showcases my journey in software development, featuring articles,
                  projects, and insights from my experiences in the tech industry.
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack - Coming Soon */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Tech Stack
              </h2>
              <div className="pl-6 text-terminal-textMuted">
                <p>Full tech stack and skills visualization coming in Iteration 4!</p>
              </div>
            </div>
          </div>

          {/* Timeline - Coming Soon */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Timeline
              </h2>
              <div className="pl-6 text-terminal-textMuted">
                <p>Interactive timeline with terminal aesthetics coming in Iteration 4!</p>
              </div>
            </div>
          </div>

          {/* Resume Download - Coming Soon */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Resume
              </h2>
              <div className="pl-6">
                <p className="text-terminal-textMuted mb-4">
                  Downloadable resume will be available in Iteration 4.
                </p>
                <button
                  className="terminal-button cursor-not-allowed opacity-50"
                  disabled
                >
                  <span className="text-terminal-prompt mr-2">❯</span>
                  Download Resume (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}