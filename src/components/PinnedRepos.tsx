'use client';

import { motion } from 'framer-motion';
import { Github, Star, GitFork } from 'lucide-react';
import { PinnedRepo } from '@/types';

interface PinnedReposProps {
  repos: PinnedRepo[];
}

export default function PinnedRepos({ repos }: PinnedReposProps) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
      {repos.map((repo, i) => (
        <motion.a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          whileHover={{ y: -3 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#111118',
            border: '1px solid #1e1e2e',
            borderRadius: 12,
            padding: '18px 20px',
            textDecoration: 'none',
            transition: 'border-color 0.2s',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(0,255,136,0.2)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#1e1e2e')}
        >
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <Github size={13} color="#5a5a7a" strokeWidth={1.5} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: 13,
              fontWeight: 700,
              color: '#e8e8f0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {repo.name}
            </span>
          </div>

          {/* Description */}
          <p style={{ fontSize: 12, color: '#5a5a7a', lineHeight: 1.6, flex: 1, marginBottom: 14 }}>
            {repo.description ?? 'No description provided.'}
          </p>

          {/* Topics */}
          {repo.topics.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 12 }}>
              {repo.topics.slice(0, 3).map((topic) => (
                <span
                  key={topic}
                  style={{
                    fontSize: 10,
                    padding: '2px 8px',
                    borderRadius: 6,
                    fontFamily: 'JetBrains Mono, monospace',
                    background: 'rgba(0,255,136,0.08)',
                    color: '#00ff88',
                    border: '1px solid rgba(0,255,136,0.15)',
                  }}
                >
                  {topic}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 12, borderTop: '1px solid #1e1e2e' }}>
            {repo.primaryLanguage && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: repo.primaryLanguageColor ?? '#ccc', display: 'block' }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#5a5a7a' }}>
                  {repo.primaryLanguage}
                </span>
              </div>
            )}
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#5a5a7a' }}>
              <Star size={11} strokeWidth={1.5} />
              {repo.stars}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#5a5a7a' }}>
              <GitFork size={11} strokeWidth={1.5} />
              {repo.forks}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}