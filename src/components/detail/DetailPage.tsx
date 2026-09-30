import ScrollReveal from "@/components/ScrollReveal";
import DetailHero from "./DetailHero";
import DetailBody from "./DetailBody";
import DetailCTA from "./DetailCTA";
import type { DetailPageConfig } from "./types";

/**
 * DetailPage — shared layout for all individual service, solution,
 * and staffing detail pages.
 *
 * Drop a <DetailPage config={...} /> anywhere with the config object
 * shaped by DetailPageConfig. Only sections with data will render.
 *
 * Usage:
 *   import DetailPage from "@/components/detail/DetailPage";
 *   import type { DetailPageConfig } from "@/components/detail/types";
 *
 *   const config: DetailPageConfig = { ... };
 *   export default function MyPage() {
 *     return <DetailPage config={config} />;
 *   }
 */
export default function DetailPage({ config }: { config: DetailPageConfig }) {
  return (
    <div className="flex flex-col flex-1 bg-surface selection:bg-secondary/15 selection:text-secondary antialiased overflow-hidden">
      {/* ── Hero (always rendered) ─────────────────────────────────────── */}
      <DetailHero
        parentLabel={config.parentLabel}
        parentHref={config.parentHref}
        num={config.num}
        eyebrow={config.eyebrow}
        heading={config.heading}
        headingAccent={config.headingAccent}
        subheading={config.subheading}
        stats={config.stats}
        sidebarCard={config.sidebarCard}
        accentBg={config.accentBg}
        accentText={config.accentText}
      />

      {/* ── Body sections (scroll-revealed, only rendered when data exists) */}
      <ScrollReveal variant="fadeUp" start="top 92%">
        <DetailBody
          overviewLabel={config.overviewLabel}
          overviewTitle={config.overviewTitle}
          overviewParagraphs={config.overviewParagraphs}
          features={config.features}
          featuresLabel={config.featuresLabel}
          featuresTitle={config.featuresTitle}
          featuresColumns={config.featuresColumns}
          stages={config.stages}
          stagesLabel={config.stagesLabel}
          stagesTitle={config.stagesTitle}
          stagesDescription={config.stagesDescription}
          metrics={config.metrics}
          deliverables={config.deliverables}
          deliverablesLabel={config.deliverablesLabel}
          deliverablesTitle={config.deliverablesTitle}
          accentBg={config.accentBg}
          accentText={config.accentText}
        />
      </ScrollReveal>

      {/* ── CTA (always rendered) ──────────────────────────────────────── */}
      <ScrollReveal variant="fadeUp" start="top 92%">
        <DetailCTA
          ctaHeading={config.ctaHeading}
          ctaBody={config.ctaBody}
          ctaPrimaryLabel={config.ctaPrimaryLabel}
          ctaPrimaryHref={config.ctaPrimaryHref}
          ctaSecondaryLabel={config.ctaSecondaryLabel}
          ctaSecondaryHref={config.ctaSecondaryHref}
          ctaWatermarkIcon={config.ctaWatermarkIcon}
          accentBg={config.accentBg}
          accentText={config.accentText}
        />
      </ScrollReveal>
    </div>
  );
}
