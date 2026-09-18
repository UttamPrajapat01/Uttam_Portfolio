import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Check } from 'lucide-react';
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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Dialog */}
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-fade-in">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/70 dark:bg-[#090d16]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Verified Credential Proof
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {cert.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-slate-400 mt-1">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">{cert.organization}</span>
              {cert.date && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {cert.date}
                  </span>
                </>
              )}
              {cert.location && (
                <>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {cert.location}
                  </span>
                </>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close certificate modal"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Image & Details */}
        <div className="p-6 overflow-y-auto space-y-6">
          {cert.certificateImage ? (
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-[#07090e] shadow-sm">
              <img
                src={cert.certificateImage}
                alt={`${cert.title} certificate for Uttam Kumar`}
                className="w-full h-auto object-contain max-h-[500px] mx-auto"
                loading="eager"
              />
            </div>
          ) : (
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-sm text-slate-700">
                Official institutional training program records verified on schedule.
              </p>
            </div>
          )}

          {/* Topics & Highlights */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2">
                Core Domains & Topics Covered
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cert.topicsCovered.map((topic, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono mb-2">
                Practical Training Exposure
              </h4>
              <ul className="space-y-1.5">
                {cert.practicalExposure.map((exp, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <span className="p-0.5 rounded bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-[#090d16] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">
              Candidate: Uttam Kumar
            </span>
            {cert.certificatePdf && (
              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                • PDF Verified
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {cert.certificatePdf && (
              <>
                <a
                  href={cert.certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open PDF in New Tab</span>
                </a>
                <a
                  href={cert.certificatePdf}
                  download="Uttam_Kumar_Evision_DotNet_Certificate.pdf"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Download PDF</span>
                </a>
              </>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            >
              Close Viewer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
