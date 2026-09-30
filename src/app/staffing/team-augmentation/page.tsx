import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import type { DetailPageConfig } from "@/components/detail/types";

export const metadata: Metadata = {
  title: "Team Augmentation | CData Systems — Project-Based Staffing Cohorts",
  description:
    "CData Systems deploys complete cross-functional engineering squads that integrate into your agile cycles within 5 business days — saving 3+ months of hiring time.",
  alternates: { canonical: "https://www.cdatasystems.com/staffing/team-augmentation" },
};

const config: DetailPageConfig = {
  // ── Meta
  parentLabel: "STAFFING",
  parentHref: "/staffing",
  num: "01",

  // ── Hero
  eyebrow: "PROJECT-BASED STAFFING",
  heading: "Team",
  headingAccent: "Augmentation",
  subheading:
    "Deploy complete, pre-vetted cross-functional squads — Architects, Full-Stack Engineers, QA Automation, and DevOps specialists — fully managed by CData Systems and integrated into your sprint cadence within 5 business days.",

  stats: [
    { label: "Deployment",   value: "5 Business Days", color: "text-secondary"   },
    { label: "Hiring Saved", value: "3+ Months",        color: "text-emerald-600" },
    { label: "Management",   value: "Fully Managed",    color: "text-secondary"   },
    { label: "Contract",     value: "Flexible T&M",     color: "text-cyan-600"    },
  ],

  sidebarCard: {
    title: "Cohort Composition",
    badge: "FULLY MANAGED",
    items: [
      { icon: "architecture",   iconColor: "text-secondary",    title: "Lead Architect",        desc: "Senior architect who owns technical decision-making and code quality." },
      { icon: "code",           iconColor: "text-cyan-600",     title: "Full-Stack Engineers",  desc: "2–4 senior engineers per cohort matched to your exact tech stack." },
      { icon: "bug_report",     iconColor: "text-emerald-600",  title: "QA Automation",         desc: "Dedicated QA engineers running unit, integration, and E2E test suites." },
      { icon: "terminal",       iconColor: "text-indigo-600",   title: "DevOps Specialist",     desc: "CI/CD, infrastructure-as-code, and environment management." },
    ],
    footerLinkLabel: "REQUEST A TEAM PROFILE",
    footerLinkHref: "/contact",
  },

  // ── Overview
  overviewLabel: "MODEL OVERVIEW",
  overviewTitle: "A Complete Squad, Ready in Days",
  overviewParagraphs: [
    "Building an engineering team from scratch takes months — job boards, interviews, notice periods, onboarding, and ramp-up time compound into a timeline that delays product delivery and costs revenue. Team Augmentation collapses that timeline to days by deploying a complete, pre-assembled squad from our active talent bench.",
    "Every cohort is managed end-to-end by CData Systems. We handle day-to-day engineering leadership, sprint planning participation, code review cadence, and technical accountability — giving you the output of a senior team without the overhead of managing it yourself.",
  ],

  // ── Features
  featuresLabel: "COHORT CAPABILITIES",
  featuresTitle: "What a Cohort Delivers",
  featuresColumns: 3,
  features: [
    {
      icon: "rocket_launch", iconBg: "bg-blue-50", iconColor: "text-secondary",
      title: "Sprint-Ready from Day 5",
      desc: "Cohorts are briefed, environment-provisioned, and committing production-quality code within 5 business days of contract signature.",
      tag: "RAPID ONBOARD",
    },
    {
      icon: "verified_user", iconBg: "bg-cyan-50", iconColor: "text-cyan-700",
      title: "Pre-Vetted Senior Talent",
      desc: "Every cohort member has cleared our 3-stage technical vetting: code audit, live architectural defense, and candor evaluation.",
      tag: "QUALITY ASSURED",
    },
    {
      icon: "groups", iconBg: "bg-emerald-50", iconColor: "text-emerald-700",
      title: "Agile-Native Integration",
      desc: "Cohorts participate in your standups, sprint reviews, and retrospectives — no separate management overhead required from your side.",
      tag: "AGILE FIT",
    },
    {
      icon: "tune", iconBg: "bg-indigo-50", iconColor: "text-indigo-700",
      title: "Stack-Matched Composition",
      desc: "We assemble cohorts around your specific stack — from Oracle EBS and Java backends to React frontends, Kubernetes, and cloud-native environments.",
      tag: "STACK MATCH",
    },
    {
      icon: "swap_horiz", iconBg: "bg-amber-50", iconColor: "text-amber-700",
      title: "Elastic Scaling",
      desc: "Scale the cohort up or down with 5-day notice as project phases demand — no long-term headcount commitments or redundancy liability.",
      tag: "ELASTIC",
    },
    {
      icon: "lock", iconBg: "bg-rose-50", iconColor: "text-rose-700",
      title: "IP & NDA Protected",
      desc: "All cohort members operate under comprehensive NDA and IP assignment agreements. Your code remains your property, always.",
      tag: "PROTECTED",
    },
  ],

  // ── Stages
  stagesLabel: "DEPLOYMENT PROCESS",
  stagesTitle: "From Brief to Sprint in 5 Days",
  stagesDescription:
    "Our structured onboarding process guarantees a productive cohort from the moment the contract is signed.",
  stages: [
    { stage: "DAY 1",   title: "Requirement Brief",       desc: "We capture your stack, sprint velocity targets, team culture, and specific skill requirements.",            tag: "SCOPING"   },
    { stage: "DAY 2",   title: "Cohort Assembly",          desc: "Profiles from our active bench are matched and presented for your optional approval.",                  tag: "MATCHING"  },
    { stage: "DAY 3",   title: "Environment Setup",        desc: "Access provisioning, toolchain configuration, repo access, and CI/CD pipeline orientation.",           tag: "SETUP"     },
    { stage: "DAY 4",   title: "Codebase Orientation",     desc: "Cohort technical lead reviews existing architecture, identifies quick wins and risk areas.",            tag: "REVIEW"    },
    { stage: "DAY 5",   title: "First Sprint Commitment",  desc: "Cohort participates in sprint planning and delivers first story-point commitments by end of day.", tag: "ACTIVE", highlight: true },
  ],

  // ── Metrics
  metrics: [
    { value: "5 Days",   label: "To First Code Commit",      sub: "FROM CONTRACT SIGNATURE",  color: "text-cyan-300"    },
    { value: "3+ Mo.",   label: "Hiring Time Saved",          sub: "VS. DIRECT RECRUITMENT",  color: "text-white"       },
    { value: "100%",     label: "Cohorts Pass Vetting",       sub: "3-STAGE AUDIT PROCESS",   color: "text-emerald-400" },
    { value: "90 Days",  label: "Retention Warranty",         sub: "REPLACEMENT GUARANTEED",  color: "text-white"       },
  ],

  // ── Deliverables
  deliverablesLabel: "WHAT YOU GET",
  deliverablesTitle: "Included in Every Cohort",
  deliverables: [
    { icon: "groups",          text: "A fully assembled, role-balanced engineering squad" },
    { icon: "verified_user",   text: "Pre-vetted talent — all cleared our 3-stage vetting process" },
    { icon: "rocket_launch",   text: "Sprint participation from Day 5 of contract" },
    { icon: "support_agent",   text: "CData Systems technical lead managing day-to-day quality" },
    { icon: "description",     text: "Weekly status reports and sprint velocity dashboards" },
    { icon: "lock",            text: "Full NDA and IP assignment agreements for all members" },
    { icon: "sync",            text: "Elastic scaling — add or remove members with 5-day notice" },
    { icon: "verified",        text: "90-day talent replacement warranty" },
  ],

  // ── CTA
  ctaHeading: "Ready to deploy a team this week?",
  ctaBody:
    "Describe your engineering gap and tech stack. We will present a matched cohort profile within 24 hours — no long recruitment cycles, no agency markup.",
  ctaPrimaryLabel: "Request a Team Profile",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "View All Staffing",
  ctaSecondaryHref: "/staffing",
  ctaWatermarkIcon: "groups",
};

export default function TeamAugmentationPage() {
  return <DetailPage config={config} />;
}
