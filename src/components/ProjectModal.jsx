import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Cpu, ArrowRight, Layers, FileCode2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-brand-dark/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-brand-bg rounded-lg border border-brand-border shadow-elevated overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 bg-brand-bg/95 backdrop-blur-md px-6 py-4 border-b border-brand-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
            <span className="font-mono text-xs uppercase tracking-wider text-brand-muted">
              Project Dossier // {project.category}
            </span>
            {project.resumeProject && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-brand-cream border border-brand-border text-brand-dark">
                Resume Project
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-brand-muted hover:text-brand-dark hover:bg-brand-cream/60 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Title & Subtitle */}
          <div>
            <h3 className="text-2xl sm:text-4xl font-serif font-bold text-brand-dark">
              {project.title}
            </h3>
            <p className="mt-2 text-base sm:text-lg font-serif text-brand-red">
              {project.subtitle}
            </p>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-brand-muted block mb-2">
              Technologies & Frameworks
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-sm bg-white border border-brand-border text-xs font-mono text-brand-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview Section */}
          <div className="space-y-3 bg-white p-5 rounded-md border border-brand-border">
            <h4 className="font-serif font-bold text-lg text-brand-dark flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-brand-red" />
              <span>Architectural Overview</span>
            </h4>
            <p className="text-sm sm:text-base font-serif text-brand-muted leading-relaxed">
              {project.detailedOverview}
            </p>
          </div>

          {/* Key Engineering Deliverables */}
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-lg text-brand-dark flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-red" />
              <span>Key Technical Highlights & Outcomes</span>
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3.5 rounded-md bg-brand-cream/30 border border-brand-border/70"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-red text-white text-[11px] font-mono flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    {index + 1}
                  </span>
                  <p className="text-sm font-serif text-brand-dark leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture Flow */}
          {project.architecture && (
            <div className="p-4 rounded-md bg-brand-dark text-white space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-brand-cream/70 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-red" />
                Data & Execution Pipeline
              </span>
              <p className="text-xs sm:text-sm font-mono text-brand-cream/90 leading-relaxed overflow-x-auto py-1">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Actions & Links */}
          <div className="pt-4 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-md bg-brand-red text-white text-xs font-mono font-medium hover:bg-brand-red-hover transition-colors shadow-xs"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono rounded-md border border-brand-border text-brand-dark hover:bg-brand-cream transition-colors"
            >
              Close Dossier
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
