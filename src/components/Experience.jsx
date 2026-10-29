import React, { useState } from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const [activeItem, setActiveItem] = useState(0);
  const exp = experiences[0];

  return (
    <section id="experience" className="py-24 md:py-32 border-b border-brand-border/60 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-brand-border/60 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Chapter 01 // Career & Industry Experience</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
              Work Experience
            </h2>
          </div>
          <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">
            Hands-on Engineering in Production Environments
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="mt-12 bg-white rounded-lg border border-brand-border shadow-subtle overflow-hidden">
          
          {/* Header of Experience Card */}
          <div className="p-6 sm:p-8 bg-brand-cream/40 border-b border-brand-border flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded text-xs font-mono font-medium bg-brand-red text-white uppercase tracking-wider">
                  {exp.type}
                </span>
                <span className="font-mono text-xs text-brand-muted flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-red" />
                  <span>{exp.period}</span>
                </span>
                <span className="font-mono text-xs text-brand-muted flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  <span>{exp.location}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark">
                {exp.role}
              </h3>
              <div className="text-lg font-serif text-brand-red font-medium mt-1">
                {exp.company}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 max-w-sm">
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-white border border-brand-border/80 text-brand-dark"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Detailed Contributions Grid */}
          <div className="p-6 sm:p-8">
            <h4 className="text-sm font-mono uppercase tracking-widest text-brand-muted mb-6 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-red" />
              <span>Production Milestones & Engineering Deliverables</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {exp.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-md border border-brand-border/70 bg-[#FBF9F5] hover:border-brand-red transition-all duration-250 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start space-x-3 mb-2">
                      <span className="w-6 h-6 rounded-full bg-brand-cream text-brand-dark font-mono text-xs flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-brand-red group-hover:text-white transition-colors duration-250 font-bold">
                        {`0${idx + 1}`}
                      </span>
                      <h5 className="font-serif font-bold text-base sm:text-lg text-brand-dark leading-snug">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-sm font-serif text-brand-muted leading-relaxed pl-9">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact Metric Callout */}
            <div className="mt-8 p-4 rounded-md bg-brand-cream/60 border border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0" />
                <span className="text-sm font-serif text-brand-dark font-medium">
                  Focused on production stability, zero-downtime authentication refresh, and high-concurrency client updates.
                </span>
              </div>
              <a
                href="#projects"
                className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-brand-red hover:underline shrink-0"
              >
                <span>See Projects Built with This Stack</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
