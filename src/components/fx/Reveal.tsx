"use client";

import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* Word-by-word masked reveal for headlines                            */
/* ------------------------------------------------------------------ */

type WordsProps = {
  text: string;
  className?: string;
  /** class applied to each word — useful for the serif italic accent */
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  /** when false, plays on scroll into view; when true/false explicitly, controlled */
  animate?: boolean;
  once?: boolean;
};

export function Words({
  text,
  className = "",
  wordClassName = "",
  delay = 0,
  stagger = 0.05,
  duration = 0.9,
  animate,
  once = true,
}: WordsProps) {
  const words = text.split(" ");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "115%", rotate: 3 },
    show: { y: "0%", rotate: 0, transition: { duration, ease: EASE } },
  };

  const controlled = typeof animate === "boolean";

  return (
    <motion.span
      className={`inline ${className}`}
      variants={container}
      initial="hidden"
      animate={controlled ? (animate ? "show" : "hidden") : undefined}
      whileInView={controlled ? undefined : "show"}
      viewport={controlled ? undefined : { once, margin: "-10% 0px" }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block origin-bottom-left will-change-transform ${wordClassName}`}
            variants={word}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/* ------------------------------------------------------------------ */
/* Generic fade-up on scroll                                            */
/* ------------------------------------------------------------------ */

export function FadeUp({
  children,
  className = "",
  delay = 0,
  y = 28,
  duration = 0.9,
  once = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "p" | "article";
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Hairline that draws itself in                                         */
/* ------------------------------------------------------------------ */

export function Rule({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`h-px w-full origin-left bg-[var(--line-strong)] ${className}`}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Stagger group                                                          */
/* ------------------------------------------------------------------ */

export function Stagger({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function Item({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
