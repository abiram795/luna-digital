import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, Clock, Cpu, Layers, ArrowRight } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onSelectService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#0d131f] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow watermark */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            SERVICE DEEP DIVE
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
            {service.title}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
            {service.description}
          </p>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 pt-4 border-t border-slate-800/80">
          
          {/* Key Capabilities */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Layers className="w-4 h-4" />
              Engineered Capabilities
            </h4>
            <ul className="space-y-2">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Standard Deliverables
            </h4>
            <ul className="space-y-2">
              {service.deliverables.map((deliv, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2"></span>
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tech Stack & Turnaround */}
        <div className="bg-[#080d16] border border-slate-800/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase text-slate-400 block">Typical Tech Stack</span>
            <div className="flex flex-wrap gap-1.5 pt-1.5">
              {service.technologies.map((t, idx) => (
                <span key={idx} className="px-2 py-0.5 rounded text-xs font-mono bg-slate-900 border border-slate-700/80 text-cyan-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-900/80 border border-slate-800 px-3 py-1.5 rounded-lg shrink-0">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Turnaround: {service.turnaroundTime}</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-lg text-sm text-slate-400 hover:text-white transition-colors"
          >
            Back to Services
          </button>
          <button
            onClick={() => {
              onClose();
              onSelectService(service.title);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            <span>Request {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
