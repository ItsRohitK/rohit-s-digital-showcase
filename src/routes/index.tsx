import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Journey } from "@/components/portfolio/Journey";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Cursor } from "@/components/portfolio/Cursor";

export function IndexPage() {
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
