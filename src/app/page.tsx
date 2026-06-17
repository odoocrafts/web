import Image from "next/image";
import SmartHiveShowcase from "@/components/sections/SmartHiveShowcase";
import GlobalPresence from "@/components/sections/GlobalPresence";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* HTML Text Overlay */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pointer-events-none">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
            Transform Business Chaos<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Into Automated Growth.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-3xl mx-auto">
            ERP. CRM. Automation. AI.<br/>
            Built for businesses that want systems that actually work.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-sm tracking-widest uppercase animate-pulse z-10">
          Scroll to explore
        </div>
      </section>

      {/* Sections */}
      <SmartHiveShowcase />
      <GlobalPresence />
      <CTA />
    </main>
  );
}
