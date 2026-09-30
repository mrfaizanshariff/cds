"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MetricTicker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const statsObj = { num1: 0, num2: 0, num3: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // 1. Contractual Uptime SLA: 99.999%
    tl.to(statsObj, {
      num1: 99.9,
      duration: 1.6,
      ease: "power2.out",
      onUpdate: () => {
        if (num1Ref.current) {
          num1Ref.current.innerText = statsObj.num1.toFixed(1) + "%";
        }
      },
    }, 0);

    // 2. Avg Enterprise Savings: $8.4M
    tl.to(statsObj, {
      num2: 10,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        if (num2Ref.current) {
          num2Ref.current.innerText =   statsObj.num2.toFixed(0) +"+";
        }
      },
    }, 0);

    // 3. Enterprise Migrations: 500+
    tl.to(statsObj, {
      num3: 500,
      duration: 2,
      ease: "power1.out",
      onUpdate: () => {
        if (num3Ref.current) {
          num3Ref.current.innerText = Math.floor(statsObj.num3) + "+";
        }
      },
    }, 0);

    return () => { tl.kill(); };
  }, []);

  return (
    <section ref={containerRef} className="w-full bg-white border-y border-outline-variant/70 py-8 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-outline-variant/70">
          
          {/* Metric 1 */}
          <div className="flex flex-col items-center text-center p-3">
            <span ref={num1Ref} className="font-headline text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              99.9%
            </span>
            <span className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mt-1">
              Service Uptime
            </span>
            {/* <span className="font-mono text-[11px] text-outline mt-0.5">
              High-Availability RAC Architecture
            </span> */}
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col items-center text-center p-3 pt-6 sm:pt-3">
            <span ref={num2Ref} className="font-headline text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
              10+ 
            </span>
            <span className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mt-1">
              Years of Proven Success
            </span>
            {/* <span className="font-mono text-[11px] text-outline mt-0.5">
              Holistic License & Cloud Rightsizing
            </span> */}
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col items-center text-center p-3 pt-6 sm:pt-3">
            <span ref={num3Ref} className="font-headline text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight">
              500+
            </span>
            <span className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mt-1">
             Trust of Enterprise Organizations
            </span>
            {/* <span className="font-mono text-[11px] text-outline mt-0.5">
              Fortune 1000 & Global Public Sector
            </span> */}
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col items-center text-center p-3 pt-6 sm:pt-3">
            <span className="font-headline text-3xl sm:text-4xl font-extrabold text-tertiary tracking-tight">
              Oracle
            </span>
            <span className="font-sans text-xs font-semibold text-primary uppercase tracking-wider mt-1">
              Certified Partner
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
