import type { Metadata } from "next";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import SolutionsGrid from "@/components/solutions/SolutionsGrid";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Solutions | CData Systems — Enterprise Technology & Consulting",
  description:
    "CData Systems delivers four strategic solution practices: IT outsourcing, strategic consulting, technology delivery, and custom R&D — engineered to resolve enterprise-scale operational bottlenecks.",
  keywords: [
    "enterprise solutions",
    "IT outsourcing",
    "technology consulting",
    "digital transformation",
    "research and development",
    "enterprise technology",
    "business process outsourcing",
    "IT strategy",
  ],
  openGraph: {
    title: "Solutions | CData Systems — Enterprise Technology & Consulting",
    description:
      "Four strategic practices — Outsourcing, Consulting, Technology, and R&D — built to eliminate enterprise bottlenecks.",
    type: "website",
    url: "https://www.cdatasystems.com/solutions",
  },
  alternates: {
    canonical: "https://www.cdatasystems.com/solutions",
  },
};

export default function SolutionsPage() {
  return (
    <div className="flex flex-col flex-1 bg-surface selection:bg-secondary/15 selection:text-secondary antialiased overflow-hidden">
      {/* Section 1: Hero */}
      <SolutionsHero />

      {/* Section 2: Solutions Grid */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <SolutionsGrid />
      </ScrollReveal>

      {/* Section 3: CTA */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <SolutionsCTA />
      </ScrollReveal>
    </div>
  );
}
