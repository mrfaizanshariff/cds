"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { y: 32, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    }
  }, []);

  return (
    <section
      id="services-cta"
      className="w-full py-20 bg-surface cyber-dot-grid-subtle"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="rounded-3xl bg-primary text-white p-8 md:p-12 relative overflow-hidden"
          style={{ opacity: 0 }}
        >
          {/* Decorative icon watermark */}
          <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 opacity-[0.06] pointer-events-none select-none">
            <span className="material-symbols-outlined" style={{ fontSize: "18rem", lineHeight: 1 }}>
              architecture
            </span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 font-mono text-xs text-white/80 font-semibold uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                READY TO ENGAGE
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold leading-tight">
                Need a custom technical roadmap?
              </h2>
              <p className="mt-3 text-white/70 text-sm leading-relaxed">
                Our solutions architects are ready to scope your initiative. We provide full architectural
                diagrams, phased delivery plans, and milestone pricing for enterprise engagements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-sm hover:bg-zinc-100 transition-all duration-200"
              >
                <span>Schedule a Scope Call</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all duration-200"
              >
                About CData
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
