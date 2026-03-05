import { TrendingUp, Globe, Calendar, MousePointer } from 'lucide-react';

interface AnalyticsSummary {
  total: number;
  perPage: { page: string; count: number }[];
  perDay: { date: string; count: number }[];
  topReferrers: { referrer: string | null; count: number }[];
}

async function getSummary(): Promise<AnalyticsSummary | null> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/analytics/summary`, {
      headers: { 'x-api-key': process.env.ADMIN_API_KEY ?? '' },
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const json = await res.json();
    // unwrap if wrapped in standard ApiResponseDto
    return json?.data ?? json;
  } catch {
    return null;
  }
}

function BarChart({
  data,
  label,
  valueKey,
  nameKey,
}: {
  data: Record<string, unknown>[];
  label: string;
  valueKey: string;
  nameKey: string;
}) {
  const max = Math.max(...data.map((d) => d[valueKey] as number), 1);
  return (
    <div>
      <p style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 12, textTransform: 'uppercase' }}>
        {label}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {data.map((item, i) => {
          const val = item[valueKey] as number;
          const name = (item[nameKey] as string) || '(direct)';
          const pct = Math.round((val / max) * 100);
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 12, color: 'var(--muted)', width: 140, flexShrink: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontFamily: 'var(--font-mono)' }}>
                {name}
              </span>
              <div style={{ flex: 1, background: 'var(--border)', borderRadius: 4, height: 6, overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', background: 'var(--accent)', borderRadius: 4, transition: 'width 0.4s ease' }} />
              </div>
              <span style={{ fontSize: 12, color: 'var(--accent)', width: 32, textAlign: 'right', fontFamily: 'var(--font-mono)', flexShrink: 0 }}>
                {val}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SparkLine({ data }: { data: { date: string; count: number }[] }) {
  const sorted = [...data].sort((a, b) => a.date.localeCompare(b.date));
  const max = Math.max(...sorted.map((d) => d.count), 1);
  return (
    <div>
      <p style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: 12, textTransform: 'uppercase' }}>
        Visits / Day — Last 30 Days
      </p>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 72 }}>
        {sorted.map((d, i) => {
          const h = Math.max(Math.round((d.count / max) * 72), 3);
          return (
            <div key={i} title={`${d.date}: ${d.count}`} style={{ flex: 1, height: h, background: 'var(--accent)', borderRadius: 2, opacity: 0.7, transition: 'height 0.3s ease' }} />
          );
        })}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
        <span style={{ fontSize: 10, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{sorted[0]?.date ?? ''}</span>
        <span style={{ fontSize: 10, color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>{sorted[sorted.length - 1]?.date ?? ''}</span>
      </div>
    </div>
  );
}

export default async function AnalyticsPage() {
  const data = await getSummary();

  if (!data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
        Failed to load analytics — check ADMIN_API_KEY and API_URL.
      </div>
    );
  }

  const statCards = [
    { icon: MousePointer, label: 'Total Visits', value: data.total.toLocaleString() },
    { icon: Globe, label: 'Unique Pages', value: data.perPage.length },
    { icon: TrendingUp, label: 'Peak Day', value: data.perDay.reduce((a, b) => (b.count > a.count ? b : a), { date: '-', count: 0 }).count },
    { icon: Calendar, label: 'Days Tracked', value: data.perDay.length },
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)', fontFamily: 'var(--font-mono)', padding: '80px 0 60px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
            <span style={{ width: 24, height: 1, background: 'var(--accent)', display: 'inline-block' }} />
            Analytics Dashboard
          </div>
          <h1 style={{ fontFamily: 'var(--font-sans)', fontSize: 40, fontWeight: 800, letterSpacing: -1, lineHeight: 1 }}>
            godwimp.me
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 8 }}>Visitor analytics — server-side, no cookies, no trackers.</p>
        </div>

        {/* Stat cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
          {statCards.map(({ icon: Icon, label, value }) => (
            <div key={label} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '20px 24px' }}>
              <Icon size={16} style={{ color: 'var(--accent)', marginBottom: 12 }} />
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 32, fontWeight: 800, color: 'var(--accent)', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>

        {/* Sparkline */}
        {data.perDay.length > 0 && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 28, marginBottom: 24 }}>
            <SparkLine data={data.perDay} />
          </div>
        )}

        {/* Per page + top referrers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 28 }}>
            <BarChart data={data.perPage} label="Visits by Page" valueKey="count" nameKey="page" />
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: 28 }}>
            <BarChart data={data.topReferrers} label="Top Referrers" valueKey="count" nameKey="referrer" />
          </div>
        </div>

      </div>
    </div>
  );
}
