import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  // Use springs for smooth mouse-trail delays
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    
    // Detect if device supports fine pointers (mice) or touch only
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointer(mediaQuery.matches);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 175); // Subtract half of the glow element width (350px / 2)
      mouseY.set(e.clientY - 175);
    };

    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* Film Grain Texture Overlay */}
      <div className="grain" />

      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Floating Animated Cinematic Glow Spheres (Ambient Background) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Sphere 1: Electric Blue top-right */}
        <motion.div 
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#0070FF]/10 blur-[130px]"
        />

        {/* Sphere 2: Deep Indigo bottom-left */}
        <motion.div 
          animate={{
            x: [0, -30, 30, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-800/8 blur-[150px]"
        />

        {/* Sphere 3: Subtle violet accent center */}
        <motion.div 
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-blue-950/20 blur-[120px]"
        />
      </div>

      {/* Interactive Cursor-Follower Glow (Mice Only) */}
      {isPointer && (
        <motion.div
          className="fixed pointer-events-none z-10 w-[350px] h-[350px] rounded-full bg-radial from-[#0070FF]/15 via-[#0070FF]/5 to-transparent blur-[60px]"
          style={{
            x: glowX,
            y: glowY,
          }}
        />
      )}
    </>
  );
}
