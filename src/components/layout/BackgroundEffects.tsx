"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const BackgroundEffects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background-primary">
      {/* Noise Texture */}
      <div className="noise-bg absolute inset-0 z-0" />
      
      {/* Grid Overlay */}
      <div className="grid-overlay absolute inset-0 z-1" />
      
      {/* Radial Glows */}
      <div className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-primary/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-secondary/10 blur-[120px]" />
      
      {/* Mouse Follow Glow */}
      <motion.div
        className="pointer-events-none absolute h-[400px] w-[400px] rounded-full bg-emerald-primary/5 blur-[100px]"
        animate={{
          x: mousePosition.x - 200,
          y: mousePosition.y - 200,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      
      {/* Abstract Shapes */}
      <div className="absolute top-[20%] left-[15%] h-[300px] w-[300px] rotate-45 border border-emerald-primary/5 bg-transparent" />
      <div className="absolute bottom-[20%] right-[15%] h-[400px] w-[400px] -rotate-12 border border-emerald-secondary/5 bg-transparent" />
      
      {/* Vignette */}
      <div className="vignette absolute inset-0" />
    </div>
  );
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-1 origin-left bg-emerald-gradient"
      style={{ scaleX }}
    />
  );
};
