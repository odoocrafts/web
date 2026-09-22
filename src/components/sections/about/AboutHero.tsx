import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { links } from "@/lib/site";

export default function AboutHero() {
  return (
    <PageHeader
      index="08"
      eyebrow="Engineering excellence"
      title="We build ERP systems that"
      accent="people actually use."
      description="Odoo Implementation, Customization, Automation & Support for Growing Businesses."
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={links.whatsappConsult} icon="external">
          Book Free Consultation
        </Button>
        <Button href="/case-studies" variant="ghost" icon={<BookOpen className="h-4 w-4" />}>
          View Case Studies
        </Button>
      </div>
    </PageHeader>
  );
}
