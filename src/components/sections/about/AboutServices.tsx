"use client";

import { motion } from "framer-motion";
import { Layers, Bot, Code2, Combine, Cloud, Zap, GraduationCap, Factory, Truck, HardHat, HeartPulse, Wrench } from "lucide-react";

const services = [
  { icon: Layers, title: "Odoo ERP Implementation" },
  { icon: Bot, title: "CRM Automation" },
  { icon: Code2, title: "Custom Development" },
  { icon: Combine, title: "Integrations (WhatsApp, IVRS, Biometric, APIs)" },
  { icon: Cloud, title: "Cloud Hosting & Support" },
  { icon: Zap, title: "AI & Business Automation" },
];

const industries = [
  { icon: GraduationCap, title: "Education" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Truck, title: "Trading & Distribution" },
  { icon: HardHat, title: "Construction" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Wrench, title: "Services" },
];

export default function AboutServices() {
  return (
    <section className="py-32 px-6 relative border-t border-white/5 bg-black/50">
      <div className="container mx-auto max-w-7xl">
        
        {/* What We Do */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">What We Do</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Comprehensive technological solutions engineered to streamline your operations end-to-end.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-md"
                >
                  <Icon className="w-8 h-8 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold text-white tracking-tight">{service.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Industries We Serve */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Industries We Serve</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Tailored expertise across specialized sectors.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 px-6 py-4 rounded-full bg-gradient-to-r from-white/5 to-white/10 border border-white/10 hover:border-white/30 transition-colors backdrop-blur-sm"
                >
                  <Icon className="w-5 h-5 text-purple-400" />
                  <span className="text-white font-medium">{ind.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
