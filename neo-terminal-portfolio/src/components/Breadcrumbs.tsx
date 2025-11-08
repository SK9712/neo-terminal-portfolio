'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { generateBreadcrumbs } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps {
  className?: string;
}

export default function Breadcrumbs({ className }: BreadcrumbsProps) {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === '/') return null;
  
  const breadcrumbs = generateBreadcrumbs(pathname);
  
  // Always show Home as the first breadcrumb
  const fullBreadcrumbs = [
    { label: 'Home', href: '/', current: false },
    ...breadcrumbs,
  ];

  return (
    <nav 
      aria-label="Breadcrumb" 
      className={cn('flex items-center space-x-2 text-sm', className)}
    >
      {fullBreadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          {index > 0 && (
            <span className="text-terminal-textMuted mx-2">›</span>
          )}
          {crumb.current ? (
            <span className="text-terminal-cyan font-medium">
              {crumb.label}
            </span>
          ) : (
            <Link
              href={crumb.href}
              className="text-terminal-textMuted hover:text-terminal-cyan transition-colors"
            >
              {crumb.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}