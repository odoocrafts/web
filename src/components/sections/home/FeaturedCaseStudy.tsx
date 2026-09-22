import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";

export default function FeaturedCaseStudy() {
  const study = caseStudies[0];
  if (!study) return null;

  return (
    <section className="relative py-24 md:py-40">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow index="05">Proof of work</Eyebrow>
            </FadeUp>
            <Heading className="mt-6 max-w-[14ch]" title="Real problems." accent="Real systems." />
          </div>
          <FadeUp delay={0.2}>
            <Link href="/case-studies" className="link-underline inline-flex items-center gap-2 text-[15px] font-medium text-cream">
              All case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>

        <FadeUp className="mt-14 md:mt-20" delay={0.1}>
          <Link
            href={`/case-studies/${study.slug}`}
            data-cursor="Read"
            className="card group relative grid overflow-hidden rounded-[28px] md:grid-cols-12"
          >
            {/* Visual */}
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border-b border-[var(--line)] p-10 md:col-span-6 md:min-h-[520px] md:border-b-0 md:border-r">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_60%)]" />
              <div className="absolute inset-0 grid-lines opacity-80" />
              {/* eslint-disable-next-line @next/next/no-img-element -- remote logo, static export */}
              <img
                src={study.coverImage}
                alt={study.client}
                loading="lazy"
                className="relative z-10 max-h-28 w-auto max-w-[70%] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition-transform duration-700 ease-out-expo group-hover:scale-105 md:max-h-40"
              />
              <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                {["Next.js", "Odoo ERP", "3 mobile apps", "Real-time tracking"].map((t) => (
                  <span key={t} className="rounded-full border border-[var(--line-strong)] bg-ink/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-cream/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Copy */}
            <div className="flex flex-col justify-between p-7 md:col-span-6 md:p-12">
              <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">
                <span className="rounded-full bg-cream/10 px-3 py-1 text-cream/80">{study.client}</span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {study.readTime}
                </span>
                <span>{study.date}</span>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-2xl font-medium leading-tight tracking-tight text-cream md:text-4xl">{study.title}</h3>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-cream/60 md:text-base">{study.excerpt}</p>
              </div>
              <span className="mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-cream">
                Read Full Story
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </FadeUp>
      </Container>
    </section>
  );
}
