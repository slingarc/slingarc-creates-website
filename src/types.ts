export type ProjectCategory =
  | 'All'
  | 'Social Media Ads'
  | 'Social Media Creatives'
  | 'Thumbnail Design'
  | 'Graphic Design'
  | 'Video Editing'
  | 'Shorts & Reels'
  | 'Website Design'
  | 'Digital Design';

export interface ProjectSpec {
  label: string;
  value: string;
  detail?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  imageUrl: string;
  description: string;
  aspectRatio?: '16/9' | 'vertical' | 'landscape';
  // Optional project details (for rich modals/lightboxes)
  subtitle?: string;
  badge?: string;
  secondaryBadge?: string;
  details?: string;
  specs?: ProjectSpec[];
  highlights?: string[];
  deliverables?: string[];
  turnaround?: string;
  clientCategory?: string;
  fullBreakdown?: {
    overview?: string;
    objective?: string;
    designSpecs?: ProjectSpec[];
    creativeHighlights?: string[];
    deliverables?: string[];
    turnaround?: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  badge?: string;
  tagline: string;
  title: string;
  description: string;
  specs: string;
  iconName: string;
  isSpecialty?: boolean;
  categoryKey: ProjectCategory;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  phaseLabel: string;
  isCurrent?: boolean;
}

export interface ToolItem {
  name: string;
  role: string;
  iconName: string;
}

export interface StatItem {
  metric: string;
  label: string;
  description: string;
}

export interface NavLinkItem {
  label: string;
  id: string;
}

export interface SocialLinkItem {
  label: string;
  url: string;
}

export interface SiteContent {
  agency: {
    name: string;
    tagline: string;
    fullName: string;
    email: string;
    phone: string;
    phones?: string[];
    logo: string;
  };
  navigation: {
    links: NavLinkItem[];
    ctaButton: string;
  };
  socialLinks: SocialLinkItem[];
  hero: {
    badgeTags: { label: string; category: ProjectCategory }[];
    headlineLine1: string;
    headlineLine2Muted: string;
    headlineLine2Bold: string;
    description: string;
    exploreButtonText: string;
    startButtonText: string;
    metrics: { label: string; value: string }[];
  };
  portfolio: {
    sectionTag: string;
    title: string;
    watermark: string;
    emptyStateMessage: string;
    emptyStateDescription: string;
    inquireButtonText: string;
    projects: PortfolioProject[];
  };
  services: {
    sectionTag: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  about: {
    sectionTag: string;
    headline: string;
    lead: string;
    description: string;
    capabilities: string[];
    stats: StatItem[];
  };
  process: {
    sectionTag: string;
    title: string;
    steps: ProcessStep[];
  };
  tools: {
    sectionTag: string;
    title: string;
    items: ToolItem[];
  };
  contact: {
    sectionTag: string;
    heading: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    directContactLabel: string;
    phoneContactLabel: string;
    perks: { text: string }[];
  };
  footer: {
    description: string;
    directInquiriesLabel: string;
    phoneLabel: string;
    navigationIndexLabel: string;
    networkLabel: string;
    copyright: string;
    tagline: string;
  };
}
