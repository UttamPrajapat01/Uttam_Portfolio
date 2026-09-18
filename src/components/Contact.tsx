import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  AlertCircle, 
  ExternalLink,
  MessageSquare,
  Loader2,
  Check
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { contactService } from '../services/contactService';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitFeedback, setSubmitFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
    isSimulated?: boolean;
  } | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject line is required.';
    } else if (formData.subject.trim().length < 3) {
      errs.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message content cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters in your message.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitFeedback) setSubmitFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitFeedback(null);

    try {
      const res = await contactService.sendMessage(formData);
      if (res.success) {
        setSubmitFeedback({
          type: 'success',
          text: res.message,
          isSimulated: res.isSimulated,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitFeedback({
          type: 'error',
          text: 'Unable to deliver message at this time. Please use direct email.',
        });
      }
    } catch {
      setSubmitFeedback({
        type: 'error',
        text: 'An unexpected transmission error occurred. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#f8fafc] dark:bg-[#07090e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Let's Build Something Together
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Have a project, opportunity, or question? Feel free to get in touch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I am open to full-stack, mobile, and backend engineering discussions, enterprise collaborations, and technical opportunities.
              </p>

              {/* Direct channels */}
              <div className="space-y-3.5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-500 font-medium">Email Address</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-blue-600 transition-colors font-mono">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900/60 dark:hover:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-300 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Direct Phone</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors font-mono">
                      {personalInfo.phone}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {personalInfo.currentLocation}
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Profiles */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
                  Developer Profiles:
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={personalInfo.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-400 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                  </a>

                  <a
                    href={personalInfo.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:border-slate-400 transition-colors"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-sm">
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                All communications are recorded directly in the developer portal inbox.
              </p>

              {/* Feedback Alert */}
              {submitFeedback && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start gap-3 border ${
                    submitFeedback.type === 'success'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300'
                  }`}
                >
                  {submitFeedback.type === 'success' ? (
                    <span className="p-0.5 rounded bg-emerald-200 text-emerald-800 shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <div className="font-bold">
                      {submitFeedback.type === 'success' ? 'Inquiry Recorded' : 'Transmission Alert'}
                    </div>
                    <div className="mt-1 leading-relaxed">{submitFeedback.text}</div>
                    {submitFeedback.isSimulated && (
                      <div className="mt-1.5 text-[11px] text-slate-500 font-mono">
                        Note: Recorded to local developer inbox. Open Admin Panel (top-right shield) to inspect.
                      </div>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? 'border-rose-400 focus:ring-rose-200'
                          : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Full-Stack / .NET Developer Opportunity"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      errors.subject
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                    Message Details <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, position details, or questions..."
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border text-slate-900 dark:text-white text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-rose-400 focus:ring-rose-200'
                        : 'border-slate-200 dark:border-slate-700 focus:border-blue-600 focus:ring-blue-100'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Recording Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
