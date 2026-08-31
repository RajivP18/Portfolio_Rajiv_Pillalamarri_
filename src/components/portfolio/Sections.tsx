import { Reveal } from "./Reveal";
import {
  Code2, Cloud, Database, Server, Wrench, BarChart3, MonitorSmartphone, GitBranch,
  Award, GraduationCap, Briefcase, Sparkles, Trophy, Users, Lightbulb, Target,
  HeartHandshake, TrendingUp, Compass, Github, Linkedin, Mail, MapPin, Phone,
  ArrowUpRight, ExternalLink, ArrowRight,
} from "lucide-react";

/* ---------- Section shell ---------- */
function Section({
  id, eyebrow, title, subtitle, children, className = "",
}: {
  id?: string; eyebrow?: string; title: React.ReactNode; subtitle?: string;
  children: React.ReactNode; className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-28 sm:py-36 ${className}`}>
      <Reveal>
        <div className="mb-16 max-w-3xl">
          {eyebrow && (
            <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan">
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{title}</span>
          </h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </Reveal>
      {children}
    </section>
  );
}

/* ---------- About + Education ---------- */
export function About() {
  return (
    <Section id="about" eyebrow="Who I Am" title="A builder at the intersection of data, cloud & AI.">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="glass rounded-3xl p-8 sm:p-10">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm <span className="text-gradient-accent font-semibold">Rajiv Pillalamarri</span>,
              a Computer Science graduate passionate about Data Engineering, Cloud Computing,
              Artificial Intelligence, and Software Development.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              My journey started with Java, Python, and Machine Learning before evolving into
              cloud-native data engineering and modern analytics. I enjoy designing scalable ETL
              pipelines, working with Databricks and Azure, building intelligent software
              solutions, and continuously learning new technologies.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              I believe the best engineers combine technical excellence with communication,
              leadership, curiosity, adaptability, and teamwork.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { n: "10+", l: "Technologies" },
                { n: "5+", l: "Major Projects" },
                { n: "2", l: "Internships" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <div className="text-3xl font-bold text-gradient-accent">{s.n}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-indigo/30 blur-3xl" />
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                <GraduationCap className="h-3.5 w-3.5" /> Education
              </div>
              <div className="text-2xl font-semibold leading-tight">B.Tech in Computer Science</div>
              <div className="mt-2 text-muted-foreground">GITAM University</div>
            </div>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">CGPA</div>
                <div className="text-5xl font-bold text-gradient">7.16</div>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Years</div>
                <div className="text-lg font-medium">2020 – 2024</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- Experience ---------- */
const experience = [
  {
    company: "Health Catalyst",
    role: "Data Engineer Intern",
    period: "Recent",
    skills: ["Data Engineering", "ETL Pipelines", "Databricks", "Azure", "SQL Optimization", "Data Migration", "Data Validation", "Pipeline Monitoring", "Healthcare Analytics"],
  },
  {
    company: "Phoenix Global",
    role: "Junior Engineer — Machine Learning",
    period: "Prior",
    skills: ["Python", "Machine Learning", "Regression Models", "Data Analysis", "Model Evaluation"],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Building where data meets impact.">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-blue via-brand-indigo to-transparent md:left-1/2" />
        <div className="space-y-12">
          {experience.map((e, i) => (
            <Reveal key={e.company} delay={i * 100}>
              <div className={`relative grid gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-accent-gradient shadow-[0_0_20px] shadow-accent/60 md:left-1/2" />
                <div className={`glass rounded-3xl p-8 ${i % 2 ? "md:mr-12" : "md:ml-12"}`}>
                  <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                    <Briefcase className="h-3 w-3" /> {e.period}
                  </div>
                  <h3 className="text-2xl font-semibold">{e.company}</h3>
                  <div className="mt-1 text-gradient-accent font-medium">{e.role}</div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.skills.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Skills ---------- */
const skillGroups = [
  { Icon: Code2, title: "Programming", items: ["Java", "Python", "SQL", "JavaScript"] },
  { Icon: Cloud, title: "Cloud", items: ["Microsoft Azure", "Databricks"] },
  { Icon: Database, title: "Data Engineering", items: ["Apache Spark", "Delta Lake", "ETL", "Data Warehousing", "Data Migration"] },
  { Icon: Server, title: "Databases", items: ["SQL Server", "MySQL", "Oracle SQL"] },
  { Icon: Wrench, title: "Frameworks", items: ["Spring Boot", "Django", "React"] },
  { Icon: GitBranch, title: "Developer Tools", items: ["Git", "GitHub", "Azure DevOps", "VS Code"] },
  { Icon: BarChart3, title: "Visualisation", items: ["Power BI", "Tableau"] },
  { Icon: MonitorSmartphone, title: "Operating Systems", items: ["Linux", "Windows"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="The stack behind the work." subtitle="Tools I reach for to design, build, and ship data & software products.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 60}>
            <div className="group glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-indigo/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-lg shadow-accent/30">
                <g.Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-brand-cyan" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Projects ---------- */
const projects = [
  {
    name: "MEDICON",
    tagline: "AI-assisted healthcare companion",
    desc: "Intelligent healthcare application combining data pipelines, predictive models, and a friendly UI to surface patient insight in real time.",
    stack: ["Python", "Machine Learning", "Django", "SQL"],
    accent: "from-brand-blue to-brand-cyan",
  },
  {
    name: "Query-Based Abstractive Summarizer",
    tagline: "Text summarization at query granularity",
    desc: "NLP system that produces query-focused abstractive summaries over long documents using transformer models and custom scoring.",
    stack: ["Python", "NLP", "Transformers", "PyTorch"],
    accent: "from-brand-indigo to-brand-violet",
  },
  {
    name: "Gradient Color Generator",
    tagline: "Design tool for beautiful gradients",
    desc: "Interactive color playground for designers and developers to craft, preview, and export production-ready gradient palettes.",
    stack: ["React", "TypeScript", "CSS"],
    accent: "from-brand-violet to-brand-cyan",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Projects, product-first." subtitle="A few things I've built where design, engineering, and data meet.">
      <div className="space-y-8">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <article className="glass group relative grid gap-8 overflow-hidden rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[1fr_1.2fr]">
              {/* Visual */}
              <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br ${p.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)] opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold tracking-tighter text-white/90 sm:text-7xl">
                    {p.name.split(" ")[0]}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-2 text-xs uppercase tracking-widest text-brand-cyan">
                    {String(i + 1).padStart(2, "0")} / Featured
                  </div>
                  <h3 className="text-3xl font-bold sm:text-4xl">{p.name}</h3>
                  <p className="mt-1 text-lg text-muted-foreground">{p.tagline}</p>
                  <p className="mt-4 max-w-lg leading-relaxed text-muted-foreground/90">{p.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#" className="group/btn inline-flex items-center gap-2 rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-medium text-white transition-transform hover:scale-105">
                    Live Demo <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Certifications & Achievements ---------- */
const certs = [
  "IBM Data Engineering",
  "IBM Data Science",
  "Microsoft AI Skills Fest",
  "Azure Fundamentals",
  "HackerRank SQL (Gold)",
  "HackerRank Python",
  "Databricks Lakehouse",
  "Job Simulations",
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Recognition" title="Certifications & achievements.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((c, i) => (
          <Reveal key={c} delay={i * 40}>
            <div className="glass group relative overflow-hidden rounded-2xl p-5 transition-all hover:-translate-y-1">
              <div className="absolute inset-0 bg-accent-gradient opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
              <Award className="mb-3 h-6 w-6 text-brand-cyan" />
              <div className="text-sm font-medium">{c}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Journey ---------- */
const journey = [
  { year: "2020", label: "Started Computer Science" },
  { year: "2021", label: "Learned Java & Python" },
  { year: "2022", label: "Machine Learning & Projects" },
  { year: "2023", label: "Internships & Industry Work" },
  { year: "2024", label: "Health Catalyst • Azure • Databricks" },
  { year: "2025", label: "Preparing for Microsoft DP-750" },
  { year: "Now", label: "Seeking Full-Time Data Engineering Roles" },
];

export function Journey() {
  return (
    <Section id="journey" eyebrow="My Journey" title="From first line of code to cloud-scale data.">
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-blue via-brand-indigo to-brand-violet" />
        <div className="space-y-8">
          {journey.map((j, i) => (
            <Reveal key={j.year} delay={i * 60}>
              <div className={`flex items-center gap-6 ${i % 2 ? "flex-row-reverse" : ""}`}>
                <div className="glass flex-1 rounded-2xl p-5">
                  <div className="text-xs text-brand-cyan">{j.year}</div>
                  <div className="mt-1 font-medium">{j.label}</div>
                </div>
                <div className="relative z-10 h-4 w-4 shrink-0 rounded-full bg-accent-gradient shadow-[0_0_24px] shadow-accent/70" />
                <div className="flex-1" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Interests ---------- */
const interests = [
  { emoji: "🏏", label: "Cricket", note: "RCB & Virat Kohli" },
  { emoji: "⚽", label: "Football", note: "Tournaments & tactics" },
  { emoji: "🎵", label: "Music", note: "Focus & flow" },
  { emoji: "☁️", label: "Cloud", note: "Azure • AWS" },
  { emoji: "🤖", label: "AI", note: "LLMs & agents" },
  { emoji: "📊", label: "Data", note: "Pipelines & insight" },
  { emoji: "💻", label: "Software", note: "Craft & shipping" },
  { emoji: "🧠", label: "Problem Solving", note: "First-principles" },
];

export function Interests() {
  return (
    <Section id="interests" eyebrow="Beyond Work" title="What keeps me curious.">
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {interests.map((it, i) => (
          <Reveal key={it.label} delay={i * 50}>
            <div className="glass group relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-3xl p-5 text-center transition-all hover:scale-[1.03]">
              <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-brand-indigo/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="text-4xl transition-transform group-hover:scale-125">{it.emoji}</div>
              <div className="mt-3 font-medium">{it.label}</div>
              <div className="text-xs text-muted-foreground">{it.note}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------- Core Values / Why hire me ---------- */
const values = [
  { Icon: Lightbulb, t: "Innovation" },
  { Icon: Users, t: "Leadership" },
  { Icon: HeartHandshake, t: "Communication" },
  { Icon: Users, t: "Teamwork" },
  { Icon: Sparkles, t: "Integrity" },
  { Icon: TrendingUp, t: "Continuous Learning" },
  { Icon: Compass, t: "Adaptability" },
  { Icon: Target, t: "Problem Solving" },
  { Icon: Trophy, t: "Ownership" },
];

const hireReasons = [
  { t: "Strong Problem Solving", d: "First-principles thinking to break down complex data problems." },
  { t: "Fast Learner", d: "New stacks, new domains — I ramp fast and ship." },
  { t: "Cloud & Data", d: "Azure, Databricks, Spark, Delta Lake — real production experience." },
  { t: "AI Curious", d: "Comfortable with ML, LLMs, and modern AI tooling." },
  { t: "Team Player", d: "Clear communicator who moves the team forward." },
  { t: "Business Aware", d: "I connect engineering choices to business outcomes." },
];

export function WhyHire() {
  return (
    <Section id="why" eyebrow="Why Work Together" title="Made for teams that ship." subtitle="Values I bring, and the reasons a hiring manager might send me a note.">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="glass-strong rounded-3xl p-8">
            <div className="mb-6 text-sm uppercase tracking-widest text-brand-cyan">Core Values</div>
            <div className="flex flex-wrap gap-2">
              {values.map((v) => (
                <span key={v.t} className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-sm">
                  <v.Icon className="h-3.5 w-3.5 text-brand-cyan" />
                  {v.t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2">
          {hireReasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 60}>
              <div className="glass h-full rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="text-base font-semibold">{r.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{r.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something great." subtitle="Have a role, a project, or a question? Drop a message — I reply quickly.">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Reveal>
          <form
            className="glass-strong rounded-3xl p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I'll get back to you shortly.");
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { l: "Name", t: "text", p: "Your name" },
                { l: "Email", t: "email", p: "you@company.com" },
              ].map((f) => (
                <label key={f.l} className="group block">
                  <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">{f.l}</div>
                  <input
                    required
                    type={f.t}
                    placeholder={f.p}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30"
                  />
                </label>
              ))}
            </div>
            <label className="mt-5 block">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Subject</div>
              <input
                type="text"
                placeholder="What's this about?"
                className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30"
              />
            </label>
            <label className="mt-5 block">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Message</div>
              <textarea
                required
                rows={5}
                placeholder="Tell me about the opportunity..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105"
            >
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-4">
            {[
              { Icon: Mail, l: "Email", v: "rajiv.pillalamarri@email.com", h: "mailto:rajiv.pillalamarri@email.com" },
              { Icon: Phone, l: "Phone", v: "+91 • Available on request", h: "#" },
              { Icon: MapPin, l: "Location", v: "India • Open to relocation", h: "#" },
              { Icon: Github, l: "GitHub", v: "@rajivpillalamarri", h: "https://github.com" },
              { Icon: Linkedin, l: "LinkedIn", v: "Rajiv Pillalamarri", h: "https://linkedin.com" },
            ].map((c) => (
              <a
                key={c.l}
                href={c.h}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-lg shadow-accent/30">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.l}</div>
                  <div className="truncate text-sm font-medium">{c.v}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const quote = '"The first responsibility of a leader is to define reality."';
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-white/5 px-6 py-20">
      <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="text-3xl font-light leading-tight text-gradient sm:text-5xl">{quote}</p>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 text-muted-foreground">
            Building the future with Data, Cloud, and Intelligent Engineering.
          </p>
        </Reveal>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 sm:flex-row">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Rajiv Pillalamarri. Crafted with care.
          </div>
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, h: "https://github.com" },
              { Icon: Linkedin, h: "https://linkedin.com" },
              { Icon: Mail, h: "#contact" },
            ].map((s, i) => (
              <a key={i} href={s.h} className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground">
                <s.Icon className="h-4 w-4" />
              </a>
            ))}
            <a href="#top" className="ml-2 rounded-full border border-white/10 px-4 py-2 text-xs text-muted-foreground transition-colors hover:text-foreground">
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
