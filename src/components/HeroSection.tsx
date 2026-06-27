import { motion } from 'motion/react';
import CountUp from './CountUp';
import { Play, Calendar, ArrowRight, Video, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onViewWorkClick: () => void;
  onBookCallClick: () => void;
}

export default function HeroSection({ onViewWorkClick, onBookCallClick }: HeroSectionProps) {
  const previewVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-video-editor-using-keypad-and-mouse-42795-large.mp4';

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Animated Cinematic Glow Blob */}
      <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] bg-[#0070FF]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full relative z-10">
        
        {/* Left Column: Headline, Description, CTAs, Stats (Col-7) */}
        <div className="lg:col-span-7 text-left space-y-8">
          
          {/* Accent micro-banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#0070FF] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300">Available for New Projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[64px] tracking-tight leading-[1.05] text-white"
          >
            I Turn Raw Footage Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 relative">
              Content People Can't Stop Watching.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed"
          >
            Short-form edits, YouTube videos, and storytelling that drive billions of impressions and real business results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button
              onClick={onViewWorkClick}
              className="px-8 py-4 bg-[#0070FF] shadow-lg shadow-[#0070FF]/20 hover:shadow-[#0070FF]/30 text-white font-bold rounded-xl flex items-center justify-center gap-3 group transition-all hover:-translate-y-0.5 duration-300 cursor-pointer"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={onBookCallClick}
              className="px-8 py-4 border border-white/20 text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-center"
            >
              Book a Call
            </button>
          </motion.div>

          {/* Stats Bar (Beneath layout) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 md:gap-10 text-left max-w-xl"
          >
            {/* Stat 1 */}
            <div>
              <p className="text-3xl font-bold text-white flex items-baseline">
                <CountUp end={50} suffix="M+" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-semibold">Views Generated</p>
            </div>

            {/* Stat 2 */}
            <div>
              <p className="text-3xl font-bold text-white flex items-baseline">
                <CountUp end={150} suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-semibold">Projects Delivered</p>
            </div>

            {/* Stat 3 */}
            <div>
              <p className="text-3xl font-bold text-white flex items-baseline">
                <CountUp end={4} suffix="+" />
              </p>
              <p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1 font-semibold">Years Exp.</p>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Floating Showreel Player Frame (Col-5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end group"
        >
          {/* Gentle floating oscillate background animation */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative aspect-video lg:aspect-[4/5] w-full max-w-md rounded-3xl overflow-hidden border border-white/10 bg-[#111] shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={onViewWorkClick}
          >
            {/* Real looping muted video inside */}
            <video
              src={previewVideoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover brightness-[0.4] scale-[1.01]"
            />

            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Inner hover glow */}
            <div className="absolute inset-0 bg-[#0070FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Central Play Badge Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <Play className="w-8 h-8 fill-white text-white ml-1" />
              </div>
            </div>

            {/* Bottom Left Showreel Tag */}
            <div className="absolute bottom-6 left-6 text-left">
              <span className="text-[10px] uppercase tracking-widest font-bold bg-[#0070FF] text-white px-2.5 py-1 rounded mb-2 inline-block">
                Featured Showreel
              </span>
              <h3 className="text-xl font-bold text-white">Visual Identity 2026</h3>
            </div>

            {/* Minimal Corner Stats indicators */}
            <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none opacity-50">
              <span className="px-2 py-1 text-[9px] font-mono font-bold tracking-wider uppercase bg-black/60 border border-white/5 rounded text-neutral-300">
                HD 60FPS
              </span>
            </div>
          </motion.div>

          {/* Absolute backing background gradient circle for 3D glow */}
          <div className="absolute inset-0 -z-10 bg-[#0070FF] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none rounded-full" />
        </motion.div>

      </div>
    </section>
  );
}
