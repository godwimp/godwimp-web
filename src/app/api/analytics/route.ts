import { NextResponse } from 'next/server';

export async function GET() {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.ADMIN_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }

  const res = await fetch(`${apiUrl}/analytics/summary`, {
    headers: { 'x-api-key': apiKey },
    cache: 'no-store',
  });

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
