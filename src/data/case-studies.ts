export interface CaseStudy {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  client: string;
  content: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kerala-xpress",
    title: "How We Solved End-to-End Problems for an Emerging Logistics Provider in Kerala",
    excerpt: "Discover how we developed a complete digital ecosystem for Kerala Xpress, including a Next.js website with real-time tracking, an Odoo ERP backend, and custom mobile apps.",
    date: "July 2026",
    readTime: "4 min read",
    coverImage: "https://keralaxpress.com/logo.png",
    client: "Kerala Xpress",
    content: `
## The Challenge

Kerala Xpress, an emerging logistics provider in Kerala, faced significant operational hurdles due to disconnected systems and manual processes. They needed a unified platform capable of handling real-time package tracking, complex logistics routing, seamless seller onboarding, and efficient delivery executive management. Their ambitious growth plans were being held back by a lack of technological infrastructure.

## Our Solution

At Odoocrafts, we engineered a complete, end-to-end digital ecosystem tailored specifically to the logistics industry. We didn't just build software; we built the operational backbone for Kerala Xpress.

### 1. Modern Web Experience with Next.js
We developed a lightning-fast, highly responsive website using Next.js. The centerpiece of the web platform is a sophisticated real-time package tracking system that allows customers to effortlessly monitor their shipments with pinpoint accuracy. The modern framework ensures maximum SEO performance, sub-second load times, and a flawless user experience across all devices.

### 2. Powerful Odoo ERP Backend
To handle the immense complexity of logistics routing and management, we implemented a robust, heavily customized Odoo ERP backend. This system acts as the central brain of Kerala Xpress, managing dispatching, inventory, fleet operations, automated billing, and accounting in one unified interface. The Odoo backend seamlessly communicates with the front-end website and mobile apps via custom-built APIs.

### 3. Integrated Mobile Ecosystem
Logistics is a field business, so we developed a suite of specialized mobile applications to connect all stakeholders in real-time:
*   **Sellers App:** Enables merchants to easily schedule bulk pickups, track multiple shipments, generate manifests, and manage their logistics ledger seamlessly.
*   **Delivery Executives App:** A streamlined, rugged app for drivers featuring AI-optimized routing, real-time status updates, barcode scanning, and electronic proof-of-delivery (ePOD) capabilities.
*   **Internal Team App:** Empowering the Kerala Xpress operations staff to oversee dispatching on-the-go, manage exceptions instantly, and monitor fleet performance.

## The Result

By transitioning to this unified Odoocrafts ecosystem, Kerala Xpress drastically reduced manual administrative overhead, significantly improved delivery timelines, and provided total transparency to their customers and sellers. They are now equipped with a highly scalable, future-proof foundation ready to dominate the logistics market in Kerala and beyond.
`
  }
];
