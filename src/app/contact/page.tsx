import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactPanel from "@/components/contact/ContactPanel";
import ContactChannels from "@/components/contact/ContactChannels";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contact Us | CData Systems — Enterprise IT & Oracle Solutions",
  description:
    "Connect with CData Systems' Principal Solutions Architects. Schedule an architecture briefing, submit a project inquiry, or reach our 24/7 enterprise support hotline.",
  keywords: [
    "contact CData Systems",
    "enterprise IT consultation",
    "Oracle EBS architect",
    "schedule IT briefing",
    "enterprise support",
    "IT strategy consultation",
  ],
  openGraph: {
    title: "Contact Us | CData Systems — Enterprise IT & Oracle Solutions",
    description:
      "Reach our enterprise architects for briefings, project scoping, or 24/7 client support. 1-hour response SLA guaranteed.",
    type: "website",
    url: "https://www.cdatasystems.com/contact",
  },
  alternates: {
    canonical: "https://www.cdatasystems.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 bg-surface selection:bg-secondary/15 selection:text-secondary antialiased overflow-hidden">
      {/* Section 1: Hero */}
      <ContactHero />

      {/* Section 2: Interactive form + context panel */}
      <ContactPanel />

      {/* Section 3: Offices & direct channels */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <ContactChannels />
      </ScrollReveal>
    </div>
  );
}
