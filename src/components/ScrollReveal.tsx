"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  /**
   * Animation variant:
   *  "fadeUp"   – translate Y up + fade in (default, sections / blocks)
   *  "fadeIn"   – opacity only (subtle, sidebars / full-width blocks)
   *  "fadeLeft" – slide in from left (left columns)
   *  "fadeRight"– slide in from right (right columns)
   */
  variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight";
  /** Delay in seconds before the animation fires (used for stagger via index) */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** ScrollTrigger start position */
  start?: string;
  className?: string;
}

export default function ScrollReveal({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.85,
  start = "top 88%",
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    };

    if (variant === "fadeUp") {
      fromVars.y = 40;
      toVars.y = 0;
    } else if (variant === "fadeLeft") {
      fromVars.x = -36;
      toVars.x = 0;
    } else if (variant === "fadeRight") {
      fromVars.x = 36;
      toVars.x = 0;
    }
    // "fadeIn" has no translate — just opacity

    const tween = gsap.fromTo(el, fromVars, toVars);
    return () => {
      tween.kill();
    };
  }, [variant, delay, duration, start]);

  return (
    <div ref={ref} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
