import { useState } from 'react';
import cleanLogo from '../assets/images/sling_clean_no_horizon_line_1790243468245.jpg';
import cleanIdentityBoard from '../assets/images/sling_clean_identity_board_1790243506488.jpg';
import cleanAvatarIcon from '../assets/images/sling_clean_avatar_icon_1790243486665.jpg';
import { CheckCircle2, Download, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';

export default function ThreeNewConceptsBanner() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleDownload = (imgSrc: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imgSrc;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isExpanded) {
    return (
      <div className="w-full bg-[#0a0705]/95 border-b border-orange-500/30 pt-24 pb-3.5 px-4 md:px-8 relative z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="font-mono text-orange-400 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              Brand System Finalized:
            </span>
            <span className="text-white/80 font-mono text-[11px] sm:text-xs hidden sm:inline">
              Clean Master Logo & Identity Boards Approved
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 border border-orange-500/40 font-mono text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>View Logo Boards & Specs</span>
              <span className="text-orange-400">↓</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#030304]/90 backdrop-blur-xl border-b-2 border-orange-500/40 pt-28 pb-16 px-4 md:px-8 relative z-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex justify-end">
          <button
            onClick={() => setIsExpanded(false)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase font-semibold transition-colors cursor-pointer border border-white/20"
          >
            <span>Close Logo Boards</span>
            <span>↑</span>
          </button>
        </div>
        
        {/* Approved Banner Card */}
        <div className="bg-gradient-to-b from-[#140b07] to-[#070709] border-2 border-orange-500/60 rounded-3xl p-6 md:p-10 text-center space-y-4 shadow-[0_0_90px_rgba(255,106,0,0.22)]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 font-mono text-xs uppercase font-bold tracking-widest border border-orange-500/40">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            FINALIZED MASTER LOGO • EXTRA LINES REMOVED
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white font-sans">
            SLING<span className="text-orange-400 font-light text-2xl md:text-4xl ml-2">ARC CREATES</span>
          </h1>
          
          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            All extra horizon/center lines have been eliminated. Pure, crisp monoline typography for <strong>&ldquo;SLING&rdquo;</strong> with unobstructed negative space, crowned by the <strong>glowing solar-eclipse neon orange arc over &ldquo;G&rdquo;</strong>, and <strong>C R E A T E S</strong> tracked below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleDownload(cleanLogo, 'SLINGARC_Clean_Master_Logo.jpg')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download Clean Master Logo (High-Res)
            </button>
            <button
              onClick={() => handleDownload(cleanIdentityBoard, 'SLINGARC_Clean_Identity_Board.jpg')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all border border-white/20 cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download Identity Guidelines Board
            </button>
          </div>
        </div>

        {/* Board 1: Clean Master Logo (No Extra Lines) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-orange-500 text-black font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Official Logo
              </span>
              <h2 className="font-mono text-base md:text-xl font-bold uppercase text-white tracking-wider">
                Immaculate Clean Lockup: Zero Extra Lines
              </h2>
            </div>
            <span className="text-xs font-mono text-orange-400">Pure Monoline Vector</span>
          </div>

          <div className="relative group max-w-3xl mx-auto rounded-3xl overflow-hidden border-2 border-orange-500/40 bg-black shadow-[0_0_120px_rgba(255,106,0,0.25)]">
            <img
              src={cleanLogo}
              alt="Clean SLING logo with no extra horizontal lines, glowing neon orange arc on G and CREATES underneath"
              className="w-full h-auto block object-contain"
            />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleDownload(cleanLogo, 'SLINGARC_Clean_Master_Logo.jpg')}
                className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-orange-500/50 text-white font-mono text-xs flex items-center gap-1.5 hover:bg-orange-500 hover:text-black transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" /> Save Asset
              </button>
            </div>
          </div>
          <p className="text-xs font-mono text-white/60 text-center">
            Pristine monoline geometry, zero center dividing lines, pure deep-space black backdrop, and radiant luminous orange atmospheric glow.
          </p>
        </div>

        {/* Board 2: Brand Identity Guidelines & Asset Suite */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-3 gap-2">
            <div>
              <span className="text-xs font-mono text-orange-400 uppercase tracking-widest font-semibold">Identity Standards</span>
              <h2 className="font-mono text-base md:text-lg font-bold uppercase text-white tracking-wider">
                Official Brand Guidelines &amp; Multi-Context Testing
              </h2>
            </div>
            <span className="text-xs font-mono text-white/50">Dark, Light Inversion, Horizontal &amp; App Icon</span>
          </div>

          <div className="w-full rounded-2xl overflow-hidden border-2 border-white/20 bg-black shadow-2xl">
            <img
              src={cleanIdentityBoard}
              alt="Official Clean SLINGARC Brand Guidelines Board without extra lines"
              className="w-full h-auto block object-contain"
            />
          </div>
        </div>

        {/* Brand System Specification Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4">
          {/* Official Colors */}
          <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-white font-mono text-xs uppercase font-bold tracking-wider">
              <Sparkles className="w-4 h-4 text-orange-400" />
              Official Brand Color Codes
            </div>
            <div className="space-y-2">
              <div 
                onClick={() => handleCopy('#FF6A00')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#FF6A00] shadow-[0_0_12px_#FF6A00]" />
                  <div>
                    <span className="text-xs font-bold text-white block">Eclipse Neon Orange</span>
                    <span className="text-[10px] font-mono text-white/60">Radiant Luminescent Arc</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-orange-400 flex items-center gap-1">
                  {copiedHex === '#FF6A00' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  #FF6A00
                </span>
              </div>

              <div 
                onClick={() => handleCopy('#08080A')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#08080A] border border-white/20" />
                  <div>
                    <span className="text-xs font-bold text-white block">Deep Obsidian Black</span>
                    <span className="text-[10px] font-mono text-white/60">Primary Studio Canvas</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/70 flex items-center gap-1">
                  {copiedHex === '#08080A' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  #08080A
                </span>
              </div>

              <div 
                onClick={() => handleCopy('#FFFFFF')}
                className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white" />
                  <div>
                    <span className="text-xs font-bold text-white block">Pure Vector White</span>
                    <span className="text-[10px] font-mono text-white/60">Monoline Typography</span>
                  </div>
                </div>
                <span className="font-mono text-xs text-white/70 flex items-center gap-1">
                  {copiedHex === '#FFFFFF' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  #FFFFFF
                </span>
              </div>
            </div>
          </div>

          {/* Official Typography Specs */}
          <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/10 space-y-4">
            <span className="text-white font-mono text-xs uppercase font-bold tracking-wider block">
              Clean Logo Anatomy
            </span>
            <div className="space-y-3 text-xs text-white/70">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-bold text-white block">Core Wordmark: &quot;SLING&quot;</span>
                <p className="text-[11px] leading-relaxed">Monoline geometric construction featuring the custom arch-looped &ldquo;L&rdquo;, uniform clean stroke weights, and clean open negative space without any dividing center lines.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-bold text-white block">Signature Accent: Eclipse Arc</span>
                <p className="text-[11px] leading-relaxed">A fiery luminous crescent crowning the rounded top of the &ldquo;G&rdquo; with vivid atmospheric orange radiance.</p>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <span className="font-bold text-white block">Descriptor: &quot;C R E A T E S&quot;</span>
                <p className="text-[11px] leading-relaxed">Wide-tracked (0.45em), whisper-thin clean technical sans-serif centered directly beneath.</p>
              </div>
            </div>
          </div>

          {/* App Icon & Avatar Preview */}
          <div className="p-5 rounded-2xl bg-[#0d0d10] border border-white/10 space-y-4 flex flex-col justify-between">
            <div>
              <span className="text-white font-mono text-xs uppercase font-bold tracking-wider block mb-3">
                Official Digital Avatar
              </span>
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border border-orange-500/50 shadow-[0_0_30px_rgba(255,106,0,0.35)]">
                  <img src={cleanAvatarIcon} alt="Clean Official App Icon" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-white block">Clean Icon Avatar</span>
                  <p className="text-[11px] text-white/60">Featuring the clean &ldquo;G&rdquo; with glowing orange eclipse arc and zero cross-lines.</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDownload(cleanAvatarIcon, 'SLINGARC_Clean_App_Icon.jpg')}
              className="w-full py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Download App Icon
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
