import CTA from "@/components/sections/CTA";
import SolutionsShowcase from "@/components/sections/SolutionsShowcase";

export default function Solutions() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <SolutionsShowcase />
      <CTA />
    </main>
  );
}
