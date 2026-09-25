import { SITE_CONTENT } from '../data/siteContent';
import officialLogoPng from '../assets/images/slingarc_complete_master_logo.png';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { agency, navigation, socialLinks, footer } = SITE_CONTENT;

  return (
    <footer className="w-full bg-[#0e0e10]/95 backdrop-blur-2xl py-16 relative z-10 border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-14">
          {/* Studio Brand & Inquiries */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  alt="SLINGARC CREATES Official Logo"
                  className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_16px_rgba(255,106,0,0.35)]"
                  src={officialLogoPng}
                />
              </div>
              <p className="font-body-muted text-sm text-[#c4c7c9] max-w-sm leading-relaxed">
                {footer.description}
              </p>
            </div>

            <div className="pt-2 space-y-3">
              <div>
                <span className="font-label-code text-xs text-[#8e9193] uppercase block mb-1">
                  {footer.directInquiriesLabel}
                </span>
                <a
                  href={`mailto:${agency.email}`}
                  className="font-label-code text-sm sm:text-base text-white hover:text-[#c6c6cf] transition-colors block font-medium"
                >
                  {agency.email}
                </a>
              </div>

              {/* Phone Numbers */}
              {(agency.phones || (agency.phone ? [agency.phone] : [])).map((ph) => (
                <div key={ph}>
                  <span className="font-label-code text-xs text-[#8e9193] uppercase block mb-1">
                    {footer.phoneLabel}
                  </span>
                  <a
                    href={`tel:${ph.replace(/\s+/g, '')}`}
                    className="font-label-code text-sm sm:text-base text-white hover:text-[#c6c6cf] transition-colors block font-medium"
                  >
                    {ph}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Index */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <span className="font-label-code text-xs text-[#8e9193] uppercase tracking-wider">
              {footer.navigationIndexLabel}
            </span>
            <nav className="flex flex-col space-y-2.5">
              {navigation.links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="font-body-muted text-sm text-[#c4c7c9] hover:text-white transition-colors text-left cursor-pointer w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Network Links */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <span className="font-label-code text-xs text-[#8e9193] uppercase tracking-wider">
              {footer.networkLabel}
            </span>
            <div className="flex flex-col space-y-2.5">
              {socialLinks.map((network) => (
                <a
                  key={network.label}
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-muted text-sm text-[#c4c7c9] hover:text-white transition-colors w-fit"
                >
                  {network.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#8e9193]">
          <span className="font-label-code text-xs">
            {footer.copyright}
          </span>
          <span className="font-label-code text-xs uppercase tracking-widest text-[#8e9193]">
            {footer.tagline}
          </span>
        </div>
      </div>
    </footer>
  );
}
