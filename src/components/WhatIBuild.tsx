import React from 'react';
import { Globe, Smartphone, Server, Database, Layers, Sparkles } from 'lucide-react';
import { whatIBuildList } from '../data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  Database,
  Layers,
};

export const WhatIBuild: React.FC = () => {
  return (
    <section className="py-20 relative bg-white dark:bg-[#090d16] border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            What I Build
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Factual software capabilities spanning web portals, native mobile experiences, enterprise APIs, and relational data tiers.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatIBuildList.map((item, index) => {
            const Icon = iconMap[item.iconName] || Layers;
            return (
              <div
                key={item.title}
                className={`p-6 rounded-2xl bg-slate-50/70 hover:bg-white dark:bg-[#0d1322] dark:hover:bg-[#111827] border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-1 group flex flex-col justify-between ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
