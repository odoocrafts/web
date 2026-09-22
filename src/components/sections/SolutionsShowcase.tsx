"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import { solutions } from "@/data/solutions";
import { Container, PageHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";
import Button from "@/components/ui/Button";

export default function SolutionsShowcase() {
  return (
    <>
      <PageHeader
        index="02"
        eyebrow="Solutions"
        title="Pre-built solutions"
        accent="for your business."
        description="Skip development. Launch faster with ready-to-use systems from Odoocrafts."
        align="center"
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
                  className="group"
                >
                  <div className="card relative flex h-full flex-col overflow-hidden rounded-[24px] transition-colors duration-500 hover:border-[var(--line-strong)]">
                    <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${s.wash} opacity-40 transition-opacity duration-700 group-hover:opacity-100`} />

                    {/* Visual */}
                    <div className="relative flex h-52 items-center justify-center border-b border-[var(--line)]">
                      <div className="absolute inset-0 grid-lines opacity-70" />
                      <div className="relative">
                        <div className="absolute -inset-8 rounded-full bg-cream/5 blur-2xl" />
                        <span className={`relative inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--line-strong)] bg-ink/60 ${s.accent} transition-transform duration-700 ease-out-expo group-hover:scale-110 group-hover:-rotate-3`}>
                          <Icon className="h-9 w-9" />
                        </span>
                      </div>
                    </div>

                    <div className="relative flex flex-1 flex-col p-7">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/45">{s.sector}</p>
                      <h3 className="mt-2 text-2xl font-medium tracking-tight text-cream md:text-3xl">{s.title}</h3>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-cream/60 md:text-base">{s.subtitle}</p>
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] text-[15px] font-medium text-cream transition-colors duration-500 hover:bg-cream hover:text-ink"
                      >
                        View Live Demo <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </motion.li>
              );
            })}

            {/* Custom solution card fills the grid */}
            <FadeUp as="li" className="md:col-span-2 lg:col-span-1" delay={0.2}>
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[24px] border border-dashed border-[var(--line-strong)] p-7">
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-2/15 to-transparent" />
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/10 text-cream">
                  <Code className="h-5 w-5" />
                </span>
                <div className="relative mt-10">
                  <h3 className="text-2xl font-medium tracking-tight text-cream md:text-3xl">Need something completely unique?</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/60">
                    While our pre-built solutions fit most use cases, we know that some businesses require tailored
                    workflows. We build highly customized, scalable systems from the ground up.
                  </p>
                  <div className="mt-8">
                    <Button href="/contact" fullWidth>
                      Request Custom Solution
                    </Button>
                  </div>
                </div>
              </div>
            </FadeUp>
          </ul>
        </Container>
      </section>
    </>
  );
}
