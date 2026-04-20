import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups = [
  {
    label: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Framer Motion"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "Prisma", "REST APIs", "JWT", "bcrypt"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL (Neon)", "SQL", "Firebase"],
  },
  {
    label: "AI / NLP",
    items: ["Groq (Llama 3)", "Wink-NLP", "Sentiment", "Vapi"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "VS Code", "IntelliJ IDEA", "PyCharm", "Postman"],
  },
];

const marquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Express",
  "Prisma",
  "Java",
  "C++",
  "Python",
  "DSA",
  "System Design",
  "Groq",
  "Firebase",
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="02" title="Toolkit" />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-lime/50"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-lime/0 to-transparent group-hover:via-lime transition-all" />
              <div className="font-mono text-xs uppercase tracking-widest text-lime">
                {g.label}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground/90"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-24 flex overflow-hidden border-y border-border bg-surface/30 py-6">
        <div className="marquee flex shrink-0 items-center gap-12 pr-12 font-display text-3xl sm:text-5xl whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span
              key={i}
              className={
                i % 2 === 0
                  ? "text-foreground"
                  : "text-transparent [-webkit-text-stroke:1px_var(--foreground)]"
              }
            >
              {m} <span className="text-lime">★</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
