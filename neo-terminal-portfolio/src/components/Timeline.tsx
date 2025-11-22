'use client';

import { useState } from 'react';

interface TimelineItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  technologies?: string[];
  type: 'work' | 'education' | 'project';
}

const timelineData: TimelineItem[] = [
  {
    id: '1',
    year: '2022 - Present',
    title: 'Software Engineer',
    company: 'Suntec Business Solutions',
    description: 'Optimized API performance through pagination for bulk data retrieval. Streamlined CI/CD with Jenkins pipelines and parallel job execution. Enhanced container orchestration with Docker and Kubernetes. Developed robust data pipeline using Kafka for streaming to Amazon S3. Boosted API response times with Redis cache implementation.',
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Docker', 'Jenkins', 'Kafka', 'Redis', 'S3'],
    type: 'work',
  },
  {
    id: '2',
    year: '2021 - 2022',
    title: 'Associate Software Engineer',
    company: 'Suntec Business Solutions',
    description: 'Created unified logging interface with Log4j abstraction layer. Enabled real-time data processing with Apache NiFi flows. Implemented Tomcat filters for comprehensive data logging. Resolved critical production issues ensuring system reliability.',
    technologies: ['Java', 'Apache NiFi', 'Log4j', 'Tomcat', 'Oracle', 'MariaDB'],
    type: 'work',
  },
  {
    id: '3',
    year: '2016 - 2020',
    title: 'B.Tech in Computer Science',
    company: 'UKF College of Engineering and Technology',
    description: 'Graduated with a degree in Computer Science and Engineering. Developed strong foundation in algorithms, data structures, and software engineering principles. Completed projects in machine learning and full-stack development.',
    technologies: ['Data Structures', 'Algorithms', 'OOPs', 'System Design'],
    type: 'education',
  },
];

export default function Timeline() {
  const [selectedType, setSelectedType] = useState<'all' | 'work' | 'education' | 'project'>('all');

  const filteredTimeline = selectedType === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.type === selectedType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return '💼';
      case 'education':
        return '🎓';
      case 'project':
        return '🚀';
      default:
        return '📌';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work':
        return 'text-terminal-cyan';
      case 'education':
        return 'text-terminal-green';
      case 'project':
        return 'text-terminal-command';
      default:
        return 'text-terminal-text';
    }
  };

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedType('all')}
          className={`terminal-button text-sm ${
            selectedType === 'all' ? 'border-terminal-cyan text-terminal-cyan' : ''
          }`}
        >
          <span className="text-terminal-prompt mr-1">›</span>
          All
        </button>
        <button
          onClick={() => setSelectedType('work')}
          className={`terminal-button text-sm ${
            selectedType === 'work' ? 'border-terminal-cyan text-terminal-cyan' : ''
          }`}
        >
          <span className="mr-1">💼</span>
          Work
        </button>
        <button
          onClick={() => setSelectedType('education')}
          className={`terminal-button text-sm ${
            selectedType === 'education' ? 'border-terminal-cyan text-terminal-cyan' : ''
          }`}
        >
          <span className="mr-1">🎓</span>
          Education
        </button>
      </div>

      {/* Timeline */}
      <div className="relative pl-8 space-y-8">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-terminal-border"></div>

        {filteredTimeline.map((item, index) => (
          <div
            key={item.id}
            className="relative animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-2.15rem] top-2 w-4 h-4 rounded-full bg-terminal-bg border-2 border-terminal-cyan flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-terminal-cyan animate-pulse"></div>
            </div>

            {/* Content Card */}
            <div className="terminal-card hover:scale-[1.02] transition-transform">
              <div className="space-y-3">
                {/* Year Badge */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-terminal-bg border border-terminal-border rounded text-terminal-cyan text-sm font-semibold">
                    <span>{getTypeIcon(item.type)}</span>
                    {item.year}
                  </span>
                </div>

                {/* Title & Company */}
                <div>
                  <h3 className={`text-xl font-bold ${getTypeColor(item.type)} mb-1`}>
                    {item.title}
                  </h3>
                  <p className="text-terminal-textMuted text-sm">
                    <span className="text-terminal-prompt mr-1">›</span>
                    {item.company}
                  </p>
                </div>

                {/* Description */}
                <p className="text-terminal-text text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Technologies */}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-terminal-bg border border-terminal-border rounded text-terminal-textMuted text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* End Marker */}
      <div className="relative pl-8">
        <div className="absolute left-[-2.15rem] top-0 w-4 h-4 rounded-full bg-terminal-bg border-2 border-terminal-green flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-terminal-green"></div>
        </div>
        <div className="text-terminal-green text-sm flex items-center gap-2">
          <span className="text-terminal-prompt">¯</span>
          <span>Journey continues...</span>
        </div>
      </div>
    </div>
  );
}