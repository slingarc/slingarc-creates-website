import { useEffect } from 'react';
import { PortfolioProject } from '../types';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquireSimilar: (projectTitle: string) => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onInquireSimilar,
}: ProjectDetailModalProps) {
  // Listen for Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  // Resolve specs and details from either direct properties or legacy fullBreakdown
  const details = project.details || project.fullBreakdown?.overview;
  const objective = project.fullBreakdown?.objective;
  const specs = project.specs || project.fullBreakdown?.designSpecs;
  const highlights = project.highlights || project.fullBreakdown?.creativeHighlights;
  const deliverables = project.deliverables || project.fullBreakdown?.deliverables;
  const turnaround = project.turnaround || project.fullBreakdown?.turnaround;

  const hasExtraDetails = Boolean(details || specs || highlights || deliverables || turnaround);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-2xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#1c1b1d] border border-white/[0.14] shadow-[0_24px_60px_rgba(0,0,0,0.9)] text-[#e5e1e4] p-6 sm:p-8 md:p-10 my-auto"
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

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="px-3 py-1 rounded-full bg-white text-[#131315] font-label-code text-[11px] uppercase font-bold tracking-wider">
              {project.category}
            </span>
            {project.subtitle && (
              <span className="font-label-code text-xs text-[#c6c6cf] uppercase">
                {project.subtitle}
              </span>
            )}
          </div>
          <h2 className="font-headline-xl text-2xl sm:text-4xl uppercase text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Large High-Quality Visual Lightbox Preview - 100% uncropped */}
        <div className="relative min-h-[320px] max-h-[70vh] w-full rounded-xl overflow-hidden bg-[#09090b] border border-white/[0.1] mb-8 shadow-2xl flex items-center justify-center p-2">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="max-h-[66vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            <span className="px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/[0.15] font-label-code text-xs uppercase text-white font-semibold">
              {project.badge || project.category}
            </span>
            {project.secondaryBadge && (
              <span className="px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/[0.15] font-label-code text-xs uppercase text-[#c6c6cf]">
                {project.secondaryBadge}
              </span>
            )}
          </div>
        </div>

        {/* Project Description */}
        <div className="p-5 rounded-xl bg-[#201f22]/50 border border-white/[0.06] mb-6">
          <span className="font-label-code text-xs uppercase text-white font-semibold block mb-2">
            Project Summary
          </span>
          <p className="font-body-default text-base text-[#e5e1e4] leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Optional Project Details (Rendered if available) */}
        {hasExtraDetails && (
          <div className="space-y-6">
            {/* Optional Design Specs Grid */}
            {specs && specs.length > 0 && (
              <div>
                <span className="font-label-code text-xs uppercase text-[#8e9193] block mb-3 tracking-wider">
                  Project Specifications
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-4 rounded-xl bg-[#201f22]/70 border border-white/[0.08]"
                    >
                      <span className="font-label-code text-[11px] uppercase text-[#8e9193] block mb-1">
                        {spec.label}
                      </span>
                      <span className="font-display-hero text-xl text-white font-bold block mb-1">
                        {spec.value}
                      </span>
                      {spec.detail && (
                        <span className="text-[11px] text-[#c4c7c9]">{spec.detail}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Overview & Objective */}
            {(details || objective) && (
              <div className={`grid grid-cols-1 ${details && objective ? 'md:grid-cols-2' : ''} gap-5`}>
                {details && (
                  <div className="p-5 rounded-xl bg-[#201f22]/50 border border-white/[0.06]">
                    <span className="font-label-code text-xs uppercase text-white font-semibold block mb-2">
                      Creative Overview
                    </span>
                    <p className="font-body-default text-sm text-[#c4c7c9] leading-relaxed">
                      {details}
                    </p>
                  </div>
                )}
                {objective && (
                  <div className="p-5 rounded-xl bg-[#201f22]/50 border border-white/[0.06]">
                    <span className="font-label-code text-xs uppercase text-white font-semibold block mb-2">
                      Design Objective
                    </span>
                    <p className="font-body-default text-sm text-[#c4c7c9] leading-relaxed">
                      {objective}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Optional Creative Highlights */}
            {highlights && highlights.length > 0 && (
              <div>
                <span className="font-label-code text-xs uppercase text-[#8e9193] block mb-3 tracking-wider">
                  Creative Highlights &amp; Methodology
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-[#e5e1e4]">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Optional Deliverables & Turnaround */}
            {(deliverables || turnaround) && (
              <div className="p-5 rounded-xl bg-[#201f22]/50 border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {deliverables && (
                  <div>
                    <span className="font-label-code text-xs uppercase text-[#8e9193] block mb-1">
                      Deliverables
                    </span>
                    <span className="text-sm text-[#e5e1e4] font-medium">
                      {deliverables.join(' • ')}
                    </span>
                  </div>
                )}
                {turnaround && (
                  <div className="sm:text-right shrink-0">
                    <span className="font-label-code text-xs uppercase text-[#8e9193] block mb-1">
                      Workflow
                    </span>
                    <span className="font-label-code text-sm text-white font-bold">
                      {turnaround}
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Modal Action Footer */}
        <div className="mt-8 pt-6 border-t border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-label-code text-xs text-[#8e9193] uppercase">
            Slingarch Creates // Portfolio Lightbox
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-[#2a2a2c] hover:bg-[#353437] text-white text-xs font-label-code uppercase tracking-wider transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquireSimilar(project.title);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-white text-[#131315] hover:bg-[#e2e1eb] font-semibold text-xs font-label-code uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              <span>Inquire About Similar Work</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
