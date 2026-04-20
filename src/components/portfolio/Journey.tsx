import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Item = {
  type: "work" | "edu" | "role";
  title: string;
  org: string;
  period: string;
  detail: string;
  meta?: string;
};

const items: Item[] = [
  {
    type: "role",
    title: "Public Relations Committee Head",
    org: "VERSION'26 · NIT Trichy",
    period: "Sep 2025 — Present",
    detail:
      "Leading PR & outreach for a national-level MCA event with 100+ participating colleges. Driving institutional coordination, partnerships and promotions across online and offline tech & non-tech events.",
  },
  {
    type: "work",
    title: "Software Development Intern",
    org: "ShopU",
    period: "May 2025 — Jun 2025",
    detail:
      "Built a React-based frontend, then shipped an eCommerce backend on Next.js with Prisma ORM, Neon (serverless Postgres) and Zod for schema validation. Picked up production-grade full-stack and modern backend architecture.",
  },
  {
    type: "edu",
    title: "Master of Computer Applications",
    org: "National Institute of Technology, Trichy",
    period: "2024 — 2027",
    detail:
      "AIR 34 in NIMCET 2024 · CGPA 9.24/10. Coursework across DSA, OS, DBMS, OOP and System Design.",
    meta: "9.24 CGPA",
  },
  {
    type: "edu",
    title: "Bachelor of Computer Applications",
    org: "BR Ambedkar Bihar University",
    period: "2020 — 2023",
    detail: "Graduated with 75.31% — foundations in CS, programming and databases.",
    meta: "75.31%",
  },
];

const iconFor = (t: Item["type"]) =>
  t === "work" ? Briefcase : t === "edu" ? GraduationCap : Users;

export function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="04" title="Journey" />

        <div className="relative mt-16 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="text-muted-foreground sticky top-32">
              A timeline of work, study and the spaces where I show up to lead.
            </p>
          </div>

          <ol className="lg:col-span-9 relative space-y-4 border-l border-border pl-6">
            {items.map((it, i) => {
              const Icon = iconFor(it.type);
              return (
                <motion.li
                  key={it.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="relative"
                >
                  <span className="absolute -left-[34px] top-5 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-lime">
                    <Icon size={13} />
                  </span>
                  <div className="rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:border-lime/40">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          {it.title}
                        </h3>
                        <p className="text-sm text-lime">{it.org}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {it.meta && (
                          <span className="rounded-full border border-lime/40 bg-lime/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-lime">
                            {it.meta}
                          </span>
                        )}
                        <span className="font-mono text-xs text-muted-foreground">
                          {it.period}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {it.detail}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
