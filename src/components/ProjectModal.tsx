import React, { useEffect } from 'react';
import { 
  X, 
  Layers, 
  Server, 
  Database, 
  Smartphone, 
  CheckCircle2, 
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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 light:border-slate-200 flex items-start justify-between gap-4 bg-[#090d16] light:bg-slate-50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700">
                  {project.badge}
                </span>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white light:text-slate-900">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-xl bg-slate-800/60 light:bg-slate-200 text-slate-400 hover:text-white light:hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Overview */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400 font-mono mb-2">
              Project Overview
            </h3>
            <p className="text-base text-slate-300 light:text-slate-700 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#0e1424] light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
              <h4 className="text-sm font-bold text-rose-400 mb-2 flex items-center gap-2">
                <span>The Challenge / Problem Statement</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0e1424] light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
              <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                <span>Implemented Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono mb-4">
              Technical Architecture & Data Flow
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {project.architecture.frontend && (
                <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-white light:text-slate-900 mb-1.5">
                    <Layers className="w-4 h-4 text-blue-400" />
                    <span>Frontend Layer</span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    {project.architecture.frontend}
                  </p>
                </div>
              )}

              {project.architecture.mobile && (
                <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-white light:text-slate-900 mb-1.5">
                    <Smartphone className="w-4 h-4 text-cyan-400" />
                    <span>Mobile Layer</span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    {project.architecture.mobile}
                  </p>
                </div>
              )}

              {project.architecture.backend && (
                <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-white light:text-slate-900 mb-1.5">
                    <Server className="w-4 h-4 text-indigo-400" />
                    <span>Backend & API Layer</span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    {project.architecture.backend}
                  </p>
                </div>
              )}

              {project.architecture.database && (
                <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-white light:text-slate-900 mb-1.5">
                    <Database className="w-4 h-4 text-emerald-400" />
                    <span>Database Tier</span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    {project.architecture.database}
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 font-mono mb-3">
              Major Modules & Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0e1424] light:bg-slate-50 border border-slate-800/80 light:border-slate-200 text-xs sm:text-sm text-slate-200 light:text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Development Highlights */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400 font-mono mb-3">
              Engineering Highlights
            </h3>
            <ul className="space-y-2">
              {project.developmentHighlights.map((hl, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                  <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 font-mono mb-2">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-blue-950/40 light:bg-blue-50 text-blue-300 light:text-blue-700 border border-blue-800/60 light:border-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repo & Live Links Notice */}
          <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-400 light:text-slate-600">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Enterprise & academic codebases are maintained under strict internal repositories. Verified demonstrations available upon request.
              </span>
            </div>

            {project.gitHubUrl ? (
              <a
                href={project.gitHubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-400 text-[11px] font-mono whitespace-nowrap self-start sm:self-auto">
                Internal Repository
              </span>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-800 light:border-slate-200 bg-[#090d16] light:bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white light:bg-slate-200 light:text-slate-800 light:hover:bg-slate-300 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
