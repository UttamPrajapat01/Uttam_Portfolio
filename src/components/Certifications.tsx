import React, { useState } from 'react';
import { Award, CheckCircle2, Eye, Calendar, MapPin } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import { CertificationItem } from '../types/portfolio';
import { CertificateModal } from './CertificateModal';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certifications" className="py-24 relative bg-[#090d16]/70 light:bg-slate-100/70 border-y border-slate-800/60 light:border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials & Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Certifications & Training Programs
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
            Official industry certificates and specialized technical training completed across Microsoft .NET and Python/Django frameworks.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 hover:border-blue-500/50 light:hover:border-blue-500 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.hasOfficialProof && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified Proof Available
                    </span>
                  )}
                </div>

                {/* Title & Organization */}
                <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-sm font-medium text-cyan-400 light:text-blue-600 mt-1">
                  {cert.organization}
                </div>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 light:text-slate-600 mt-2">
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
                <div className="mt-5 pt-4 border-t border-slate-800/80 light:border-slate-200 space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 light:text-slate-500 font-semibold">
                    Curriculum & Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.topicsCovered.map((topic, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md text-xs bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practical exposure bullets */}
                <div className="mt-4 space-y-1.5">
                  {cert.practicalExposure.slice(0, 2).map((exp, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 light:text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{exp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center justify-between">
                {cert.certificateImage ? (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Official Certificate Proof</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-750 text-slate-200 light:bg-slate-100 light:text-slate-800 transition-colors"
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
