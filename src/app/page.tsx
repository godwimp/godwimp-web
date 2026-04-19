import About from "@/components/About";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";
import VisitTracker from "@/components/VisitTracker";
import GithubStats from "@/components/GithubStats";
import PinnedRepos from "@/components/PinnedRepos";
import ContributionGraph from "@/components/ContributionGraph";
import fetchAPI from "@/lib/api";
import { GithubStats as GithubStatsType } from "@/types";

async function getGithubStats(): Promise<GithubStatsType | null> {
  try {
    return await fetchAPI('/github', {
      next: { revalidate: 21600 },
    } as RequestInit);
  } catch (e) {
    console.error('[GitHub] Failed to fetch stats:', e);
    return null;
  }
}

export default async function Home() {
  const github = await getGithubStats();

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <VisitTracker />
      <Nav />
      <Hero />
      <ProjectList />
      <TechStack />

      {/* GitHub Section */}
      <section>
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '96px 48px' }}>
          <div className="inline-flex items-center gap-2 text-xs text-accent tracking-[0.15em] uppercase mb-6">
            <span className="w-6 h-px bg-accent" />
            GitHub Activity
          </div>
          <h2 className="font-sans text-[clamp(28px,4vw,48px)] font-extrabold leading-tight tracking-tight mb-12">
            Code, commits &amp;{' '}
            <em className="not-italic text-transparent [-webkit-text-stroke:1px_rgba(0,255,136,0.5)]">
              open source
            </em>
          </h2>

          {github ? (
            <div className="space-y-6">
              <GithubStats stats={github} />
              <ContributionGraph
                weeks={github.contributionWeeks}
                totalCommits={github.totalCommitsThisYear}
              />
              {github.pinnedRepos.length > 0 && (
                <div>
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-muted mb-4">
                    Pinned Repositories
                  </p>
                  <PinnedRepos repos={github.pinnedRepos} />
                </div>
              )}
            </div>
          ) : (
            <div style={{
              background: '#111118',
              border: '1px solid #1e1e2e',
              borderRadius: 12,
              padding: '40px',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: 13, color: '#5a5a7a' }}>
                GitHub data unavailable right now.{' '}
                <a
                  href="https://github.com/godwimp"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00ff88', textDecoration: 'none' }}
                >
                  View profile directly →
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      <About />

      <footer className="py-10! border-t border-border">
        <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 48px' }} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <span className="text-[13px] text-muted">
            godwimp.me · available for freelance &amp; full-time
          </span>
          <div className="flex gap-6">
            <a
              href="https://github.com/godwimp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-[13px] text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/fadhillahmaulana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
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