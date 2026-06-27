import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SHORT_FORM_PROJECTS } from '../data';
import { ShortFormProject } from '../types';
import { Play, X, Clock, Eye, Sparkles, Volume2, VolumeX } from 'lucide-react';

export default function ShortFormPortfolio() {
  const [activeProject, setActiveProject] = useState<ShortFormProject | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [isModalMuted, setIsModalMuted] = useState(true);

  return (
    <section id="portfolio-short" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[40%] right-[-10%] w-[350px] h-[350px] bg-[#0070FF]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
            Vertical Mastery
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-4">
            Short Form <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Content</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto">
            Videos engineered for immediate hooks, rapid-fire pacing, and high completion rates on TikTok, Reels, and YouTube Shorts.
          </p>
        </motion.div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SHORT_FORM_PROJECTS.map((project, idx) => {
          const isHovered = hoveredId === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => {
                setActiveProject(project);
                setIsModalMuted(true);
              }}
              className="glass-panel group relative aspect-[9/16] max-h-[580px] rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-end p-6 hover:border-[#0070FF]/30 transition-all duration-500 text-left w-full mx-auto"
            >
              {/* Media Asset Layer */}
              <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                  {isHovered ? (
                    <motion.div
                      key="hover-video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      <video
                        src={project.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-[1.02]"
                      />
                    </motion.div>
                  ) : (
                    <motion.img
                      key="static-thumb"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover brightness-[0.5] group-hover:scale-105 transition-all duration-750 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Edge gradients overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 pointer-events-none z-1" />

              {/* Play symbol on hover */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <motion.div
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    scale: isHovered ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-14 h-14 rounded-full bg-[#0070FF]/90 flex items-center justify-center text-white backdrop-blur-sm"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </motion.div>
              </div>

              {/* Info Badges (Top) */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0070FF]/20 text-[#0070FF] border border-[#0070FF]/30 rounded-md backdrop-blur-md">
                  {project.category}
                </span>
                <span className="px-2 py-1 text-[10px] font-mono text-neutral-300 bg-black/40 border border-white/5 rounded-md backdrop-blur-md flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#0070FF]" />
                  {project.duration}
                </span>
              </div>

              {/* Text Context (Bottom) */}
              <div className="relative z-10 mt-auto">
                <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-[#0070FF] transition-colors duration-300 mb-2">
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-white/5 border border-white/5 text-neutral-300 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Vertical 9:16 Lightbox Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020202]/95 backdrop-blur-lg flex items-center justify-center p-4"
          >
            {/* Background close */}
            <div className="absolute inset-0" onClick={() => setActiveProject(null)} />

            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-sm rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl z-10 flex flex-col aspect-[9/18]"
            >
              {/* Media Content */}
              <div className="relative flex-1 bg-black">
                <video
                  src={activeProject.videoUrl}
                  autoPlay
                  loop
                  muted={isModalMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />

                {/* Dark Vignettes inside video */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/60 pointer-events-none" />

                {/* Close trigger */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-red-500 text-white border border-white/10 z-20 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Mute toggle */}
                <button
                  onClick={() => setIsModalMuted(!isModalMuted)}
                  className="absolute top-4 left-4 p-2 rounded-full bg-black/60 hover:bg-white/10 text-white border border-white/10 z-20 cursor-pointer transition-colors"
                >
                  {isModalMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>

                {/* Bottom Video HUD Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="px-2 py-1 text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0070FF] text-white rounded-md mb-2 inline-block">
                    {activeProject.category}
                  </span>
                  
                  <h4 className="font-display font-bold text-xl text-white mb-2">
                    {activeProject.title}
                  </h4>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-white/10 text-neutral-200 px-2.5 py-0.5 rounded-full backdrop-blur-sm border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Call to action */}
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-[#0070FF]" />
                    <span>Duration: {activeProject.duration}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
