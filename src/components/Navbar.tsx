import { useState, useEffect } from 'react';
import { SITE_CONTENT } from '../data/siteContent';
import { Menu, X, ArrowRight, Pause, Play } from 'lucide-react';
import officialLogoPng from '../assets/images/slingarc_complete_master_logo.png';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: (initialService?: string) => void;
  isMotionPaused: boolean;
  onToggleMotion: () => void;
  onOpenLogoReview: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  onOpenInquiry,
  isMotionPaused,
  onToggleMotion,
  onOpenLogoReview,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { agency, navigation } = SITE_CONTENT;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 pt-2 md:pt-4">
        <div
          className={`pointer-events-auto h-20 w-full rounded-xl bg-[#1c1b1d]/75 backdrop-blur-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.55)] px-4 md:px-7 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'border-white/[0.14] shadow-[0_12px_40px_rgba(0,0,0,0.7)]' : ''
          }`}
        >
          {/* Official Logo in transparent PNG format - Complete lockup with Arc & CREATES */}
          <button
            onClick={(e) => handleLinkClick(e, 'top')}
            className="flex items-center text-left cursor-pointer group focus:outline-none transition-transform hover:opacity-90 py-0.5"
            id="brand-logo-btn"
            aria-label="SLINGARC CREATES Home"
          >
            <div className="h-11 sm:h-12 md:h-[54px] flex items-center">
              <img
                alt="SLINGARC CREATES Official Logo"
                className="h-full w-auto max-h-full object-contain transition-transform group-hover:scale-[1.02] drop-shadow-[0_0_14px_rgba(255,106,0,0.32)]"
                src={officialLogoPng}
              />
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navigation.links.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`text-sm transition-all duration-200 tracking-wide ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#c4c7c9] hover:text-white font-normal'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions & Profile / Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Logo System Review Trigger */}
            <button
              onClick={onOpenLogoReview}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-medium transition-all shadow-[0_0_15px_rgba(16,185,129,0.15)] cursor-pointer"
              id="nav-brand-system-btn"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Review Logo System</span>
            </button>

            {/* Background Animation Toggle for Accessibility */}
            <button
              onClick={onToggleMotion}
              title={isMotionPaused ? 'Resume liquid background' : 'Pause background animation'}
              className="p-2 rounded-lg bg-[#2a2a2c]/60 hover:bg-[#353437] text-[#c4c7c9] hover:text-white transition-colors text-xs hidden sm:flex items-center gap-1.5 cursor-pointer"
              id="toggle-motion-btn"
            >
              {isMotionPaused ? (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span className="font-label-code text-[11px] uppercase">Play FX</span>
                </>
              ) : (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span className="font-label-code text-[11px] uppercase">Calm FX</span>
                </>
              )}
            </button>

            {/* Start a Project Button */}
            <button
              onClick={() => onOpenInquiry()}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#2a2a2c]/70 hover:bg-[#353437] hover:text-white text-[#e5e1e4] text-xs font-label-code uppercase tracking-wider transition-all duration-300 border border-white/[0.06] hover:border-white/[0.18] shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_24px_rgba(255,255,255,0.12)] cursor-pointer"
              id="nav-start-project-btn"
            >
              <span>{navigation.ctaButton}</span>
            </button>

            {/* Profile Avatar Indicator */}
            <button
              onClick={() => onOpenInquiry()}
              title="Agency Portal / Contact"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-[#e2e1eb] transition-transform hover:scale-105 cursor-pointer"
              id="nav-avatar-btn"
            >
              <span className="font-display-hero text-xs font-black text-[#131315]">S</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#2a2a2c]/60 hover:bg-[#353437] text-white transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
              id="mobile-nav-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Flyout Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 p-5 rounded-2xl bg-[#1c1b1d]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navigation.links.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`text-base py-1 px-2 rounded font-medium transition-colors ${
                      isActive ? 'bg-[#353437] text-white' : 'text-[#c4c7c9] hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={onToggleMotion}
                className="text-xs font-label-code text-[#c4c7c9] flex items-center gap-1.5"
              >
                {isMotionPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                <span>{isMotionPaused ? 'Resume FX' : 'Calm FX'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white text-[#131315] font-semibold text-xs uppercase font-label-code tracking-wider"
              >
                <span>{navigation.ctaButton}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
