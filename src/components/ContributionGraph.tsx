'use client';

import { motion } from 'framer-motion';
import { ContributionWeek } from '@/types';

interface ContributionGraphProps {
  weeks: ContributionWeek[];
  totalCommits: number;
}

const LEVEL_COLORS = [
  '#1e1e2e',   // 0
  '#00ff8822', // 1
  '#00ff8855', // 2
  '#00ff88aa', // 3
  '#00ff88',   // 4
];

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

export default function ContributionGraph({ weeks, totalCommits }: ContributionGraphProps) {
  const monthLabels: { label: string; index: number }[] = [];
  weeks.forEach((week, wi) => {
    const first = week.days[0];
    if (!first) return;
    const d = new Date(first.date);
    if (d.getDate() <= 7) {
      monthLabels.push({ label: MONTHS[d.getMonth()], index: wi });
    }
  });

  // Cell size calculated to fill container — use percentage width via flex
  // But for pixel-perfect grid, use fixed small cell size
  const CELL = 13;
  const GAP = 3;
  const UNIT = CELL + GAP;
  const totalWidth = weeks.length * UNIT;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ background: '#111118', border: '1px solid #1e1e2e', borderRadius: 12, padding: '20px' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5a5a7a' }}>
          Contribution Activity
        </p>
        <span style={{ fontSize: 11, color: '#5a5a7a', fontFamily: 'JetBrains Mono, monospace' }}>
          {totalCommits} commits this year
        </span>
      </div>

      {/* Scrollable container — full width */}
      <div style={{ width: '100%', overflowX: 'auto', paddingBottom: 4 }}>
        <div style={{ width: totalWidth, minWidth: totalWidth }}>
          {/* Month labels row */}
          <div style={{ display: 'flex', marginBottom: 6, height: 14 }}>
            {weeks.map((_, wi) => {
              const m = monthLabels.find((l) => l.index === wi);
              return (
                <div key={wi} style={{ width: UNIT, flexShrink: 0 }}>
                  {m && (
                    <span style={{ fontSize: 9, color: '#5a5a7a', whiteSpace: 'nowrap', display: 'block' }}>
                      {m.label}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Week columns */}
          <div style={{ display: 'flex', gap: GAP }}>
            {weeks.map((week, wi) => (
              <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: GAP }}>
                {wi === 0 &&
                  Array.from({ length: 7 - week.days.length }).map((_, i) => (
                    <div key={`pad-${i}`} style={{ width: CELL, height: CELL }} />
                  ))}
                {week.days.map((day) => (
                  <div
                    key={day.date}
                    title={`${day.date}: ${day.count} contribution${day.count !== 1 ? 's' : ''}`}
                    style={{
                      width: CELL,
                      height: CELL,
                      borderRadius: 3,
                      backgroundColor: LEVEL_COLORS[day.level],
                      cursor: 'default',
                      transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 10, justifyContent: 'flex-end' }}>
            <span style={{ fontSize: 10, color: '#5a5a7a' }}>Less</span>
            {LEVEL_COLORS.map((color, i) => (
              <div key={i} style={{ width: CELL, height: CELL, borderRadius: 3, backgroundColor: color }} />
            ))}
            <span style={{ fontSize: 10, color: '#5a5a7a' }}>More</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}