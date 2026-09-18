import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle, 
  Award, 
  ExternalLink 
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

interface ExperienceProps {
  onOpenCertificate: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenCertificate }) => {
  const [expandedId, setExpandedId] = useState<string>('solvosky');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
            Production experience spanning active full-stack mobile/web development and 6-month enterprise .NET backend engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central/left line */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-500 via-indigo-500 to-slate-800" />

          <div className="space-y-8">
            {experiences.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div key={item.id} className="relative pl-12 sm:pl-16">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-2 sm:left-4 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-4 ${
                      item.isCurrent
                        ? 'border-blue-500 bg-white ring-4 ring-blue-500/20'
                        : 'border-slate-700 bg-indigo-500'
                    }`}
                  />

                  {/* Card Container */}
                  <div className="rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl overflow-hidden transition-all duration-200">
                    
                    {/* Header Bar */}
                    <div 
                      onClick={() => toggleExpand(item.id)}
                      className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-900/40 light:hover:bg-slate-50 transition-colors"
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            {item.durationText}
                          </span>
                          {item.isCurrent && (
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              Active Position
                            </span>
                          )}
                          <span className="text-xs font-mono text-slate-400 light:text-slate-600 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-white light:text-slate-900">
                          {item.role}
                        </h3>

                        <div className="text-sm font-medium text-slate-300 light:text-slate-700 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="text-cyan-400 light:text-blue-600 font-semibold">{item.company}</span>
                          <span>•</span>
                          <span className="text-slate-400 light:text-slate-600 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-center">
                        {item.id === 'evision' && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onOpenCertificate();
                            }}
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/30 transition-colors"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </button>
                        )}
                        <div className="p-2 rounded-xl bg-slate-900 light:bg-slate-100 text-slate-400 hover:text-white light:hover:text-black">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-800/80 light:border-slate-200 space-y-5 animate-fade-in">
                        
                        {/* Focus areas */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
                            Key Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.focus.map((f) => (
                              <span
                                key={f}
                                className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-300"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
                            Roles & Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {item.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md text-xs font-mono bg-blue-950/40 light:bg-blue-50 text-blue-300 light:text-blue-700 border border-blue-800/50 light:border-blue-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Notice / Certificate CTA */}
                        {item.notice && (
                          <div className="p-3.5 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-xs text-slate-400 light:text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <span>{item.notice}</span>
                            {item.id === 'evision' && (
                              <button
                                type="button"
                                onClick={onOpenCertificate}
                                className="inline-flex items-center gap-1 text-cyan-400 light:text-blue-600 hover:underline font-semibold"
                              >
                                <span>Inspect Verification Proof</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
