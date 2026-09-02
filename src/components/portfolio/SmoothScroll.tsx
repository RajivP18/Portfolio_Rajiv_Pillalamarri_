import { useEffect } from "react";

interface SmoothScrollProps {
  children: React.ReactNode;
}

/**
 * Lightweight, SSR-safe smooth scrolling.
 * Avoids rendering a third-party scroll provider on the server.
 */
export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
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
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", href);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return <>{children}</>;
}
