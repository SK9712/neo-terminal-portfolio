import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Technical articles and blog posts',
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-8" />

        {/* Page Header */}
        <div className="terminal-card mb-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-terminal-textMuted">
              <span className="terminal-prompt">❯</span> cd /articles
            </p>
            <div className="pl-4">
              <h1 className="text-4xl font-bold text-gradient mb-2">
                Articles
              </h1>
              <p className="text-terminal-textMuted">
                Technical writings and insights<span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Articles List - Coming Soon */}
        <div className="terminal-card animate-slide-up">
          <div className="text-center py-12">
            <div className="inline-block p-4 bg-terminal-bg rounded-lg mb-4">
              <span className="text-4xl">📝</span>
            </div>
            <h2 className="text-2xl font-bold text-terminal-cyan mb-2">
              Coming Soon
            </h2>
            <p className="text-terminal-textMuted max-w-md mx-auto">
              Articles will be available after implementing the blog system in Iteration 5.
              Stay tuned for technical content and insights!
            </p>
            <div className="mt-6 text-terminal-textMuted text-sm">
              <p className="terminal-prompt inline">❯</p> Current status: In development...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}