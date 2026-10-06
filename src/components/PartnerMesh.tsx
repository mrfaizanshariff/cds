"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<gsap.core.Tween | null>(null);
  const headingRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Entrance
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 92%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Infinite scroll ticker
    const track = trackRef.current;
    if (track) {
      const tween = gsap.to(track, {
        x: "-50%",
        duration: 24,
        ease: "none",
        repeat: -1,
      });
      animRef.current = tween;
    }

    return () => {
      if (animRef.current) animRef.current.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleMouseEnter = () => {
    if (animRef.current) {
      gsap.to(animRef.current, { timeScale: 0.1, duration: 0.9, ease: "power2.out" });
    }
  };
  const handleMouseLeave = () => {
    if (animRef.current) {
      gsap.to(animRef.current, { timeScale: 1, duration: 0.9, ease: "power2.inOut" });
    }
  };

  const partners = [
    {
      name: "Oracle",
      gradient: "from-red-500 to-rose-600",
      glow: "rgba(239,68,68,0.2)",
      node: (
        <div className="group flex items-center gap-3 px-5 py-3 glass-card glass-card-hover rounded-2xl cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-md">
            <span className="w-3 h-3 rounded-full bg-white/90" />
          </div>
          <span className="font-headline font-bold text-base text-primary group-hover:text-red-600 transition-colors duration-200">
            ORACLE
          </span>
        </div>
      ),
    },
    {
      name: "AWS",
      gradient: "from-amber-400 to-orange-500",
      glow: "rgba(245,158,11,0.2)",
      node: (
        <div className="group flex items-center gap-3 px-5 py-3 glass-card glass-card-hover rounded-2xl cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
            <span className="font-headline font-bold text-[11px] text-white">AWS</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-sm text-primary group-hover:text-amber-600 transition-colors">Amazon Web Services</span>
            <span className="font-mono text-[9px] text-outline">Cloud Partner</span>
          </div>
        </div>
      ),
    },
    {
      name: "Microsoft",
      gradient: "from-blue-500 to-indigo-600",
      glow: "rgba(59,130,246,0.2)",
      node: (
        <div className="group flex items-center gap-3 px-5 py-3 glass-card glass-card-hover rounded-2xl cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
              <div className="bg-white/90 rounded-sm" />
              <div className="bg-white/70 rounded-sm" />
              <div className="bg-white/70 rounded-sm" />
              <div className="bg-white/90 rounded-sm" />
            </div>
          </div>
          <span className="font-headline font-bold text-base text-primary group-hover:text-blue-600 transition-colors duration-200">
            MICROSOFT
          </span>
        </div>
      ),
    },
    {
      name: "Dell EMC",
      gradient: "from-cyan-500 to-blue-600",
      glow: "rgba(6,182,212,0.2)",
      node: (
        <div className="group flex items-center gap-3 px-5 py-3 glass-card glass-card-hover rounded-2xl cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-white text-[14px]">storage</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline font-bold text-sm text-primary group-hover:text-cyan-600 transition-colors">DELL EMC</span>
            <span className="font-mono text-[9px] text-outline">Storage Partner</span>
          </div>
        </div>
      ),
    },
    {
      name: "Cisco",
      gradient: "from-sky-500 to-blue-500",
      glow: "rgba(14,165,233,0.2)",
      node: (
        <div className="group flex items-center gap-3 px-5 py-3 glass-card glass-card-hover rounded-2xl cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-white text-[14px]">router</span>
          </div>
          <span className="font-headline font-bold text-base text-primary group-hover:text-sky-600 transition-colors duration-200">
            CISCO
          </span>
        </div>
      ),
    },
    {
      name: "Red Hat",
      gradient: "from-red-600 to-rose-700",
      glow: "rgba(220,38,38,0.2)",
      node: (
        <div className="group flex items-center gap-3 px-5 py-3 glass-card glass-card-hover rounded-2xl cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-md">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
          <span className="font-headline font-bold text-base text-primary group-hover:text-red-700 transition-colors duration-200">
            RED HAT
          </span>
        </div>
      ),
    },
    {
      name: "VMware",
      gradient: "from-indigo-500 to-violet-600",
      glow: "rgba(99,102,241,0.2)",
      node: (
        <div className="group flex items-center gap-3 px-5 py-3 glass-card glass-card-hover rounded-2xl cursor-pointer select-none">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-white text-[14px]">dns</span>
          </div>
          <span className="font-headline font-bold text-base text-primary group-hover:text-indigo-600 transition-colors duration-200">
            VMWARE
          </span>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={containerRef}
      className="w-full gradient-mesh-1 border-y border-outline-variant/40 py-14 relative z-30 opacity-0 overflow-hidden"
    >
      {/* Background glow orb */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-gradient-to-r from-secondary/10 via-cyan-200/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <p
          ref={headingRef}
          className="font-mono text-[11px] text-center uppercase tracking-widest text-outline mb-8 opacity-0"
        >
          Certified Strategic Alliances &amp; Platform Integrations
        </p>

        {/* Infinite ticker */}
        <div className="relative w-full overflow-hidden select-none">
          {/* Edge fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex items-center gap-4 whitespace-nowrap w-max cursor-pointer py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* First set */}
            <div className="flex items-center gap-4">
              {partners.map((p, i) => (
                <div key={`a-${i}`} className="flex-shrink-0">{p.node}</div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center gap-4">
              {partners.map((p, i) => (
                <div key={`b-${i}`} className="flex-shrink-0">{p.node}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
