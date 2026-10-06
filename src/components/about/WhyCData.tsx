"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const differentiators = [
  { icon: "flag",           gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.2)",   title: "USA-Based Leadership & Engineering",  tag: "DOMESTIC COMPLIANCE FOCUS",  desc: "Direct access to seasoned US architects and technical leads adhering to rigorous security clearances, sovereign data standards, and domestic compliance mandates." },
  { icon: "workspace_premium", gradient: "from-cyan-400 to-sky-500",   glow: "rgba(6,182,212,0.2)",    title: "Experienced Professionals",           tag: "SENIOR ARCHITECT POOL",      desc: "Our talent pool consists of senior-level DBAs, solutions architects, and SDLC engineers averaging 15+ years of production experience in mission-critical environments." },
  { icon: "lock",           gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.2)",   title: "Scalable & Secure Architectures",     tag: "ENTERPRISE ZERO-TRUST",      desc: "Every platform is engineered from ground zero to support multi-million transaction scalability while adhering to ISO 27001, SOC 2 Type II, and NIST frameworks." },
  { icon: "public",         gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.2)",   title: "Global Delivery Capabilities",        tag: "24/7/365 GLOBAL REACH",      desc: 'Round-the-clock "follow-the-sun" support models that guarantee immediate engineering intervention, uninterrupted migrations, and global telemetry oversight.' },
  { icon: "handshake",      gradient: "from-amber-400 to-orange-500",  glow: "rgba(245,158,11,0.2)",   title: "Customer-Focused Support",            tag: "DIRECT ARCHITECT DIAL",      desc: "Dedicated client engagement directors, contractual SLA guarantees, and transparent communications without automated ticket runarounds." },
  { icon: "verified_user",  gradient: "from-rose-400 to-pink-500",     glow: "rgba(244,63,94,0.2)",    title: "Reliable Strategic Partnerships",     tag: "CERTIFIED ALLIANCES",        desc: "Direct tier alliances with Oracle, AWS, Dell EMC, and Microsoft enable fast-tracked escalations, optimal enterprise licensing, and certified deployment playbooks." },
];

export default function WhyCData() {
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
        gsap.fromTo(cards, { y: 40, opacity: 0, scale: 0.97 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.75, stagger: 0.09, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
        });

        // Subtle tilt on hover
        cards.forEach((card) => {
          card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * -6;
            gsap.to(card, { rotationY: x, rotationX: y, duration: 0.4, ease: "power2.out" });
          });
          card.addEventListener("mouseleave", () => {
            gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.6, ease: "elastic.out(1,0.75)" });
          });
        });
      }
    }
  }, []);

  return (
    <section className="w-full py-20 gradient-mesh-2 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-outline-variant/40 font-mono text-xs text-secondary font-semibold uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-cyan-500" />
            PROVEN ENTERPRISE VALUE
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight mt-3">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              CData Systems?
            </span>
          </h2>
          <p className="font-sans text-base text-secondary mt-3 leading-relaxed">
            We provide mission-critical resilience, certified engineers, and strategic accountability that high-stakes organizations depend on every day.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d) => (
            <div
              data-card
              key={d.title}
              className="group glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden cursor-default"
              style={{ opacity: 0, perspective: "800px" }}
            >
              {/* Top gradient accent strip */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${d.gradient}`} />

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${d.glow}, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${d.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 6px 20px -4px ${d.glow}` }}
                >
                  <span className="material-symbols-outlined text-white text-[22px]">{d.icon}</span>
                </div>
                <h3 className="font-headline font-bold text-lg text-primary mb-2">{d.title}</h3>
                <p className="font-sans text-sm text-secondary leading-relaxed">{d.desc}</p>
              </div>
              <div className={`relative z-10 mt-5 pt-3 border-t border-outline-variant/40 font-mono text-xs bg-gradient-to-r ${d.gradient} bg-clip-text text-transparent font-bold`}>
                {d.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
