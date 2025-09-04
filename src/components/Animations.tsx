"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Global scroll-based reveal animations driven by data attributes
// Add data-reveal="y|x|fade|scale" on any element; data-stagger="children" on containers
export default function Animations() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const $ = (s: string, scope?: Element | Document) =>
        Array.from((scope ?? document).querySelectorAll<HTMLElement>(s));

      // Simple reveal
      $("[data-reveal]").forEach((el) => {
        const type = el.dataset.reveal || "y";
        const delay = parseFloat(el.dataset.delay || "0");
        const duration = parseFloat(el.dataset.duration || "0.6");
        const ease = el.dataset.ease || "power2.out";

        const from: gsap.TweenVars = { opacity: 0 };
        if (type === "y") from.y = 24;
        if (type === "x") from.x = 24;
        if (type === "scale") from.scale = 0.96;

        gsap.from(el, {
          ...from,
          duration,
          delay,
          ease,
          clearProps: "all",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true,
          },
        });
      });

      // Stagger children
      $("[data-stagger='children']").forEach((container) => {
        const targets = Array.from(container.children) as HTMLElement[];
        if (!targets.length) return;
        const delay = parseFloat((container as HTMLElement).dataset.delay || "0");
        const duration = parseFloat(
          (container as HTMLElement).dataset.duration || "0.5"
        );
        const staggerAmt = parseFloat(
          (container as HTMLElement).dataset.staggerAmount || "0.08"
        );
        const ease = (container as HTMLElement).dataset.ease || "power2.out";

        gsap.from(targets, {
          opacity: 0,
          y: 16,
          duration,
          delay,
          ease,
          stagger: staggerAmt,
          clearProps: "all",
          scrollTrigger: {
            trigger: container,
            start: "top 85%",
            once: true,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
