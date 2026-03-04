'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types';
import { ExternalLink, Github, Package, Star } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    SECURITY: 'bg-red-500/10 text-red-400 border-red-500/20',
    WEB: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    PACKAGE: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    DATA: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  };

  const categoryStyle =
    categoryColors[project.category?.toUpperCase() ?? ''] ||
    'bg-accent/10 text-accent border-accent/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className=" group relative flex flex-col bg-surface border border-border rounded-2xl p-6! transition-all duration-300 hover:border-white/10 hover:shadow-2xl hover:shadow-black/40 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Top Row: Category + Featured */}
      <div className="flex items-center justify-between mb-4">
        {project.category && (
          <span className={`text-[10px] font-semibold tracking-widest uppercase px-4.5 py-1 rounded-4xl border ${categoryStyle}`}>
            {project.category}
          </span>
        )}
        {project.isFeatured && (
          <span className="flex items-center gap-1 text-[11px] text-yellow-400/80 font-medium">
            <Star size={11} fill="currentColor" />
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-sans text-xl font-bold mb-2 text-white leading-snug group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[13px] text-muted leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <div className="mb-5 space-y-2">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-white/30">Highlights</p>
          <ul className="space-y-1.5">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex gap-2 text-[12.5px] text-white/60 leading-relaxed">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent/60 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex-1" />

      {/* Tech Stack */}
      {project.techStack && project.techStack.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech, i) => (
            <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/5 text-white/50 border border-white/8 font-mono tracking-tight">
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-white/5">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] text-white/40 hover:text-white transition-colors duration-200 font-medium">
            <Github size={13} />
            GitHub
          </a>
        )}
        {project.npmUrl && (
          <a href={project.npmUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] text-white/40 hover:text-purple-400 transition-colors duration-200 font-medium">
            <Package size={13} />
            NPM
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[12px] text-white/40 hover:text-blue-400 transition-colors duration-200 font-medium">
            <ExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}
