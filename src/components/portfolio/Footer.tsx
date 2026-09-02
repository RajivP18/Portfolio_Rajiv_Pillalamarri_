import { Github, Heart, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <a
              href="#top"
              className="text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
            >
              Rajiv<span className="text-brand-cyan">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Data Engineer • Cloud Enthusiast • AI Explorer
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/RajivP18"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-brand-cyan"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/sri-datta-naga-rajiv-pillalamarri-4b9858246/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-brand-cyan"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:rajivpillalamarri@gmail.com"
              aria-label="Email"
              className="glass flex h-11 w-11 items-center justify-center rounded-xl text-muted-foreground transition-all hover:-translate-y-1 hover:text-brand-cyan"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>© {currentYear} Rajiv Pillalamarri. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with
            <Heart className="h-4 w-4 fill-current text-brand-cyan" />
            and curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
