"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Magnetic from "@/components/fx/Magnetic";

type Variant = "primary" | "ghost" | "violet" | "whatsapp";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-[transform,background-color,border-color,color] duration-500 ease-out-expo select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: "bg-cream text-ink hover:bg-white",
  ghost: "border border-[var(--line-strong)] text-cream hover:border-cream/50 hover:bg-cream/[0.04]",
  violet: "bg-violet-2 text-white hover:bg-violet",
  whatsapp: "bg-whatsapp text-ink hover:brightness-110",
};

const sizes = {
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
  sm: "h-10 px-4 text-sm",
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "arrow",
  className = "",
  magnetic = true,
  onClick,
  type,
  fullWidth = false,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: keyof typeof sizes;
  icon?: "arrow" | "external" | "none" | ReactNode;
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
}) {
  const Icon =
    icon === "arrow" ? (
      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1" />
    ) : icon === "external" ? (
      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    ) : icon === "none" ? null : (
      icon
    );

  const cls = cn(base, variants[variant], sizes[size], fullWidth && "w-full", className);

  let el: ReactNode;
  if (!href) {
    el = (
      <button type={type ?? "button"} onClick={onClick} className={cls}>
        <span>{children}</span>
        {Icon}
      </button>
    );
  } else if (isExternal(href)) {
    el = (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cls}>
        <span>{children}</span>
        {Icon}
      </a>
    );
  } else {
    el = (
      <Link href={href} className={cls}>
        <span>{children}</span>
        {Icon}
      </Link>
    );
  }

  if (!magnetic || fullWidth) return el;
  return <Magnetic strength={0.25}>{el}</Magnetic>;
}
