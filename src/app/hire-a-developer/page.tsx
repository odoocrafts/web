import { Metadata } from "next";
import { Mail, Code2, Rocket, Clock } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { Container, PageHeader } from "@/components/ui/Section";
import { Item, Stagger } from "@/components/fx/Reveal";
import Button from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/layout/Nav";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hire a Developer",
  description: "Hire dedicated Odoo developers and technical experts from Odoocrafts for your next big project.",
};

const perks = [
  {
    icon: Rocket,
    title: "Fast Onboarding",
    body: "Get an expert developer integrated into your project within days, not weeks.",
    stat: "< 7 days",
  },
  {
    icon: Code2,
    title: "Top Talent",
    body: "Our developers have years of deep technical expertise in Odoo Python and JS frameworks.",
    stat: "Odoo 12 → 19",
  },
  {
    icon: Clock,
    title: "Flexible Scaling",
    body: "Scale your development team up or down based on your immediate project needs.",
    stat: "Monthly terms",
  },
];

export default function HireDeveloper() {
  return (
    <main>
      <PageHeader
        index="06"
        eyebrow="Dedicated Odoo experts"
        title="Hire an"
        accent="Odoo developer."
        description="Need dedicated talent for your project? Hire our experienced Odoo developers to work directly with your team and accelerate your implementation."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={links.whatsappHire} variant="whatsapp" icon={<WhatsAppIcon className="h-4 w-4" />}>
            Chat on WhatsApp
          </Button>
          <Button href={links.emailHire} variant="ghost" icon={<Mail className="h-4 w-4" />}>
            Email Us
          </Button>
        </div>
      </PageHeader>

      <section className="pb-24 md:pb-32">
        <Container>
          <Stagger className="grid gap-px overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <Item key={p.title} className="group bg-ink p-8 transition-colors duration-500 hover:bg-surface md:p-10">
                  <div className="flex items-start justify-between">
                    <Icon className="h-6 w-6 text-lilac" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/45">{p.stat}</span>
                  </div>
                  <h3 className="mt-14 text-2xl font-medium tracking-tight text-cream">{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-cream/60">{p.body}</p>
                </Item>
              );
            })}
          </Stagger>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
