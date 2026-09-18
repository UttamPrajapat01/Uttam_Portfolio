import React from 'react';
import { GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Education & Qualifications
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
            Verified academic degrees across Computer Applications and Commerce.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu) => (
            <div
              key={edu.id}
              className="p-7 rounded-3xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 hover:border-indigo-500/50 light:hover:border-indigo-500 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-indigo-500/5 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs font-bold">
                  {edu.scoreType}: {edu.score}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                {edu.degree}
              </h3>

              <div className="text-sm font-semibold text-slate-300 light:text-slate-700 mt-1">
                {edu.institution}
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 light:text-slate-600 mt-3 pt-3 border-t border-slate-800/80 light:border-slate-200">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {edu.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  {edu.period}
                </span>
              </div>

              <div className="mt-4 pt-3 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Academic Credentials</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
