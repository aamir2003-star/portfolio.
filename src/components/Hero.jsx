import React from 'react';
import { ArrowDownRight, Sparkles, MapPin, Code2, Cpu, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-brand-border/60 overflow-hidden bg-brand-bg">
      
      {/* Editorial Watermark / Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cream/60 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-brand-red/5 rounded-full blur-2xl -z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Masthead Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-brand-border/40 text-xs font-mono text-brand-muted">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-brand-dark font-medium uppercase tracking-wider">{personalInfo.status}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-brand-red" />
              <span>{personalInfo.location}</span>
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">EST. 2026 ARCHIVE</span>
          </div>
        </div>

        {/* Hero Title & Identity */}
        <div className="mt-8 md:mt-12 max-w-5xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm bg-brand-cream/80 border border-brand-border/80 text-brand-dark text-xs font-mono uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-red" />
            <span>Full-Stack & MERN Stack Systems Developer</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-serif font-bold text-brand-dark tracking-tight leading-[1.05]">
            Engineering resilient, <br className="hidden sm:inline" />
            <span className="text-brand-red italic font-normal">real-time</span> systems & intelligent AI tools.
          </h1>

          <p className="mt-6 md:mt-8 text-lg sm:text-xl md:text-2xl font-serif text-brand-muted max-w-3xl leading-relaxed">
            I am <strong className="text-brand-dark font-semibold">Aamir Shaikh</strong>, a full-stack engineer experienced in building 
            production MERN applications, high-concurrency <span className="text-brand-dark underline decoration-brand-border decoration-2">Socket.io</span> pipelines, 
            and automated AI reviewer engines with Google Gemini.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-md bg-brand-red text-white font-mono text-sm font-medium hover:bg-brand-red-hover transition-all duration-250 shadow-xs hover:shadow-subtle group"
            >
              <span>Explore Selected Works</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-md bg-brand-surface border border-brand-border text-brand-dark font-mono text-sm font-medium hover:border-brand-red hover:text-brand-red transition-all duration-250 shadow-xs"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-md bg-brand-cream/60 border border-brand-border/70 text-brand-dark font-mono text-sm hover:bg-brand-cream transition-all duration-250"
            >
              <FileText className="w-4 h-4 text-brand-red" />
              <span>Full Resume</span>
            </button>
          </div>
        </div>

        {/* Highlights Strip */}
        <div className="mt-16 pt-8 border-t border-brand-border/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="font-serif font-bold text-2xl sm:text-3xl text-brand-dark tracking-tight">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
