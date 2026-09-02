import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

/* ---------- Anchor Scroll Handler ---------- */

function ScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (event: MouseEvent) => {
      const element = event.target as HTMLElement;

      const anchor = element.closest(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      // Ignore empty anchors
      if (!href || href === "#") return;

      let target: HTMLElement | null = null;

      try {
        target = document.querySelector(href) as HTMLElement | null;
      } catch {
        return;
      }

      if (!target) return;

      // Prevent default browser jump
      event.preventDefault();

      // Smoothly scroll to the selected section
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.2,
      });

      // Update URL without forcing a page jump
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [lenis]);

  return null;
}

/* ---------- Smooth Scroll ---------- */

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({
  children,
}: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        // Smooth scrolling configuration
        lerp: 0.08,
        duration: 1.2,

        // Mouse wheel scrolling
        smoothWheel: true,
        wheelMultiplier: 1,

        // Touch scrolling
        touchMultiplier: 1.5,

        // Keep scrolling responsive in both directions
        syncTouch: true,
      }}
    >
      <ScrollHandler />

      {children}
    </ReactLenis>
  );
}