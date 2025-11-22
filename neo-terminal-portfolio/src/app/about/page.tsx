import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import ResumeDownload from '@/components/ResumeDownload';
import { siteConfig } from '@/lib/config';
import CodingProfiles from '@/components/CodingProfiles';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Sushant Kumar - Full Stack Developer specializing in Java, Spring Boot, and Microservices',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-8" />

        {/* Page Header */}
        <div className="terminal-card mb-8 animate-fade-in">
          <div className="space-y-2">
            <p className="text-terminal-textMuted">
              <span className="terminal-prompt">¯</span> cat about.md
            </p>
            <div className="pl-4">
              <h1 className="text-4xl font-bold text-gradient mb-2">
                About Me
              </h1>
              <p className="text-terminal-textMuted">
                Full Stack Developer | Backend Specialist<span className="terminal-cursor"></span>
              </p>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-8">
          {/* Bio Section with Profile Picture */}
          <div className="terminal-card animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Bio
              </h2>
              <div className="pl-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  {/* Profile Picture */}
                  <div className="md:col-span-1 flex justify-center md:justify-start">
                    <div className="relative group">
                      {/* Decorative border effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-terminal-cyan to-terminal-green rounded-lg opacity-75 group-hover:opacity-100 blur transition duration-300"></div>
                      
                      {/* Image container */}
                      <div className="relative">
                        <div className="w-60 h-60 rounded-lg overflow-hidden border-2 border-terminal-cyan bg-terminal-bg">
                          <img
                            src="/profile.jpg"
                            alt={siteConfig.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Terminal-style label */}
                        <div className="mt-3 text-center">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-terminal-bg border border-terminal-cyan rounded text-xs font-mono">
                            <span className="w-2 h-2 bg-terminal-green rounded-full animate-pulse"></span>
                            <span className="text-terminal-cyan">Online</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bio Text */}
                  <div className="md:col-span-2 space-y-4 text-terminal-text">
                    <p className="text-lg">
                      Hello! I'm <span className="text-terminal-cyan font-semibold">{siteConfig.author.name}</span>, 
                      an experienced <span className="text-terminal-green font-semibold">Full Stack Developer</span> with over 4 years of expertise 
                      in building scalable web applications using <span className="text-terminal-command">Java</span> for backend 
                      and <span className="text-terminal-command">React</span> for front-end development.
                    </p>
                    <p>
                      Currently working as a <span className="text-terminal-cyan font-semibold">Software Engineer at Suntec Business Solutions</span>, 
                      I specialize in designing <span className="text-terminal-green">REST APIs</span>, implementing <span className="text-terminal-green">microservices architectures</span>, 
                      and optimizing application performance. My expertise includes working with databases like PostgreSQL, Oracle, and MongoDB, 
                      along with modern DevOps practices using Docker, Kubernetes, and Jenkins.
                    </p>
                    <p>
                      I'm passionate about <span className="text-terminal-cyan">clean code</span>, <span className="text-terminal-cyan">system design</span>, 
                      and <span className="text-terminal-cyan">continuous learning</span>. With a 6-star rating on HackerRank and 278+ problems solved on LeetCode, 
                      I constantly challenge myself to improve my problem-solving skills. I believe in writing maintainable, efficient code and 
                      collaborating in Agile teams to deliver high-quality solutions.
                    </p>
                    <p className="text-terminal-textMuted">
                      When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                      or solving algorithmic challenges. I'm always eager to learn, grow, and tackle new challenges in the ever-evolving tech landscape.
                    </p>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 mt-4 border-t border-terminal-border">
                  <div className="bg-terminal-bg border border-terminal-border rounded p-3 text-center hover:border-terminal-cyan transition-colors cursor-pointer group">
                    <div className="text-2xl font-bold text-terminal-cyan group-hover:scale-110 transition-transform">4+</div>
                    <div className="text-xs text-terminal-textMuted mt-1">Years Experience</div>
                  </div>
                  <div className="bg-terminal-bg border border-terminal-border rounded p-3 text-center hover:border-terminal-green transition-colors cursor-pointer group">
                    <div className="text-2xl font-bold text-terminal-green group-hover:scale-110 transition-transform">278+</div>
                    <div className="text-xs text-terminal-textMuted mt-1">LeetCode Solved</div>
                  </div>
                  <div className="bg-terminal-bg border border-terminal-border rounded p-3 text-center hover:border-terminal-command transition-colors cursor-pointer group">
                    <div className="text-2xl font-bold text-terminal-command group-hover:scale-110 transition-transform">⭐⭐⭐⭐⭐⭐</div>
                    <div className="text-xs text-terminal-textMuted mt-1">HackerRank Rating</div>
                  </div>
                  <div className="bg-terminal-bg border border-terminal-border rounded p-3 text-center hover:border-terminal-cyan transition-colors cursor-pointer group">
                    <div className="text-2xl font-bold text-terminal-cyan group-hover:scale-110 transition-transform">∞</div>
                    <div className="text-xs text-terminal-textMuted mt-1">Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Skills & Technologies
              </h2>
              <div className="pl-6">
                <Skills />
              </div>
            </div>
          </div>

          {/* Coding Profiles Section */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.15s' }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Coding Profiles & Achievements
              </h2>
              <div className="pl-6">
                <CodingProfiles />
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Career Timeline
              </h2>
              <div className="pl-6">
                <Timeline />
              </div>
            </div>
          </div>

          {/* Resume Download Section */}
          <div className="terminal-card animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-terminal-cyan flex items-center">
                <span className="text-terminal-prompt mr-2">›</span>
                Resume
              </h2>
              <div className="pl-6">
                <ResumeDownload />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="terminal-card bg-terminal-bg animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center space-y-4 py-8">
              <h3 className="text-2xl font-bold text-gradient">Let's Work Together!</h3>
              <p className="text-terminal-textMuted max-w-2xl mx-auto">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <a
                  href="/contact"
                  className="terminal-button hover:scale-105 transition-transform"
                >
                  <span className="text-terminal-prompt mr-2">¯</span>
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="terminal-button hover:scale-105 transition-transform"
                >
                  <span className="text-terminal-prompt mr-2">¯</span>
                  View Projects
                </a>
                <a
                  href={siteConfig.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button hover:scale-105 transition-transform"
                >
                  <span className="text-terminal-prompt mr-2">¯</span>
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}