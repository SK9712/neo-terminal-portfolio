'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

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
              <span className="text-terminal-textMuted text-sm ml-2">error: system</span>
            </div>

            {/* Error Message */}
            <div className="space-y-4">
              <p className="text-terminal-textMuted">
                <span className="terminal-prompt">❯</span> ./run-application.sh
              </p>
              <div className="pl-4 space-y-4">
                <div className="space-y-2">
                  <p className="text-terminal-error font-bold text-lg">
                    Error: Application crashed unexpectedly
                  </p>
                  <h1 className="text-6xl font-bold text-terminal-error">
                    500
                  </h1>
                  <p className="text-2xl font-semibold text-terminal-text">
                    Something Went Wrong
                  </p>
                </div>
                
                <p className="text-terminal-textMuted">
                  An unexpected error occurred while processing your request.
                  Our system has logged this error for investigation.
                </p>

                {/* Error Details (Development only) */}
                {process.env.NODE_ENV === 'development' && error.message && (
                  <div className="bg-terminal-bg border border-terminal-error rounded p-4">
                    <p className="text-terminal-error text-sm font-mono">
                      {error.message}
                    </p>
                    {error.digest && (
                      <p className="text-terminal-textMuted text-xs mt-2">
                        Error ID: {error.digest}
                      </p>
                    )}
                  </div>
                )}

                <div className="pt-4 space-y-3">
                  <p className="text-terminal-textMuted">
                    <span className="text-terminal-cyan">›</span> Possible solutions:
                  </p>
                  <div className="pl-4 space-y-2">
                    <button
                      onClick={reset}
                      className="terminal-button w-full text-left"
                    >
                      <span className="text-terminal-prompt mr-2">❯</span>
                      Try Again
                    </button>
                    <Link
                      href="/"
                      className="terminal-button w-full text-left block"
                    >
                      <span className="text-terminal-prompt mr-2">❯</span>
                      Return to Home
                    </Link>
                    <Link
                      href="/contact"
                      className="terminal-button w-full text-left block"
                    >
                      <span className="text-terminal-prompt mr-2">❯</span>
                      Report This Issue
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Command Prompt */}
            <div className="pt-4 border-t border-terminal-border">
              <p className="text-terminal-textMuted">
                <span className="terminal-prompt">❯</span>{" "}
                <span className="text-terminal-text">Awaiting recovery action...</span>
                <span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}