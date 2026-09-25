import { useState } from 'react';
import { X, Check, Send, Sparkles, Copy, CheckCheck } from 'lucide-react';
import { SITE_CONTENT } from '../data/siteContent';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  'Social Media Ads',
  'Social Media Creatives',
  'Thumbnail Design',
  'Video Editing',
  'Shorts & Reels',
  'Website Design',
  'Digital Design',
];

const TIMELINE_OPTIONS = [
  'Flexible / Open',
  'Within 1-2 Weeks',
  'Within 1 Month',
  'Ongoing / Retainer',
];

const BUDGET_OPTIONS = [
  'To be discussed',
  'Under $500',
  '$500 - $1,500',
  '$1,500 - $3,000',
  '$3,000+',
];

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialService,
}: ProjectInquiryModalProps) {
  const [selectedService, setSelectedService] = useState(
    initialService || SERVICE_OPTIONS[0]
  );
  const [selectedTimeline, setSelectedTimeline] = useState(TIMELINE_OPTIONS[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_OPTIONS[1]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [link, setLink] = useState('');
  const [brief, setBrief] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const mailtoUrl = `mailto:${SITE_CONTENT.agency.email}?subject=${encodeURIComponent(
    `[Project Inquiry] ${selectedService} - ${name || 'New Client'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nChannel / URL: ${link}\nSelected Service: ${selectedService}\nTimeline: ${selectedTimeline}\nBudget: ${selectedBudget}\n\nProject Scope:\n${brief}`
  )}`;

  const handleCopyInquiry = () => {
    const summary = `Project Inquiry for Slingarch Creates\nService: ${selectedService}\nTimeline: ${selectedTimeline}\nBudget: ${selectedBudget}\nClient: ${name} (${email})\nChannel/URL: ${link}\nBrief: ${brief}`;
    navigator.clipboard.writeText(summary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#1c1b1d] border border-white/[0.14] shadow-[0_24px_60px_rgba(0,0,0,0.9)] text-[#e5e1e4] p-6 sm:p-8 md:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#2a2a2c]/80 hover:bg-[#353437] text-[#c4c7c9] hover:text-white transition-colors cursor-pointer z-20 border border-white/[0.08]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6 pr-10">
              <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block mb-1">
                PROJECT INQUIRY // SLINGARCH CREATES
              </span>
              <h2 className="font-headline-xl text-2xl sm:text-3xl uppercase text-white tracking-tight">
                START A PROJECT
              </h2>
              <p className="font-body-default text-sm text-[#c4c7c9] mt-1">
                Tell us about your project or vision. We will review your message and get back to you with next steps.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Select Service */}
              <div>
                <label className="font-label-code text-xs uppercase text-[#8e9193] block mb-2">
                  1. Select Service / Focus Area
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICE_OPTIONS.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setSelectedService(opt)}
                      className={`p-3 rounded-lg text-left text-xs font-label-code uppercase tracking-wider transition-all border cursor-pointer ${
                        selectedService === opt
                          ? 'bg-white text-[#131315] font-bold border-white shadow-md'
                          : 'bg-[#201f22]/70 text-[#c4c7c9] border-white/[0.08] hover:border-white/[0.2] hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Turnaround & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-code text-xs uppercase text-[#8e9193] block mb-2">
                    2. Desired Turnaround
                  </label>
                  <select
                    value={selectedTimeline}
                    onChange={(e) => setSelectedTimeline(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#201f22] border border-white/[0.1] text-xs font-label-code text-white focus:outline-none focus:border-white"
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t} className="bg-[#1c1b1d] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-label-code text-xs uppercase text-[#8e9193] block mb-2">
                    3. Approximate Budget
                  </label>
                  <select
                    value={selectedBudget}
                    onChange={(e) => setSelectedBudget(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#201f22] border border-white/[0.1] text-xs font-label-code text-white focus:outline-none focus:border-white"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b} className="bg-[#1c1b1d] text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-label-code text-xs uppercase text-[#8e9193] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Vance"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#201f22] border border-white/[0.1] text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-white"
                  />
                </div>

                <div>
                  <label className="font-label-code text-xs uppercase text-[#8e9193] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@creator.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#201f22] border border-white/[0.1] text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-label-code text-xs uppercase text-[#8e9193] block mb-1">
                  Channel, Portfolio, or Company Link
                </label>
                <input
                  type="text"
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://youtube.com/@yourchannel or https://yourbrand.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#201f22] border border-white/[0.1] text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-white"
                />
              </div>

              <div>
                <label className="font-label-code text-xs uppercase text-[#8e9193] block mb-1">
                  Project Brief &amp; Objectives
                </label>
                <textarea
                  rows={3}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder="Tell us about the project goals, upcoming video topics, or aesthetic reference..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#201f22] border border-white/[0.1] text-sm text-white placeholder-[#71717a] focus:outline-none focus:border-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="font-label-code text-xs text-[#8e9193]">
                  Direct and confidential communication
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-white text-[#131315] hover:bg-[#e2e1eb] font-semibold text-xs font-label-code uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-white text-[#131315] flex items-center justify-center mx-auto shadow-2xl">
              <Check className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div>
              <span className="font-label-code text-xs uppercase tracking-widest text-[#c6c6cf] block mb-1">
                MESSAGE READY
              </span>
              <h2 className="font-headline-xl text-3xl uppercase text-white tracking-tight">
                INQUIRY PREPARED
              </h2>
              <p className="font-body-default text-sm text-[#c4c7c9] max-w-md mx-auto mt-2">
                Thank you, <strong className="text-white">{name || 'there'}</strong>. Your project details are ready to send.
              </p>
            </div>

            {/* Inquiry Summary Box */}
            <div className="p-5 rounded-xl bg-[#201f22] border border-white/[0.08] text-left text-xs font-label-code text-[#c4c7c9] space-y-1.5 max-w-md mx-auto">
              <div>
                <span className="text-[#8e9193]">Service:</span>{' '}
                <span className="text-white font-semibold">{selectedService}</span>
              </div>
              <div>
                <span className="text-[#8e9193]">Timeline:</span> {selectedTimeline}
              </div>
              <div>
                <span className="text-[#8e9193]">Budget:</span> {selectedBudget}
              </div>
              {email && (
                <div>
                  <span className="text-[#8e9193]">Contact:</span> {email}
                </div>
              )}
            </div>

            {/* Launch email or copy */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={mailtoUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-[#131315] hover:bg-[#e2e1eb] font-semibold text-xs font-label-code uppercase tracking-wider transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Open in Email Client</span>
              </a>

              <button
                type="button"
                onClick={handleCopyInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#2a2a2c] hover:bg-[#353437] text-white text-xs font-label-code uppercase tracking-wider transition-all cursor-pointer"
              >
                {isCopied ? <CheckCheck className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{isCopied ? 'Dossier Copied!' : 'Copy Dossier'}</span>
              </button>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="text-xs text-[#8e9193] hover:text-white underline cursor-pointer pt-2"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
