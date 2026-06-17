import CTA from "@/components/sections/CTA";
import { MapPin, Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <section className="relative pt-48 pb-32 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Ambient Backgrounds */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
              Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Conversation</span>
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              We're ready to help you modernize your operations. Reach out to us directly through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            
            {/* WhatsApp Card */}
            <a 
              href="https://wa.me/918330887435"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-[#25D366]/50 transition-all overflow-hidden flex flex-col items-start justify-between h-full min-h-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#25D366]/0 to-[#25D366]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-[#25D366]" />
              </div>
              
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <h2 className="text-2xl font-bold text-white">WhatsApp</h2>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white/60 text-lg">+91 83308 87435</p>
                <p className="text-white/40 text-sm mt-4">Fastest response for quick inquiries.</p>
              </div>
            </a>

            {/* Email Card */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all overflow-hidden flex flex-col items-start justify-between h-full min-h-[250px]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <h2 className="text-2xl font-bold text-white">Email Us</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@odoocrafts.com" className="text-white/60 text-lg hover:text-white transition-colors">info@odoocrafts.com</a>
                  <a href="mailto:hey@odoocrafts.com" className="text-white/60 text-lg hover:text-white transition-colors">hey@odoocrafts.com</a>
                </div>
                <p className="text-white/40 text-sm mt-4">For detailed project proposals and RFPs.</p>
              </div>
            </div>

            {/* Phone Card */}
            <a 
              href="tel:+919778013362"
              className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all overflow-hidden flex flex-col items-start justify-between h-full min-h-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                <Phone className="w-8 h-8 text-purple-400" />
              </div>
              
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <h2 className="text-2xl font-bold text-white">Call Us</h2>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <p className="text-white/60 text-lg">+91 97780 13362</p>
                <p className="text-white/40 text-sm mt-4">Speak directly with our technical team.</p>
              </div>
            </a>

            {/* Address / Map Card */}
            <a 
              href="https://maps.google.com/?q=Building+60/44+3rd+Floor,+J.C.Chambers,+V+467,+Panampilly+Nagar,+Ernakulam,+Kerala+682036"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all overflow-hidden flex flex-col items-start justify-between h-full min-h-[250px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-orange-400" />
              </div>
              
              <div className="w-full">
                <div className="flex items-center justify-between w-full mb-2">
                  <h2 className="text-2xl font-bold text-white">Headquarters</h2>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <div className="text-white/60 text-base leading-relaxed">
                  Building 60/44, 3rd Floor, J.C.Chambers<br />
                  V 467, Panampilly Nagar<br />
                  Ernakulam, Kerala 682036 (IN)
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>
      
      <CTA />
    </main>
  );
}
