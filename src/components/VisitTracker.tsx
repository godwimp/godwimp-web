'use client';

import { useEffect } from 'react';

export default function VisitTracker() {
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) return;

    fetch(`${apiUrl}/analytics/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page: window.location.pathname,
        referrer: document.referrer || undefined,
      }),
    }).catch(() => {
      // fire-and-forget — silently ignore errors
    });
  }, []);

  return null;
}
