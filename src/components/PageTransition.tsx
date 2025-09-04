"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    gsap.fromTo(
      el,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", clearProps: "all" }
    );
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
