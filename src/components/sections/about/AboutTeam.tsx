import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp, Item, Stagger } from "@/components/fx/Reveal";

import anasImg from "../../../../public/team/anas.webp";
import rizwanImg from "../../../../public/team/rizwan.webp";
import murshidImg from "../../../../public/team/murshid.webp";
import fidhaImg from "../../../../public/team/fidha.webp";

const team = [
  { name: "Anas", role: "CEO", image: anasImg },
  { name: "Rizwan", role: "CTO", image: rizwanImg },
  { name: "Murshid", role: "COO", image: murshidImg },
  { name: "Fidha", role: "CMO", image: fidhaImg },
];

export default function AboutTeam() {
  return (
    <section id="team" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[150px]" />
      <Container className="relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <FadeUp>
              <Eyebrow index="06">Leadership</Eyebrow>
            </FadeUp>
            <Heading className="mt-6" title="The people" accent="behind the systems." size="lg" />
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/65">
                The visionaries driving Odoocrafts forward, ensuring engineering excellence and client success.
              </p>
            </FadeUp>
          </div>
          <FadeUp delay={0.25}>
            <Link
              href="/team"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[var(--line-strong)] px-6 text-[15px] font-medium text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              View Full Team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </FadeUp>
        </div>

        <Stagger className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {team.map((m) => (
            <Item key={m.name} className="group">
              <div className="card relative overflow-hidden rounded-[24px]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale transition-all duration-700 ease-out-expo group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-ink to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-cream">{m.name}</h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/55">{m.role}</p>
                  </div>
                  <span className="h-1.5 w-1.5 rounded-full bg-lilac opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
