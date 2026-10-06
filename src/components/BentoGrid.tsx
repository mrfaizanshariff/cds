"use client";

import { useEffect, useRef } from "react";
import NextLink from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    span: 7,
    icon: "database",
    gradient: "from-blue-500 to-indigo-600",
    glow: "rgba(59,130,246,0.18)",
    hoverGlow: "rgba(59,130,246,0.12)",
    tag: "ORACLE PLATINUM",
    title: "Oracle ERP & Database Solutions",
    desc: "Maximize Oracle investments through specialized consulting, implementation, and optimization. Certified Oracle EBS, RAC, and OCI solutions with 20+ years of production experience.",
    bullets: [
      "Oracle EBS implementation & upgrades (12.1 / 12.2)",
      "Oracle Database 19c optimization & RAC tuning",
      "OCI Cloud migration & cost right-sizing",
      "24/7 managed database services",
    ],
    linkText: "Learn About Oracle Solutions",
    linkHref: "/services",
    accentFrom: "from-blue-400",
    accentTo: "to-indigo-500",
  },
  {
    span: 5,
    icon: "cloud",
    gradient: "from-cyan-500 to-sky-600",
    glow: "rgba(6,182,212,0.18)",
    hoverGlow: "rgba(6,182,212,0.10)",
    tag: "OCI · AWS · AZURE",
    title: "Cloud Computing & Infrastructure",
    desc: "Transform IT infrastructure with scalable, secure cloud solutions. Hybrid cloud topology design across Oracle Cloud, AWS, and Azure with unified governance.",
    bullets: [
      "Hybrid & multi-cloud architecture",
      "Cloud migration & infrastructure modernization",
      "Cloud-native application development",
      "Cost optimization & governance",
    ],
    linkText: "Explore Cloud Solutions",
    linkHref: "/services",
    accentFrom: "from-cyan-400",
    accentTo: "to-sky-500",
  },
  {
    span: 7,
    icon: "security",
    gradient: "from-indigo-500 to-violet-600",
    glow: "rgba(99,102,241,0.18)",
    hoverGlow: "rgba(99,102,241,0.10)",
    tag: "AIR-GAPPED",
    title: "Data Protection & Disaster Recovery",
    desc: "Enterprise-grade backup and DR solutions. Immutable air-gapped backups, zero-trust network segmentation, and sub-15-minute RTOs compliant with HIPAA, PCI-DSS, SOC 2.",
    bullets: [
      "Air-gapped immutable backup architecture",
      "Disaster recovery planning & testing",
      "Ransomware threat protection & encryption",
      "24/7 managed backup services",
    ],
    linkText: "Protect Your Data",
    linkHref: "/services",
    accentFrom: "from-indigo-400",
    accentTo: "to-violet-500",
  },
  {
    span: 5,
    icon: "hub",
    gradient: "from-emerald-500 to-teal-600",
    glow: "rgba(16,185,129,0.18)",
    hoverGlow: "rgba(16,185,129,0.10)",
    tag: "REAL-TIME PIPELINES",
    title: "Business Intelligence & Analytics",
    desc: "Turn data into competitive advantage with modern BI platforms. Enterprise data warehouses, real-time analytics dashboards, and predictive modeling pipelines.",
    bullets: [
      "Data warehouse design & implementation",
      "Business intelligence platform deployment",
      "Real-time analytics dashboards",
      "Enterprise reporting & data governance",
    ],
    linkText: "Explore BI Solutions",
    linkHref: "/services",
    accentFrom: "from-emerald-400",
    accentTo: "to-teal-500",
  },
  {
    span: 7,
    icon: "dns",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.18)",
    hoverGlow: "rgba(139,92,246,0.10)",
    tag: "INFRA · VIRTUALIZATION",
    title: "Storage & Virtualization Services",
    desc: "Enterprise storage infrastructure design and optimization. Dell EMC, NetApp SAN/NAS architectures, NVMe over Fabrics, and virtualized compute clusters.",
    bullets: [
      "Storage design & deployment",
      "EMC / NetApp platform expertise",
      "Storage optimization & tiering",
      "Management & support services",
    ],
    linkText: "Optimize Your Infrastructure",
    linkHref: "/services",
    accentFrom: "from-violet-400",
    accentTo: "to-purple-500",
  },
  {
    span: 5,
    icon: "fact_check",
    gradient: "from-rose-500 to-pink-600",
    glow: "rgba(244,63,94,0.18)",
    hoverGlow: "rgba(244,63,94,0.10)",
    tag: "QA · SDLC",
    title: "Testing & Quality Assurance",
    desc: "Comprehensive QA and testing services across the software development lifecycle. Functional testing, performance testing, automation, and compliance validation.",
    bullets: [
      "Functional & performance testing",
      "Test automation & continuous QA",
      "Compliance & regulatory testing",
      "QA consulting & strategy",
    ],
    linkText: "Testing & QA Services",
    linkHref: "/services",
    accentFrom: "from-rose-400",
    accentTo: "to-pink-500",
  },
];

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { y: 36, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: titleRef.current, start: "top 86%", toggleActions: "play none none none" },
      });
    }

    if (cardsRef.current) {
      const els = Array.from(cardsRef.current.querySelectorAll<HTMLElement>("[data-bento-card]"));
      if (els.length) {
        gsap.fromTo(els, { y: 60, opacity: 0, scale: 0.97 }, {
          y: 0, opacity: 1, scale: 1,
          duration: 1.0, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 83%", toggleActions: "play none none none" },
        });

        // 3D tilt on hover
        if (!prefersReduced) {
          els.forEach((card) => {
            card.addEventListener("mousemove", (e) => {
              const rect = card.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
              gsap.to(card, { rotationY: x, rotationX: y, duration: 0.4, ease: "power2.out" });
            });
            card.addEventListener("mouseleave", () => {
              gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.7, ease: "elastic.out(1,0.75)" });
            });
          });
        }
      }
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="disciplines"
      className="w-full py-24 relative overflow-hidden gradient-mesh-2"
    >
      {/* Background orbs */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[450px] bg-gradient-to-br from-cyan-200/20 via-indigo-100/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[550px] h-[350px] bg-gradient-to-tl from-violet-200/15 via-purple-100/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="mb-20 max-w-3xl" style={{ opacity: 0 }}>
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass border border-outline-variant/40 text-xs font-mono text-secondary font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-cyan-500" />
            CORE DISCIPLINES &amp; SPECIALIZATIONS
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight leading-[1.1] mb-5">
            Enterprise IT Services
            <br />
            <span className="bg-gradient-to-r from-secondary via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              &amp; Solutions
            </span>
          </h2>
          <p className="font-sans text-lg text-secondary leading-relaxed max-w-2xl">
            C Data Systems delivers comprehensive IT solutions across seven core service areas — from Oracle ERP modernization to cloud infrastructure transformation, data protection, and business intelligence.
          </p>
        </div>

        {/* Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              data-bento-card
              className={`md:col-span-${card.span} group relative rounded-3xl overflow-hidden glass-card glass-card-hover cursor-default`}
              style={{ opacity: 0, perspective: "800px" }}
            >
              {/* Animated gradient glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${card.glow}, transparent 70%)` }}
              />

              {/* Top color strip */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.accentFrom} ${card.accentTo}`} />

              <div className="flex flex-col h-full p-7 lg:p-8">
                {/* Header row */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 6px 20px -4px ${card.glow}` }}
                  >
                    <span className="material-symbols-outlined text-white text-2xl">{card.icon}</span>
                  </div>
                  <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full glass border border-outline-variant/40 font-bold text-secondary`}>
                    {card.tag}
                  </span>
                </div>

                <h3 className="font-headline text-xl font-bold text-primary mb-2.5">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-secondary leading-relaxed mb-5">
                  {card.desc}
                </p>

                {/* Bullet list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 flex-1">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2 text-xs font-sans text-secondary">
                      <div className={`mt-0.5 w-4 h-4 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center shrink-0 shadow-sm`}>
                        <span className="material-symbols-outlined text-white text-[10px]">check</span>
                      </div>
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Footer link */}
                <div className="pt-4 border-t border-outline-variant/40 flex items-center justify-between">
                  <NextLink
                    className={`inline-flex items-center gap-2 font-headline text-sm font-semibold bg-gradient-to-r ${card.accentFrom} ${card.accentTo} bg-clip-text text-transparent hover:opacity-80 transition-opacity`}
                    href={card.linkHref}
                  >
                    <span>{card.linkText}</span>
                    <span className="material-symbols-outlined text-secondary text-lg group-hover:translate-x-0.5 transition-transform">
                      arrow_forward
                    </span>
                  </NextLink>
                  {card.span === 7 && (
                    <div className={`w-1.5 h-8 rounded-full bg-gradient-to-b ${card.accentFrom} ${card.accentTo} opacity-60`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
