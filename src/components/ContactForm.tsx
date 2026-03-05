'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.status === 429) {
        setErrorMsg('Too many requests — please wait a few minutes before trying again.');
        setStatus('error');
        return;
      }

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(json?.message ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setErrorMsg('Network error — please check your connection.');
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '10px 14px',
    color: 'var(--text)',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    color: 'var(--muted)',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    display: 'block',
    marginBottom: 6,
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '32px 0', textAlign: 'center' }}>
        <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
        <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: 14 }}>Message sent!</p>
        <p style={{ color: 'var(--muted)', fontSize: 12, marginTop: 6 }}>I&apos;ll get back to you soon.</p>
        <button
          onClick={() => setStatus('idle')}
          style={{ marginTop: 20, fontSize: 12, color: 'var(--muted)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            maxLength={100}
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            style={inputStyle}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Message</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={3000}
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="What's on your mind?"
          style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
        />
      </div>

      {status === 'error' && (
        <p style={{ fontSize: 12, color: '#ff6b6b', margin: 0 }}>{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          alignSelf: 'flex-start',
          padding: '10px 24px',
          background: status === 'loading' ? 'var(--border)' : 'var(--accent)',
          color: '#0a0a0f',
          border: 'none',
          borderRadius: 8,
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          fontWeight: 700,
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'opacity 0.2s',
          opacity: status === 'loading' ? 0.7 : 1,
        }}
      >
        <Send size={13} />
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
