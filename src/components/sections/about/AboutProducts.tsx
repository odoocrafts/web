import Link from "next/link";
import { ArrowUpRight, Bot, GraduationCap, Cloud, TrendingUp, Zap, FileSpreadsheet } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp, Item, Stagger } from "@/components/fx/Reveal";
import CountUp from "@/components/fx/CountUp";

const products = [
  { title: "SmartHive", desc: "AI-powered CRM for Institutes", icon: Bot, href: "/solutions" },
  { title: "Vidyalink", desc: "Complete School ERP", icon: GraduationCap, href: "/solutions" },
  { title: "Managed Odoo Cloud", desc: "Hosted & Maintained by Odoocrafts", icon: Cloud, href: "/our-services" },
];

const impact = [
  { value: 40, label: "Increased admissions", icon: TrendingUp },
  { value: 100, label: "Automated sales pipeline", icon: Zap },
  { value: 80, label: "Reduced manual work", icon: FileSpreadsheet },
];

export default function AboutProducts() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        {/* Products */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow index="03">Proprietary products</Eyebrow>
            </FadeUp>
            <Heading className="mt-6" title="Built once," accent="solved everywhere." size="lg" />
          </div>
          <FadeUp delay={0.2} className="max-w-md">
            <p className="text-lg leading-relaxed text-cream/65">
              Purpose-built platforms designed to solve complex industry challenges out of the box.
            </p>
          </FadeUp>
        </div>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-3">
          {products.map((p) => {
            const Icon = p.icon;
            return (
              <Item key={p.title}>
                <Link
                  href={p.href}
                  className="card group flex h-full flex-col justify-between rounded-[24px] p-7 transition-colors duration-500 hover:border-[var(--line-strong)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--line-strong)] text-lilac">
                      <Icon className="h-5 w-5" />
                    </span>
                    <ArrowUpRight className="h-5 w-5 text-cream/30 transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cream" />
                  </div>
                  <div className="mt-12">
                    <h3 className="text-2xl font-medium tracking-tight text-cream">{p.title}</h3>
                    <p className="mt-2 text-[15px] text-cream/60">{p.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cream/70 group-hover:text-cream">
                      Explore Product <span className="h-px w-8 bg-current transition-all duration-500 group-hover:w-12" />
                    </span>
                  </div>
                </Link>
              </Item>
            );
          })}
        </Stagger>

        {/* Impact */}
        <div className="mt-28 md:mt-36">
          <FadeUp>
            <Eyebrow index="04">Proven impact</Eyebrow>
          </FadeUp>
          <Heading className="mt-6" title="We measure success by" accent="client growth." size="lg" />

          <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {impact.map((s) => {
              const Icon = s.icon;
              return (
                <Item key={s.label} className="bg-ink p-8 md:p-10">
                  <Icon className="h-6 w-6 text-lilac" />
                  <div className="mt-8 text-[clamp(3rem,6vw,5rem)] font-medium leading-none tracking-[-0.04em] text-cream">
                    <CountUp to={s.value} suffix="%" />
                  </div>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/50">{s.label}</p>
                </Item>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
