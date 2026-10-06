import React, { useEffect, useState } from 'react';
import { X, Calendar, MapPin, Check, FileText, Image as ImageIcon, ExternalLink, Download } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificateModalProps {
  cert: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const [viewMode, setViewMode] = useState<'pdf' | 'image'>('pdf');

  useEffect(() => {
    if (cert?.certificatePdf) {
      setViewMode('pdf');
    } else {
      setViewMode('image');
    }
  }, [cert]);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col animate-fade-in">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between gap-4 bg-slate-50/80 dark:bg-[#090d16]">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                <Check className="w-3.5 h-3.5" />
                Verified Official Certificate
              </span>
              {cert.certificatePdf && (
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900 flex items-center gap-1">
                  <FileText className="w-3 h-3 text-red-500" />
                  Official PDF Document
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white truncate">
              {cert.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-600 dark:text-slate-400 mt-1">
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
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Mode Switcher (if both PDF & Image exist) */}
        {cert.certificatePdf && cert.certificateImage && (
          <div className="px-4 py-2 bg-slate-100/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800/80">
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  viewMode === 'pdf'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-red-500" />
                <span>Official PDF View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('image')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  viewMode === 'image'
                    ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-blue-500" />
                <span>Image Proof View</span>
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <a
                href={cert.certificatePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                <span>Open in Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Certificate Content & Details */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5">
          {/* Document Preview Area */}
          {viewMode === 'pdf' && cert.certificatePdf ? (
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-900 shadow-inner flex flex-col">
              <div className="p-2 sm:px-3 bg-slate-800 text-slate-300 text-xs flex items-center justify-between border-b border-slate-700">
                <div className="flex items-center gap-2 font-mono truncate">
                  <FileText className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span className="truncate">evision_dotnet_certificate.pdf</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={cert.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white inline-flex items-center gap-1"
                    title="Open PDF full page"
                  >
                    <span>Full Screen</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="w-full h-[450px] sm:h-[550px] bg-slate-950">
                <object
                  data={`${cert.certificatePdf}#view=FitH`}
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <iframe
                    src={`${cert.certificatePdf}#view=FitH`}
                    className="w-full h-full border-0"
                    title={`${cert.title} PDF Document`}
                  >
                    <div className="p-6 text-center text-slate-300 space-y-3">
                      <p className="text-sm">
                        Your browser doesn't support inline PDF embeds.
                      </p>
                      <a
                        href={cert.certificatePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open Official Certificate PDF in New Window</span>
                      </a>
                    </div>
                  </iframe>
                </object>
              </div>
            </div>
          ) : cert.certificateImage ? (
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#07090e] shadow-sm">
              <img
                src={cert.certificateImage}
                alt={`${cert.title} certificate for Uttam Kumar`}
                className="w-full h-auto object-contain max-h-[460px] mx-auto"
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
          <div className="space-y-4 pt-1">
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
                Practical Training & Internship Highlights
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
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-[#090d16] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-mono">
              Candidate: Uttam Kumar
            </span>
            {cert.certificatePdf && (
              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                • PDF Verified Document
              </span>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {cert.certificatePdf && (
              <>
                <a
                  href={cert.certificatePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-700 shadow-2xs transition-colors inline-flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open PDF in New Tab</span>
                </a>
                <a
                  href={cert.certificatePdf}
                  download="Uttam_Kumar_Evision_DotNet_Certificate.pdf"
                  className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-2xs transition-colors inline-flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Official PDF</span>
                </a>
              </>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
