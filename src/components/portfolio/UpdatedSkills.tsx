import {
  Code2,
  Cloud,
  Database,
  Server,
  Wrench,
  BarChart3,
  MonitorSmartphone,
  GitBranch,
  BrainCircuit,
  MessageSquareText,
} from "lucide-react";
import { Reveal } from "./Reveal";

const skillGroups = [
  {
    Icon: Code2,
    title: "Programming",
    items: ["Java", "Python", "SQL", "JavaScript"],
  },
  {
    Icon: Cloud,
    title: "Cloud",
    items: ["Microsoft Azure", "Databricks"],
  },
  {
    Icon: Database,
    title: "Data Engineering",
    items: [
      "Apache Spark",
      "Delta Lake",
      "ETL",
      "Data Warehousing",
      "Data Migration",
    ],
  },
  {
    Icon: Server,
    title: "Databases",
    items: ["SQL Server", "MySQL", "Oracle SQL"],
  },
  {
    Icon: BrainCircuit,
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Artificial Intelligence",
      "Generative AI",
      "Large Language Models (LLMs)",
    ],
  },
  {
    Icon: MessageSquareText,
    title: "AI Tools & Prompting",
    items: ["Prompt Engineering", "AI Tools"],
  },
  {
    Icon: Wrench,
    title: "Frameworks",
    items: ["Spring Boot", "Django", "React"],
  },
  {
    Icon: GitBranch,
    title: "Developer Tools",
    items: ["Git", "GitHub", "Azure DevOps", "VS Code"],
  },
  {
    Icon: BarChart3,
    title: "Visualisation",
    items: ["Power BI", "Tableau"],
  },
  {
    Icon: MonitorSmartphone,
    title: "Operating Systems",
    items: ["Linux", "Windows"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20"
    >
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-cyan">
            Toolkit
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">The stack behind the work.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Tools I reach for to design, build, and ship data, software, and AI-powered products.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 60}>
            <div className="group glass relative h-full overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-indigo/20 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-lg shadow-accent/30">
                <group.Icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-semibold">{group.title}</h3>

              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-brand-cyan" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
