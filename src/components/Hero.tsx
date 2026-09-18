import React, { useState } from 'react';
import { 
  ArrowRight, 
  Download, 
  FileText, 
  MapPin, 
  Briefcase, 
  Terminal, 
  Check, 
  Copy,
  ExternalLink,
  Code2,
  Database,
  Smartphone,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const codeSnippets = {
  csharp: {
    title: 'DNSAdminController.cs',
    lang: 'C# / ASP.NET Core',
    icon: Code2,
    code: `[ApiController]
[Route("api/v1/dns-admin")]
public class DNSAdminController : ControllerBase
{
    private readonly IDomainService _domainService;
    private readonly ILogger<DNSAdminController> _logger;

    public DNSAdminController(IDomainService domainService, ILogger<DNSAdminController> logger)
    {
        _domainService = domainService;
        _logger = logger;
    }

    [HttpPost("manage-domain")]
    [Authorize(Roles = "Admin,Operations")]
    public async Task<IActionResult> ProcessDomainUpdate([FromBody] DomainUpdateRequest request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        var result = await _domainService.UpdateDnsRecordsAsync(request);
        return Ok(new { Success = true, UpdatedAt = DateTime.UtcNow });
    }
}`
  },
  reactNative: {
    title: 'AppNavigator.tsx',
    lang: 'React Native / TypeScript',
    icon: Smartphone,
    code: `import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#2563eb',
        }}
      >
        <Stack.Screen name="Catalog" component={CatalogScreen} />
        <Stack.Screen name="CartDetails" component={CartScreen} />
        <Stack.Screen name="OrderCheckout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};`
  },
  database: {
    title: 'schema_v1.sql',
    lang: 'PostgreSQL / SQL Server',
    icon: Database,
    code: `-- Relational Schema: Enterprise Domain & Audit Structure
CREATE TABLE CoreDomainEntities (
    DomainId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    DomainName VARCHAR(255) NOT NULL UNIQUE,
    Status VARCHAR(50) NOT NULL DEFAULT 'ACTIVE',
    TldExtension VARCHAR(20) NOT NULL,
    CreatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    UpdatedAt TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE AuditLogs (
    LogId BIGSERIAL PRIMARY KEY,
    DomainId UUID REFERENCES CoreDomainEntities(DomainId),
    ActionName VARCHAR(100) NOT NULL,
    AdminUserId VARCHAR(100) NOT NULL,
    Timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);`
  }
};

type CodeTabKey = keyof typeof codeSnippets;

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<CodeTabKey>('csharp');
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-[#f8fafc] dark:from-[#07090e] dark:to-[#090d16]">
      {/* Subtle architectural background dot grid */}
      <div className="absolute inset-0 subtle-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Developer Information & Positioning */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Opportunities</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm">
                <Briefcase className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{personalInfo.currentCompany}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{personalInfo.currentLocation}</span>
              </div>
            </div>

            {/* Developer Avatar & Main Headings */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="relative group shrink-0 w-24 h-24 sm:w-28 sm:h-28">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 opacity-70 blur-[3px] group-hover:opacity-100 transition duration-300" />
                <img
                  src={personalInfo.profileImage || "/profile.jpg"}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover rounded-2xl border-2 border-white dark:border-slate-800 shadow-md"
                />
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" title="Active & Available" />
              </div>

              <div className="space-y-1.5">
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 font-mono flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>{personalInfo.heroHeadline}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                  {personalInfo.title}
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {personalInfo.name} • {personalInfo.currentRole} at <span className="text-blue-600 dark:text-blue-400">{personalInfo.currentCompany}</span>
                </p>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.heroSupportingText}
            </p>

            {/* Technology Line Highlight */}
            <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-mono text-slate-800 dark:text-cyan-300 flex items-center gap-2.5 shadow-sm">
              <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span className="truncate font-semibold">{personalInfo.techHighlightLine}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-150 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-200 dark:border-slate-800 shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Let's Connect</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60 shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                title="View Resume in Modal"
                className="inline-flex items-center gap-1.5 px-3 py-3 rounded-xl text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="underline underline-offset-4">View Resume</span>
              </button>
            </div>

            {/* Quick Contact & Profiles */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400">
              <span className="text-slate-400 dark:text-slate-500 font-medium">Quick Connect:</span>
              <a 
                href={personalInfo.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a 
                href={personalInfo.gitHubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-slate-900 dark:hover:text-white font-medium transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="hover:text-slate-900 dark:hover:text-white transition-colors font-mono"
              >
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                className="hover:text-slate-900 dark:hover:text-white transition-colors font-mono"
              >
                {personalInfo.phone}
              </a>
            </div>

          </div>

          {/* Right Column: Clean Light-Themed Developer Workspace */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-slate-50 dark:bg-[#07090e] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-2 text-xs text-slate-500 dark:text-slate-400 font-mono font-medium">editor v1.0</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors px-2.5 py-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm"
                  title="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center overflow-x-auto bg-slate-100/80 dark:bg-[#090d16] border-b border-slate-200 dark:border-slate-800 px-2 pt-2 scrollbar-none">
                {(Object.keys(codeSnippets) as CodeTabKey[]).map((tabKey) => {
                  const item = codeSnippets[tabKey];
                  const Icon = item.icon;
                  const isActive = activeCodeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      onClick={() => setActiveCodeTab(tabKey)}
                      className={`flex items-center gap-1.5 px-3 py-2 text-xs font-mono rounded-t-lg transition-colors border-t-2 ${
                        isActive
                          ? 'bg-white dark:bg-[#0b0f19] text-blue-600 dark:text-blue-400 border-blue-600 font-semibold shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border-transparent'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Display */}
              <div className="p-4 bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto max-h-[360px] leading-relaxed">
                <div className="text-slate-400 text-[11px] mb-2 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>Language: {codeSnippets[activeCodeTab].lang}</span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Clean Architecture
                  </span>
                </div>
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>

              {/* Terminal status bar */}
              <div className="px-4 py-2.5 bg-slate-50 dark:bg-[#07090e] border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Core Stack:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">React Native • ASP.NET • SQL</span>
                </div>
                <span>UTF-8</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
