"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const engagementModels = [
  {
    num: "01",
    tag: "TEAM AUGMENTATION",
    icon: "groups",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
    title: "Project-Based Cohorts",
    highlight: "Saves 3+ months of hiring time",
    desc: "Complete cross-functional squads — Architects, Engineers, QA specialists — managed by us and integrated into your agile cycles within 5 business days.",
  },
  {
    num: "02",
    tag: "FLEXIBLE 1099",
    icon: "manage_accounts",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    title: "Senior IT Contractors",
    highlight: "Niche specialists on demand",
    desc: "Elite software talent on flexible hourly contracts to cover critical project gaps — Kubernetes specialists, Oracle DBAs, SOC2 consultants, and more.",
  },
  {
    num: "03",
    tag: "EXECUTIVE SEARCH",
    icon: "verified_user",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    title: "Direct Hire & Exec Search",
    highlight: "90-day retention warranty",
    desc: "Full-time CTOs, VPs, and Principal Engineers sourced and screened against your tech stack, culture, and long-term growth requirements.",
  },
];

const skillMatrix = [
  { category: "IT Staffing",               items: ["Oracle DBA", "Cloud Architects", "DevOps Engineers", "Cybersecurity Analysts", "Systems Integrators"] },
  { category: "Engineering",               items: ["Software Engineers", "Full-Stack Developers", "Platform Engineers", "QA Automation", "Data Engineers"] },
  { category: "Accounting & Finance",      items: ["Financial Analysts", "ERP Specialists", "Accounts Payable/Receivable", "Controllers", "Administrative Support"] },
  { category: "Scientific & Clinical",     items: ["Data Scientists", "Clinical Analysts", "Research Engineers", "Biotech Specialists", "Lab Operations"] },
  { category: "Light Industrial",          items: ["Operations Coordinators", "Logistics Support", "Production Technicians", "Warehouse Management", "Field Technicians"] },
];

const vettingSteps = [
  {
    stage: "STEP 01",
    title: "Code Hygiene Audit",
    desc: "Automated tests assessing code cleanliness, performance complexity, and boundary handling.",
    highlight: false,
  },
  {
    stage: "STEP 02",
    title: "Live Architecture Defense",
    desc: "Candidates design a distributed system under live interrogation from our senior engineers.",
    highlight: false,
  },
  {
    stage: "STEP 03",
    title: "Communication & Candor",
    desc: "Evaluation of project ownership, English proficiency, and collaborative mindset.",
    highlight: true,
  },
];

export default function StaffingContent() {
  const engHeadRef  = useRef<HTMLDivElement>(null);
  const engGridRef  = useRef<HTMLDivElement>(null);
  const vettingRef  = useRef<HTMLDivElement>(null);
  const matrixRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = [
      { heading: engHeadRef.current, grid: engGridRef.current },
    ];
    sections.forEach(({ heading, grid }) => {
      if (heading) {
        gsap.fromTo(heading, { y: 24, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 88%", toggleActions: "play none none none" },
        });
      }
      if (grid) {
        const cards = Array.from(grid.querySelectorAll<HTMLElement>("[data-card]"));
        if (cards.length) {
          gsap.fromTo(cards, { y: 28, opacity: 0 }, {
            y: 0, opacity: 1, duration: 0.55, stagger: 0.08, ease: "power3.out",
            scrollTrigger: { trigger: grid, start: "top 85%", toggleActions: "play none none none" },
          });
        }
      }
    });
    if (vettingRef.current) {
      gsap.fromTo(vettingRef.current, { y: 32, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: vettingRef.current, start: "top 88%", toggleActions: "play none none none" },
      });
    }
    if (matrixRef.current) {
      const rows = Array.from(matrixRef.current.querySelectorAll<HTMLElement>("[data-row]"));
      if (rows.length) {
        gsap.fromTo(rows, { y: 20, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power3.out",
          scrollTrigger: { trigger: matrixRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }
  }, []);

  return (
    <>
      {/* ── Section 1: Engagement Models ───────────────────────────────────── */}
      <section
        id="staffing-solutions"
        className="w-full py-20 bg-white border-y border-outline-variant/50 cyber-dot-grid-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={engHeadRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
                <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
                FLEXIBLE ENGAGEMENT MODELS
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
                Staffing Solutions
              </h2>
              <p className="font-sans text-base text-on-surface-variant mt-2 max-w-2xl">
                Three engagement pathways designed to match your project scope, timeline, and budget.
              </p>
            </div>
            <div className="font-mono text-xs text-outline hidden md:block shrink-0">3 ENGAGEMENT MODELS</div>
          </div>

          <div ref={engGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {engagementModels.map((m) => (
              <div
                data-card
                key={m.num}
                className="spatial-card spatial-card-hover rounded-2xl border border-outline-variant/60 flex flex-col overflow-hidden"
                style={{ opacity: 0 }}
              >
                {/* Top band */}
                <div className="bg-surface-container-low border-b border-outline-variant/40 px-5 py-4 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-secondary uppercase">{m.highlight}</span>
                  <div className={`w-9 h-9 rounded-xl ${m.iconBg} ${m.iconColor} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-lg">{m.icon}</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-headline font-semibold text-base text-primary mb-2">{m.title}</h3>
                  <p className="font-sans text-xs text-on-surface-variant leading-relaxed flex-1">{m.desc}</p>
                  <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-outline">{m.tag}</span>
                    <span className="text-secondary font-semibold">{m.num}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 2: Vetting Process ──────────────────────────────────────── */}
      <section
        id="our-edge"
        className="w-full py-20 bg-surface cyber-dot-grid"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={vettingRef} className="spatial-card rounded-3xl p-6 sm:p-10 border border-outline-variant/60 bg-white" style={{ opacity: 0 }}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left: heading */}
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-widest">
                  QUALITY ASSURANCE
                </span>
                <h3 className="font-headline text-2xl font-bold text-primary mt-2">
                  Our Elite Vetting Process
                </h3>
                <p className="font-sans text-sm text-on-surface-variant mt-3 leading-relaxed">
                  We maintain an active bench of pre-audited senior engineers. When you request talent,
                  we select from our verified delivery pool — no job postings, no cold sourcing.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-mono font-semibold text-secondary hover:text-primary transition-colors"
                >
                  <span>REQUEST TALENT BRIEF</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>

              {/* Right: steps */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {vettingSteps.map((s) => (
                  <div
                    key={s.stage}
                    className={`p-5 rounded-xl border flex flex-col ${
                      s.highlight
                        ? "bg-blue-50 border-blue-200"
                        : "bg-surface-container-low border-outline-variant/40"
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-secondary">{s.stage}</span>
                    <h4 className="font-headline font-semibold text-sm text-primary mt-2">{s.title}</h4>
                    <p className="font-sans text-[11px] text-on-surface-variant mt-1.5 leading-relaxed flex-1">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Skill Matrix ─────────────────────────────────────────── */}
      <section
        id="it-staffing"
        className="w-full py-20 bg-white border-t border-outline-variant/50 cyber-dot-grid-subtle"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              STAFFING SKILL MATRIX
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
              Disciplines We Staff
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2 max-w-2xl">
              From Oracle DBAs to clinical researchers — our talent network spans five workforce categories.
            </p>
          </div>

          <div ref={matrixRef} className="divide-y divide-outline-variant/40 border border-outline-variant/50 rounded-2xl overflow-hidden">
            {skillMatrix.map((row) => (
              <div
                data-row
                key={row.category}
                className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 px-5 py-4 bg-white hover:bg-surface-container-low transition-colors"
                style={{ opacity: 0 }}
              >
                <div className="sm:col-span-3">
                  <span className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
                    {row.category}
                  </span>
                </div>
                <div className="sm:col-span-9 flex flex-wrap gap-2">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg bg-surface-container font-sans text-xs text-on-surface-variant border border-outline-variant/40"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
