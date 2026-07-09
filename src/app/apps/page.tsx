import { Metadata } from "next";
import AppsShowcase from "@/components/sections/apps/AppsShowcase";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Odoo Apps",
  description: "Explore our premium Odoo apps and modules designed to supercharge your business operations. Available now on the Odoo App Store.",
};

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-black pt-32">
      <div className="container mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Our Odoo <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Apps</span>
        </h1>
        <p className="text-xl text-white/60 max-w-2xl">
          Supercharge your Odoo environment with our carefully crafted, premium modules. Built by experts, trusted by businesses worldwide.
        </p>
      </div>

      <AppsShowcase />
      
      <CTA />
    </main>
  );
}
