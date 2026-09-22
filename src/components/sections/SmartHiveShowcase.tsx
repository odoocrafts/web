"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "framer-motion";
import { Bot, CheckCircle2, MessageCircle, Sparkles, TrendingUp } from "lucide-react";
import CountUp from "@/components/fx/CountUp";
import Button from "@/components/ui/Button";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";
import { useMediaQuery } from "@/lib/useMediaQuery";

const SMARTHIVE_URL = "https://smarthive.odoocrafts.com/register?template=smarthive_for_institutes";

const stages = ["New", "Contacted", "Qualified", "Won"];
const leads = [
  { name: "Aisha R.", src: "Instagram", stage: 0 },
  { name: "Nikhil M.", src: "Website", stage: 1 },
  { name: "St. Mary's HS", src: "Referral", stage: 1 },
  { name: "Global Academy", src: "WhatsApp", stage: 2 },
  { name: "Farhan K.", src: "Walk-in", stage: 3 },
];

const logLines = [
  { icon: MessageCircle, text: "WhatsApp follow-up sent to Aisha R.", tone: "text-whatsapp" },
  { icon: Sparkles, text: "AI scored Nikhil M. — 87% intent", tone: "text-lilac" },
  { icon: CheckCircle2, text: "Counsellor call booked · Tue 11:30", tone: "text-mint" },
  { icon: TrendingUp, text: "Admissions forecast updated (+4.2%)", tone: "text-ember" },
  { icon: Bot, text: "Invoice draft created for Farhan K.", tone: "text-cream/70" },
];

export default function SmartHiveShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { margin: "-20% 0px" });
  const [tick, setTick] = useState(0);

  // Only animate while visible
  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setTick((t) => t + 1), 2400);
    return () => clearInterval(id);
  }, [inView]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -6]);
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Phones only get room for the first two pipeline columns
  const wide = useMediaQuery("(min-width: 768px)");
  const visibleStages = wide ? stages : stages.slice(0, 2);

  // Move one lead forward per tick, cycling
  const liveLeads = leads
    .map((l, i) => ({
      ...l,
      stage: (l.stage + Math.floor((tick + i) / leads.length)) % stages.length,
    }))
    .filter((l) => l.stage < visibleStages.length);
  const visibleLog = [0, 1, 2].map((k) => logLines[(tick + k) % logLines.length]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-40">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/20 blur-[160px]" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <Eyebrow index="03" className="justify-center" tone="violet">
              Flagship product
            </Eyebrow>
          </FadeUp>
          <Heading className="mt-6" title="Meet" accent="SmartHive." />
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/65 md:text-xl">
              The ultimate system that brings your ERP, CRM, and automated workflows into one unified, intelligent
              interface. AI-scored leads, WhatsApp automation and admissions forecasting — live.
            </p>
          </FadeUp>
        </div>

        {/* Dashboard mock */}
        <motion.div
          style={{ rotateX, y, transformPerspective: 1400 }}
          className="mx-auto mt-16 w-full max-w-5xl will-change-transform md:mt-20"
        >
          <div className="card overflow-hidden rounded-[22px] shadow-[0_40px_120px_-40px_rgba(103,57,166,0.6)] md:rounded-[28px]">
            {/* Window bar */}
            <div className="flex items-center justify-between border-b border-[var(--line)] px-4 py-3 md:px-6">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
                </div>
                <span className="ml-2 hidden font-mono text-[11px] text-cream/40 sm:block">smarthive.odoocrafts.com</span>
              </div>
              <div className="flex items-center gap-1 rounded-full border border-[var(--line)] p-1">
                {["Leads", "Pipeline", "Automations"].map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                      i === 1 ? "bg-cream text-ink" : "text-cream/55"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 p-4 md:grid-cols-12 md:gap-5 md:p-6">
              {/* KPIs */}
              <div className="grid grid-cols-3 gap-3 md:col-span-12 md:gap-5">
                <Kpi label="Leads this month" value={<CountUp to={1284} />} delta="+18%" />
                <Kpi label="Conversion" value={<CountUp to={32.6} decimals={1} suffix="%" />} delta="+4.1" />
                <Kpi label="Auto follow-ups" value={<CountUp to={9420} />} delta="live" tone="mint" />
              </div>

              {/* Pipeline — 4-column kanban on tablet+, 2-column (first two stages) on phones */}
              <div className="md:col-span-8">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                  {visibleStages.map((s, si) => (
                    <div
                      key={s}
                      className="min-h-[190px] rounded-2xl border border-[var(--line)] bg-ink/40 p-2 md:min-h-[230px] md:p-3"
                    >
                      <div className="mb-3 flex items-center justify-between px-1">
                        <span className="truncate text-[10px] font-medium uppercase tracking-[0.12em] text-cream/50 md:text-[11px]">
                          {s}
                        </span>
                        <span className="font-mono text-[10px] text-cream/35">
                          {liveLeads.filter((l) => l.stage === si).length}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <AnimatePresence initial={false}>
                          {liveLeads
                            .filter((l) => l.stage === si)
                            .map((l) => (
                              <motion.div
                                key={l.name}
                                layout
                                layoutId={`lead-${l.name}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                                className="rounded-xl border border-[var(--line)] bg-surface-2 p-2.5"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="h-5 w-5 shrink-0 rounded-full bg-linear-to-br from-violet-2 to-ember" />
                                  <span className="truncate text-[11px] font-medium text-cream md:text-xs">{l.name}</span>
                                </div>
                                <div className="mt-2 flex items-center justify-between">
                                  <span className="font-mono text-[9px] uppercase tracking-wider text-cream/40">{l.src}</span>
                                  {si === stages.length - 1 && <CheckCircle2 className="h-3 w-3 text-mint" />}
                                </div>
                              </motion.div>
                            ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right rail: chart + log */}
              <div className="flex flex-col gap-4 md:col-span-4 md:gap-5">
                <div className="rounded-2xl border border-[var(--line)] bg-ink/40 p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-cream/50">Admissions</span>
                    <span className="font-mono text-[10px] text-mint">▲ 40%</span>
                  </div>
                  <Sparkline active={inView} />
                </div>

                <div className="flex-1 rounded-2xl border border-[var(--line)] bg-ink/40 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulse-dot" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-cream/50">Automation log</span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    <AnimatePresence initial={false} mode="popLayout">
                      {visibleLog.map((l) => {
                        const Icon = l.icon;
                        return (
                          <motion.li
                            key={l.text}
                            layout
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -12 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-start gap-2 text-[11px] leading-snug text-cream/70"
                          >
                            <Icon className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${l.tone}`} />
                            {l.text}
                          </motion.li>
                        );
                      })}
                    </AnimatePresence>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <FadeUp className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row" delay={0.1}>
          <Button href={SMARTHIVE_URL} icon="external">
            Try SmartHive live
          </Button>
          <Button href="/solutions" variant="ghost">
            All solutions
          </Button>
        </FadeUp>
      </Container>
    </section>
  );
}

function Kpi({
  label,
  value,
  delta,
  tone = "lilac",
}: {
  label: string;
  value: React.ReactNode;
  delta: string;
  tone?: "lilac" | "mint";
}) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-ink/40 p-3 md:p-4">
      <p className="truncate text-[10px] font-medium uppercase tracking-[0.12em] text-cream/45 md:text-[11px]">{label}</p>
      <div className="mt-1.5 flex items-baseline gap-2">
        <span className="text-xl font-medium tracking-tight text-cream md:text-3xl">{value}</span>
        <span className={`font-mono text-[10px] ${tone === "mint" ? "text-mint" : "text-lilac"}`}>{delta}</span>
      </div>
    </div>
  );
}

function Sparkline({ active }: { active: boolean }) {
  const d = "M0 52 C 20 48, 30 40, 48 42 S 80 30, 96 26 S 130 22, 150 14 S 180 12, 200 4";
  return (
    <svg viewBox="0 0 200 60" className="h-20 w-full overflow-visible" fill="none">
      <defs>
        <linearGradient id="sh-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${d} L200 60 L0 60 Z`}
        fill="url(#sh-fill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: active ? 1 : 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
      />
      <motion.path
        d={d}
        stroke="#c4b5fd"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: active ? 1 : 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx="200"
        cy="4"
        r="3"
        fill="#ff8a5b"
        initial={{ scale: 0 }}
        animate={{ scale: active ? 1 : 0 }}
        transition={{ delay: 1.4 }}
      />
    </svg>
  );
}
