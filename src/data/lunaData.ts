import { Engineer, ServiceItem, PricingPlan, IndustryVertical, TechPillar, PortfolioItem } from '../types';

export const ENGINEERS_DATA: Engineer[] = [
  {
    id: 'abiram',
    name: 'Abiram S',
    role: 'Frontend Developer',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'UI Dev'],
    bio: 'Specializing in pixel-perfect layouts, responsive design architectures, and blazing-fast client experiences with zero framework bloat.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    portfolio: 'https://lunadigital.com'
  },
  {
    id: 'abdul',
    name: 'Abdul Rahuman M',
    role: 'Backend Developer',
    tags: ['Node.js', 'Firebase', 'APIs'],
    bio: 'Architecting scalable serverless operations, robust cloud functions, authentication engines, and reliable REST microservices.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'bharath',
    name: 'Bharath K',
    role: 'Backend Developer',
    tags: ['Database', 'Auth', 'Server Logic'],
    bio: 'Designing relational database schemas, secure session flows, data pipelines, and optimized query execution.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'karthick',
    name: 'Karthick T',
    role: 'Deployment Engineer',
    tags: ['Vercel', 'Netlify', 'Cloud Hosting'],
    bio: 'Managing automated continuous integration pipelines, edge DNS routing, SSL provisioning, and global CDN delivery.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'haripranav',
    name: 'Haripranav',
    role: 'API Integration Engineer',
    tags: ['REST APIs', 'Integrations', 'Automation'],
    bio: 'Connecting third-party payment gateways, webhook listeners, automated CRM integrations, and transactional email systems.',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'website-dev',
    title: 'Website Development',
    description: 'Performance-optimized static sites and responsive layouts meticulously crafted for rapid load times and superior lead capture.',
    iconName: 'Globe',
    features: [
      'Sub-500ms first contentful paint',
      'Mobile-first responsive typography & grids',
      'Zero-bloat semantic markup',
      'Tailored conversion-oriented UI'
    ],
    deliverables: ['Production-ready source code', 'Vercel / Netlify live deployment', 'Cross-browser testing report', 'Full code ownership'],
    turnaroundTime: '2 - 4 Days',
    technologies: ['HTML5', 'CSS3', 'Modern JS', 'Tailwind', 'Vite']
  },
  {
    id: 'web-application',
    title: 'Web Application',
    description: 'Robust database configurations, administrative consoles, real-time dashboards, and highly scalable serverless operations.',
    iconName: 'LayoutGrid',
    features: [
      'Custom role-based admin portals',
      'Real-time data synchronization',
      'Serverless function architectures',
      'Secure tokenized sessions'
    ],
    deliverables: ['Custom dashboard application', 'Database schema & migrations', 'RESTful endpoint documentation', 'Admin panel controls'],
    turnaroundTime: '5 - 10 Days',
    technologies: ['Node.js', 'React', 'Firebase', 'Supabase', 'PostgreSQL']
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    description: 'Seamless Stripe payment pipelines, third-party plugins, automated email triggers, and resilient webhook handlers.',
    iconName: 'Cpu',
    features: [
      'Stripe / Razorpay payment pipelines',
      'Automated transactional emails (Resend / SendGrid)',
      'Webhook listener & retry queues',
      'OAuth & single sign-on flows'
    ],
    deliverables: ['Secure API client wrapper', 'Test suites & sandbox tests', 'Error logging & telemetry', 'Webhook safety verification'],
    turnaroundTime: '2 - 3 Days',
    technologies: ['REST APIs', 'Stripe', 'Webhooks', 'Express', 'JWT']
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Clean wireframes, comprehensive style guides, and intuitive, responsive user flows that elevate the digital experience.',
    iconName: 'Sparkles',
    features: [
      'Interactive Figma prototypes',
      'High-contrast accessible color tokens',
      'Frictionless checkout & onboarding flows',
      'Design systems & typography scales'
    ],
    deliverables: ['Figma design source files', 'Design token specifications', 'Component library assets', 'Interactive click-through prototype'],
    turnaroundTime: '3 - 5 Days',
    technologies: ['Figma', 'UI Architecture', 'Design Tokens', 'Design Systems']
  },
  {
    id: 'deployment-hosting',
    title: 'Deployment & Hosting',
    description: 'Secure domain management, optimized server setup, CI/CD staging pipelines, and robust Vercel/Netlify hosting architectures.',
    iconName: 'Server',
    features: [
      'Automated Git-triggered staging & production pipelines',
      'Free SSL certificates & automatic renewal',
      'Custom domain DNS propagation & verification',
      'Edge CDN caching & header security policies'
    ],
    deliverables: ['Live production URL', 'Custom domain setup', 'Continuous deployment integration', 'SSL / TLS certificate configuration'],
    turnaroundTime: '24 - 48 Hours',
    technologies: ['Vercel', 'Netlify', 'Cloudflare', 'GitHub Actions', 'DNS']
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    description: 'Rigorous security checks, ongoing speed audits, reliable automated backups, and seamless continuous content updates.',
    iconName: 'ShieldCheck',
    features: [
      'Monthly uptime & performance audits',
      'Dependency vulnerability patching',
      'Priority emergency bug resolution within 2 hours',
      'Content updates & SEO tag refreshes'
    ],
    deliverables: ['Monthly health reports', 'Automated database backups', 'Security audit logs', 'Direct Slack/WhatsApp engineer support'],
    turnaroundTime: 'Ongoing SLA',
    technologies: ['Speed Audits', 'Uptime Monitoring', 'Security Patches', 'CI/CD']
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '499',
    currencySymbol: '₹',
    tagline: 'Essential landing page for a quick digital footprint.',
    features: [
      '1 Page Layout',
      'Responsive Design across mobile & desktop',
      'Social Integration & links',
      'Contact form ready',
      'Fast 48-Hour Turnaround',
      'Free Netlify/Vercel live deployment'
    ],
    ctaText: 'SELECT PLAN',
    deliveryTime: '48 Hours',
    bestFor: 'Freelancers, personal portfolios, and single-product launches'
  },
  {
    id: 'startup',
    name: 'Startup',
    price: '799',
    currencySymbol: '₹',
    popular: true,
    tagline: 'The perfect balance of features and affordability for new ventures.',
    features: [
      'Up to 3 Pages (Home, Services, Contact)',
      'Fast Load Optimization (Sub-1s load)',
      'Free Vercel/Netlify hosting configuration',
      'Dynamic inquiry contact form',
      'Basic SEO Meta & OpenGraph setup',
      'Google Maps & WhatsApp integration'
    ],
    ctaText: 'SELECT PLAN',
    deliveryTime: '3 - 4 Days',
    bestFor: 'Emerging startups, local service businesses, and consultancies'
  },
  {
    id: 'pro-business',
    name: 'Pro Business',
    price: '999',
    currencySymbol: '₹',
    tagline: 'Comprehensive presence for established small businesses.',
    features: [
      'Up to 5 Pages with custom sections',
      'Basic SEO Setup & Lighthouse >95 score',
      '30 Days Maintenance & priority support',
      'Custom animations & modern UI polish',
      'Payment button / Stripe setup ready',
      'Analytics setup (Google Analytics / Plausible)'
    ],
    ctaText: 'SELECT PLAN',
    deliveryTime: '5 - 7 Days',
    bestFor: 'Growing companies seeking maximum credibility and conversions'
  },
  {
    id: 'custom',
    name: 'Custom',
    price: "Let's Talk",
    currencySymbol: '',
    tagline: 'Tailored solutions for complex web applications and scaling needs.',
    features: [
      'Custom Web Apps & Dynamic Portals',
      'API & DB Architecture (Postgres/Firebase)',
      'Dedicated Support & Engineer Slack Channel',
      'Full Authentication, Roles & Payments',
      'Custom CI/CD Pipelines & DevOps',
      'Dedicated Account Engineer'
    ],
    ctaText: 'CONTACT US',
    deliveryTime: 'Custom Scope',
    bestFor: 'SaaS platforms, complex marketplaces, and enterprise integrations'
  }
];

export const INDUSTRIES_DATA: IndustryVertical[] = [
  {
    id: 'startups-tech',
    title: 'Startups & Tech',
    iconName: 'Rocket',
    description: 'High-velocity MVP engineering, developer-focused documentation sites, and conversion-engineered landing pages built for rapid investor validation.',
    capabilities: [
      'Rapid prototype development in under 7 days',
      'Clean interactive feature demos',
      'Waitlist & lead capture engines with CRM sync',
      'Investor pitch decks & visual technical collateral'
    ],
    caseStudyExample: 'AI Analytics platform landing page achieving 99 PageSpeed and 14.8% waitlist conversion rate.'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Retail',
    iconName: 'ShoppingBag',
    description: 'Ultra-fast storefronts, frictionless single-page checkout flows, and Stripe/Razorpay payment gateway pipelines engineered for peak sales seasons.',
    capabilities: [
      'Sub-second product catalog browsing',
      'Zero-redirect embedded checkout flows',
      'Automated WhatsApp order confirmation alerts',
      'Dynamic inventory & variant selector UI'
    ],
    caseStudyExample: 'Direct-to-consumer apparel store recording a 32% drop in cart abandonment.'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Wellness',
    iconName: 'HeartPulse',
    description: 'Accessible, privacy-conscious clinic websites, digital appointment booking calendars, and informative patient intake portals.',
    capabilities: [
      'Frictionless online doctor consultation scheduler',
      'WCAG AA accessible contrast & readable typography',
      'Secure inquiry routing to clinic staff',
      'Interactive services and doctors roster'
    ],
    caseStudyExample: 'Multi-specialty wellness clinic increasing inbound online bookings by 2.4x.'
  },
  {
    id: 'education',
    title: 'Education & EdTech',
    iconName: 'GraduationCap',
    description: 'Interactive course discovery catalogs, student onboarding funnels, institute information hubs, and teacher portfolio sites.',
    capabilities: [
      'Structured curriculum view with video previews',
      'Student enrollment & fee payment forms',
      'Faculty directory & research papers archive',
      'Mobile-first responsive study material readers'
    ],
    caseStudyExample: 'Tech bootcamp portal onboarding 500+ students with automated batch allocation.'
  },
  {
    id: 'real-estate',
    title: 'Real Estate & PropTech',
    iconName: 'Building2',
    description: 'High-definition property showcase layouts, location map embeds, floor plan viewers, and direct broker WhatsApp lead routing.',
    capabilities: [
      'Interactive filterable property grid',
      'High-resolution gallery sliders with lazy loading',
      'Schedule on-site visit instant lead capture',
      'Google Maps coordinates integration'
    ],
    caseStudyExample: 'Luxury real estate agency generating 120+ verified site visit requests in month one.'
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Hospitality',
    iconName: 'Utensils',
    description: 'Digital contactless QR menus, interactive table booking widgets, chef showcase galleries, and local Google SEO optimization.',
    capabilities: [
      'Lightning-fast mobile QR menu with categories',
      'Table reservation date & time picker',
      'Google Maps directions & business hours sync',
      'Instagram live photo gallery feed integration'
    ],
    caseStudyExample: 'Boutique bistro replacing PDF menus with an ultra-fast digital menu viewed 8,000+ times/mo.'
  }
];

export const TECH_PILLARS: TechPillar[] = [
  {
    id: 'frontend',
    category: 'FRONTEND STANDARDS',
    title: 'Semantic HTML5, CSS3 & Vanilla JS',
    description: 'We prioritize clean, native web standards with zero heavy framework overhead, ensuring instantaneous page rendering and maximum accessibility.',
    technologies: ['HTML5 Semantic Elements', 'CSS3 Modern Grid/Flexbox', 'Vanilla JavaScript (ES6+)', 'Tailwind CSS', 'Vite Bundler'],
    benchmarks: 'Score: 100/100 Mobile & Desktop PageSpeed'
  },
  {
    id: 'backend',
    category: 'BACKEND ARCHITECTURE',
    title: 'Node.js, Firebase & Scalable Cloud Services',
    description: 'Lightweight, event-driven backends designed for high concurrency, rock-solid data integrity, and fast response times.',
    technologies: ['Node.js Runtime', 'Express.js', 'Firebase Auth & Firestore', 'Supabase PostgreSQL', 'Serverless Functions'],
    benchmarks: 'Average API Response: <45ms'
  },
  {
    id: 'devops',
    category: 'DEPLOYMENT & CLOUDS',
    title: 'Vercel, Netlify & Edge Networks',
    description: 'Global content delivery across hundreds of edge locations worldwide with automatic continuous integration and SSL issuance.',
    technologies: ['Vercel Edge Network', 'Netlify Hosting', 'Cloudflare CDN & DNS', 'GitHub Actions', 'SSL/TLS Automated'],
    benchmarks: 'Uptime SLA: 99.98%'
  },
  {
    id: 'apis',
    category: 'API INTEGRATIONS',
    title: 'REST APIs, Payment Gateways & Automations',
    description: 'Reliable integrations with leading global payment networks, transactional mail engines, and communication webhooks.',
    technologies: ['Stripe API & Webhooks', 'Razorpay Gateway', 'SendGrid / Resend', 'Twilio WhatsApp API', 'OAuth 2.0'],
    benchmarks: 'Zero-loss Webhook Retry System'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'apex-saas',
    title: 'ApexFlow Cloud Dashboard',
    client: 'Apex Analytics Inc.',
    category: 'Web Application',
    description: 'An ultra-fast analytics dashboard for telemetry monitoring with real-time WebSocket data stream, sub-second latency, and zero framework overhead.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Vanilla JS', 'Tailwind', 'Node.js', 'WebSockets', 'Chart.js'],
    metrics: [
      { label: 'PageSpeed Score', value: '100/100' },
      { label: 'Load Time', value: '0.4s' },
      { label: 'Conversion Lift', value: '+42%' }
    ]
  },
  {
    id: 'luxe-atelier',
    title: 'Luxe Atelier Storefront',
    client: 'Luxe Brands',
    category: 'E-Commerce',
    description: 'Boutique minimalist fashion storefront with instant filtering, fluid cart slide-over, and 1-click Razorpay & Stripe payment checkout.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tags: ['HTML5', 'CSS3', 'Stripe API', 'Vercel Edge', 'Tailwind'],
    metrics: [
      { label: 'First Contentful Paint', value: '380ms' },
      { label: 'Checkout Time', value: '< 15s' },
      { label: 'Mobile Sales', value: '78%' }
    ]
  },
  {
    id: 'novaclinic',
    title: 'Nova Healthcare Portal',
    client: 'Nova Medical Group',
    category: 'Healthcare',
    description: 'Comprehensive patient portal with instant appointment booking, digital check-in forms, and doctor schedule management.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Firebase', 'Express.js', 'OAuth', 'Responsive UX'],
    metrics: [
      { label: 'Monthly Bookings', value: '1,400+' },
      { label: 'Support Reduction', value: '-65%' },
      { label: 'Accessibility', value: 'WCAG AAA' }
    ]
  },
  {
    id: 'urbanloft',
    title: 'UrbanLoft Prime Living',
    client: 'UrbanLoft Realty',
    category: 'Real Estate',
    description: 'Immersive real estate portal showcasing architectural properties with dynamic filterable map pins and direct WhatsApp booking.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tags: ['Google Maps API', 'CSS Grid', 'Netlify', 'WhatsApp API'],
    metrics: [
      { label: 'Direct Leads', value: '450+' },
      { label: 'Time on Page', value: '3m 42s' },
      { label: 'Lead Quality', value: '+88%' }
    ]
  }
];

export const KEY_METRICS = [
  { label: '100% Code Ownership', value: 'Full Rights', desc: 'No vendor lock-in, complete git repository handed over.' },
  { label: '98+ PageSpeed Target', value: 'Sub-Second', desc: 'Engineered for exceptional Google Core Web Vitals.' },
  { label: '99.9% Edge Uptime', value: 'High Availability', desc: 'Global CDN distribution on Vercel & Netlify infrastructure.' },
  { label: '2-Hour Response SLA', value: 'Direct Engineers', desc: 'Speak directly with engineers, zero middle-management delays.' }
];
