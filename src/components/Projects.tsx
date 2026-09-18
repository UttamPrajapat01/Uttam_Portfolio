import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectItem, ProjectFilterCategory } from '../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

const filterCategories: { label: string; value: ProjectFilterCategory }[] = [
  { label: 'All Projects', value: 'All' },
  { label: 'Web', value: 'Web' },
  { label: 'Mobile', value: 'Mobile' },
  { label: 'Backend', value: 'Backend' },
  { label: 'Full-Stack', value: 'Full-Stack' },
  { label: 'Database', value: 'Database' },
];

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (project.category === activeFilter) return true;

    // Multi-faceted filtering checks for technologies and architectural layers:
    if (activeFilter === 'Backend') {
      return (
        project.technologies.some((t) => t.includes('ASP.NET') || t.includes('REST') || t.includes('API')) ||
        !!project.architecture.backend
      );
    }
    if (activeFilter === 'Database') {
      return (
        project.technologies.some((t) => t.includes('SQL') || t.includes('MySQL') || t.includes('PostgreSQL')) ||
        !!project.architecture.database
      );
    }
    if (activeFilter === 'Web') {
      return (
        project.category === 'Web' ||
        project.technologies.some((t) => t.includes('Angular') || t.includes('HTML') || t.includes('Bootstrap')) ||
        !!project.architecture.frontend
      );
    }
    if (activeFilter === 'Mobile') {
      return (
        project.category === 'Mobile' ||
        project.technologies.some((t) => t.includes('React Native') || t.includes('Expo')) ||
        !!project.architecture.mobile
      );
    }
    if (activeFilter === 'Full-Stack') {
      return (
        project.category === 'Full-Stack' ||
        (!!project.architecture.frontend && !!project.architecture.backend) ||
        (!!project.architecture.mobile && !!project.architecture.backend)
      );
    }
    return false;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Engineered Projects & Systems
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
            Real-world web, mobile, and backend systems built with Angular, ASP.NET, SQL Server, MySQL, and React Native.
          </p>
        </div>

        {/* Dynamic Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((tab) => {
            const isActive = activeFilter === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-200 border ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-slate-900/60 light:bg-white text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300 hover:border-slate-700 light:hover:border-slate-400'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Dynamic Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
