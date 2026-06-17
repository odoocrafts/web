"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, BarChart3, Users, Zap } from "lucide-react";

export default function SmartHiveShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={containerRef} className="relative min-h-[150vh] bg-black py-32 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 text-center mb-24">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">SmartHive</span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          The ultimate system that brings your ERP, CRM, and automated workflows into one unified, intelligent interface.
        </p>
      </div>

      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto glass rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-[0_0_50px_rgba(59,130,246,0.1)]"
      >
        {/* Mockup Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
            <div className="h-4 w-32 bg-white/10 rounded-full" />
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-white/20" />
          </div>
        </div>

        {/* Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div style={{ y: y1 }} className="col-span-1 md:col-span-2 glass rounded-xl p-6 h-64 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-between items-start">
              <div className="h-6 w-24 bg-white/20 rounded-md" />
              <Activity className="text-blue-400" />
            </div>
            <div className="flex gap-2 mt-auto items-end h-32">
              {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                  className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-sm" 
                />
              ))}
            </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="glass rounded-xl p-6 h-64 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div className="h-6 w-24 bg-white/20 rounded-md" />
              <Users className="text-purple-400" />
            </div>
            <div className="flex flex-col gap-3 mt-auto">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10" />
                  <div className="h-2 flex-1 bg-white/10 rounded-full" />
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="glass rounded-xl p-6 h-48 flex flex-col justify-between">
             <div className="flex justify-between items-start">
              <div className="h-6 w-32 bg-white/20 rounded-md" />
              <Zap className="text-yellow-400" />
            </div>
            <div className="text-4xl font-bold text-white/90">99.9%</div>
            <div className="text-sm text-green-400">System Efficiency</div>
          </motion.div>

          <motion.div style={{ y: y1 }} className="col-span-1 md:col-span-2 glass rounded-xl p-6 h-48 flex items-center justify-center">
            <div className="w-full flex justify-between gap-4">
               {[1, 2, 3, 4].map(i => (
                 <div key={i} className="flex flex-col items-center gap-2">
                   <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center">
                     <BarChart3 className="text-white/40 w-5 h-5" />
                   </div>
                   <div className="h-2 w-16 bg-white/10 rounded-full" />
                 </div>
               ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
