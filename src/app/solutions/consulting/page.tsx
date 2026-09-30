import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import type { DetailPageConfig } from "@/components/detail/types";

export const metadata: Metadata = {
  title: "Strategic Consulting | CData Systems — Technology Roadmaps & Architecture Advisory",
  description:
    "CData Systems strategic consulting practice delivers technology roadmaps, architecture reviews, and enterprise transformation advisory aligned to your corporate growth objectives.",
  alternates: { canonical: "https://www.cdatasystems.com/solutions/consulting" },
};

const config: DetailPageConfig = {
  // ── Meta
  parentLabel: "SOLUTIONS",
  parentHref: "/solutions",
  num: "02",

  // ── Hero
  eyebrow: "STRATEGIC ADVISORY PRACTICE",
  heading: "Strategic",
  headingAccent: "Consulting",
  subheading:
    "Architecture reviews, technology roadmaps, and transformation programmes aligned to measurable corporate objectives. CData Systems consultants embed alongside your leadership team to produce actionable, phased transformation plans.",

  stats: [
    { label: "Advisory Depth",   value: "C-Suite",     color: "text-secondary"   },
    { label: "Deliverable",      value: "Roadmap",      color: "text-secondary"   },
    { label: "Engagement",       value: "Phased",       color: "text-cyan-600"    },
    { label: "Turnaround",       value: "< 48 Hrs",     color: "text-emerald-600" },
  ],

  sidebarCard: {
    title: "Consulting Engagement Types",
    badge: "4 MODELS",
    items: [
      { icon: "search_insights", iconColor: "text-secondary",    title: "Architecture Review",     desc: "Audit of current systems, licensing gaps, and optimisation opportunities." },
      { icon: "route",           iconColor: "text-cyan-600",     title: "Technology Roadmap",      desc: "Phased multi-year transformation plan aligned to business priorities." },
      { icon: "hub",             iconColor: "text-emerald-600",  title: "Vendor Selection",        desc: "RFP management, evaluation frameworks, and shortlist recommendation." },
      { icon: "workspace_premium", iconColor: "text-indigo-600", title: "Executive Briefing",      desc: "C-suite alignment sessions with risk matrices and investment rationale." },
    ],
    footerLinkLabel: "BOOK A CONSULTING SESSION",
    footerLinkHref: "/contact",
  },

  // ── Overview
  overviewLabel: "PRACTICE OVERVIEW",
  overviewTitle: "Advisory That Drives Decisions",
  overviewParagraphs: [
    "Technology investments fail not from a lack of capability but from a lack of strategic alignment. CData Systems' consulting practice exists to bridge that gap — embedding senior architects directly with your leadership team to understand business context before prescribing technology.",
    "Our consultants produce vendor-agnostic assessments grounded in your actual operating model, competitive pressures, and regulatory environment. Every recommendation arrives with a quantified risk/reward matrix and a sequenced implementation plan your teams can execute.",
  ],

  // ── Features
  featuresLabel: "ADVISORY CAPABILITIES",
  featuresTitle: "Consulting Service Lines",
  featuresColumns: 2,
  features: [
    {
      icon: "search_insights", iconBg: "bg-blue-50", iconColor: "text-secondary",
      title: "Current-State Architecture Audit",
      desc: "Comprehensive discovery of existing systems, integrations, licensing obligations, and technical debt — producing an independent risk register.",
      tag: "DIAGNOSTIC",
    },
    {
      icon: "route", iconBg: "bg-cyan-50", iconColor: "text-cyan-700",
      title: "Multi-Year Technology Roadmap",
      desc: "Sequenced transformation plan with workstreams, resource requirements, dependencies, and milestone checkpoints aligned to board-level objectives.",
      tag: "ROADMAP",
    },
    {
      icon: "compare_arrows", iconBg: "bg-emerald-50", iconColor: "text-emerald-700",
      title: "Vendor Evaluation & RFP Management",
      desc: "Criteria-weighted evaluation frameworks, RFP facilitation, proof-of-concept structuring, and final shortlist recommendation with rationale.",
      tag: "PROCUREMENT",
    },
    {
      icon: "currency_exchange", iconBg: "bg-amber-50", iconColor: "text-amber-700",
      title: "Licensing & Cost Optimisation",
      desc: "Oracle licensing true-up analysis, cloud spend right-sizing, and consolidation opportunities — typically yielding 20–40% cost reduction.",
      tag: "COST REDUCTION",
    },
  ],

  // ── Stages
  stagesLabel: "ENGAGEMENT PROCESS",
  stagesTitle: "How a Consulting Engagement Runs",
  stagesDescription:
    "A structured five-stage consulting methodology from initial discovery through to executive presentation and handover.",
  stages: [
    { stage: "STAGE 01", title: "Scoping Workshop",     desc: "Align on objectives, key stakeholders, available artefacts, and engagement boundaries.",      tag: "KICKOFF"    },
    { stage: "STAGE 02", title: "Discovery & Analysis", desc: "Interview stakeholders, audit systems, review licensing, and gather quantitative telemetry.", tag: "RESEARCH"   },
    { stage: "STAGE 03", title: "Options Modelling",    desc: "Develop 2–3 strategic scenarios with cost, risk, and benefit analysis for each path.",        tag: "MODELLING"  },
    { stage: "STAGE 04", title: "Roadmap Design",       desc: "Produce phased implementation plan with workstreams, milestones, and resource projections.",   tag: "DESIGN"     },
    { stage: "STAGE 05", title: "Executive Presentation",desc: "Board-ready presentation with investment cases, risk matrices, and next-step recommendations.",tag: "DELIVERY", highlight: true },
  ],

  // ── Metrics
  metrics: [
    { value: "20–40%", label: "Typical Licensing Cost Reduction", sub: "AUDIT-VERIFIED",        color: "text-cyan-300"    },
    { value: "48 Hrs",  label: "Initial Assessment Turnaround",    sub: "FROM FIRST CALL",       color: "text-white"       },
    { value: "100%",    label: "Vendor-Agnostic Recommendations",  sub: "NO VENDOR KICKBACKS",   color: "text-emerald-400" },
    { value: "C-Suite", label: "Stakeholder Engagement Level",     sub: "BOARD-READY OUTPUT",    color: "text-white"       },
  ],

  // ── Deliverables
  deliverablesLabel: "DELIVERABLES",
  deliverablesTitle: "Consulting Outputs",
  deliverables: [
    { icon: "assignment",     text: "Current-state architecture assessment report" },
    { icon: "route",          text: "Phased multi-year technology roadmap document" },
    { icon: "balance",        text: "Risk/reward matrix for each strategic option" },
    { icon: "receipt_long",   text: "Licensing audit and optimisation recommendation" },
    { icon: "presentation",   text: "Board-ready executive briefing deck" },
    { icon: "checklist",      text: "Implementation workplan with resource requirements" },
  ],

  // ── CTA
  ctaHeading: "Need an independent technology perspective?",
  ctaBody: "Our consulting practice is available for rapid-turnaround engagements. Initial scoping calls are complimentary — we will tell you within 30 minutes whether we can add value.",
  ctaPrimaryLabel: "Book a Consulting Session",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "View All Solutions",
  ctaSecondaryHref: "/solutions",
  ctaWatermarkIcon: "tips_and_updates",
};

export default function ConsultingPage() {
  return <DetailPage config={config} />;
}
