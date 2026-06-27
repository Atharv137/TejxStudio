import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Volume2, VolumeX, Maximize2 } from 'lucide-react';

export default function FeaturedShowreel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const showreelVideoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-video-editor-using-keypad-and-mouse-42795-large.mp4';
  const showreelPoster = 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200';

  return (
    <section id="showreel" className="relative py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background graphic flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0070FF]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
            Showcase
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-white mt-4 mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Showreel</span>
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            A 2-minute masterclass in visual pacing, auditory styling, and graphic integration. Witness what happens when editing meets storytelling.
          </p>
        </motion.div>
      </div>

      {/* Embedded Video Player Placeholder */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onClick={() => setIsOpen(true)}
        className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 cursor-pointer group hover:border-[#0070FF]/30 transition-all duration-500"
      >
        {/* Cinematic Backdrop Image */}
        <img
          src={showreelPoster}
          alt="TejxStudio Editor Showreel Thumbnail"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4] group-hover:scale-105 transition-transform duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Floating Ambient Waveform Graphics */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        {/* Hover Blue Glow Layer */}
        <div className="absolute inset-0 bg-[#0070FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Central Play Trigger with Multi-ring Pulsing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Pulsing ring 1 */}
            <div className="absolute -inset-4 rounded-full bg-[#0070FF]/20 blur-sm animate-ping opacity-60 pointer-events-none" />
            {/* Pulsing ring 2 */}
            <div className="absolute -inset-8 rounded-full bg-[#0070FF]/10 blur-md group-hover:animate-pulse pointer-events-none" />

            {/* Play Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-20 h-20 rounded-full bg-[#0070FF] border border-blue-400/40 flex items-center justify-center shadow-lg shadow-[#0070FF]/20 group-hover:bg-blue-600 transition-all duration-300"
            >
              <Play className="w-8 h-8 text-white fill-white ml-1.5" />
            </motion.div>
          </div>
        </div>

        {/* Video details badge */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#0070FF]">Play Reel</span>
            <p className="font-display font-semibold text-lg md:text-xl text-white">TEJXSTUDIO // EDITING SHOWCASE 2026</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/5 text-xs text-neutral-300 font-mono hidden sm:block">
            01:52
          </div>
        </div>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020202]/95 backdrop-blur-lg flex items-center justify-center p-4 md:p-8"
          >
            {/* Background click to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-video w-full max-w-6xl rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl z-10"
            >
              {/* Top Controls Overlay */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between z-20">
                <span className="font-display font-medium text-white tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  Now Playing: TejxStudio Creative Showcase
                </span>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsMuted(!isMuted);
                    }}
                    className="p-2 rounded-lg bg-black/40 hover:bg-white/10 border border-white/5 text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg bg-black/40 hover:bg-red-500 border border-white/5 text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Real Video Element */}
              <video
                src={showreelVideoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Inline Bottom status bar */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-neutral-400 text-xs font-mono flex items-center justify-between pointer-events-none">
                <span>Mixkit Creative License - 1080p Stream</span>
                <span>Press ESC to exit</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
