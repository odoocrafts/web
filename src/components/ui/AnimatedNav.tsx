"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/our-services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Hire a Developer", href: "/hire-a-developer" },
  { name: "Jobs", href: "/jobs" },
  { name: "About Us", href: "/about" },
  { name: "Contact us", href: "/contact" }
];

export default function AnimatedNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathname = usePathname();

  return (
    <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
      <div className="flex items-center gap-1">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              href={item.href}
              {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                isActive ? "text-white" : "text-white/80 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-purple-600 rounded-full z-0"
                  initial={false}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              <span className="relative z-10">{item.name}</span>
              
              <AnimatePresence>
                {hoveredIndex === index && !isActive && (
                  <motion.div
                    layoutId="hover-pill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                  />
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
