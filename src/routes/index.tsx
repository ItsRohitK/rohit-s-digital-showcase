import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Cursor } from "@/components/portfolio/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Rohit Kumar — Full-Stack Engineer & MCA @ NIT Trichy",
      },
      {
        name: "description",
        content:
          "Portfolio of Rohit Kumar — full-stack engineer building MERN, Next.js and AI-powered products. AIR 34 NIMCET'24, CGPA 9.24, LeetCode 1778.",
      },
      {
        property: "og:title",
        content: "Rohit Kumar — Full-Stack Engineer",
      },
      {
        property: "og:description",
        content:
          "Selected work, journey, and toolkit of Rohit Kumar — MCA @ NIT Trichy.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <Achievements />
      <Contact />
    </main>
  );
}
