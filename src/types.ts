export type TabType = 'home' | 'services' | 'portfolio' | 'industries' | 'pricing' | 'tech' | 'connect';

export interface Engineer {
  id: string;
  name: string;
  role: string;
  tags: string[];
  bio?: string;
  avatarUrl?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  deliverables: string[];
  turnaroundTime: string;
  technologies: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currencySymbol: string;
  period?: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  deliveryTime: string;
  bestFor: string;
}

export interface IndustryVertical {
  id: string;
  title: string;
  iconName: string;
  description: string;
  capabilities: string[];
  caseStudyExample: string;
}

export interface TechPillar {
  id: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  benchmarks: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
}

export interface ProjectInquiryState {
  projectType: string;
  features: string[];
  timeline: string;
  budgetRange: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  description: string;
}
