"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, FlaskConical, Leaf, Code, ExternalLink } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "SmartHive AI CRM",
    subtitle: "Smarter Leads. Stronger Relationships. More Sales.",
    icon: Bot,
    color: "from-indigo-500 to-purple-600",
    lightColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    link: "https://smarthive.odoocrafts.com/register?template=smarthive_for_institutes"
  },
  {
    title: "Labroute AI",
    subtitle: "From Sample to Report. All in One System.",
    icon: FlaskConical,
    color: "from-blue-500 to-cyan-500",
    lightColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    link: "https://smarthive.odoocrafts.com/register"
  },
  {
    title: "Plantora",
    subtitle: "Nurture Growth. Grow Your Business.",
    icon: Leaf,
    color: "from-emerald-500 to-green-600",
    lightColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    link: "https://smarthive.odoocrafts.com/register"
  }
];

export default function SolutionsShowcase() {
  return (
    <section className="relative min-h-screen pt-48 pb-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Pre-built Solutions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">for Your Business</span>
          </h1>
          <p className="text-xl text-white/60 font-light leading-relaxed">
            Skip development. Launch faster with ready-to-use systems from Odoocrafts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="group relative flex flex-col h-full"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-white/5 rounded-3xl border border-white/10 transition-colors duration-500 group-hover:border-white/20 backdrop-blur-sm" />
                
                {/* Content */}
                <div className="relative p-8 md:p-10 flex flex-col h-full">
                  {/* Icon Graphic Area */}
                  <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${solution.color} p-px mb-8 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500`}>
                    <div className="w-full h-full bg-black/90 rounded-[15px] flex items-center justify-center relative overflow-hidden backdrop-blur-xl">
                      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                      <Icon className="w-16 h-16 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight">
                    {solution.title}
                  </h3>
                  
                  <p className="text-white/60 leading-relaxed mb-10 flex-grow text-lg">
                    {solution.subtitle}
                  </p>

                  <a 
                    href={solution.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl border ${solution.lightColor} font-medium transition-all hover:brightness-125`}
                  >
                    View Live Demo
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solutions Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10" />
          
          <div className="relative z-10 flex-1 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white mb-6 md:hidden">
              <Code className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 flex items-center gap-4 justify-center md:justify-start">
              <span className="hidden md:flex w-12 h-12 rounded-full bg-white/10 items-center justify-center shrink-0">
                <Code className="w-6 h-6" />
              </span>
              Need something completely unique?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl">
              While our pre-built solutions fit most use cases, we know that some businesses require tailored workflows. We build highly customized, scalable systems from the ground up.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
            >
              Request Custom Solution
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
