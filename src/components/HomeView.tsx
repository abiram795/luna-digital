import React from 'react';
import { TabType, ServiceItem } from '../types';
import { SERVICES_DATA, KEY_METRICS } from '../data/lunaData';
import { ArrowRight, Sparkles, Terminal, Code2, Globe, LayoutGrid, Cpu, CheckCircle2, ShieldCheck, Zap, Server, ChevronRight } from 'lucide-react';

interface HomeViewProps {
  onSelectTab: (tab: TabType) => void;
  onOpenServiceModal: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onSelectTab, onOpenServiceModal, onOpenConsultation }) => {
  const previewServices = SERVICES_DATA.slice(0, 3);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-cyan-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-cyan-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-cyan-400" />;
      default: return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-16 text-center max-w-5xl mx-auto px-4">
        {/* Glow ambient circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>

        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span>+ ENGINEERING DIGITAL SUCCESS +</span>
        </div>

        {/* Main Display Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1] mb-6">
          Engineering{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
            Digital Excellence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          We are a full-service digital solutions company. We partner with visionary startups and enterprise businesses to architect, develop, deploy, and scale modern digital products with uncompromising technical precision.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-16">
          <button
            id="hero-start-project-btn"
            onClick={() => onSelectTab('connect')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-3 group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            id="hero-book-consult-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base text-slate-200 bg-[#0d1424] hover:bg-slate-800/80 border border-slate-700 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2"
          >
            <span>Book a Free Consultation</span>
          </button>
        </div>

        {/* 4 Metric Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto text-left">
          {KEY_METRICS.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-[#0b111e]/90 border border-slate-800/90 hover:border-cyan-500/40 p-5 rounded-xl transition-all duration-300 group hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  {metric.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100"></span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-slate-100 mb-1">
                {metric.value}
              </div>
              <p className="text-xs text-slate-400 leading-snug">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* Services Preview Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 mb-3">
              <span>+ SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              What We Offer
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              High-performance engineering across static layouts, scalable full-stack applications, and resilient API pipelines.
            </p>
          </div>

          <button
            onClick={() => onSelectTab('services')}
            className="inline-flex items-center gap-2 text-sm font-mono font-semibold text-cyan-400 hover:text-cyan-300 group self-start md:self-auto"
          >
            <span>View All 6 Core Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Core Services Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewServices.map((service) => (
            <div
              key={service.id}
              className="relative bg-[#0c1220] border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenServiceModal(service)}
                className="w-full py-2.5 px-4 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center justify-between transition-colors"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Showcase Kickoff Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0e172a] via-[#0b1220] to-[#070b14] p-8 sm:p-12 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
                <span>+ SHOWCASE</span>
                <span>•</span>
                <span>LATEST WORK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Start Your Project Journey with Luna Digital
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you need a high-converting single-page landing under ₹1,000 or a complex full-stack web application with cloud databases, our dedicated engineers deliver in days, not months.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onSelectTab('connect')}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                >
                  <span>Book Your Kickoff Session</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectTab('tech')}
                  className="px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 border border-slate-700 hover:border-cyan-500/40 hover:text-white flex items-center gap-2"
                >
                  <span>Meet Full Engineering Board</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Visual Engineering Terminal Code Mockup */}
            <div className="lg:col-span-5 bg-[#070c16] border border-slate-800 rounded-2xl p-5 shadow-2xl font-mono text-xs text-slate-300 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-[11px] text-cyan-400/80">luna-engine.ts</span>
              </div>
              <div className="space-y-1 text-[11px] leading-relaxed">
                <p><span className="text-cyan-400">const</span> project = <span className="text-cyan-400">await</span> LunaDigital.<span className="text-sky-300">architect</span>({'{'}</p>
                <p className="pl-4">quality: <span className="text-emerald-400">'Production-Grade'</span>,</p>
                <p className="pl-4">bundleSize: <span className="text-emerald-400">'Zero Bloat'</span>,</p>
                <p className="pl-4">lighthouseScore: <span className="text-emerald-400">100</span>,</p>
                <p className="pl-4">deliveryTime: <span className="text-emerald-400">'48-72h'</span>,</p>
                <p className="pl-4">pricing: <span className="text-amber-300">'Starting at ₹499'</span></p>
                <p>{'}'});</p>
                <p className="text-slate-500 pt-2">// Output: Edge deployed & DNS verified</p>
                <p className="text-cyan-300">✓ Ready for production traffic</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Why Luna Engineering Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 mb-3">
            <span>ENGINEERED ADVANTAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Built Differently for Unrivaled Performance
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            No cookie-cutter templates or slow builder plugins. We write clean, resilient code tailored to your exact operational requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0a0f1d] border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Instantaneous Load Times</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We eliminate megabyte-heavy frameworks when native web primitives execute in single-digit milliseconds. Your customers never wait.
            </p>
          </div>

          <div className="bg-[#0a0f1d] border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Complete Code Ownership</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              You own 100% of the repository, source files, and hosting credentials from day one with zero ongoing proprietary license lock-ins.
            </p>
          </div>

          <div className="bg-[#0a0f1d] border border-slate-800/90 rounded-2xl p-6 hover:border-cyan-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Global Edge Deployment</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Automatically wired to Vercel or Netlify global edge networks with complimentary SSL certificates, DDoS protection, and automated CI/CD.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
