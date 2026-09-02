import { BrainCircuit, MessageSquareText, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const aiSkills = [
  "Artificial Intelligence",
  "Generative AI",
  "Large Language Models (LLMs)",
  "Prompt Engineering",
  "AI Tools",
];

export function AISkills() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-16 sm:pb-20">
      <Reveal>
        <div className="glass group relative overflow-hidden rounded-3xl p-6 sm:p-8">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-indigo/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gradient text-white shadow-lg shadow-accent/30">
                  <BrainCircuit className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">AI & Prompting</h3>
                  <p className="text-sm text-muted-foreground">
                    Exploring intelligent systems, generative AI, and effective prompting.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-3xl lg:justify-end">
              {aiSkills.map((skill, index) => {
                const Icon = index === 3 ? MessageSquareText : Sparkles;

                return (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-brand-cyan/40 hover:text-foreground"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-cyan" />
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
