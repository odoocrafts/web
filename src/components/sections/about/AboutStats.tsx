import CountUp from "@/components/fx/CountUp";
import { FadeUp, Rule } from "@/components/fx/Reveal";
import { Container } from "@/components/ui/Section";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Countries Served" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime Hosting" },
  { value: 2018, label: "Odoo Experts Since", raw: true },
];

export default function AboutStats() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <Rule />
        <dl className="grid grid-cols-2 gap-y-10 py-12 md:grid-cols-4 md:py-16">
          {stats.map((s, i) => (
            <FadeUp
              key={s.label}
              delay={i * 0.08}
              className="flex flex-col gap-2 md:border-l md:border-[var(--line)] md:pl-8 md:first:border-0 md:first:pl-0"
            >
              <dd className="text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-cream">
                {s.raw ? s.value : <CountUp to={s.value} decimals={s.decimals ?? 0} suffix={s.suffix ?? ""} />}
              </dd>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-cream/45">{s.label}</dt>
            </FadeUp>
          ))}
        </dl>
        <Rule />
      </Container>
    </section>
  );
}
