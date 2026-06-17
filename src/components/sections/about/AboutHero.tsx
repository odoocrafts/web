"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen pt-48 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">Engineering Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            We Build ERP Systems That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              People Actually Use.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            Odoo Implementation, Customization, Automation & Support for Growing Businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/918330887435?text=Hi%20Odoocrafts!%20I%20would%20like%20to%20schedule%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <button 
              className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/10 w-full sm:w-auto justify-center"
            >
              <BookOpen className="w-5 h-5" />
              View Case Studies
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-sm tracking-widest uppercase animate-pulse z-10"
      >
        Scroll to discover
      </motion.div>
    </section>
  );
}
