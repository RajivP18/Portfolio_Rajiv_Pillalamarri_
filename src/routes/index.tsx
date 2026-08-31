import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Experience,
  Skills,
  Projects,
  Certifications,
  Journey,
  Interests,
  WhyHire,
  Contact,
  Footer,
} from "@/components/portfolio/Sections";

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
      { property: "og:title", content: "Rajiv Pillalamarri — Data & Cloud Engineer" },
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
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Journey />
      <Interests />
      <WhyHire />
      <Contact />
      <Footer />
    </main>
  );
}
