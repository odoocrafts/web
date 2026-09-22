import { Layers, Bot, Code2, Combine, Cloud, Zap, GraduationCap, Factory, Truck, HardHat, HeartPulse, Wrench } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp, Item, Stagger } from "@/components/fx/Reveal";

const services = [
  { icon: Layers, title: "Odoo ERP Implementation" },
  { icon: Bot, title: "CRM Automation" },
  { icon: Code2, title: "Custom Development" },
  { icon: Combine, title: "Integrations (WhatsApp, IVRS, Biometric, APIs)" },
  { icon: Cloud, title: "Cloud Hosting & Support" },
  { icon: Zap, title: "AI & Business Automation" },
];

const industries = [
  { icon: GraduationCap, title: "Education" },
  { icon: Factory, title: "Manufacturing" },
  { icon: Truck, title: "Trading & Distribution" },
  { icon: HardHat, title: "Construction" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Wrench, title: "Services" },
];

export default function AboutServices() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <FadeUp>
                <Eyebrow index="01">What we do</Eyebrow>
              </FadeUp>
              <Heading className="mt-6" title="End-to-end," accent="engineered." size="lg" />
              <FadeUp delay={0.2}>
                <p className="mt-6 max-w-sm text-lg leading-relaxed text-cream/65">
                  Comprehensive technological solutions engineered to streamline your operations end-to-end.
                </p>
              </FadeUp>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Stagger className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Item key={s.title} className="group bg-ink p-7 transition-colors duration-500 hover:bg-surface">
                    <Icon className="h-6 w-6 text-lilac transition-transform duration-500 ease-out-expo group-hover:-translate-y-1" />
                    <h3 className="mt-8 text-lg font-medium leading-snug tracking-tight text-cream">{s.title}</h3>
                  </Item>
                );
              })}
            </Stagger>

            <div className="mt-20">
              <FadeUp>
                <Eyebrow index="02">Industries we serve</Eyebrow>
              </FadeUp>
              <Stagger className="mt-6 flex flex-wrap gap-2.5" stagger={0.05}>
                {industries.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <Item key={ind.title}>
                      <span className="inline-flex items-center gap-2.5 rounded-full border border-[var(--line-strong)] px-5 py-3 text-[15px] font-medium text-cream/85 transition-colors duration-500 hover:border-cream hover:bg-cream hover:text-ink">
                        <Icon className="h-4 w-4" />
                        {ind.title}
                      </span>
                    </Item>
                  );
                })}
              </Stagger>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
