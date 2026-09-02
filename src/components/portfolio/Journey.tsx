import { Reveal } from "./Reveal";
import { GraduationCap, BrainCircuit, Database, Rocket } from "lucide-react";

const milestones = [
  {
    Icon: GraduationCap,
    label: "2020 – 2024",
    title: "Computer Science Foundation",
    description:
      "Built a strong foundation in computer science, programming, databases, and software development while completing my B.Tech at GITAM University.",
  },
  {
    Icon: BrainCircuit,
    label: "Machine Learning",
    title: "Exploring AI & Intelligent Systems",
    description:
      "Expanded into Python, machine learning, data analysis, and model evaluation through hands-on engineering work and real-world problem solving.",
  },
  {
    Icon: Database,
    label: "Data & Cloud",
    title: "Building Data Engineering Skills",
    description:
      "Focused on scalable data pipelines, SQL, Azure, Databricks, Apache Spark, Delta Lake, data migration, and modern analytics workflows.",
  },
  {
    Icon: Rocket,
    label: "Today",
    title: "Continuing to Build & Grow",
    description:
      "Combining data engineering, cloud, AI, and software development to build practical solutions while continuously learning and taking on new challenges.",
  },
];

export function Journey() {
  return (
    <section
      id="journey"
      className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20"
    >
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan">
            My Journey
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">From curiosity to building.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A path shaped by curiosity, continuous learning, and a growing passion
            for data, cloud, AI, and software engineering.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-5 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-brand-cyan via-brand-blue to-transparent md:block" />

        <div className="space-y-5">
          {milestones.map((milestone, index) => (
            <Reveal key={milestone.title} delay={index * 70}>
              <article className="group relative grid gap-5 rounded-3xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 md:grid-cols-[56px_180px_1fr] md:items-start md:p-7">
                <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-lg shadow-accent/20">
                  <milestone.Icon className="h-5 w-5" />
                </div>

                <div className="pt-1">
                  <span className="text-xs font-medium uppercase tracking-[0.16em] text-brand-cyan">
                    {milestone.label}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold sm:text-2xl">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {milestone.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
