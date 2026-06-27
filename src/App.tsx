import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import HeroSection from './components/HeroSection';
import TrustBar from './components/TrustBar';
import FeaturedShowreel from './components/FeaturedShowreel';
import LongFormPortfolio from './components/LongFormPortfolio';
import ShortFormPortfolio from './components/ShortFormPortfolio';
import ResultsSection from './components/ResultsSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LiveChatWidget from './components/LiveChatWidget';
import DetailedProjectPage from './components/DetailedProjectPage';
import { LongFormProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<LongFormProject | null>(null);

  // Scroll to top when opening a detailed case study page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedProject]);

  // Handle CTA triggers
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleContactClick = () => {
    setSelectedProject(null);
    setTimeout(() => {
      handleScrollToSection('contact');
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#050505] text-white selection:bg-[#0070FF]/30 selection:text-white overflow-hidden">
      
      {/* Cinematic Background & Trailing Light FX */}
      <BackgroundEffects />

      {/* Persistent Global Navigation */}
      <Navbar />

      {/* Dynamic Screen Transition with Framer Motion */}
      <AnimatePresence mode="wait">
        {selectedProject ? (
          // Case Study Details View
          <motion.div
            key="detailed-project-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <DetailedProjectPage
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
              onContactClick={handleContactClick}
            />
          </motion.div>
        ) : (
          // Prime Creative Portfolio Landing Page View
          <motion.div
            key="homepage-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 1. Hero Showcase Area */}
            <HeroSection
              onViewWorkClick={() => handleScrollToSection('portfolio')}
              onBookCallClick={() => handleScrollToSection('contact')}
            />

            {/* 2. Horizontal Infinite Partner Bar */}
            <TrustBar />

            {/* 3. Cinematic Large Showreel */}
            <FeaturedShowreel />

            {/* 4. Long Form YouTube Case Studies */}
            <LongFormPortfolio onSelectProject={setSelectedProject} />

            {/* 5. Short Form Vertical Portfolio Grid */}
            <ShortFormPortfolio />

            {/* 6. Dynamic Count-Up Results */}
            <ResultsSection />

            {/* 7. Detailed Service Catalog */}
            <ServicesSection />

            {/* 7.5. Client Testimonials Endorsements */}
            <TestimonialsSection />

            {/* 8. Accordion FAQ Desk */}
            <FAQSection />

            {/* 9. Luxurious Conversion Form */}
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Elegant Footer Branding and Site Indexes */}
      <Footer />

      {/* Interactive Global Concierge Live Chat Widget */}
      <LiveChatWidget />
    </div>
  );
}
