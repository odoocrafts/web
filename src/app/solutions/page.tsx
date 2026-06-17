import CTA from "@/components/sections/CTA";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Discover our tailored Odoo solutions, including SmartHive CRM and Vidyalink School ERP.",
};

export default function Solutions() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <SolutionsShowcase />
      <CTA />
    </main>
  );
}
