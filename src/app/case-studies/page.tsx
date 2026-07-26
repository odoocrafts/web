import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Case Studies | Odoocrafts",
  description: "Read our success stories and discover how Odoocrafts has transformed businesses with custom ERP, CRM, and automation solutions.",
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-black pt-32">
      <div className="container mx-auto px-6 mb-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Case Studies</span>
          </h1>
          <p className="text-xl text-white/60">
            Real problems. Real solutions. Explore how we've helped ambitious companies scale their operations with custom-built digital ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Link 
              href={`/case-studies/${study.slug}`} 
              key={study.slug}
              className="group relative flex flex-col h-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="h-64 relative bg-black/50 p-8 flex items-center justify-center overflow-hidden">
                {/* Fallback pattern if logo is transparent */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black" />
                <img 
                  src={study.coverImage} 
                  alt={study.client}
                  className="max-h-full max-w-full object-contain relative z-10 transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow relative z-10">
                <div className="flex items-center gap-4 text-xs font-medium text-white/40 mb-4">
                  <span className="bg-white/10 text-white/80 px-3 py-1 rounded-full">{study.client}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {study.readTime}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {study.title}
                </h2>
                
                <p className="text-white/60 mb-8 flex-grow leading-relaxed">
                  {study.excerpt}
                </p>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 group-hover:text-white transition-colors mt-auto">
                  Read Full Story
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <CTA />
    </main>
  );
}
