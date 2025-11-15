// components/ArticleSeries.tsx
import Link from 'next/link';

interface SeriesArticle {
  slug: string;
  title: string;
  order: number;
}

export default function ArticleSeries({ 
  series, 
  currentSlug 
}: { 
  series: SeriesArticle[];
  currentSlug: string;
}) {
  const sortedSeries = [...series].sort((a, b) => a.order - b.order);
  const currentIndex = sortedSeries.findIndex(a => a.slug === currentSlug);

  return (
    <div className="terminal-card bg-terminal-bg mb-8">
      <div className="space-y-3">
        <h3 className="text-terminal-cyan font-semibold flex items-center gap-2">
          <span>📚</span>
          Article Series
        </h3>
        
        <div className="space-y-2">
          {sortedSeries.map((article, index) => (
            <Link 
              key={article.slug}
              href={`/articles/${article.slug}`}
              className={`block p-3 rounded border transition-all ${
                article.slug === currentSlug
                  ? 'bg-terminal-bgLight border-terminal-cyan text-terminal-cyan'
                  : 'border-terminal-border hover:border-terminal-cyan'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-sm font-mono ${
                  article.slug === currentSlug ? 'text-terminal-cyan' : 'text-terminal-textMuted'
                }`}>
                  {index + 1}/{sortedSeries.length}
                </span>
                <span className="flex-1">{article.title}</span>
                {article.slug === currentSlug && (
                  <span className="text-terminal-green">◀ You are here</span>
                )}
              </div>
            </Link>
          ))}
        </div>
        
        {/* Navigation */}
        <div className="grid grid-cols-2 gap-3 pt-3 border-t border-terminal-border">
          {currentIndex > 0 && (
            <Link 
              href={`/articles/${sortedSeries[currentIndex - 1].slug}`}
              className="terminal-button text-sm"
            >
              ← Previous
            </Link> 
          )}
          {currentIndex < sortedSeries.length - 1 && (
            <Link 
              href={`/articles/${sortedSeries[currentIndex + 1].slug}`}
              className="terminal-button text-sm ml-auto"
            >
              Next →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}