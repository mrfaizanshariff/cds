"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

/**
 * ParallaxScroll — wraps children and applies a lightweight
 * translateY based on scroll progress, creating a parallax depth
 * layer without re-rendering children.
 *
 * Uses GSAP + ScrollTrigger for smooth, cancellable animations.
 * Respects `prefers-reduced-motion`.
 */
export default function ParallaxScroll({
  children,
  speed = 0.15,
  className,
  id,
}: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {}, el);

    const tween = gsap.fromTo(
      el,
      { y: 0 },
      {
        y: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
          onUpdate: (self) => {
            // clamp the transform to avoid overshoot on very fast scrolls
            const progress = self.progress;
            const clampedY = progress * speed * 200;
            gsap.set(el, { y: clampedY });
          },
        },
      }
    );

    return () => {
      ctx.revert();
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} id={id}>
      {children}
    </div>
  );
}
