"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/lib/useMediaQuery";

/**
 * Custom cursor — desktop pointer devices only.
 * Driven by motion values (no React re-render per mousemove).
 * Elements can opt into a label with data-cursor="View".
 */
export default function Cursor() {
  const enabled = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [label, setLabel] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const t = e.target as HTMLElement | null;
      const labelled = t?.closest<HTMLElement>("[data-cursor]");
      const interactive = t?.closest("a, button, [role='button'], input, textarea, label, select");
      setLabel(labelled?.dataset.cursor ?? null);
      setHovering(!!interactive || !!labelled);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    document.documentElement.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.removeEventListener("mouseenter", enter);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const size = label ? 84 : hovering ? 48 : 12;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        backgroundColor: label ? "rgba(244,241,234,1)" : hovering ? "rgba(244,241,234,0.18)" : "rgba(244,241,234,1)",
        border: hovering && !label ? "1px solid rgba(244,241,234,0.9)" : "0px solid rgba(244,241,234,0)",
      }}
      transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.5 }}
    >
      {label && (
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink">{label}</span>
      )}
    </motion.div>
  );
}
