import { SiteContent, PortfolioProject, ProjectCategory } from '../types';
import thumbRajShamaniOriginal from '../assets/images/user_raj_shamani_original.jpg';
import thumbDhruvRatheeShareMarket from '../assets/images/user_dhruv_rathee_sharemarket.jpg';
import thumbYoureStillEarly from '../assets/images/user_youre_still_early.jpg';
import graphicDesignPoster from '../assets/images/user_graphic_design.jpg';
import nikeAirMaxCreative from '../assets/images/user_nike_airmax90.jpg';

/**
 * =========================================================================
 * SLINGARCH CREATES — CENTRALIZED EDITABLE CONTENT & CONFIGURATION
 * =========================================================================
 * Modify values in this file to update text, contact information, branding,
 * navigation, services, or add new portfolio projects. All UI components
 * automatically reflect changes made here.
 * =========================================================================
 */

export const SITE_CONTENT: SiteContent = {
  // 1. AGENCY & CONTACT INFORMATION
  agency: {
    name: 'SLINGARC',
    tagline: 'CREATES',
    fullName: 'Slingarc Creates',
    email: 'creatives.slingarc@gmail.com',
    phone: '+91 81475 93761',
    phones: ['+91 81475 93761', '+91 82930 54207'],
    logo: 'https://lh3.googleusercontent.com/aida/AEtjO1VNJ7UCrdssXJI8GkidbOfk5ukIA5LJcSmYiD2aojwbFDRFww_dSWnhJPMEnjfdH1kqxiDq-gjyeCl6nJk5Fi8MOdThDBBREzFkT390G22_AtyfLjsV8uVwnUXishIei87xDDkHVl7I-6dT1QxI4OnSHAhH6xnP2DQjyPNIBaiwTl9hKbbCywHHCK4UXHE5LHnJA_2Cz4fxnZziP7ua_83D2_TLIEM1SGSMrZBOJlQN7E4-v7jC_Sh7PbDu',
  },

  // 2. NAVIGATION LABELS & HEADER CTA
  navigation: {
    links: [
      { label: 'Work', id: 'work' },
      { label: 'Services', id: 'services' },
      { label: 'About', id: 'about' },
      { label: 'Process', id: 'process' },
      { label: 'Contact', id: 'contact' },
    ],
    ctaButton: 'Start a Project',
  },

  // 3. SOCIAL MEDIA CHANNELS
  socialLinks: [
    { label: 'Instagram', url: 'https://www.instagram.com/creatives.slingarc/' },
  ],

  // 4. HERO SECTION
  hero: {
    badgeTags: [
      { label: 'GRAPHIC DESIGN', category: 'Graphic Design' },
      { label: 'THUMBNAIL DESIGN', category: 'Thumbnail Design' },
      { label: 'SOCIAL MEDIA ADS', category: 'Social Media Ads' },
      { label: 'SOCIAL MEDIA CREATIVES', category: 'Social Media Creatives' },
      { label: 'VIDEO EDITING', category: 'Video Editing' },
      { label: 'SHORTS & REELS', category: 'Shorts & Reels' },
      { label: 'WEBSITE DESIGN', category: 'Website Design' },
      { label: 'DIGITAL DESIGN', category: 'Graphic Design' },
    ],
    headlineLine1: 'WE CREATE.',
    headlineLine2Muted: 'YOU GET',
    headlineLine2Bold: 'NOTICED.',
    description: 'A new creative agency focused on creating strong visual content and digital experiences for brands, creators, and businesses.',
    exploreButtonText: 'Explore Our Work',
    startButtonText: 'Start a Project',
    metrics: [
      { label: 'Agency Status', value: 'New Creative Agency' },
      { label: 'Creative Scope', value: 'Ads, Video & Digital' },
      { label: 'Quality Standard', value: 'High-Resolution 4K' },
      { label: 'Collaboration', value: 'Direct Communication' },
    ],
  },

  // 5. PORTFOLIO SHOWCASE & WORK
  portfolio: {
    sectionTag: 'PORTFOLIO & CONCEPT SAMPLES',
    title: 'SAMPLE WORK',
    watermark: '[ SLINGARC CREATES // PORTFOLIO ]',
    emptyStateMessage: 'More work coming soon.',
    emptyStateDescription: 'Projects in this category are currently being curated and prepared for the portfolio. In the meantime, feel free to reach out to discuss your project needs.',
    inquireButtonText: 'Inquire About A Project',

    /**
     * EASILY ADD NEW PROJECTS HERE:
     * Simply add an object with:
     * - id: unique slug (e.g. 'project-name')
     * - title: 'Project Title'
     * - category: 'Social Media Ads' | 'Social Media Creatives' | 'Thumbnail Design' | 'Video Editing' | 'Shorts & Reels' | 'Website Design' | 'Digital Design'
     * - imageUrl: 'https://image-url...'
     * - description: 'Short project summary'
     * - optional details (subtitle, badge, specs, highlights, deliverables)
     */
    projects: [
      {
        id: 'why-you-need-a-graphic-designer',
        title: 'WHY YOU NEED A GRAPHIC DESIGNER',
        subtitle: 'Brand Communication & Visual Strategy',
        category: 'Graphic Design',
        badge: 'Infographic Poster',
        secondaryBadge: 'Original',
        aspectRatio: 'vertical',
        description: 'WHY YOU NEED A GRAPHIC DESIGNER — High-impact educational poster and infographic artwork exploring the strategic importance of graphic design for modern brands. Designed with a vibrant ultraviolet and dark purple neon aesthetic, crisp typographic hierarchy, and custom iconography.',
        imageUrl: graphicDesignPoster,
        clientCategory: 'Brand Strategy & Graphic Design',
        details: 'WHY YOU NEED A GRAPHIC DESIGNER — High-impact educational poster and infographic artwork exploring the strategic importance of graphic design for modern brands. Designed with a vibrant ultraviolet and dark purple neon aesthetic, crisp typographic hierarchy, and custom iconography.',
        specs: [
          { label: 'Format', value: '1131 × 1600 px', detail: 'High-Resolution Poster & Social Infographic' },
          { label: 'Aspect Ratio', value: 'Vertical (≈ 3:4.2)', detail: 'Print & Digital Display Ready' },
          { label: 'Palette', value: 'Ultraviolet & Deep Plum', detail: 'Neon Purple (#9836F7) & Midnight Black' },
          { label: 'Typography', value: 'Modern Sans-Serif Display', detail: 'Clean High-Legibility Title & Body Hierarchy' },
          { label: 'Type', value: 'Graphic Design', detail: 'Editorial Poster / Brand Asset' },
          { label: 'Author Credit', value: 'Raushni Sharma', detail: 'Creative Design & Layout' },
        ],
        highlights: [
          'Bold headline typography "WHY YOU NEED A GRAPHIC DESIGNER" with immediate visual impact',
          'Striking ultraviolet and deep dark purple contrasting color scheme',
          'Detailed infographic breakdown of design value, brand presence, and visual communication',
          'Clean, balanced vertical grid optimized for social feeds, digital posters, and brand guides',
        ],
        deliverables: [
          'Full-resolution master vertical poster graphic (1131 × 1600 px)',
          'Print-ready and web-optimized digital asset versions',
          'Multi-platform social carousel / story compatible crop',
        ],
        turnaround: 'Production Ready',
      },
      {
        id: 'nike-air-max-90-campaign',
        title: 'NIKE AIR MAX 90 — JUST DO IT',
        subtitle: 'Commercial Storyboard & Product Campaign',
        category: 'Graphic Design',
        badge: 'Ad Creative',
        secondaryBadge: 'Original',
        aspectRatio: 'landscape',
        description: 'NIKE AIR MAX 90 — Dynamic athletic product showcase & commercial campaign creative featuring Central Park dawn sunrise concept, close-up shoe craftsmanship, dynamic sports action sequences, "Push Beyond Limits" narrative, and e-commerce "Add to Cart" call-to-action.',
        imageUrl: nikeAirMaxCreative,
        clientCategory: 'Footwear & Commercial Advertising',
        details: 'NIKE AIR MAX 90 — Dynamic athletic product showcase & commercial campaign creative featuring Central Park dawn sunrise concept, close-up shoe craftsmanship, dynamic sports action sequences, "Push Beyond Limits" narrative, and e-commerce "Add to Cart" call-to-action.',
        specs: [
          { label: 'Format', value: '1600 × 960 px', detail: 'High-Resolution Landscape Campaign Banner (5:3)' },
          { label: 'Featured Product', value: 'Nike Air Max 90 ($289)', detail: 'Iconic Silhouette & Sole Detail' },
          { label: 'Campaign Slogan', value: 'Just Do It', detail: 'Push Beyond Limits Narrative' },
          { label: 'Color Grading', value: 'Midnight Navy & Cyan Glow', detail: 'High-Contrast Athletic Night Aesthetic' },
          { label: 'Typography', value: 'Geometric Heavy Sans Display', detail: 'Bold Nike Editorial & E-commerce Style' },
          { label: 'Concept Scope', value: 'Commercial Storyboard & E-commerce Creative', detail: 'Ad Concept + Action Sequence' },
        ],
        highlights: [
          'High-impact hero visual of Nike Air Max 90 with ambient midnight blue lighting',
          'Integrated narrative storyboard: Central Park sunrise athlete workout sequence',
          'E-commerce purchase UI element with direct "Add to Cart" pricing ($289)',
          'Iconic "Just Do It" branding combined with motivational "Push Beyond Limits" messaging',
        ],
        deliverables: [
          'Master 1600 × 960 px campaign creative',
          'Commercial storyboard & product showcase banner',
          'E-commerce promo & social media ad formats',
        ],
        turnaround: 'Production Ready',
      },
      {
        id: 'what-is-share-market',
        title: 'WHAT IS SHARE MARKET?',
        subtitle: 'Learn. Understand. Grow.',
        category: 'Thumbnail Design',
        badge: 'YouTube Thumbnail',
        secondaryBadge: 'Original',
        aspectRatio: '16/9',
        description: 'WHAT IS SHARE MARKET? — Learn • Understand • Grow. High-impact finance and stock market educational thumbnail featuring Dhruv Rathee with clear bold typography, market chart backdrop, and high-contrast blue and yellow color hierarchy.',
        imageUrl: thumbDhruvRatheeShareMarket,
        clientCategory: 'Finance & Stock Market',
        details: 'WHAT IS SHARE MARKET? — Learn • Understand • Grow. High-impact finance and stock market educational thumbnail featuring clear bold typography, market chart backdrop, and high-contrast blue and yellow color hierarchy.',
        specs: [
          { label: 'Format', value: '16:9', detail: 'High Resolution YouTube Master' },
          { label: 'Theme', value: 'Stock Market & Finance', detail: 'Educational Masterclass' },
          { label: 'Typography', value: 'Bold Sans Display', detail: 'Two-Tone White & Amber' },
          { label: 'Type', value: 'Thumbnail Design', detail: 'Raw Client Asset' },
        ],
        highlights: [
          'High-contrast yellow and white typography with strong visual presence',
          'Sharp subject isolation and expressive presentation',
          'Stock market candlestick chart and financial backdrop atmosphere',
          'Triple focal anchor badges: Learn, Understand, Grow',
        ],
        deliverables: [
          'Full-resolution master 16:9 thumbnail file',
          'Optimized for YouTube desktop and mobile recommendations',
        ],
        turnaround: 'Production Ready',
      },
      {
        id: 'youre-still-early',
        title: "YOU'RE STILL EARLY",
        subtitle: 'Learn. Build. Grow. — Design Skills',
        category: 'Thumbnail Design',
        badge: 'YouTube Thumbnail',
        secondaryBadge: 'Original',
        aspectRatio: '16/9',
        description: "YOU'RE STILL EARLY — Learn. Build. Grow. Modern creator skill-building thumbnail featuring Ali Abdaal's Feel Good Productivity book, creative suite badges (Photoshop, Illustrator, After Effects, XD), and vibrant creator lighting.",
        imageUrl: thumbYoureStillEarly,
        clientCategory: 'Productivity & Creative Skills',
        details: "YOU'RE STILL EARLY — Learn. Build. Grow. Modern creator skill-building thumbnail featuring Ali Abdaal's Feel Good Productivity book, creative suite badges (Photoshop, Illustrator, After Effects, XD), and vibrant creator lighting.",
        specs: [
          { label: 'Format', value: '16:9', detail: 'High Resolution YouTube Master' },
          { label: 'Theme', value: 'Creator & Productivity', detail: 'Design Skills & Growth' },
          { label: 'Key Elements', value: 'Book Prop + App Badges', detail: 'Ps, Ai, Ae, Xd Icons' },
          { label: 'Type', value: 'Thumbnail Design', detail: 'Raw Client Asset' },
        ],
        highlights: [
          'Dynamic typography with brush-stroke highlight accent',
          'Clear prop and book framing with high readability',
          'Glowing Adobe software icon badges across the lower third',
          'Vibrant neon edge lighting and clean dark background contrast',
        ],
        deliverables: [
          'Full-resolution master 16:9 thumbnail file',
          'Optimized for YouTube browsing and suggested feed',
        ],
        turnaround: 'Production Ready',
      },
      {
        id: 'will-indias-economy-crash-soon',
        title: "WILL INDIA'S ECONOMY CRASH SOON?",
        subtitle: 'Geopolitics & Financial Analysis',
        category: 'Thumbnail Design',
        badge: 'YouTube Thumbnail',
        secondaryBadge: 'Original',
        aspectRatio: '16/9',
        description: "WILL INDIA'S ECONOMY CRASH SOON? Dramatic dual-speaker geopolitical and macroeconomic debate thumbnail featuring Raj Shamani with downward trending crash charts, rupee indicator, and warning signage.",
        imageUrl: thumbRajShamaniOriginal,
        clientCategory: 'Geopolitics & Economy',
        details: "WILL INDIA'S ECONOMY CRASH SOON? Dramatic dual-speaker geopolitical and macroeconomic debate thumbnail with downward trending crash charts, rupee indicator, and warning signage.",
        specs: [
          { label: 'Format', value: '16:9', detail: 'High Resolution YouTube Master' },
          { label: 'Theme', value: 'Indian Economy & Geopolitics', detail: 'Crisis & Market Debate' },
          { label: 'Style', value: 'Dual Speaker Debate', detail: 'High Tension Red & Amber Palette' },
          { label: 'Type', value: 'Thumbnail Design', detail: 'Raw Client Asset' },
        ],
        highlights: [
          'Dual speaker face-off composition creating instant narrative tension',
          'Textured two-tone title styling with red highlight banner',
          'Downward crash arrow and BSE / stock market backdrop',
          'Rupee symbol with hazard warning icon for urgency',
        ],
        deliverables: [
          'Full-resolution master 16:9 thumbnail file',
          'Maximum click-through rate optimization for high-stakes topics',
        ],
        turnaround: 'Production Ready',
      },
    ],
  },

  // 6. SERVICES & CAPABILITIES
  services: {
    sectionTag: 'SERVICES & CAPABILITIES',
    title: 'WHAT WE CREATE',
    description: 'A multi-service creative agency building visual content, digital marketing assets, and interactive experiences for brands and creators.',
    items: [
      {
        id: 'social-media-ads',
        number: '01',
        tagline: 'DIGITAL CAMPAIGNS',
        title: 'Social Media Ads',
        description: 'Static and motion ad creatives designed for social media platforms and digital marketing campaigns.',
        specs: 'Multi-Ratio / Digital Ads',
        iconName: 'campaign',
        isSpecialty: false,
        categoryKey: 'Social Media Ads',
      },
      {
        id: 'social-media-creatives',
        number: '02',
        tagline: 'BRAND & CONTENT',
        title: 'Social Media Posts',
        description: 'Engaging feed posts, carousels, and social banners designed to help brands build a consistent visual presence.',
        specs: 'Carousels & Posts / Social Assets',
        iconName: 'view_in_ar',
        isSpecialty: false,
        categoryKey: 'Social Media Creatives',
      },
      {
        id: 'thumbnail-design',
        number: '03',
        tagline: 'PACKAGING & COVERS',
        title: 'Thumbnail Design',
        description: 'YouTube and video packaging designed with clear visual hierarchy, bold typography, and high contrast.',
        specs: '4K UHD / Composition & Color',
        iconName: 'smart_display',
        isSpecialty: false,
        categoryKey: 'Thumbnail Design',
      },
      {
        id: 'video-editing',
        number: '04',
        tagline: 'POST-PRODUCTION',
        title: 'Video Editing',
        description: 'Thoughtful narrative pacing, clean sound design, and color grading for videos, creators, and brands.',
        specs: 'Color Grading / Sound Design',
        iconName: 'movie_edit',
        isSpecialty: false,
        categoryKey: 'Video Editing',
      },
      {
        id: 'shorts-reels',
        number: '05',
        tagline: 'VERTICAL CONTENT',
        title: 'Shorts & Reels',
        description: 'Vertical short-form video editing with concise hooks and clean captions for YouTube Shorts, Reels, and TikTok.',
        specs: '9:16 Vertical / Short-Form',
        iconName: 'play_circle',
        isSpecialty: false,
        categoryKey: 'Shorts & Reels',
      },
      {
        id: 'website-design',
        number: '06',
        tagline: 'DIGITAL INTERFACES',
        title: 'Website Design',
        description: 'Modern, responsive website designs crafted for brands, businesses, and creators with clean layout and typography.',
        specs: 'Responsive Layouts / Modern UI',
        iconName: 'devices',
        isSpecialty: false,
        categoryKey: 'Website Design',
      },
      {
        id: 'digital-design',
        number: '07',
        tagline: 'VISUAL ASSETS',
        title: 'Graphic & Digital Design',
        description: 'High-impact posters, visual identity assets, custom graphics, marketing collateral, and digital illustrations.',
        specs: 'Posters & Collateral / Visual Assets',
        iconName: 'draw',
        isSpecialty: false,
        categoryKey: 'Graphic Design',
      },
    ],
  },

  // 7. ABOUT AGENCY PROFILE
  about: {
    sectionTag: 'AGENCY PROFILE & VISION',
    headline: 'SLINGARCH CREATES.',
    lead: 'Slingarch Creates is a new creative agency focused on creating strong visual content and digital experiences for brands, creators, and businesses.',
    description: 'We are currently building our portfolio and preparing to collaborate with new clients. Whether you need social media ads, branded content, video editing, web design, or digital graphics, our goal is to deliver clean, custom visual work crafted around your specific project needs.',
    capabilities: [
      'Social media ads & campaign creatives',
      'Branded social posts & carousel graphics',
      'High-contrast thumbnail design & packaging',
      'Video editing, pacing & audio cleanup',
      'Short-form vertical video (Reels & Shorts)',
      'Modern, responsive website design',
      'Custom digital graphics & visual assets',
    ],
    stats: [
      {
        metric: 'Full Scope',
        label: 'Creative Capabilities',
        description: 'Offering digital design, video editing, social media assets, and web design for your visual needs.',
      },
      {
        metric: '100%',
        label: 'Custom Crafted Designs',
        description: 'Every project is created specifically for your topic, audience, and creative goals without relying on generic templates.',
      },
      {
        metric: 'Direct',
        label: 'Client Collaboration',
        description: 'Work directly with the creator behind each asset through clear, honest, and responsive communication.',
      },
    ],
  },

  // 8. CREATIVE PROCESS
  process: {
    sectionTag: 'HOW WE WORK WITH CLIENTS',
    title: 'OUR PLANNED PROCESS',
    steps: [
      {
        number: '01',
        title: 'DISCOVER',
        description: 'We start by discussing your project scope, vision, goals, and target audience to align on the brief.',
        phaseLabel: 'Phase 01 // Brief & Objectives',
        isCurrent: true,
      },
      {
        number: '02',
        title: 'CONCEPT',
        description: 'We explore visual directions, color schemes, typography, and composition layouts tailored to your project.',
        phaseLabel: 'Phase 02 // Direction & Layout',
      },
      {
        number: '03',
        title: 'CREATE',
        description: 'We design and refine the visual assets with close attention to detail and creative craft.',
        phaseLabel: 'Phase 03 // Design & Craft',
      },
      {
        number: '04',
        title: 'DELIVER',
        description: 'We review the work together and deliver final high-resolution files ready for your platforms.',
        phaseLabel: 'Phase 04 // Review & Delivery',
      },
    ],
  },

  // 9. PRODUCTION TOOLS
  tools: {
    sectionTag: 'TOOLS & SOFTWARE',
    title: 'TOOLS WE WORK WITH',
    items: [
      { name: 'Photoshop', role: 'Compositing & Grade', iconName: 'layers' },
      { name: 'Illustrator', role: 'Vector & Identity', iconName: 'draw' },
      { name: 'Blender 3D', role: 'Lighting & Renders', iconName: '3d_rotation' },
      { name: 'DaVinci Resolve', role: 'Video & Color', iconName: 'tune' },
      { name: 'Figma', role: 'Web & Systems', iconName: 'design_services' },
      { name: 'Premiere Pro', role: 'Timeline & Pacing', iconName: 'movie_edit' },
    ],
  },

  // 10. CONTACT / CTA
  contact: {
    sectionTag: 'INITIATE INQUIRY // SLINGARCH CREATES',
    heading: "LET'S MAKE SOMETHING WORTH SEEING.",
    description: 'Have a project, idea, or brand in mind? Reach out to discuss how we can work together.',
    primaryCtaText: 'START A PROJECT',
    secondaryCtaText: 'View Sample Work',
    directContactLabel: 'Direct Email',
    phoneContactLabel: 'Direct Phone',
    perks: [
      { text: 'Direct Creative Collaboration' },
      { text: 'Custom Project Scoping' },
      { text: 'Tailored Asset Delivery' },
    ],
  },

  // 11. FOOTER
  footer: {
    description: 'A new creative agency focused on creating strong visual content and digital experiences for brands, creators, and businesses.',
    directInquiriesLabel: 'Direct Inquiries',
    phoneLabel: 'Direct Phone',
    navigationIndexLabel: 'Navigation Index',
    networkLabel: 'Network',
    copyright: '© 2026 Slingarch Creates. All rights reserved.',
    tagline: 'Creative Agency',
  },
};
