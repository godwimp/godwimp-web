'use client';

import { motion } from 'framer-motion';
import { GitCommit, GitPullRequest, Star, Users, FolderGit2 } from 'lucide-react';
import type { GithubStats } from '@/types';

interface GithubStatsProps {
  stats: GithubStats;
}

const statItems = [
  { key: 'totalRepositories', label: 'Repositories', icon: FolderGit2 },
  { key: 'totalCommitsThisYear', label: 'Commits this year', icon: GitCommit },
  { key: 'totalPRs', label: 'Pull Requests', icon: GitPullRequest },
  { key: 'totalStars', label: 'Stars earned', icon: Star },
  { key: 'followers', label: 'Followers', icon: Users },
] as const;

export default function GithubStats({ stats }: GithubStatsProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {/* Stat Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
        {statItems.map(({ key, label, icon: Icon }, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            style={{
              background: '#111118',
              border: '1px solid #1e1e2e',
              borderRadius: 12,
              padding: '20px 20px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <Icon size={14} color="#00ff88" strokeWidth={1.5} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 26,
              fontWeight: 700,
              color: '#e8e8f0',
              lineHeight: 1,
            }}>
              {stats[key].toLocaleString()}
            </span>
            <span style={{
              fontSize: 10,
              color: '#5a5a7a',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Language Breakdown */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{ background: '#111118', border: '1px solid #1e1e2e', borderRadius: 12, padding: '20px' }}
      >
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a7a', marginBottom: 12 }}>
          Language Breakdown
        </p>
        <div style={{ display: 'flex', height: 5, borderRadius: 999, overflow: 'hidden', gap: 2, marginBottom: 14 }}>
          {stats.languages.map((lang) => (
            <div
              key={lang.name}
              style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
              title={`${lang.name} ${lang.percentage}%`}
            />
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 20px' }}>
          {stats.languages.map((lang) => (
            <div key={lang.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: lang.color, flexShrink: 0, display: 'block' }} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#5a5a7a' }}>{lang.name}</span>
              <span style={{ fontSize: 11, color: '#5a5a7a88' }}>{lang.percentage}%</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}