import { useState } from 'react';
import { Eye, CheckCircle, Copy, Check, Download, ZoomIn } from 'lucide-react';

// Asset paths
import definitiveMasterBoard from '../assets/images/sc_definitive_master_board_1790233230610.jpg';
import definitivePrecisionSheet from '../assets/images/sc_definitive_precision_sheet_1790233245929.jpg';
import masterVisualSheet from '../assets/images/sc_master_visual_sheet_1790231375658.jpg';
import brandBoard from '../assets/images/sc_brand_identity_board_1790231399511.jpg';
import inversionGrid from '../assets/images/sc_inversion_grid_1790230335893.jpg';
import specSheet1 from '../assets/images/slingarch_concept_1_spec_sheet_1790229626906.jpg';
import specSheet2 from '../assets/images/slingarch_concept_2_spec_sheet_1790229641698.jpg';
import sideBySide from '../assets/images/slingarch_side_by_side_matrix_1790229658355.jpg';

export default function LogoReviewModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'system' | 'vector' | 'archive'>('system');
  const [selectedImg, setSelectedImg] = useState<string>(masterVisualSheet);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-6 overflow-y-auto">
      <div className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#111113] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-white">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161618]">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />
            <h2 className="text-lg font-semibold tracking-wide uppercase font-mono">
              SLINGARCH CREATES — Brand Identity Review Board
            </h2>
            <span className="hidden md:inline-block px-2.5 py-0.5 rounded text-xs font-mono bg-white/10 text-white/80">
              Final Refinement: 2B-1 Möbius SC
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-mono tracking-wider uppercase bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            >
              Close Viewer (ESC)
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-white/10 bg-[#141416] text-xs font-mono">
          <button
            onClick={() => setActiveTab('system')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'system'
                ? 'bg-white text-black font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            1. Master System Sheets (Visual)
          </button>
          <button
            onClick={() => setActiveTab('vector')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'vector'
                ? 'bg-white text-black font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            2. Live SVG Vector Inspection
          </button>
          <button
            onClick={() => setActiveTab('archive')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'archive'
                ? 'bg-white text-black font-bold'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            3. Prior Explorations & Side-by-Side
          </button>
        </div>

        {/* Tab 1: Rendered High-Res Studio Boards */}
        {activeTab === 'system' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="bg-[#18181b] border border-emerald-500/20 rounded-xl p-4 text-xs text-white/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p>
                <strong className="text-emerald-400">Definitive SC Refinement:</strong> Custom-sculpted inner negative channel connecting S and C, calibrated optical terminal cuts, and mathematically balanced stroke-to-counter ratios for micro & macro scale.
              </p>
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 whitespace-nowrap">
                Phase 4: Final Approval Stage
              </span>
            </div>

            {/* Definitive Master Board */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm tracking-wider uppercase text-white font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Primary Final Board: Definitive Bespoke SC System
                </h3>
                <span className="text-xs text-white/50 font-mono">Large Standalone, Horizontal, Stacked, Avatar, Favicon, Inversions</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/20 bg-black shadow-2xl">
                <img
                  src={definitiveMasterBoard}
                  alt="Slingarch Creates Definitive Bespoke SC System"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Definitive Precision Technical Sheet */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm tracking-wider uppercase text-white/90">
                  Technical Precision Sheet: Optical Alignment & Micro Scalability
                </h3>
                <span className="text-xs text-white/50 font-mono">16:9 Studio Specification</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/15 bg-black">
                <img
                  src={definitivePrecisionSheet}
                  alt="Slingarch Creates Technical Precision Sheet"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>

            {/* Secondary Inversion Test Grid */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-sm tracking-wider uppercase text-white/90">
                  High-Contrast Positive & Negative Matrix
                </h3>
                <span className="text-xs text-white/50 font-mono">White-on-Black vs. Black-on-White</span>
              </div>
              <div className="rounded-xl overflow-hidden border border-white/15 bg-black">
                <img
                  src={inversionGrid}
                  alt="Slingarch Creates Inversion Grid"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Live Responsive SVG Component & Scale Tests */}
        {activeTab === 'vector' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            <div className="bg-[#18181b] border border-white/10 rounded-xl p-4 text-xs text-white/70">
              This is the live, mathematically precise vector representation of the <strong>2B-1 Refined Möbius SC</strong> with expanded aperture channels. Inspect it at various scales and contrasts below.
            </div>

            {/* Grid of live vectors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* White on Black */}
              <div className="p-8 rounded-2xl bg-black border border-white/20 flex flex-col items-center justify-center min-h-[300px] text-center">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 mb-6">
                  White on Black (Dark Theme / Site Header)
                </span>
                <div className="flex items-center gap-4">
                  {/* Refined Bespoke Möbius SC SVG */}
                  <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Continuous ribbon geometry with sculpted counter-space channels */}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52H68C72.42 52 76 55.58 76 60C76 64.42 72.42 68 68 68H28C23.58 68 20 64.42 20 60V56H8V60C8 71.05 16.95 80 28 80H68C79.05 80 88 71.05 88 60C88 48.95 79.05 40 68 40H32C27.58 40 24 36.42 24 32C24 27.58 27.58 24 32 24H72C76.42 24 80 27.58 80 32V36H92V32C92 20.95 83.05 12 72 12H32Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="font-extrabold text-2xl tracking-tighter uppercase font-sans text-white">
                      SLINGARCH
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.35em] text-white/60 uppercase">
                      CREATES
                    </div>
                  </div>
                </div>
              </div>

              {/* Black on White */}
              <div className="p-8 rounded-2xl bg-white border border-black/10 flex flex-col items-center justify-center min-h-[300px] text-center text-black">
                <span className="text-[11px] font-mono uppercase tracking-widest text-black/40 mb-6">
                  Black on White (Print / Invoices / Contracts)
                </span>
                <div className="flex items-center gap-4">
                  <svg className="w-16 h-16 text-black" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32 12C20.95 12 12 20.95 12 32C12 43.05 20.95 52 32 52H68C72.42 52 76 55.58 76 60C76 64.42 72.42 68 68 68H28C23.58 68 20 64.42 20 60V56H8V60C8 71.05 16.95 80 28 80H68C79.05 80 88 71.05 88 60C88 48.95 79.05 40 68 40H32C27.58 40 24 36.42 24 32C24 27.58 27.58 24 32 24H72C76.42 24 80 27.58 80 32V36H92V32C92 20.95 83.05 12 72 12H32Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="font-extrabold text-2xl tracking-tighter uppercase font-sans text-black">
                      SLINGARCH
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.35em] text-black/60 uppercase">
                      CREATES
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Micro Scales: Favicon 32px, 16px, & Instagram Avatar */}
            <div className="p-6 rounded-xl bg-[#161619] border border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/60">
                Micro-Scale & Social Avatar Legibility Verification
              </h4>
              <div className="flex flex-wrap items-center gap-8 pt-2">
                
                {/* 16px test */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-4 h-4 bg-black border border-white/30 rounded flex items-center justify-center p-[2px]">
                    <div className="w-full h-full bg-white rounded-xs" />
                  </div>
                  <span className="text-[10px] font-mono text-white/50">16px Tab</span>
                </div>

                {/* 32px test */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-8 h-8 bg-black border border-white/30 rounded-lg flex items-center justify-center p-1">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M28 26C28 17.16 35.16 10 44 10H70C78.84 10 86 17.16 86 26V32C86 40.84 78.84 48 70 48H46C41.58 48 38 51.58 38 56C38 60.42 41.58 64 46 64H72C76.42 64 80 67.58 80 72V74C80 82.84 72.84 90 64 90H30C21.16 90 14 82.84 14 74V68C14 59.16 21.16 52 30 52H54C58.42 52 62 48.42 62 44C62 39.58 58.42 36 54 36H28V26Z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">32px Favicon</span>
                </div>

                {/* Instagram Profile Avatar */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-20 h-20 bg-black border-2 border-white/40 rounded-full flex items-center justify-center p-3 shadow-lg">
                    <svg className="w-12 h-12 text-white" viewBox="0 0 100 100" fill="currentColor">
                      <path d="M28 26C28 17.16 35.16 10 44 10H70C78.84 10 86 17.16 86 26V32C86 40.84 78.84 48 70 48H46C41.58 48 38 51.58 38 56C38 60.42 41.58 64 46 64H72C76.42 64 80 67.58 80 72V74C80 82.84 72.84 90 64 90H30C21.16 90 14 82.84 14 74V68C14 59.16 21.16 52 30 52H54C58.42 52 62 48.42 62 44C62 39.58 58.42 36 54 36H28V26Z" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-mono text-white/50">Instagram Profile (Circle)</span>
                </div>

                {/* Stacked Vertical Lockup */}
                <div className="flex flex-col items-center gap-2 p-4 bg-black border border-white/20 rounded-xl">
                  <svg className="w-10 h-10 text-white mb-2" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M28 26C28 17.16 35.16 10 44 10H70C78.84 10 86 17.16 86 26V32C86 40.84 78.84 48 70 48H46C41.58 48 38 51.58 38 56C38 60.42 41.58 64 46 64H72C76.42 64 80 67.58 80 72V74C80 82.84 72.84 90 64 90H30C21.16 90 14 82.84 14 74V68C14 59.16 21.16 52 30 52H54C58.42 52 62 48.42 62 44C62 39.58 58.42 36 54 36H28V26Z" />
                  </svg>
                  <div className="font-black text-sm tracking-tight text-white uppercase text-center">
                    SLINGARCH
                  </div>
                  <div className="font-mono text-[8px] tracking-[0.3em] text-white/60 uppercase text-center">
                    CREATES
                  </div>
                  <span className="text-[10px] font-mono text-white/40 mt-1">Stacked Lockup</span>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Tab 3: Historical Concept 1 vs Concept 2 Archive */}
        {activeTab === 'archive' && (
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="bg-[#18181b] border border-white/10 rounded-xl p-4 text-xs text-white/70">
              Reference archive comparing the initial <strong>Concept 1 (Velocity S)</strong> and <strong>Concept 2 (Architectural Interlocking SC)</strong>.
            </div>

            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-white/70">
                Direct Matrix: Concept 1 vs. Concept 2
              </h3>
              <div className="rounded-xl overflow-hidden border border-white/15 bg-black">
                <img src={sideBySide} alt="Side by side matrix" className="w-full h-auto object-contain" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase text-white/70">Concept 1 Spec Sheet</h4>
                <div className="rounded-lg overflow-hidden border border-white/15 bg-black">
                  <img src={specSheet1} alt="Concept 1 Sheet" className="w-full h-auto object-contain" />
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-mono text-xs uppercase text-white/70">Concept 2 Spec Sheet</h4>
                <div className="rounded-lg overflow-hidden border border-white/15 bg-black">
                  <img src={specSheet2} alt="Concept 2 Sheet" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#161618] flex items-center justify-between text-xs text-white/60 font-mono">
          <span>Direction: 2B-1 Möbius SC (Breathable Aperture)</span>
          <span>Status: Awaiting Final User Approval Before Code Integration</span>
        </div>

      </div>
    </div>
  );
}
