import React, { useEffect } from 'react';
import { X, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (cert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Dialog */}
      <div className="relative w-full max-w-3xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-fade-in">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 light:border-slate-200 flex items-start justify-between gap-4 bg-[#090d16] light:bg-slate-50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified Credential Proof
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900">
              {cert.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 light:text-slate-600 mt-1">
              <span className="text-cyan-400 font-semibold">{cert.organization}</span>
              {cert.date && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </>
              )}
              {cert.location && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {cert.location}
                  </span>
                </>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate modal"
            className="p-2 rounded-xl bg-slate-800/60 light:bg-slate-200 text-slate-400 hover:text-white light:hover:text-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image & Details */}
        <div className="p-6 overflow-y-auto space-y-6">
          {cert.certificateImage ? (
            <div className="rounded-2xl overflow-hidden border border-slate-800 light:border-slate-300 bg-[#07090e] shadow-lg">
              <img
                src={cert.certificateImage}
                alt={`${cert.title} certificate for Uttam Kumar`}
                className="w-full h-auto object-contain max-h-[500px] mx-auto"
                loading="eager"
              />
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
              <Award className="w-12 h-12 text-indigo-400 mx-auto mb-3" />
              <p className="text-sm text-slate-300">
                Official institutional training program records verified on schedule.
              </p>
            </div>
          )}

          {/* Topics & Highlights */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Core Domains & Topics Covered
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cert.topicsCovered.map((topic, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Practical Training Exposure
              </h4>
              <ul className="space-y-1.5">
                {cert.practicalExposure.map((exp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 light:text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 light:border-slate-200 bg-[#090d16] light:bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Candidate: Uttam Kumar
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white light:bg-slate-200 light:text-slate-800 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
