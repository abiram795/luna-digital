import React, { useState } from 'react';
import { TabType } from '../types';
import { ENGINEERS_DATA, TECH_PILLARS } from '../data/lunaData';
import { 
  Code2, Users, Layers, Terminal, ShieldCheck, Zap, Globe, 
  ExternalLink, Github, Linkedin, Cpu, CheckCircle2, ArrowRight 
} from 'lucide-react';

interface TechViewProps {
  onSelectTab: (tab: TabType) => void;
}

export const TechView: React.FC<TechViewProps> = ({ onSelectTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<'board' | 'architecture'>('board');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-16">
      
      {/* Subtab Switcher */}
      <div className="flex items-center justify-center">
        <div className="bg-[#0b1220] p-1.5 rounded-2xl border border-slate-800 flex items-center gap-2">
          <button
            id="subtab-board-btn"
            onClick={() => setActiveSubTab('board')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'board'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>The Engineering Board</span>
          </button>

          <button
            id="subtab-arch-btn"
            onClick={() => setActiveSubTab('architecture')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all flex items-center gap-2 ${
              activeSubTab === 'architecture'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Framework-Free Architecture</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: The Engineering Board (Matches Screenshot 1) */}
      {activeSubTab === 'board' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
              <span>+ ENGINEERS</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              The Engineering Board
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              The core team handling digital transformations from wireframes to cloud hosting.
            </p>
          </div>

          {/* Engineers Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGINEERS_DATA.map((eng) => (
              <div
                key={eng.id}
                id={`engineer-card-${eng.id}`}
                className="bg-[#0c1220] border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]"
              >
                <div>
                  {/* Top Avatar & Role Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-mono font-bold text-lg group-hover:scale-105 transition-transform">
                      {eng.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[11px] font-mono font-semibold uppercase px-3 py-1 rounded-full bg-slate-900 border border-slate-700/80 text-cyan-300">
                      {eng.role}
                    </span>
                  </div>

                  {/* Name & Bio */}
                  <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
                    {eng.name}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {eng.bio}
                  </p>

                  {/* Skill Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {eng.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#070c16] border border-slate-800 text-slate-300 group-hover:border-cyan-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social & Contact links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">Luna Digital Core</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={eng.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={eng.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            ))}

            {/* Opportunity: Join The Board Card */}
            <div className="bg-gradient-to-br from-[#0b1526] to-[#070c17] border border-dashed border-cyan-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mb-5">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">Want to Partner?</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  Have a technical project that needs experienced builders? Schedule a direct code review and project planning session with our team.
                </p>
              </div>
              <button
                onClick={() => onSelectTab('connect')}
                className="w-full py-2.5 rounded-xl font-mono text-xs font-bold bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 transition-colors flex items-center justify-center gap-2"
              >
                <span>CONNECT WITH ENGINEERS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      )}

      {/* VIEW 2: Framework-Free Architecture (Matches Screenshot 6) */}
      {activeSubTab === 'architecture' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
              <span>FRAMEWORK-FREE</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
              Framework-Free Architecture
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Clean, optimized code with modern stable technologies. Built for performance, scalability, and engineered precision.
            </p>
          </div>

          {/* 4 Architectural Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECH_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                id={`tech-pillar-${pillar.id}`}
                className="bg-[#0c1220] border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-7 transition-all space-y-5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-cyan-400 tracking-wider">
                    {pillar.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    {pillar.benchmarks}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100">{pillar.title}</h3>
                
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-mono uppercase text-slate-500">Core Technologies</span>
                  <div className="flex flex-wrap gap-2">
                    {pillar.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#070c16] border border-slate-700/80 text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Benchmark Comparison Simulator */}
          <div className="bg-[#0a0f1d] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-slate-100">Live Load Speed Benchmark Comparison</h3>
                <p className="text-xs text-slate-400">Comparing Luna Digital Framework-Free build vs Generic WordPress/Heavy Templates</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 px-3 py-1 bg-cyan-950/80 rounded-full border border-cyan-500/30">
                AUDIT ENGINE 2026
              </span>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-cyan-400 font-bold">Luna Digital Optimized Clean Build</span>
                  <span className="text-emerald-400 font-bold">0.32s (100% Core Web Vitals)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full w-[98%] animate-pulse"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1 text-slate-400">
                  <span>Standard Heavy Template / CMS</span>
                  <span className="text-rose-400 font-bold">2.84s (42% Core Web Vitals)</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div className="h-full bg-rose-500/60 rounded-full w-[38%]"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
