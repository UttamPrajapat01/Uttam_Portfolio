import React from 'react';
import { Milestone } from 'lucide-react';
import { developerJourney } from '../data/portfolioData';

export const JourneyTimeline: React.FC = () => {
  return (
    <section className="py-20 bg-[#07090e]/80 light:bg-slate-50/80 border-t border-slate-800/60 light:border-slate-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>Progression Pathway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Developer Journey
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
            A continuous progression from academic discipline to enterprise backend internship to active full-stack software development.
          </p>
        </div>

        {/* Milestone Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-indigo-500 to-cyan-500" />

            <div className="space-y-10">
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
                      <div className="p-6 rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl hover:border-blue-500/40 transition-all group">
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                            {step.year}
                          </span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-850 light:bg-slate-100 text-slate-300 light:text-slate-600">
                            {step.badge}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                          {step.title}
                        </h3>

                        <div className="text-xs font-medium text-cyan-400 light:text-blue-600 mb-2">
                          {step.subtitle}
                        </div>

                        <p className="text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline center node */}
                    <div className="w-10 h-10 rounded-full bg-[#0b0f19] border-2 border-blue-500 flex items-center justify-center text-white z-10 shadow-lg shadow-blue-500/20 shrink-0">
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
