import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Experience,
  Projects,
  Certifications,
  WhyHire,
} from "@/components/portfolio/Sections";
import { Skills } from "@/components/portfolio/UpdatedSkills";
import { Interests } from "@/components/portfolio/Interests";
import { Journey } from "@/components/portfolio/Journey";
import { ContactInbox } from "@/components/portfolio/ContactInbox";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rajiv Pillalamarri — Data & Cloud Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Rajiv Pillalamarri — Data Engineer, Cloud Engineer, and AI enthusiast building scalable data platforms with Azure, Databricks, and modern software.",
      },
      {
        property: "og:title",
        content: "Rajiv Pillalamarri — Data & Cloud Engineer",
      },
      {
        property: "og:description",
        content:
          "Scalable data platforms, cloud-native solutions, and intelligent applications by Rajiv Pillalamarri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
        <Interests />
        <Journey />
        <WhyHire />
        <ContactInbox />
      </main>

      <Footer />
    </div>
  );
}
