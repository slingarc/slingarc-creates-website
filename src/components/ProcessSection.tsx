import { SITE_CONTENT } from '../data/siteContent';

export default function ProcessSection() {
  const { process } = SITE_CONTENT;

  return (
    <section className="relative z-10 w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto" id="process">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block mb-2">
          {process.sectionTag}
        </span>
        <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight">
          {process.title}
        </h2>
      </div>

      {/* 4-Step Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.steps.map((step) => {
          return (
            <div
              key={step.number}
              className="relative p-7 rounded-xl bg-[#1c1b1d]/80 backdrop-blur-xl border border-white/[0.08] flex flex-col justify-between overflow-hidden shadow-lg group hover:border-white/[0.2] transition-colors"
            >
              <div>
                {/* Step Index & Phase Indicator */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display-hero text-3xl font-black text-white/40 group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                  <span className="font-label-code text-[11px] uppercase tracking-wider text-[#c6c6cf]">
                    {step.phaseLabel}
                  </span>
                </div>

                <h3 className="font-headline-md text-xl uppercase text-white tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="font-body-muted text-sm text-[#c4c7c9] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative progress indicator */}
              <div className="mt-8 pt-4 border-t border-white/[0.08] flex items-center gap-1.5">
                <span className="h-1 flex-1 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                <span className="h-1 w-2 rounded-full bg-white/40" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
