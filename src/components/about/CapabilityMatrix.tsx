"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "devices",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.3)",
    title: "Application Development",
    desc: "Scalable full-stack multi-tier applications engineered with enterprise-grade framework standards.",
    tag: "FRONTEND & BACKEND",
    num: "01",
  },
  {
    icon: "code_blocks",
    gradient: "from-cyan-500 to-blue-600",
    glow: "rgba(0,212,255,0.3)",
    title: "Custom Software",
    desc: "Tailored workflow engines and proprietary software solutions designed around specialized domain needs.",
    tag: "BESPOKE IP",
    num: "02",
  },
  {
    icon: "corporate_fare",
    gradient: "from-indigo-500 to-purple-600",
    glow: "rgba(99,102,241,0.3)",
    title: "Oracle E-Business Suite",
    desc: "Comprehensive Oracle EBS deployment, workflow customization, patches, and lifecycle upgrades.",
    tag: "ERP & FINANCIALS",
    num: "03",
  },
  {
    icon: "terminal",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.3)",
    title: "Platform Engineering",
    desc: "CI/CD automation, internal developer platforms, container meshes, and orchestrated build pipelines.",
    tag: "DEVOPS MESH",
    num: "04",
  },
  {
    icon: "shield_locked",
    gradient: "from-amber-500 to-orange-600",
    glow: "rgba(245,158,11,0.3)",
    title: "Backup & Recovery",
    desc: "Zero-data-loss immutable air-gapped backups, automated disaster recovery testing, and sub-15m RTO.",
    tag: "DISASTER DEFENSE",
    num: "05",
  },
  {
    icon: "storage",
    gradient: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.3)",
    title: "Storage Engineering",
    desc: "High-throughput SAN/NAS architecture, NVMe over Fabric, tiering, and EMC/NetApp optimization.",
    tag: "SAN / NAS FABRIC",
    num: "06",
  },
  {
    icon: "move_up",
    gradient: "from-purple-500 to-fuchsia-600",
    glow: "rgba(168,85,247,0.3)",
    title: "Data Center Migration",
    desc: "Zero-transaction loss physical-to-virtual and on-premises to cloud enterprise lift-and-shift programs.",
    tag: "ZERO-DOWNTIME",
    num: "07",
  },
  {
    icon: "database",
    gradient: "from-teal-500 to-cyan-600",
    glow: "rgba(20,184,166,0.3)",
    title: "DBA Services",
    desc: "24/7/365 active database administration, SQL query tuning, partitioning, and Oracle RAC support.",
    tag: "ORACLE 19c / SQL",
    num: "08",
  },
  {
    icon: "cloud",
    gradient: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.3)",
    title: "Cloud Infrastructure",
    desc: "Hybrid cloud topology design spanning Oracle Cloud (OCI), AWS, and Azure with unified governance.",
    tag: "MULTI-CLOUD OCI",
    num: "09",
  },
  {
    icon: "hub",
    gradient: "from-blue-500 to-violet-600",
    glow: "rgba(139,92,246,0.3)",
    title: "System Integration",
    desc: "API fabric connecting legacy mainframes, ERP backbones, and third-party SaaS environments securely.",
    tag: "API & MIDDLEWARE",
    num: "10",
  },
];

const competencies = [
  {
    gradient: "from-red-500 to-rose-600",
    category: "Certified Core",
    title: "Oracle EBS",
    desc: "Full-stack implementation of E-Business Suite 12.1 and 12.2, Financials, SCM, and HRMS with zero custom disruption.",
    badge: "Oracle Platinum Framework",
  },
  {
    gradient: "from-blue-600 to-indigo-700",
    category: "Storage Fabric",
    title: "EMC Storage",
    desc: "PowerStore, PowerMax, and Isilon enterprise SAN/NAS configurations for low-latency database throughput.",
    badge: "Petabyte-Scale Tuning",
  },
  {
    gradient: "from-amber-500 to-orange-600",
    category: "Protection",
    title: "Symantec Backup",
    desc: "NetBackup and Veritas enterprise data protection architectures configured for immutable air-gapped snapshots.",
    badge: "Immutable Vaults",
  },
  {
    gradient: "from-emerald-500 to-teal-600",
    category: "Data Engineering",
    title: "Data Management",
    desc: "Enterprise data governance, master data management (MDM), schema normalization, and lifecycle archiving policies.",
    badge: "Compliance-Ready",
  },
  {
    gradient: "from-purple-500 to-violet-600",
    category: "Hardware & OS",
    title: "Infrastructure Upgrades",
    desc: "Compute, memory, and hypervisor uplift for legacy blade systems into virtualized software-defined infrastructure.",
    badge: "Zero-Drop Execution",
  },
  {
    gradient: "from-cyan-500 to-sky-600",
    category: "Uptime Spec",
    title: "High Availability",
    desc: "Clustered failover nodes, multi-region active-active topologies, and automated DNS failover with five-nines reliability.",
    badge: "99.999% Fault Tolerance",
  },
  {
    gradient: "from-indigo-500 to-blue-600",
    category: "Execution Plan",
    title: "Database Tuning",
    desc: "AWR report analysis, index optimization, parallel execution profiling, and PGA/SGA memory right-sizing.",
    badge: "Sub-Second Execution",
  },
  {
    gradient: "from-teal-500 to-emerald-600",
    category: "Fabric Mesh",
    title: "Software Integration",
    desc: "Enterprise Service Bus (ESB), event streaming with Kafka, and RESTful microservice gateways connecting core databases.",
    badge: "Unified Middleware",
  },
];

const assessmentStages = [
  {
    stage: "01",
    title: "Infrastructure Audit",
    desc: "Comprehensive discovery scan across on-premises, virtual, and cloud workloads.",
    tag: "DIAGNOSTIC",
    highlight: false,
  },
  {
    stage: "02",
    title: "HW & SW Evaluation",
    desc: "Life-cycle assessment, warranty status, licensing true-up analysis, and EOL risks.",
    tag: "BENCHMARK",
    highlight: false,
  },
  {
    stage: "03",
    title: "Upgrade Planning",
    desc: "Sequenced phased roadmap to eliminate operational downtime and mitigate cutover risks.",
    tag: "ROADMAP",
    highlight: false,
  },
  {
    stage: "04",
    title: "Security & Backup",
    desc: "Zero-trust perimeter review, ransomware defenses, and RPO/RTO verification.",
    tag: "AIR-GAP",
    highlight: false,
  },
  {
    stage: "05",
    title: "Storage & DC",
    desc: "SAN fabric rightsizing, IOPS bottleneck analysis, and rack density efficiency.",
    tag: "TOPOLOGY",
    highlight: false,
  },
  {
    stage: "06",
    title: "Scalability Analysis",
    desc: "Stress-load headroom projection for 3 to 5 year corporate transactional growth.",
    tag: "EXPANSION",
    highlight: false,
  },
  {
    stage: "07",
    title: "Systems Optimization",
    desc: "Execution plan handover with verified SLA metrics and continuous monitoring hooks.",
    tag: "EXCELLENCE",
    highlight: true,
  },
];

type Tab = "services" | "competencies" | "assessment";

const tabs: { id: Tab; icon: string; label: string; count: string }[] = [
  { id: "services",      icon: "apps",    label: "Enterprise Services",          count: "11" },
  { id: "competencies",  icon: "memory",  label: "Technology Competencies",      count: "8"  },
  { id: "assessment",    icon: "route",   label: "Infrastructure Assessment",    count: "7"  },
];

export default function CapabilityMatrix() {
  const [activeTab, setActiveTab] = useState<Tab>("services");
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const tabsBarRef  = useRef<HTMLDivElement>(null);
  const panelRef    = useRef<HTMLDivElement>(null);
  const orb1Ref     = useRef<HTMLDivElement>(null);
  const orb2Ref     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      // Parallax orbs
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          yPercent: -28,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.5 },
        });
      }
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          yPercent: 22,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2 },
        });
      }

      if (headingRef.current) {
        gsap.fromTo(headingRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: headingRef.current, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      }
      if (tabsBarRef.current) {
        gsap.fromTo(tabsBarRef.current,
          { y: 18, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.65, delay: 0.15, ease: "power2.out",
            scrollTrigger: { trigger: tabsBarRef.current, start: "top 90%", toggleActions: "play none none none" },
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Animate panel cards on tab switch
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const cards = Array.from(panel.querySelectorAll<HTMLElement>("[data-card]"));
    if (!cards.length) return;
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.55, stagger: 0.055, ease: "power3.out", clearProps: "opacity,transform" }
    );
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="capability-matrix"
      className="relative w-full py-24 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 55% 40% at 5% 20%, rgba(59,130,246,0.06) 0%, transparent 60%), radial-gradient(ellipse 50% 35% at 95% 80%, rgba(0,212,255,0.07) 0%, transparent 55%), #f5f7fb",
      }}
    >
      {/* Parallax orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-[-100px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.09) 0%, transparent 70%)", filter: "blur(80px)" }}
        aria-hidden="true"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(70px)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-semibold text-blue-600 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              CAPABILITY MATRIX
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#040810] mt-1 tracking-tight">
              Enterprise Services Portfolio
            </h2>
            <p className="font-sans text-base text-[#526382] mt-2 max-w-2xl">
              Inspect our comprehensive services portfolio, certified technical competencies, and
              battle-tested 7-stage infrastructure assessment roadmap.
            </p>
          </div>
          <div className="font-mono text-xs text-[#7b8fa8] hidden md:block">MATRIX CODE: CDATA-CORE-V2</div>
        </div>

        {/* Tab Buttons */}
        <div ref={tabsBarRef} className="flex flex-wrap items-center gap-2.5 mb-8" style={{ opacity: 0 }}>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-250 flex items-center gap-2 cursor-pointer border ${
                activeTab === t.id
                  ? "text-white border-transparent shadow-lg"
                  : "bg-white/80 text-[#526382] border-blue-100/60 hover:text-[#040810] hover:border-blue-200"
              }`}
              style={
                activeTab === t.id
                  ? { background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 4px 18px -4px rgba(59,130,246,0.4)" }
                  : {}
              }
            >
              <span className="material-symbols-outlined text-base">{t.icon}</span>
              <span>{t.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                  activeTab === t.id ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                }`}
              >
                {t.count}
              </span>
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
                className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Gradient top strip */}
                  <div
                    className="w-full h-0.5 rounded-full mb-4 opacity-60"
                    style={{ background: `linear-gradient(90deg, ${s.glow.replace("0.3", "0.8")}, transparent)` }}
                  />
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-3`}
                    style={{ boxShadow: `0 4px 14px -2px ${s.glow}` }}
                  >
                    <span className="material-symbols-outlined text-white text-xl">{s.icon}</span>
                  </div>
                  <h3 className="font-headline font-semibold text-base text-[#040810] mb-1">{s.title}</h3>
                  <p className="font-sans text-xs text-[#526382] leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-50 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#7b8fa8]">{s.tag}</span>
                  <span className="text-blue-500 font-bold">{s.num}</span>
                </div>
              </div>
            ))}

            {/* Service 11 — wide card */}
            <div
              data-card
              className="glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between sm:col-span-2 xl:col-span-2 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 70% 50% at 80% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)" }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div
                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-3"
                    style={{ boxShadow: "0 4px 14px -2px rgba(0,212,255,0.3)" }}
                  >
                    <span className="material-symbols-outlined text-white text-xl">support_agent</span>
                  </div>
                  <h3 className="font-headline font-semibold text-base text-[#040810] mb-1">
                    IT Support &amp; Managed Operations
                  </h3>
                  <p className="font-sans text-xs text-[#526382] leading-relaxed max-w-lg">
                    Tier 1 to Tier 3 engineering escalation desks, telemetry monitoring, patching cadences,
                    and mission-critical 15-minute response SLAs.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-headline text-xs font-semibold hover:-translate-y-0.5 transition-all self-start sm:self-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #3b82f6, #6366f1)", boxShadow: "0 4px 14px -4px rgba(59,130,246,0.4)" }}
                >
                  <span>Inquire Support SLA</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
              <div className="relative mt-4 pt-3 border-t border-blue-50 flex items-center justify-between text-[11px] font-mono">
                <span className="text-[#7b8fa8]">24/7/365 GLOBAL COMMAND</span>
                <span className="text-blue-500 font-bold">11 / 11 COMPLETE</span>
              </div>
            </div>
          </div>
        )}

        {/* Panel: Competencies */}
        {activeTab === "competencies" && (
          <div ref={panelRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {competencies.map((c) => (
              <div
                data-card
                key={c.title}
                className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Gradient top strip */}
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${c.gradient}`}
                />
                <div className="mt-1">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-8 h-8 rounded-lg bg-gradient-to-br ${c.gradient} flex items-center justify-center`}
                    >
                      <span className="material-symbols-outlined text-white text-sm">verified</span>
                    </div>
                    <span className="font-mono text-[10px] text-[#7b8fa8] uppercase">{c.category}</span>
                  </div>
                  <h4 className="font-headline font-bold text-lg text-[#040810] mb-2">{c.title}</h4>
                  <p className="font-sans text-xs text-[#526382] leading-relaxed mb-4">{c.desc}</p>
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${c.gradient} bg-opacity-10 font-mono text-[10px] font-bold text-white`}
                    style={{ background: "rgba(59,130,246,0.08)" }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${c.gradient}`} />
                    <span className="text-[#526382]">{c.badge}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Panel: Assessment */}
        {activeTab === "assessment" && (
          <div ref={panelRef} className="glass-card rounded-3xl p-6 sm:p-10 relative overflow-hidden">
            {/* Background accent */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,212,255,0.06) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="relative mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-mono font-semibold text-blue-600 mb-3">
                <span className="material-symbols-outlined text-sm">route</span>
                ROADMAP METHODOLOGY
              </div>
              <h3 className="font-headline text-2xl font-bold text-[#040810] mt-1">
                7-Stage Assessment &amp; Consulting Framework
              </h3>
              <p className="font-sans text-sm text-[#526382] mt-2 max-w-3xl">
                A structured, diagnostic-first assessment engineered to identify performance bottlenecks,
                eliminate licensing bloat, and blueprint a future-proof infrastructure state.
              </p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
              {assessmentStages.map((s, i) => (
                <div
                  data-card
                  key={s.stage}
                  className={`relative p-4 rounded-xl flex flex-col justify-between overflow-hidden ${
                    s.highlight ? "" : "glass-card"
                  }`}
                  style={
                    s.highlight
                      ? {
                          background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                          boxShadow: "0 8px 30px -8px rgba(59,130,246,0.5)",
                        }
                      : {}
                  }
                >
                  {/* Connector line (not on last) */}
                  {i < assessmentStages.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-5 -right-2 w-4 h-px z-10"
                      style={{ background: s.highlight ? "rgba(255,255,255,0.3)" : "rgba(59,130,246,0.2)" }}
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <span
                      className={`font-mono text-xs font-bold ${s.highlight ? "text-white/70" : "text-blue-500"}`}
                    >
                      STAGE {s.stage}
                    </span>
                    <h4
                      className={`font-headline font-semibold text-sm mt-2 ${s.highlight ? "text-white" : "text-[#040810]"}`}
                    >
                      {s.title}
                    </h4>
                    <p
                      className={`font-sans text-[11px] mt-1.5 leading-relaxed ${s.highlight ? "text-white/75" : "text-[#526382]"}`}
                    >
                      {s.desc}
                    </p>
                  </div>
                  <div
                    className={`mt-4 font-mono text-[10px] font-bold ${s.highlight ? "text-white/60" : "text-[#7b8fa8]"}`}
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
