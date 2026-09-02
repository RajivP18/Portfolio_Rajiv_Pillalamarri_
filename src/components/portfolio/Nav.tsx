import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
          scrolled ? "scale-95 opacity-95" : "scale-100"
        }`}
      >
        <a href="#top" className="px-4 py-2 text-sm font-semibold tracking-tight">
          <span className="text-gradient">Rajiv</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="ml-1 rounded-full bg-accent-gradient px-4 py-2 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
