'use client';

interface CodingProfile {
  name: string;
  username: string;
  url: string;
  achievements: string[];
  icon: string;
  color: string;
}

const profiles: CodingProfile[] = [
  {
    name: 'HackerRank',
    username: 'sushantkct',
    url: 'https://www.hackerrank.com/sushantkct',
    achievements: [
      '6-star rating in Problem Solving',
      '5-star badge in Java',
      '5-star badge in Python',
      'Problem Solving (Intermediate) certified',
    ],
    icon: '👨‍💻',
    color: 'text-terminal-green',
  },
  {
    name: 'LeetCode',
    username: 'sushantkct',
    url: 'https://leetcode.com/sushantkct',
    achievements: [
      '278+ problems solved',
      'Contest rating: 1,501',
      'Regular contest participant',
    ],
    icon: '⚡',
    color: 'text-terminal-command',
  },
  {
    name: 'GitHub',
    username: 'sushantkct',
    url: 'https://github.com/sushantkct',
    achievements: [
      'Active open source contributor',
      'Multiple production-ready projects',
      'Clean code and documentation',
    ],
    icon: '🐙',
    color: 'text-terminal-cyan',
  },
];

export default function CodingProfiles() {
  return (
    <div className="space-y-4">
      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {profiles.map((profile, index) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-card bg-terminal-bg hover:border-terminal-cyan hover:scale-[1.02] transition-all group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="space-y-3">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{profile.icon}</span>
                  <div>
                    <h3 className={`font-bold ${profile.color} group-hover:text-terminal-cyan transition-colors`}>
                      {profile.name}
                    </h3>
                    <p className="text-terminal-textMuted text-xs">@{profile.username}</p>
                  </div>
                </div>
                <svg
                  className="w-5 h-5 text-terminal-textMuted group-hover:text-terminal-cyan group-hover:translate-x-1 transition-all"
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
              </div>

              {/* Achievements */}
              <div className="space-y-1.5">
                {profile.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-terminal-green mt-0.5">✓</span>
                    <span className="text-terminal-text flex-1">{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Visit Link */}
              <div className="pt-2 border-t border-terminal-border">
                <div className="flex items-center gap-2 text-xs text-terminal-textMuted group-hover:text-terminal-cyan transition-colors">
                  <span>Visit profile</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Achievements Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="terminal-card bg-terminal-bg text-center hover:border-terminal-green transition-colors">
          <div className="text-2xl font-bold text-terminal-green">⭐⭐⭐⭐⭐⭐</div>
          <div className="text-xs text-terminal-textMuted mt-1">HackerRank Stars</div>
        </div>
        <div className="terminal-card bg-terminal-bg text-center hover:border-terminal-command transition-colors">
          <div className="text-2xl font-bold text-terminal-command">278+</div>
          <div className="text-xs text-terminal-textMuted mt-1">LeetCode Problems</div>
        </div>
        <div className="terminal-card bg-terminal-bg text-center hover:border-terminal-cyan transition-colors">
          <div className="text-2xl font-bold text-terminal-cyan">1,501</div>
          <div className="text-xs text-terminal-textMuted mt-1">Contest Rating</div>
        </div>
        <div className="terminal-card bg-terminal-bg text-center hover:border-terminal-green transition-colors">
          <div className="text-2xl font-bold text-terminal-green">8+</div>
          <div className="text-xs text-terminal-textMuted mt-1">Certifications</div>
        </div>
      </div>

      {/* Recognition */}
      <div className="terminal-card bg-terminal-bg">
        <div className="space-y-3">
          <h4 className="text-terminal-cyan font-semibold flex items-center gap-2">
            <span>🏆</span>
            Notable Achievements
          </h4>
          <div className="pl-6 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <span className="text-terminal-green">✓</span>
              <div>
                <p className="text-terminal-text">
                  <span className="font-semibold">CTO's Honour List</span> - Suntec Business Solutions
                </p>
                <p className="text-terminal-textMuted text-xs">
                  Recognition for exceptional contributions to Platform Engineering Team (Oct 2021)
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-terminal-green">✓</span>
              <div>
                <p className="text-terminal-text">
                  <span className="font-semibold">6-Star HackerRank Badge</span> - Problem Solving Excellence
                </p>
                <p className="text-terminal-textMuted text-xs">
                  Awarded for mastery in Algorithms and Data Structures (Feb 2018)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="terminal-card bg-terminal-bg">
        <div className="space-y-1 font-mono text-xs">
          <p className="text-terminal-textMuted">
            <span className="text-terminal-prompt">¯</span> Fetching coding profiles...
          </p>
          <p className="text-terminal-green pl-4">✓ HackerRank: 6-star rating verified</p>
          <p className="text-terminal-cyan pl-4">✓ LeetCode: 278+ problems solved</p>
          <p className="text-terminal-command pl-4">✓ GitHub: Active contributions tracked</p>
          <p className="text-terminal-text pl-4">
            › All profiles active and current<span className="terminal-cursor"></span>
          </p>
        </div>
      </div>
    </div>
  );
}