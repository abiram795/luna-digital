import React, { useState } from 'react';
import { TabType, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/lunaData';
import { Globe, LayoutGrid, Cpu, Sparkles, Server, ShieldCheck, ArrowRight, Check, HelpCircle } from 'lucide-react';

interface ServicesViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenServiceModal: (service: ServiceItem) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onSelectTab, onOpenServiceModal }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'web', label: 'Web & Applications' },
    { id: 'api', label: 'APIs & Backend' },
    { id: 'infra', label: 'DevOps & Maintenance' },
  ];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Server': return <Server className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-cyan-400" />;
      default: return <Globe className="w-6 h-6 text-cyan-400" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((s) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'web') return s.id === 'website-dev' || s.id === 'web-application' || s.id === 'ui-ux-design';
    if (selectedFilter === 'api') return s.id === 'api-integration' || s.id === 'web-application';
    if (selectedFilter === 'infra') return s.id === 'deployment-hosting' || s.id === 'maintenance-support';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-16">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
          <span>CAPABILITIES</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Core Service Catalog
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Covering every stage of the software product lifecycle with precision-engineered solutions tailored for performance and scale.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                selectedFilter === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 6 Services Grid in 3x2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            id={`service-card-${service.id}`}
            className="relative bg-[#0c1220] border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] overflow-hidden"
          >
            {/* Top corner accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-colors pointer-events-none"></div>

            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getServiceIcon(service.iconName)}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2 mb-6 pt-2 border-t border-slate-800/80">
                {service.features.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-2">
              <button
                onClick={() => onOpenServiceModal(service)}
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between transition-colors group-hover:bg-cyan-950/30"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Custom Service Request Banner */}
      <div className="bg-[#0a0f1d] border border-cyan-500/30 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-2xl font-bold text-slate-100">Need a Multi-Service Solution or Custom Architecture?</h3>
          <p className="text-sm text-slate-400 max-w-xl">
            We offer bundled development packages combining full-stack architecture, custom API pipelines, and dedicated deployment support at transparent rates.
          </p>
        </div>
        <button
          onClick={() => onSelectTab('connect')}
          className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 shrink-0 flex items-center gap-2"
        >
          <span>Configure Custom Project</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
