import React, { useState } from 'react';
import { Award, Eye, Calendar, MapPin, Check } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative bg-white dark:bg-[#090d16] border-y border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications & Training Programs
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Official industry certificates and specialized technical training completed across Microsoft .NET and Python/Django frameworks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-7 rounded-2xl bg-slate-50/70 hover:bg-white dark:bg-[#0b0f19] dark:hover:bg-[#0e1424] border border-slate-200/90 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/40 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.hasOfficialProof && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Verified Proof
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {cert.organization}
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  {cert.date && (
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  )}
                  {cert.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {cert.location}
                    </span>
                  )}
                </div>

                {/* Topics */}
                <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                    Curriculum & Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topicsCovered.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practical exposure bullets */}
                <div className="mt-4 space-y-1.5">
                  {cert.practicalExposure.slice(0, 2).map((exp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="p-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400 shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                {cert.certificateImage ? (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Official Certificate Proof</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Curriculum Details</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />

      </div>
    </section>
  );
};
