"use client";

import { motion } from "framer-motion";
import { Settings, Rocket, Link2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Odoo Customization",
    description: "Our Odoo customization service tailors solutions to fit your business needs, enhancing workflows and integrating seamlessly with your systems for optimal efficiency.",
    icon: Settings,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Odoo Implementation",
    description: "Streamline your business operations with our Odoo implementation service. We customize and integrate Odoo solutions to enhance efficiency, improve productivity, and drive growth tailored to your unique needs.",
    icon: Rocket,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Odoo Integration",
    description: "Odoo integration with third-party apps and services streamlines business processes by enabling seamless data exchange, enhancing functionality, and improving overall efficiency. This connectivity allows businesses to leverage existing tools while maximizing the capabilities of Odoo.",
    icon: Link2,
    color: "from-emerald-400 to-teal-500",
  }
];

export default function ServicesShowcase() {
  return (
    <section className="relative min-h-screen pt-48 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24 text-center md:text-left mx-auto md:mx-0"
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Services</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl leading-relaxed mx-auto md:mx-0">
            We don't just set up software. We architect intelligent business systems tailored precisely to how you operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-white/0 rounded-3xl border border-white/10 transition-colors duration-500 group-hover:border-white/20 backdrop-blur-sm" />
                
                {/* Glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

                <div className="relative p-8 md:p-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl`}>
                    <div className="w-full h-full bg-black/80 rounded-[14px] flex items-center justify-center backdrop-blur-xl">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed mb-10 flex-grow text-base md:text-lg">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors cursor-pointer mt-auto w-fit">
                    Learn more
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
