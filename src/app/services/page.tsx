import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services | CData Systems — Enterprise IT & Technology Solutions",
  description:
    "Explore CData Systems' full service portfolio: Oracle EBS, custom application development, cloud infrastructure, DBA services, data center migration, storage engineering, platform engineering, and managed IT operations.",
  keywords: [
    "enterprise IT services",
    "Oracle E-Business Suite",
    "cloud infrastructure",
    "custom software development",
    "data center migration",
    "DBA services",
    "managed IT operations",
    "storage engineering",
    "platform engineering",
    "system integration",
  ],
  openGraph: {
    title: "Services | CData Systems — Enterprise IT & Technology Solutions",
    description:
      "11 core enterprise service lines — from Oracle EBS and storage engineering to cloud migration and managed operations.",
    type: "website",
    url: "https://www.cdatasystems.com/services",
  },
  alternates: {
    canonical: "https://www.cdatasystems.com/services",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col flex-1 bg-surface selection:bg-secondary/15 selection:text-secondary antialiased overflow-hidden">
      {/* Section 1: Hero */}
      <ServicesHero />

      {/* Section 2: Services Grid */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <ServicesGrid />
      </ScrollReveal>

      {/* Section 3: CTA */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <ServicesCTA />
      </ScrollReveal>
    </div>
  );
}
