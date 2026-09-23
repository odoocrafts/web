"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/ui/Button";
import { Words } from "@/components/fx/Reveal";
import { Container } from "@/components/ui/Section";
import { useIntroDone } from "@/lib/intro";
import { links } from "@/lib/site";

const HeroCanvas = dynamic(() => import("@/components/fx/HeroCanvas"), { ssr: false });

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ready = useIntroDone();
  const d = (x: number) => ({ duration: 0.9, ease: EASE, delay: x });

  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Background: shader + grid + fade */}
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-ink" />
      </div>

      <Container className="relative flex flex-1 flex-col justify-end pb-32 pt-32 md:pb-14 md:pt-40">
        {/* Headline */}
        <h1 className="max-w-[12ch] text-[clamp(2.9rem,9.4vw,9.5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-cream">
          <Words text="Transform Business Chaos" animate={ready} delay={0.15} stagger={0.06} />
          <br />
          <Words text="Into" animate={ready} delay={0.35} />{" "}
          <Words
            text="Automated Growth."
            animate={ready}
            delay={0.42}
            stagger={0.07}
            wordClassName="serif-italic text-gradient pr-[0.06em]"
          />
        </h1>

        {/* Sub + CTAs */}
        <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-12 md:items-end">
          <motion.div
            className="md:col-span-6 lg:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={d(0.7)}
          >
            <p className="text-lg leading-relaxed text-cream/70 md:text-xl">
              <span className="text-cream">ERP. CRM. Automation. AI.</span>
              <br />
              Built for businesses that want systems that actually work.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/solutions" size="lg">
                Explore Ready-Made Solutions
              </Button>
              <Button href={links.booking} variant="ghost" size="lg" icon="external">
                Book a call
              </Button>
            </div>
          </motion.div>

          {/* Proof strip */}
          <motion.dl
            className="grid grid-cols-3 gap-4 border-t border-[var(--line)] pt-6 pr-14 md:col-span-6 md:col-start-7 md:gap-6 md:pr-0 lg:col-span-5 lg:col-start-8"
            initial={{ opacity: 0, y: 16 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={d(0.85)}
          >
            {[
              ["50+", "Projects delivered"],
              ["10+", "Countries served"],
              ["2018", "Odoo experts since"],
            ].map(([v, l]) => (
              <div key={l}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/45">{l}</dt>
                <dd className="mt-1 text-2xl font-medium tracking-tight text-cream md:text-3xl">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="pointer-events-none absolute bottom-5 right-5 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-cream/40 md:flex md:bottom-6 md:right-8"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 1 }}
        >
          Scroll to explore
          <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}>
            <ArrowDown className="h-3.5 w-3.5" />
          </motion.span>
        </motion.div>
      </Container>
    </section>
  );
}
