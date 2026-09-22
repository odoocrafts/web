"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, Settings, Link2, Sparkles } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";

const items = [
  {
    n: "01",
    title: "Odoo Implementation",
    body:
      "Streamline operations end-to-end. We scope, configure and roll out Odoo across sales, inventory, accounting, HR and manufacturing — tailored to how you actually work.",
    icon: Rocket,
    tags: ["Discovery", "Data migration", "Training", "Go-live"],
  },
  {
    n: "02",
    title: "Odoo Customization",
    body:
      "Off-the-shelf never fits perfectly. We craft custom modules, workflows and reports that make Odoo feel like it was built for your team.",
    icon: Settings,
    tags: ["Custom modules", "Workflows", "Reports", "UX"],
  },
  {
    n: "03",
    title: "Odoo Integration",
    body:
      "WhatsApp, IVRS, biometrics, payment gateways, marketplaces and legacy APIs — connected so data flows once and lands everywhere it should.",
    icon: Link2,
    tags: ["WhatsApp", "IVRS", "Biometric", "REST APIs"],
  },
  {
    n: "04",
    title: "AI & Business Automation",
    body:
      "Copilots inside Odoo, automated follow-ups, forecasting and document intelligence. Systems that quietly do the work your team used to do by hand.",
    icon: Sparkles,
    tags: ["Copilots", "Forecasting", "Auto follow-ups", "OCR"],
  },
];

export default function Capabilities() {
  return (
    <section className="relative py-24 md:py-40">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <FadeUp>
                <Eyebrow index="01">What we craft</Eyebrow>
              </FadeUp>
              <Heading
                className="mt-6"
                title="We don't set up software."
                accent="We architect"
                after="systems."
              />
              <FadeUp delay={0.2}>
                <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/65">
                  Intelligent business systems tailored precisely to how you operate — from first discovery call to
                  the day your team stops noticing the software and just does the work.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <Link
                  href="/our-services"
                  className="link-underline mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-cream"
                >
                  All services <ArrowUpRight className="h-4 w-4" />
                </Link>
              </FadeUp>
            </div>
          </div>

          {/* List */}
          <ul className="lg:col-span-7">
            {items.map((it, i) => {
              const Icon = it.icon;
              return (
                <motion.li
                  key={it.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                  className="group border-t border-[var(--line)] last:border-b"
                >
                  <Link href="/our-services" className="grid gap-5 py-8 md:grid-cols-12 md:gap-6 md:py-10">
                    <div className="flex items-start justify-between md:col-span-3 md:block">
                      <span className="font-mono text-sm text-cream/40">{it.n}</span>
                      <span className="mt-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)] text-lilac transition-colors duration-500 group-hover:border-lilac/50 group-hover:bg-lilac/10 md:mt-6">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <div className="md:col-span-9">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-medium tracking-tight text-cream md:text-[2rem]">{it.title}</h3>
                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-cream/30 transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cream" />
                      </div>
                      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-cream/60 md:text-base">{it.body}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {it.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[var(--line)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cream/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
