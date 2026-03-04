import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import ProjectList from '@/components/ProjectList';
import TechStack from '@/components/TechStack';
import About from '@/components/About';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <ProjectList />
      <TechStack />
      <About />

      <footer className="px-12 py-10 border-t border-border flex items-center justify-between">
        <span className="text-[13px] text-muted">
          godwimp.me · available for freelance & full-time
        </span>
        <div className="flex gap-6">
          <a
            href="https://github.com/godwimp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/~godwimp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted hover:text-accent transition-colors"
          >
            NPM
          </a>
          <a
            href="https://linkedin.com/in/fadhillahmaulana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}
