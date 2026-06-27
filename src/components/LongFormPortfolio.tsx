import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LONG_FORM_PROJECTS } from '../data';
import { LongFormProject } from '../types';
import { Play, Eye, Clock, ArrowUpRight, Youtube } from 'lucide-react';

interface LongFormPortfolioProps {
  onSelectProject: (project: LongFormProject) => void;
}

export default function LongFormPortfolio({ onSelectProject }: LongFormPortfolioProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#0070FF]/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070FF] bg-[#0070FF]/10 px-3 py-1 rounded-full border border-[#0070FF]/20">
            Widescreen Narrative
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mt-4 mb-4">
            Long Form <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Content</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl mx-auto">
            YouTube video essays, podcasts, high-production documentaries, and retention-focused business breakdowns designed to build fanbases.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LONG_FORM_PROJECTS.map((project, idx) => {
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
              onClick={() => onSelectProject(project)}
              className="glass-panel group rounded-2xl overflow-hidden cursor-pointer flex flex-col hover:border-[#0070FF]/30 transition-all duration-400 text-left w-full mx-auto"
            >
              {/* Thumbnail Container (16:9) */}
              <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-white/5">
                <AnimatePresence mode="wait">
                  {isHovered ? (
                    <motion.div
                      key="video"
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
                        className="w-full h-full object-cover scale-[1.03]"
                      />
                    </motion.div>
                  ) : (
                    <motion.img
                      key="image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </AnimatePresence>

                {/* Left/Right blur shadow and play button */}
                <div className="absolute inset-0 bg-black/30 opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                  <motion.div
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-full bg-[#0070FF] flex items-center justify-center text-white backdrop-blur-sm shadow-lg shadow-[#0070FF]/20"
                  >
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </motion.div>
                </div>

                {/* Duration Badge (Bottom-Right) */}
                <div className="absolute bottom-3 right-3 px-2 py-1 text-[10px] font-mono font-bold text-neutral-200 bg-neutral-950/80 border border-white/10 rounded-md backdrop-blur-md">
                  {project.duration}
                </div>

                {/* Project Type Badge (Top-Left) */}
                <div className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-mono font-bold tracking-widest uppercase bg-[#0070FF]/20 text-[#0070FF] border border-[#0070FF]/20 rounded-md backdrop-blur-md">
                  {project.projectType}
                </div>
              </div>

              {/* Card Context */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Views Count and Platform Icon */}
                  <div className="flex items-center justify-between text-neutral-500 text-xs font-mono mb-3">
                    <span className="flex items-center gap-1.5 text-[#0070FF] font-bold bg-[#0070FF]/5 border border-[#0070FF]/15 px-2 py-0.5 rounded-full">
                      <Eye className="w-3.5 h-3.5" />
                      {project.viewCount}
                    </span>
                    <span className="flex items-center gap-1">
                      <Youtube className="w-3.5 h-3.5 text-red-500" />
                      YouTube
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-[#0070FF] transition-colors duration-300 line-clamp-2 leading-tight mb-3">
                    {project.title}
                  </h3>

                  {/* Dynamic subtle prompt description */}
                  <p className="text-neutral-400 text-xs line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Action button trigger */}
                <div className="flex items-center gap-1 text-xs font-bold font-mono text-neutral-400 group-hover:text-white transition-colors duration-300 mt-auto pt-4 border-t border-white/5">
                  <span>View Case Study Breakdown</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0070FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
