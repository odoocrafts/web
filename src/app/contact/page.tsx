import { Metadata } from "next";
import { MapPin, Phone, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import CTA from "@/components/sections/CTA";
import { Container, PageHeader } from "@/components/ui/Section";
import { Item, Stagger } from "@/components/fx/Reveal";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Odoocrafts. Connect with our experts via WhatsApp, email, or phone.",
};

const cardBase =
  "card group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-[24px] p-7 transition-colors duration-500 hover:border-[var(--line-strong)] md:p-9";

export default function Contact() {
  return (
    <main>
      <PageHeader
        index="09"
        eyebrow="Contact"
        title="Let's start a"
        accent="conversation."
        description="We're ready to help you modernize your operations. Reach out to us directly through any of the channels below."
      />

      <section className="pb-24 md:pb-32">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-2">
            {/* WhatsApp */}
            <Item>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" data-cursor="Chat" className={cardBase}>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-whatsapp/15 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line-strong)] text-whatsapp">
                    <MessageCircle className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-cream/30 transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cream" />
                </div>
                <div className="relative mt-10">
                  <p className="eyebrow">Fastest response for quick inquiries</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight text-cream">WhatsApp</h2>
                  <p className="mt-2 text-lg text-cream/65">{links.whatsappDisplay}</p>
                </div>
              </a>
            </Item>

            {/* Email */}
            <Item>
              <div className={cardBase}>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-violet-2/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line-strong)] text-lilac">
                    <Mail className="h-6 w-6" />
                  </span>
                </div>
                <div className="relative mt-10">
                  <p className="eyebrow">For detailed project proposals and RFPs</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight text-cream">Email Us</h2>
                  <div className="mt-2 flex flex-col gap-1 text-lg">
                    <a href={links.email} className="link-underline w-fit text-cream/65 hover:text-cream">
                      info@odoocrafts.com
                    </a>
                    <a href={links.emailHey} className="link-underline w-fit text-cream/65 hover:text-cream">
                      hey@odoocrafts.com
                    </a>
                  </div>
                </div>
              </div>
            </Item>

            {/* Phone */}
            <Item>
              <a href={links.phone} data-cursor="Call" className={cardBase}>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-sky-500/15 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line-strong)] text-sky-300">
                    <Phone className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-cream/30 transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cream" />
                </div>
                <div className="relative mt-10">
                  <p className="eyebrow">Speak directly with our technical team</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight text-cream">Call Us</h2>
                  <p className="mt-2 text-lg text-cream/65">{links.phoneDisplay}</p>
                </div>
              </a>
            </Item>

            {/* HQ */}
            <Item>
              <a href={links.maps} target="_blank" rel="noopener noreferrer" data-cursor="Map" className={cardBase}>
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-ember/15 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--line-strong)] text-ember">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-cream/30 transition-all duration-500 ease-out-expo group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cream" />
                </div>
                <div className="relative mt-10">
                  <p className="eyebrow">Headquarters · Kochi</p>
                  <h2 className="mt-3 text-3xl font-medium tracking-tight text-cream">Visit Us</h2>
                  <address className="mt-2 text-base not-italic leading-relaxed text-cream/65">
                    Building 60/44, 3rd Floor, J.C.Chambers
                    <br />
                    V 467, Panampilly Nagar
                    <br />
                    Ernakulam, Kerala 682036 (IN)
                  </address>
                </div>
              </a>
            </Item>
          </Stagger>
        </Container>
      </section>

      <CTA />
    </main>
  );
}
