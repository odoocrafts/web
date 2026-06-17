"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Mail, Phone, Home } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative pt-32 bg-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Ready to Build Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Scale?</span>
          </h2>
          <a 
            href="https://wa.me/918330887435?text=Hi%20Odoocrafts!%20I%20would%20like%20to%20schedule%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <span className="relative z-10">Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </div>

      <footer className="relative z-10 w-full mt-32 border-t border-white/5 pt-16 pb-8 px-6 md:px-12 text-sm bg-black">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16 text-left">
          
          {/* Useful Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white mb-2">Useful Links</h3>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Home</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">About us</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Services</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">Contact us</a>
          </div>

          {/* About us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white mb-2">About us</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Odoocrafts is dedicated to delivering customized, efficient, and scalable Odoo solutions that empower businesses to optimize their operations and accelerate growth. Driven by a passion for Odoo, our team brings over 10 years of global experience in ERP implementation. We focus on quality and customer satisfaction, ensuring seamless integration and ongoing support tailored to your needs.
            </p>
          </div>

          {/* Connect with us */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white mb-2">Connect with us</h3>
            <div className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors">
              <MessageSquare className="w-4 h-4" />
              <a href="#">Contact us</a>
            </div>
            <div className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors">
              <Mail className="w-4 h-4" />
              <a href="mailto:info@odoocrafts.com">info@odoocrafts.com</a>
            </div>
            <div className="flex items-center gap-3 text-purple-400 hover:text-purple-300 transition-colors">
              <Phone className="w-4 h-4" />
              <a href="tel:+919778013362">+91 97780 13362</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-white/80 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-white/80 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-white/80 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-white/80 transition-colors">
                <Home className="w-4 h-4" />
              </a>
            </div>
          </div>
          
        </div>

        <div className="container mx-auto text-left text-white/50">
          Copyright © Odoocrafts Innovations
        </div>
      </footer>
    </section>
  );
}
