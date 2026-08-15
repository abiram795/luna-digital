import React from 'react';
import { TabType } from '../types';
import { Github, Twitter, Linkedin, Instagram, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#060a12] text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800/60">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-cyan-400 to-blue-600 p-[1.5px]">
                <div className="w-full h-full bg-[#0b1120] rounded-[5px] flex items-center justify-center">
                  <span className="font-mono font-black text-cyan-400 text-sm">◬</span>
                </div>
              </div>
              <span className="font-mono font-extrabold tracking-wider text-base text-slate-100">
                LUNA DIGITAL
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Engineering-driven digital solutions company partnering with startups and businesses to architect, build, and deploy production web systems.
            </p>
            <div className="pt-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>All Systems Operational</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Services Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('portfolio')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Portfolio & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('industries')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Industry Verticals
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Engineering */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">Engineering</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('tech')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Engineering Board
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tech')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Framework-Free Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('pricing')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Websites Under ₹1,000
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('connect')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Connect & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-200">Connect</h4>
            <p className="text-xs text-slate-400">
              Bangalore & Chennai, India<br />
              <span className="text-cyan-400 font-mono">hello@lunadigital.com</span>
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Luna Digital. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>100% CLEAN CODE</span>
            <span>•</span>
            <span>SUB-SECOND SPEED</span>
            <span>•</span>
            <span>EDGE HOSTED</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
