import Hero from "@/components/Hero";
import PartnerMesh from "@/components/PartnerMesh";
import MetricTicker from "@/components/MetricTicker";
import BentoGrid from "@/components/BentoGrid";
import IndustryViewer from "@/components/IndustryViewer";
import StrategicBriefing from "@/components/StrategicBriefing";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-surface selection:bg-secondary/15 selection:text-secondary antialiased overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. METRIC TICKER */}
      <MetricTicker />

      {/* 3. CORE DISCIPLINES */}
      <BentoGrid />

      {/* 4. PARTNER MESH */}
      <PartnerMesh />

      {/* 5. INDUSTRY VERTICAL SOLUTION VIEWER */}
      {/* <IndustryViewer /> */}

      {/* 6. ARCHITECTURE BRIEFING SCHEDULER */}
      <StrategicBriefing />
    </div>
  );
}
