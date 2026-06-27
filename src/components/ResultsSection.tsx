import { motion } from 'motion/react';
import { STATS } from '../data';
import CountUp from './CountUp';
import { Award, Users, FileVideo, TrendingUp } from 'lucide-react';

const icons = [TrendingUp, FileVideo, Users, Award];

export default function ResultsSection() {
  return (
    <section id="results" className="relative py-24 md:py-32 border-t border-white/5 bg-[#050505]/20 overflow-hidden">
      {/* Cinematic grid lines backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-10 flex justify-between px-12 max-w-7xl mx-auto">
        <div className="w-[1px] h-full bg-gradient-to-b from-white to-transparent" />
        <div className="w-[1px] h-full bg-gradient-to-b from-white to-transparent hidden md:block" />
        <div className="w-[1px] h-full bg-gradient-to-b from-white to-transparent hidden lg:block" />
        <div className="w-[1px] h-full bg-gradient-to-b from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
              Impact
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-4">
              Results That <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Matter</span>
            </h2>
            <p className="text-neutral-400 text-lg max-w-xl mx-auto">
              Not just clean cuts—editing engineered to maximize retention, spark visual interest, and drive real commercial ROI.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-[#0070FF]/30 transition-all duration-300"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-radial from-[#0070FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Floating graphic element */}
                <div className="absolute top-4 right-4 text-neutral-800 group-hover:text-[#0070FF]/15 transition-colors duration-500">
                  <Icon className="w-16 h-16 stroke-[1.2]" />
                </div>

                {/* Number with suffix */}
                <div className="text-5xl md:text-6xl font-display font-black text-white mb-4 tracking-tight flex items-baseline">
                  <CountUp end={stat.value} suffix="" />
                  <span className="text-[#0070FF] ml-1 font-sans">{stat.suffix}</span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-neutral-200 mb-1 font-display group-hover:text-[#0070FF] transition-colors duration-300">
                  {stat.label}
                </h3>

                {/* Sublabel */}
                <p className="text-neutral-500 text-sm">
                  {stat.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
