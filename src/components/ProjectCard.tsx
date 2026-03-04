'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface border border-border rounded-xl p-7 transition-colors hover:border-accent"
    >
      <div className="flex items-start justify-between mb-4">
        {project.category && (
          <span className="text-[10px] text-accent tracking-[0.15em] uppercase border border-[rgba(0,255,136,0.2)] px-2.5 py-1 rounded-full">
            {project.category}
          </span>
        )}
        {project.isFeatured && (
          <span className="text-xs text-muted">⭐ Featured</span>
        )}
      </div>

      <h3 className="font-sans text-[22px] font-bold mb-2 tracking-tight">
        {project.title}
      </h3>

      <p className="text-[13px] text-muted leading-[1.7] mb-5">
        {project.description}
      </p>

      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-5">
          <div className="text-[11px] text-accent2 tracking-[0.1em] uppercase mb-2">
            Highlights
          </div>
          <ul className="text-[13px] text-text leading-[1.6] space-y-1 pl-4">
            {project.highlights.map((highlight, index) => (
              <li key={index} className="list-disc">{highlight}</li>
            ))}
          </ul>
        </div>
      )}

      {project.techStack && project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-[11px] px-2 py-1 bg-[rgba(0,255,136,0.1)] text-accent rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 pt-5 border-t border-border">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted hover:text-accent transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.npmUrl && (
          <a
            href={project.npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted hover:text-accent transition-colors"
          >
            NPM →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted hover:text-accent transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
