"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo_dark.png";

export default function AnimatedLogo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex-shrink-0">
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="pointer-events-auto"
          >
            <Link href="/" className="flex items-center gap-3">
              <Image src={logoImg} alt="Odoocrafts Logo" width={32} height={32} className="w-8 h-8 object-contain" priority />
              <span className="font-bold text-xl tracking-tight">Odoocrafts</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
