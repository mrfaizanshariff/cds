"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    num: "01",
    icon: "devices",
    iconBg: "bg-blue-50",
    iconColor: "text-secondary",
    tag: "FRONTEND & BACKEND",
    title: "Application Development",
    desc: "Scalable, full-stack enterprise applications built with type-safe, multi-tier architectures.",
    href: "/services/application-development",
  },
  {
    num: "02",
    icon: "code_blocks",
    iconBg: "bg-cyan-50",
    iconColor: "text-cyan-700",
    tag: "BESPOKE IP",
    title: "Custom Software",
    desc: "Proprietary workflow engines and domain-specific software tailored to your operations.",
    href: "/services/custom-software",
  },
  {
    num: "03",
    icon: "corporate_fare",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    tag: "ERP & FINANCIALS",
    title: "Oracle E-Business Suite",
    desc: "End-to-end Oracle EBS deployments, customizations, patches, and lifecycle upgrades.",
    href: "/services/oracle-ebs",
  },
  {
    num: "04",
    icon: "terminal",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-700",
    tag: "DEVOPS MESH",
    title: "Platform Engineering",
    desc: "CI/CD automation, container orchestration, and internal developer platform design.",
    href: "/services/platform-engineering",
  },
  {
    num: "05",
    icon: "shield_locked",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-700",
    tag: "DISASTER DEFENSE",
    title: "Backup & Recovery",
    desc: "Immutable air-gapped backups and automated disaster recovery with sub-15-minute RTO.",
    href: "/services/backup-recovery",
  },
  {
    num: "06",
    icon: "storage",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-700",
    tag: "SAN / NAS FABRIC",
    title: "Storage Engineering",
    desc: "High-throughput SAN/NAS architectures and EMC/NetApp optimization at petabyte scale.",
    href: "/services/storage-engineering",
  },
  {
    num: "07",
    icon: "move_up",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-700",
    tag: "ZERO-DOWNTIME",
    title: "Data Center Migration",
    desc: "Zero-transaction-loss physical-to-virtual and on-premises-to-cloud lift-and-shift programs.",
    href: "/services/data-center-migration",
  },
  {
    num: "08",
    icon: "database",
    iconBg: "bg-teal-50",
    iconColor: "text-teal-700",
    tag: "ORACLE 19c / SQL",
    title: "DBA Services",
    desc: "24/7 active database administration, query tuning, partitioning, and Oracle RAC support.",
    href: "/services/dba-services",
  },
  {
    num: "09",
    icon: "cloud",
    iconBg: "bg-sky-50",
    iconColor: "text-sky-700",
    tag: "MULTI-CLOUD OCI",
    title: "Cloud Infrastructure",
    desc: "Hybrid cloud topology across Oracle Cloud, AWS, and Azure with unified governance.",
    href: "/services/cloud-infrastructure",
  },
  {
    num: "10",
    icon: "hub",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-700",
    tag: "API & MIDDLEWARE",
    title: "System Integration",
    desc: "API fabric connecting legacy mainframes, ERP backbones, and third-party SaaS securely.",
    href: "/services/system-integration",
  },
  {
    num: "11",
    icon: "support_agent",
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    tag: "24/7/365 MANAGED OPS",
    title: "IT Support & Managed Operations",
    desc: "Tier 1–3 escalation desks, telemetry monitoring, patching cadences, and 15-minute SLAs.",
    href: "/services/managed-operations",
    wide: true,
  },
];

export default function ServicesGrid() {
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: headingRef.current, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    }
    if (gridRef.current) {
      const cards = Array.from(gridRef.current.querySelectorAll<HTMLElement>("[data-card]"));
      if (cards.length) {
        gsap.fromTo(
          cards,
          { y: 28, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.55, stagger: 0.07, ease: "power3.out",
            scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      }
    }
  }, []);

  const standard = services.filter((s) => !s.wide);
  const wide     = services.find((s) => s.wide)!;

  return (
    <section
      id="services-grid"
      className="w-full py-20 bg-white border-y border-outline-variant/50 cyber-dot-grid-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" style={{ opacity: 0 }}>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              WHAT WE DELIVER
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
              Our Service Portfolio
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-2 max-w-2xl">
              Eleven core service lines engineered for enterprise resilience. Select any service to explore
              detailed capabilities, delivery methodology, and engagement options.
            </p>
          </div>
          <div className="font-mono text-xs text-outline hidden md:block shrink-0">
            11 / 11 ACTIVE DISCIPLINES
          </div>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {standard.map((s) => (
            <Link
              data-card
              key={s.num}
              href={s.href}
              className="group spatial-card spatial-card-hover rounded-2xl p-5 border border-outline-variant/60 flex flex-col justify-between transition-all duration-200 hover:border-secondary/40 hover:shadow-md"
              style={{ opacity: 0 }}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${s.iconBg} ${s.iconColor} flex items-center justify-center mb-3`}>
                  <span className="material-symbols-outlined text-xl">{s.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-base text-primary mb-1 group-hover:text-secondary transition-colors">
                  {s.title}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-outline-variant/40 flex items-center justify-between text-[11px] font-mono">
                <span className="text-outline">{s.tag}</span>
                <span className="flex items-center gap-1 text-secondary font-semibold">
                  <span>{s.num}</span>
                  <span className="material-symbols-outlined text-[13px] translate-x-0 group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}

          {/* Wide card: Managed Operations */}
          <Link
            data-card
            href={wide.href}
            className="group spatial-card spatial-card-hover rounded-2xl p-5 border border-outline-variant/60 flex flex-col justify-between sm:col-span-2 xl:col-span-2 bg-gradient-to-r from-white to-blue-50/40 transition-all duration-200 hover:border-secondary/40 hover:shadow-md"
            style={{ opacity: 0 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className={`w-10 h-10 rounded-xl ${wide.iconBg} ${wide.iconColor} flex items-center justify-center mb-3`}>
                  <span className="material-symbols-outlined text-xl">{wide.icon}</span>
                </div>
                <h3 className="font-headline font-semibold text-base text-primary mb-1 group-hover:text-secondary transition-colors">
                  {wide.title}
                </h3>
                <p className="font-sans text-xs text-on-surface-variant leading-relaxed max-w-lg">{wide.desc}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-secondary text-white font-headline text-xs font-semibold shrink-0 self-start sm:self-center">
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
