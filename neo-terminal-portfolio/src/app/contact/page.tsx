import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { siteConfig, socialLinks } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-8" />

        {/* Page Header */}
        <div className="terminal-card mb-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-terminal-textMuted">
              <span className="terminal-prompt">❯</span> ./contact.sh
            </p>
            <div className="pl-4">
              <h1 className="text-4xl font-bold text-gradient mb-2">
                Get In Touch
              </h1>
              <p className="text-terminal-textMuted">
                Let's connect and collaborate<span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <div className="terminal-card animate-slide-up space-y-6">
            <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
              <span className="text-terminal-prompt mr-2">›</span>
              Connect With Me
            </h2>
            
            <div className="pl-6 space-y-4">
              {/* Email */}
              <div className="space-y-1">
                <p className="text-terminal-textMuted text-sm">Email</p>
                <a
                  href={`mailto:${siteConfig.author.email}`}
                  className="terminal-link text-lg block"
                >
                  {siteConfig.author.email}
                </a>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <p className="text-terminal-textMuted text-sm">Social</p>
                <div className="space-y-2">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link block"
                    >
                      <span className="text-terminal-prompt mr-2">›</span>
                      GitHub
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link block"
                    >
                      <span className="text-terminal-prompt mr-2">›</span>
                      LinkedIn
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a
                      href={socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link block"
                    >
                      <span className="text-terminal-prompt mr-2">›</span>
                      Twitter
                    </a>
                  )}
                  {socialLinks.medium && (
                    <a
                      href={socialLinks.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="terminal-link block"
                    >
                      <span className="text-terminal-prompt mr-2">›</span>
                      Medium
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Coming Soon */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="text-2xl font-bold text-terminal-cyan flex items-center mb-6">
              <span className="text-terminal-prompt mr-2">›</span>
              Send a Message
            </h2>
            
            <div className="pl-6 space-y-4">
              <p className="text-terminal-textMuted">
                Contact form functionality will be implemented in Iteration 7 with AWS SES integration.
              </p>
              
              {/* Form Preview (Disabled) */}
              <div className="space-y-4 opacity-50">
                <div>
                  <label className="block text-terminal-textMuted text-sm mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    disabled
                    className="w-full bg-terminal-bg border border-terminal-border rounded px-3 py-2 text-terminal-text"
                    placeholder="Coming soon..."
                  />
                </div>
                
                <div>
                  <label className="block text-terminal-textMuted text-sm mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    disabled
                    className="w-full bg-terminal-bg border border-terminal-border rounded px-3 py-2 text-terminal-text"
                    placeholder="Coming soon..."
                  />
                </div>
                
                <div>
                  <label className="block text-terminal-textMuted text-sm mb-1">
                    Message
                  </label>
                  <textarea
                    disabled
                    rows={4}
                    className="w-full bg-terminal-bg border border-terminal-border rounded px-3 py-2 text-terminal-text"
                    placeholder="Coming soon..."
                  />
                </div>
                
                <button
                  disabled
                  className="terminal-button cursor-not-allowed w-full"
                >
                  <span className="text-terminal-prompt mr-2">❯</span>
                  Send Message (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}