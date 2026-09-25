import { ArrowRight, Mail, Phone } from 'lucide-react';
import { SITE_CONTENT } from '../data/siteContent';

interface ContactSectionProps {
  onStartProject: () => void;
  onInspectReel: () => void;
}

export default function ContactSection({
  onStartProject,
  onInspectReel,
}: ContactSectionProps) {
  const { contact, agency } = SITE_CONTENT;

  return (
    <section className="relative z-10 w-full px-6 lg:px-10 py-16 max-w-7xl mx-auto my-10" id="contact">
      <div className="relative rounded-2xl bg-[#0e0e10]/85 backdrop-blur-2xl border border-white/[0.12] overflow-hidden p-8 sm:p-14 md:p-16 shadow-2xl text-center">
        {/* Ambient light gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block font-medium">
            {contact.sectionTag}
          </span>

          <h2 className="font-display-hero text-3xl sm:text-5xl lg:text-6xl uppercase text-white tracking-tight leading-tight">
            {contact.heading}
          </h2>

          <p className="font-body-lead text-base sm:text-lg text-[#c4c7c9] max-w-xl mx-auto">
            {contact.description}
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStartProject}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-[#131315] font-semibold text-sm sm:text-base shadow-[0_0_30px_rgba(255,255,255,0.18)] hover:bg-[#e2e1eb] transition-all duration-300 hover:scale-[1.03] active:scale-[0.99] cursor-pointer group"
              id="contact-start-project-btn"
            >
              <span>{contact.primaryCtaText}</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onInspectReel}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#2a2a2c]/60 hover:bg-[#353437] backdrop-blur-xl border border-white/[0.1] text-[#e5e1e4] font-label-code text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 cursor-pointer"
              id="contact-inspect-reel-btn"
            >
              <span>{contact.secondaryCtaText}</span>
            </button>
          </div>

          {/* Direct Inquiries & Contact Info */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6">
            <div>
              <span className="font-label-code text-[11px] text-[#8e9193] uppercase block mb-1">
                {contact.directContactLabel}
              </span>
              <a
                href={`mailto:${agency.email}`}
                className="inline-flex items-center gap-2 font-label-code text-xs sm:text-sm text-[#c6c6cf] hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{agency.email}</span>
              </a>
            </div>

            {/* Phones */}
            {(agency.phones || (agency.phone ? [agency.phone] : [])).map((ph) => (
              <div key={ph}>
                <span className="font-label-code text-[11px] text-[#8e9193] uppercase block mb-1">
                  {contact.phoneContactLabel}
                </span>
                <a
                  href={`tel:${ph.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2 font-label-code text-xs sm:text-sm text-[#c6c6cf] hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{ph}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Studio Standards / Perks */}
          <div className="pt-8 text-[#8e9193] flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-label-code text-[11px] sm:text-xs uppercase tracking-wider">
            {contact.perks.map((perk, i) => (
              <span key={i} className="flex items-center gap-2 text-[#c4c7c9]">
                {i > 0 && <span className="text-[#8e9193] mr-2">•</span>}
                <span>{perk.text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
