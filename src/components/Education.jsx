import React from 'react';
import { educationList } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 border-b border-brand-border/60 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-brand-border/60 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Chapter 04 // Academic Foundation & Specialization</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
              Education & Academics
            </h2>
          </div>
          <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">
            Rigorous Technical & Analytical Training
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-brand-border p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-brand-red transition-all duration-250 group"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/50 text-xs font-mono">
                  <span className="flex items-center gap-1.5 text-brand-muted">
                    <Calendar className="w-3.5 h-3.5 text-brand-red" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-brand-cream text-brand-dark border border-brand-border/60">
                    {edu.grade}
                  </span>
                </div>

                {/* Degree & College */}
                <div className="mt-5">
                  <div className="flex items-center space-x-2 text-brand-red mb-1">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Degree</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-red transition-colors duration-250">
                    {edu.degree}
                  </h3>
                  <div className="mt-1 text-base font-serif text-brand-muted flex items-center gap-2">
                    <span>{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-xs font-mono">
                      <MapPin className="w-3 h-3 text-brand-red" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-6 space-y-2.5">
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm font-serif text-brand-muted">
                      <span className="text-brand-red font-bold shrink-0 mt-0.5">▪</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Badge */}
              <div className="mt-8 pt-4 border-t border-brand-border/50 flex items-center justify-between text-xs font-mono text-brand-muted">
                <span>Verified Credential</span>
                <span className="text-brand-dark font-medium">{edu.institution.split(',')[0]}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
