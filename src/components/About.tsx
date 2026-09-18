import React from 'react';
import { 
  Download, 
  FileText, 
  Smartphone, 
  Server, 
  Database, 
  Layers,
  Sparkles,
  Building2,
  GraduationCap,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 relative bg-[#f8fafc] dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            A software developer grounded in solid backend architecture, evolving to build modern full-stack and mobile solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
              <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <img
                  src={personalInfo.profileImage || "/profile.jpg"}
                  alt={personalInfo.name}
                  className="w-16 h-16 rounded-xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm shrink-0"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {personalInfo.title} • {personalInfo.currentCompany}
                  </div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">
                    {personalInfo.currentLocation}
                  </div>
                </div>
              </div>

              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                From Core Backend Discipline to Modern Full-Stack Execution
              </h4>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText1}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText2}
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutText3}
              </p>

              {/* Verified Career Highlights */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Current Company</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">{personalInfo.currentCompany}</div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{personalInfo.currentRole}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Postgraduate Degree</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">MCA (2024–2026)</div>
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">CPI: 8.50 / 10</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              <div className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400 mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Full-Stack Development</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">End-to-end web architectures integrating modern UI, APIs, and databases.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 mb-3">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Mobile Applications</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">Cross-platform development with React Native, Expo, and TypeScript.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-700 dark:text-indigo-400 mb-3">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Backend & REST APIs</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">ASP.NET, C#, MVC, Entity Framework, and clean controller logic.</p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-[#0d1322] border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 mb-3">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Database Engineering</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">PostgreSQL, MySQL, and SQL Server schema design and data modeling.</p>
              </div>

            </div>

            {/* Current vs Previous Exposure Breakdown */}
            <div className="p-5 rounded-xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-cyan-400 mb-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span>Current Technology Exposure (SolvoSky)</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.currentTechExposure.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-blue-50 dark:bg-blue-950/40 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-blue-400 mb-2.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                  <span>Previous Backend Experience (Evision Intern)</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {personalInfo.previousBackendExposure.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-850 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
