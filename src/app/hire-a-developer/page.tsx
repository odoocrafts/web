import CTA from "@/components/sections/CTA";
import { ArrowRight, MessageSquare, Mail, Code2, Rocket, Clock } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire a Developer",
  description: "Hire dedicated Odoo developers and technical experts from Odoocrafts for your next big project.",
};

export default function HireDeveloper() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <section className="relative pt-48 pb-20 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 mb-8">
            <Code2 className="w-4 h-4" />
            <span className="text-sm font-medium">Dedicated Odoo Experts</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8">
            Hire an <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Odoo Developer</span>
          </h1>
          
          <p className="text-xl text-white/60 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            Need dedicated talent for your project? Hire our experienced Odoo developers to work directly with your team and accelerate your implementation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Rocket className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Fast Onboarding</h3>
              <p className="text-white/60 text-sm">Get an expert developer integrated into your project within days, not weeks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Code2 className="w-8 h-8 text-teal-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Top Talent</h3>
              <p className="text-white/60 text-sm">Our developers have years of deep technical expertise in Odoo Python and JS frameworks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Flexible Scaling</h3>
              <p className="text-white/60 text-sm">Scale your development team up or down based on your immediate project needs.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://wa.me/918330887435?text=Hi%20Odoocrafts!%20I'm%20interested%20in%20hiring%20a%20developer."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-full hover:scale-105 transition-transform w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            
            <a 
              href="mailto:info@odoocrafts.com?subject=Hire%20a%20Developer"
              className="flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/10 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
