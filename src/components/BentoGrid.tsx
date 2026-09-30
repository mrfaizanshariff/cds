"use client";

import { useEffect, useRef } from "react";
import NextLink from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BentoGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);
  const card7Ref = useRef<HTMLDivElement>(null);
  const card8Ref = useRef<HTMLDivElement>(null);
  const card9Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = [
      card1Ref.current,
      card2Ref.current,
      card3Ref.current,
      card4Ref.current,
      card5Ref.current,
      card6Ref.current,
      card7Ref.current,
      card8Ref.current,
      card9Ref.current
    ];

    const tween = gsap.fromTo(
      cards,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full py-24 cyber-dot-grid-subtle relative z-30" id="disciplines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-secondary uppercase font-semibold">
              <span className="w-2.5 h-2.5 rounded-sm bg-secondary" />
              CORE DISCIPLINES & SPECIALIZATIONS
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary mt-2 tracking-tight">
              Enterprise IT Services & Solutions
            </h2>
            <p className="font-sans text-base text-on-surface-variant mt-3 leading-relaxed">
              C Data Systems delivers comprehensive IT solutions across nine core service areas. Whether you need Oracle ERP modernization, cloud infrastructure transformation, enterprise data protection, or business intelligence platforms, our expert team brings specialized knowledge and proven methodologies to drive measurable business results.
            </p>
          </div>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Bento 1: Oracle ERP & Modernization (7 cols) */}
          <div
            ref={card1Ref}
            className="md:col-span-7 spatial-card spatial-card-hover rounded-3xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group opacity-0"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-bl-full pointer-events-none -z-0" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">database</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-surface-container font-semibold text-secondary">
                  TIER 1 PLATINUM
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                 Oracle ERP & Database Solutions
              </h3>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed mb-6">
                C Data Systems specializes in maximizing Oracle investments through specialized consulting, implementation, and optimization. Our Oracle-certified team delivers Oracle E-Business Suite modernization, Oracle Database optimization covering versions 10g, 11g, 12c, and 19c, Real Application Clustering (RAC), and Oracle Cloud Infrastructure solutions. We help enterprises reduce costs by 25-40% and improve performance by 50% or more through expert architecture and tuning.
              </p>
              
              {/* Concise Tech Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-outline-variant/60">
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Oracle ERP implementation and upgrades</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Database optimization and performance tuning</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Oracle Cloud Infrastructure migration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>24/7 managed database services</span>
                </div>
              </div>
            </div>
            
            <div className="pt-8 relative z-10 flex items-center justify-between">
              <NextLink className="inline-flex items-center gap-2 font-headline text-sm font-semibold text-secondary hover:text-primary transition-colors" href="/services">
                <span>Learn About Oracle Solutions</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </NextLink>
              <span className="font-mono text-[11px] text-outline">REF: ORCL-ENG</span>
            </div>
          </div>

          {/* Bento 2: Multi-Cloud Infrastructure (5 cols) */}
          <div
            ref={card2Ref}
            className="md:col-span-5 spatial-card spatial-card-hover rounded-3xl p-8 flex flex-col justify-between group opacity-0"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">cloud</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 font-semibold">
                  OCI // AWS // AZURE
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">
                Cloud Computing & Infrastructure Solutions
              </h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-6">
                Transform your IT infrastructure with scalable, secure cloud solutions. C Data Systems provides end-to-end cloud enablement, from private cloud strategy and hybrid cloud architecture to public cloud migration and management. We architect cloud solutions that reduce infrastructure costs by 30-40%, improve agility, and support your digital transformation roadmap.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-outline-variant/60 font-mono text-xs text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Private and hybrid cloud strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Cloud migration and infrastructure modernization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Cloud-native architecture design</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>Cloud cost optimization and management</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <NextLink className="inline-flex items-center gap-2 font-headline text-xs font-semibold text-cyan-700 hover:text-primary transition-colors" href="/services">
                <span>Explore Cloud Solutions</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </NextLink>
            </div>
          </div>

          {/* Bento 3: Zero-Trust Data Protection & Air-Gapped DR (5 cols) */}
          <div
            ref={card3Ref}
            className="md:col-span-5 spatial-card spatial-card-hover rounded-3xl p-8 flex flex-col justify-between group opacity-0"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">security</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 font-semibold">
                  AIR-GAPPED
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">
                Data Protection, Backup & DR
              </h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-6">
                Protect mission-critical data with enterprise-grade backup and disaster recovery solutions. Our data protection experts design and implement comprehensive strategies including backup infrastructure, immutable backups that are resistant to ransomware, disaster recovery planning, and business continuity frameworks. Achieve 99.9% uptime and rapid recovery with compliance-aligned protection meeting HIPAA, PCI-DSS, and SOC 2 standards.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-outline-variant/60 font-mono text-xs text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Backup architecture and implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Disaster recovery planning and testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Ransomware and threat protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>24/7 managed backup services</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <NextLink className="inline-flex items-center gap-2 font-headline text-xs font-semibold text-indigo-700 hover:text-primary transition-colors" href="/services">
                <span>Protect Your Data</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </NextLink>
            </div>
          </div>

          {/* Bento 4: Enterprise BI, Analytics & SCM Integration (7 cols) */}
          <div
            ref={card4Ref}
            className="md:col-span-7 spatial-card spatial-card-hover rounded-3xl p-8 lg:p-10 flex flex-col justify-between group opacity-0"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">hub</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-semibold">
                  REAL-TIME PIPELINES
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                Business Intelligence & Data Analytics
              </h3>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed mb-6">
               Transform data into competitive advantage with modern business intelligence solutions. C Data Systems helps enterprises centralize fragmented data, build enterprise data warehouses, and deploy real-time analytics dashboards. Our BI platforms enable data-driven decision making, improve operational efficiency, and unlock new revenue opportunities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-outline-variant/60 font-mono text-xs text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">insights</span>
                  <span>Data warehouse design and implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">precision_manufacturing</span>
                  <span>Business intelligence platform deployment</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">storage</span>
                  <span>Enterprise reporting and analytics consulting</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">fact_check</span>
                  <span>Real-time analytics dashboards</span>
                </div>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between">
              <NextLink className="inline-flex items-center gap-2 font-headline text-sm font-semibold text-emerald-700 hover:text-primary transition-colors" href="/services">
                <span>Explore BI Solutions</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </NextLink>
              <span className="font-mono text-[11px] text-outline">REF: BI-SCM-DATA</span>
            </div>
          </div>

          {/* Bento 5: Virtualization & Infrastructure Services (7 cols) */}
          <div
            ref={card5Ref}
            className="md:col-span-7 spatial-card spatial-card-hover rounded-3xl p-8 lg:p-10 flex flex-col justify-between group opacity-0"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">dns</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-purple-50 text-purple-700 font-semibold">
                  INFRASTRUCTURE // VIRTUALIZATION
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                Virtualization & Infrastructure Services
              </h3>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed mb-6">
                Optimize IT infrastructure through enterprise virtualization, storage engineering, and systems consolidation. Our virtualization expertise reduces infrastructure costs, improves resource utilization, and increases system availability. We design and implement virtualized environments that support business growth while simplifying IT operations management.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-outline-variant/60 font-mono text-xs text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Server virtualization architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Storage engineering & optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Infrastructure consolidation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Virtualization management & support</span>
                </div>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between">
              <NextLink className="inline-flex items-center gap-2 font-headline text-sm font-semibold text-purple-700 hover:text-primary transition-colors" href="/services">
                <span>Optimize Your Infrastructure</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </NextLink>
              <span className="font-mono text-[11px] text-outline">REF: INFRA-VIRT</span>
            </div>
          </div>

          {/* Bento 6: Supply Chain Management Solutions (5 cols) */}
          <div
            ref={card6Ref}
            className="md:col-span-5 spatial-card spatial-card-hover rounded-3xl p-8 flex flex-col justify-between group opacity-0"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">inventory_2</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-semibold">
                  ORACLE SCM // LOGISTICS
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">
                Supply Chain Management Solutions
              </h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-6">
                Streamline supply chain operations with modern SCM platforms and optimization strategies. C Data Systems implements supply chain management systems that improve visibility, reduce costs, and enhance operational efficiency. From platform selection to implementation and ongoing optimization, we help enterprises achieve supply chain excellence.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-outline-variant/60 font-mono text-xs text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>SCM platform implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Supply chain optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Vendor integration & collaboration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Supply chain analytics & visibility</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <NextLink className="inline-flex items-center gap-2 font-headline text-xs font-semibold text-amber-700 hover:text-primary transition-colors" href="/services">
                <span>Explore Supply Chain Solutions</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </NextLink>
            </div>
          </div>

          {/* Bento 7: Customer Relationship Management (CRM) (5 cols) */}
          <div
            ref={card7Ref}
            className="md:col-span-5 spatial-card spatial-card-hover rounded-3xl p-8 flex flex-col justify-between group opacity-0"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">groups</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-pink-50 text-pink-700 font-semibold">
                  CRM // CUSTOMER SUCCESS
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">
                Customer Relationship Management (CRM)
              </h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed mb-6">
                Build stronger customer relationships and improve business outcomes with modern CRM solutions. C Data Systems delivers end-to-end CRM implementation, customization, and integration services. Our CRM platforms improve sales effectiveness, customer retention, and overall business growth while ensuring high user adoption.
              </p>
              <div className="space-y-2.5 pt-2 border-t border-outline-variant/60 font-mono text-xs text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>Platform selection & implementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>CRM customization & integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>User training & adoption programs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                  <span>CRM analytics & optimization</span>
                </div>
              </div>
            </div>
            <div className="pt-6">
              <NextLink className="inline-flex items-center gap-2 font-headline text-xs font-semibold text-pink-700 hover:text-primary transition-colors" href="/services">
                <span>CRM Solutions</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </NextLink>
            </div>
          </div>

          {/* Bento 8: Application Testing & Quality Assurance (7 cols) */}
          <div
            ref={card8Ref}
            className="md:col-span-7 spatial-card spatial-card-hover rounded-3xl p-8 lg:p-10 flex flex-col justify-between group opacity-0"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">fact_check</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-rose-50 text-rose-700 font-semibold">
                  QUALITY ASSURANCE // SDLC
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-primary mb-3">
                Application Testing & Quality Assurance
              </h3>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed mb-6">
                Ensure application quality and reliability with comprehensive testing and QA services. C Data Systems delivers functional testing, performance testing, automation, compliance validation, and quality assurance across the entire software development lifecycle. Our testing expertise reduces defects, accelerates deployment, and improves user experience.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-outline-variant/60 font-mono text-xs text-on-surface">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Functional and performance testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Test automation & continuous QA</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Compliance and regulatory testing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Quality assurance consulting</span>
                </div>
              </div>
            </div>
            <div className="pt-8 flex items-center justify-between">
              <NextLink className="inline-flex items-center gap-2 font-headline text-sm font-semibold text-rose-700 hover:text-primary transition-colors" href="/services">
                <span>Testing & QA Services</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </NextLink>
              <span className="font-mono text-[11px] text-outline">REF: QA-SDLC</span>
            </div>
          </div>

          {/* Bento 9: Storage Engineering & Infrastructure Solutions (12 cols - Focal Centerpiece) */}
          <div
            ref={card9Ref}
            className="md:col-span-12 spatial-card spatial-card-hover rounded-3xl p-8 lg:p-10 flex flex-col md:flex-row justify-between relative overflow-hidden group opacity-0 gap-8"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-teal-50 to-transparent rounded-bl-full pointer-events-none -z-0" />
            <div className="relative z-10 flex-1">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">storage</span>
                </div>
                <span className="font-mono text-xs px-3 py-1 rounded-full bg-teal-50 text-teal-700 font-semibold">
                  DELL EMC // SAN FABRICS
                </span>
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-primary mb-3">
                Storage Engineering & Infrastructure Solutions
              </h3>
              <p className="font-sans text-on-surface-variant text-base leading-relaxed mb-6 max-w-3xl">
                Design and implement enterprise storage infrastructure that meets performance, capacity, and availability requirements. Our storage engineering experts work with EMC and other leading storage platforms to architect scalable, reliable storage environments. Optimize storage utilization, improve performance, and reduce costs through expert design and implementation.
              </p>
              
              {/* Concise Tech Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 pt-4 border-t border-outline-variant/60">
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Storage design & deploy</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>EMC platform expertise</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Storage optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-on-surface">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check_circle</span>
                  <span>Storage management & support</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-end items-end relative z-10 md:min-w-[200px] gap-2 pt-6 md:pt-0">
              <NextLink className="w-full text-center md:text-right inline-flex items-center justify-center md:justify-end gap-2 font-headline text-sm font-semibold text-teal-700 hover:text-primary transition-colors" href="/services">
                <span>Storage Solutions</span>
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </NextLink>
              <span className="font-mono text-[11px] text-outline text-right w-full block">REF: SAN-EMC-ENG</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
