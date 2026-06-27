import { motion } from 'motion/react';
import { Zap, Instagram, Linkedin, Youtube, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
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
    <footer className="relative bg-[#050505] border-t border-white/5 py-16 px-6 md:px-12 overflow-hidden">
      {/* Footer Ambient Background Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-[#0070FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand/Slogan Block (Col-5) */}
          <div className="md:col-span-5 space-y-4 text-left">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-2xl font-black tracking-tighter uppercase text-white group cursor-pointer inline-block"
            >
              TejxStudio<span className="text-[#0070FF] transition-colors duration-300 group-hover:text-white">.</span>
            </a>
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
              High-end cinematic video editing engineered specifically for top-tier YouTubers, founders, fast-scaling startups, and personal brands.
            </p>
          </div>

          {/* Quick Links Column (Col-3) */}
          <div className="md:col-span-3 text-left space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">Navigation</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>
                <button onClick={() => scrollToSection('portfolio')} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Featured Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('portfolio-short')} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Short Form Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Core Editing Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('results')} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Client Results & Impact
                </button>
              </li>
            </ul>
          </div>

          {/* About/Faq links (Col-2) */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-neutral-500">
              <li>
                <button onClick={() => scrollToSection('showreel')} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Showreel
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  FAQ Desk
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social connections Column (Col-2) */}
          <div className="md:col-span-2 text-left space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-bold">Social Cues</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#0070FF]/10 hover:border-[#0070FF]/20 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#0070FF]/10 hover:border-[#0070FF]/20 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#0070FF]/10 hover:border-[#0070FF]/20 transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-[#0070FF]/10 hover:border-[#0070FF]/20 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <div>
            &copy; {currentYear} TEJXSTUDIO VISUALS. All rights reserved. Built with precision.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 text-[#0070FF] fill-[#0070FF]" />
            <span>for elite creators</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
