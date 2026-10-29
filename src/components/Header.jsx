import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navItems = [
    { label: '00 Essence', href: '#about' },
    { label: '01 Career', href: '#experience' },
    { label: '02 Works', href: '#projects' },
    { label: '03 Skills', href: '#skills' },
    { label: '04 Education', href: '#education' },
    { label: '05 Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F9F7F1]/95 backdrop-blur-md border-b border-brand-border/60 shadow-xs py-3' 
          : 'bg-[#F9F7F1] border-b border-brand-border/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Identity */}
          <a href="#" className="group flex items-center space-x-3">
            <span className="w-8 h-8 rounded-md bg-brand-red text-brand-bg font-serif font-bold text-lg flex items-center justify-center transition-transform group-hover:scale-105 duration-250">
              A
            </span>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-brand-dark tracking-tight leading-tight group-hover:text-brand-red transition-colors duration-250">
                {personalInfo.name}
              </span>
              <span className="editorial-tag text-[10px] text-brand-muted">
                Ahmedabad, IN · MERN Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-wider font-mono text-brand-muted hover:text-brand-red transition-colors duration-250"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions: Resume & Quick Email */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center space-x-1.5 px-3 py-1.5 text-xs font-mono rounded-md border border-brand-border hover:border-brand-red text-brand-dark hover:text-brand-red transition-all duration-250 bg-brand-surface"
              title="Copy Email Address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy Email'}</span>
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center space-x-1.5 px-4 py-1.5 text-xs font-mono font-medium rounded-md bg-brand-red text-white hover:bg-brand-red-hover transition-all duration-250 shadow-xs hover:shadow-subtle"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md border border-brand-border text-brand-dark hover:bg-brand-cream/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-brand-border bg-[#F9F7F1] px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono uppercase tracking-wider text-brand-dark hover:text-brand-red py-1 border-b border-brand-border/30"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2">
            <button
              onClick={() => {
                handleCopyEmail();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 text-xs font-mono rounded-md border border-brand-border bg-white text-brand-dark"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              <span>{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
            </button>

            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="w-full inline-flex items-center justify-center space-x-2 px-4 py-2 text-xs font-mono font-medium rounded-md bg-brand-red text-white"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
