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
  Smartphone
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
          headerStyle: { backgroundColor: '#07090E' },
          headerTintColor: '#38BDF8',
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
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-indigo-600/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute -top-12 right-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Developer Information & Positioning */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{personalInfo.currentRole}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/60">
                <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.currentCompany}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-800/60 text-slate-300 border border-slate-700/60">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{personalInfo.currentLocation}</span>
              </div>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                {personalInfo.heroHeadline}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.15]">
                {personalInfo.title}
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-700 max-w-2xl leading-relaxed">
              {personalInfo.heroSupportingText}
            </p>

            {/* Technology Line Highlight */}
            <div className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-200/70 border border-slate-800/80 light:border-slate-300 text-xs sm:text-sm font-mono text-cyan-300 light:text-blue-800 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400 shrink-0" />
              <span className="truncate">{personalInfo.techHighlightLine}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/25 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 light:bg-white light:text-slate-800 light:border-slate-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Let's Connect</span>
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 hover:border-cyan-500/60 light:bg-slate-100 light:text-blue-600 light:border-blue-300 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                title="View Resume in Modal"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-white light:text-slate-600 light:hover:text-black transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="underline underline-offset-4">View Resume</span>
              </button>
            </div>

            {/* Quick contact / profiles */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400 light:text-slate-600">
              <span className="text-slate-500 font-medium">Quick Links:</span>
              <a 
                href={personalInfo.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a 
                href={personalInfo.gitHubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
              <a 
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} 
                className="hover:text-white transition-colors"
              >
                {personalInfo.phone}
              </a>
            </div>

          </div>

          {/* Right Column: Code-Inspired Interactive Workspace */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0b0f19] light:bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Window Header */}
              <div className="px-4 py-3 bg-[#07090e] border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs text-slate-400 font-mono">dev-environment v1.0</span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60"
                  title="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center overflow-x-auto bg-[#090d16] border-b border-slate-800/80 px-2 pt-2 scrollbar-none">
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
                          ? 'bg-[#0b0f19] text-blue-400 border-blue-500 font-medium'
                          : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-850/50'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Code Display */}
              <div className="p-4 bg-[#0b0f19] text-slate-200 font-mono text-xs overflow-x-auto max-h-[360px] leading-relaxed">
                <div className="text-slate-500 text-[11px] mb-2 pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>Language: {codeSnippets[activeCodeTab].lang}</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Ready
                  </span>
                </div>
                <pre className="text-slate-300">
                  <code>{codeSnippets[activeCodeTab].code}</code>
                </pre>
              </div>

              {/* Terminal status bar */}
              <div className="px-4 py-2 bg-[#07090e] border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">⚡ Core Stack:</span>
                  <span className="text-slate-300">React Native • ASP.NET • SQL</span>
                </div>
                <span className="text-slate-500">UTF-8</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
