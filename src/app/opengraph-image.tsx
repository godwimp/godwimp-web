import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Fadhillah Maulana — Backend & Data Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#00ff88',
            fontSize: '14px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          <div style={{ width: '28px', height: '1px', background: '#00ff88' }} />
          Backend &amp; Data Engineer
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: '88px',
            fontWeight: 900,
            color: '#e8e8f0',
            lineHeight: 0.92,
            marginBottom: '32px',
            letterSpacing: '-3px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Fadhillah</span>
          <span style={{ color: 'transparent', WebkitTextStroke: '2px rgba(0,255,136,0.55)' }}>
            Maulana
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '18px',
            color: '#5a5a7a',
            lineHeight: 1.8,
            maxWidth: '580px',
          }}
        >
          NestJS · Microservices · Security Tools · npm Packages
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            marginTop: '48px',
          }}
        >
          {[
            { value: '8+', label: 'Production services' },
            { value: '99.9%', label: 'Avg uptime' },
            { value: '~10K', label: 'Daily requests' },
          ].map((stat) => (
            <div key={stat.label} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '28px', fontWeight: 900, color: '#00ff88' }}>
                {stat.value}
              </span>
              <span style={{ fontSize: '12px', color: '#5a5a7a', letterSpacing: '0.1em' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: '80px',
            right: '80px',
            fontSize: '16px',
            color: '#2a2a3a',
            letterSpacing: '0.05em',
          }}
        >
          godwimp.me
        </div>
      </div>
    ),
    { ...size }
  );
}
