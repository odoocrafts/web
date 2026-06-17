import CTA from "@/components/sections/CTA";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutServices from "@/components/sections/about/AboutServices";
import AboutStats from "@/components/sections/about/AboutStats";
import AboutProducts from "@/components/sections/about/AboutProducts";
import AboutTechStack from "@/components/sections/about/AboutTechStack";
import AboutTeam from "@/components/sections/about/AboutTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Odoocrafts, our mission, vision, and the leadership team driving engineering excellence.",
};

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <AboutHero />
      <AboutStats />
      <AboutServices />
      <AboutProducts />
      <AboutTechStack />
      <AboutTeam />
      <div className="mt-20">
        <CTA />
      </div>
    </main>
  );
}
