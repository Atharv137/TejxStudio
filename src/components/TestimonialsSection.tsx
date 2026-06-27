import { motion } from 'motion/react';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  rating: number;
  avatar: string;
  stats: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: "The retention-focused editing TejxStudio delivered for our business breakdowns was a complete game-changer. Our average viewer duration increased by 42% in under a month.",
    author: "Tejas H.",
    title: "Founder & CEO",
    company: "Apex Media Labs",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    stats: "+42% Retention Boost"
  },
  {
    id: 't-2',
    quote: "TejxStudio understands visual narrative and auditory pacing on a level that is incredibly rare. He didn't just cut raw clips; he engineered a highly retaining, professional-grade story.",
    author: "Marcus Vance",
    title: "Elite Creator",
    company: "Vance Tech Show",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    stats: "2.4M Views Generated"
  },
  {
    id: 't-3',
    quote: "The multi-layered sound design and film-grade color adjustments elevated our mini-documentary series to absolute Netflix-level production. Our audience feedback is glowing.",
    author: "Sarah Jenkins",
    title: "Executive Producer",
    company: "Chronicle Studios",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    stats: "98% Audience Score"
  },
  {
    id: 't-4',
    quote: "Finding an editor who combines top-tier technical motion design with deep strategic narrative understanding is nearly impossible. TejxStudio is a secret weapon for any high-growth brand.",
    author: "Daniel K.",
    title: "Head of Marketing",
    company: "SaaSflow Global",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    stats: "15% CTR Increase"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background neon soft highlight */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-[#0070FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
            Endorsements
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Testimonials</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            What founders, creators, and media production companies say about collaborating on premium visual assets.
          </p>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {TESTIMONIALS.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="glass-panel p-8 rounded-2xl border border-white/5 bg-neutral-950/20 hover:border-[#0070FF]/30 transition-all duration-400 flex flex-col justify-between group relative overflow-hidden"
            id={`testimonial-card-${t.id}`}
          >
            {/* Visual Quote Overlay in Corner */}
            <div className="absolute top-6 right-8 text-neutral-800/20 group-hover:text-[#0070FF]/10 transition-colors duration-400">
              <Quote className="w-16 h-16 stroke-[1.2]" />
            </div>

            <div className="space-y-6">
              {/* Stars & Highlight Stat Badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                {t.stats && (
                  <span className="text-[10px] font-mono font-bold tracking-wider text-[#0070FF] bg-[#0070FF]/5 border border-[#0070FF]/15 px-2.5 py-0.5 rounded-full uppercase">
                    {t.stats}
                  </span>
                )}
              </div>

              {/* Quote text */}
              <blockquote className="text-neutral-300 text-sm md:text-base leading-relaxed italic relative z-10 font-sans font-medium">
                "{t.quote}"
              </blockquote>
            </div>

            {/* Author Profile and Divider */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-neutral-900">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-sm md:text-base group-hover:text-[#0070FF] transition-colors duration-300">
                    {t.author}
                  </h4>
                  <p className="text-neutral-500 text-xs mt-0.5">
                    {t.title} at <span className="text-neutral-400 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-[#0070FF]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
