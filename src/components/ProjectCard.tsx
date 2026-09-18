import React from 'react';
import { 
  ArrowUpRight, 
  Layers, 
  Server, 
  Smartphone, 
  Database, 
  CheckCircle2,
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
        return <Smartphone className="w-5 h-5 text-cyan-400" />;
      case 'Backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 hover:border-blue-500/50 light:hover:border-blue-500 transition-all duration-300 group shadow-xl flex flex-col justify-between overflow-hidden hover:-translate-y-1">
      
      {/* Top Banner / Category Header */}
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 flex items-center justify-center">
              {getCategoryIcon()}
            </div>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.category}
            </span>
          </div>

          {project.badge && (
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-850 light:bg-slate-100 text-slate-300 light:text-slate-600 border border-slate-700/60 light:border-slate-300">
              {project.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="mt-3 text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>

        {/* Major Features preview */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 light:border-slate-200 space-y-2">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold">
            Key Modules:
          </div>
          <div className="space-y-1.5">
            {project.features.slice(0, 3).map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-xs text-slate-300 light:text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
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
              className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-800/80 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-500 border border-slate-800">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800/80 light:border-slate-200">
          <button
            onClick={() => onViewDetails(project)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition-all duration-200 group/btn"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <div 
            title="Internal Enterprise / Academic Codebase"
            className="px-3 py-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-200 text-slate-500 light:text-slate-400 text-xs flex items-center gap-1 cursor-default"
          >
            <Lock className="w-3 h-3 text-slate-500" />
            <span className="text-[11px]">Private</span>
          </div>
        </div>
      </div>

    </div>
  );
};
