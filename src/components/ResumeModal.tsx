import React, { useEffect, useRef } from 'react';
import { X, Printer, Award, Briefcase, GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, experiences, educationList, certifications } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto print:p-0 print:static">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity print:hidden" 
        onClick={onClose} 
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col print:max-h-none print:border-none print:shadow-none print:rounded-none">
        
        {/* Modal Controls Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 light:border-slate-200 flex items-center justify-between gap-4 bg-[#090d16] light:bg-slate-50 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-sm font-semibold text-white light:text-slate-900">
              Uttam Kumar — Verified Developer Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-xl bg-slate-800 light:bg-slate-200 text-slate-400 hover:text-white light:hover:text-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div 
          ref={printRef}
          className="p-8 sm:p-10 overflow-y-auto space-y-8 bg-[#0b0f19] light:bg-white text-slate-200 light:text-slate-800 font-sans print:p-8 print:text-black print:bg-white"
        >
          {/* Header */}
          <div className="border-b border-slate-800 light:border-slate-300 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white light:text-slate-900 tracking-tight">
                {personalInfo.name}
              </h1>
              <div className="text-base font-semibold text-blue-400 light:text-blue-600 mt-1">
                {personalInfo.title}
              </div>
              <p className="text-xs text-slate-400 light:text-slate-600 mt-1 max-w-xl">
                {personalInfo.heroSupportingText}
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-300 light:text-slate-600 font-mono">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.currentLocation}</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-400 light:text-blue-600 font-mono">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {personalInfo.aboutText1} {personalInfo.aboutText2}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 light:text-blue-600 font-mono flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </h2>

            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="font-bold text-white light:text-slate-900 text-sm">
                      {exp.role} — <span className="text-cyan-400 light:text-blue-600">{exp.company}</span>
                    </div>
                    <div className="text-xs font-mono text-slate-400 light:text-slate-500">
                      {exp.period} ({exp.durationText})
                    </div>
                  </div>

                  <ul className="space-y-1">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="text-xs text-slate-300 light:text-slate-700 flex items-start gap-2">
                        <span className="text-blue-400">•</span>
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 text-[11px] font-mono text-slate-400 light:text-slate-600">
                    <strong>Tech:</strong> {exp.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-400 light:text-indigo-600 font-mono">
              Technical Skillset
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <strong>Programming & Mobile:</strong> C#, TypeScript, JavaScript, Python, SQL, React Native, Expo
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <strong>Backend & APIs:</strong> ASP.NET, ASP.NET Core, MVC, Entity Framework, REST APIs, Django
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <strong>Databases:</strong> PostgreSQL, MySQL, SQL Server, SSMS
              </div>
              <div className="p-3 rounded-lg bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                <strong>Tools & Version Control:</strong> Git, GitHub, Visual Studio, VS Code, Postman, Vite
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 light:text-emerald-600 font-mono flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationList.map((edu) => (
                <div key={edu.id} className="p-3 rounded-xl bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200 text-xs">
                  <div className="font-bold text-white light:text-slate-900">{edu.degree}</div>
                  <div className="text-slate-400 light:text-slate-600">{edu.institution}</div>
                  <div className="text-emerald-400 light:text-emerald-600 font-mono mt-1">
                    {edu.scoreType}: {edu.score} • {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-amber-400 light:text-amber-600 font-mono flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Certifications & Training</span>
            </h2>

            <div className="space-y-2 text-xs">
              {certifications.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-slate-900/40 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="font-bold text-white light:text-slate-900 flex items-center justify-between">
                    <span>{c.title} — {c.organization}</span>
                    {c.date && <span className="font-mono text-slate-400">{c.date}</span>}
                  </div>
                  <div className="text-slate-400 light:text-slate-600 mt-1">
                    {c.topicsCovered.slice(0, 3).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
