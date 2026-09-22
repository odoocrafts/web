import { Metadata } from "next";
import AppsShowcase from "@/components/sections/apps/AppsShowcase";
import CTA from "@/components/sections/CTA";
import { PageHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Odoo Apps",
  description:
    "Explore our premium Odoo apps and modules designed to supercharge your business operations. Available now on the Odoo App Store.",
};

export default function AppsPage() {
  return (
    <main>
      <PageHeader
        index="03"
        eyebrow="Odoo App Store"
        title="Our Odoo"
        accent="Apps."
        description="Supercharge your Odoo environment with our carefully crafted, premium modules. Built by experts, trusted by businesses worldwide."
      >
        <Button href={links.odooAppsAll} variant="ghost" icon="external">
          Odoocrafts on the App Store
        </Button>
      </PageHeader>
      <AppsShowcase />
      <CTA />
    </main>
  );
}
