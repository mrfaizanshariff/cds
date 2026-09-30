"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  {
    icon: "flag",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
    title: "USA-Based Leadership & Engineering",
    desc: "Direct access to seasoned US architects and technical leads adhering to rigorous security clearances, sovereign data standards, and domestic compliance mandates.",
    tag: "DOMESTIC COMPLIANCE FOCUS",
    tagColor: "text-secondary",
  },
  {
    icon: "workspace_premium",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    title: "Experienced Professionals",
    desc: "Our talent pool consists of senior-level DBAs, solutions architects, and SDLC engineers averaging 15+ years of production experience in mission-critical environments.",
    tag: "SENIOR ARCHITECT POOL",
    tagColor: "text-cyan-700",
  },
  {
    icon: "lock",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    title: "Scalable & Secure Architectures",
    desc: "Every platform is engineered from ground zero to support multi-million transaction scalability while adhering to ISO 27001, SOC 2 Type II, and NIST frameworks.",
    tag: "ENTERPRISE ZERO-TRUST",
    tagColor: "text-emerald-700",
  },
  {
    icon: "public",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    title: "Global Delivery Capabilities",
    desc: 'Round-the-clock "follow-the-sun" support models that guarantee immediate engineering intervention, uninterrupted migrations, and global telemetry oversight.',
    tag: "24/7/365 GLOBAL REACH",
    tagColor: "text-purple-700",
  },
  {
    icon: "handshake",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    title: "Customer-Focused Support",
    desc: "Dedicated client engagement directors, contractual SLA guarantees, and transparent communications without automated ticket runarounds.",
    tag: "DIRECT ARCHITECT DIAL",
    tagColor: "text-amber-700",
  },
  {
    icon: "verified_user",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    title: "Reliable Strategic Partnerships",
    desc: "Direct tier alliances with Oracle, AWS, Dell EMC, and Microsoft enable fast-tracked escalations, optimal enterprise licensing, and certified deployment playbooks.",
    tag: "CERTIFIED ALLIANCES",
    tagColor: "text-indigo-700",
  },
];

export default function WhyCData() {
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
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }
  }, []);

  return (
    <section className="w-full py-20 bg-surface cyber-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-outline-variant/60 font-mono text-xs text-secondary font-semibold uppercase">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            PROVEN ENTERPRISE VALUE
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-3">
            Why Choose CData Systems?
          </h2>
          <p className="font-sans text-base text-on-surface-variant mt-3 leading-relaxed">
            We provide mission-critical resilience, certified engineers, and strategic accountability that
            high-stakes organizations depend on every day.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <div
              key={d.title}
              className="spatial-card spatial-card-hover rounded-2xl p-7 border border-outline-variant/60 flex flex-col justify-between"
              style={{ opacity: 0 }}
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-xl ${d.iconBg} ${d.iconColor} flex items-center justify-center mb-4`}
                >
                  <span className="material-symbols-outlined text-2xl">{d.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-primary mb-2">{d.title}</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{d.desc}</p>
              </div>
              <div className={`mt-6 pt-3 border-t border-outline-variant/40 font-mono text-xs ${d.tagColor} font-semibold`}>
                {d.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
