import { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import ServicesShowcase from "@/components/sections/ServicesShowcase";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our Odoo implementation, CRM automation, custom development, and cloud hosting services.",
};

export default function OurServices() {
  return (
    <main>
      <ServicesShowcase />
      <CTA />
    </main>
  );
}
