"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FileText, Bot, MapPin, ToggleRight, RefreshCw, ShieldCheck, Printer } from "lucide-react";
import { Container } from "@/components/ui/Section";
import { links } from "@/lib/site";

const apps = [
  {
    title: "PDF Preview",
    description: "Seamlessly preview PDF documents directly within your Odoo interface without downloading.",
    icon: FileText,
    url: "https://apps.odoo.com/apps/modules/19.0/pdf_preview_oc",
    accent: "text-rose-300",
  },
  {
    title: "Inventory Copilot",
    description: "AI-powered inventory management assistant to optimize stock levels and automate forecasting.",
    icon: Bot,
    url: "https://apps.odoo.com/apps/modules/19.0/inventory_copilot",
    accent: "text-sky-300",
  },
  {
    title: "POS Location Stock",
    description: "View real-time stock availability across different locations directly from your Point of Sale.",
    icon: MapPin,
    url: "https://apps.odoo.com/apps/modules/19.0/pos_location_stock",
    accent: "text-mint",
  },
  {
    title: "POS Tax Toggle",
    description: "Instantly toggle taxes on and off during POS checkout for flexible B2B and B2C transactions.",
    icon: ToggleRight,
    url: "https://apps.odoo.com/apps/modules/19.0/pos_tax_toggle",
    accent: "text-amber-300",
  },
  {
    title: "SO Stock Balance Corrector",
    description: "Automatically correct and reconcile stock imbalances directly from Sales Orders.",
    icon: RefreshCw,
    url: "https://apps.odoo.com/apps/modules/19.0/so_stock_balance_corrector",
    accent: "text-lilac",
  },
  {
    title: "Website Access Control Pro",
    description: "Advanced access control to restrict website pages, products, and categories to specific users.",
    icon: ShieldCheck,
    url: "https://apps.odoo.com/apps/modules/19.0/website_access_control_pro",
    accent: "text-indigo-300",
  },
  {
    title: "Zebra Direct Print",
    description: "Print labels and barcodes directly to Zebra printers from Odoo without middleware.",
    icon: Printer,
    url: "https://apps.odoo.com/apps/modules/19.0/zebra_direct_print",
    accent: "text-ember",
  },
];

export default function AppsShowcase() {
  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <ul className="border-t border-[var(--line)]">
          {apps.map((app, i) => {
            const Icon = app.icon;
            return (
              <motion.li
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5% 0px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (i % 4) * 0.05 }}
                className="group border-b border-[var(--line)]"
              >
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Open"
                  className="relative grid items-center gap-4 py-6 transition-colors md:grid-cols-12 md:gap-6 md:py-8"
                >
                  <div className="pointer-events-none absolute -inset-x-4 inset-y-0 rounded-2xl bg-cream/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100 md:-inset-x-6" />
                  <div className="relative flex items-center gap-4 md:col-span-5">
                    <span className="font-mono text-xs text-cream/35">{String(i + 1).padStart(2, "0")}</span>
                    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-ink/60 ${app.accent}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-xl font-medium tracking-tight text-cream md:text-2xl">{app.title}</h3>
                  </div>
                  <p className="relative text-[15px] leading-relaxed text-cream/60 md:col-span-5 md:pl-0">{app.description}</p>
                  <div className="relative flex items-center justify-between md:col-span-2 md:justify-end">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-cream/45 md:hidden">Odoo 19</span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-cream/70 transition-colors group-hover:text-cream">
                      App Store
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </a>
              </motion.li>
            );
          })}
        </ul>

        <motion.a
          href={links.odooAppsAll}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="group mt-8 flex flex-col items-start justify-between gap-6 rounded-[24px] border border-dashed border-[var(--line-strong)] p-7 transition-colors hover:border-lilac/50 hover:bg-violet-2/5 md:flex-row md:items-center md:p-10"
        >
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-cream md:text-3xl">View All Apps</h3>
            <p className="mt-2 text-[15px] text-cream/60">See our complete portfolio on the official Odoo App Store.</p>
          </div>
          <span className="inline-flex h-12 items-center gap-2 rounded-full bg-cream px-6 text-[15px] font-medium text-ink">
            Open App Store <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </motion.a>
      </Container>
    </section>
  );
}
