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
  Check,
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
    <section id="skills" className="py-24 relative bg-[#f8fafc] dark:bg-[#090d16] border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Filter className="w-3.5 h-3.5" />
            <span>Interactive Technology Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Technical Proficiency
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
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
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-150 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 shadow-2xs'
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
                className="p-5 rounded-2xl bg-white dark:bg-[#0d1322] border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-200 shadow-2xs hover:shadow-md hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                    <span>{skill.name}</span>
                    {skill.isPrimary && (
                      <span className="w-2 h-2 rounded-full bg-blue-500" title="Core Skill" />
                    )}
                  </h3>

                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <Check className="w-3.5 h-3.5" />
                  <span>Verified Skill</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
