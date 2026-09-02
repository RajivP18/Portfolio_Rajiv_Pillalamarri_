import { useEffect, useState } from "react";
import heroImg from "@/assets/rajiv-hero.png";
import { TypingRoles } from "./TypingRoles";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Cloud,
  Database,
  Cpu,
  Sparkles,
  Code2,
  ChevronDown,
} from "lucide-react";

export function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const on = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, []);

  const parallax = (mult: number) => ({
    transform: `translate3d(${(mouse.x - 0.5) * mult}px, ${(mouse.y - 0.5) * mult}px, 0)`,
  });

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-hero" aria-hidden />
      <div
        className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-indigo/30 blur-3xl animate-pulse-glow"
        aria-hidden
      />
      <div
        className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-brand-cyan/20 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x * 100}% ${mouse.y * 100}%, oklch(0.65 0.22 255 / 0.18), transparent 40%)`,
        }}
        aria-hidden
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg font-light text-muted-foreground">Hi, I'm</p>
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-gradient">Rajiv</span>
              <br />
              <span className="text-gradient">Pillalamarri</span>
            </h1>
            <p className="max-w-xl text-2xl font-light leading-tight text-muted-foreground sm:text-3xl">
              Engineering intelligent data experiences.
            </p>
          </div>

          <div className="text-lg text-muted-foreground">
            <TypingRoles />
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground/90">
            I build scalable data platforms, cloud-native solutions, and intelligent applications
            that transform raw data into valuable business insight.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-accent/40"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="glass group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4 pt-2">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "#contact" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md" style={parallax(-10)}>
          <div className="absolute inset-0 animate-spin-slow" aria-hidden>
            <div className="absolute inset-0 rounded-[2rem] border border-white/10" />
            <div className="absolute -inset-6 rounded-[2.5rem] border border-white/5" />
          </div>
          <div className="absolute -inset-8 animate-spin-reverse" aria-hidden>
            <div className="absolute inset-0 rounded-[3rem] border border-brand-blue/20" />
          </div>

          <div className="absolute -inset-4 rounded-[2.5rem] bg-accent-gradient opacity-30 blur-2xl animate-pulse-glow" aria-hidden />

          <div className="glass-strong ring-glow relative h-full w-full overflow-hidden rounded-[2rem]">
            <img
              src={heroImg}
              alt="Rajiv Pillalamarri"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          {[
            { Icon: Cloud, label: "Azure", pos: "-top-4 -left-8", delay: "0s" },
            { Icon: Database, label: "Databricks", pos: "top-1/3 -right-10", delay: "1s" },
            { Icon: Cpu, label: "AI", pos: "bottom-16 -left-10", delay: "2s" },
            { Icon: Code2, label: "Python", pos: "-bottom-2 right-6", delay: "1.5s" },
            { Icon: Sparkles, label: "Spark", pos: "top-10 right-2", delay: "0.5s" },
          ].map(({ Icon, label, pos, delay }) => (
            <div
              key={label}
              className={`glass-strong absolute ${pos} flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium animate-float`}
              style={{ animationDelay: delay }}
            >
              <Icon className="h-3.5 w-3.5 text-brand-cyan" />
              {label}
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted-foreground/60 transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
