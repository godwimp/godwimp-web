import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const authHeader = req.headers.get('authorization');

  if (authHeader) {
    const base64 = authHeader.replace('Basic ', '');
    const decoded = atob(base64);
    const [user, pass] = decoded.split(':');

    const validUser = process.env.ANALYTICS_USER ?? 'admin';
    const validPass = process.env.ANALYTICS_PASS ?? '';

    if (user === validUser && pass === validPass) {
      return NextResponse.next();
    }
  }

  return new NextResponse('Unauthorized', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Analytics"',
    },
  });
}

export const config = {
  matcher: ['/analytics', '/analytics/:path*'],
};
