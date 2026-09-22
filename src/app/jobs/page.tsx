import { Metadata } from "next";
import { Briefcase, MapPin, Clock, ArrowUpRight, Mail } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { Container, Eyebrow, PageHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";
import Button from "@/components/ui/Button";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers & Jobs",
  description: "Join the Odoocrafts team. Explore our open positions and career opportunities.",
};

export default function Jobs() {
  return (
    <main>
      <PageHeader
        index="07"
        eyebrow="Careers"
        title="Join"
        accent="Odoocrafts."
        description="Help us build intelligent, scalable systems for businesses worldwide. We're always looking for exceptional talent to join our remote-friendly team."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <FadeUp className="flex items-center justify-between border-b border-[var(--line)] pb-5">
            <Eyebrow>Open positions</Eyebrow>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">01 role</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <article className="card group relative mt-6 overflow-hidden rounded-[24px] p-7 transition-colors duration-500 hover:border-[var(--line-strong)] md:p-10">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-ember/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="relative grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <h2 className="text-3xl font-medium tracking-tight text-cream md:text-5xl">Odoo Developer</h2>
                  <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cream/55">
                    <li className="inline-flex items-center gap-2">
                      <Briefcase className="h-3.5 w-3.5" /> Full-time
                    </li>
                    <li className="inline-flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5" /> 2+ Years Experience
                    </li>
                    <li className="inline-flex items-center gap-2">
                      <MapPin className="h-3.5 w-3.5" /> Remote / India
                    </li>
                  </ul>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/65 md:text-lg">
                    We are looking for an experienced Odoo Developer to join our core team. You will be responsible for
                    developing custom Odoo modules, integrating third-party applications, and optimizing existing
                    architectures for our global clients.
                  </p>
                </div>
                <div className="flex items-start lg:col-span-4 lg:justify-end">
                  <Button href={links.emailApply} icon={<Mail className="h-4 w-4" />}>
                    Apply Now
                  </Button>
                </div>
              </div>
            </article>
          </FadeUp>

          <FadeUp delay={0.15} className="mt-16 md:mt-24">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[24px] border border-dashed border-[var(--line-strong)] p-7 md:flex-row md:items-center md:p-10">
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-cream md:text-3xl">Don&apos;t see a perfect fit?</h3>
                <p className="mt-2 text-[15px] text-cream/60">
                  We&apos;re always interested in meeting great people. Send your resume to us anyway.
                </p>
              </div>
              <a href={links.emailHr} className="link-underline inline-flex items-center gap-2 text-lg font-medium text-ember">
                hr@odoocrafts.com <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </FadeUp>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
