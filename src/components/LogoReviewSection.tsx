import definitiveMasterBoard from '../assets/images/sc_definitive_master_board_1790233230610.jpg';
import definitivePrecisionSheet from '../assets/images/sc_definitive_precision_sheet_1790233245929.jpg';
import inversionGrid from '../assets/images/sc_inversion_grid_1790230335893.jpg';

export default function LogoReviewSection() {
  return (
    <section id="logo-review" className="relative z-20 py-16 px-4 md:px-8 bg-[#0d0d0f] border-b border-emerald-500/30">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner Header */}
        <div className="bg-[#141416] border-2 border-emerald-500/40 rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              LOGO APPROVAL STAGE • ACTIVE REVIEW
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white uppercase font-sans">
              Definitive SC Monogram Brand System
            </h2>
            <p className="text-sm text-white/70 max-w-2xl">
              Meticulously refined bespoke <strong>S + C Möbius Loop</strong> for <strong>SLINGARCH CREATES</strong>. 
              Featuring sculpted negative space channels, harmonized 45° terminal cuts, and optical balance at micro and macro scales.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#board-a"
              className="px-5 py-2.5 rounded-lg bg-emerald-500 text-black font-bold text-xs uppercase font-mono tracking-wider hover:bg-emerald-400 transition-colors text-center"
            >
              Inspect Board A ↓
            </a>
            <a
              href="#vector-test"
              className="px-5 py-2.5 rounded-lg bg-white/10 text-white font-bold text-xs uppercase font-mono tracking-wider hover:bg-white/20 transition-colors text-center"
            >
              Live Vector Test ↓
            </a>
          </div>
        </div>

        {/* Board A: Primary Definitive Master Board */}
        <div id="board-a" className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">Board 01</span>
              <h3 className="text-xl font-bold text-white uppercase">Primary Final Master Board (8 Formats)</h3>
            </div>
            <span className="text-xs font-mono text-white/50 hidden sm:inline-block">High-Resolution 4:3 Studio Export</span>
          </div>

          <div className="rounded-2xl overflow-hidden border-2 border-white/20 bg-black shadow-2xl">
            <img
              src={definitiveMasterBoard}
              alt="Slingarch Creates Primary Definitive Master Board"
              className="w-full h-auto block object-contain"
            />
          </div>
          <p className="text-xs font-mono text-white/60">
            Displays: Large Standalone SC Symbol • Horizontal Lockup (SLINGARCH CREATES) • Stacked Centered Lockup • Circular Instagram Profile Avatar • 32px Favicon • 16px Favicon • High-Contrast Inversion Cards
          </p>
        </div>

        {/* Board B: Technical Precision Specification Sheet */}
        <div className="space-y-4 pt-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">Board 02</span>
              <h3 className="text-xl font-bold text-white uppercase">Widescreen Technical Precision & Alignment Sheet</h3>
            </div>
            <span className="text-xs font-mono text-white/50 hidden sm:inline-block">High-Resolution 16:9 Grid</span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
            <img
              src={definitivePrecisionSheet}
              alt="Slingarch Creates Technical Precision Sheet"
              className="w-full h-auto block object-contain"
            />
          </div>
        </div>

        {/* Board C: High Contrast Inversion Card */}
        <div className="space-y-4 pt-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">Board 03</span>
              <h3 className="text-xl font-bold text-white uppercase">Monochrome Positive & Negative Contrast Test</h3>
            </div>
            <span className="text-xs font-mono text-white/50 hidden sm:inline-block">Pure White-on-Black vs. Black-on-White</span>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/15 bg-black shadow-2xl">
            <img
              src={inversionGrid}
              alt="Slingarch Creates Inversion Grid"
              className="w-full h-auto block object-contain"
            />
          </div>
        </div>

        {/* Interactive Live Vector & Scale Sandbox */}
        <div id="vector-test" className="space-y-6 pt-10 border-t border-white/10">
          <div className="space-y-1">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">Live Code Verification</span>
            <h3 className="text-xl font-bold text-white uppercase">Pure Inline Vector Rendering (SVG)</h3>
            <p className="text-xs text-white/60">
              Live mathematical SVG code rendering at full scale, micro favicon sizes, and circular profile avatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* White on Black Card */}
            <div className="p-8 md:p-12 rounded-2xl bg-black border border-white/20 flex flex-col items-center justify-center min-h-[280px] text-center">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-6">
                White on Black (Dark Mode Header)
              </span>
              <div className="flex items-center gap-5">
                <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52H68C72.42 52 76 55.58 76 60C76 64.42 72.42 68 68 68H28C23.58 68 20 64.42 20 60V56H8V60C8 71.05 16.95 80 28 80H68C79.05 80 88 71.05 88 60C88 48.95 79.05 40 68 40H32C27.58 40 24 36.42 24 32C24 27.58 27.58 24 32 24H72C76.42 24 80 27.58 80 32V36H92V32C92 20.95 83.05 12 72 12H32Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-extrabold text-2xl md:text-3xl tracking-tighter uppercase font-sans text-white">
                    SLINGARCH
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.35em] text-white/60 uppercase">
                    CREATES
                  </div>
                </div>
              </div>
            </div>

            {/* Black on White Card */}
            <div className="p-8 md:p-12 rounded-2xl bg-white border border-black/10 flex flex-col items-center justify-center min-h-[280px] text-center text-black">
              <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 mb-6">
                Black on White (Print / Documentation)
              </span>
              <div className="flex items-center gap-5">
                <svg className="w-16 h-16 text-black" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52H68C72.42 52 76 55.58 76 60C76 64.42 72.42 68 68 68H28C23.58 68 20 64.42 20 60V56H8V60C8 71.05 16.95 80 28 80H68C79.05 80 88 71.05 88 60C88 48.95 79.05 40 68 40H32C27.58 40 24 36.42 24 32C24 27.58 27.58 24 32 24H72C76.42 24 80 27.58 80 32V36H92V32C92 20.95 83.05 12 72 12H32Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="text-left">
                  <div className="font-extrabold text-2xl md:text-3xl tracking-tighter uppercase font-sans text-black">
                    SLINGARCH
                  </div>
                  <div className="font-mono text-[9px] tracking-[0.35em] text-black/60 uppercase">
                    CREATES
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Micro Legibility Scale Test Row */}
          <div className="p-6 rounded-2xl bg-[#141416] border border-white/10 flex flex-wrap items-center justify-between gap-6">
            
            {/* 16px test */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-black border border-white/40 rounded flex items-center justify-center p-[2px]">
                <div className="w-full h-full bg-white rounded-xs" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white">16px Micro Tab</div>
                <div className="text-[10px] font-mono text-white/50">Smallest browser context</div>
              </div>
            </div>

            {/* 32px test */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-black border border-white/40 rounded-lg flex items-center justify-center p-1">
                <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52H68C72.42 52 76 55.58 76 60C76 64.42 72.42 68 68 68H28C23.58 68 20 64.42 20 60V56H8V60C8 71.05 16.95 80 28 80H68C79.05 80 88 71.05 88 60C88 48.95 79.05 40 68 40H32C27.58 40 24 36.42 24 32C24 27.58 27.58 24 32 24H72C76.42 24 80 27.58 80 32V36H92V32C92 20.95 83.05 12 72 12H32Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white">32px Favicon</div>
                <div className="text-[10px] font-mono text-white/50">Retina desktop tab</div>
              </div>
            </div>

            {/* Instagram Circular Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-black border-2 border-emerald-400 rounded-full flex items-center justify-center p-3 shadow-lg">
                <svg className="w-10 h-10 text-white" viewBox="0 0 100 100" fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52H68C72.42 52 76 55.58 76 60C76 64.42 72.42 68 68 68H28C23.58 68 20 64.42 20 60V56H8V60C8 71.05 16.95 80 28 80H68C79.05 80 88 71.05 88 60C88 48.95 79.05 40 68 40H32C27.58 40 24 36.42 24 32C24 27.58 27.58 24 32 24H72C76.42 24 80 27.58 80 32V36H92V32C92 20.95 83.05 12 72 12H32Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white">Instagram Profile Avatar</div>
                <div className="text-[10px] font-mono text-white/50">@slingarch.creates</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
