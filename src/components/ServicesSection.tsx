import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';
import { Zap, Youtube, Layers, Sliders, Volume2, Image, RefreshCw, Sparkles, Check } from 'lucide-react';

const iconMap: Record<string, ComponentType<any>> = {
  Zap,
  Youtube,
  Layers,
  Sliders,
  Volume2,
  Image,
  RefreshCw,
  Sparkles,
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[300px] h-[300px] bg-[#0070FF]/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-16 md:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
            Offerings
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-6">
            What I Can Help <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">You With</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Providing high-production-value video editing, direction, and design engineered specifically to capture attention and scale retention.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative z-10">
        {SERVICES.map((service, idx) => {
          const IconComponent = iconMap[service.iconName] || Sparkles;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group h-full relative overflow-hidden"
            >
              {/* Subtle accent hover indicator inside the card */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#0070FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-tr-2xl" />

              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-6 group-hover:bg-[#0070FF]/10 group-hover:border-[#0070FF]/30 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-neutral-400 group-hover:text-[#0070FF] group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#0070FF] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Bullet Features list */}
              <ul className="space-y-2 mt-auto pt-4 border-t border-white/5">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                    <Check className="w-3.5 h-3.5 text-[#0070FF] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
