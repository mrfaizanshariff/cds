"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * BackgroundGradient — renders a full-viewport, continuously animated
 * radial-gradient field that floats behind content. Uses GSAP for
 * ultra-smooth, jank-free animation on the compositor.
 *
 * The gradient is driven by CSS custom properties so it works with
 * Tailwind's `bg-animated-gradient` class or can be used standalone
 * with a custom colour configuration.
 */
export default function BackgroundGradient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Animate CSS gradient stops for a living, breathing background
    const cycle = gsap.timeline({ repeat: -1, yoyo: true });
    cycle.to(el, {
      "--bg-x": "90%",
      "--bg-y": "80%",
      duration: 30,
      ease: "sine.inOut",
    }).to(el, {
      "--bg-x": "10%",
      "--bg-y": "20%",
      duration: 30,
      ease: "sine.inOut",
    });

    return () => cycle.kill();
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
      style={{
        "--bg-x": "10%",
        "--bg-y": "20%",
      } as React.CSSProperties}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at var(--bg-x, 10%) var(--bg-y, 20%),
              color-mix(in srgb, #00d4ff 22%, transparent 78%), transparent 25%),
            radial-gradient(circle at calc(100% - var(--bg-x, 10%)) calc(100% - var(--bg-y, 20%)),
              color-mix(in srgb, #3b82f6 18%, transparent 82%), transparent 25%),
            radial-gradient(circle at 50% 50%,
              color-mix(in srgb, #a855f7 6%, transparent 94%), transparent 30%)
          `,
          backgroundSize: "200% 200%",
          animation: "gradientSweep 28s ease-in-out infinite",
        }}
      />
      {/* Subtle noise overlay */}
      <div
        className="noise-overlay absolute inset-0 pointer-events-none"
        style={{ opacity: 0.3 }}
      />
    </div>
  );
}
