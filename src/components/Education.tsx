import React from 'react';
import { GraduationCap, MapPin, Calendar, Check } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-[#f8fafc] dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Verified academic degrees across Computer Applications and Commerce.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-7 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200/90 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all duration-200 shadow-sm hover:shadow-md relative overflow-hidden group"
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold">
                  {edu.scoreType}: {edu.score}
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                {edu.degree}
              </h3>

              <div className="text-sm font-semibold text-slate-600 dark:text-slate-300 mt-1">
                {edu.institution}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  {edu.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  {edu.period}
                </span>
              </div>

              <div className="mt-4 pt-3 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <Check className="w-4 h-4" />
                <span>Verified Academic Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
