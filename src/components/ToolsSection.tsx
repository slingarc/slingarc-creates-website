import { SITE_CONTENT } from '../data/siteContent';

export default function ToolsSection() {
  const { tools } = SITE_CONTENT;

  return (
    <section className="relative z-10 w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block mb-2">
          {tools.sectionTag}
        </span>
        <h2 className="font-headline-xl text-3xl sm:text-4xl lg:text-5xl uppercase text-white tracking-tight">
          {tools.title}
        </h2>
      </div>

      {/* Floating Glass Panels for Core Tools */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {tools.items.map((tool) => (
          <div
            key={tool.name}
            className="p-5 rounded-xl bg-[#1c1b1d]/70 backdrop-blur-xl border border-white/[0.08] flex flex-col items-center justify-center text-center group hover:bg-[#2a2a2c]/85 hover:border-white/[0.22] transition-all duration-300 shadow-md hover:shadow-2xl cursor-default"
          >
            <div className="w-12 h-12 rounded-lg bg-[#0e0e10] border border-white/[0.08] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white text-[24px]">
                {tool.iconName}
              </span>
            </div>
            <span className="font-headline-md text-white text-sm sm:text-base font-semibold uppercase tracking-tight">
              {tool.name}
            </span>
            <span className="font-label-code text-[11px] uppercase text-[#c4c7c9] mt-1 tracking-wider">
              {tool.role}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
