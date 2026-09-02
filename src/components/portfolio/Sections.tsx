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
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-16 sm:py-20 ${className}`}>
      <Reveal>
        <div className="mb-10 max-w-3xl">
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
  I enjoy building scalable data solutions and intelligent applications while
  continuously exploring new technologies and solving real-world problems.
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
              <div className="relative grid gap-8 md:grid-cols-2">
                <div className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-accent-gradient shadow-[0_0_20px] shadow-accent/60 md:left-1/2" />
                <div className={`glass rounded-3xl p-8 ${i % 2 ? "md:col-start-2 md:ml-12" : "md:mr-12"}`}>
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
    tagline: "AI-Assisted Healthcare Companion",
    desc: "An intelligent healthcare application combining data pipelines, predictive models, and a user-friendly interface to deliver real-time patient insights.",
    stack: ["Python", "Machine Learning", "Django", "SQL"],
    accent: "from-brand-blue to-brand-cyan",
    github: "https://github.com/RajivP18/MediCon_ICU_Resource_Allocation",
  },
  {
    name: "Query-Based Abstractive Summarizer",
    tagline: "Intelligent Query-Focused Text Summarization",
    desc: "An NLP system that generates query-focused abstractive summaries from long documents using transformer models and custom scoring techniques.",
    stack: ["Python", "NLP", "Transformers", "PyTorch"],
    accent: "from-brand-indigo to-brand-violet",
    github: "https://github.com/RajivP18",
  },
  {
    name: "Gradient Color Generator",
    tagline: "Interactive Gradient Design Tool",
    desc: "A simple and interactive tool that helps users create, preview, and export beautiful production-ready gradient color combinations.",
    stack: ["React", "TypeScript", "CSS"],
    accent: "from-brand-violet to-brand-cyan",
    github: "https://github.com/RajivP18/Gradient-generator-using-HTML-CSS-JS",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects, product-first."
      subtitle="A selection of projects where engineering, data, and technology come together."
    >
      <div className="space-y-5">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 80}>
            <article className="glass group relative grid gap-5 overflow-hidden rounded-2xl p-5 sm:p-6 lg:grid-cols-[0.9fr_1.2fr]">
              <div className={`relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br ${project.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0%,transparent_50%)] opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-4 text-center text-4xl font-bold tracking-tight text-white/90 sm:text-5xl">
                    {project.name.split(" ")[0]}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <div className="mb-1 text-xs uppercase tracking-widest text-brand-cyan">{String(index + 1).padStart(2, "0")} / Featured</div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{project.name}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{project.tagline}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground/90">{project.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span key={technology} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-foreground/90">{technology}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex items-center gap-2 rounded-full bg-accent-gradient px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:scale-105">
                    <Github className="h-4 w-4" />
                    <span>View on GitHub</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
  {
    name: "Databricks Verified Credential",
    url: "https://credentials.databricks.com/b81fa6ea-f6c2-4bb5-af27-4a4d87ea929f?utm_source=linkedin&utm_medium=social",
  },
  {
    name: "Microsoft AI Skills Fest 2026",
    url: "https://www.credly.com/badges/7879cc95-1b09-476d-a807-8ef9898e2de2",
  },
  {
    name: "Tata — GenAI Powered Data Analytics Job Simulation",
    url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_q3Rvc7eTKREGii2Fw_1743696802929_completion_certificate.pdf",
  },
  {
    name: "Wells Fargo — Software Engineering Job Simulation",
    url: "https://www.theforage.com/completion-certificates/nkmk7gJitYs4TBvoA/9Wvq4L2WCFQDyyPp3_nkmk7gJitYs4TBvoA_q3Rvc7eTKREGii2Fw_1780918386741_completion_certificate.pdf",
  },
  {
    name: "Tata — Data Visualisation: Empowering Business with Effective Insights",
    url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_q3Rvc7eTKREGii2Fw_1780294168511_completion_certificate.pdf",
  },
  {
    name: "HackerRank — Problem Solving (Basic)",
    url: "https://www.hackerrank.com/certificates/83c95a527d2f",
  },
  {
    name: "HackerRank — SQL (Basic)",
    url: "https://www.hackerrank.com/certificates/a9aa550972b5",
  },
  {
    name: "HackerRank — Java (Basic)",
    url: "https://www.hackerrank.com/certificates/ffd1a6b73e54",
  },
];

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="Recognition" title="Certifications & achievements.">
      <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {certs.map((cert, index) => (
          <Reveal key={cert.name} delay={index * 40}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="glass group relative flex h-full min-h-[115px] flex-col justify-between overflow-hidden rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
              <div className="absolute inset-0 bg-accent-gradient opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20" />
              <div className="relative flex flex-col">
                <div className="mb-3 flex items-start justify-between">
                  <Award className="h-5 w-5 shrink-0 text-brand-cyan" />
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100" />
                </div>
                <div className="min-h-[42px] text-sm font-semibold leading-snug text-foreground">{cert.name}</div>
              </div>
            </a>
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
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <div className="glass-strong rounded-3xl p-6 sm:p-7">
            <div className="mb-5 text-xs uppercase tracking-widest text-brand-cyan">Core Values</div>
            <div className="flex flex-wrap gap-1.5">
              {values.map((v) => (
                <span key={v.t} className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs">
                  <v.Icon className="h-3 w-3 text-brand-cyan" />
                  {v.t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="grid gap-3.5 sm:grid-cols-2">
          {hireReasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 60}>
              <div className="glass h-full rounded-2xl p-5 transition-transform hover:-translate-y-1">
                <div className="text-sm font-semibold">{r.t}</div>
                <div className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{r.d}</div>
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
                  <input required type={f.t} placeholder={f.p} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30" />
                </label>
              ))}
            </div>
            <label className="mt-5 block">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Subject</div>
              <input type="text" placeholder="What's this about?" className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30" />
            </label>
            <label className="mt-5 block">
              <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Message</div>
              <textarea required rows={5} placeholder="Tell me about the opportunity..." className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none placeholder:text-muted-foreground/50 focus:border-brand-blue/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-brand-blue/30" />
            </label>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-transform hover:scale-105">Send Message <ArrowRight className="h-4 w-4" /></button>
          </form>
        </Reveal>

        <Reveal delay={100}>
          <div className="grid gap-4">
            {[
              { Icon: Mail, l: "Email", v: "rajiv.pillalamarri@email.com", h: "mailto:rajiv.pillalamarri@email.com" },
              { Icon: Phone, l: "Phone", v: "+91 • Available on request", h: "#" },
              { Icon: MapPin, l: "Location", v: "India • Open to relocation", h: "#" },
              { Icon: Github, l: "GitHub", v: "@RajivP18", h: "https://github.com/RajivP18" },
              { Icon: Linkedin, l: "LinkedIn", v: "Rajiv Pillalamarri", h: "https://www.linkedin.com/in/sri-datta-naga-rajiv-pillalamarri-4b9858246/" },
            ].map((c) => (
              <a key={c.l} href={c.h} target={c.l === "GitHub" || c.l === "LinkedIn" ? "_blank" : undefined} rel={c.l === "GitHub" || c.l === "LinkedIn" ? "noopener noreferrer" : undefined} className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all hover:-translate-y-0.5 hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-lg shadow-accent/30"><c.Icon className="h-5 w-5" /></div>
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
