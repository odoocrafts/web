"use client";

import { useState } from "react";
import { Send, AlertCircle, LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import { Container, Eyebrow } from "@/components/ui/Section";
import { Words } from "@/components/fx/Reveal";

const field =
  "w-full rounded-xl border border-[var(--line-strong)] bg-ink/60 px-4 py-3.5 text-[15px] text-cream placeholder:text-cream/30 transition-colors focus:border-lilac focus:outline-none";

export default function HelpdeskCustomerCare() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Helpdesk Ticket*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Subject:* ${formData.subject}

*Description:*
${formData.description}`;
    window.open(`https://wa.me/918330887435?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <main className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet/20 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow index="HD-01">Helpdesk · Customer care</Eyebrow>
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,5.5rem)] font-medium leading-[0.96] tracking-[-0.03em] text-cream">
              <Words text="Customer Care" /> <Words text="Support." delay={0.1} wordClassName="serif-italic text-lilac pr-[0.06em]" />
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-cream/65">
              Please fill out the form below. Your ticket will be directed to our support team via WhatsApp for immediate
              assistance.
            </p>
            <div className="mt-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream/45">
              <LifeBuoy className="h-4 w-4 text-lilac" /> Typical response · under 30 min
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="card rounded-[28px] p-6 md:p-10 lg:col-span-7"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name *" htmlFor="name">
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={field} />
              </Field>
              <Field label="Phone Number *" htmlFor="phone">
                <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={field} />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Email Address" htmlFor="email">
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={field} />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Issue Subject *" htmlFor="subject">
                <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="Brief summary of the issue" className={field} />
              </Field>
            </div>
            <div className="mt-5">
              <Field label="Detailed Description *" htmlFor="description">
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Please describe your issue or request in detail..."
                  className={`${field} resize-none`}
                />
              </Field>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-cream text-base font-medium text-ink transition-colors hover:bg-white"
              >
                Submit Ticket via WhatsApp
                <Send className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </button>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-cream/45">
                <AlertCircle className="h-4 w-4" /> You will be redirected to WhatsApp securely.
              </p>
            </div>
          </motion.form>
        </div>
      </Container>
    </main>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="font-mono text-[11px] uppercase tracking-[0.16em] text-cream/55">
        {label}
      </label>
      {children}
    </div>
  );
}
