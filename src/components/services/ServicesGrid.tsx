"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { num: "01", icon: "devices",       gradient: "from-blue-400 to-indigo-500",   glow: "rgba(59,130,246,0.2)",   tag: "FRONTEND & BACKEND",   title: "Application Development",          desc: "Scalable, full-stack enterprise applications built with type-safe, multi-tier architectures.",                                    href: "/services/application-development" },
  { num: "02", icon: "code_blocks",   gradient: "from-cyan-400 to-sky-500",      glow: "rgba(6,182,212,0.2)",    tag: "BESPOKE IP",           title: "Custom Software",                  desc: "Proprietary workflow engines and domain-specific software tailored to your operations.",                                           href: "/services/custom-software" },
  { num: "03", icon: "corporate_fare",gradient: "from-indigo-400 to-violet-500", glow: "rgba(99,102,241,0.2)",   tag: "ERP & FINANCIALS",     title: "Oracle E-Business Suite",          desc: "End-to-end Oracle EBS deployments, customizations, patches, and lifecycle upgrades.",                                             href: "/services/oracle-ebs" },
  { num: "04", icon: "terminal",      gradient: "from-emerald-400 to-teal-500",  glow: "rgba(16,185,129,0.2)",   tag: "DEVOPS MESH",          title: "Platform Engineering",             desc: "CI/CD automation, container orchestration, and internal developer platform design.",                                              href: "/services/platform-engineering" },
  { num: "05", icon: "shield_locked", gradient: "from-amber-400 to-orange-500",  glow: "rgba(245,158,11,0.2)",   tag: "DISASTER DEFENSE",     title: "Backup & Recovery",                desc: "Immutable air-gapped backups and automated disaster recovery with sub-15-minute RTO.",                                             href: "/services/backup-recovery" },
  { num: "06", icon: "storage",       gradient: "from-rose-400 to-pink-500",     glow: "rgba(244,63,94,0.2)",    tag: "SAN / NAS FABRIC",     title: "Storage Engineering",              desc: "High-throughput SAN/NAS architectures and EMC/NetApp optimization at petabyte scale.",                                            href: "/services/storage-engineering" },
  { num: "07", icon: "move_up",       gradient: "from-violet-400 to-purple-500", glow: "rgba(139,92,246,0.2)",   tag: "ZERO-DOWNTIME",        title: "Data Center Migration",            desc: "Zero-transaction-loss physical-to-virtual and on-premises-to-cloud lift-and-shift programs.",                                     href: "/services/data-center-migration" },
  { num: "08", icon: "database",      gradient: "from-teal-400 to-cyan-500",     glow: "rgba(20,184,166,0.2)",   tag: "ORACLE 19c / SQL",     title: "DBA Services",                     desc: "24/7 active database administration, query tuning, partitioning, and Oracle RAC support.",                                        href: "/services/dba-services" },
  { num: "09", icon: "cloud",         gradient: "from-sky-400 to-blue-500",      glow: "rgba(14,165,233,0.2)",   tag: "MULTI-CLOUD OCI",      title: "Cloud Infrastructure",             desc: "Hybrid cloud topology across Oracle Cloud, AWS, and Azure with unified governance.",                                               href: "/services/cloud-infrastructure" },
  { num: "10", icon: "hub",           gradient: "from-blue-400 to-cyan-500",     glow: "rgba(59,130,246,0.2)",   tag: "API & MIDDLEWARE",     title: "System Integration",               desc: "API fabric connecting legacy mainframes, ERP backbones, and third-party SaaS securely.",                                           href: "/services/system-integration" },
  { num: "11", icon: "support_agent", gradient: "from-secondary to-indigo-500",  glow: "rgba(59,130,246,0.2)",   tag: "24/7/365 MANAGED OPS", title: "IT Support & Managed Operations",  desc: "Tier 1–3 escalation desks, telemetry monitoring, patching cadences, and 15-minute SLAs.", href: "/services/managed-operations", wide: true },
];

export default function ServicesGrid() {
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
        gsap.fromTo(cards, { y: 36, opacity: 0, scale: 0.97 }, {
          y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.06, ease: "power3.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }
  }, []);

  const standard = services.filter((s) => !s.wide);
  const wide     = services.find((s) => s.wide)!;

  return (
    <section id="services-grid" className="w-full py-20 gradient-mesh-2 border-y border-outline-variant/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-outline-variant/40 text-xs font-mono text-secondary font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-secondary to-cyan-500" />
              WHAT WE DELIVER
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              Our Service Portfolio
            </h2>
            <p className="font-sans text-base text-secondary mt-2 max-w-2xl">
              Eleven core service lines engineered for enterprise resilience. Select any service to explore detailed capabilities, delivery methodology, and engagement options.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block shrink-0">11 / 11 ACTIVE DISCIPLINES</div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {standard.map((s) => (
            <Link
              data-card
              key={s.num}
              href={s.href}
              className="group glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between overflow-hidden relative"
              style={{ opacity: 0 }}
            >
              {/* Top gradient strip */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.gradient}`} />

              <div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-3 shadow-md`}
                  style={{ boxShadow: `0 3px 10px -2px ${s.glow}` }}>
                  <span className="material-symbols-outlined text-white text-xl">{s.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-base text-primary mb-1 group-hover:text-secondary transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-secondary leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono">
                <span className="text-outline">{s.tag}</span>
                <span className={`flex items-center gap-1 bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent font-bold`}>
                  <span>{s.num}</span>
                  <span className="material-symbols-outlined text-secondary text-[13px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}

          {/* Wide card */}
          <Link
            data-card
            href={wide.href}
            className="group glass-card glass-card-hover rounded-2xl p-5 flex flex-col justify-between sm:col-span-2 xl:col-span-2 overflow-hidden relative"
            style={{ opacity: 0 }}
          >
            <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${wide.gradient}`} />
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${wide.gradient} flex items-center justify-center mb-3 shadow-md`}>
                  <span className="material-symbols-outlined text-white text-xl">{wide.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-base text-primary mb-1 group-hover:text-secondary transition-colors">
                  {wide.title}
                </h3>
                <p className="font-sans text-xs text-secondary leading-relaxed max-w-lg">{wide.desc}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-secondary via-indigo-500 to-cyan-600 text-white font-headline text-xs font-semibold shrink-0 self-start sm:self-center shadow-md hover:scale-105 transition-all">
                <span>Inquire SLA</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
            <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono">
              <span className="text-outline">{wide.tag}</span>
              <span className="text-secondary font-bold">11 / 11 COMPLETE</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
