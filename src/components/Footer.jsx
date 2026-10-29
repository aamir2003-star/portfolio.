import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1B1A17] text-[#E6E1D2] pt-16 pb-12 border-t border-[#33302B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#33302B]">
          
          {/* Identity & Colophon */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-md bg-brand-red text-white font-serif font-bold text-lg flex items-center justify-center">
                A
              </span>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="font-serif text-sm text-[#A8A294] max-w-sm leading-relaxed">
              MERN Stack Developer & Full-Stack Systems Engineer. 
              Anchored on Georgia typography, primary crimson (#b3261e), and responsive real-time motion.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-[#A8A294]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Caregiver Archetype // Warm · Composed · Bold · Timeless</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red font-semibold">
              Index Sitemap
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#A8A294]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">00 // Essence & Bio</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">01 // Career & TCE Experience</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">02 // Selected Works (5 Projects)</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">03 // Verified Skills Taxonomy</a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">04 // MCA & Academics</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">05 // Inquiries & Contact</a>
              </li>
            </ul>
          </div>

          {/* Brand Specimen Stamp */}
          <div className="md:col-span-4 space-y-3 bg-[#24221D] p-5 rounded-lg border border-[#3A362F]">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#A8A294] uppercase tracking-wider">Design System Spec</span>
              <span className="text-brand-red font-bold">#B3261E</span>
            </div>

            <div className="flex space-x-1.5 py-1">
              <span className="w-6 h-6 rounded bg-[#B3261E]" title="Primary #B3261E" />
              <span className="w-6 h-6 rounded bg-[#E6E1D2]" title="Secondary #E6E1D2" />
              <span className="w-6 h-6 rounded bg-[#F9F7F1]" title="Background #F9F7F1" />
              <span className="w-6 h-6 rounded bg-[#6F6B5F]" title="Neutral #6F6B5F" />
              <span className="w-6 h-6 rounded bg-[#1B1A17] border border-[#444]" title="Dark #1B1A17" />
            </div>

            <div className="text-[11px] font-mono text-[#A8A294] space-y-1 pt-1">
              <div className="flex justify-between">
                <span>Accessibility:</span>
                <span className="text-emerald-400 font-medium">100% WCAG 2.1 Contrast</span>
              </div>
              <div className="flex justify-between">
                <span>System Grade:</span>
                <span className="text-white font-medium">A 98 / 100</span>
              </div>
              <div className="flex justify-between">
                <span>Architecture:</span>
                <span className="text-white">React 18 + Vite + Tailwind</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A8A294]">
          <div>
            © 2026 {personalInfo.name}. All rights reserved. Ahmedabad, India.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded border border-[#3A362F] hover:border-brand-red text-[#E6E1D2] hover:text-white transition-colors"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-red" />
          </button>
        </div>

      </div>
    </footer>
  );
}
