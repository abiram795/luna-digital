import React, { useState } from 'react';
import { TabType, ProjectInquiryState } from '../types';
import { 
  Send, CheckCircle, ArrowRight, ArrowLeft, Mail, MessageSquare, 
  Clock, MapPin, Sparkles, Phone, ShieldCheck, Check 
} from 'lucide-react';

interface ConnectViewProps {
  onSelectTab: (tab: TabType) => void;
  preselectedPlan?: string;
  preselectedIndustry?: string;
}

export const ConnectView: React.FC<ConnectViewProps> = ({ 
  onSelectTab, 
  preselectedPlan, 
  preselectedIndustry 
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [inquiryId, setInquiryId] = useState<string>('');

  const [formData, setFormData] = useState<ProjectInquiryState>({
    projectType: preselectedPlan || preselectedIndustry || 'Startup Essential',
    features: ['Responsive Mobile Design', 'Contact / Lead Form'],
    timeline: '48 Hours - 1 Week',
    budgetRange: 'Under ₹1,000',
    name: '',
    email: '',
    phone: '',
    companyName: '',
    description: ''
  });

  const projectTypes = [
    'Starter Landing (₹499)',
    'Startup Essential (₹799)',
    'Pro Business (₹999)',
    'Portfolio / Personal',
    'SEO / Optimization',
    'Deployment / Maintenance',
    'Custom Full-Stack Build'
  ];

  const featureOptions = [
    'Responsive Mobile Layout',
    'Contact Form with Email Routing',
    'Stripe / Razorpay Checkout',
    'Admin Portal / Dashboard',
    'Firebase / PostgreSQL Database',
    'Lighthouse 100/100 Speed Audit',
    'Custom Domain & DNS Setup',
    'Social Media / WhatsApp CTA'
  ];

  const budgetOptions = [
    'Under ₹1,000',
    '₹1,000 - ₹5,000',
    '₹5,000 - ₹15,000',
    '₹15,000+ / Custom'
  ];

  const timelineOptions = [
    'Urgent (48 - 72 Hours)',
    'Within 1 - 2 Weeks',
    'Within 1 Month',
    'Flexible / Milestone-based'
  ];

  const toggleFeature = (feat: string) => {
    if (formData.features.includes(feat)) {
      setFormData({
        ...formData,
        features: formData.features.filter((f) => f !== feat)
      });
    } else {
      setFormData({
        ...formData,
        features: [...formData.features, feat]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomId = 'LUNA-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(randomId);
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 space-y-16">
      
      {/* Header Section (Matches Screenshot 4) */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30">
          <span>GET IN TOUCH</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
          Connect with Luna
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          Submit inquiries or complete our project questionnaire.
        </p>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Multi-Step Interactive Project Questionnaire (Col 7) */}
        <div className="lg:col-span-7 bg-[#0c1220] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {submitted ? (
            <div className="py-12 text-center space-y-6 animate-in fade-in">
              <div className="w-20 h-20 rounded-full bg-cyan-950/80 border-2 border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-cyan-400 font-bold tracking-widest uppercase">
                  INQUIRY RECORDED: {inquiryId}
                </span>
                <h3 className="text-3xl font-extrabold text-slate-100">Project Spec Dispatched!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-400 font-semibold">{formData.name || 'Partner'}</span>. An assigned lead developer from our Engineering Board is reviewing your specs and will respond to <span className="text-cyan-400 font-mono">{formData.email || 'your email'}</span> within 2 hours.
                </p>
              </div>

              <div className="bg-[#070c16] border border-slate-800 p-5 rounded-2xl max-w-md mx-auto text-left text-xs font-mono space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Selected Scope:</span>
                  <span className="text-cyan-300 font-bold">{formData.projectType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Budget:</span>
                  <span className="text-emerald-400">{formData.budgetRange}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Timeline:</span>
                  <span className="text-slate-200">{formData.timeline}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={`https://wa.me/919876543210?text=Hello%20Luna%20Digital,%20I%20just%20submitted%20project%20inquiry%20${inquiryId}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-mono text-xs font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Chat</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-mono text-xs text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <div>
              
              {/* Step Title and Progress Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-100">Project Inquiry</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Let's blueprint your digital solution.</p>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-cyan-400 font-bold bg-cyan-950/60 px-3 py-1.5 rounded-full border border-cyan-500/30">
                  <span>STEP {currentStep}/4</span>
                </div>
              </div>

              {/* Step Progress Indicators Bar */}
              <div className="grid grid-cols-4 gap-2 my-6">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`h-1.5 rounded-full transition-all ${
                      currentStep >= step ? 'bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'bg-slate-800'
                    }`}
                  ></div>
                ))}
              </div>

              {/* STEP 1: Select Project Type */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-100">Select Project Type</h3>
                    <p className="text-xs text-slate-400">What kind of digital solution are you looking to build?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                          formData.projectType === type
                            ? 'bg-cyan-950/50 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                            : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                        }`}
                      >
                        <span className="text-xs sm:text-sm font-semibold">{type}</span>
                        {formData.projectType === type && (
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-3 rounded-xl font-bold text-xs font-mono uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Key Features */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-100">Key Features & Architecture</h3>
                    <p className="text-xs text-slate-400">Select any specific modules you require.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {featureOptions.map((feat) => {
                      const isSelected = formData.features.includes(feat);
                      return (
                        <button
                          key={feat}
                          type="button"
                          onClick={() => toggleFeature(feat)}
                          className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-cyan-950/50 border-cyan-400 text-cyan-300'
                              : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <span className="text-xs font-medium">{feat}</span>
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-cyan-500 border-cyan-400 text-slate-950' : 'border-slate-700'}`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-3 rounded-xl font-bold text-xs font-mono uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Budget & Timeline */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-100">Timeline & Budget Target</h3>
                    <p className="text-xs text-slate-400">Help us size our delivery resources accurately.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetOptions.map((b) => (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setFormData({ ...formData, budgetRange: b })}
                            className={`p-3 rounded-xl border text-left text-xs font-mono transition-all ${
                              formData.budgetRange === b
                                ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 font-bold'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-2 font-semibold">
                        Desired Delivery Window
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timelineOptions.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`p-3 rounded-xl border text-left text-xs font-mono transition-all ${
                              formData.timeline === t
                                ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 font-bold'
                                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-3 rounded-xl font-bold text-xs font-mono uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                    >
                      <span>Next Step</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: Contact Details & Submit */}
              {currentStep === 4 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-slate-100">Contact & Project Notes</h3>
                    <p className="text-xs text-slate-400">Where should we deliver your technical proposal?</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#080d16] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#080d16] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">WhatsApp / Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#080d16] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Company / Brand Name</label>
                      <input
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Acme Corp"
                        className="w-full bg-[#080d16] border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Project Description & Goal</label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Briefly describe what you'd like to achieve, target audience, reference sites..."
                      className="w-full bg-[#080d16] border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-200 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl font-bold text-xs font-mono uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                    >
                      <Send className="w-4 h-4" />
                      <span>SUBMIT INQUIRY</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          )}

        </div>

        {/* Right Column: Direct Channels Card (Col 5) (Matches Screenshot 4) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Direct Channels Card */}
          <div className="bg-[#0c1220] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-slate-100">Direct Channels</h3>
            
            <div className="space-y-4">
              
              {/* Email */}
              <div className="p-4 rounded-2xl bg-[#080d16] border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block">Email Us</span>
                  <a href="mailto:hello@lunadigital.com" className="text-sm font-semibold text-cyan-300 hover:underline">
                    hello@lunadigital.com
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Response within 2 hours guaranteed</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="p-4 rounded-2xl bg-[#080d16] border border-slate-800 hover:border-emerald-500/40 transition-colors flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block">WhatsApp Support</span>
                  <a 
                    href="https://wa.me/919876543210?text=Hello%20Luna%20Digital,%20I%20have%20a%20project%20inquiry" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-semibold text-emerald-400 hover:underline"
                  >
                    Message Support (+91 98765 43210)
                  </a>
                  <p className="text-[11px] text-slate-500 mt-0.5">Instant chat with lead engineers</p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="p-4 rounded-2xl bg-[#080d16] border border-slate-800 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-slate-400 block">Operating Hours</span>
                  <span className="text-sm font-medium text-slate-200">Mon - Fri: 09:00 - 18:00 EST</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">Weekend on-call for emergency production</p>
                </div>
              </div>

            </div>

            {/* SLA Badge */}
            <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-cyan-300 block">Guaranteed 2-Hour Response SLA</span>
                <span className="text-slate-400">Direct senior developers, zero marketing agency middlemen.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
