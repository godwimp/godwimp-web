import ProjectCard from './ProjectCard';
import { Project } from '@/types';
import fetchAPI from '@/lib/api';

export default async function ProjectList() {
  let projects: Project[] = [];
  let error: string | null = null;

  try {
    const response = await fetchAPI('/projects');
    if (Array.isArray(response)) {
      projects = response;
    } else if (Array.isArray(response?.data?.data)) {
      projects = response.data.data;
    } else if (Array.isArray(response?.projects)) {
      projects = response.projects;
    } else {
      projects = [];
    }
  } catch (err) {
    error = err instanceof Error ? err.message : 'Failed to fetch projects';
  }

  return (
    <section id="projects" className="py-10! border-t border-border">
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '0 48px' }}>
        <div className="flex items-baseline gap-4 mb-10!">
          <span className="text-xs text-accent tracking-[0.1em]">01</span>
          <h2 className="font-sans text-4xl font-bold tracking-tight">Projects</h2>
        </div>

        {error ? (
          <div className="bg-surface border border-border rounded-xl p-7 text-center">
            <p className="text-muted">Projects will be displayed here once the backend API is connected.</p>
            <p className="text-xs text-muted mt-2">({error})</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="bg-surface border border-border rounded-xl p-7 text-center">
            <p className="text-muted">No projects available yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
