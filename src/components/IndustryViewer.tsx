"use client";

import { useRef, useState } from "react";
import NextLink from "next/link";
import gsap from "gsap";

const industries = [
  {
    id: "banking",
    num: "01",
    tabLabel: "Banking & Finance",
    icon: "account_balance",
    spec: "REGULATORY SPEC: SOX, PCI-DSS, GDPR & FFIEC",
    title: "High-Volume Banking & Financial Core Modernization",
    desc: "Zero-downtime ledger migration for financial institutions processing millions of daily transactions. We engineer real-time risk computing clusters that condense overnight end-of-day batch workloads into sub-second algorithmic telemetry.",
    metricValue1: "40%",
    metricLabel1: "Cost Reduction",
    metricValue2: "ZERO",
    metricLabel2: "Audit Findings",
    metricValue3: "3 Weeks",
    metricLabel3: "Release Cadence",
    caseStudyTitle: "Explore Banking Case Study: $8M Annual Savings",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtqK1wGNK6Uuf3ymMhheDi5wM5Rhw221IYJccpJE_5ESSQ1MagZL9Bfisj0oMRd0qwzMPBR5Hnmpi-3PriJnqnXCJG9z5uuqATQfjLl33lmkYpHERVFsyLPodkxUPb5jbnwIhyTSP4DJsYkTEakS6JTZV3-Ai1f6KQTNKHTic94GG1KE2W_rRtgXv4ATav0j5UqaeTq0yvjz5nDohoMtyNnoJF7EZLFhXQJO0T_O61oQauBjHnYAH4rw",
    badge: "CORE LEDGER CLUSTER",
    status: "SYNCHRONIZED"
  },
  {
    id: "energy",
    num: "02",
    tabLabel: "Energy & Utilities",
    icon: "bolt",
    spec: "EDGE SPEC: SCADA, IIoT & RUGGED TELEMETRY",
    title: "Upstream & Midstream Oil & Gas Architecture",
    desc: "Seamless operational integration across remote wells, refineries, and distribution pipelines. We connect ruggedized edge sensors directly to Oracle SCM Cloud to predict equipment failures and eliminate unscheduled shutdowns.",
    metricValue1: "30%",
    metricLabel1: "Supply Chain Cut",
    metricValue2: "-25%",
    metricLabel2: "Unplanned Downtime",
    metricValue3: "$2.5M",
    metricLabel3: "Net Savings",
    caseStudyTitle: "Explore Energy Telemetry Case Study",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWi9Q2ZGzbLQeywjkd5752oIPR5LYX_DspdkpJqpsRvXoayHva2-lBICzFqyw_qRXDmeponf3UCp8_B6s3accL_QIaqDpYoaO6ylYgTwSDha-KPiYbxsxDmS1R8pvoEeJ7z62LWKMCsTdp2lfN6SxDx1-ftLi7iS2_OJsP_0md48fiAxcb8Y1iutZaonnEwC6XyOFixrm-YcgAvLtGthYLClQ8vhM819s2vrm-qaE7ja2H8b0_xSMotw",
    badge: "FIELD SCADA TELEMETRY",
    status: "ACTIVE MESH"
  },
  {
    id: "healthcare",
    num: "03",
    tabLabel: "Healthcare Systems",
    icon: "local_hospital",
    spec: "SECURITY: HIPAA & HITRUST ZERO-TRUST ENCLAVES",
    title: "Multi-Hospital Clinical Systems & PACS Data Warehouses",
    desc: "Consolidated disparate electronic records across metropolitan hospital networks with air-gapped immutable backup repositories, high-throughput imaging pipelines, and continuous audit integrity.",
    metricValue1: "15 Min",
    metricLabel1: "RTO Disaster Rec",
    metricValue2: "ZERO",
    metricLabel2: "Audit Findings",
    metricValue3: "99.98%",
    metricLabel3: "Network Uptime",
    caseStudyTitle: "Review Clinical Infrastructure Architecture",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZjD5-VU2ZhRWVUDdo4k2HPFgQzGAce5tPv7QgWbocx0a5TAUlxmvA-nmzvGsGKoZWGSrwZY4oDHsq8zMCXyu92-QW2uFKcm5qIePYRxdRCbyD8Uqr_qdmf1_FyO5fgINXk7vVNWtF9Vsvawfkhf6o4K8VcFbvZ-ZSmqEckQSzH3tPwIIC6QKGzsCfnb8qTgJjaTRfgVabrMm8Tm44eVmu-Gg5LVjLtx9j19SQdzIhnw3CXO-fsROqXQ",
    badge: "PATIENT EMR ENCLAVE",
    status: "ENCRYPTED"
  },
  {
    id: "federal",
    num: "04",
    tabLabel: "Federal & Government",
    icon: "gavel",
    spec: "COMPLIANCE: FedRAMP High // NIST SP 800-53",
    title: "Sovereign Federal & Public Sector Cloud Enclaves",
    desc: "Air-gapped architectures and legacy modernization for federal defense and civil agencies requiring stringent sovereign control, FISMA High standards, and zero-compromise cryptographic protection.",
    metricValue1: "FedRAMP",
    metricLabel1: "Authorization",
    metricValue2: "100% US",
    metricLabel2: "Data Sovereignty",
    metricValue3: "TS/SCI",
    metricLabel3: "Clearances",
    caseStudyTitle: "Request Sovereign Government Framework",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuDS9wpq8lh4gmJqwwh0jCJK-uZ3dds1eeC7QQ9DUbRE-I8wpshzVL2F2Y-UtqknYP_Fp4kqCOJ65CVMaXzyLVHgND-ddpEdEdduj1CqLvJVs1eVasZQ1EAVgqQ7D_SpSEp08jRgtiNyN78qfGKWmkt_cEPQt86zJL3OBlowRVbp-MmZduz2IAtrGnVRWpLg37Fua0I-OvMaUouGrz1r0wdLv3DknfLS9lLoDqSfGwPiDfdHM9Wt83NPLA",
    badge: "FEDRAMP HIGH SECURE",
    status: "SOVEREIGN"
  },
  {
    id: "manufacturing",
    num: "05",
    tabLabel: "Smart Manufacturing",
    icon: "factory",
    spec: "SMART INDUSTRY: MES // ORACLE SCM // IIoT SYNCHRONY",
    title: "Shop-Floor to Boardroom Manufacturing Integration",
    desc: "Connect robotic assembly lines, warehouse inventory automation, and multi-tier supplier portals into a cohesive Oracle ERP backbone with instantaneous predictive maintenance alerts.",
    metricValue1: "0.00%",
    metricLabel1: "Line Stop Risk",
    metricValue2: "< 0.1%",
    metricLabel2: "Inventory Drift",
    metricValue3: "-35%",
    metricLabel3: "Procurement Lead",
    caseStudyTitle: "View Smart Manufacturing Blueprints",
    imgSrc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMXZo6WRI4d9lnHMu50kvwo-XFr3rfMfdeuwc-mjkg8PzW03IVMfVWFccCTVdgVF8aCeMlO8psaXy_UBWwrFxpMsVCTKPapEluxx1-PBtht2VdAyQ5GvrGwYtmHOC0bdCUUUg-mFXw6EgbB2ZpRCCzEvCPnA41RMfCRdJ9uzRpWtKWkg0g-9er16dCPZpOhMczmI10mpYh0pswgO-sn3FzReqm5tFTrK-tC4DFFmiYM1RyS4VXvBcOSA",
    badge: "MES-ERP REAL-TIME SYNC",
    status: "SYNCHRONIZED"
  }
];

export default function IndustryViewer() {
  const [activeTab, setActiveTab] = useState("banking");
  const panelRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (verticalId: string) => {
    if (verticalId === activeTab) return;

    // Beautiful fade-out/slide-left, swap state, fade-in/slide-right GSAP transition
    gsap.to(panelRef.current, {
      opacity: 0,
      x: -20,
      duration: 0.25,
      ease: "power2.out",
      onComplete: () => {
        setActiveTab(verticalId);
        gsap.fromTo(
          panelRef.current,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.35, ease: "power2.out" }
        );
      },
    });
  };

  const activeData = industries.find((ind) => ind.id === activeTab)!;

  return (
    <section className="w-full py-24 bg-surface cyber-dot-grid relative z-30" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
            <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
            VERTICAL DOMAIN MASTERY
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
            Industry Solutions Engineered for Zero Margin of Error
          </h2>
          <p className="font-sans text-base text-on-surface-variant mt-3 leading-relaxed">
            Select an industry vertical to inspect tailored compliance standards, architecture blueprints, and quantified field performance.
          </p>
        </div>

        {/* Dynamic Tab Controls */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-4 border-b border-outline-variant/60">
          {industries.map((ind) => {
            const isActive = activeTab === ind.id;
            return (
              <button
                key={ind.id}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-primary text-white shadow-sm"
                    : "bg-white text-on-surface-variant border border-outline-variant hover:border-secondary hover:text-secondary"
                }`}
                onClick={() => handleTabChange(ind.id)}
              >
                <span className="material-symbols-outlined text-sm">{ind.icon}</span>
                <span>{ind.num} {"//"} {ind.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Panel Container */}
        <div className="spatial-card rounded-3xl p-8 lg:p-12 relative overflow-hidden min-h-[380px]">
          <div ref={panelRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-primary-container text-secondary font-mono text-xs">
                <span>{activeData.spec}</span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary">
                {activeData.title}
              </h3>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed">
                {activeData.desc}
              </p>
              
              {/* Metric Panels */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-outline-variant/60 font-mono">
                <div className="p-3 rounded-xl bg-surface-container-low">
                  <div className="text-[10px] text-outline uppercase">{activeData.metricLabel1}</div>
                  <div className="text-xl font-bold text-secondary">{activeData.metricValue1}</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low">
                  <div className="text-[10px] text-outline uppercase">{activeData.metricLabel2}</div>
                  <div className="text-xl font-bold text-emerald-600">{activeData.metricValue2}</div>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low">
                  <div className="text-[10px] text-outline uppercase">{activeData.metricLabel3}</div>
                  <div className="text-xl font-bold text-primary">{activeData.metricValue3}</div>
                </div>
              </div>

              {/* Case study anchor */}
              <div className="pt-2">
                <NextLink className="inline-flex items-center gap-2 font-headline text-sm font-semibold text-secondary hover:text-primary duration-200" href="/contact">
                  <span>{activeData.caseStudyTitle}</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </NextLink>
              </div>
            </div>

            {/* Right Image Showcase Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-outline-variant aspect-[4/3] bg-surface-container">
                <img
                  alt={activeData.tabLabel}
                  className="w-full h-full object-cover"
                  src={activeData.imgSrc}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white font-mono text-xs flex justify-between items-center">
                  <span>{activeData.badge}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/90 text-white font-semibold">
                    {activeData.status}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
