"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Bot, MapPin, ToggleRight, RefreshCw, ShieldCheck, Printer } from "lucide-react";

const apps = [
  {
    title: "PDF Preview",
    description: "Seamlessly preview PDF documents directly within your Odoo interface without downloading.",
    icon: FileText,
    url: "https://apps.odoo.com/apps/modules/19.0/pdf_preview_oc",
    color: "from-red-500/20 to-red-500/5",
    iconColor: "text-red-400"
  },
  {
    title: "Inventory Copilot",
    description: "AI-powered inventory management assistant to optimize stock levels and automate forecasting.",
    icon: Bot,
    url: "https://apps.odoo.com/apps/modules/19.0/inventory_copilot",
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-400"
  },
  {
    title: "POS Location Stock",
    description: "View real-time stock availability across different locations directly from your Point of Sale.",
    icon: MapPin,
    url: "https://apps.odoo.com/apps/modules/19.0/pos_location_stock",
    color: "from-green-500/20 to-green-500/5",
    iconColor: "text-green-400"
  },
  {
    title: "POS Tax Toggle",
    description: "Instantly toggle taxes on and off during POS checkout for flexible B2B and B2C transactions.",
    icon: ToggleRight,
    url: "https://apps.odoo.com/apps/modules/19.0/pos_tax_toggle",
    color: "from-yellow-500/20 to-yellow-500/5",
    iconColor: "text-yellow-400"
  },
  {
    title: "SO Stock Balance Corrector",
    description: "Automatically correct and reconcile stock imbalances directly from Sales Orders.",
    icon: RefreshCw,
    url: "https://apps.odoo.com/apps/modules/19.0/so_stock_balance_corrector",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-400"
  },
  {
    title: "Website Access Control Pro",
    description: "Advanced access control to restrict website pages, products, and categories to specific users.",
    icon: ShieldCheck,
    url: "https://apps.odoo.com/apps/modules/19.0/website_access_control_pro",
    color: "from-indigo-500/20 to-indigo-500/5",
    iconColor: "text-indigo-400"
  },
  {
    title: "Zebra Direct Print",
    description: "Print labels and barcodes directly to Zebra printers from Odoo without middleware.",
    icon: Printer,
    url: "https://apps.odoo.com/apps/modules/19.0/zebra_direct_print",
    color: "from-pink-500/20 to-pink-500/5",
    iconColor: "text-pink-400"
  }
];

export default function AppsShowcase() {
  return (
    <section className="relative py-24 bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, index) => (
            <motion.a
              key={index}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all overflow-hidden flex flex-col h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${app.iconColor}`}>
                    <app.icon className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-white/70 transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {app.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {app.description}
                </p>

                <div className="mt-auto flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                  View on App Store
                </div>
              </div>
            </motion.a>
          ))}
          
          <motion.a
            href="https://apps.odoo.com/apps/modules/browse?author=Odoocrafts%20Innovations"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: apps.length * 0.1 }}
            viewport={{ once: true }}
            className="group relative p-8 rounded-2xl border border-dashed border-white/20 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all flex flex-col items-center justify-center text-center h-full min-h-[250px]"
          >
            <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform">
              <ExternalLink className="w-8 h-8 text-white/50 group-hover:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">View All Apps</h3>
            <p className="text-white/50 text-sm">See our complete portfolio on the official Odoo App Store.</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
