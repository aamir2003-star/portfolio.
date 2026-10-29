import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code, Server, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const tabIcons = {
    all: Sparkles,
    languages: Code,
    frontend: Code,
    backend: Server,
    database: Database,
    tools: Wrench,
    ai: Sparkles
  };

  const filteredCategories = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === activeTab);

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-brand-border/60 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-brand-border/60 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Chapter 03 // Technical Repertoire & Tools</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
              Skills & Engineering Stack
            </h2>
          </div>
          <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">
            Verified Stack from Production & Project Implementations
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="mt-8 flex flex-wrap gap-2 pb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-mono rounded-md border transition-all duration-250 ${
              activeTab === 'all'
                ? 'bg-brand-red text-white border-brand-red shadow-xs font-medium'
                : 'bg-white border-brand-border text-brand-dark hover:border-brand-red/50 hover:bg-brand-cream/30'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-4 py-2 text-xs font-mono rounded-md border transition-all duration-250 ${
                activeTab === cat.category
                  ? 'bg-brand-red text-white border-brand-red shadow-xs font-medium'
                  : 'bg-white border-brand-border text-brand-dark hover:border-brand-red/50 hover:bg-brand-cream/30'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredCategories.map((category) => (
            <div
              key={category.category}
              className="bg-white rounded-lg border border-brand-border p-6 shadow-xs hover:border-brand-red/70 transition-all duration-250 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                  <h3 className="font-serif font-bold text-lg text-brand-dark">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[11px] text-brand-muted uppercase tracking-wider">
                    {category.skills.length} competencies
                  </span>
                </div>

                {/* Skills List */}
                <div className="mt-4 space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2.5 rounded-md bg-[#FBF9F5] border border-brand-border/50 hover:bg-brand-cream/30 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        {skill.primary ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-border shrink-0" />
                        )}
                        <span className="font-serif text-sm font-medium text-brand-dark">
                          {skill.name}
                        </span>
                      </div>
                      
                      <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded ${
                        skill.primary
                          ? 'bg-brand-cream text-brand-dark font-medium border border-brand-border/60'
                          : 'text-brand-muted'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-note */}
              <div className="mt-5 pt-3 border-t border-brand-border/40 text-[11px] font-mono text-brand-muted flex items-center justify-between">
                <span>Production Tested</span>
                <span className="text-brand-red font-semibold">100% Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* AI & Automation Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-brand-cream/50 border border-brand-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red flex items-center gap-1.5 font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Modern AI Developer Workflows</span>
            </div>
            <p className="font-serif text-base sm:text-lg text-brand-dark">
              Daily power user of Google Gemini API, Claude, Google Antigravity, and Cursor for high-velocity software engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            {['Gemini API', 'Claude', 'Google Antigravity', 'Cursor AI', 'Docker'].map((tool) => (
              <span key={tool} className="px-3 py-1 bg-white border border-brand-border text-xs font-mono text-brand-dark rounded">
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
