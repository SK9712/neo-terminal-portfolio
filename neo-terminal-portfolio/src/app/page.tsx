import Hero from '@/components/Hero';
import NowWidget from '@/components/NowWidget';

export default function Home() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Hero Section - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Hero />
          </div>

          {/* Now Widget - Takes 1 column on large screens */}
          <div className="lg:col-span-1">
            <NowWidget className="animate-fade-in" />
          </div>
        </div>

        {/* Tech Stack Info */}
        <div className="mt-8 text-center text-terminal-textMuted text-sm animate-fade-in">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            <span>Next.js 14</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span>Neo-Terminal Theme</span>
          </p>
        </div>
      </div>
    </div>
  );
}