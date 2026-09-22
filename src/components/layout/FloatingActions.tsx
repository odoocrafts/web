"use client";

import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { links } from "@/lib/site";
import { WhatsAppIcon } from "@/components/layout/Nav";

/** Persistent quick-contact dock (booking + WhatsApp). */
export default function FloatingActions() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-[80] flex flex-col gap-2.5 md:bottom-6 md:right-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={links.booking}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Appointment"
        data-cursor="Book"
        className="glass flex h-12 w-12 items-center justify-center rounded-full text-lilac transition-transform duration-500 ease-out-expo hover:scale-105 hover:text-cream md:h-13 md:w-13"
      >
        <Calendar className="h-5 w-5" />
      </a>
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-cursor="Chat"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-ink shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] transition-transform duration-500 ease-out-expo hover:scale-105 md:h-13 md:w-13"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </motion.div>
  );
}
