import { SITE_CONTENT } from './siteContent';

/**
 * RE-EXPORTS FROM CENTRALIZED SITE_CONTENT
 * All website data is housed in /src/data/siteContent.ts for easy editing.
 */
export { SITE_CONTENT };

export const BRAND_ASSETS = SITE_CONTENT.agency;
export const HERO_TAGS = SITE_CONTENT.hero.badgeTags;
export const HERO_METRICS = SITE_CONTENT.hero.metrics;
export const SERVICES_DATA = SITE_CONTENT.services.items;
export const PORTFOLIO_PROJECTS = SITE_CONTENT.portfolio.projects;
export const PROCESS_STEPS = SITE_CONTENT.process.steps;
export const TOOLS_LIST = SITE_CONTENT.tools.items;
export const STATS_DATA = SITE_CONTENT.about.stats;
export const STUDIO_CHECKLIST = SITE_CONTENT.about.capabilities;
export const SOCIAL_LINKS = SITE_CONTENT.socialLinks;
