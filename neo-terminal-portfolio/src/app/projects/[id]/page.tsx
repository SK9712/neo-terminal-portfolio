import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getProjectById, getAllProjects } from '@/lib/projects';

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectById(params.id);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'website',
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  // Project-specific details (you can expand these based on your actual project data)
  const projectDetails: Record<string, any> = {
    'ashraya-ngo-website': {
      overview: `Ashraya is a comprehensive digital infrastructure project developed for Ashraya Charitable Society, one of Kerala's largest NGOs. This academic consultancy project, undertaken during final year, delivered a complete web platform serving over 1000 beneficiaries across 10 facilities throughout Kerala.`,
      challenge: `The main challenge was building a professional, production-ready platform with limited resources while ensuring security, reliability, and ease of use for non-technical NGO staff. The system needed to handle sensitive beneficiary data, process online donations securely, and provide a content management system that staff could use without technical knowledge.`,
      solution: `Led a student development team to design and implement a full-stack web platform using PHP CodeIgniter framework with MySQL database. Integrated secure payment gateway for online donations, implemented SSL encryption for data security, and created an intuitive admin panel with brute force protection. Set up complete digital infrastructure including DNS management, Google Business listing, and web hosting.`,
      impact: [
        '1000+ beneficiaries served across 10 facilities',
        'Official Letter of Appreciation from organization',
        'Secure online donation system processing real transactions',
        'Self-service content management reducing technical dependencies',
        'Improved digital presence and donor accessibility',
        'Platform still operational 4+ years after deployment'
      ],
      features: [
        'Secure admin authentication with brute force protection',
        'Dynamic content management system (CMS)',
        'Payment gateway integration for online donations',
        'Real-time notification system for contact forms',
        'Photo gallery management with upload functionality',
        'News feed publishing and updates',
        'IP blocking system for security',
        'Responsive design for all devices',
        'SSL/HTTPS encryption',
        'Google Business integration'
      ],
      technicalHighlights: [
        'MVC architecture using CodeIgniter framework',
        'Custom security implementation with IP blocking',
        'Payment gateway API integration',
        'Session management and authentication',
        'Database design for content and security logs',
        'File upload and management system',
        'Email notification system',
        'Responsive frontend with Bootstrap',
        'Production deployment on cPanel',
        'DNS configuration and SSL setup'
      ],
      recognition: 'Received official Letter of Appreciation from Kalayapuram Jose, General Secretary of Ashraya Charitable Society, dated July 31, 2020.',
      timeline: 'October 2019 - July 2020',
      team: 'Led student development team under Prof. Lithin Jacob (Faculty Guide)',
      deployment: 'Live production deployment on shared hosting with cPanel management',
    },
    'neo-terminal-portfolio': {
      overview: `A modern developer portfolio website featuring a distinctive terminal/CLI aesthetic. Built with cutting-edge web technologies and deployed on AWS infrastructure, this project showcases full-stack development capabilities and cloud deployment expertise.`,
      challenge: `Design and implement a portfolio that stands out from typical developer websites while maintaining professional appeal. The site needed to be fast, SEO-friendly, and demonstrate mastery of modern web technologies including serverless architecture and CI/CD pipelines.`,
      solution: `Created a Next.js 14 application with TypeScript and Tailwind CSS, featuring a unique terminal-inspired design. Implemented server-side rendering for optimal performance, integrated with external APIs for dynamic content, and deployed on AWS infrastructure with S3, CloudFront CDN, and automated CI/CD pipelines via GitHub Actions.`,
      impact: [
        'Professional online presence showcasing technical skills',
        'Sub-2-second page load times with CloudFront CDN',
        'Automated deployment pipeline reducing deployment time',
        'SEO-optimized with perfect Lighthouse scores',
        'Integrated with GitHub and Medium APIs for dynamic content',
        'Responsive design providing optimal experience on all devices'
      ],
      features: [
        'Terminal-inspired UI with typewriter effects',
        'Dark/light mode toggle with persistence',
        'Interactive career timeline',
        'Skills visualization with progress indicators',
        'Dynamic project showcase with filtering',
        'Blog system with MDX support',
        'Contact form with serverless backend',
        'GitHub activity integration',
        'Medium RSS feed integration',
        '"Now" widget showing current status'
      ],
      technicalHighlights: [
        'Next.js 14 with App Router and TypeScript',
        'Static site generation for optimal performance',
        'Tailwind CSS with custom terminal theme',
        'AWS S3 for static hosting',
        'CloudFront CDN for global distribution',
        'Route 53 for DNS management',
        'Lambda functions for contact form',
        'GitHub Actions for CI/CD automation',
        'MDX for blog content management',
        'Responsive design with mobile-first approach'
      ],
      timeline: 'January 2025 - Present',
      deployment: 'AWS infrastructure with automated CI/CD',
    },
    'malicious-url-detection': {
      overview: `A deep learning-based security solution that detects malicious URLs using Character-level Convolutional Neural Networks. This project addresses the growing threat of web-based attacks by identifying malicious patterns in URL structures.`,
      challenge: `Traditional signature-based detection methods struggle with new and evolving attack patterns. The challenge was to create a model that could learn to identify malicious URLs based on their character-level patterns without relying on predefined signatures.`,
      solution: `Implemented a Character-level CNN architecture using Python and Keras that analyzes URL strings at the character level. The model was trained on comprehensive datasets of malicious and benign URLs, learning to identify patterns indicative of XSS attacks, SQL injection attempts, and directory traversal exploits.`,
      impact: [
        'Effective detection of XSS, SQL injection, and directory traversal attacks',
        'Model trained on comprehensive security threat datasets',
        'Character-level analysis providing robustness against obfuscation',
        'Open source contribution to security research',
        'Academic project demonstrating ML application in cybersecurity'
      ],
      features: [
        'Character-level CNN architecture',
        'Multi-class classification for different attack types',
        'Training on real-world security datasets',
        'URL preprocessing and feature extraction',
        'Model evaluation and performance metrics',
        'Python implementation with Keras/TensorFlow',
        'Modular design for easy extension',
        'Detailed documentation and examples'
      ],
      technicalHighlights: [
        'Character-level Convolutional Neural Network',
        'Deep learning with Keras and TensorFlow',
        'Feature extraction from URL strings',
        'Multi-label classification',
        'Training pipeline with data augmentation',
        'Model optimization and hyperparameter tuning',
        'Evaluation metrics (accuracy, precision, recall)',
        'Python implementation with NumPy and Pandas'
      ],
      timeline: '2019 (Final Year Project)',
      deployment: 'Open source on GitHub',
    },
    'html-css-js-editor': {
      overview: `A lightweight desktop code editor built with Electron.js as a 3rd year academic project. This application provides a simple environment for writing and previewing HTML, CSS, and JavaScript code with real-time compilation.`,
      challenge: `Learning desktop application development with web technologies and understanding how to create a responsive code editor interface with live preview functionality.`,
      solution: `Built a cross-platform desktop application using Electron.js that combines a code editor interface with a live preview pane. Implemented real-time compilation where code changes are instantly reflected in the preview window.`,
      impact: [
        'First exploration of desktop application development',
        'Practical introduction to Electron.js framework',
        'Understanding of code editor architectures',
        'Cross-platform compatibility learning',
        'Foundation for developer tools development'
      ],
      features: [
        'Code editor with syntax highlighting (if implemented)',
        'Live preview pane for instant feedback',
        'Real-time code compilation',
        'File operations (open, save)',
        'Split-screen interface',
        'Cross-platform desktop application',
        'Basic text editing capabilities'
      ],
      technicalHighlights: [
        'Electron.js for desktop app framework',
        'Inter-process communication (IPC)',
        'File system operations with Node.js',
        'Real-time rendering and preview',
        'HTML/CSS/JavaScript integration',
        'Desktop application packaging'
      ],
      timeline: '2018-2019 (3rd Year)',
      deployment: 'Learning project',
    },
    'data-pipeline-kafka-s3': {
      overview: `A robust data pipeline system designed to handle high-volume data streaming from Apache Kafka to Amazon S3. This enterprise-grade solution ensures efficient data ingestion, processing, and storage with fault tolerance and scalability.`,
      challenge: `Handling high-volume streaming data efficiently while ensuring data integrity, managing backpressure, and maintaining system reliability in production environments.`,
      solution: `Designed and implemented a scalable data pipeline using Apache Kafka for stream processing and Amazon S3 for storage. Implemented efficient partitioning strategies, error handling mechanisms, and monitoring solutions to ensure reliable data flow.`,
      impact: [
        'Efficient handling of high-volume data streams',
        'Scalable architecture supporting growth',
        'Reliable data ingestion with fault tolerance',
        'Optimized storage with S3 lifecycle policies',
        'Production-grade reliability and monitoring'
      ],
      features: [
        'Kafka consumer implementation',
        'S3 data ingestion with partitioning',
        'Error handling and retry mechanisms',
        'Data validation and quality checks',
        'Monitoring and alerting',
        'Configurable batch processing',
        'Scalable architecture'
      ],
      technicalHighlights: [
        'Apache Kafka stream processing',
        'AWS S3 integration',
        'Java with Spring Boot',
        'Partition management strategies',
        'Error handling and dead letter queues',
        'Monitoring with CloudWatch',
        'Horizontal scaling capabilities'
      ],
      timeline: '2022-2023 (Professional Work)',
      deployment: 'Production environment at Equifax',
    },
  };

  const details = projectDetails[project.id] || {
    overview: project.description,
    features: [],
    technicalHighlights: [],
    impact: [],
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Backend':
        return 'text-terminal-green border-terminal-green';
      case 'System Design':
        return 'text-terminal-cyan border-terminal-cyan';
      case 'Open Source':
        return 'text-terminal-command border-terminal-command';
      case 'Full Stack':
        return 'text-terminal-prompt border-terminal-prompt';
      default:
        return 'text-terminal-cyan border-terminal-cyan';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs className="mb-8" />

        {/* Project Header */}
        <div className="terminal-card mb-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  {project.featured && (
                    <span className="text-2xl" title="Featured Project">
                      ⭐
                    </span>
                  )}
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 border rounded text-xs font-semibold ${getCategoryColor(
                      project.category
                    )}`}
                  >
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gradient mb-3">
                  {project.title}
                </h1>
                {details.timeline && (
                  <p className="text-terminal-textMuted text-sm">
                    <span className="text-terminal-prompt mr-1">›</span>
                    {details.timeline}
                  </p>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-terminal-border">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  <span>View Live</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View Code</span>
                </a>
              )}
              <Link
                href="/projects"
                className="terminal-button flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <span>←</span>
                <span>Back to Projects</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="terminal-card mb-6 animate-slide-up">
          <h2 className="text-2xl font-bold text-terminal-cyan flex items-center mb-4">
            <span className="text-terminal-prompt mr-2">›</span>
            Overview
          </h2>
          <p className="text-terminal-text leading-relaxed pl-6">
            {details.overview}
          </p>
        </div>

        {/* Recognition (if applicable) */}
        {details.recognition && (
          <div
            className="terminal-card bg-terminal-green/10 border-terminal-green mb-6 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <h3 className="text-terminal-green font-semibold mb-2">
                  Official Recognition
                </h3>
                <p className="text-terminal-text text-sm">{details.recognition}</p>
              </div>
            </div>
          </div>
        )}

        {/* Challenge & Solution */}
        {details.challenge && details.solution && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div
              className="terminal-card animate-slide-up"
              style={{ animationDelay: '0.1s' }}
            >
              <h3 className="text-xl font-bold text-terminal-cyan flex items-center mb-3">
                <span className="text-terminal-prompt mr-2">›</span>
                Challenge
              </h3>
              <p className="text-terminal-text text-sm leading-relaxed pl-6">
                {details.challenge}
              </p>
            </div>
            <div
              className="terminal-card animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              <h3 className="text-xl font-bold text-terminal-green flex items-center mb-3">
                <span className="text-terminal-prompt mr-2">›</span>
                Solution
              </h3>
              <p className="text-terminal-text text-sm leading-relaxed pl-6">
                {details.solution}
              </p>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div
          className="terminal-card mb-6 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <h2 className="text-2xl font-bold text-terminal-cyan flex items-center mb-4">
            <span className="text-terminal-prompt mr-2">›</span>
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2 pl-6">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-terminal-bg border border-terminal-border rounded text-terminal-text text-sm hover:border-terminal-cyan transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        {details.features && details.features.length > 0 && (
          <div
            className="terminal-card mb-6 animate-slide-up"
            style={{ animationDelay: '0.4s' }}
          >
            <h2 className="text-2xl font-bold text-terminal-cyan flex items-center mb-4">
              <span className="text-terminal-prompt mr-2">›</span>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6">
              {details.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-terminal-green mt-1">✓</span>
                  <span className="text-terminal-text text-sm flex-1">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Impact */}
        {details.impact && details.impact.length > 0 && (
          <div
            className="terminal-card mb-6 animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            <h2 className="text-2xl font-bold text-terminal-cyan flex items-center mb-4">
              <span className="text-terminal-prompt mr-2">›</span>
              Impact & Results
            </h2>
            <div className="space-y-3 pl-6">
              {details.impact.map((item: string, index: number) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-terminal-cyan mt-1">▸</span>
                  <span className="text-terminal-text text-sm flex-1">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Highlights */}
        {details.technicalHighlights && details.technicalHighlights.length > 0 && (
          <div
            className="terminal-card mb-6 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <h2 className="text-2xl font-bold text-terminal-cyan flex items-center mb-4">
              <span className="text-terminal-prompt mr-2">›</span>
              Technical Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-6">
              {details.technicalHighlights.map((highlight: string, index: number) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-terminal-command mt-1">◆</span>
                  <span className="text-terminal-text text-sm flex-1">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info */}
        {(details.team || details.deployment) && (
          <div
            className="terminal-card bg-terminal-bg animate-slide-up"
            style={{ animationDelay: '0.7s' }}
          >
            <div className="space-y-3 text-sm">
              {details.team && (
                <div className="flex items-start gap-2">
                  <span className="text-terminal-textMuted font-semibold min-w-[100px]">
                    Team:
                  </span>
                  <span className="text-terminal-text">{details.team}</span>
                </div>
              )}
              {details.deployment && (
                <div className="flex items-start gap-2">
                  <span className="text-terminal-textMuted font-semibold min-w-[100px]">
                    Deployment:
                  </span>
                  <span className="text-terminal-text">{details.deployment}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Terminal Output */}
        <div
          className="terminal-card bg-terminal-bg mt-6 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="font-mono text-xs space-y-1">
            <p className="text-terminal-textMuted">
              <span className="text-terminal-prompt">¯</span> Project loaded successfully
            </p>
            <p className="text-terminal-green pl-4">
              ✓ {details.features?.length || 0} features documented
            </p>
            <p className="text-terminal-cyan pl-4">
              ✓ {project.techStack.length} technologies used
            </p>
            <p className="text-terminal-textMuted pl-4">
              › Ready for review<span className="terminal-cursor"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}