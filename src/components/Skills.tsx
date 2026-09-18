import React, { useState } from 'react';
import { 
  Code2, 
  FileCode, 
  FileJson, 
  Terminal, 
  Database, 
  Smartphone, 
  Zap, 
  Layout, 
  Boxes, 
  Globe, 
  Columns, 
  Server, 
  Cpu, 
  Network, 
  Workflow, 
  Braces, 
  HardDrive, 
  Layers, 
  GitBranch, 
  AppWindow, 
  Laptop, 
  Send, 
  PackageCheck, 
  Cloud, 
  ShieldCheck,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { skillsList } from '../data/portfolioData';
import { SkillCategory } from '../types/portfolio';

const iconComponents: Record<string, React.ElementType> = {
  Code2,
  FileCode,
  FileJson,
  Terminal,
  Database,
  Smartphone,
  Zap,
  Layout,
  Boxes,
  Globe,
  Columns,
  Server,
  Cpu,
  Network,
  Workflow,
  Braces,
  HardDrive,
  Layers,
  GitBranch,
  AppWindow,
  Laptop,
  Send,
  PackageCheck,
  Cloud,
  ShieldCheck,
};

type FilterOption = 'All' | SkillCategory;

const categoryFilters: { label: string; value: FilterOption }[] = [
  { label: 'All Skills', value: 'All' },
  { label: 'Programming', value: 'Programming' },
  { label: 'Mobile', value: 'Mobile' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Databases', value: 'Databases' },
  { label: 'Frontend', value: 'Frontend' },
  { label: 'Development Tools', value: 'Development Tools' },
  { label: 'Cloud / Other', value: 'Cloud / Other' },
];

export const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All');

  const filteredSkills = skillsList.filter((skill) => {
    if (activeFilter === 'All') return true;
    return skill.category === activeFilter;
  });

  return (
    <section id="skills" className="py-24 relative bg-[#090d16]/70 light:bg-slate-100/70 border-y border-slate-800/60 light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
            <Filter className="w-3.5 h-3.5" />
            <span>Interactive Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Skills & Technical Proficiency
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
            Accurate, factual technologies categorized across frontend, mobile, backend frameworks, relational databases, and engineering tools. No arbitrary percentage bars.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoryFilters.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all duration-200 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/20'
                    : 'bg-slate-900/60 light:bg-white text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300 hover:border-slate-700 light:hover:border-slate-400'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill) => {
            const Icon = iconComponents[skill.icon] || Code2;
            return (
              <div
                key={skill.id}
                className="p-5 rounded-2xl bg-[#0d1322] light:bg-white border border-slate-800 light:border-slate-200 hover:border-blue-500/50 light:hover:border-blue-500 transition-all duration-300 group shadow-md hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 light:bg-blue-50 border border-blue-500/20 flex items-center justify-center text-blue-400 light:text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 light:bg-slate-100 text-slate-400 light:text-slate-600 border border-slate-700/60 light:border-slate-300">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                    <span>{skill.name}</span>
                    {skill.isPrimary && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" title="Core Technology" />
                    )}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 light:text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 light:border-slate-200 flex items-center gap-1 text-[11px] text-slate-500 light:text-slate-400">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Verified Skillset</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
