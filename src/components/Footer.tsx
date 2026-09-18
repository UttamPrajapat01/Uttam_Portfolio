import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-[#05070a] border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
                UK
              </div>
              <div>
                <div className="text-base font-bold text-white">
                  {personalInfo.name}
                </div>
                <div className="text-xs text-blue-400 font-medium">
                  {personalInfo.title}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Full-Stack Developer building modern web and mobile applications using React Native, TypeScript, JavaScript, ASP.NET, PostgreSQL, and MySQL.
            </p>

            <div className="text-xs text-slate-400">
              Current: <span className="text-slate-300 font-semibold">{personalInfo.currentCompany}</span>, Gandhinagar
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Education', href: '#education' },
                { label: 'Certifications', href: '#certifications' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors truncate">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{personalInfo.currentLocation}</span>
              </li>
            </ul>
          </div>

          {/* Social Profiles */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4 font-mono">
              Professional Profiles
            </h3>
            <div className="space-y-2 text-xs">
              <a
                href={personalInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500 text-slate-300 hover:text-white transition-colors"
              >
                <span>LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
              </a>

              <a
                href={personalInfo.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition-colors"
              >
                <span>GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Meta */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span>Built with React 18, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
