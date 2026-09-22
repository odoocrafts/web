import Marquee from "@/components/fx/Marquee";

const items = [
  "Odoo ERP Implementation",
  "CRM Automation",
  "Custom Development",
  "WhatsApp · IVRS · Biometric · API Integrations",
  "Cloud Hosting & Support",
  "AI & Business Automation",
  "Odoo Apps on the App Store",
];

export default function Ticker() {
  return (
    <div className="border-y border-[var(--line)] py-5 md:py-6">
      <Marquee slow>
        {items.map((t) => (
          <span key={t} className="flex items-center gap-8 pr-8 text-[15px] font-medium tracking-tight text-cream/70 md:text-lg">
            {t}
            <span className="block h-1.5 w-1.5 rotate-45 bg-lilac/70" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
