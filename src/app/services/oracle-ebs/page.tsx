import type { Metadata } from "next";
import DetailPage from "@/components/detail/DetailPage";
import type { DetailPageConfig } from "@/components/detail/types";

export const metadata: Metadata = {
  title: "Oracle E-Business Suite | CData Systems — ERP Implementation & Support",
  description:
    "CData Systems delivers end-to-end Oracle E-Business Suite 12.1 & 12.2 implementations, customisations, DBA support, and lifecycle upgrades for enterprise environments.",
  alternates: { canonical: "https://www.cdatasystems.com/services/oracle-ebs" },
};

const config: DetailPageConfig = {
  // ── Meta
  parentLabel: "SERVICES",
  parentHref: "/services",
  num: "03",

  // ── Hero
  eyebrow: "ERP & FINANCIALS PLATFORM",
  heading: "Oracle E-Business",
  headingAccent: "Suite",
  subheading:
    "Full-lifecycle Oracle EBS implementation, customisation, DBA support, and zero-downtime upgrades. CData Systems has deployed and maintained Oracle EBS across Financials, SCM, HRMS, and Manufacturing for two decades.",

  stats: [
    { label: "EBS Versions",    value: "12.1 & 12.2", color: "text-secondary" },
    { label: "Modules",         value: "All Pillars",  color: "text-secondary" },
    { label: "Uptime Target",   value: "99.999%",      color: "text-emerald-600" },
    { label: "Patch Cadence",   value: "Zero-Drop",    color: "text-secondary" },
  ],

  sidebarCard: {
    title: "EBS Delivery Model",
    badge: "ORACLE CERTIFIED",
    items: [
      { icon: "inventory",       iconColor: "text-secondary",    title: "Full Implementation",   desc: "Discovery, setup, data migration, UAT and go-live support." },
      { icon: "build",           iconColor: "text-cyan-600",     title: "Customisation & Ext.",  desc: "RICE objects, personalisation, and workflow engine tuning." },
      { icon: "database",        iconColor: "text-emerald-600",  title: "DBA & Patch Management",desc: "Oracle RAC, AWR tuning, and automated patch pipeline." },
    ],
    footerLinkLabel: "SCHEDULE AN EBS BRIEFING",
    footerLinkHref: "/contact",
  },

  // ── Overview
  overviewLabel: "PLATFORM OVERVIEW",
  overviewTitle: "Enterprise ERP at Mission-Critical Scale",
  overviewParagraphs: [
    "Oracle E-Business Suite remains the backbone of financial operations, supply chain, and human resources for thousands of enterprise organisations worldwide. CData Systems holds two decades of production experience across every major EBS pillar — from Financials and SCM to HRMS and Manufacturing.",
    "Our certified architects approach every engagement with a diagnostic-first methodology: understanding your current state, identifying performance bottlenecks, and designing a phased roadmap that maximises uptime and minimises business disruption. Whether you are implementing greenfield, upgrading from 11i to R12, or extending an existing suite with custom RICE objects, we deliver.",
  ],

  // ── Features
  featuresLabel: "CORE CAPABILITIES",
  featuresTitle: "What We Deliver",
  featuresColumns: 3,
  features: [
    {
      icon: "account_balance",
      iconBg: "bg-blue-50", iconColor: "text-secondary",
      title: "Financials (GL, AP, AR, FA)",
      desc: "General Ledger, Payables, Receivables, and Fixed Assets fully configured to your chart of accounts and reporting hierarchy.",
      tag: "FINANCIALS",
    },
    {
      icon: "inventory_2",
      iconBg: "bg-cyan-50", iconColor: "text-cyan-700",
      title: "Supply Chain Management",
      desc: "Order Management, Inventory, Purchasing, and Advanced Planning modules configured for multi-org enterprise topology.",
      tag: "SCM",
    },
    {
      icon: "badge",
      iconBg: "bg-emerald-50", iconColor: "text-emerald-700",
      title: "HRMS & Payroll",
      desc: "Human Resources, Payroll, and Self-Service implementations with legislative compliance for US, UK, and APAC.",
      tag: "HRMS",
    },
    {
      icon: "factory",
      iconBg: "bg-indigo-50", iconColor: "text-indigo-700",
      title: "Manufacturing (WIP / BOM)",
      desc: "Work In Process, Bill of Materials, Cost Management, and MES integrations for discrete and process manufacturing.",
      tag: "MFG",
    },
    {
      icon: "database",
      iconBg: "bg-amber-50", iconColor: "text-amber-700",
      title: "DBA & Performance Tuning",
      desc: "24/7 Oracle RAC administration, AWR report analysis, index optimisation, and PGA/SGA right-sizing.",
      tag: "DATABASE",
    },
    {
      icon: "autorenew",
      iconBg: "bg-rose-50", iconColor: "text-rose-700",
      title: "Upgrades & Patch Management",
      desc: "Zero-downtime patch pipelines, R12.2 online patching (ADOP), and lifecycle upgrade playbooks from 11i to R12.2.",
      tag: "UPGRADES",
    },
  ],

  // ── Stages
  stagesLabel: "DELIVERY METHODOLOGY",
  stagesTitle: "Our EBS Engagement Process",
  stagesDescription:
    "A structured seven-stage approach that minimises risk from initial discovery through to steady-state managed operations.",
  stages: [
    { stage: "STAGE 01", title: "Environment Audit",       desc: "Current-state discovery across modules, customisations, integrations, and patch levels.",             tag: "DIAGNOSTIC"   },
    { stage: "STAGE 02", title: "Architecture Blueprint",  desc: "Phased implementation roadmap, hardware sizing, and multi-org structure design.",                    tag: "DESIGN"       },
    { stage: "STAGE 03", title: "Data Migration",          desc: "Legacy data cleansing, transformation scripts, and reconciled load into EBS staging tables.",         tag: "MIGRATION"    },
    { stage: "STAGE 04", title: "Config & RICE Objects",   desc: "Module configuration, Reports, Interfaces, Conversions, Extensions, and Workflow customisation.",     tag: "BUILD"        },
    { stage: "STAGE 05", title: "UAT & Integration Testing", desc: "User acceptance cycles, performance benchmark testing, and third-party integration validation.",   tag: "TESTING"      },
    { stage: "STAGE 06", title: "Go-Live & Cutover",       desc: "Zero-downtime cutover plan, hyper-care support team on standby, and first-close monitoring.",         tag: "DEPLOYMENT"   },
    { stage: "STAGE 07", title: "Managed Operations",      desc: "Post-go-live DBA support, patch management, and continuous performance optimisation.",                tag: "MANAGED OPS", highlight: true },
  ],

  // ── Metrics
  metrics: [
    { value: "20+",    label: "Years Oracle Experience",  sub: "PRODUCTION LINEAGE",         color: "text-white"   },
    { value: "99.999%",label: "Availability Target",      sub: "FAULT-TOLERANT ARCHITECTURE",color: "text-cyan-300"},
    { value: "<15 Min",label: "RTO on DR Events",         sub: "AIR-GAPPED RECOVERY",        color: "text-emerald-400" },
    { value: "0",      label: "Unplanned Downtime Patches",sub: "ADOP ONLINE PATCHING",      color: "text-white"   },
  ],

  // ── Deliverables
  deliverablesLabel: "DELIVERABLES",
  deliverablesTitle: "What You Receive",
  deliverables: [
    { icon: "description",          text: "Architecture blueprint & multi-org design document" },
    { icon: "table_chart",          text: "Data migration scripts with full reconciliation report" },
    { icon: "verified",             text: "Configured EBS instance (all contracted modules)" },
    { icon: "schema",               text: "Custom RICE objects and workflow definitions" },
    { icon: "integration_instructions", text: "Third-party integration specifications & API contracts" },
    { icon: "summarize",            text: "UAT sign-off report and performance benchmark results" },
    { icon: "support_agent",        text: "Post go-live hyper-care support (30 days minimum)" },
    { icon: "book",                 text: "DBA runbook and patch management SOP documentation" },
  ],

  // ── CTA
  ctaHeading: "Ready to modernise your Oracle EBS environment?",
  ctaBody:
    "Our Oracle-certified architects will review your current EBS landscape, identify risks, and produce a phased upgrade or migration plan — at no obligation.",
  ctaPrimaryLabel: "Schedule an EBS Briefing",
  ctaPrimaryHref: "/contact",
  ctaSecondaryLabel: "View All Services",
  ctaSecondaryHref: "/services",
  ctaWatermarkIcon: "corporate_fare",
};

export default function OracleEBSPage() {
  return <DetailPage config={config} />;
}
