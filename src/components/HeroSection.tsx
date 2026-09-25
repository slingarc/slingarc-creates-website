import { SITE_CONTENT } from '../data/siteContent';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { ProjectCategory } from '../types';

interface HeroSectionProps {
  onExploreWork: () => void;
  onStartProject: () => void;
  onFilterSelect?: (category: ProjectCategory) => void;
}

export default function HeroSection({
  onExploreWork,
  onStartProject,
  onFilterSelect,
}: HeroSectionProps) {
  const { hero } = SITE_CONTENT;

  return (
    <section className="relative z-10 w-full min-h-[88vh] flex flex-col justify-center px-6 lg:px-10 pt-28 pb-16 max-w-7xl mx-auto">
      {/* Floating Glass Tags */}
      <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
        {hero.badgeTags.map((tag, idx) => (
          <button
            key={tag.label}
            onClick={() => onFilterSelect && onFilterSelect(tag.category)}
            className="px-4 py-1.5 rounded-full bg-[#2a2a2c]/40 hover:bg-[#2a2a2c]/80 backdrop-blur-xl border border-white/[0.06] hover:border-white/[0.16] shadow-lg flex items-center gap-2 transition-all cursor-pointer group"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                idx === 0 ? 'bg-white animate-pulse' : 'bg-[#c4c7c9] group-hover:bg-white'
              }`}
            />
            <span
              className={`font-label-code text-xs tracking-widest uppercase ${
                idx === 0 ? 'text-[#c6c6cf] font-semibold' : 'text-[#c4c7c9]'
              }`}
            >
              {tag.label}
            </span>
          </button>
        ))}
      </div>

      {/* Monumental Headline */}
      <div className="max-w-5xl">
        <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-[7rem] uppercase tracking-tighter text-white leading-[0.92] select-none">
          {hero.headlineLine1}
          <br />
          <span className="text-[#c6c6cf]/70">{hero.headlineLine2Muted}</span> {hero.headlineLine2Bold}
        </h1>
        <p className="mt-6 max-w-2xl font-body-lead text-lg md:text-xl text-[#c4c7c9] font-normal leading-relaxed">
          {hero.description}
        </p>
      </div>

      {/* Hero Actions */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          onClick={onExploreWork}
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white text-[#131315] font-semibold text-base transition-all duration-300 hover:bg-[#e2e1eb] shadow-[0_12px_36px_rgba(255,255,255,0.12)] hover:scale-[1.02] active:scale-[0.99] cursor-pointer group"
          id="hero-explore-work-btn"
        >
          <span>{hero.exploreButtonText}</span>
          <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
        </button>

        <button
          onClick={onStartProject}
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2a2a2c]/50 hover:bg-[#353437]/80 backdrop-blur-2xl text-[#e5e1e4] font-medium text-base transition-all duration-300 border border-white/[0.08] hover:border-white/[0.2] shadow-xl hover:shadow-[0_0_24px_rgba(255,255,255,0.08)] cursor-pointer group"
          id="hero-start-project-btn"
        >
          <span className="font-label-code text-sm uppercase tracking-wider">{hero.startButtonText}</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Editorial Status Bar */}
      <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6">
        {hero.metrics.map((metric) => (
          <div key={metric.label} className="space-y-1">
            <span className="font-label-code text-xs uppercase tracking-wider text-[#8e9193] block">
              {metric.label}
            </span>
            <span className="font-body-default text-sm md:text-base text-white font-semibold block">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
