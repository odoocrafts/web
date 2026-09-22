"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import logo from "../../../public/logo_dark.png";
import { navItems, links } from "@/lib/site";
import { cn } from "@/lib/utils";

const EASE = [0.76, 0, 0.24, 1] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Close the overlay whenever the route changes (state adjusted during render, per React guidance)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled(window.scrollY > 80));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));
  const folded = scrolled && !hovered;

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-[100]">
        <div className="flex items-center justify-between px-5 pt-5 md:px-8 md:pt-6">
          {/* Logo */}
          <Link href="/" className="pointer-events-auto flex items-center gap-3" aria-label="Odoocrafts home">
            <Image src={logo} alt="" width={36} height={36} priority className="h-9 w-9 rounded-xl" />
            <motion.span
              className="hidden overflow-hidden text-[17px] font-semibold tracking-tight sm:block"
              animate={{ width: scrolled && !open ? 0 : "auto", opacity: scrolled && !open ? 0 : 1 }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              Odoocrafts
            </motion.span>
          </Link>

          {/* Desktop pill — folds into a tile on scroll, unfolds on hover */}
          <motion.nav
            aria-label="Primary"
            className="pointer-events-auto glass relative hidden items-center overflow-hidden lg:flex"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
              setHovered(false);
              setHoverIndex(null);
            }}
            initial={false}
            animate={{
              width: folded ? 48 : "auto",
              height: 48,
              borderRadius: folded ? 14 : 999,
              paddingLeft: folded ? 0 : 6,
              paddingRight: folded ? 0 : 6,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <AnimatePresence>
              {folded && (
                <motion.div
                  key="mark"
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="grid h-4 w-4 grid-cols-2 gap-[3px]">
                    {[0, 1, 2, 3].map((i) => (
                      <span key={i} className="block rounded-[2px] bg-cream" />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <ul className="flex w-max items-center" onMouseLeave={() => setHoverIndex(null)}>
              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.li
                    key={item.href}
                    animate={{ opacity: folded ? 0 : 1, filter: folded ? "blur(4px)" : "blur(0px)" }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                    onMouseEnter={() => setHoverIndex(i)}
                  >
                    <Link
                      href={item.href}
                      tabIndex={folded ? -1 : 0}
                      className={cn(
                        "relative block rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors",
                        active ? "text-ink" : "text-cream/75 hover:text-cream",
                        folded && "pointer-events-none"
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-cream"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      {!active && hoverIndex === i && (
                        <motion.span
                          layoutId="nav-hover"
                          className="absolute inset-0 rounded-full bg-cream/10"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.nav>

          {/* Right side */}
          <div className="pointer-events-auto flex items-center gap-3">
            <a
              href={links.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden h-12 items-center gap-2 rounded-full bg-cream px-5 text-[13px] font-semibold text-ink transition-colors hover:bg-white lg:inline-flex"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="glass relative flex h-12 w-12 items-center justify-center rounded-full lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <motion.span
                  className="absolute left-0 top-0 block h-px w-full bg-cream"
                  animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
                <motion.span
                  className="absolute left-0 top-[6px] block h-px w-full bg-cream"
                  animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.25 }}
                />
                <motion.span
                  className="absolute left-0 top-3 block h-px w-full bg-cream"
                  animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile / tablet full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[90] flex flex-col bg-ink lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0 round 0 0 40px 40px)" }}
            animate={{ clipPath: "inset(0 0 0% 0 round 0 0 0px 0px)" }}
            exit={{ clipPath: "inset(0 0 100% 0 round 0 0 40px 40px)", transition: { duration: 0.6, ease: EASE } }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <div className="absolute inset-0 grid-lines opacity-60" />
            <div className="relative flex h-full flex-col px-6 pb-8 pt-28 sm:px-10">
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto no-scrollbar">
                <ul className="flex flex-col">
                  {navItems.map((item, i) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.href} className="overflow-hidden border-b border-[var(--line)]">
                        <motion.div
                          initial={{ y: "110%", opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.15 + i * 0.045, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Link
                            href={item.href}
                            className="flex items-baseline justify-between py-3.5 sm:py-4"
                          >
                            <span
                              className={cn(
                                "text-[clamp(2rem,8vw,3rem)] font-medium leading-none tracking-tight",
                                active ? "text-cream" : "text-cream/70"
                              )}
                            >
                              {item.name}
                            </span>
                            <span className="font-mono text-[11px] text-cream/40">0{i + 1}</span>
                          </Link>
                        </motion.div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <motion.div
                className="mt-6 grid gap-3 sm:grid-cols-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.6 }}
              >
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-13 items-center justify-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-semibold text-ink"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat with Sales
                </a>
                <a
                  href={links.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-13 items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] px-5 text-sm font-semibold text-cream"
                >
                  Book a call <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
