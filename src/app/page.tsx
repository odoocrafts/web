import Hero from "@/components/sections/home/Hero";
import Ticker from "@/components/sections/home/Ticker";
import Capabilities from "@/components/sections/home/Capabilities";
import SolutionsBento from "@/components/sections/home/SolutionsBento";
import SmartHiveShowcase from "@/components/sections/SmartHiveShowcase";
import Process from "@/components/sections/home/Process";
import FeaturedCaseStudy from "@/components/sections/home/FeaturedCaseStudy";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <Capabilities />
      <SolutionsBento />
      <SmartHiveShowcase />
      <Process />
      <FeaturedCaseStudy />
      <CTA />
    </main>
  );
}
