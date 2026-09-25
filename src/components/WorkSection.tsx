import { SITE_CONTENT } from '../data/siteContent';
import { PortfolioProject, ProjectCategory } from '../types';
import { ArrowUpRight, ArrowRight, FolderPlus } from 'lucide-react';

interface WorkSectionProps {
  onOpenProject: (project: PortfolioProject) => void;
  onReservePlacement: (categoryName?: string) => void;
  currentCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
}

const CATEGORIES: { label: string; value: ProjectCategory }[] = [
  { label: 'All', value: 'All' },
  { label: 'Graphic Design', value: 'Graphic Design' },
  { label: 'Thumbnail Design', value: 'Thumbnail Design' },
  { label: 'Social Media Ads', value: 'Social Media Ads' },
  { label: 'Social Media Creatives', value: 'Social Media Creatives' },
  { label: 'Video Editing', value: 'Video Editing' },
  { label: 'Shorts & Reels', value: 'Shorts & Reels' },
  { label: 'Website Design', value: 'Website Design' },
  { label: 'Digital Design', value: 'Digital Design' },
];

export default function WorkSection({
  onOpenProject,
  onReservePlacement,
  currentCategory,
  onSelectCategory,
}: WorkSectionProps) {
  const { portfolio } = SITE_CONTENT;

  // Filter projects by category without page reload (with Graphic/Digital Design cross-compatibility)
  const filteredProjects =
    currentCategory === 'All'
      ? portfolio.projects
      : portfolio.projects.filter((p) => {
          if (currentCategory === 'Graphic Design' || currentCategory === 'Digital Design') {
            return p.category === 'Graphic Design' || p.category === 'Digital Design';
          }
          return p.category === currentCategory;
        });

  const getCategoryCount = (catValue: ProjectCategory) => {
    if (catValue === 'All') return portfolio.projects.length;
    if (catValue === 'Graphic Design' || catValue === 'Digital Design') {
      return portfolio.projects.filter((p) => p.category === 'Graphic Design' || p.category === 'Digital Design').length;
    }
    return portfolio.projects.filter((p) => p.category === catValue).length;
  };

  const hasProjects = filteredProjects.length > 0;

  return (
    <section className="relative z-10 w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto" id="work">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
        <div>
          <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block mb-2">
            {portfolio.sectionTag}
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight">
            {portfolio.title}
          </h2>
        </div>
        <div className="font-label-code text-xs text-[#c4c7c9] tracking-wider uppercase">
          {portfolio.watermark}
        </div>
      </div>

      {/* Responsive Category Filter Pills (client-side, no reload) */}
      <div className="flex flex-wrap items-center gap-1.5 mb-10 p-1.5 rounded-xl bg-[#1c1b1d]/70 backdrop-blur-xl border border-white/[0.08] w-fit shadow-md">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat.value;
          const count = getCategoryCount(cat.value);
          return (
            <button
              key={cat.value}
              onClick={() => onSelectCategory(cat.value)}
              className={`px-3.5 py-2 rounded-lg font-label-code text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#353437] text-white font-semibold shadow-sm border border-white/[0.14]'
                  : 'text-[#c4c7c9] hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <span>{cat.label}</span>
              {count > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white font-bold' : 'bg-white/[0.08] text-[#a0a3a6]'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Genuine Responsive Masonry / Pinterest-style Gallery */}
      {hasProjects ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => onOpenProject(project)}
              className="group relative rounded-xl bg-[#1c1b1d] border border-white/[0.08] hover:border-white/[0.25] overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_24px_50px_rgba(0,0,0,0.85)] cursor-pointer break-inside-avoid mb-6 w-full inline-block"
              style={{ breakInside: 'avoid' }}
            >
              {/* Visual Container: No fixed aspect-ratio, no min/max height constraint */}
              <div className="relative w-full overflow-hidden bg-[#09090b]">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  className="w-full h-auto block object-contain transition-transform duration-300 group-hover:scale-[1.015]"
                  style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  loading="eager"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Factual Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5 pointer-events-none z-10">
                  <span className="px-2.5 py-1 rounded bg-[#0e0e10]/85 backdrop-blur-md border border-white/[0.12] font-label-code text-[11px] uppercase text-white tracking-wider font-semibold shadow-md">
                    {project.badge || project.category}
                  </span>
                  {project.secondaryBadge && (
                    <span className="px-2.5 py-1 rounded bg-[#0e0e10]/85 backdrop-blur-md border border-white/[0.12] font-label-code text-[11px] uppercase text-[#c6c6cf] tracking-wider shadow-md">
                      {project.secondaryBadge}
                    </span>
                  )}
                </div>

                {/* Subtle hover icon overlay */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-[#0e0e10]/80 backdrop-blur-md border border-white/[0.15] flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg z-10">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Metadata & Content */}
              <div className="p-5 sm:p-6 relative">
                <span className="font-label-code text-xs uppercase text-[#c6c6cf] tracking-wider block mb-1.5">
                  {project.subtitle || project.category}
                </span>
                <h3 className="font-headline-md text-xl uppercase text-white tracking-tight mb-2 group-hover:text-[#e2e1eb] transition-colors">
                  {project.title}
                </h3>
                <p className="font-body-muted text-sm text-[#c4c7c9] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Action Bar */}
                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[#c4c7c9]">
                  <span className="font-label-code text-xs uppercase text-[#8e9193]">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-label-code text-xs uppercase text-white group-hover:text-[#e2e1eb] transition-colors font-medium py-1">
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}

          {/* Clean "Upcoming Work In Progress" Card */}
          <div
            className="group relative rounded-xl bg-[#201f22]/45 backdrop-blur-xl border border-white/[0.08] hover:border-white/[0.2] p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl transition-all break-inside-avoid mb-6 w-full inline-block"
            style={{ breakInside: 'avoid' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2c]/25 via-transparent to-transparent pointer-events-none" />

            {/* Header indicator */}
            <div className="relative z-10 flex items-center justify-between mb-4">
              <span className="font-label-code text-xs uppercase text-[#c6c6cf] tracking-widest font-semibold">
                + UPCOMING // {currentCategory === 'All' ? 'NEW RELEASES' : currentCategory.toUpperCase()}
              </span>
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
            </div>

            {/* Narrative text */}
            <div className="relative z-10 py-4">
              <span className="font-label-code text-xs uppercase text-[#8e9193] block mb-1.5">
                Portfolio Curation
              </span>
              <h3 className="font-headline-lg text-xl sm:text-2xl uppercase text-white tracking-tight leading-tight">
                {currentCategory === 'All'
                  ? 'More Projects In Preparation'
                  : `${currentCategory} Coming Soon`}
              </h3>
              <p className="font-body-default text-sm text-[#c4c7c9] mt-2.5 leading-relaxed">
                {currentCategory === 'All'
                  ? 'Additional project showcases across Social Media Ads, Video Editing, and Web Design are being prepared for the portfolio.'
                  : `Projects in ${currentCategory} are currently being prepared. Feel free to reach out to discuss your project needs.`}
              </p>
            </div>

            {/* Action Footer */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-4 mt-2 border-t border-white/[0.08]">
              <span className="font-label-code text-xs text-[#c6c6cf]">
                Open for New Projects
              </span>
              <button
                onClick={() => onReservePlacement(currentCategory !== 'All' ? currentCategory : 'New Project')}
                className="inline-flex items-center gap-1.5 font-label-code text-xs uppercase text-white hover:text-[#e2e1eb] transition-colors font-semibold cursor-pointer group"
              >
                <span>{portfolio.inquireButtonText}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Clean Empty State Message for categories without projects yet */
        <div className="rounded-2xl bg-[#1c1b1d]/75 backdrop-blur-2xl border border-white/[0.1] p-10 sm:p-14 text-center max-w-2xl mx-auto shadow-2xl space-y-6">
          <div className="w-14 h-14 rounded-full bg-[#2a2a2c] border border-white/[0.1] flex items-center justify-center mx-auto text-[#c4c7c9]">
            <FolderPlus className="w-6 h-6" />
          </div>
          <div>
            <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block mb-2">
              PORTFOLIO STATUS // {currentCategory.toUpperCase()}
            </span>
            <h3 className="font-headline-lg text-2xl sm:text-3xl uppercase text-white tracking-tight">
              {portfolio.emptyStateMessage}
            </h3>
            <p className="font-body-default text-sm text-[#c4c7c9] max-w-md mx-auto mt-2 leading-relaxed">
              Projects in {currentCategory} are currently being curated and prepared for the portfolio. In the meantime, feel free to reach out to discuss your project needs.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onReservePlacement(currentCategory)}
              className="px-6 py-3 rounded-lg bg-white text-[#131315] font-semibold text-xs font-label-code uppercase tracking-wider hover:bg-[#e2e1eb] transition-colors cursor-pointer"
            >
              Inquire About {currentCategory}
            </button>
            <button
              onClick={() => onSelectCategory('All')}
              className="px-6 py-3 rounded-lg bg-[#2a2a2c] text-white text-xs font-label-code uppercase tracking-wider hover:bg-[#353437] transition-colors cursor-pointer"
            >
              View All Work
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
