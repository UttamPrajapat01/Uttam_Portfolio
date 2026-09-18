import React from 'react';
import { ArrowRight, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactCTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative bg-white dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-lg">
          
          {/* Subtle background glow */}
          <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack & Backend Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Have a project or opportunity?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-medium">
              Let's build something together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-white hover:bg-slate-50 text-blue-700 shadow-sm transition-all group"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-700/60 hover:bg-blue-700 text-white border border-white/20 transition-colors"
              >
                <span>View GitHub</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-700/60 hover:bg-blue-700 text-white border border-white/20 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
