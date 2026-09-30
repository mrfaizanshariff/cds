"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: "outsourcing",
    num: "01",
    tag: "OUTSOURCING",
    icon: "business_center",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
    title: "IT Outsourcing",
    desc: "Delegate entire IT functions — infrastructure operations, helpdesk, or full software delivery — to CData Systems as a managed delivery partner.",
    metric: "Full-Function",
    metricSub: "IT DELIVERY",
    href: "/solutions#outsourcing",
  },
  {
    id: "consulting",
    num: "02",
    tag: "CONSULTING",
    icon: "tips_and_updates",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    title: "Strategic Consulting",
    desc: "Architecture reviews, technology roadmaps, and transformation advisory aligned to your corporate objectives and multi-year growth plan.",
    metric: "Roadmap-First",
    metricSub: "STRATEGIC ADVISORY",
    href: "/solutions#consulting",
  },
  {
    id: "technology",
    num: "03",
    tag: "TECHNOLOGY",
    icon: "developer_mode",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    title: "Technology Solutions",
    desc: "Turnkey platform builds, enterprise integrations, and modernisation programs — from Oracle EBS to cloud-native microservices.",
    metric: "End-to-End",
    metricSub: "PLATFORM DELIVERY",
    href: "/solutions#technology",
  },
  {
    id: "research-development",
    num: "04",
    tag: "R&D",
    icon: "science",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    title: "Research & Development",
    desc: "Bespoke engineering for complex operational problems where commercial tools fall short. Custom algorithms, domain-specific platforms, and emerging tech pilots.",
    metric: "Bespoke",
    metricSub: "CUSTOM ENGINEERING",
    href: "/solutions#research-development",
  },
];

export default function SolutionsGrid() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(headingRef.current, { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: headingRef.current, start: "top 88%", toggleActions: "play none none none" },
      });
    }
    if (gridRef.current) {
      const cards = Array.from(gridRef.current.querySelectorAll<HTMLElement>("[data-card]"));
      if (cards.length) {
        gsap.fromTo(cards, { y: 28, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.55, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }
  }, []);

  return (
    <section
      id="solutions-grid"
      className="w-full py-20 bg-white border-y border-outline-variant/50 cyber-dot-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              PRACTICE AREAS
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
              Our Solution Portfolio
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2 max-w-2xl">
              Four strategic practice areas covering the full spectrum of enterprise transformation —
              from advisory and outsourcing to full-scale technology delivery and custom R&amp;D.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block shrink-0">4 PRACTICE AREAS</div>
        </div>

        {/* Cards */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s) => (
            <Link
              data-card
              key={s.id}
              href={s.href}
              className="group spatial-card spatial-card-hover rounded-2xl border border-outline-variant/60 flex flex-col justify-between transition-all duration-200 hover:border-secondary/40 hover:shadow-md overflow-hidden"
              style={{ opacity: 0 }}
            >
              {/* Metric band */}
              <div className="bg-surface-container-low border-b border-outline-variant/40 px-5 py-4 flex items-center justify-between">
                <div>
                  <span className="font-headline font-extrabold text-2xl text-primary">{s.metric}</span>
                  <span className="block font-mono text-[10px] text-outline mt-0.5">{s.metricSub}</span>
                </div>
                <div className={`w-10 h-10 rounded-xl ${s.iconBg} ${s.iconColor} flex items-center justify-center`}>
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-headline font-semibold text-base text-primary mb-2 group-hover:text-secondary transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-outline">{s.tag}</span>
                  <span className="flex items-center gap-1 text-secondary font-semibold">
                    <span>{s.num}</span>
                    <span className="material-symbols-outlined text-[13px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
