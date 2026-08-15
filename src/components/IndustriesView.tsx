import React, { useState } from 'react';
import { TabType } from '../types';
import { INDUSTRIES_DATA } from '../data/lunaData';
import { 
  Rocket, ShoppingBag, HeartPulse, GraduationCap, Building2, Utensils, 
  CheckCircle2, ArrowRight, Sparkles, ShieldCheck, ChevronDown, ChevronUp 
} from 'lucide-react';

interface IndustriesViewProps {
  onSelectTab: (tab: TabType) => void;
  onSelectIndustryForInquiry: (industryName: string) => void;
}

export const IndustriesView: React.FC<IndustriesViewProps> = ({ onSelectTab, onSelectIndustryForInquiry }) => {
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-6 h-6 text-cyan-400" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-cyan-400" />;
      case 'HeartPulse': return <HeartPulse className="w-6 h-6 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-cyan-400" />;
      default: return <Rocket className="w-6 h-6 text-cyan-400" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedSector(expandedSector === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-16">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
          <span>+ INDUSTRY VERTICALS</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Tailored Sector Solutions
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Building specialized features aligned to industry goals and compliance. Engineered for high-performance and designed to integrate seamlessly into your operational workflow.
        </p>
      </div>

      {/* 6 Industry Cards in 2x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {INDUSTRIES_DATA.map((ind) => {
          const isExpanded = expandedSector === ind.id;
          return (
            <div
              key={ind.id}
              id={`industry-card-${ind.id}`}
              className="bg-[#0c1220] border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIndustryIcon(ind.iconName)}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                  {ind.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {ind.description}
                </p>

                {/* Key Engineered Capabilities */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-mono uppercase text-cyan-400 font-semibold tracking-wider block">
                    Domain Capabilities:
                  </span>
                  <ul className="space-y-2">
                    {ind.capabilities.map((cap, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Snippet */}
                <div className="bg-[#080d16] border border-slate-800/90 rounded-xl p-3 mb-6 text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-semibold block mb-1">Impact Metric:</span>
                  <span className="text-slate-300">{ind.caseStudyExample}</span>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => {
                    onSelectIndustryForInquiry(ind.title);
                    onSelectTab('connect');
                  }}
                  className="w-full py-2.5 px-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between transition-colors group-hover:bg-cyan-950/30"
                >
                  <span>REQUEST {ind.title.toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Cross-sector standards banner */}
      <div className="bg-[#0a0f1d] border border-slate-800 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-slate-100">Don't See Your Specific Industry Listed?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            Our clean architecture and modular standard components allow us to engineer custom workflows for any regulated or high-growth vertical.
          </p>
        </div>
        <button
          onClick={() => onSelectTab('connect')}
          className="px-6 py-3 rounded-xl font-mono text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shrink-0 shadow-lg shadow-cyan-500/20"
        >
          DISCUSS CUSTOM VERTICAL
        </button>
      </div>

    </div>
  );
};
