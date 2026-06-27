import { useState } from 'react';
import { motion } from 'motion/react';
import { LongFormProject } from '../types';
import { ArrowLeft, Play, Clock, Eye, Sliders, Volume2, Cpu, Sparkles, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';

interface DetailedProjectPageProps {
  project: LongFormProject;
  onBack: () => void;
  onContactClick: () => void;
}

export default function DetailedProjectPage({ project, onBack, onContactClick }: DetailedProjectPageProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#050505] text-white pt-28 pb-24 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back Navigation Bar */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 text-sm font-semibold font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer py-2 px-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Case Studies</span>
          </button>
        </div>

        {/* Hero Title and Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
          <div className="lg:col-span-2">
            <span className="px-3 py-1 text-xs font-mono font-bold tracking-widest uppercase bg-[#0070FF]/10 text-[#0070FF] border border-[#0070FF]/20 rounded-full">
              {project.projectType}
            </span>
            <h1 className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight leading-none mt-4 text-white">
              {project.title}
            </h1>
          </div>

          {/* Quick Metrics Header Block */}
          <div className="grid grid-cols-3 gap-4 lg:text-right">
            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <span className="text-xs text-neutral-500 font-mono uppercase block mb-1">Views</span>
              <span className="text-lg md:text-xl font-bold font-display text-[#0070FF]">{project.viewCount}</span>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <span className="text-xs text-neutral-500 font-mono uppercase block mb-1">Duration</span>
              <span className="text-lg md:text-xl font-bold font-display text-neutral-200">{project.duration}</span>
            </div>
            <div className="glass-panel p-4 rounded-xl border border-white/5">
              <span className="text-xs text-neutral-500 font-mono uppercase block mb-1">Retention</span>
              <span className="text-lg md:text-xl font-bold font-display text-emerald-400">{project.retentionRate}</span>
            </div>
          </div>
        </div>

        {/* Big Cinematic Embedded Video Player */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-black mb-16 shadow-2xl electric-glow">
          {isPlaying ? (
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-40 blur-sm"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="w-20 h-20 rounded-full bg-[#0070FF] flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors shadow-lg shadow-[#0070FF]/30"
              >
                <Play className="w-8 h-8 fill-white ml-1" />
              </button>
            </div>
          )}

          {/* Player controls HUD */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-4 py-2 rounded-lg bg-black/60 border border-white/10 hover:bg-black/80 text-white font-mono text-xs cursor-pointer"
              >
                {isPlaying ? 'PAUSE PREVIEW' : 'PLAY PREVIEW'}
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-4 py-2 rounded-lg bg-black/60 border border-white/10 hover:bg-black/80 text-white font-mono text-xs cursor-pointer"
              >
                {isMuted ? 'UNMUTE AUDIO' : 'MUTE AUDIO'}
              </button>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 text-xs font-mono text-neutral-400">
              1080p Cinematic Stream
            </span>
          </div>
        </div>

        {/* Detailed Case Study Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Editorial Content (Left Grid) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Project Overview */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0070FF] rounded" />
                Case Study Overview
              </h2>
              <p className="text-neutral-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* The Creative Challenge */}
            <div className="glass-panel p-8 rounded-2xl border border-red-500/10 bg-red-950/5">
              <h3 className="font-display font-bold text-xl text-red-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-red-500 rounded" />
                The Editing Challenge
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Retention curve graph mockup (YouTube Studio visualizer) */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0070FF] rounded" />
                Retention Diagnostics
              </h2>
              <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-neutral-950/40">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Audience Retention Curve</span>
                    <h4 className="font-display font-bold text-lg text-white">Average View Duration: {project.duration} ({project.retentionRate})</h4>
                  </div>
                  <span className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    +24% vs. Average
                  </span>
                </div>

                {/* SVG Curve Vector Representation */}
                <div className="w-full h-40 relative mt-6">
                  <svg viewBox="0 0 500 100" className="w-full h-full stroke-[#0070FF] fill-[#0070FF]/5 stroke-[2] preserve-aspect-ratio">
                    {/* Grid Lines */}
                    <line x1="0" y1="20" x2="500" y2="20" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" />
                    <line x1="0" y1="50" x2="500" y2="50" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.03)" strokeDasharray="4 4" />
                    
                    {/* Retention Curve Path */}
                    <path
                      d="M 0,10 
                         C 50,22 100,20 150,28 
                         C 200,32 250,38 300,42 
                         C 350,45 400,48 450,49 
                         L 500,52
                         L 500,100 L 0,100 Z"
                    />

                    {/* Annotations Dots */}
                    <circle cx="20" cy="14" r="4" fill="#0070FF" />
                    <circle cx="150" cy="28" r="4" fill="#0070FF" />
                    <circle cx="300" cy="42" r="4" fill="#10b981" />
                  </svg>

                  {/* Labels over the curve */}
                  <div className="absolute top-2 left-4 px-2 py-0.5 rounded bg-[#0070FF] text-white text-[10px] font-mono">
                    Hook (Intro): {project.hookRate}
                  </div>
                  <div className="absolute top-[20%] left-[30%] px-2 py-0.5 rounded bg-[#0070FF] text-white text-[10px] font-mono">
                    Mid-Video Spike
                  </div>
                  <div className="absolute bottom-4 right-4 px-2 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-mono">
                    Outro: {project.retentionRate}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/5 text-center">
                  <div>
                    <span className="text-neutral-500 text-[10px] font-mono uppercase block mb-1">Intro Retention</span>
                    <span className="text-white text-sm font-semibold font-mono">{project.hookRate} (0-30s)</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-[10px] font-mono uppercase block mb-1">Re-engagement Loops</span>
                    <span className="text-white text-sm font-semibold font-mono">7 Custom Spike Cues</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-[10px] font-mono uppercase block mb-1">Standard Deviation</span>
                    <span className="text-emerald-400 text-sm font-semibold font-mono">Stable (-4.2%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Editing Adjustments (Detailed bullets) */}
            <div>
              <h2 className="font-display font-bold text-2xl text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#0070FF] rounded" />
                Key Editing Adjustments
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyEdits.map((edit, eIdx) => (
                  <div key={eIdx} className="glass-panel p-5 rounded-xl border border-white/5 hover:border-[#0070FF]/20 transition-colors flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-[#0070FF] shrink-0 mt-0.5" />
                    <span className="text-neutral-300 text-sm md:text-base leading-relaxed">{edit}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Project Specs Sidebar (Right Grid) */}
          <div className="space-y-8">
            
            {/* Tech Stack Specs */}
            <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-6">
              <h3 className="font-display font-bold text-lg text-white border-b border-white/5 pb-3">
                Production Specs
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-neutral-500 text-xs font-mono uppercase block mb-1">Software Stack</span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {project.softwareUsed.map((sw) => (
                      <span
                        key={sw}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/5 text-neutral-300"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="h-[1px] bg-white/5" />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-neutral-500 text-xs font-mono uppercase block mb-1">Deliverable</span>
                    <span className="text-sm font-semibold font-display text-white">4K Master Copy</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 text-xs font-mono uppercase block mb-1">Timeline Scale</span>
                    <span className="text-sm font-semibold font-display text-white">Multi-cam Track</span>
                  </div>
                </div>

                <div className="h-[1px] bg-white/5" />

                <div>
                  <span className="text-neutral-500 text-xs font-mono uppercase block mb-1">Design Style</span>
                  <span className="text-sm font-semibold font-display text-[#0070FF] block mt-1">Cinematic Narrative, Soundscape Dominant</span>
                </div>
              </div>
            </div>

            {/* Ready to convert CTA block */}
            <div className="glass-panel p-6 rounded-2xl border border-[#0070FF]/20 bg-[#0070FF]/10 electric-glow flex flex-col items-center text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#0070FF]/5 blur-xl rounded-full" />
              
              <div className="w-12 h-12 rounded-xl bg-[#0070FF] flex items-center justify-center text-white">
                <Sparkles className="w-6 h-6 fill-white/10" />
              </div>

              <div>
                <h4 className="font-display font-bold text-xl text-white">Need Retention Like This?</h4>
                <p className="text-neutral-400 text-xs leading-relaxed mt-2">
                  Let’s transform your raw files into a retention-optimized asset that drives clicks and subscribers.
                </p>
              </div>

              <div className="w-full space-y-3">
                <button
                  onClick={onContactClick}
                  className="w-full py-3 rounded-xl text-sm font-semibold bg-[#0070FF] hover:bg-blue-600 text-white shadow-lg shadow-[#0070FF]/20 transition-all duration-300 cursor-pointer"
                >
                  Book a Strategy Call
                </button>
                <button
                  onClick={onBack}
                  className="w-full py-3 rounded-xl text-sm font-medium border border-white/10 text-neutral-300 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  Return to Case Studies
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}
