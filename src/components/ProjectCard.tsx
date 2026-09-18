import React from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Server, 
  Smartphone, 
  Database, 
  Check,
  Lock
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const getCategoryIcon = () => {
    switch (project.category) {
      case 'Mobile':
        return <Smartphone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <div className="rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-200 group shadow-sm hover:shadow-md flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      
      {/* Top Banner / Category Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center shadow-2xs">
              {getCategoryIcon()}
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              {project.category}
            </span>
          </div>

          {project.badge && (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Major Features preview */}
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Key Modules:
          </div>
          <div className="space-y-1.5">
            {project.features.slice(0, 3).map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                <span className="p-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Area: Tech Tags + CTA */}
      <div className="p-6 pt-0 mt-2">
        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-50 dark:bg-slate-900 text-slate-500 border border-slate-200 dark:border-slate-800">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all duration-150 group/btn"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <div 
            title="Internal Enterprise / Academic Codebase"
            className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 text-xs flex items-center gap-1 cursor-default"
          >
            <Lock className="w-3 h-3 text-slate-400" />
            <span className="text-[11px]">Private</span>
          </div>
        </div>
      </div>

    </div>
  );
};
