import { Metadata } from "next";
import CTA from "@/components/sections/CTA";
import { Container, PageHeader } from "@/components/ui/Section";
import { FadeUp } from "@/components/fx/Reveal";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Odoocrafts. Learn how we collect, use, and protect your data.",
};

const sections = [
  {
    title: "Introduction",
    body: (
      <p>
        Welcome to Odoocrafts. We respect your privacy and are committed to protecting your personal data. This privacy
        policy will inform you about how we look after your personal data when you visit our website and tell you about
        your privacy rights and how the law protects you.
      </p>
    ),
  },
  {
    title: "Data We Collect",
    body: (
      <>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul>
          <li>
            <strong>Identity Data:</strong> includes first name, last name, username or similar identifier.
          </li>
          <li>
            <strong>Contact Data:</strong> includes email address and telephone numbers.
          </li>
          <li>
            <strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone
            setting and location, and other technology on the devices you use to access this website.
          </li>
          <li>
            <strong>Usage Data:</strong> includes information about how you use our website, products and services.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "How We Use Your Data",
    body: (
      <>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul>
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>
            Where it is necessary for our legitimate interests (or those of a third party) and your interests and
            fundamental rights do not override those interests.
          </li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Data Security",
    body: (
      <p>
        We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
        used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data
        to those employees, agents, contractors and other third parties who have a business need to know.
      </p>
    ),
  },
  {
    title: "Contact Us",
    body: (
      <>
        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
        <div className="card mt-4 rounded-2xl p-6 text-cream/80">
          <p>
            Email:{" "}
            <a href={links.email} className="link-underline text-lilac">
              info@odoocrafts.com
            </a>
          </p>
          <p className="mt-2">
            Phone:{" "}
            <a href={links.phone} className="link-underline text-lilac">
              {links.phoneDisplay}
            </a>
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <main>
      <PageHeader index="—" eyebrow="Legal" title="Privacy" accent="Policy." />
      <section className="pb-24 md:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            {sections.map((s, i) => (
              <FadeUp key={s.title} delay={0.05} className="grid gap-4 border-t border-[var(--line)] py-10 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <span className="serif-italic text-2xl text-lilac/70">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="mt-2 text-xl font-medium tracking-tight text-cream md:text-2xl">{s.title}</h2>
                </div>
                <div className="space-y-4 text-[16px] leading-relaxed text-cream/65 md:col-span-8 [&_li]:relative [&_li]:pl-5 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.7em] [&_li]:before:h-1 [&_li]:before:w-1 [&_li]:before:rounded-full [&_li]:before:bg-lilac [&_strong]:font-medium [&_strong]:text-cream [&_ul]:space-y-2">
                  {s.body}
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>
      <CTA />
    </main>
  );
}
