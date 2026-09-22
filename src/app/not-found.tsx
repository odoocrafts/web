import { Container } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[150px]" />
      <Container className="relative py-24 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-6 text-[clamp(3rem,10vw,10rem)] font-medium leading-[0.92] tracking-[-0.04em] text-cream">
          Page <span className="serif-italic text-lilac">not found.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-md text-lg text-cream/65">
          This route isn&apos;t in the system yet. Let&apos;s get you back to something that works.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="ghost">
            Contact us
          </Button>
        </div>
      </Container>
    </main>
  );
}
