"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  tilt?: boolean;
  delay?: number;
  duration?: number;
  staggerAmount?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/**
 * AnimatedCard — a glass-morphism card with scroll-triggered fade-up,
 * optional 3D tilt on hover, and smooth scale on interaction.
 *
 * Use `data-card` on children wrappers inside containers that use
 * `revealGrid` for staggered entrance.
 */
export default function AnimatedCard({
  children,
  className = "",
  tilt = true,
  delay = 0,
  duration = 1,
  style,
  onClick,
}: AnimatedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // Entrance animation
    const tween = gsap.fromTo(
      el,
      { y: 40, opacity: 0, scale: 0.97 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );

    return () => tween.kill();
  }, [delay, duration]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tilt || !innerRef.current) return;
    const rect = innerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 20;
    const tiltY = (centerX - x) / 20;

    gsap.to(innerRef.current, {
      rotationX: tiltX,
      rotationY: tiltY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    if (!tilt || !innerRef.current) return;
    gsap.to(innerRef.current, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.75)",
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative rounded-2xl transition-all duration-300 ${className}`}
      style={{ opacity: 0, ...style }}
      onMouseMove={tilt ? handleMouseMove : undefined}
      onMouseLeave={tilt ? handleMouseLeave : undefined}
      onClick={onClick}
    >
      <div
        ref={innerRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}
