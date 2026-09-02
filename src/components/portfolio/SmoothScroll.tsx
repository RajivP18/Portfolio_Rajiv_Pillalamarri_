import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";

/* ---------- Anchor Scroll Handler ---------- */
function ScrollHandler() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (event: MouseEvent) => {
      const element = event.target as HTMLElement;
      const anchor = element.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      let target: HTMLElement | null = null;
      try {
        target = document.querySelector(href) as HTMLElement | null;
      } catch {
        return;
      }
      if (!target) return;

      event.preventDefault();
      lenis.scrollTo(target, {
        offset: -80,
        duration: 0.9,
      });
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lenis]);

  return null;
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis
      root
      options={{
        // Slightly faster while keeping the smooth, premium feel.
        lerp: 0.1,
        duration: 0.9,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        syncTouch: true,
      }}
    >
      <ScrollHandler />
      {children}
    </ReactLenis>
  );
}