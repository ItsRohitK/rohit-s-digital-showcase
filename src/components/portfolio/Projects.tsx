import { motion } from "framer-motion";
import { ArrowUpRight, Github, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  period: string;
  blurb: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  highlights: string[];
};

const projects: Project[] = [
  {
    title: "CulinaRank",
    period: "Feb 2026 — Mar 2026",
    blurb: "Sentiment-driven mess selection & analytics for campus dining.",
    description:
      "A high-performance MERN application combining a constraint-driven mess selection system with an AI-powered feedback pipeline. Wink-NLP handles aspect extraction, Sentiment scores each sentence, and Groq's Llama 3 distills thousands of reviews into monthly summaries — surfacing Bayesian-ranked leaderboards students can actually trust.",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Wink-NLP",
      "Groq · Llama 3",
      "JWT · RBAC",
    ],
    github: "https://github.com/ItsRohitK",
    featured: true,
    highlights: [
      "FCFS allocation with JWT-secured RBAC",
      "Aspect-based sentiment analysis pipeline",
      "Bayesian-ranked monthly leaderboards",
      "LLM-generated pros/cons summaries",
    ],
  },
  {
    title: "AI Mock Interview Platform",
    period: "Jun 2025 — Jul 2025",
    blurb: "Voice-first AI that simulates real technical interviews.",
    description:
      "A voice-interactive mock interview system that lets candidates rehearse real interview scenarios with an AI interviewer. Built on Next.js + Tailwind for a snappy UI, Vapi for real-time voice, and Firebase for auth, sessions and feedback storage — with AI-generated performance insights after every round.",
    stack: ["Next.js", "Tailwind CSS", "Vapi", "Firebase", "OpenAI"],
    github: "https://github.com/ItsRohitK",
    featured: true,
    highlights: [
      "Real-time voice conversations via Vapi",
      "Persistent sessions & feedback in Firebase",
      "AI-generated performance insights",
    ],
  },
  {
    title: "Financial Literacy Gamified",
    period: "Apr 2025 — May 2025",
    blurb: "Gamified platform teaching fraud-prevention through play.",
    description:
      "A gamified learning platform that teaches users to spot and prevent financial fraud through time-bound quizzes and scenario-based decisions. MERN under the hood, with JWT + bcrypt securing accounts and MongoDB tracking user progress across levels.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    github: "https://github.com/ItsRohitK",
    highlights: [
      "Multiple fraud-detection challenges",
      "Time-based quizzes & scenarios",
      "Secure auth with JWT + bcrypt",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="03" title="Selected work" />
        <p className="mt-6 max-w-xl text-muted-foreground">
          A handful of recent projects where I cared about both the engineering
          and the experience.
        </p>

        <div className="mt-16 space-y-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-7 sm:p-10 card-shadow transition-all hover:border-lime/40"
    >
      {/* Hover gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), color-mix(in oklch, var(--lime) 10%, transparent), transparent 50%)",
        }}
      />

      <div className="relative grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              0{index + 1} / Project
            </span>
            {p.featured && (
              <span className="inline-flex items-center gap-1 rounded-full border border-lime/40 bg-lime/10 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-widest text-lime">
                <Star size={10} /> Featured
              </span>
            )}
            <span className="font-mono text-xs text-muted-foreground">{p.period}</span>
          </div>

          <h3 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tighter">
            {p.title}
            <span className="text-lime">.</span>
          </h3>
          <p className="mt-3 text-lg text-muted-foreground">{p.blurb}</p>
          <p className="mt-5 max-w-2xl text-foreground/80 leading-relaxed">
            {p.description}
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2 max-w-2xl">
            {p.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-5 lg:items-end">
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {p.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm transition-colors hover:border-lime hover:text-lime"
              >
                <Github size={14} /> Code
              </a>
            )}
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
              >
                Live <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
