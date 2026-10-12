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
    title: "How We Took a Kerala Logistics Provider to Pan-India Shipping",
    excerpt: "Discover how we built a complete digital ecosystem for Kerala Xpress — a Next.js website with real-time tracking, an Odoo ERP backend, custom mobile apps, and an India Post integration that lets sellers across India ship anywhere in the country.",
    date: "September 2026",
    readTime: "5 min read",
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

### 4. India Post Integration for Pan-India Reach
Kerala Xpress's own fleet covers Kerala, but their sellers wanted to reach customers everywhere. We integrated India Post directly into the Odoo backend and the Sellers App, so a shipment bound for any pin code in the country is booked, labelled and tracked from the same interface as a local delivery.
*   **Unified booking:** Sellers create one shipment; the system automatically routes it to the Kerala Xpress fleet or hands it off to India Post based on the destination.
*   **Automated manifests & labels:** India Post consignment numbers, barcodes and shipping labels are generated inside Odoo — no double entry, no separate portal.
*   **End-to-end tracking:** India Post tracking events flow back into the platform, so customers see a single tracking timeline on the Kerala Xpress website regardless of who carries the last mile.
*   **Reconciled billing:** India Post postage is captured against each shipment and settled in the seller's ledger alongside local deliveries.

## The Result

By transitioning to this unified Odoocrafts ecosystem, Kerala Xpress drastically reduced manual administrative overhead, significantly improved delivery timelines, and provided total transparency to their customers and sellers.

What began as a regional logistics platform is now used by sellers across India. With the India Post integration, a merchant onboarded on Kerala Xpress can ship to every serviceable pin code in the country — all from one system, one ledger and one tracking page. Kerala Xpress now operates on a highly scalable, future-proof foundation built for national reach.
`
  },
  {
    slug: "aambucx",
    title: "AAMBUCX: from the WhatsApp message to the parcel",
    excerpt:
      "A saree shop in Vennala takes the order in chat, prints the label, and ships it — mostly cash on delivery, mostly India Post — with the whole team on a phone.",
    date: "October 2026",
    readTime: "5 min read",
    coverImage: "/aambucx-logo.png",
    client: "AAMBUCX",
    content: `
A saree shop in Vennala takes the order in chat, prints the label, and ships it — mostly cash on delivery, mostly India Post — with the whole team on a phone.

## The shop

AAMBUCX, trading as AAMBUCX CLOTHING, is a saree shop in Vennala, Ernakulam, Kerala. They sell on WhatsApp.

The team is the owner, several CRM executives who take orders, and packing. One person does both CRM and packing.

The products are sarees with many colours and variants: Banarasi, cotton, georgette, silk, and similar. The shop does not charge GST. They ship cash on delivery and prepaid, largely through India Post, and sometimes by other handoffs such as Porter. They print 100×150 mm labels on a small Bluetooth thermal printer.

## The challenge

The order arrived as a WhatsApp message, and the message was never the same shape twice.

- Some customers sent a labelled form. Some sent a stack of lines with no labels. Some wrote “pin nmbr” or “PINCOD”. A mobile number arrived with a comma in it. A whole address arrived as one comma-separated line. Retyping that into separate house, street, city, and PIN boxes was the daily work.
- The shipping label showed only the shop name and phone. The shop needed the logo, the full shop address, and their India Post seller id, printed large enough for a thermal printer. Thin type was dropping the edges of letters. A prepaid label was also getting cut off: the picture was sent to the Bluetooth printer in one piece, and the printer truncated it.
- India Post’s old tracking link was dead, so the “track here” message on WhatsApp failed.
- The shop does not charge GST, but a new product was picking up a default 5% tax. A cash on delivery label then asked the customer for more than the saree price.
- Several people sell. Each CRM executive should see only the customers and orders they handled. The owner needs everyone. Packing needs to see who took the order. The person who both sells and packs still needs every order waiting to be packed.
- Packing has to read the full saree name and colour. Long names were cut off on the phone.
- Incentive is a fixed amount per piece, not per order, and a return takes that amount back. The owner needs the month by CRM, then customer, then order, and a file they can download.
- The owner marks when money has come in, and needs pending against received. For India Post cash on delivery settlements, they need dispatched parcels for a date, split into cash on delivery and prepaid, with the tracking id, the payment type, and the amount.
- A cancelled order has to put the stock back. Some parcels are a pre-order, a Porter handoff, or an Instamart order, and that has to show on the order.

## What they do in Sellora now

A CRM executive pastes the WhatsApp message into one address. Kerala is the default state, so the house, street, city, and PIN are not retyped into separate boxes. The same paste covers a labelled form, a stack of unlabelled lines, “pin nmbr”, “PINCOD”, a mobile number written with a comma, and an address that arrived as one comma-separated line.

They pick the saree and the colour, and mark the order cash on delivery (COD) or prepaid. Tax stays off unless the shop sets it, so a COD label asks for the saree price the shop entered. The owner can tag an order Pre-Order, Porter, or Instamart. If the owner cancels an order, the stock comes back.

Each CRM executive sees only the customers and orders they handled. The owner sees everyone. The order list is grouped by CRM, so packing can see who took the order. The person who both sells and packs still sees every order that needs packing. On the phone, packing can read the full saree name and colour.

Shop details — the name, the address, and the logo — are edited in the app. They print on the label and on the invoice. The label also carries the India Post seller id, printed large enough for that thermal printer, with type heavy enough that the edges of letters hold. It is sent to the printer in strips, so the QR and the items are not cut off.

Staff still book the parcel, then put the tracking number on the order. The “track here” link uses India Post’s current tracking page. The invoice is an A4 PDF, shared on WhatsApp the same way as the dispatch photo.

Incentive is a fixed amount per piece. That can be switched to a fixed amount per order; AAMBUCX counts each piece. A return takes the incentive back. The home screen shows today and this month. The owner opens a monthly report — CRM, then customer, then order — one CRM at a time, and downloads it as Excel.

The owner marks when money is received, and switches between a pending list and a received list, with an Excel download. For India Post settlements they filter dispatched parcels by date, toggle COD or prepaid, and export the tracking id, the payment type, and the amount.

## What got easier

- The WhatsApp message is pasted once, into one address, with Kerala already set as the state.
- The label carries the logo, the shop address, and the seller id, and it prints in strips so the QR and the items stay on the page.
- The tracking message opens India Post’s current tracking page.
- A COD label no longer adds a tax the shop does not charge.
- Each CRM executive works their own customers. The owner sees the shop. Packing sees who took the order, and the full saree name and colour.
- Incentive is counted per piece, with today and this month on the home screen, and a monthly Excel report the owner can open one CRM at a time.
- Pending and received money, and India Post COD settlements, can be listed and downloaded.
- A cancelled order puts the stock back. Pre-Order, Porter, and Instamart sit on the order as tags.

Sellora’s note:

> AAMBUCX still sells the way they always have: a WhatsApp chat, a packed saree, India Post. What changed is the phone in between — the address as it arrived, a label that fits the printer, and a day the owner can see by person, by piece, and by whether the money has come in.
`
  }
];
