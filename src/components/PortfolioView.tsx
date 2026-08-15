import React, { useState } from 'react';
import { TabType, PortfolioItem } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/lunaData';
import { 
  Sparkles, ExternalLink, ArrowRight, CheckCircle2, 
  Layers, Code2, Monitor, Smartphone, Gauge 
} from 'lucide-react';

interface PortfolioViewProps {
  onSelectTab: (tab: TabType) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({ onSelectTab }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [previewProject, setPreviewProject] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Web Application', label: 'Web Applications' },
    { id: 'E-Commerce', label: 'E-Commerce' },
    { id: 'Healthcare', label: 'Healthcare' },
    { id: 'Real Estate', label: 'Real Estate' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-16">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
          <span>SHOWCASE</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Company Portfolio
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Luna Digital is a growing agency actively booking its first flagship projects. Our engineering-driven approach is ready to be deployed.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                activeFilter === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`portfolio-card-${project.id}`}
            className="bg-[#0c1220] border border-slate-800 hover:border-cyan-500/50 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
          >
            {/* Image Preview Banner */}
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220] via-transparent to-black/40"></div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-7 space-y-5">
              <div>
                <span className="text-xs font-mono text-cyan-400/90 font-semibold">{project.client}</span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Performance Metrics Row */}
              <div className="grid grid-cols-3 gap-2 bg-[#080d16] border border-slate-800 p-3 rounded-xl text-center">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-xs font-mono font-bold text-cyan-400 block">{m.value}</span>
                    <span className="text-[10px] text-slate-400 block">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Button */}
              <div className="pt-2">
                <button
                  onClick={() => onSelectTab('connect')}
                  className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2 transition-colors"
                >
                  <span>REQUEST SIMILAR ARCHITECTURE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Flagship Opportunity Banner (Matches Screenshot 7) */}
      <div className="relative overflow-hidden rounded-3xl border border-cyan-400/50 bg-gradient-to-br from-[#0c1830] via-[#091122] to-[#060a14] p-8 sm:p-12 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
        
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 bg-cyan-950/70 border border-cyan-500/40">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FOUNDATIONAL PARTNER OPPORTUNITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Launch Your Project / Become Our Next Featured Case Study
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We are selecting ambitious projects to partner with at exclusive foundational rates. Get direct access to our full engineering board, prioritized deployment, and dedicated performance guarantees.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onSelectTab('connect')}
              className="px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/30 flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onSelectTab('pricing')}
              className="px-6 py-4 rounded-xl font-mono text-xs font-bold text-cyan-300 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 flex items-center gap-2"
            >
              <span>EXPLORE PLANS (FROM ₹499)</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
