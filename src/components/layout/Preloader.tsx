"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/logo_dark.png";
import { markIntroDone, useIntroDone } from "@/lib/intro";

const KEY = "oc:intro";

/**
 * Short intro curtain — plays once per session, ~1s, then lifts.
 * Server-renders visible so returning visitors never see a content flash.
 */
export default function Preloader() {
  const done = useIntroDone();

  useEffect(() => {
    const seen = sessionStorage.getItem(KEY);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || reduce) {
      markIntroDone();
      return;
    }
    sessionStorage.setItem(KEY, "1");
    const t = setTimeout(markIntroDone, 1150);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div className="flex flex-col items-center gap-5" exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}>
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image src={logo} alt="" width={56} height={56} priority className="h-14 w-14 rounded-2xl" />
            </motion.div>
            <div className="overflow-hidden">
              <motion.p
                className="font-mono text-[11px] uppercase tracking-[0.3em] text-cream/60"
                initial={{ y: "120%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Odoocrafts
              </motion.p>
            </div>
            <motion.div className="h-px w-24 overflow-hidden bg-cream/10">
              <motion.div
                className="h-full w-full origin-left bg-cream"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
