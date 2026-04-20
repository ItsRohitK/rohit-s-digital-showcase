import { motion } from "framer-motion";
import { Award, Medal, Sparkles, Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: Trophy,
    headline: "AIR 34",
    title: "NIMCET 2024",
    detail:
      "National-level entrance exam for MCA at NITs — placed in the top 0.1% of test takers.",
  },
  {
    icon: Award,
    headline: "9.24 CGPA",
    title: "MCA · NIT Trichy",
    detail:
      "Consistent academic performer across DSA, OS, DBMS, OOP and System Design coursework.",
  },
  {
    icon: Sparkles,
    headline: "1778 rating",
    title: "LeetCode (Top 8.4%)",
    detail:
      "Active competitive programmer — sharpening problem-solving across DS&A patterns.",
  },
  {
    icon: Medal,
    headline: "1st place",
    title: "Mystic Maze · Acumen'24",
    detail:
      "Won the flagship problem-solving event organised by ACM NITT during Acumen'24.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="05" title="Achievements" />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface/60 p-8 transition-all hover:border-lime/40"
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-lime/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"
                />
                <Icon className="text-lime" size={22} />
                <div className="mt-6 font-display text-5xl font-semibold tracking-tighter">
                  {it.headline}
                </div>
                <div className="mt-2 text-foreground">{it.title}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-md">
                  {it.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
