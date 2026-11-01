import type { Project } from '@/types';
import { fetchProjects } from '@/lib/api';

// Badge style for each project status
const statusStyles: Record<Project['status'], { label: string; className: string }> = {
  completed: {
    label: 'Completed',
    className: 'text-green-400 bg-green-400/10 border border-green-400/20',
  },
  'in-progress': {
    label: 'In Progress',
    className: 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/20',
  },
  demo: {
    label: 'Demo',
    className: 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20',
  },
};

// A single project card
function ProjectCard({ project }: { project: Project }) {
  const status = statusStyles[project.status];

  return (
    <article className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col hover:border-purple-500/40 transition-colors">

      {/* Name + status badge */}
      <div className="flex items-start justify-between mb-3 gap-2">
        <h3 className="text-slate-100 font-semibold text-base leading-snug">{project.name}</h3>
        <span className={`shrink-0 text-xs px-2 py-0.5 rounded-full font-medium ${status.className}`}>
          {status.label}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-0.5 rounded-md bg-slate-800 border border-slate-700 text-slate-300">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-400 hover:text-slate-100 transition-colors"
        >
          🔗 Repository
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
          >
            🚀 Live Demo
          </a>
        )}

        {project.contractAddress && project.explorerUrl && (
          <a
            href={project.explorerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ⛓️ Contract
          </a>
        )}
      </div>

    </article>
  );
}

export default async function Projects() {
  const projects = await fetchProjects();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6" />
          <p className="text-slate-400 text-sm">
            A selection of full-stack and Web3 projects I've been building.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
