"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import anasImg from "../../../../public/team/anas.webp";
import rizwanImg from "../../../../public/team/rizwan.webp";
import murshidImg from "../../../../public/team/murshid.webp";
import fidhaImg from "../../../../public/team/fidha.webp";

const team = [
  { name: "Anas", role: "CEO", image: anasImg },
  { name: "Rizwan", role: "CTO", image: rizwanImg },
  { name: "Murshid", role: "COO", image: murshidImg },
  { name: "Fidha", role: "CMO", image: fidhaImg },
];

export default function AboutTeam() {
  return (
    <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Meet the Leadership</h2>
            <p className="text-white/60 text-lg max-w-xl">The visionaries driving Odoocrafts forward, ensuring engineering excellence and client success.</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/team" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-colors border border-white/10">
              View Full Team <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-all"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-1 transform group-hover:scale-105 transition-transform duration-300">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-black/50">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
              <p className="text-white/50 text-sm font-medium uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
