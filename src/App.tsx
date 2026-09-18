import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatIBuild } from './components/WhatIBuild';
import { About } from './components/About';
import { DeveloperEcosystem } from './components/DeveloperEcosystem';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { JourneyTimeline } from './components/JourneyTimeline';
import { Contact } from './components/Contact';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AdminModal } from './components/AdminModal';
import { CertificateModal } from './components/CertificateModal';
import { BackToTop } from './components/BackToTop';
import { certifications } from './data/portfolioData';
import { CertificationItem } from './types/portfolio';

export function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeCertificate, setActiveCertificate] = useState<CertificationItem | null>(null);

  const evisionCert = certifications.find((c) => c.id === 'evision-dotnet-cert') || null;

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 selection:bg-blue-600 selection:text-white relative">
      
      {/* Navigation */}
      <Navbar onOpenAdmin={() => setAdminModalOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content" className="relative">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <WhatIBuild />
        <About onOpenResume={() => setResumeModalOpen(true)} />
        <DeveloperEcosystem />
        <Skills />
        <Experience onOpenCertificate={() => setActiveCertificate(evisionCert)} />
        <Projects />
        <Certifications />
        <Education />
        <JourneyTimeline />
        <Contact />
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Utilities */}
      <BackToTop />

      {/* Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />

      <CertificateModal
        cert={activeCertificate}
        onClose={() => setActiveCertificate(null)}
      />

    </div>
  );
}

export default App;
