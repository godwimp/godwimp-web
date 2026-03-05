import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const apiUrl = process.env.API_URL;

  if (!apiUrl) {
    return NextResponse.json({ message: 'Server misconfigured' }, { status: 500 });
  }

  const body = await req.json();

  const res = await fetch(`${apiUrl}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
