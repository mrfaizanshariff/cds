"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerMesh() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    // 1. Entrance animation for the container
    const entranceTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 90%",
      toggleActions: "play none none none",
      onEnter: () => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
      },
    });

    // 2. Infinite horizontal ticker loop
    const track = trackRef.current;
    if (track) {
      const tween = gsap.to(track, {
        x: "-40%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
      animationRef.current = tween;
    }

    return () => {
      entranceTrigger.kill();
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  // Premium physics-like hover mechanics: smoothly deceleration & acceleration
  const handleMouseEnter = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 0.15, duration: 0.8, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, { timeScale: 1, duration: 0.8, ease: "power2.out" });
    }
  };

  const partners = [
    {
      name: "Oracle",
      node: (
        <div className="flex items-center gap-2 font-headline font-bold text-lg text-primary hover:text-red-600 transition-colors duration-200 cursor-pointer group">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
          <span>ORACLE</span>
        </div>
      )
    },
    {
      name: "AWS",
      node: (
        <div className="flex items-center gap-1.5 font-headline font-semibold text-base text-primary hover:text-amber-500 transition-colors duration-200 cursor-pointer group">
          <span className="font-bold text-lg text-amber-500 group-hover:scale-105 transition-transform">AWS</span>
          <span className="text-xs font-mono text-outline">Partner</span>
        </div>
      )
    },
    {
      name: "Microsoft",
      node: (
        <div className="flex items-center gap-2 font-headline font-bold text-base text-primary hover:text-blue-600 transition-colors duration-200 cursor-pointer group">
          <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 group-hover:rotate-45 transition-transform" />
          <span>MICROSOFT</span>
        </div>
      )
    },
    {
      name: "Dell EMC",
      node: (
        <div className="flex items-center gap-1 font-headline font-bold text-base text-primary hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
          <span>DELL</span>
          <span className="text-secondary font-mono">EMC</span>
        </div>
      )
    },
    {
      name: "Cisco",
      node: (
        <div className="flex items-center gap-2 font-headline font-bold text-base text-primary hover:text-sky-600 transition-colors duration-200 cursor-pointer group">
          <span className="material-symbols-outlined text-sky-600 text-lg group-hover:rotate-12 transition-transform">router</span>
          <span>CISCO</span>
        </div>
      )
    },
    {
      name: "Red Hat",
      node: (
        <div className="flex items-center gap-1.5 font-headline font-semibold text-base text-primary hover:text-red-700 transition-colors duration-200 cursor-pointer group">
          <span className="w-2 h-2 rounded-full bg-red-700 group-hover:animate-ping" />
          <span>RED HAT</span>
        </div>
      )
    }
  ];

  return (
    <section ref={containerRef} className="w-full bg-white border-y border-outline-variant/60 py-12 relative z-30 opacity-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="font-mono text-xs text-center uppercase tracking-widest text-outline mb-10">
          CERTIFIED STRATEGIC ALLIANCES & PLATFORM INTEGRATIONS
        </p>
        
        {/* Infinite Loop Ticker Container */}
        <div className="relative w-full overflow-hidden select-none">
          {/* Subtle horizontal mask gradients to fade edge logos */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={trackRef}
            className="flex items-center gap-16 whitespace-nowrap w-max cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* First Set of Logos */}
            <div className="flex items-center gap-16">
              {partners.map((partner, idx) => (
                <div key={`p1-${idx}`} className="flex-shrink-0">
                  {partner.node}
                </div>
              ))}
            </div>

            {/* Second Set of Logos (Identical Duplication for Infinite Ticker) */}
            <div className="flex items-center gap-16">
              {partners.map((partner, idx) => (
                <div key={`p2-${idx}`} className="flex-shrink-0">
                  {partner.node}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
