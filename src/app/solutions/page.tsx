import { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Discover our tailored Odoo solutions, including SmartHive CRM and Vidyalink School ERP.",
};

export default function Solutions() {
  return (
    <main>
      <SolutionsShowcase />
      <CTA />
    </main>
  );
}
