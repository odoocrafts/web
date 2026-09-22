/** Single source of truth for navigation + contact links. */

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/our-services" },
  { name: "Solutions", href: "/solutions" },
  { name: "Apps", href: "/apps" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Hire a Developer", href: "/hire-a-developer" },
  { name: "Jobs", href: "/jobs" },
  { name: "About Us", href: "/about" },
  { name: "Contact us", href: "/contact" },
] as const;

export const links = {
  booking: "https://cal.id/odoocrafts/",
  whatsapp: "https://wa.me/918330887435",
  whatsappConsult:
    "https://wa.me/918330887435?text=Hi%20Odoocrafts!%20I%20would%20like%20to%20schedule%20a%20consultation.",
  whatsappHire: "https://wa.me/918330887435?text=Hi%20Odoocrafts!%20I'm%20interested%20in%20hiring%20a%20developer.",
  email: "mailto:info@odoocrafts.com",
  emailHey: "mailto:hey@odoocrafts.com",
  emailHire: "mailto:info@odoocrafts.com?subject=Hire%20a%20Developer",
  emailHr: "mailto:hr@odoocrafts.com",
  emailApply: "mailto:hr@odoocrafts.com?subject=Application%20for%20Odoo%20Developer%20(2%2B%20Years)",
  phone: "tel:+919778013362",
  phoneDisplay: "+91 97780 13362",
  whatsappDisplay: "+91 83308 87435",
  maps: "https://maps.google.com/?q=Building+60/44+3rd+Floor,+J.C.Chambers,+V+467,+Panampilly+Nagar,+Ernakulam,+Kerala+682036",
  instagram: "https://www.instagram.com/odoocrafts/",
  github: "https://github.com/odoocrafts",
  linkedin: "https://www.linkedin.com/company/odoocrafts/",
  odooAppsAll: "https://apps.odoo.com/apps/modules/browse?author=Odoocrafts%20Innovations",
} as const;
