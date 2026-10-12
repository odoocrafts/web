"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ClipboardPaste, Package, Printer, ScanLine, Send, Truck } from "lucide-react";
import { SELLORA_URL } from "@/data/solutions";
import Button from "@/components/ui/Button";
import { Container, Eyebrow, Heading } from "@/components/ui/Section";
import { FadeUp, Item, Stagger } from "@/components/fx/Reveal";

/** The six frames of a sale, straight from the product brief. */
const steps = [
  { icon: ClipboardPaste, title: "Paste the address", body: "Messy WhatsApp text becomes the customer's address. Repeat buyers are found by phone number." },
  { icon: Package, title: "Pick the product", body: "Size and colour if the item has them. Mark the order cash on delivery (COD) or prepaid." },
  { icon: Printer, title: "Print the label", body: "A 100×150 mm shipping label from the phone, with the shop's logo and a QR code." },
  { icon: ScanLine, title: "Scan once, pack once", body: "One scan locks the parcel to the person packing it. Photograph it before it goes out." },
  { icon: Truck, title: "Dispatch and track", body: "The India Post tracking number goes on the order, ready to share with the customer." },
  { icon: Send, title: "Share the invoice", body: "An invoice PDF the shop can send on WhatsApp. GSTIN prints when the shop has one." },
];

const orders = [
  { name: "Anjali Nair", place: "Thrissur, Kerala", amount: "₹1,249", pay: "COD", src: "WhatsApp" },
  { name: "Rahul Menon", place: "Kochi, Kerala", amount: "₹860", pay: "Prepaid", src: "Instagram" },
  { name: "Fathima S.", place: "Kozhikode, Kerala", amount: "₹2,100", pay: "COD", src: "Call" },
  { name: "Deepak R.", place: "Bengaluru, Karnataka", amount: "₹1,580", pay: "Prepaid", src: "WhatsApp" },
];

const stages = ["New", "Packing", "Dispatched"];

export default function SelloraSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setTick((t) => t + 1), 2600);
    return () => clearInterval(id);
  }, [inView]);

  const live = orders.map((o, i) => ({ ...o, stage: Math.min(2, Math.floor((tick + i) % 5 / 2)) }));

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-40">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[820px] rounded-full bg-sky-500/15 blur-[160px]" />

      <Container className="relative">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Copy */}
          <div className="md:col-span-6 lg:col-span-5">
            <FadeUp>
              <Eyebrow index="03">
                <span className="inline-flex items-center gap-2">
                  New product
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse-dot" />
                </span>
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.05} className="mt-7 flex items-center gap-4">
              <Image
                src="/sellora-icon.svg"
                alt="Sellora"
                width={56}
                height={56}
                className="h-14 w-14 rounded-2xl shadow-[0_12px_40px_-12px_rgba(56,189,248,0.7)]"
              />
              <span className="text-3xl font-medium tracking-tight text-cream md:text-4xl">Sellora</span>
            </FadeUp>

            <Heading className="mt-6" title="From the chat" accent="to the parcel." size="lg" />

            <FadeUp delay={0.15}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-cream/65">
                A WhatsApp-first app for small Indian shops that sell on WhatsApp, Instagram and phone calls. Staff take
                the order on the phone, packing staff pack and dispatch, and the owner sees the whole shop.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-cream/50">
                Cash on delivery and prepaid. India Post tracking on every order. Shipping labels and invoices with the
                shop&apos;s own name and logo. Many shops, each with their own space.
              </p>
            </FadeUp>

            <FadeUp delay={0.25} className="mt-9 flex flex-wrap gap-3">
              <Button href={SELLORA_URL} icon="external">
                Open Sellora
              </Button>
              <Button href="/solutions" variant="ghost">
                All solutions
              </Button>
            </FadeUp>
          </div>

          {/* Phone mockup */}
          <div className="md:col-span-6 lg:col-span-7">
            <motion.div
              className="relative mx-auto w-full max-w-[380px] md:ml-auto"
              initial={{ opacity: 0, y: 40, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="pointer-events-none absolute -inset-10 rounded-[64px] bg-sky-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-[#020617] p-3 shadow-[0_40px_120px_-30px_rgba(2,6,23,0.9)]">
                <div className="overflow-hidden rounded-[34px] bg-[#020617] text-[#f8fafc]">
                  {/* status bar */}
                  <div className="flex items-center justify-between px-6 pt-4 font-mono text-[10px] text-[#94a3b8]">
                    <span>9:41</span>
                    <span className="h-5 w-24 rounded-full bg-[#0f172a]" />
                    <span>IN</span>
                  </div>

                  {/* header */}
                  <div className="flex items-center justify-between px-5 pb-3 pt-5">
                    <div className="flex items-center gap-2.5">
                      <Image src="/sellora-icon.svg" alt="" width={28} height={28} className="h-7 w-7 rounded-lg" />
                      <div>
                        <p className="text-sm font-medium leading-none">Today</p>
                        <p className="mt-1 text-[10px] text-[#94a3b8]">Mon · Orders</p>
                      </div>
                    </div>
                    <span className="rounded-full border border-[#38bdf8]/40 bg-[#38bdf8]/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-[#38bdf8]">
                      Owner
                    </span>
                  </div>

                  {/* KPIs */}
                  <div className="grid grid-cols-3 gap-2 px-4">
                    {[
                      ["Orders", "24"],
                      ["COD", "₹18,640"],
                      ["Incentive", "₹480"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-2xl border border-white/5 bg-[#0f172a] p-3">
                        <p className="text-[9px] uppercase tracking-wider text-[#94a3b8]">{k}</p>
                        <p className="mt-1 text-base font-medium leading-none">{v}</p>
                      </div>
                    ))}
                  </div>

                  {/* stage tabs */}
                  <div className="mt-4 flex gap-1 px-4">
                    {stages.map((s, i) => (
                      <span
                        key={s}
                        className={`flex-1 rounded-full py-1.5 text-center text-[10px] font-medium ${
                          i === 1 ? "bg-[#0ea5e9] text-[#020617]" : "bg-[#0f172a] text-[#94a3b8]"
                        }`}
                      >
                        {s} · {live.filter((o) => o.stage === i).length}
                      </span>
                    ))}
                  </div>

                  {/* order list */}
                  <ul className="mt-3 flex min-h-[292px] flex-col gap-2 px-4 pb-5">
                    <AnimatePresence initial={false} mode="popLayout">
                      {live.map((o) => (
                        <motion.li
                          key={o.name}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ type: "spring", stiffness: 320, damping: 30 }}
                          className="rounded-2xl border border-white/5 bg-[#0f172a] p-3"
                        >
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">{o.name}</p>
                            <span
                              className={`rounded-md px-1.5 py-0.5 font-mono text-[9px] uppercase ${
                                o.pay === "COD" ? "bg-amber-400/15 text-amber-300" : "bg-[#22c55e]/15 text-[#22c55e]"
                              }`}
                            >
                              {o.pay}
                            </span>
                          </div>
                          <div className="mt-1.5 flex items-center justify-between text-[11px] text-[#94a3b8]">
                            <span>
                              {o.place} · {o.src}
                            </span>
                            <span className="font-medium text-[#f8fafc]">{o.amount}</span>
                          </div>
                          <div className="mt-2.5 flex items-center gap-1.5">
                            {stages.map((_, i) => (
                              <span
                                key={i}
                                className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                                  i <= o.stage ? (o.stage === 2 ? "bg-[#22c55e]" : "bg-[#38bdf8]") : "bg-white/10"
                                }`}
                              />
                            ))}
                            <span className="ml-1 font-mono text-[9px] uppercase tracking-wider text-[#94a3b8]">
                              {stages[o.stage]}
                            </span>
                          </div>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                </div>
              </div>

              {/* floating label chip */}
              <motion.div
                className="absolute -left-6 bottom-20 hidden rounded-2xl border border-white/10 bg-[#0f172a] p-3 text-[#f8fafc] shadow-2xl md:block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-white">
                    <span className="grid h-6 w-6 grid-cols-3 gap-px">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <span key={i} className={i % 2 === 0 ? "bg-[#020617]" : "bg-transparent"} />
                      ))}
                    </span>
                  </span>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-[#94a3b8]">Label · 100×150</p>
                    <p className="text-xs font-medium">India Post · EK123456789IN</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Six frames */}
        <Stagger className="mt-20 grid gap-px overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 md:mt-28">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Item key={s.title} className="bg-ink p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line-strong)] text-sky-300">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="font-mono text-[11px] text-cream/35">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-medium tracking-tight text-cream">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-cream/55">{s.body}</p>
              </Item>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}
