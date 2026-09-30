"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const pillars = [
  {
    icon: "lightbulb",
    color: "text-secondary",
    title: "Outsourcing",
    desc: "End-to-end IT function delivery — from infrastructure ops to full software development teams.",
  },
  {
    icon: "analytics",
    color: "text-cyan-600",
    title: "Consulting",
    desc: "Strategic advisory, architecture reviews, and technology roadmaps aligned to business goals.",
  },
  {
    icon: "developer_mode",
    color: "text-emerald-600",
    title: "Technology",
    desc: "Turnkey platform builds, integrations, and modernisation programs for enterprise environments.",
  },
  {
    icon: "science",
    color: "text-purple-600",
    title: "Research & Development",
    desc: "Custom R&D initiatives solving complex operational bottlenecks with bespoke engineering.",
  },
];

export default function SolutionsHero() {
  const pillRef    = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);
  const breadRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(breadRef.current,   { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.1 })
      .fromTo(pillRef.current,    { x: -20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7 }, "-=0.3")
      .fromTo(headingRef.current, { y: 36,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.5")
      .fromTo(bodyRef.current,    { y: 24,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, "-=0.6")
      .fromTo(cardRef.current,    { x: 30,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.85 }, "-=0.7");
  }, []);

  return (
    <section
      id="solutions-hero"
      className="relative w-full overflow-hidden pb-16 pt-6 cyber-dot-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div ref={breadRef} className="flex items-center gap-2 font-mono text-xs text-outline mb-8" style={{ opacity: 0 }}>
          <Link href="/" className="hover:text-secondary transition-colors">HOME</Link>
          <span className="text-outline-variant">/</span>
          <span className="text-secondary font-semibold">SOLUTIONS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left */}
          <div className="lg:col-span-7 space-y-6">
            <div ref={pillRef} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-outline-variant/60 shadow-sm text-xs font-mono text-secondary font-semibold" style={{ opacity: 0 }}>
              <span className="w-2 h-2 rounded-full bg-cyan-500" />
              STRATEGIC ENTERPRISE SOLUTIONS
            </div>

            <h1 ref={headingRef} className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.12]" style={{ opacity: 0 }}>
              Solutions That Resolve{" "}
              <span className="bg-gradient-to-r from-secondary via-secondary-container to-cyan-600 bg-clip-text text-transparent">
                Enterprise Bottlenecks
              </span>
            </h1>

            <div ref={bodyRef} className="text-base text-on-surface-variant leading-relaxed max-w-2xl" style={{ opacity: 0 }}>
              <p>
                CData Systems merges software architecture, data engineering, and domain-specific
                strategy to deliver solutions that eliminate operational friction at the enterprise scale —
                across outsourcing, consulting, technology, and R&amp;D engagements.
              </p>
            </div>
          </div>

          {/* Right: Solution pillars card */}
          <div ref={cardRef} className="lg:col-span-5 spatial-card rounded-2xl p-6 border border-outline-variant/60 bg-white shadow-sm" style={{ opacity: 0 }}>
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-outline-variant/40">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Solution Areas</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-50 text-secondary font-semibold">4 PRACTICES</span>
            </div>
            <div className="space-y-4">
              {pillars.map((p) => (
                <div key={p.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className={`material-symbols-outlined text-[18px] ${p.color}`}>{p.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-semibold text-sm text-primary">{p.title}</h4>
                    <p className="font-sans text-xs text-on-surface-variant mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
