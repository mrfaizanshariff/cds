import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import CapabilityMatrix from "@/components/about/CapabilityMatrix";
import WhyCData from "@/components/about/WhyCData";
import IndustriesServed from "@/components/about/IndustriesServed";
import GlobalFootprint from "@/components/about/GlobalFootprint";
import AboutContact from "@/components/about/AboutContact";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About Us | C Data Systems — Enterprise IT & Oracle Solutions",
  description:
    "Learn about CData Systems: 20+ years of enterprise IT engineering, Oracle E-Business Suite expertise, multi-cloud infrastructure, and certified SDLC rigor.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1 bg-surface selection:bg-secondary/15 selection:text-secondary antialiased overflow-hidden">
      {/* Section 1: Hero — has its own DotField; no outer wrapper needed */}
      <AboutHero />

      {/* Section 2: Capability Matrix */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <CapabilityMatrix />
      </ScrollReveal>

      {/* Section 3: Why CData */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <WhyCData />
      </ScrollReveal>

      {/* Section 4: Industries */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <IndustriesServed />
      </ScrollReveal>

      {/* Section 5: Global Footprint — left/right split */}
      {/* <ScrollReveal variant="fadeUp" start="top 90%">
        <GlobalFootprint />
      </ScrollReveal> */}

      {/* Section 6: Contact Form */}
      <ScrollReveal variant="fadeUp" start="top 90%">
        <AboutContact />
      </ScrollReveal>
    </div>
  );
}
