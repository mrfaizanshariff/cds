"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const engagementModels = [
  {
    num: "01", tag: "TEAM AUGMENTATION",
    icon: "groups", gradient: "from-blue-400 to-indigo-500", glow: "rgba(59,130,246,0.2)",
    title: "Project-Based Cohorts",
    highlight: "Saves 3+ months of hiring time",
    desc: "Complete cross-functional squads — Architects, Engineers, QA specialists — managed by us and integrated into your agile cycles within 5 business days.",
  },
  {
    num: "02", tag: "FLEXIBLE 1099",
    icon: "manage_accounts", gradient: "from-cyan-400 to-sky-500", glow: "rgba(6,182,212,0.2)",
    title: "Senior IT Contractors",
    highlight: "Niche specialists on demand",
    desc: "Elite software talent on flexible hourly contracts to cover critical project gaps — Kubernetes specialists, Oracle DBAs, SOC2 consultants, and more.",
  },
  {
    num: "03", tag: "EXECUTIVE SEARCH",
    icon: "verified_user", gradient: "from-emerald-400 to-teal-500", glow: "rgba(16,185,129,0.2)",
    title: "Direct Hire & Exec Search",
    highlight: "90-day retention warranty",
    desc: "Full-time CTOs, VPs, and Principal Engineers sourced and screened against your tech stack, culture, and long-term growth requirements.",
  },
];

const skillMatrix = [
  { category: "IT Staffing",           gradient: "from-blue-400 to-indigo-500",   items: ["Oracle DBA", "Cloud Architects", "DevOps Engineers", "Cybersecurity Analysts", "Systems Integrators"] },
  { category: "Engineering",           gradient: "from-cyan-400 to-sky-500",      items: ["Software Engineers", "Full-Stack Developers", "Platform Engineers", "QA Automation", "Data Engineers"] },
  { category: "Accounting & Finance",  gradient: "from-emerald-400 to-teal-500",  items: ["Financial Analysts", "ERP Specialists", "Accounts Payable/Receivable", "Controllers", "Administrative Support"] },
  { category: "Scientific & Clinical", gradient: "from-violet-400 to-purple-500", items: ["Data Scientists", "Clinical Analysts", "Research Engineers", "Biotech Specialists", "Lab Operations"] },
  { category: "Light Industrial",      gradient: "from-amber-400 to-orange-500",  items: ["Operations Coordinators", "Logistics Support", "Production Technicians", "Warehouse Management", "Field Technicians"] },
];

const vettingSteps = [
  { stage: "STEP 01", title: "Code Hygiene Audit",        desc: "Automated tests assessing code cleanliness, performance complexity, and boundary handling.", highlight: false },
  { stage: "STEP 02", title: "Live Architecture Defense",  desc: "Candidates design a distributed system under live interrogation from our senior engineers.",  highlight: false },
  { stage: "STEP 03", title: "Communication & Candor",    desc: "Evaluation of project ownership, English proficiency, and collaborative mindset.",             highlight: true  },
];

export default function StaffingContent() {
  const engHeadRef = useRef<HTMLDivElement>(null);
  const engGridRef = useRef<HTMLDivElement>(null);
  const vettingRef = useRef<HTMLDivElement>(null);
  const matrixRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (engHeadRef.current) {
      gsap.fromTo(engHeadRef.current, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: engHeadRef.current, start: "top 88%", toggleActions: "play none none none" },
      });
    }
    if (engGridRef.current) {
      const cards = Array.from(engGridRef.current.querySelectorAll<HTMLElement>("[data-card]"));
      if (cards.length) {
        gsap.fromTo(cards, { y: 40, opacity: 0, scale: 0.97 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: engGridRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }
    if (vettingRef.current) {
      gsap.fromTo(vettingRef.current, { y: 36, opacity: 0 }, {
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
      {/* Engagement Models */}
      <section id="staffing-solutions" className="w-full py-20 gradient-mesh-1 border-y border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={engHeadRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-outline-variant/40 text-xs font-mono text-secondary font-semibold mb-3">
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
                FLEXIBLE ENGAGEMENT MODELS
              </div>
              <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">Staffing Solutions</h2>
              <p className="font-sans text-base text-secondary mt-2 max-w-2xl">
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
                className="group glass-card glass-card-hover rounded-2xl flex flex-col overflow-hidden relative"
                style={{ opacity: 0 }}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${m.gradient}`} />

                {/* Header band */}
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${m.gradient} opacity-[0.07]`} />
                  <div className="relative px-5 py-4 flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent uppercase`}>
                      {m.highlight}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.gradient} flex items-center justify-center shadow-lg`}
                      style={{ boxShadow: `0 4px 14px -2px ${m.glow}` }}>
                      <span className="material-symbols-outlined text-white text-[18px]">{m.icon}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-headline font-semibold text-base text-primary mb-2">{m.title}</h3>
                  <p className="font-sans text-xs text-secondary leading-relaxed flex-1">{m.desc}</p>
                  <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-outline">{m.tag}</span>
                    <span className={`bg-gradient-to-r ${m.gradient} bg-clip-text text-transparent font-bold`}>{m.num}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vetting Process */}
      <section id="our-edge" className="w-full py-20 gradient-mesh-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={vettingRef} className="glass-strong rounded-3xl border border-outline-variant/50 shadow-xl overflow-hidden" style={{ opacity: 0 }}>
            {/* Header bar */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-8 py-5">
              <span className="font-mono text-xs font-bold text-white/70 uppercase tracking-wider">QUALITY ASSURANCE</span>
              <h3 className="font-headline text-xl font-bold text-white mt-1">Our Elite Vetting Process</h3>
            </div>

            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-4">
                  <p className="font-sans text-sm text-secondary leading-relaxed">
                    We maintain an active bench of pre-audited senior engineers. When you request talent, we select from our verified delivery pool — no job postings, no cold sourcing.
                  </p>
                  <Link href="/contact" className="group mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white font-headline text-xs font-semibold hover:scale-105 transition-all shadow-md">
                    <span>Request Talent Brief</span>
                    <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                  </Link>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {vettingSteps.map((s, i) => (
                    <div
                      key={s.stage}
                      className={`p-5 rounded-2xl flex flex-col relative overflow-hidden ${s.highlight ? "glass-card" : "bg-white/50 border border-outline-variant/50"}`}
                    >
                      {s.highlight && <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-500" />}
                      <span className="font-mono text-xs font-bold text-secondary">{s.stage}</span>
                      <h4 className="font-headline font-semibold text-sm text-primary mt-2">{s.title}</h4>
                      <p className="font-sans text-[11px] text-secondary mt-1.5 leading-relaxed flex-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Matrix */}
      <section id="it-staffing" className="w-full py-20 gradient-mesh-1 border-t border-outline-variant/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-outline-variant/40 text-xs font-mono text-secondary font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500" />
              STAFFING SKILL MATRIX
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">Disciplines We Staff</h2>
            <p className="font-sans text-base text-secondary mt-2 max-w-2xl">
              From Oracle DBAs to clinical researchers — our talent network spans five workforce categories.
            </p>
          </div>

          <div ref={matrixRef} className="divide-y divide-outline-variant/40 glass-strong rounded-2xl overflow-hidden border border-outline-variant/50">
            {skillMatrix.map((row, i) => (
              <div
                data-row
                key={row.category}
                className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 px-5 py-4 hover:bg-white/60 transition-colors"
                style={{ opacity: 0 }}
              >
                <div className="sm:col-span-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${row.gradient}`} />
                    <span className={`font-mono text-xs font-bold bg-gradient-to-r ${row.gradient} bg-clip-text text-transparent uppercase tracking-wider`}>
                      {row.category}
                    </span>
                  </div>
                </div>
                <div className="sm:col-span-9 flex flex-wrap gap-2">
                  {row.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-lg glass border border-outline-variant/40 font-sans text-xs text-secondary"
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
