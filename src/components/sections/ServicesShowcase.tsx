"use client";

import { motion } from "framer-motion";
import { Settings, Rocket, Link2, ArrowUpRight } from "lucide-react";
import { Container, PageHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { links } from "@/lib/site";

const services = [
  {
    n: "01",
    title: "Odoo Customization",
    description:
      "Our Odoo customization service tailors solutions to fit your business needs, enhancing workflows and integrating seamlessly with your systems for optimal efficiency.",
    icon: Settings,
    deliverables: ["Custom modules & fields", "Workflow automation", "Report & dashboard design", "UX refinements"],
  },
  {
    n: "02",
    title: "Odoo Implementation",
    description:
      "Streamline your business operations with our Odoo implementation service. We customize and integrate Odoo solutions to enhance efficiency, improve productivity, and drive growth tailored to your unique needs.",
    icon: Rocket,
    deliverables: ["Process discovery", "Configuration & data migration", "Team training", "Go-live & hypercare"],
  },
  {
    n: "03",
    title: "Odoo Integration",
    description:
      "Odoo integration with third-party apps and services streamlines business processes by enabling seamless data exchange, enhancing functionality, and improving overall efficiency. This connectivity allows businesses to leverage existing tools while maximizing the capabilities of Odoo.",
    icon: Link2,
    deliverables: ["WhatsApp, IVRS & biometric", "Payment gateways", "Marketplaces & e-commerce", "Legacy & REST APIs"],
  },
];

export default function ServicesShowcase() {
  return (
    <>
      <PageHeader
        index="01"
        eyebrow="Our Services"
        title="Software is easy."
        accent="Systems"
        after="are the craft."
        description="We don't just set up software. We architect intelligent business systems tailored precisely to how you operate."
      >
        <Button href={links.booking} icon="external">
          Talk to an architect
        </Button>
      </PageHeader>

      <section className="pb-24 md:pb-32">
        <Container>
          <ol className="border-t border-[var(--line)]">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-8% 0px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
                  className="group grid gap-6 border-b border-[var(--line)] py-12 md:grid-cols-12 md:gap-8 md:py-20"
                >
                  <div className="flex items-start justify-between md:col-span-3 md:flex-col md:items-start md:justify-start md:gap-8">
                    <span className="serif-italic text-5xl leading-none text-lilac/70 md:text-7xl">{s.n}</span>
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line-strong)] text-lilac">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="md:col-span-5">
                    <h2 className="text-3xl font-medium tracking-tight text-cream md:text-5xl">{s.title}</h2>
                    <p className="mt-6 text-base leading-relaxed text-cream/60 md:text-lg">{s.description}</p>
                  </div>
                  <div className="md:col-span-4 md:pl-8">
                    <p className="eyebrow mb-4">What you get</p>
                    <ul className="flex flex-col divide-y divide-[var(--line)]">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex items-center justify-between py-3 text-[15px] text-cream/80">
                          {d}
                          <span className="h-1 w-1 rounded-full bg-lilac/70" />
                        </li>
                      ))}
                    </ul>
                    <a
                      href={links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-cream"
                    >
                      Learn more <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </Container>
      </section>
    </>
  );
}
