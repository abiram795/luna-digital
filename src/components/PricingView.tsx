import React, { useState } from 'react';
import { TabType, PricingPlan } from '../types';
import { PRICING_PLANS } from '../data/lunaData';
import { Check, Sparkles, ArrowRight, Zap, HelpCircle, Calculator, Clock, ShieldCheck } from 'lucide-react';

interface PricingViewProps {
  onSelectTab: (tab: TabType) => void;
  onSelectPlanForInquiry: (planName: string) => void;
}

export const PricingView: React.FC<PricingViewProps> = ({ onSelectTab, onSelectPlanForInquiry }) => {
  // Interactive Add-on Calculator state
  const [calculatorPlan, setCalculatorPlan] = useState<string>('startup');
  const [extraPages, setExtraPages] = useState<number>(0);
  const [addStripe, setAddStripe] = useState<boolean>(false);
  const [addAnalytics, setAddAnalytics] = useState<boolean>(false);
  const [addDomainSetup, setAddDomainSetup] = useState<boolean>(false);

  const calculateTotal = () => {
    let base = 799;
    if (calculatorPlan === 'starter') base = 499;
    if (calculatorPlan === 'startup') base = 799;
    if (calculatorPlan === 'pro-business') base = 999;
    if (calculatorPlan === 'custom') return null;

    let total = base;
    total += extraPages * 149;
    if (addStripe) total += 299;
    if (addAnalytics) total += 149;
    if (addDomainSetup) total += 99;
    return total;
  };

  const calculatedTotal = calculateTotal();

  const handleSelectPlan = (plan: PricingPlan) => {
    onSelectPlanForInquiry(plan.name);
    onSelectTab('connect');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-20">
      
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
          <span>AFFORDABLE PRICING</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Websites Under{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            ₹1,000
          </span>
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Professional digital presence accessible with transparent, ultra-low pricing. Precision engineering meets unmatched value.
        </p>
      </div>

      {/* 4 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const isPopular = plan.popular;
          return (
            <div
              key={plan.id}
              id={`pricing-card-${plan.id}`}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                isPopular
                  ? 'bg-gradient-to-b from-[#0f1b33] to-[#0a101f] border-2 border-cyan-400/80 shadow-[0_0_35px_rgba(6,182,212,0.25)] scale-[1.02] lg:-translate-y-2'
                  : 'bg-[#0c1220] border border-slate-800 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)]'
              }`}
            >
              {/* Popular Badge */}
              {isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  POPULAR
                </div>
              )}

              <div>
                {/* Plan Title & Tagline */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-xl font-extrabold text-slate-100">{plan.name}</h3>
                  <p className="text-xs text-slate-400 leading-snug min-h-[32px]">{plan.tagline}</p>
                </div>

                {/* Price Display */}
                <div className="my-6 pb-6 border-b border-slate-800 flex items-baseline gap-1">
                  {plan.currencySymbol && (
                    <span className="text-2xl font-extrabold text-cyan-400 font-mono">
                      {plan.currencySymbol}
                    </span>
                  )}
                  <span className="text-4xl sm:text-5xl font-black text-slate-100 tracking-tight font-mono">
                    {plan.price}
                  </span>
                  {plan.currencySymbol && (
                    <span className="text-xs text-slate-400 font-mono ml-1">one-time</span>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-mono uppercase text-cyan-400/90 font-semibold tracking-wider block">
                    Included Features:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Delivery & CTA Button */}
              <div className="space-y-3 pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Turnaround:</span>
                  <span className="text-slate-200 font-bold">{plan.deliveryTime}</span>
                </div>

                <button
                  id={`select-plan-btn-${plan.id}`}
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full py-3 rounded-xl font-mono text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                      : 'bg-slate-900 border border-slate-700 hover:border-cyan-500/50 hover:bg-slate-850 text-cyan-300'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Interactive Custom Quote Calculator */}
      <div className="bg-[#0a0f1d] border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>INTERACTIVE COST ESTIMATOR</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Customize Your Project Quote</h3>
            <p className="text-xs sm:text-sm text-slate-400">Select your preferred base tier and toggle additional modules for an instant calculation.</p>
          </div>
          <div className="bg-[#070b14] border border-slate-800 px-6 py-4 rounded-2xl text-right shrink-0">
            <span className="text-xs font-mono uppercase text-slate-400 block">Estimated Investment</span>
            <div className="text-3xl font-black text-cyan-400 font-mono">
              {calculatedTotal !== null ? `₹${calculatedTotal}` : "Custom Scope"}
            </div>
            <span className="text-[10px] text-slate-500 font-mono">No hidden fees • Full code ownership</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Base Plan Selection */}
          <div className="space-y-4">
            <label className="block text-xs font-mono font-semibold uppercase text-slate-300">
              1. Choose Base Foundation Tier
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'starter', name: 'Starter', price: '₹499' },
                { id: 'startup', name: 'Startup', price: '₹799' },
                { id: 'pro-business', name: 'Pro Business', price: '₹999' }
              ].map((p) => (
                <button
                  key={p.id}
                  onClick={() => setCalculatorPlan(p.id)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    calculatorPlan === p.id
                      ? 'bg-cyan-950/50 border-cyan-400 text-cyan-300'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold block text-slate-100">{p.name}</span>
                  <span className="text-xs font-mono text-cyan-400">{p.price}</span>
                </button>
              ))}
            </div>

            {/* Extra Pages Counter */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-slate-300 font-mono">Additional Pages (+₹149/page)</span>
                <span className="text-xs font-bold text-cyan-400 font-mono">{extraPages} pages</span>
              </div>
              <input
                type="range"
                min="0"
                max="5"
                value={extraPages}
                onChange={(e) => setExtraPages(parseInt(e.target.value))}
                className="w-full accent-cyan-400 bg-slate-800"
              />
            </div>
          </div>

          {/* Add-ons Checkboxes */}
          <div className="space-y-3">
            <label className="block text-xs font-mono font-semibold uppercase text-slate-300 mb-2">
              2. Add Specialized Modules
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addStripe}
                  onChange={(e) => setAddStripe(e.target.checked)}
                  className="w-4 h-4 accent-cyan-400 rounded"
                />
                <span className="text-xs text-slate-200">Stripe / Razorpay Payment Button Integration</span>
              </div>
              <span className="text-xs font-mono text-cyan-400">+₹299</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addDomainSetup}
                  onChange={(e) => setAddDomainSetup(e.target.checked)}
                  className="w-4 h-4 accent-cyan-400 rounded"
                />
                <span className="text-xs text-slate-200">Custom Domain & DNS Verification Support</span>
              </div>
              <span className="text-xs font-mono text-cyan-400">+₹99</span>
            </label>

            <label className="flex items-center justify-between p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={addAnalytics}
                  onChange={(e) => setAddAnalytics(e.target.checked)}
                  className="w-4 h-4 accent-cyan-400 rounded"
                />
                <span className="text-xs text-slate-200">Google Analytics & Speed Performance Audit</span>
              </div>
              <span className="text-xs font-mono text-cyan-400">+₹149</span>
            </label>

            <button
              onClick={() => {
                onSelectPlanForInquiry(`Customized ${calculatorPlan.toUpperCase()} (₹${calculatedTotal})`);
                onSelectTab('connect');
              }}
              className="w-full mt-4 py-3 rounded-xl font-mono text-xs font-bold tracking-wider bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 shadow-lg"
            >
              <span>LOCK IN THIS ESTIMATE & START</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
