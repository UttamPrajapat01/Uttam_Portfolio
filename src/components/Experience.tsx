import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Check, 
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
    <section id="experience" className="py-24 relative bg-white dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Work Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Production experience spanning active full-stack mobile/web development and 6-month enterprise .NET backend engineering.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central/left line */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8">
            {experiences.map((item) => {
              const isExpanded = expandedId === item.id;

              return (
                <div key={item.id} className="relative pl-12 sm:pl-16">
                  {/* Timeline Node */}
                  <div
                    className={`absolute left-2 sm:left-4 top-5 -translate-x-1/2 w-5 h-5 rounded-full border-4 ${
                      item.isCurrent
                        ? 'border-blue-600 bg-white ring-4 ring-blue-100 dark:ring-blue-950'
                        : 'border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800'
                    }`}
                  />

                  {/* Card Container */}
                  <div className="rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow transition-all duration-200 overflow-hidden">
                    
                    {/* Header Bar */}
                    <div 
                      onClick={() => toggleExpand(item.id)}
                      className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none hover:bg-slate-50/70 dark:hover:bg-slate-900/40 transition-colors"
                    >
                      <div className="space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                            {item.durationText}
                          </span>
                          {item.isCurrent && (
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                              Active Position
                            </span>
                          )}
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-slate-400" />
                            {item.period}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h3>

                        <div className="text-sm font-medium text-slate-600 dark:text-slate-300 flex flex-wrap items-center gap-x-2 gap-y-1">
                          <span className="text-blue-600 dark:text-blue-400 font-semibold">{item.company}</span>
                          <span>•</span>
                          <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1 text-xs">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
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
                            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 hover:bg-indigo-100 border border-indigo-200 dark:border-indigo-800 transition-colors shadow-2xs"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </button>
                        )}
                        <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {isExpanded && (
                      <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-5 animate-fade-in bg-slate-50/40 dark:bg-transparent">
                        
                        {/* Focus areas */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                            Key Focus Areas
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.focus.map((f) => (
                              <span
                                key={f}
                                className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Responsibilities */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                            Roles & Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {item.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                                <span className="p-0.5 rounded bg-blue-100 text-blue-700 mt-0.5 shrink-0">
                                  <Check className="w-3 h-3" />
                                </span>
                                <span className="leading-relaxed">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                            Technology Stack
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Notice / Certificate CTA */}
                        {item.notice && (
                          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
                            <span>{item.notice}</span>
                            {item.id === 'evision' && (
                              <button
                                type="button"
                                onClick={onOpenCertificate}
                                className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
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
