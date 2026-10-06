"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutions = [
  {
    id: "outsourcing", num: "01", tag: "OUTSOURCING",
    icon: "business_center", gradient: "from-blue-400 to-indigo-500", glow: "rgba(59,130,246,0.2)",
    title: "IT Outsourcing",
    desc: "Delegate entire IT functions — infrastructure operations, helpdesk, or full software delivery — to CData Systems as a managed delivery partner.",
    metric: "Full-Function", metricSub: "IT DELIVERY", href: "/solutions#outsourcing",
  },
  {
    id: "consulting", num: "02", tag: "CONSULTING",
    icon: "tips_and_updates", gradient: "from-cyan-400 to-sky-500", glow: "rgba(6,182,212,0.2)",
    title: "Strategic Consulting",
    desc: "Architecture reviews, technology roadmaps, and transformation advisory aligned to your corporate objectives and multi-year growth plan.",
    metric: "Roadmap-First", metricSub: "STRATEGIC ADVISORY", href: "/solutions#consulting",
  },
  {
    id: "technology", num: "03", tag: "TECHNOLOGY",
    icon: "developer_mode", gradient: "from-emerald-400 to-teal-500", glow: "rgba(16,185,129,0.2)",
    title: "Technology Solutions",
    desc: "Turnkey platform builds, enterprise integrations, and modernisation programs — from Oracle EBS to cloud-native microservices.",
    metric: "End-to-End", metricSub: "PLATFORM DELIVERY", href: "/solutions#technology",
  },
  {
    id: "research-development", num: "04", tag: "R&D",
    icon: "science", gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.2)",
    title: "Research & Development",
    desc: "Bespoke engineering for complex operational problems where commercial tools fall short. Custom algorithms, domain-specific platforms, and emerging tech pilots.",
    metric: "Bespoke", metricSub: "CUSTOM ENGINEERING", href: "/solutions#research-development",
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
        gsap.fromTo(cards, { y: 40, opacity: 0, scale: 0.96 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.75, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }
  }, []);

  return (
    <section id="solutions-grid" className="w-full py-20 gradient-mesh-2 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-outline-variant/40 text-xs font-mono text-secondary font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500" />
              PRACTICE AREAS
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Our Solution Portfolio
            </h2>
            <p className="font-sans text-base text-secondary mt-2 max-w-2xl">
              Four strategic practice areas covering the full spectrum of enterprise transformation — from advisory and outsourcing to full-scale technology delivery and custom R&amp;D.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block shrink-0">4 PRACTICE AREAS</div>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((s) => (
            <Link
              data-card
              key={s.id}
              href={s.href}
              className="group glass-card glass-card-hover rounded-2xl flex flex-col justify-between overflow-hidden relative"
              style={{ opacity: 0 }}
            >
              {/* Metric band with gradient */}
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-[0.08]`} />
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.gradient}`} />
                <div className="relative px-5 py-4 flex items-center justify-between">
                  <div>
                    <span className="font-headline font-extrabold text-2xl text-primary">{s.metric}</span>
                    <span className="block font-mono text-[10px] text-outline mt-0.5">{s.metricSub}</span>
                  </div>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}
                    style={{ boxShadow: `0 4px 14px -2px ${s.glow}` }}>
                    <span className="material-symbols-outlined text-white text-xl">{s.icon}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-headline font-semibold text-base text-primary mb-2 group-hover:text-secondary transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-secondary leading-relaxed flex-1">{s.desc}</p>
                <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-outline">{s.tag}</span>
                  <span className={`flex items-center gap-1 bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent font-bold`}>
                    <span>{s.num}</span>
                    <span className="material-symbols-outlined text-secondary text-[13px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
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
