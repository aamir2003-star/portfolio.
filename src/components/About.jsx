import React from 'react';
import { personalInfo, brandTokens } from '../data/portfolioData';
import { Compass, CheckCircle2, Terminal, Layers, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  const personalityPillars = [
    {
      title: "Warm & Nurturing",
      tag: "Caregiver Archetype",
      desc: "Thoughtful developer tooling, clean user experiences, and empathetic team collaboration that prioritizes clarity over complexity."
    },
    {
      title: "Composed & Resilient",
      tag: "Architectural Focus",
      desc: "Constructing deterministic distributed pipelines, concurrency-controlled Socket.io channels, and robust transaction rollbacks."
    },
    {
      title: "Bold & Decisive",
      tag: "Applied AI",
      desc: "Integrating state-of-the-art LLMs (Gemini API, Claude) directly into developer loops to automate repetitive review and analysis burdens."
    },
    {
      title: "Timeless Craft",
      tag: "Foundations",
      desc: "Grounded in deep algorithmic rigor, database indexing, secure authentication standards, and clean modular codebases."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-b border-brand-border/60 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-brand-border/60 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Chapter 00 // Essence & Background</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
              About Aamir Shaikh
            </h2>
          </div>
          <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">
            Curated Developer Dossier · Ahmedabad, India
          </p>
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-serif text-brand-dark leading-snug">
              Bridging robust backend engineering with elegant frontend craftsmanship.
            </h3>
            
            {personalInfo.aboutParagraphs.map((para, index) => (
              <p key={index} className="text-base sm:text-lg font-serif text-brand-muted leading-relaxed">
                {para}
              </p>
            ))}

            {/* Core Competency Highlights */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-md border border-brand-border bg-white shadow-xs">
                <div className="flex items-center space-x-2 text-brand-red mb-1">
                  <Terminal className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">Full-Stack MERN</span>
                </div>
                <p className="text-sm font-serif text-brand-muted">
                  End-to-end features using React, Next.js 16, Node.js, Express, and MongoDB.
                </p>
              </div>

              <div className="p-4 rounded-md border border-brand-border bg-white shadow-xs">
                <div className="flex items-center space-x-2 text-brand-red mb-1">
                  <Layers className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">Real-Time Concurrency</span>
                </div>
                <p className="text-sm font-serif text-brand-muted">
                  Socket.io event streaming backed by transaction-level MongoDB controls.
                </p>
              </div>

              <div className="p-4 rounded-md border border-brand-border bg-white shadow-xs">
                <div className="flex items-center space-x-2 text-brand-red mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">Auth & Resilience</span>
                </div>
                <p className="text-sm font-serif text-brand-muted">
                  JWT rotation, OAuth (Google/GitHub), and strict API schema validation.
                </p>
              </div>

              <div className="p-4 rounded-md border border-brand-border bg-white shadow-xs">
                <div className="flex items-center space-x-2 text-brand-red mb-1">
                  <HeartHandshake className="w-4 h-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">AI Integrations</span>
                </div>
                <p className="text-sm font-serif text-brand-muted">
                  Multi-model Gemini chains, real-time streaming reviews, and prompt tooling.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Dossier Card */}
          <div className="lg:col-span-5 bg-brand-cream/50 rounded-lg border border-brand-border p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-brand-border/60">
              <span className="font-mono text-xs uppercase tracking-widest text-brand-dark font-medium">
                System Fingerprint
              </span>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-brand-red text-white">
                Grade A 98/100
              </span>
            </div>

            {/* Personality Axes Adjectives */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-muted block">
                Brand Core Pillars:
              </span>
              <div className="space-y-3">
                {personalityPillars.map((pillar, i) => (
                  <div key={i} className="bg-white/80 p-3.5 rounded-md border border-brand-border/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-serif font-bold text-sm text-brand-dark">{pillar.title}</span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-cream text-brand-dark">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="text-xs font-serif text-brand-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Metadata Info */}
            <div className="pt-4 border-t border-brand-border/60 text-xs font-mono space-y-2 text-brand-muted">
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-brand-dark font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex justify-between">
                <span>Education:</span>
                <span className="text-brand-dark font-medium">MCA (2024–2026, 8.24 CPI)</span>
              </div>
              <div className="flex justify-between">
                <span>Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-brand-red underline hover:text-brand-red-hover">
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
