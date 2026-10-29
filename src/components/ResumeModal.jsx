import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo, experiences, educationList, projects, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-brand-dark/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-lg border border-brand-border shadow-elevated flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="bg-[#F9F7F1] px-6 py-4 border-b border-brand-border flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
            <span className="font-mono text-xs uppercase tracking-wider text-brand-dark font-medium">
              Aamir Shaikh — Verified Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded border border-brand-border bg-white text-brand-dark hover:border-brand-red hover:text-brand-red transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-brand-muted hover:text-brand-dark hover:bg-brand-cream/60 transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-8 sm:p-12 overflow-y-auto space-y-8 font-serif text-brand-dark bg-white print:p-0">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-brand-border/80 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark tracking-tight">
              Aamir Shaikh
            </h1>
            <div className="text-xs sm:text-sm font-serif text-brand-muted flex flex-wrap justify-center items-center gap-x-3 gap-y-1">
              <a href={`mailto:${personalInfo.email}`} className="text-brand-dark hover:text-brand-red underline decoration-brand-border">
                {personalInfo.email}
              </a>
              <span>|</span>
              <span>{personalInfo.phone}</span>
              <span>|</span>
              <span>Location: {personalInfo.location}</span>
            </div>
            <div className="text-xs sm:text-sm font-serif text-brand-muted flex flex-wrap justify-center items-center gap-x-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline">
                github.com/aamir2003-star
              </a>
              <span>|</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-red underline">
                linkedin.com/in/shaikh-aamir
              </a>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand-dark font-bold pb-1.5 border-b-2 border-brand-dark mb-4">
              EXPERIENCE
            </h2>
            {experiences.map((exp, idx) => (
              <div key={idx} className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <div className="font-serif font-bold text-base sm:text-lg text-brand-dark">
                    {exp.company}
                  </div>
                  <div className="text-xs sm:text-sm font-serif text-brand-muted">
                    {exp.location}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between italic text-sm text-brand-dark font-medium -mt-2">
                  <div>{exp.role}</div>
                  <div className="text-xs sm:text-sm not-italic font-mono text-brand-muted">{exp.period}</div>
                </div>

                <ul className="list-disc list-outside pl-5 space-y-1.5 text-xs sm:text-sm text-brand-dark/90 leading-relaxed">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>
                      <strong>{item.title}:</strong> {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand-dark font-bold pb-1.5 border-b-2 border-brand-dark mb-4">
              PROJECTS
            </h2>
            <div className="space-y-4">
              {projects.filter(p => p.resumeProject).map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs sm:text-sm">
                  <div className="font-serif text-brand-dark">
                    <span className="font-bold">• {proj.title}</span>{' '}
                    <span className="italic text-brand-muted">({proj.techStack.join(', ')}):</span>{' '}
                    <span>{proj.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand-dark font-bold pb-1.5 border-b-2 border-brand-dark mb-4">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {educationList.map((edu, idx) => (
                <div key={idx} className="text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-brand-dark">
                    <span>{edu.institution}</span>
                    <span className="text-xs font-mono text-brand-muted">{edu.location}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between italic text-brand-muted">
                    <span>{edu.degree} — <span className="font-semibold text-brand-dark not-italic">{edu.grade}</span></span>
                    <span className="not-italic font-mono text-xs">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-widest text-brand-dark font-bold pb-1.5 border-b-2 border-brand-dark mb-4">
              SKILLS
            </h2>
            <div className="space-y-2 text-xs sm:text-sm font-serif">
              <div>
                <strong>• Languages:</strong> JavaScript, TypeScript, Python, SQL
              </div>
              <div>
                <strong>• Frontend:</strong> ReactJS, Next.js 16, React 19, HTML, CSS, Tailwind
              </div>
              <div>
                <strong>• Backend:</strong> Node.js, Express.js, RESTful APIs, Socket.io
              </div>
              <div>
                <strong>• Database:</strong> MongoDB, PostgreSQL
              </div>
              <div>
                <strong>• DevOps & Tools:</strong> Docker, Git, JWT Authentication, OAuth, Axios
              </div>
              <div>
                <strong>• AI Tools:</strong> Claude, Cursor, Google Antigravity, OpenAI Codex
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
