import React from 'react';
import { Milestone } from 'lucide-react';
import { developerJourney } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#07090e] border-t border-slate-200/80 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Progression Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Developer Journey
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            A continuous progression from academic discipline to enterprise backend internship to active full-stack software development.
          </p>
        </div>

        {/* Milestone Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-8">
              {developerJourney.map((step, idx) => {
                const isEven = idx % 2 === 0;

                return (
                  <div 
                    key={step.year} 
                    className={`flex flex-col md:flex-row items-center gap-6 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Box */}
                    <div className="w-full md:w-1/2">
                      <div className="p-6 rounded-2xl bg-slate-50/70 hover:bg-white dark:bg-[#0b0f19] dark:hover:bg-[#0e1424] border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 border border-slate-200 dark:border-slate-700 font-semibold shadow-2xs">
                            {step.year}
                          </span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {step.badge}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                          {step.title}
                        </h3>

                        <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {step.subtitle}
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline center node */}
                    <div className="w-9 h-9 rounded-full bg-white dark:bg-[#0b0f19] border-2 border-blue-600 flex items-center justify-center text-blue-600 dark:text-white z-10 shadow-sm shrink-0">
                      <span className="text-xs font-bold font-mono">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Spacer for symmetrical balance on desktop */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
