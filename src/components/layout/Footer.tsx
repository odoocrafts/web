import Link from "next/link";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { links } from "@/lib/site";
import LocalTime from "@/components/layout/LocalTime";

const useful = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Services", href: "/our-services" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Contact us", href: "/contact" },
];

const explore = [
  { name: "Solutions", href: "/solutions" },
  { name: "Odoo Apps", href: "/apps" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Hire a Developer", href: "/hire-a-developer" },
  { name: "Jobs", href: "/jobs" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--line)] bg-ink">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-violet/25 blur-[140px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">About us</p>
            <p className="max-w-sm text-[15px] leading-relaxed text-cream/65">
              Odoocrafts is dedicated to delivering customized, efficient, and scalable Odoo solutions that empower
              businesses to optimize their operations and accelerate growth. Driven by a passion for Odoo, our team
              brings over 10 years of global experience in ERP implementation. We focus on quality and customer
              satisfaction, ensuring seamless integration and ongoing support tailored to your needs.
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/45">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-mint animate-pulse-dot" />
              Kochi, India · <LocalTime />
            </div>
          </div>

          {/* Useful links */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Useful Links</p>
            <ul className="flex flex-col gap-3">
              {useful.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-[15px] text-cream/75 hover:text-cream">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="flex flex-col gap-3">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link-underline text-[15px] text-cream/75 hover:text-cream">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Connect with us</p>
            <ul className="flex flex-col gap-3 text-[15px]">
              <li>
                <Link href="/contact" className="link-underline inline-flex items-center gap-3 text-cream/75 hover:text-cream">
                  <MessageSquare className="h-4 w-4 text-lilac" /> Contact us
                </Link>
              </li>
              <li>
                <a href={links.email} className="link-underline inline-flex items-center gap-3 text-cream/75 hover:text-cream">
                  <Mail className="h-4 w-4 text-lilac" /> info@odoocrafts.com
                </a>
              </li>
              <li>
                <a href={links.phone} className="link-underline inline-flex items-center gap-3 text-cream/75 hover:text-cream">
                  <Phone className="h-4 w-4 text-lilac" /> {links.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <Social href={links.instagram} label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Social>
              <Social href={links.github} label="GitHub">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
                  <path d="M9 18c-4.5 1.5-5-2.5-7-3" />
                </svg>
              </Social>
              <Social href={links.linkedin} label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Social>
            </div>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-16 select-none overflow-hidden md:mt-24" aria-hidden>
          <p className="translate-y-[0.18em] text-center text-[clamp(4rem,17.5vw,17rem)] font-semibold leading-none tracking-[-0.05em] text-cream/[0.06]">
            Odoocrafts
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[var(--line)] py-6 text-[12px] text-cream/45 md:flex-row md:items-center">
          <span>Copyright © Odoocrafts Innovations</span>
          <span className="font-mono uppercase tracking-[0.18em]">Crafted systems · Odoo · ERP · CRM · AI</span>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-strong)] text-cream/80 transition-colors hover:border-cream hover:bg-cream hover:text-ink"
    >
      {children}
    </a>
  );
}
