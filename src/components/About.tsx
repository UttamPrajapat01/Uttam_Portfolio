import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  Smartphone, 
  Server, 
  Database, 
  Layers,
  Sparkles,
  Building2,
  GraduationCap
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-400 light:text-slate-600 max-w-2xl">
            A software developer grounded in solid backend architecture, evolving to build modern full-stack and mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-white light:text-slate-900 flex items-center gap-2">
                <span>From Core Backend Discipline to Modern Full-Stack Execution</span>
              </h3>
              
              <p className="text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText1}
              </p>

              <p className="text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText2}
              </p>

              <p className="text-slate-300 light:text-slate-700 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText3}
              </p>

              {/* Verified Career Tags */}
              <div className="pt-4 border-t border-slate-800 light:border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 light:bg-blue-100 light:text-blue-700">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Current Role</div>
                    <div className="text-sm font-semibold text-white light:text-slate-900">{personalInfo.currentCompany}</div>
                    <div className="text-xs text-blue-400 light:text-blue-600">{personalInfo.currentRole}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800/80 light:border-slate-200">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 light:bg-indigo-100 light:text-indigo-700">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 light:text-slate-500 font-medium">Postgraduate Degree</div>
                    <div className="text-sm font-semibold text-white light:text-slate-900">MCA (2024–2026)</div>
                    <div className="text-xs text-indigo-400 light:text-indigo-600">CPI: 8.50 / 10</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-md shadow-blue-500/20 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-750 text-slate-200 light:bg-slate-100 light:text-slate-800 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Verified Credentials</span>
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Key Pillars & Technology Exposure */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 4 Pillars Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-[#0d1322] light:bg-white border border-slate-800 light:border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white light:text-slate-900">Full-Stack Development</h4>
                <p className="text-xs text-slate-400 light:text-slate-600 mt-1">End-to-end web architectures integrating frontend, APIs, and databases.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1322] light:bg-white border border-slate-800 light:border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white light:text-slate-900">Mobile Applications</h4>
                <p className="text-xs text-slate-400 light:text-slate-600 mt-1">Cross-platform development with React Native, Expo, and TypeScript.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1322] light:bg-white border border-slate-800 light:border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white light:text-slate-900">Backend & REST APIs</h4>
                <p className="text-xs text-slate-400 light:text-slate-600 mt-1">ASP.NET, C#, MVC, Entity Framework, and clean controller logic.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0d1322] light:bg-white border border-slate-800 light:border-slate-200">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white light:text-slate-900">Database Engineering</h4>
                <p className="text-xs text-slate-400 light:text-slate-600 mt-1">PostgreSQL, MySQL, and SQL Server schema design and data modeling.</p>
              </div>

            </div>

            {/* Current vs Previous Exposure Breakdown */}
            <div className="p-5 rounded-xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 space-y-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Current Technology Exposure (SolvoSky)</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.currentTechExposure.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-800/50 light:bg-cyan-50 light:text-cyan-800 light:border-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Previous Backend Experience (Evision Intern)</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.previousBackendExposure.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-blue-950/40 text-blue-300 border border-blue-800/50 light:bg-blue-50 light:text-blue-800 light:border-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
