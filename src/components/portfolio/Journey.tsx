import { Reveal } from "./Reveal";
import { GraduationCap, Code2, BrainCircuit, Coffee, Database } from "lucide-react";

const journey = [
  {
    year: "2020",
    title: "Computer Science Foundation",
    description:
      "Started my Computer Science journey and built a strong foundation in programming, algorithms, databases, and core software development concepts.",
    Icon: GraduationCap,
  },
  {
    year: "2021",
    title: "Python",
    description:
      "Explored Python programming and strengthened my problem-solving skills through hands-on coding, automation, and data-focused projects.",
    Icon: Code2,
  },
  {
    year: "2023",
    title: "Machine Learning",
    description:
      "Expanded into Machine Learning, data analysis, predictive models, and intelligent systems through practical projects and experimentation.",
    Icon: BrainCircuit,
  },
  {
    year: "2024",
    title: "Java",
    description:
      "Deepened my software engineering knowledge through Java, object-oriented programming, and application development.",
    Icon: Coffee,
  },
  {
    year: "2025",
    title: "Data Engineering Tools & Technologies",
    description:
      "Focused on modern data engineering with Azure, Databricks, Apache Spark, Delta Lake, SQL, ETL pipelines, and scalable data platforms.",
    Icon: Database,
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan">
            My Journey
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">The path that shaped my skills.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            A timeline of the technologies and domains that have shaped my journey in technology.
          </p>
        </div>
      </Reveal>

      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-brand-blue via-brand-indigo to-transparent md:left-1/2" />

        <div className="space-y-12">
          {journey.map((item, index) => {
            const Icon = item.Icon;

            return (
              <Reveal key={item.year} delay={index * 100}>
                <div className="relative grid gap-8 md:grid-cols-2">
                  <div className="absolute left-4 top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-accent-gradient shadow-[0_0_20px] shadow-accent/60 md:left-1/2" />

                  <div
                    className={`glass rounded-3xl p-8 ${
                      index % 2 ? "md:col-start-2 md:ml-12" : "md:mr-12"
                    }`}
                  >
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-muted-foreground">
                      <Icon className="h-3.5 w-3.5" /> {item.year}
                    </div>

                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
