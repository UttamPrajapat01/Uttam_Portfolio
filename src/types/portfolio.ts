export interface PersonalInfo {
  name: string;
  title: string;
  subTitle: string;
  currentRole: string;
  currentCompany: string;
  currentLocation: string;
  phone: string;
  email: string;
  linkedInUrl: string;
  gitHubUrl: string;
  portfolioRepoUrl?: string;
  heroHeadline: string;
  heroSupportingText: string;
  techHighlightLine: string;
  aboutText1: string;
  aboutText2: string;
  aboutText3: string;
  currentTechExposure: string[];
  previousBackendExposure: string[];
  broaderSkills: string[];
  profileImage?: string;
}

export type SkillCategory = 
  | 'Frontend' 
  | 'Mobile' 
  | 'Backend' 
  | 'Databases' 
  | 'Programming' 
  | 'Development Tools' 
  | 'Cloud / Other';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  description: string;
  icon: string;
  isPrimary?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  durationText: string;
  isCurrent: boolean;
  type: 'Full-time' | 'Internship';
  focus: string[];
  responsibilities: string[];
  technologies: string[];
  notice?: string;
}

export type ProjectFilterCategory = 'All' | 'Web' | 'Mobile' | 'Backend' | 'Full-Stack' | 'Database';

export interface ProjectItem {
  id: string;
  title: string;
  shortDescription: string;
  category: ProjectFilterCategory;
  technologies: string[];
  features: string[];
  architecture: {
    frontend?: string;
    backend?: string;
    database?: string;
    mobile?: string;
  };
  problemStatement: string;
  solution: string;
  developmentHighlights: string[];
  gitHubUrl?: string | null;
  liveDemoUrl?: string | null;
  appDownloadUrl?: string | null;
  badge?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  scoreType: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  location?: string;
  date?: string;
  topicsCovered: string[];
  practicalExposure: string[];
  certificateImage?: string;
  certificatePdf?: string;
  hasOfficialProof: boolean;
}

export interface DeveloperJourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface WhatIBuildItem {
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
}

export interface EcosystemTier {
  id: string;
  name: string;
  badge: string;
  items: {
    name: string;
    role: string;
  }[];
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  read: boolean;
}
