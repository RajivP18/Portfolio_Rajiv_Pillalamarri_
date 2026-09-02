import {
  Brain,
  Cloud,
  Code2,
  Database,
  Gamepad2,
  Headphones,
  Plane,
  Trophy,
} from "lucide-react";

const interests = [
  {
    title: "Artificial Intelligence",
    description:
      "Exploring machine learning, LLMs, generative AI, and intelligent applications.",
    Icon: Brain,
  },
  {
    title: "Cloud & Data",
    description:
      "Building scalable data platforms and exploring modern cloud technologies.",
    Icon: Cloud,
  },
  {
    title: "Software Development",
    description:
      "Creating practical applications and continuously improving engineering skills.",
    Icon: Code2,
  },
  {
    title: "Data Engineering",
    description:
      "Working with data pipelines, analytics, Databricks, Spark, and modern data platforms.",
    Icon: Database,
  },
  {
    title: "Cricket",
    description:
      "Following cricket, enjoying competitive matches, and staying connected with the game.",
    Icon: Trophy,
  },
  {
    title: "Music",
    description:
      "Listening to music and discovering new artists, sounds, and genres.",
    Icon: Headphones,
  },
  {
    title: "Gaming",
    description:
      "Enjoying games, technology, strategy, and interactive experiences.",
    Icon: Gamepad2,
  },
  {
    title: "Learning & Exploring",
    description:
      "Always curious about new technologies, ideas, places, and experiences.",
    Icon: Plane,
  },
];

export function Interests() {
  return (
    <section
      id="interests"
      className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
    >
      <div className="mb-10">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-cyan">
          Beyond Work
        </div>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Things that keep me{" "}
          <span className="bg-gradient-to-r from-brand-cyan to-blue-500 bg-clip-text text-transparent">
            curious.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Beyond building technology, these are the areas that keep me learning,
          exploring, and inspired.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map(({ title, description, Icon }, index) => (
          <div
            key={title}
            className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/40"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-cyan/10 text-brand-cyan transition-transform duration-300 group-hover:scale-110">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
