'use client';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-12 py-5 bg-[rgba(10,10,15,0.85)] backdrop-blur-xl border-b border-[#1e1e2e]">
      <div className="font-sans font-extrabold text-lg tracking-tight">
        godwimp<span className="text-accent">.me</span>
      </div>
      <ul className="flex gap-8 list-none">
        <li>
          <a
            href="#projects"
            className="text-muted text-[13px] tracking-wider no-underline transition-colors hover:text-accent"
          >
            PROJECTS
          </a>
        </li>
        <li>
          <a
            href="#stack"
            className="text-muted text-[13px] tracking-wider no-underline transition-colors hover:text-accent"
          >
            STACK
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-muted text-[13px] tracking-wider no-underline transition-colors hover:text-accent"
          >
            ABOUT
          </a>
        </li>
      </ul>
    </nav>
  );
}
