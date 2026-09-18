import React, { useEffect } from 'react';
import { 
  X, 
  Layers, 
  Server, 
  Database, 
  Smartphone, 
  Check, 
  ExternalLink, 
  Lock,
  ArrowRight
} from 'lucide-react';
import { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/70 dark:bg-[#090d16]">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  {project.badge}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono mb-2">
              Project Overview
            </h3>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-rose-50/50 dark:bg-[#0e1424] border border-rose-200/80 dark:border-slate-800">
              <h4 className="text-sm font-bold text-rose-800 dark:text-rose-400 mb-2">
                The Challenge / Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-50/50 dark:bg-[#0e1424] border border-emerald-200/80 dark:border-slate-800">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-400 mb-2">
                Implemented Solution
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-blue-400 font-mono mb-3.5">
              Technical Architecture & Data Flow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              
              {project.architecture.frontend && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span>Frontend Layer</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.architecture.frontend}
                  </p>
                </div>
              )}

              {project.architecture.mobile && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    <Smartphone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span>Mobile Layer</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.architecture.mobile}
                  </p>
                </div>
              )}

              {project.architecture.backend && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    <Server className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    <span>Backend & API Layer</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.architecture.backend}
                  </p>
                </div>
              )}

              {project.architecture.database && (
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white mb-1.5">
                    <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Database Tier</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.architecture.database}
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-3">
              Major Modules & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <span className="p-0.5 rounded bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Highlights */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-indigo-400 font-mono mb-3">
              Engineering Highlights
            </h3>
            <ul className="space-y-2">
              {project.developmentHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <ArrowRight className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-blue-950/40 text-slate-800 dark:text-blue-300 border border-slate-200 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repo & Live Links Notice */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-slate-400 shrink-0" />
              <span>
                Enterprise & academic codebases are maintained under internal repositories. Demonstrations available upon request.
              </span>
            </div>

            {project.gitHubUrl ? (
              <a
                href={project.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="px-3 py-1 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-mono whitespace-nowrap self-start sm:self-auto">
                Internal Repository
              </span>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#090d16] flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-2xs"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
