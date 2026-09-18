import React, { useState } from 'react';
import { Cpu, Sparkles, Check, Info } from 'lucide-react';
import { ecosystemTiers } from '../data/portfolioData';

export const DeveloperEcosystem: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('frontend');
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const currentTierData = ecosystemTiers.find((t) => t.id === selectedTier) || ecosystemTiers[0];

  return (
    <section className="py-20 bg-white dark:bg-[#07090e] border-y border-slate-200/80 dark:border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Architecture Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Full-Stack Development Ecosystem
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            An interactive representation of how client interfaces, business logic, databases, and development tooling interconnect in Uttam's workflow.
          </p>
        </div>

        {/* Tier Selector Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {ecosystemTiers.map((tier, idx) => {
            const isSelected = selectedTier === tier.id;
            return (
              <React.Fragment key={tier.id}>
                <button
                  onClick={() => {
                    setSelectedTier(tier.id);
                    setActiveItem(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 border flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold ${
                    isSelected ? 'bg-blue-700 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span>{tier.name}</span>
                </button>
                {idx < ecosystemTiers.length - 1 && (
                  <span className="hidden md:inline-block text-slate-300 dark:text-slate-600 font-mono">
                    →
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Interactive Dashboard Display */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-slate-50/70 dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-bold">
                Tier Overview: {currentTierData.badge}
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                {currentTierData.name}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-2xs">
              <Info className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Click any node to inspect role</span>
            </div>
          </div>

          {/* Grid of Tier Components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 py-6">
            {currentTierData.items.map((item) => {
              const isItemActive = activeItem === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-150 border ${
                    isItemActive
                      ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-400 dark:border-blue-700 shadow-sm'
                      : 'bg-white dark:bg-[#0e1424] border-slate-200 dark:border-slate-800 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-base font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </span>
                    {isItemActive && (
                      <span className="p-1 rounded-full bg-blue-600 text-white text-[10px]">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.role}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Connection Visualizer */}
          <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono shadow-2xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 font-semibold">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
              <span>Architecture Pipeline:</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-slate-200 dark:border-slate-700">React Native / Web</span>
              <span className="text-slate-400">⇄</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700">ASP.NET Core REST API</span>
              <span className="text-slate-400">⇄</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-emerald-700 dark:text-emerald-300 border border-slate-200 dark:border-slate-700">PostgreSQL / SQL Server</span>
              <span className="text-slate-400">⚙</span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-amber-300 border border-slate-200 dark:border-slate-700">Git / Postman / Expo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
