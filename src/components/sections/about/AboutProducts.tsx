"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, GraduationCap, Cloud, TrendingUp, Zap, FileSpreadsheet } from "lucide-react";

const products = [
  {
    title: "SmartHive",
    desc: "AI-powered CRM for Institutes",
    icon: Bot,
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Vidyalink",
    desc: "Complete School ERP",
    icon: GraduationCap,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Managed Odoo Cloud",
    desc: "Hosted & Maintained by Odoocrafts",
    icon: Cloud,
    color: "from-emerald-500 to-teal-600"
  }
];

const caseStudies = [
  { metric: "40%", label: "Increased admissions", icon: TrendingUp },
  { metric: "100%", label: "Automated sales pipeline", icon: Zap },
  { metric: "80%", label: "Reduced manual work", icon: FileSpreadsheet },
];

export default function AboutProducts() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Products */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Proprietary Products</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Purpose-built platforms designed to solve complex industry challenges out of the box.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((prod, i) => {
              const Icon = prod.icon;
              return (
                <motion.div
                  key={prod.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/30 transition-all overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${prod.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <Icon className="w-10 h-10 text-white mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">{prod.title}</h3>
                  <p className="text-white/60 mb-8">{prod.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-white/80 group-hover:text-white transition-colors cursor-pointer mt-auto">
                    Explore Product <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Proven Impact</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">We measure our success by the tangible growth of our clients.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => {
              const Icon = study.icon;
              return (
                <motion.div
                  key={study.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-white mb-1 tracking-tighter">{study.metric}</div>
                    <div className="text-white/60 text-sm leading-tight">{study.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
