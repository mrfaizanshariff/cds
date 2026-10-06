"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared GSAP utility helpers used across the redesigned site.
 * Centralising them avoids duplicated plugin-registration and
 * keeps every entrance / scroll animation on a single, consistent curve.
 */

/** Smooth, elevated entrance — slides up from `y` and fades in. */
export function revealFadeUp(
  el: Element | null,
  opts: {
    y?: number;
    duration?: number;
    delay?: number;
    start?: string;
    stagger?: number | number[];
    ease?: string;
  } = {}
) {
  if (!el) return null;
  const {
    y = 40,
    duration = 0.9,
    delay = 0,
    start = "top 85%",
    stagger = 0,
    ease = "power3.out",
  } = opts;

  const targets: Element[] = stagger
    ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]")).length
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"))
      : [el]
    : [el];

  return gsap.fromTo(
    targets,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

/** Staggered grid reveal — pass a container and we reveal every [data-card] child. */
export function revealGrid(
  container: Element | null,
  opts: {
    start?: string;
    stagger?: number;
    y?: number;
    duration?: number;
  } = {}
) {
  if (!container) return null;
  const { start = "top 85%", stagger = 0.08, y = 32, duration = 0.6 } = opts;
  const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card]"));
  if (!cards.length) return null;

  return gsap.fromTo(
    cards,
    { y, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration,
      stagger,
      ease: "power3.out",
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: "play none none none",
      },
    }
  );
}

export default gsap;
