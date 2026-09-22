import { Container, Heading } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";
import Button from "@/components/ui/Button";
import { links } from "@/lib/site";

/** Pre-footer call to action — shared by every page. */
export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-[160px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <Container className="relative text-center">
        <Heading
          as="h2"
          size="xl"
          className="mx-auto max-w-[14ch]"
          title="Ready to build systems that"
          accent="scale?"
        />
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-cream/65 md:text-xl">
            A 30-minute call with an Odoo architect. No sales deck — we look at how your business runs and tell you
            what we&apos;d build.
          </p>
        </FadeUp>
        <FadeUp delay={0.3} className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={links.booking} size="lg" icon="external">
            Schedule Consultation
          </Button>
          <Button href={links.whatsapp} size="lg" variant="ghost" icon="external">
            WhatsApp us
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}
