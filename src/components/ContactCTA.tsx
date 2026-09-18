import React from 'react';
import { ArrowRight, ExternalLink, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactCTA: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/60 via-indigo-950/60 to-slate-900/80 light:bg-blue-50 border border-blue-500/30 light:border-blue-200 p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack & Backend Engineering</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
              Have a project or opportunity?
            </h2>

            <p className="text-lg sm:text-xl text-blue-200 light:text-blue-900 font-medium">
              Let's build something together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all group"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 light:bg-white light:text-slate-800 border border-slate-700 light:border-slate-300 transition-colors"
              >
                <span>View GitHub</span>
                <ExternalLink className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 light:bg-white light:text-slate-800 border border-slate-700 light:border-slate-300 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-blue-400" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
