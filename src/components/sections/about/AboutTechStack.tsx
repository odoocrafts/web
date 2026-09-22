import Marquee from "@/components/fx/Marquee";
import { FadeUp } from "@/components/fx/Reveal";
import { Container, Eyebrow } from "@/components/ui/Section";

const techStack = ["Odoo", "AWS", "Docker", "PostgreSQL", "Python", "Flutter", "WhatsApp API"];

export default function AboutTechStack() {
  return (
    <section className="border-y border-[var(--line)] py-16 md:py-20">
      <Container>
        <FadeUp className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <Eyebrow index="05">Our tech stack</Eyebrow>
          <p className="max-w-md text-[15px] text-cream/60">We leverage modern, scalable, and battle-tested technologies.</p>
        </FadeUp>
      </Container>
      <div className="mt-10">
        <Marquee>
          {techStack.map((t) => (
            <span
              key={t}
              className="mr-6 inline-flex h-16 items-center rounded-full border border-[var(--line-strong)] px-8 text-2xl font-medium tracking-tight text-cream/80 md:h-20 md:px-10 md:text-4xl"
            >
              {t}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
