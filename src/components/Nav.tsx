'use client';

export default function Nav() {
  return (
    <nav style={{ zIndex: 100 }} className="fixed top-0 left-0 right-0 bg-[rgba(10,10,15,0.85)] backdrop-blur-xl border-b border-border">
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '20px 48px' }} className="flex items-center justify-between">
        <div className="font-mono font-extrabold text-lg tracking-tight">
          <a href="/" className="no-underline hover:text-accent transition-colors" aria-label="godwimp.me home">
            godwimp<span className="text-accent">.me</span>
          </a>
        </div>
        <ul className="flex gap-4 sm:gap-8 list-none">
          <li><a href="#projects" className="text-muted text-[12px] sm:text-[13px] tracking-wider no-underline transition-colors hover:text-accent">PROJECTS</a></li>
          <li><a href="#stack" className="text-muted text-[12px] sm:text-[13px] tracking-wider no-underline transition-colors hover:text-accent">STACK</a></li>
          <li><a href="#about" className="text-muted text-[12px] sm:text-[13px] tracking-wider no-underline transition-colors hover:text-accent">ABOUT</a></li>
        </ul>
      </div>
    </nav>
  );
}
