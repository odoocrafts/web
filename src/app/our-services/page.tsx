import CTA from "@/components/sections/CTA";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our Odoo implementation, CRM automation, custom development, and cloud hosting services.",
};

export default function OurServices() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <ServicesShowcase />
      <CTA />
    </main>
  );
}
