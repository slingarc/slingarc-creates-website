import { SITE_CONTENT } from '../data/siteContent';

export default function AboutSection() {
  const { about } = SITE_CONTENT;

  return (
    <section className="relative z-10 w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left: Statement & Copy */}
        <div className="lg:col-span-7 space-y-6">
          <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block">
            {about.sectionTag}
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tight leading-none">
            {about.headline}
          </h2>
          <p className="font-body-lead text-lg sm:text-xl text-[#e5e1e4] font-medium leading-relaxed">
            {about.lead}
          </p>
          <p className="font-body-default text-base text-[#c4c7c9] leading-relaxed">
            {about.description}
          </p>

          {/* Studio Capabilities Checklist */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {about.capabilities.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-white text-[20px] shrink-0">
                  check_circle
                </span>
                <span className="font-body-default text-sm sm:text-base text-[#e5e1e4]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Studio Statistics Glass Card */}
        <div className="lg:col-span-5">
          <div className="p-8 sm:p-10 rounded-2xl bg-[#2a2a2c]/65 backdrop-blur-2xl border border-white/[0.12] shadow-2xl space-y-7">
            {about.stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`space-y-1 ${idx !== 0 ? 'pt-6 border-t border-white/[0.08]' : ''}`}
              >
                <span className="font-display-hero text-4xl sm:text-5xl text-white leading-none font-bold block">
                  {stat.metric}
                </span>
                <span className="font-headline-md text-base sm:text-lg uppercase text-[#c6c6cf] font-semibold block">
                  {stat.label}
                </span>
                <p className="font-body-muted text-xs sm:text-sm text-[#c4c7c9] leading-relaxed">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
