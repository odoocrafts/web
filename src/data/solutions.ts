import { Bot, FlaskConical, Leaf, GraduationCap, Stethoscope, type LucideIcon } from "lucide-react";

export interface Solution {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  /** tailwind gradient stops for the accent wash */
  wash: string;
  accent: string;
  link: string;
  sector: string;
}

export const solutions: Solution[] = [
  {
    title: "SmartHive AI CRM",
    subtitle: "Smarter Leads. Stronger Relationships. More Sales.",
    icon: Bot,
    wash: "from-violet-2/30 to-transparent",
    accent: "text-lilac",
    link: "https://smarthive.odoocrafts.com/register?template=smarthive_for_institutes",
    sector: "Institutes · Sales teams",
  },
  {
    title: "Labroute AI",
    subtitle: "From Sample to Report. All in One System.",
    icon: FlaskConical,
    wash: "from-sky-500/25 to-transparent",
    accent: "text-sky-300",
    link: "https://smarthive.odoocrafts.com/register",
    sector: "Diagnostics labs",
  },
  {
    title: "Plantora",
    subtitle: "Nurture Growth. Grow Your Business.",
    icon: Leaf,
    wash: "from-mint/25 to-transparent",
    accent: "text-mint",
    link: "https://smarthive.odoocrafts.com/register",
    sector: "Nurseries · Agri retail",
  },
  {
    title: "Vidyalink 360",
    subtitle: "Complete school / college management ERP.",
    icon: GraduationCap,
    wash: "from-amber-400/25 to-transparent",
    accent: "text-amber-300",
    link: "https://smarthive.odoocrafts.com/register",
    sector: "Schools · Colleges",
  },
  {
    title: "Clinico 360",
    subtitle: "Comprehensive Clinics operating system.",
    icon: Stethoscope,
    wash: "from-ember/25 to-transparent",
    accent: "text-ember",
    link: "https://smarthive.odoocrafts.com/register",
    sector: "Clinics · Healthcare",
  },
];
