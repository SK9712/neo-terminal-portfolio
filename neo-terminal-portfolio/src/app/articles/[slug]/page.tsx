// src/app/articles/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticleSlugs } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Breadcrumbs from '@/components/Breadcrumbs';

import { MDXRemote } from 'next-mdx-remote/rsc'; 
import { mdxComponents } from '@/components/mdx-components'; 

// Required for static export
export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each article
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }
  
  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs className="mb-8" />
        
        {/* Article Header */}
        <article className="terminal-card animate-fade-in">
          <div className="space-y-4">
            <p className="text-terminal-textMuted">
              <span className="terminal-prompt">¯</span> cat {params.slug}.mdx
            </p>
            
            <div className="pl-4 space-y-4">
              <h1 className="text-4xl font-bold text-gradient">
                {article.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-terminal-textMuted border-b border-terminal-border pb-4">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <time dateTime={article.publishedAt}>
                    {formatDate(article.publishedAt)}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <span>⏱️</span>
                  <span>{Math.ceil(article.readTime)} min read</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-terminal-bg border border-terminal-cyan rounded text-terminal-cyan text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              
              <p className="text-lg text-terminal-text border-l-4 border-terminal-cyan pl-4 italic">
                {article.description}
              </p>
            </div>
          </div>
        </article>  {/* ← This was missing! */}
        
        {/* Content section */}
        <div className="terminal-card mt-8">
          <div className="prose prose-terminal max-w-none">
            <MDXRemote 
              source={article.content} 
              components={mdxComponents} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}