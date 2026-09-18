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
    <section id="projects" className="py-24 relative bg-[#f8fafc] dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Engineered Projects & Systems
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
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
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-150 border ${
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
