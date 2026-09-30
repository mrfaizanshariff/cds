"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "devices",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
    title: "Application Development",
    desc: "Scalable full-stack multi-tier applications engineered with enterprise-grade framework standards.",
    tag: "FRONTEND & BACKEND",
    num: "01",
    wide: false,
  },
  {
    icon: "code_blocks",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    title: "Custom Software",
    desc: "Tailored workflow engines and proprietary software solutions designed around specialized domain needs.",
    tag: "BESPOKE IP",
    num: "02",
    wide: false,
  },
  {
    icon: "corporate_fare",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    title: "Oracle E-Business Suite",
    desc: "Comprehensive Oracle EBS deployment, workflow customization, patches, and lifecycle upgrades.",
    tag: "ERP & FINANCIALS",
    num: "03",
    wide: false,
  },
  {
    icon: "terminal",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    title: "Platform Engineering",
    desc: "CI/CD automation, internal developer platforms, container meshes, and orchestrated build pipelines.",
    tag: "DEVOPS MESH",
    num: "04",
    wide: false,
  },
  {
    icon: "shield_locked",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    title: "Backup & Recovery",
    desc: "Zero-data-loss immutable air-gapped backups, automated disaster recovery testing, and sub-15m RTO.",
    tag: "DISASTER DEFENSE",
    num: "05",
    wide: false,
  },
  {
    icon: "storage",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-700",
    title: "Storage Engineering",
    desc: "High-throughput SAN/NAS architecture, NVMe over Fabric, tiering, and EMC/NetApp optimization.",
    tag: "SAN / NAS FABRIC",
    num: "06",
    wide: false,
  },
  {
    icon: "move_up",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    title: "Data Center Migration",
    desc: "Zero-transaction loss physical-to-virtual and on-premises to cloud enterprise lift-and-shift programs.",
    tag: "ZERO-DOWNTIME",
    num: "07",
    wide: false,
  },
  {
    icon: "database",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    title: "DBA Services",
    desc: "24/7/365 active database administration, SQL query tuning, partitioning, and Oracle RAC support.",
    tag: "ORACLE 19c / SQL",
    num: "08",
    wide: false,
  },
  {
    icon: "cloud",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-700",
    title: "Cloud Infrastructure",
    desc: "Hybrid cloud topology design spanning Oracle Cloud (OCI), AWS, and Azure with unified governance.",
    tag: "MULTI-CLOUD OCI",
    num: "09",
    wide: false,
  },
  {
    icon: "hub",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    title: "System Integration",
    desc: "API fabric connecting legacy mainframes, ERP backbones, and third-party SaaS environments securely.",
    tag: "API & MIDDLEWARE",
    num: "10",
    wide: false,
  },
];

const competencies = [
  {
    dot: "bg-red-500",
    category: "Certified Core",
    title: "Oracle EBS",
    desc: "Full-stack implementation of E-Business Suite 12.1 and 12.2, Financials, SCM, and HRMS with zero custom disruption.",
    badge: "Oracle Platinum Framework",
  },
  {
    dot: "bg-blue-600",
    category: "Storage Fabric",
    title: "EMC Storage",
    desc: "PowerStore, PowerMax, and Isilon enterprise SAN/NAS configurations for low-latency database throughput.",
    badge: "Petabyte-Scale Tuning",
  },
  {
    dot: "bg-amber-500",
    category: "Protection",
    title: "Symantec Backup",
    desc: "NetBackup and Veritas enterprise data protection architectures configured for immutable air-gapped snapshots.",
    badge: "Immutable Vaults",
  },
  {
    dot: "bg-emerald-500",
    category: "Data Engineering",
    title: "Data Management",
    desc: "Enterprise data governance, master data management (MDM), schema normalization, and lifecycle archiving policies.",
    badge: "Compliance-Ready",
  },
  {
    dot: "bg-purple-500",
    category: "Hardware & OS",
    title: "Infrastructure Upgrades",
    desc: "Compute, memory, and hypervisor uplift for legacy blade systems into virtualized software-defined infrastructure.",
    badge: "Zero-Drop Execution",
  },
  {
    dot: "bg-cyan-500",
    category: "Uptime Spec",
    title: "High Availability",
    desc: "Clustered failover nodes, multi-region active-active topologies, and automated DNS failover with five-nines reliability.",
    badge: "99.999% Fault Tolerance",
  },
  {
    dot: "bg-indigo-500",
    category: "Execution Plan",
    title: "Database Tuning",
    desc: "AWR report analysis, index optimization, parallel execution profiling, and PGA/SGA memory right-sizing.",
    badge: "Sub-Second Execution",
  },
  {
    dot: "bg-teal-500",
    category: "Fabric Mesh",
    title: "Software Integration",
    desc: "Enterprise Service Bus (ESB), event streaming with Kafka, and RESTful microservice gateways connecting core databases.",
    badge: "Unified Middleware",
  },
];

const assessmentStages = [
  {
    stage: "STAGE 01",
    title: "Infrastructure Audit",
    desc: "Comprehensive discovery scan across on-premises, virtual, and cloud workloads.",
    tag: "DIAGNOSTIC",
    highlight: false,
  },
  {
    stage: "STAGE 02",
    title: "HW & SW Evaluation",
    desc: "Life-cycle assessment, warranty status, licensing true-up analysis, and EOL risks.",
    tag: "BENCHMARK",
    highlight: false,
  },
  {
    stage: "STAGE 03",
    title: "Upgrade Planning",
    desc: "Sequenced phased roadmap to eliminate operational downtime and mitigate cutover risks.",
    tag: "ROADMAP",
    highlight: false,
  },
  {
    stage: "STAGE 04",
    title: "Security & Backup",
    desc: "Zero-trust perimeter review, ransomware defenses, and RPO/RTO verification.",
    tag: "AIR-GAP SPEC",
    highlight: false,
  },
  {
    stage: "STAGE 05",
    title: "Storage & DC",
    desc: "SAN fabric rightsizing, IOPS bottleneck analysis, and rack density efficiency.",
    tag: "TOPOLOGY",
    highlight: false,
  },
  {
    stage: "STAGE 06",
    title: "Scalability Analysis",
    desc: "Stress-load headroom projection for 3 to 5 year corporate transactional growth.",
    tag: "EXPANSION",
    highlight: false,
  },
  {
    stage: "STAGE 07",
    title: "Systems Optimization",
    desc: "Execution plan handover with verified SLA metrics and continuous monitoring hooks.",
    tag: "EXCELLENCE",
    highlight: true,
  },
];

type Tab = "services" | "competencies" | "assessment";

const tabs: { id: Tab; icon: string; label: string }[] = [
  { id: "services", icon: "apps", label: "Tab 1: Enterprise Services (11)" },
  { id: "competencies", icon: "memory", label: "Tab 2: Technology Competencies" },
  { id: "assessment", icon: "route", label: "Tab 3: Infrastructure Assessment & Consulting" },
];

export default function CapabilityMatrix() {
  const [activeTab, setActiveTab] = useState<Tab>("services");
  const headingRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Animate heading on mount (scroll trigger)
  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    }
    if (tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, delay: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: tabsRef.current, start: "top 90%", toggleActions: "play none none none" },
        }
      );
    }
  }, []);

  // Animate panel cards whenever the active tab changes
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const cards = Array.from(panel.querySelectorAll<HTMLElement>("[data-card]"));
    if (!cards.length) return;
    gsap.fromTo(
      cards,
      { y: 28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.06, ease: "power3.out", clearProps: "opacity,transform" }
    );
  }, [activeTab]);

  return (
    <section
      id="capability-matrix"
      className="w-full py-20 bg-white border-y border-outline-variant/50 cyber-dot-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              INTERACTIVE CAPABILITY MATRIX
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
              Enterprise Capability Bento
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2 max-w-2xl">
              Inspect our comprehensive services portfolio, certified technical competencies, and
              battle-tested 7-stage infrastructure assessment roadmap.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block">MATRIX CODE: CDATA-CORE-V2</div>
        </div>

        {/* Tab Buttons */}
        <div ref={tabsRef} className="flex flex-wrap items-center gap-2.5 mb-8 pb-3 border-b border-outline-variant/40" style={{ opacity: 0 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center gap-2 ${
                activeTab === t.id
                  ? "bg-primary text-white border-primary shadow-[0_4px_14px_-2px_rgba(7,21,39,0.2)]"
                  : "bg-white text-on-surface-variant border-outline-variant/60 hover:text-secondary"
              }`}
            >
              <span className="material-symbols-outlined text-base">{t.icon}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Panel: Services */}
        {activeTab === "services" && (
          <div ref={panelRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s) => (
              <div
                data-card
                key={s.num}
                className="spatial-card spatial-card-hover rounded-2xl p-5 border border-outline-variant/60 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${s.iconBg} ${s.iconColor} flex items-center justify-center mb-3`}
                  >
                    <span className="material-symbols-outlined text-xl">{s.icon}</span>
                  </div>
                  <h3 className="font-headline font-semibold text-base text-primary mb-1">{s.title}</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono text-outline">
                  <span>{s.tag}</span>
                  <span className="text-secondary">{s.num}</span>
                </div>
              </div>
            ))}

            {/* Service 11 — wide card */}
            <div data-card className="spatial-card spatial-card-hover rounded-2xl p-5 border border-outline-variant/60 flex flex-col justify-between sm:col-span-2 xl:col-span-2 bg-gradient-to-r from-white to-blue-50/40">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-xl">support_agent</span>
                  </div>
                  <h3 className="font-headline font-semibold text-base text-primary mb-1">
                    IT Support &amp; Managed Operations
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-lg">
                    Tier 1 to Tier 3 engineering escalation desks, telemetry monitoring, patching cadences,
                    and mission-critical 15-minute response SLAs.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary text-white font-headline text-xs font-semibold hover:bg-secondary-container transition-all self-start sm:self-center shrink-0"
                >
                  <span>Inquire Support SLA</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono text-outline">
                <span>24/7/365 GLOBAL COMMAND</span>
                <span className="text-secondary font-bold">11 / 11 COMPLETE</span>
              </div>
            </div>
          </div>
        )}

        {/* Panel: Competencies */}
        {activeTab === "competencies" && (
          <div ref={panelRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((c) => (
              <div
                data-card
                key={c.title}
                className="spatial-card rounded-2xl p-6 border border-outline-variant/60"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`w-3 h-3 rounded-full ${c.dot}`} />
                  <span className="font-mono text-[10px] text-outline uppercase">{c.category}</span>
                </div>
                <h4 className="font-headline font-bold text-lg text-primary mb-2">{c.title}</h4>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-4">{c.desc}</p>
                <div className="font-mono text-[11px] text-secondary font-medium">{c.badge}</div>
              </div>
            ))}
          </div>
        )}

        {/* Panel: Assessment */}
        {activeTab === "assessment" && (
          <div ref={panelRef} className="spatial-card rounded-3xl p-6 sm:p-10 border border-outline-variant/60">
            <div className="mb-8">
              <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-widest">
                ROADMAP METHODOLOGY
              </span>
              <h3 className="font-headline text-2xl font-bold text-primary mt-1">
                7-Stage Assessment &amp; Consulting Framework
              </h3>
              <p className="font-sans text-sm text-on-surface-variant mt-2 max-w-3xl">
                A structured, diagnostic-first assessment engineered to identify performance bottlenecks,
                eliminate licensing bloat, and blueprint a future-proof infrastructure state.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {assessmentStages.map((s) => (
                <div
                  data-card
                  key={s.stage}
                  className={`p-4 rounded-xl border flex flex-col justify-between ${
                    s.highlight
                      ? "bg-blue-50 border-blue-200"
                      : "bg-surface-container-low border-outline-variant/40"
                  }`}
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-secondary">{s.stage}</span>
                    <h4 className="font-headline font-semibold text-sm text-primary mt-2">{s.title}</h4>
                    <p className="font-sans text-[11px] text-on-surface-variant mt-1.5 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className={`mt-4 font-mono text-[10px] font-bold ${
                      s.highlight ? "text-secondary" : "text-outline"
                    }`}
                  >
                    {s.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
