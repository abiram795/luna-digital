import React, { useState, useEffect } from 'react';
import { TabType, ServiceItem } from './types';
import { SERVICES_DATA } from './data/lunaData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ServicesView } from './components/ServicesView';
import { PortfolioView } from './components/PortfolioView';
import { IndustriesView } from './components/IndustriesView';
import { PricingView } from './components/PricingView';
import { TechView } from './components/TechView';
import { ConnectView } from './components/ConnectView';
import { ServiceModal } from './components/ServiceModal';
import { ConsultationModal } from './components/ConsultationModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>();
  const [preselectedIndustry, setPreselectedIndustry] = useState<string | undefined>();
  const [showConsultationSuccessToast, setShowConsultationSuccessToast] = useState<boolean>(false);

  // Auto scroll to top on tab change
  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPlanForInquiry = (planName: string) => {
    setPreselectedPlan(planName);
    setPreselectedIndustry(undefined);
    handleSelectTab('connect');
  };

  const handleSelectIndustryForInquiry = (industryName: string) => {
    setPreselectedIndustry(industryName);
    setPreselectedPlan(undefined);
    handleSelectTab('connect');
  };

  const handleSelectServiceFromModal = (serviceTitle: string) => {
    setPreselectedPlan(`Service: ${serviceTitle}`);
    setSelectedService(null);
    handleSelectTab('connect');
  };

  return (
    <div className="min-h-screen bg-[#080d16] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200 bg-tech-grid relative">
      
      {/* Background ambient lighting effects */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Main Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
      />

      {/* Main View Container */}
      <main className="flex-1 w-full">
        {currentTab === 'home' && (
          <HomeView
            onSelectTab={handleSelectTab}
            onOpenServiceModal={(service) => setSelectedService(service)}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        )}

        {currentTab === 'services' && (
          <ServicesView
            onSelectTab={handleSelectTab}
            onOpenServiceModal={(service) => setSelectedService(service)}
          />
        )}

        {currentTab === 'portfolio' && (
          <PortfolioView
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'industries' && (
          <IndustriesView
            onSelectTab={handleSelectTab}
            onSelectIndustryForInquiry={handleSelectIndustryForInquiry}
          />
        )}

        {currentTab === 'pricing' && (
          <PricingView
            onSelectTab={handleSelectTab}
            onSelectPlanForInquiry={handleSelectPlanForInquiry}
          />
        )}

        {currentTab === 'tech' && (
          <TechView
            onSelectTab={handleSelectTab}
          />
        )}

        {currentTab === 'connect' && (
          <ConnectView
            onSelectTab={handleSelectTab}
            preselectedPlan={preselectedPlan}
            preselectedIndustry={preselectedIndustry}
          />
        )}
      </main>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectService={handleSelectServiceFromModal}
      />

      {/* 20-Min Free Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        onSuccess={() => {
          setShowConsultationSuccessToast(true);
          setTimeout(() => setShowConsultationSuccessToast(false), 5000);
        }}
      />

      {/* Floating Success Notification Toast */}
      {showConsultationSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0d131f] border border-cyan-400 text-slate-100 px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 animate-in slide-in-from-bottom-5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-xs font-mono">Consultation booked! Calendar invite sent.</span>
        </div>
      )}

      {/* Universal Footer */}
      <Footer
        onSelectTab={handleSelectTab}
      />

    </div>
  );
}
