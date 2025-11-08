import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <div className="terminal-card animate-fade-in">
          <div className="space-y-4">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 pb-4 border-b border-terminal-border">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-terminal-error"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-command"></div>
                <div className="w-3 h-3 rounded-full bg-terminal-success"></div>
              </div>
              <span className="text-terminal-textMuted text-sm ml-2">error: 404</span>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <p className="text-terminal-textMuted">
                <span className="terminal-prompt">❯</span> cd /requested-page
              </p>
              <div className="pl-4 space-y-4">
                <div className="space-y-2">
                  <p className="text-terminal-error font-bold text-lg">
                    bash: cd: /requested-page: No such file or directory
                  </p>
                  <h1 className="text-6xl font-bold text-terminal-error">
                    404
                  </h1>
                  <p className="text-2xl font-semibold text-terminal-text">
                    Page Not Found
                  </p>
                </div>
                
                <p className="text-terminal-textMuted">
                  The page you're looking for doesn't exist in this directory.
                  It may have been moved or deleted.
                </p>

                <div className="pt-4 space-y-2">
                  <p className="text-terminal-textMuted">
                    <span className="text-terminal-cyan">›</span> Try these instead:
                  </p>
                  <div className="pl-4 space-y-1">
                    <Link href="/" className="terminal-link block">
                      → Go to Home
                    </Link>
                    <Link href="/articles" className="terminal-link block">
                      → View Articles
                    </Link>
                    <Link href="/projects" className="terminal-link block">
                      → Browse Projects
                    </Link>
                    <Link href="/contact" className="terminal-link block">
                      → Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Command Prompt */}
            <div className="pt-4 border-t border-terminal-border">
              <p className="text-terminal-textMuted">
                <span className="terminal-prompt">❯</span>{" "}
                <span className="text-terminal-text">Awaiting valid command...</span>
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link href="/" className="terminal-button inline-block">
            <span className="text-terminal-prompt mr-2">❯</span>
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}