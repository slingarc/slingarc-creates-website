import { SITE_CONTENT } from '../data/siteContent';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onFilterByCategory: (categoryKey: string) => void;
}

export default function ServicesSection({
  onSelectService,
  onFilterByCategory,
}: ServicesSectionProps) {
  const { services } = SITE_CONTENT;

  return (
    <section className="relative z-10 w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto" id="services">
      {/* Section Header & Subhead */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block mb-2">
            {services.sectionTag}
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight">
            {services.title}
          </h2>
        </div>
        <p className="font-body-muted text-sm md:text-base text-[#c4c7c9] max-w-md">
          {services.description}
        </p>
      </div>

      {/* Visually Distinct Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.items.map((service) => {
          const isPrimary = service.isSpecialty;
          return (
            <div
              key={service.id}
              onClick={() => {
                onSelectService(service);
                if (service.categoryKey) {
                  onFilterByCategory(service.categoryKey);
                }
              }}
              className={`relative group p-7 rounded-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer border ${
                isPrimary
                  ? 'bg-[#2a2a2c]/75 backdrop-blur-2xl border-white/[0.18] shadow-2xl hover:shadow-[0_20px_45px_rgba(0,0,0,0.8)] hover:border-white/[0.3]'
                  : 'bg-[#201f22]/60 backdrop-blur-xl border-white/[0.07] hover:bg-[#2a2a2c]/65 hover:border-white/[0.16] shadow-xl hover:shadow-2xl'
              }`}
            >
              {/* Ambient blur for primary specialty card */}
              {isPrimary && (
                <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
              )}

              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <span
                    className={`font-label-code text-xs tracking-wider font-semibold ${
                      isPrimary ? 'text-white' : 'text-[#c4c7c9]'
                    }`}
                  >
                    {service.tagline}
                  </span>
                  <div className="flex items-center gap-2">
                    {service.badge && (
                      <span className="px-2 py-0.5 rounded bg-white text-[#131315] font-label-code text-[10px] font-bold uppercase tracking-wider shadow-sm">
                        {service.badge}
                      </span>
                    )}
                    <span className="font-label-code text-xs text-[#8e9193]">
                      {service.number}
                    </span>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-lg bg-[#0e0e10] border border-white/[0.08] flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">
                    {service.iconName}
                  </span>
                </div>

                <h3 className="font-headline-md text-2xl uppercase text-white tracking-tight mb-2 group-hover:text-[#e2e1eb] transition-colors">
                  {service.title}
                </h3>
                <p className="font-body-muted text-sm text-[#c4c7c9] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-label-code text-xs text-[#8e9193]">
                  {service.specs}
                </span>
                <span className="inline-flex items-center gap-1 font-label-code text-xs uppercase text-white group-hover:text-[#e2e1eb] font-semibold">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
