import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import CTA from "@/components/sections/CTA";
import { Container, PageHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";

export const metadata: Metadata = {
  title: "Case Studies | Odoocrafts",
  description:
    "Read our success stories and discover how Odoocrafts has transformed businesses with custom ERP, CRM, and automation solutions.",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <PageHeader
        index="05"
        eyebrow="Case Studies"
        title="Real problems."
        accent="Real solutions."
        description="Explore how we've helped ambitious companies scale their operations with custom-built digital ecosystems."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <FadeUp as="li" key={study.slug} delay={i * 0.08} className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  data-cursor="Read"
                  className="card group flex h-full flex-col overflow-hidden rounded-[24px] transition-colors duration-500 hover:border-[var(--line-strong)]"
                >
                  <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-[var(--line)] p-8 md:h-72">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.3),transparent_60%)]" />
                    <div className="absolute inset-0 grid-lines opacity-80" />
                    {/* eslint-disable-next-line @next/next/no-img-element -- remote logo, static export */}
                    <img
                      src={study.coverImage}
                      alt={study.client}
                      loading="lazy"
                      className="relative z-10 max-h-24 w-auto max-w-[60%] object-contain drop-shadow-2xl transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">
                      <span className="rounded-full bg-cream/10 px-3 py-1 text-cream/80">{study.client}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {study.readTime}
                      </span>
                    </div>
                    <h2 className="mt-5 text-2xl font-medium leading-tight tracking-tight text-cream md:text-3xl">{study.title}</h2>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-cream/60">{study.excerpt}</p>
                    <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-cream/80 transition-colors group-hover:text-cream">
                      Read Full Story
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </FadeUp>
            ))}

            <FadeUp as="li" delay={0.16}>
              <div className="flex h-full min-h-[320px] flex-col justify-between rounded-[24px] border border-dashed border-[var(--line-strong)] p-7">
                <p className="eyebrow">Next story</p>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-cream md:text-3xl">Yours?</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/60">
                    Every system here started with a 30-minute conversation about how a business actually runs.
                  </p>
                  <Link href="/contact" className="link-underline mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-cream">
                    Start the conversation <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeUp>
          </ul>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
