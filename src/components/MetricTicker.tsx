"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    id: "uptime",
    value: 99.9,
    display: "99.9%",
    label: "Service Uptime SLA",
    sub: "High-Availability RAC Architecture",
    suffix: "%",
    decimals: 1,
    accent: "from-cyan-400 to-blue-500",
    glow: "rgba(0,212,255,0.25)",
    icon: "verified",
  },
  {
    id: "years",
    value: 20,
    display: "20+",
    label: "Years of Proven Success",
    sub: "Enterprise Infrastructure Lineage",
    suffix: "+",
    decimals: 0,
    accent: "from-indigo-400 to-violet-500",
    glow: "rgba(99,102,241,0.25)",
    icon: "history_edu",
  },
  {
    id: "migrations",
    value: 500,
    display: "500+",
    label: "Enterprise Migrations",
    sub: "Fortune 1000 & Global Public Sector",
    suffix: "+",
    decimals: 0,
    accent: "from-blue-400 to-cyan-500",
    glow: "rgba(59,130,246,0.25)",
    icon: "move_group",
  },
  {
    id: "oracle",
    value: null,
    display: "Platinum",
    label: "Oracle Certified Partner",
    sub: "Platinum-Level Expertise",
    suffix: "",
    decimals: 0,
    accent: "from-amber-400 to-orange-500",
    glow: "rgba(245,158,11,0.25)",
    icon: "workspace_premium",
  },
];

export default function MetricTicker() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Staggered card entrance from alternating directions
    if (cardRefs.current.length && !prefersReduced) {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 50, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    } else {
      cardRefs.current.forEach((card) => {
        if (card) gsap.set(card, { opacity: 1 });
      });
    }

    // Counter animations
    const statsObj = { v0: 0, v1: 0, v2: 0 };
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });

    tl.to(statsObj, {
      v0: 99.9,
      duration: prefersReduced ? 0 : 1.8,
      ease: "power2.out",
      onUpdate: () => {
        if (numRefs.current[0]) numRefs.current[0].textContent = statsObj.v0.toFixed(1) + "%";
      },
    }, 0)
    .to(statsObj, {
      v1: 20,
      duration: prefersReduced ? 0 : 1.6,
      ease: "power2.out",
      onUpdate: () => {
        if (numRefs.current[1]) numRefs.current[1].textContent = Math.floor(statsObj.v1) + "+";
      },
    }, 0.1)
    .to(statsObj, {
      v2: 500,
      duration: prefersReduced ? 0 : 2.2,
      ease: "power1.out",
      onUpdate: () => {
        if (numRefs.current[2]) numRefs.current[2].textContent = Math.floor(statsObj.v2) + "+";
      },
    }, 0.1);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full relative z-30 py-14 overflow-hidden gradient-mesh-1 border-y border-outline-variant/40"
    >
      {/* Subtle animated orb behind section */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-cyan-200/20 via-indigo-100/15 to-transparent blur-3xl rounded-full animate-pulse-glow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((m, i) => (
            <div
              key={m.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="group relative glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center overflow-hidden"
              style={{ opacity: 0 }}
            >
              {/* Gradient shimmer overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${m.accent} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-2xl pointer-events-none`} />

              {/* Glow dot at top */}
              <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-8 rounded-full blur-xl pointer-events-none`}
                style={{ background: m.glow }} />

              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.accent} flex items-center justify-center mb-3 shadow-lg`}
                style={{ boxShadow: `0 4px 14px -2px ${m.glow}` }}>
                <span className="material-symbols-outlined text-white text-lg">{m.icon}</span>
              </div>

              {/* Number */}
              <span
                ref={m.value !== null ? (el) => { numRefs.current[i] = el; } : undefined}
                className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight animate-counter-glow"
              >
                {m.display}
              </span>

              {/* Label */}
              <span className="font-sans text-xs font-bold text-primary mt-1.5 leading-tight">
                {m.label}
              </span>
              <span className="font-mono text-[10px] text-secondary mt-0.5 leading-tight">
                {m.sub}
              </span>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-gradient-to-r ${m.accent} rounded-full opacity-60`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
