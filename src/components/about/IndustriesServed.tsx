"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    icon: "terminal",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
    hoverBg: "group-hover:bg-secondary",
    verticalTag: "VERTICAL 01",
    tagColor: "text-secondary",
    title: "Software Companies",
    desc: "Scalable SaaS multi-tenant databases, microservices orchestration, and continuous deployment pipelines designed for exponential user expansion.",
    caseLabel: "Enterprise Case",
    caseValue: "SaaS DB Scaled to 12M Users",
  },
  {
    icon: "cell_tower",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    hoverBg: "group-hover:bg-cyan-700",
    verticalTag: "VERTICAL 02",
    tagColor: "text-cyan-700",
    title: "Telecommunications",
    desc: "Carrier-grade mediation systems, real-time CDR rating engines, and ultra-low latency transaction backbones with zero packet drop tolerances.",
    caseLabel: "Enterprise Case",
    caseValue: "Sub-millisecond CDR Rating",
  },
  {
    icon: "local_hospital",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    hoverBg: "group-hover:bg-emerald-700",
    verticalTag: "VERTICAL 03",
    tagColor: "text-emerald-700",
    title: "Healthcare Organizations",
    desc: "HIPAA-compliant patient record warehouses, immutable PACS repositories, and zero-trust clinical workflows safeguarding sensitive PHI data.",
    caseLabel: "Enterprise Case",
    caseValue: "Zero-Trust EMR Protection",
  },
  {
    icon: "construction",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    hoverBg: "group-hover:bg-amber-700",
    verticalTag: "VERTICAL 04",
    tagColor: "text-amber-700",
    title: "Construction Industry",
    desc: "Project portfolio management (Oracle Primavera P6) integration, job-costing ERP synchronization, and remote job-site telemetry connectivity.",
    caseLabel: "Enterprise Case",
    caseValue: "Primavera & ERP Integration",
  },
  {
    icon: "volunteer_activism",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    hoverBg: "group-hover:bg-purple-700",
    verticalTag: "VERTICAL 05",
    tagColor: "text-purple-700",
    title: "Non-Profit Organizations",
    desc: "Optimized constituent relationship management, secure donor database hosting, and high-efficiency cost right-sizing for philanthropic foundations.",
    caseLabel: "Enterprise Case",
    caseValue: "45% TCO Infrastructure Cut",
  },
];

export default function IndustriesServed() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const cards = gridRef.current ? Array.from(gridRef.current.children) : [];

    if (heading) {
      gsap.fromTo(
        heading,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: heading, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    }

    if (cards.length) {
      gsap.fromTo(
        cards,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }
  }, []);

  return (
    <section
      id="industries"
      className="w-full py-20 bg-white border-y border-outline-variant/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              VERTICAL SPECIALIZATION
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
              Industries We Serve
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2 max-w-2xl">
              Proven enterprise engineering adapted to the precise compliance, security, and uptime realities
              of critical industry sectors.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block">
            CROSS-INDUSTRY RESILIENCE
          </div>
        </div>

        {/* Industry Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="spatial-card spatial-card-hover rounded-2xl p-5 border border-outline-variant/60 flex flex-col justify-between group"
              style={{ opacity: 0 }}
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl ${ind.iconBg} ${ind.iconColor} flex items-center justify-center mb-4 ${ind.hoverBg} group-hover:text-white transition-colors`}
                >
                  <span className="material-symbols-outlined text-xl">{ind.icon}</span>
                </div>
                <span className={`font-mono text-[10px] ${ind.tagColor} font-bold uppercase tracking-wider block mb-1`}>
                  {ind.verticalTag}
                </span>
                <h3 className="font-headline font-bold text-base text-primary mb-2">{ind.title}</h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed mb-4">{ind.desc}</p>
              </div>
              <div className="pt-3 border-t border-outline-variant/40">
                <span className="block font-mono text-[10px] text-outline uppercase">{ind.caseLabel}</span>
                <span className="font-sans text-xs font-semibold text-primary">{ind.caseValue}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
