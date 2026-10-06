"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FloatingOrb {
  id: number;
  size: number;
  delay: number;
  duration: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

/**
 * ParallaxFloatingOrbs — a set of abstract, softly-animated orbs
 * that drift in the background behind content. Their positions
 * shift on scroll (parallax) and gently pulse / drift on idle.
 *
 * Respects `prefers-reduced-motion` via CSS media query.
 */
export default function ParallaxFloatingOrbs({
  count = 12,
  className = "",
}: {
  count?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pre-generate orb configs so they're stable across renders
  const orbs = useRef<FloatingOrb[]>([]);
  if (orbs.current.length === 0) {
    for (let i = 0; i < count; i++) {
      orbs.current.push({
        id: i,
        size: 14 + Math.random() * 48,
        delay: Math.random() * 3,
        duration: 12 + Math.random() * 18,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        endX: Math.random() * 100,
        endY: Math.random() * 100,
      });
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {}, containerRef.current);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    orbs.current.forEach((orb, i) => {
      const el = containerRef.current?.querySelector<HTMLElement>(`[data-orb="${i}"]`);
      if (!el) return;

      // Idle drift
      if (!prefersReduced) {
        gsap.to(el, {
          x: `${orb.endX - orb.startX}vw`,
          y: `${orb.endY - orb.startY}vh`,
          duration: orb.duration,
          delay: orb.delay,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });

        // Subtle scale pulse
        gsap.to(el, {
          scale: 1 + (Math.random() * 0.15 - 0.075),
          duration: 6 + Math.random() * 8,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: orb.delay * 0.5,
        });
      }

      // Scroll parallax
      if (!prefersReduced) {
        gsap.to(el, {
          x: `${orb.endX - orb.startX}vw`,
          y: `${orb.endY - orb.startY}vh`,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.current.map((orb) => (
        <div
          key={orb.id}
          data-orb={orb.id}
          className="absolute rounded-full blur-[1px] pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.startX}vw`,
            top: `${orb.startY}vh`,
            background: `radial-gradient(circle,
              color-mix(in srgb, #00d4ff 40%, transparent 60%),
              transparent 70%)`,
            opacity: 0.25 + Math.random() * 0.15,
          }}
        />
      ))}
    </div>
  );
}
