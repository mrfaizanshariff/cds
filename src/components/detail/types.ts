// ─────────────────────────────────────────────────────────────────────────────
// Shared Detail Page — Type Definitions
// Used by services, solutions, and staffing child pages.
// ─────────────────────────────────────────────────────────────────────────────

/** A single key-value stat shown in the hero strip */
export interface DetailStat {
  label: string;
  value: string;
  sub?: string;
  /** Tailwind colour class applied to the value, e.g. "text-emerald-600" */
  color?: string;
}

/** A bullet / feature item used in grids and lists */
export interface DetailFeature {
  icon: string;          // Material Symbol name
  iconBg?: string;       // Tailwind bg class, e.g. "bg-blue-50"
  iconColor?: string;    // Tailwind text class, e.g. "text-secondary"
  title: string;
  desc: string;
  tag?: string;          // Small mono label bottom-right
}

/** A numbered process / delivery stage */
export interface DetailStage {
  stage: string;         // e.g. "STAGE 01"
  title: string;
  desc: string;
  tag?: string;
  highlight?: boolean;   // Renders with accent background
}

/** A single metric callout — large number + label */
export interface DetailMetric {
  value: string;
  label: string;
  sub?: string;
  color?: string;
}

/** A deliverable / output line item */
export interface DetailDeliverable {
  icon: string;
  text: string;
}

/** Sidebar card content shown next to the hero heading */
export interface DetailSidebarCard {
  title: string;
  badge?: string;
  items: Array<{
    icon: string;
    iconColor?: string;
    title: string;
    desc: string;
  }>;
  footerLinkLabel?: string;
  footerLinkHref?: string;
}

/**
 * Full configuration object consumed by <DetailPage />.
 *
 * All sections are optional except the hero fields — simply omit
 * any section you don't need and it won't render.
 */
export interface DetailPageConfig {
  // ── Meta / SEO ─────────────────────────────────────────────────────────────
  /** Parent section for breadcrumb, e.g. "SERVICES" */
  parentLabel: string;
  parentHref: string;
  /** Page section identifier, e.g. "01" */
  num?: string;

  // ── Hero ───────────────────────────────────────────────────────────────────
  eyebrow: string;           // Small mono pill text above heading
  heading: string;           // Plain text — first part of gradient heading
  headingAccent?: string;    // Gradient span text (omit to keep heading plain)
  subheading: string;        // One-paragraph intro beneath heading
  /** Telemetry stat strip (2–4 items ideal) */
  stats?: DetailStat[];
  /** Floating sidebar card on the right of the hero */
  sidebarCard?: DetailSidebarCard;

  // ── Body sections ──────────────────────────────────────────────────────────

  /** Section label & title for the overview paragraph */
  overviewLabel?: string;
  overviewTitle?: string;
  /** Multi-paragraph rich overview */
  overviewParagraphs?: string[];

  /**
   * Feature cards grid. Controls column count:
   * - 2  → "lg:grid-cols-2"
   * - 3  → "lg:grid-cols-3"  (default)
   * - 4  → "lg:grid-cols-4"
   */
  features?: DetailFeature[];
  featuresLabel?: string;
  featuresTitle?: string;
  featuresColumns?: 2 | 3 | 4;

  /** Numbered delivery/process stages */
  stages?: DetailStage[];
  stagesLabel?: string;
  stagesTitle?: string;
  stagesDescription?: string;

  /** Large metric callouts (2–4 ideal) */
  metrics?: DetailMetric[];

  /** Deliverable line items shown as a checklist */
  deliverables?: DetailDeliverable[];
  deliverablesLabel?: string;
  deliverablesTitle?: string;

  // ── CTA ────────────────────────────────────────────────────────────────────
  ctaHeading?: string;
  ctaBody?: string;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  /** Decorative Material Symbol watermark in CTA banner */
  ctaWatermarkIcon?: string;

  // ── Theming ────────────────────────────────────────────────────────────────
  /** Accent colour for the eyebrow pill dot and decorative elements.
   *  Defaults to "bg-secondary" / "text-secondary". */
  accentBg?: string;
  accentText?: string;
}
