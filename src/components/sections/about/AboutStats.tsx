"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "10+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime Hosting" },
  { value: "2018", label: "Odoo Experts Since" },
];

export default function AboutStats() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-gradient-to-b from-blue-900/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center justify-center px-4"
            >
              <div className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white/60 font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
