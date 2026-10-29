import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark selection:bg-brand-red selection:text-white flex flex-col font-serif">
      {/* Editorial Navigation Header */}
      <Header onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* Chapter 00: Essence & Bio */}
        <About />

        {/* Chapter 01: Career & Production Experience */}
        <Experience />

        {/* Chapter 02: Selected Works (5 Projects) */}
        <Projects />

        {/* Chapter 03: Skills & Engineering Taxonomy */}
        <Skills />

        {/* Chapter 04: Academic Foundation */}
        <Education />

        {/* Chapter 05: Contact & Direct Inquiries */}
        <Contact />
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />

      {/* Full Curriculum Vitae Modal */}
      {resumeModalOpen && (
        <ResumeModal onClose={() => setResumeModalOpen(false)} />
      )}
    </div>
  );
}
