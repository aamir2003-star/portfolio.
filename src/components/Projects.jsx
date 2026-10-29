import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects (5)' },
    { id: 'resume', label: 'Resume Showcases (3)' },
    { id: 'ai', label: 'AI & Systems (2)' },
    { id: 'fullstack', label: 'Full-Stack & Real-time (3)' },
  ];

  const filteredProjects = projects.filter((project) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'resume') return project.resumeProject;
    if (selectedCategory === 'ai') return project.category.includes('AI');
    if (selectedCategory === 'fullstack') return project.category.includes('Full-Stack') || project.category.includes('Real-Time');
    return true;
  });

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-brand-border/60 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-brand-border/60 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Chapter 02 // Curated Works & Engineering Systems</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">
            5 Featured Systems · Real-Time, Distributed & AI-Driven
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="mt-8 flex flex-wrap gap-2 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono rounded-md border transition-all duration-250 ${
                selectedCategory === cat.id
                  ? 'bg-brand-red text-white border-brand-red shadow-xs font-medium'
                  : 'bg-white border-brand-border text-brand-dark hover:border-brand-red/50 hover:bg-brand-cream/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-card group relative bg-white rounded-lg border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-subtle"
            >
              <div>
                {/* Card Top Meta */}
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/50 text-xs font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red" />
                    <span className="text-brand-muted uppercase tracking-wider">{project.category}</span>
                  </div>
                  {project.resumeProject && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-brand-cream border border-brand-border/80 text-brand-dark font-medium">
                      Featured in Resume
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <div className="mt-5">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark group-hover:text-brand-red transition-colors duration-250 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-serif text-brand-red/90 font-medium">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base font-serif text-brand-muted leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlight Bullets */}
                <div className="mt-5 space-y-2">
                  {project.highlights.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs font-serif text-brand-dark">
                      <span className="text-brand-red font-bold shrink-0">→</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-brand-cream/50 border border-brand-border/60 text-brand-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-8 pt-5 border-t border-brand-border/50 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-brand-dark hover:text-brand-red transition-colors"
                >
                  <span>View System Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-mono text-brand-muted hover:text-brand-dark transition-colors"
                  title="View GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for In-depth Architecture Dossier */}
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}

      </div>
    </section>
  );
}
