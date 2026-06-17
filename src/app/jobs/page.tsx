import CTA from "@/components/sections/CTA";
import { Briefcase, MapPin, Clock, ArrowRight, Mail } from "lucide-react";

export default function Jobs() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <section className="relative pt-48 pb-20 px-6 min-h-screen">
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="mb-24">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Odoocrafts</span>
            </h1>
            <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl">
              Help us build intelligent, scalable systems for businesses worldwide. We're always looking for exceptional talent to join our remote-friendly team.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">Open Positions</h2>
            
            {/* Job Card */}
            <div className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 hover:border-white/20 transition-all backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Odoo Developer</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      <span>Full-time</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>2+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>Remote / India</span>
                    </div>
                  </div>
                  <p className="text-white/70 max-w-2xl leading-relaxed">
                    We are looking for an experienced Odoo Developer to join our core team. You will be responsible for developing custom Odoo modules, integrating third-party applications, and optimizing existing architectures for our global clients.
                  </p>
                </div>

                <div className="shrink-0 flex items-center justify-center">
                  <a 
                    href="mailto:hr@odoocrafts.com?subject=Application%20for%20Odoo%20Developer%20(2%2B%20Years)"
                    className="group/btn flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
                  >
                    <Mail className="w-4 h-4" />
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">Don't see a perfect fit?</h3>
            <p className="text-white/60 mb-6">We're always interested in meeting great people. Send your resume to us anyway.</p>
            <a href="mailto:hr@odoocrafts.com" className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center gap-2">
              hr@odoocrafts.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
