import { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import ProcessSection from './components/ProcessSection';
import ToolsSection from './components/ToolsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectDetailModal from './components/ProjectDetailModal';
import ProjectInquiryModal from './components/ProjectInquiryModal';
import LogoReviewModal from './components/LogoReviewModal';
import LogoReviewSection from './components/LogoReviewSection';
import ThreeNewConceptsBanner from './components/ThreeNewConceptsBanner';
import { PortfolioProject, ProjectCategory, ServiceItem } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('top');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);
  const [currentCategory, setCurrentCategory] = useState<ProjectCategory>('All');
  const [isMotionPaused, setIsMotionPaused] = useState(false);
  const [logoReviewOpen, setLogoReviewOpen] = useState(false);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['work', 'services', 'about', 'process', 'contact'];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;

      if (window.scrollY < 200) {
        setActiveSection('top');
        return;
      }

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('top');
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  const handleOpenInquiry = (initialService?: string) => {
    setInquiryService(initialService);
    setInquiryModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    handleOpenInquiry(service.title);
  };

  const handleFilterByCategory = (categoryKey: string) => {
    if (categoryKey) {
      setCurrentCategory(categoryKey as ProjectCategory);
      handleNavigate('work');
    }
  };

  const handleHeroTagFilter = (category: ProjectCategory) => {
    setCurrentCategory(category);
    handleNavigate('work');
  };

  return (
    <div className="relative min-h-screen bg-[#131315] text-[#e5e1e4] selection:bg-[#39393b] selection:text-white font-sans">
      {/* Living WebGL Shader Background Canvas */}
      <BackgroundCanvas paused={isMotionPaused} />

      {/* Main Interactive Site Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Floating Top Header Island */}
        <Navbar
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenInquiry={handleOpenInquiry}
          isMotionPaused={isMotionPaused}
          onToggleMotion={() => setIsMotionPaused((prev) => !prev)}
          onOpenLogoReview={() => setLogoReviewOpen(true)}
        />

        <main className="flex-1">
          {/* Finalized Approved Master Brand System */}
          <ThreeNewConceptsBanner />

          {/* Monumental Hero */}
          <HeroSection
            onExploreWork={() => handleNavigate('work')}
            onStartProject={() => handleOpenInquiry()}
            onFilterSelect={handleHeroTagFilter}
          />

          {/* Selected Work Portfolio Grid with Filter Tabs & Breakdowns */}
          <WorkSection
            currentCategory={currentCategory}
            onSelectCategory={setCurrentCategory}
            onOpenProject={(proj) => setSelectedProject(proj)}
            onReservePlacement={(cat) => handleOpenInquiry(cat ? `${cat} Project` : 'New Project')}
          />

          {/* Services & Capabilities */}
          <ServicesSection
            onSelectService={handleSelectService}
            onFilterByCategory={handleFilterByCategory}
          />

          {/* About & Studio Statistics */}
          <AboutSection />

          {/* Execution Process Steps */}
          <ProcessSection />

          {/* Production Rig & Stack */}
          <ToolsSection />

          {/* Final Call to Action */}
          <ContactSection
            onStartProject={() => handleOpenInquiry()}
            onInspectReel={() => handleNavigate('work')}
          />
        </main>

        {/* Studio Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquireSimilar={(title) => handleOpenInquiry(`Similar to: ${title}`)}
      />

      {/* Start a Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => {
          setInquiryModalOpen(false);
          setInquiryService(undefined);
        }}
        initialService={inquiryService}
      />

      {/* Brand Identity Review Modal (Interactive Visual Board) */}
      <LogoReviewModal
        isOpen={logoReviewOpen}
        onClose={() => setLogoReviewOpen(false)}
      />
    </div>
  );
}
