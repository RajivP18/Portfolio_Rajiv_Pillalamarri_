import { useState } from "react";
import { Reveal } from "./Reveal";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export function ContactInbox() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/rajivpillalamarri@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject") || "New portfolio enquiry",
          message: formData.get("message"),
          _subject: `Portfolio message: ${formData.get("subject") || "New enquiry"}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) throw new Error("Message could not be sent");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan">Contact</div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">Let's build something great.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Have a role, a project, or a question? Send me a message and it will come directly to my inbox.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <form className="glass-strong rounded-3xl p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="group block">
                <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Name</div>
                <input required name="name" type="text" placeholder="Your name" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30" />
              </label>
              <label className="group block">
                <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                <input required name="email" type="email" placeholder="you@company.com" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30" />
              </label>
            </div>

            <label className="mt-5 block">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Subject</div>
              <input name="subject" type="text" placeholder="What's this about?" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30" />
            </label>

            <label className="mt-5 block">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Message</div>
              <textarea required name="message" rows={5} placeholder="Tell me about the opportunity..." className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30" />
            </label>

            <button disabled={status === "sending"} type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70">
              {status === "sending" ? "Sending..." : "Send Message"}
              {status === "success" ? <CheckCircle2 className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
            </button>

            {status === "success" && <p className="mt-4 text-sm text-brand-cyan">Message sent successfully. Thank you for reaching out!</p>}
            {status === "error" && <p className="mt-4 text-sm text-red-400">Something went wrong. Please try again or email me directly.</p>}
          </form>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-4">
            {[
              { Icon: Mail, l: "Email", v: "rajivpillalamarri@gmail.com", h: "mailto:rajivpillalamarri@gmail.com" },
              { Icon: Phone, l: "Phone", v: "+91 • Available on request", h: "#" },
              { Icon: MapPin, l: "Location", v: "India • Open to relocation", h: "#" },
              { Icon: Github, l: "GitHub", v: "@RajivP18", h: "https://github.com/RajivP18" },
              { Icon: Linkedin, l: "LinkedIn", v: "Rajiv Pillalamarri", h: "https://www.linkedin.com/in/sri-datta-naga-rajiv-pillalamarri-4b9858246/" },
            ].map((contact) => (
              <a key={contact.l} href={contact.h} target={contact.l === "GitHub" || contact.l === "LinkedIn" ? "_blank" : undefined} rel={contact.l === "GitHub" || contact.l === "LinkedIn" ? "noopener noreferrer" : undefined} className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-lg shadow-accent/30"><contact.Icon className="h-5 w-5" /></div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{contact.l}</div>
                  <div className="truncate text-sm font-medium">{contact.v}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
