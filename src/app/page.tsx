import Hero from "@/components/Hero";
import PartnerMesh from "@/components/PartnerMesh";
import MetricTicker from "@/components/MetricTicker";
import BentoGrid from "@/components/BentoGrid";
import StrategicBriefing from "@/components/StrategicBriefing";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 selection:bg-secondary/15 selection:text-secondary antialiased overflow-x-hidden">
      {/* 1. HERO — deep-space animated gradient + parallax threads */}
      <Hero />

      {/* 2. METRIC TICKER — glass cards + GSAP number counters */}
      <MetricTicker />

      {/* 3. CORE DISCIPLINES — glass bento grid with tilt cards */}
      <BentoGrid />

      {/* 4. PARTNER MESH — infinite scroll ticker */}
      <PartnerMesh />

      {/* 5. STRATEGIC BRIEFING — glass CTA with gradient mesh */}
      <StrategicBriefing />
    </div>
  );
}
