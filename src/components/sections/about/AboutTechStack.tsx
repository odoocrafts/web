"use client";

import { motion } from "framer-motion";
import { Hexagon } from "lucide-react";

const techStack = [
  "Odoo", "AWS", "Docker", "PostgreSQL", "Python", "Flutter", "WhatsApp API"
];

export default function AboutTechStack() {
  return (
    <section className="py-32 px-6 border-t border-white/5 bg-black/50">
      <div className="container mx-auto max-w-7xl">

        {/* Tech Stack */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Our Tech Stack</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">We leverage modern, scalable, and battle-tested technologies.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/30 hover:-translate-y-1 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
