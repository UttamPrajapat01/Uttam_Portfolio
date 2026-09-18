import React, { useState } from 'react';
import { Cpu, Sparkles, Check, Info } from 'lucide-react';
import { ecosystemTiers } from '../data/portfolioData';

export const DeveloperEcosystem: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('frontend');
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const currentTierData = ecosystemTiers.find((t) => t.id === selectedTier) || ecosystemTiers[0];

  return (
    <section className="py-20 bg-[#07090e] light:bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Interactive Architecture Flow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Full-Stack Development Ecosystem
          </h2>
          <p className="mt-3 text-base text-slate-400 light:text-slate-600">
            An interactive representation of how data, business logic, client interfaces, and development tools interconnect in Uttam's workflow.
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
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border flex items-center gap-2 ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/20 scale-105'
                      : 'bg-slate-900/60 light:bg-white text-slate-300 light:text-slate-700 border-slate-800 light:border-slate-300 hover:border-slate-700'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-700 flex items-center justify-center text-[11px]">
                    0{idx + 1}
                  </span>
                  <span>{tier.name}</span>
                </button>
                {idx < ecosystemTiers.length - 1 && (
                  <span className="hidden md:inline-block text-slate-600 light:text-slate-400 font-mono">
                    →
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Interactive Dashboard Display */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#0b0f19] light:bg-white border border-slate-800 light:border-slate-200 p-6 sm:p-8 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 light:border-slate-200">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 light:text-blue-600 font-semibold">
                Tier Overview: {currentTierData.badge}
              </span>
              <h3 className="text-2xl font-bold text-white light:text-slate-900 mt-1">
                {currentTierData.name}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 light:text-slate-600 bg-slate-900/60 light:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-800 light:border-slate-200">
              <Info className="w-3.5 h-3.5 text-blue-400" />
              <span>Click any node to inspect role</span>
            </div>
          </div>

          {/* Grid of Tier Components */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            {currentTierData.items.map((item) => {
              const isItemActive = activeItem === item.name;
              return (
                <div
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-200 border ${
                    isItemActive
                      ? 'bg-blue-600/15 border-blue-500 shadow-md shadow-blue-500/10 scale-[1.02]'
                      : 'bg-[#0e1424] light:bg-slate-50 border-slate-800/80 light:border-slate-200 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-base font-bold text-white light:text-slate-900">
                      {item.name}
                    </span>
                    {isItemActive && (
                      <span className="p-1 rounded-full bg-blue-500 text-white text-[10px]">
                        <Check className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate-400 light:text-slate-600 font-medium">
                    {item.role}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flow Connection Visualizer */}
          <div className="p-4 rounded-xl bg-[#080b13] light:bg-slate-100 border border-slate-800/80 light:border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-400 light:text-slate-600">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Pipeline Architecture:</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 text-slate-300 light:text-slate-700">
              <span className="px-2 py-1 rounded bg-slate-800 light:bg-slate-200 text-blue-300 light:text-blue-700">React Native / Web</span>
              <span className="text-slate-500">⇄</span>
              <span className="px-2 py-1 rounded bg-slate-800 light:bg-slate-200 text-indigo-300 light:text-indigo-700">ASP.NET Core REST API</span>
              <span className="text-slate-500">⇄</span>
              <span className="px-2 py-1 rounded bg-slate-800 light:bg-slate-200 text-emerald-300 light:text-emerald-700">PostgreSQL / SQL Server</span>
              <span className="text-slate-500">⚙</span>
              <span className="px-2 py-1 rounded bg-slate-800 light:bg-slate-200 text-amber-300 light:text-amber-700">Git / Postman / Expo</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
