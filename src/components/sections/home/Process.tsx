"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/fx/CountUp";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp, Rule } from "@/components/fx/Reveal";

const stats = [
  { value: 50, suffix: "+", label: "Projects delivered" },
  { value: 10, suffix: "+", label: "Countries served" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime hosting" },
  { value: 2018, label: "Odoo experts since", raw: true },
];

const steps = [
  { n: "01", title: "Discover", body: "We map how your business really runs — people, data, bottlenecks — before touching a config screen." },
  { n: "02", title: "Architect", body: "A system blueprint: modules, integrations, automations and the migration path. No surprises later." },
  { n: "03", title: "Craft", body: "Iterative builds you can click through every week. Custom modules, clean code, documented." },
  { n: "04", title: "Launch & Grow", body: "Training, go-live, then managed cloud hosting and support — we stay while the system compounds." },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-40">
      <Container>
        {/* Stats */}
        <Rule />
        <dl className="grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:py-16">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08} className="flex flex-col gap-2 md:border-l md:border-[var(--line)] md:pl-8 md:first:border-0 md:first:pl-0">
              <dd className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-cream">
                {s.raw ? s.value : <CountUp to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />}
              </dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/45">{s.label}</dt>
            </FadeUp>
          ))}
        </dl>
        <Rule />

        {/* Process */}
        <div className="mt-24 grid gap-12 md:mt-32 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <FadeUp>
              <Eyebrow index="04">How a project runs</Eyebrow>
            </FadeUp>
            <Heading className="mt-6" title="Crafted," accent="not configured." size="lg" />
          </div>

          <ol className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:col-span-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group relative bg-ink p-7 transition-colors duration-500 hover:bg-surface md:p-9"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-2/15 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative">
                  <span className="serif-italic text-4xl text-lilac/70 md:text-5xl">{s.n}</span>
                  <h3 className="mt-6 text-2xl font-medium tracking-tight text-cream">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
