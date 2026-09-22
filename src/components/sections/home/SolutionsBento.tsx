"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { solutions } from "@/data/solutions";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";
import Button from "@/components/ui/Button";

const spans = ["md:col-span-7 md:row-span-2", "md:col-span-5", "md:col-span-5", "md:col-span-6", "md:col-span-6"];

export default function SolutionsBento() {
  return (
    <section className="relative py-24 md:py-40">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow index="02">Ready-made solutions</Eyebrow>
            </FadeUp>
            <Heading className="mt-6 max-w-[14ch]" title="Skip development." accent="Launch faster." />
          </div>
          <FadeUp delay={0.2} className="max-w-md">
            <p className="text-lg leading-relaxed text-cream/65">
              Pre-built, industry-specific systems from Odoocrafts — deployed in days, not quarters. Every one runs on
              a hardened Odoo core.
            </p>
          </FadeUp>
        </div>

        <ul className="mt-14 grid gap-4 md:mt-20 md:grid-cols-12 md:grid-rows-[minmax(220px,auto)_minmax(220px,auto)_minmax(220px,auto)]">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            const big = i === 0;
            return (
              <motion.li
                key={s.title}
                className={`${spans[i]} group relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
              >
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Demo"
                  className={`card relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] p-6 transition-colors duration-500 hover:border-[var(--line-strong)] md:p-8 ${
                    big ? "min-h-[380px]" : "min-h-[220px]"
                  }`}
                >
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${s.wash} opacity-40 transition-opacity duration-700 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-start justify-between">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-ink/50 ${s.accent}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-cream/30 transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cream" />
                  </div>

                  <div className="relative mt-10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/45">{s.sector}</p>
                    <h3 className={`mt-2 font-medium tracking-tight text-cream ${big ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                      {s.title}
                    </h3>
                    <p className={`mt-3 text-cream/60 ${big ? "max-w-md text-base md:text-lg" : "text-[15px]"}`}>{s.subtitle}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition-colors group-hover:text-cream">
                      View Live Demo
                      <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
                    </span>
                  </div>

                  {big && (
                    <div className="pointer-events-none absolute -bottom-16 -right-10 hidden h-64 w-64 rounded-full border border-lilac/20 md:block">
                      <div className="absolute inset-6 rounded-full border border-lilac/15" />
                      <div className="absolute inset-12 rounded-full border border-lilac/10" />
                      <div className="absolute inset-[4.5rem] rounded-full bg-violet-2/20 blur-2xl" />
                    </div>
                  )}
                </a>
              </motion.li>
            );
          })}
        </ul>

        <FadeUp className="mt-10 flex justify-center md:mt-14">
          <Button href="/solutions" variant="ghost">
            Explore all solutions
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
