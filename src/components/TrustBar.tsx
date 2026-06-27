import { motion } from 'motion/react';
import { Sparkles, ShoppingBag, Globe, Palette, Cpu, HeartHandshake, Layers, Zap } from 'lucide-react';

const DUMMY_BRANDS = [
  { name: 'Nike', icon: Zap },
  { name: 'Adobe', icon: Palette },
  { name: 'Shopify', icon: ShoppingBag },
  { name: 'Notion', icon: Layers },
  { name: 'OpenAI', icon: Cpu },
  { name: 'HubSpot', icon: HeartHandshake },
  { name: 'Canva', icon: Globe },
  { name: 'Tesla', icon: Sparkles }
];

export default function TrustBar() {
  // Duplicate list to create a seamless infinite marquee effect
  const marqueeItems = [...DUMMY_BRANDS, ...DUMMY_BRANDS, ...DUMMY_BRANDS];

  return (
    <section className="relative py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-left mb-6">
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-gray-600">
          Trusted By Industry Leaders
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Side Shadow Vignette (Fade Gradient) */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />

        {/* Scrolling Marquee Container */}
        <div className="flex w-full overflow-hidden">
          <div className="animate-marquee flex gap-16 md:gap-24 items-center">
            {marqueeItems.map((brand, idx) => {
              const Icon = brand.icon;
              return (
                <div
                  key={`${brand.name}-${idx}`}
                  className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors duration-300 group cursor-default"
                >
                  <Icon className="w-4 h-4 opacity-30 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[#0070FF] transition-all duration-300" />
                  <span className={`font-sans font-bold text-lg md:text-xl tracking-tighter uppercase opacity-30 group-hover:opacity-100 transition-opacity duration-300 ${idx % 3 === 1 ? 'italic' : ''}`}>
                    {brand.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side Shadow Vignette (Fade Gradient) */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
