import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand/Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="text-2xl font-black tracking-tighter uppercase text-white group cursor-pointer"
        >
          TejxStudio<span className="text-[#0070FF] transition-colors duration-300 group-hover:text-white">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-gray-400">
          <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors duration-200 cursor-pointer">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors duration-200 cursor-pointer">
            Services
          </button>
          <button onClick={() => scrollToSection('results')} className="hover:text-white transition-colors duration-200 cursor-pointer">
            Results
          </button>
          <button onClick={() => scrollToSection('testimonials')} className="hover:text-white transition-colors duration-200 cursor-pointer">
            Testimonials
          </button>
          <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors duration-200 cursor-pointer">
            FAQ
          </button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-200 cursor-pointer">
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => scrollToSection('portfolio')} 
            className="px-6 py-2.5 border border-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            View Work
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-[#0070FF] hover:text-white transition-all duration-300 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-b border-white/5 bg-[#050505]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-left py-2 text-base font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left py-2 text-base font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('results')}
                className="text-left py-2 text-base font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-left py-2 text-base font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left py-2 text-base font-medium text-neutral-300 hover:text-white transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-base font-medium text-neutral-300 hover:text-white transition-colors"
              >
                Contact
              </button>

              <div className="h-[1px] bg-white/5 my-2" />

              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="py-3 px-4 rounded-xl text-center text-sm font-medium border border-white/10 text-white hover:bg-white/5 transition-colors"
                >
                  View Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="py-3 px-4 rounded-xl text-center text-sm font-semibold bg-[#0070FF] hover:bg-blue-600 text-white shadow-lg shadow-blue-600/10"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top scroll progress bar */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#0070FF] transition-all duration-75" style={{ width: `${scrollProgress}%` }} />
    </motion.nav>
  );
}
