import type { Metadata } from "next";
import StaffingHero from "@/components/staffing/StaffingHero";
import StaffingContent from "@/components/staffing/StaffingContent";
import StaffingCTA from "@/components/staffing/StaffingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Staffing Services | CData Systems — Enterprise IT & Technical Talent",
  description:
    "CData Systems provides enterprise staffing solutions: team augmentation cohorts, senior IT contractors, and direct hire placements across IT, engineering, finance, scientific, and industrial disciplines.",
  keywords: [
    "IT staffing",
    "technical talent",
    "team augmentation",
    "senior engineers",
    "direct hire",
    "executive search",
    "Oracle DBA staffing",
    "cloud architects",
    "engineering staffing",
    "enterprise workforce solutions",
  ],
  openGraph: {
    title: "Staffing Services | CData Systems — Enterprise IT & Technical Talent",
    description:
      "Pre-vetted senior engineers, architects, and IT specialists — delivered in 48 hours across three flexible engagement models.",
    type: "website",
    url: "https://www.cdatasystems.com/staffing",
  },
  alternates: {
    canonical: "https://www.cdatasystems.com/staffing",
  },
};

export default function StaffingPage() {
  return (
    <div className="flex flex-col flex-1 bg-surface selection:bg-secondary/15 selection:text-secondary antialiased overflow-hidden">
      {/* Section 1: Hero */}
      <StaffingHero />

      {/* Section 2: Engagement models, vetting process, skill matrix */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <StaffingContent />
      </ScrollReveal>

      {/* Section 3: CTA */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <StaffingCTA />
      </ScrollReveal>
    </div>
  );
}
