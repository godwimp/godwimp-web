import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProjectCard from "@/components/ProjectCard";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <ProjectList />
      <TechStack />
      <About />

      <footer className="py-10 border-t border-border">
        <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 48px' }}
          className="flex items-center justify-between">
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
        </div>
      </footer>
    </div>
  );
}
