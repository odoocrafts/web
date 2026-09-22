import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import CTA from "@/components/sections/CTA";
import { Container } from "@/components/ui/Section";
import { FadeUp, Words } from "@/components/fx/Reveal";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: "Case Study Not Found" };
  return { title: `${study.client} Case Study | Odoocrafts`, description: study.excerpt };
}

/* Minimal markdown renderer for our authored content (h2, h3, bullets, bold, paragraphs). */
function inline(text: string, keyPrefix: string) {
  return text.split(/\*\*(.*?)\*\*/g).map((part, idx) =>
    idx % 2 === 1 ? (
      <strong key={`${keyPrefix}-${idx}`} className="font-medium text-cream">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const out: React.ReactNode[] = [];
  let list: React.ReactNode[] = [];
  let h2Count = 0;

  const flush = (key: string) => {
    if (!list.length) return;
    out.push(
      <ul key={key} className="my-8 flex flex-col gap-3">
        {list}
      </ul>
    );
    list = [];
  };

  lines.forEach((raw, i) => {
    const line = raw.trim();
    if (!line) return;

    if (line.startsWith("### ")) {
      flush(`ul-${i}`);
      out.push(
        <h3 key={i} className="mt-12 mb-4 text-2xl font-medium tracking-tight text-cream md:text-3xl">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flush(`ul-${i}`);
      h2Count += 1;
      out.push(
        <div key={i} className="mt-20 mb-8 flex items-baseline gap-5 border-t border-[var(--line)] pt-10 first:mt-0 first:border-0 first:pt-0">
          <span className="serif-italic text-3xl text-lilac/70">{String(h2Count).padStart(2, "0")}</span>
          <h2 className="text-3xl font-medium tracking-tight text-cream md:text-5xl">{line.replace("## ", "")}</h2>
        </div>
      );
    } else if (line.startsWith("* ") || line.startsWith("- ")) {
      list.push(
        <li key={i} className="flex gap-4 text-[17px] leading-relaxed text-cream/70">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-lilac" />
          <span>{inline(line.substring(2), `li-${i}`)}</span>
        </li>
      );
    } else {
      flush(`ul-${i}`);
      out.push(
        <p key={i} className="mb-6 text-[17px] leading-relaxed text-cream/70 md:text-lg">
          {inline(line, `p-${i}`)}
        </p>
      );
    }
  });
  flush("ul-final");
  return out;
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <main>
      <article className="relative overflow-hidden pt-32 md:pt-44">
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[720px] rounded-full bg-violet/20 blur-[140px]" />
        <Container className="relative">
          <FadeUp>
            <Link
              href="/case-studies"
              className="link-underline inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/55 hover:text-cream"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Back to Case Studies
            </Link>
          </FadeUp>

          <header className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <FadeUp delay={0.05}>
                <div className="flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">
                  <span className="rounded-full bg-cream/10 px-3 py-1 text-cream/80">{study.client}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {study.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {study.readTime}
                  </span>
                </div>
              </FadeUp>
              <h1 className="mt-6 text-[clamp(2.25rem,5.5vw,5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-cream">
                <Words text={study.title} stagger={0.03} />
              </h1>
            </div>
            <FadeUp delay={0.3} className="lg:col-span-4 lg:pt-16">
              <p className="text-lg leading-relaxed text-cream/65">{study.excerpt}</p>
            </FadeUp>
          </header>

          <FadeUp delay={0.15} className="mt-14 md:mt-20">
            <div className="card relative flex h-72 items-center justify-center overflow-hidden rounded-[28px] md:h-[460px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.35),transparent_60%)]" />
              <div className="absolute inset-0 grid-lines opacity-80" />
              {/* eslint-disable-next-line @next/next/no-img-element -- remote logo, static export */}
              <img
                src={study.coverImage}
                alt={study.client}
                className="relative z-10 max-h-32 w-auto max-w-[60%] object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)] md:max-h-48"
              />
            </div>
          </FadeUp>

          <div className="mx-auto mt-20 max-w-3xl pb-24 md:mt-28 md:pb-32">{renderMarkdown(study.content)}</div>
        </Container>
      </article>

      <CTA />
    </main>
  );
}
