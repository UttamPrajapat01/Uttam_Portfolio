import React from 'react';
import { Globe, Smartphone, Server, Database, Layers } from 'lucide-react';
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
    <section className="py-20 relative bg-[#090d16]/60 light:bg-slate-100/60 border-y border-slate-800/60 light:border-slate-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            Core Engineering Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            What I Build
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
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
                className={`p-6 rounded-2xl bg-[#0d1322] light:bg-white border border-slate-800 light:border-slate-200 hover:border-blue-500/40 light:hover:border-blue-500 transition-all duration-300 group shadow-lg shadow-black/10 hover:-translate-y-1 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 light:bg-blue-50 border border-blue-500/20 flex items-center justify-center text-blue-400 light:text-blue-600 mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 light:text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80 light:border-slate-200">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-300"
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
