import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Full-Time Opportunity',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate responsive submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Also open pre-filled mail client
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject} - from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Aamir,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email})`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-brand-border/60 bg-brand-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-brand-border/60 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-brand-red flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <span>Chapter 05 // Inquiries & Communication</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
              Get in Touch
            </h2>
          </div>
          <p className="text-xs font-mono text-brand-muted uppercase tracking-wider">
            Responses typically within 24 hours
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-start">
          
          {/* Left Column: Contact Cards & Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-lg border border-brand-border p-6 sm:p-8 shadow-xs">
              <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2">
                Let's discuss opportunities.
              </h3>
              <p className="font-serif text-sm sm:text-base text-brand-muted leading-relaxed mb-6">
                I am actively considering full-time MERN stack, Full-Stack, and software engineering roles. 
                Feel free to email me directly or schedule a technical conversation.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <div className="p-4 rounded-md bg-brand-cream/40 border border-brand-border/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3 overflow-hidden">
                    <div className="w-9 h-9 rounded-md bg-brand-red text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-brand-muted">Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`} 
                        className="font-serif font-medium text-sm text-brand-dark hover:text-brand-red transition-colors truncate block"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.email, 'email')}
                    className="p-2 rounded hover:bg-white text-brand-muted hover:text-brand-dark transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-md bg-brand-cream/40 border border-brand-border/80 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-md bg-brand-dark text-white flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-brand-muted">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${personalInfo.phone}`} 
                        className="font-serif font-medium text-sm text-brand-dark hover:text-brand-red transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                    className="p-2 rounded hover:bg-white text-brand-muted hover:text-brand-dark transition-colors shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-md bg-brand-cream/40 border border-brand-border/80 flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-md bg-brand-muted text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand-muted">Location</div>
                    <div className="font-serif font-medium text-sm text-brand-dark">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Profiles */}
              <div className="mt-6 pt-6 border-t border-brand-border/60">
                <span className="text-[11px] font-mono uppercase tracking-wider text-brand-muted block mb-3">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 rounded-md border border-brand-border hover:border-brand-red bg-white text-xs font-mono text-brand-dark hover:text-brand-red transition-all shadow-xs"
                  >
                    <GithubIcon className="w-4 h-4 text-brand-dark" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 p-3 rounded-md border border-brand-border hover:border-brand-red bg-white text-xs font-mono text-brand-dark hover:text-brand-red transition-all shadow-xs"
                  >
                    <LinkedinIcon className="w-4 h-4 text-brand-dark" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-lg border border-brand-border p-6 sm:p-8 shadow-xs">
            <h3 className="font-serif font-bold text-2xl text-brand-dark mb-2">
              Send a Direct Dispatch
            </h3>
            <p className="font-serif text-sm text-brand-muted mb-6">
              Fill in the parameters below. Clicking Send initiates an automated message dispatch.
            </p>

            {submitted ? (
              <div className="p-6 rounded-md bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-serif font-bold text-lg text-emerald-900">
                  Message Prepared & Dispatched!
                </h4>
                <p className="font-serif text-sm text-emerald-800 max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Your default mail client has also been opened to finalize the dispatch to <strong>{personalInfo.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-mono rounded bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-dark mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-brand-border focus:border-brand-red focus:outline-none text-sm font-serif text-brand-dark bg-brand-bg/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-brand-dark mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-md border border-brand-border focus:border-brand-red focus:outline-none text-sm font-serif text-brand-dark bg-brand-bg/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-brand-dark mb-1">
                    Subject / Topic
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-brand-border focus:border-brand-red focus:outline-none text-sm font-serif text-brand-dark bg-brand-bg/50"
                  >
                    <option value="Full-Time Opportunity">Full-Time Software Engineering Opportunity</option>
                    <option value="Contract / Project Collaboration">Contract / Project Collaboration</option>
                    <option value="MERN / Real-Time Architecture">MERN / Real-Time Architecture Inquiry</option>
                    <option value="General Technical Chat">General Technical Discussion</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-brand-dark mb-1">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your team, tech stack, or the challenges you are solving..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-md border border-brand-border focus:border-brand-red focus:outline-none text-sm font-serif text-brand-dark bg-brand-bg/50 resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 rounded-md bg-brand-red text-white font-mono text-sm font-medium hover:bg-brand-red-hover transition-all duration-250 shadow-xs hover:shadow-subtle disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Dispatch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
