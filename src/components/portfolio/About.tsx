import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader index="01" title="About" />

        <div className="mt-16 grid gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight text-balance">
              I build <span className="text-lime">end-to-end web products</span>{" "}
              — from a blinking cursor to a deployed, scalable system that real
              people use every day.
            </p>
            <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                Currently pursuing my MCA at{" "}
                <span className="text-foreground">NIT Trichy</span> after
                cracking <span className="text-foreground">AIR 34 in NIMCET 2024</span>.
                I spend most of my time wiring up MERN & Next.js stacks, exploring
                AI tooling, and grinding LeetCode (rating 1778, top 8.4%).
              </p>
              <p>
                Recently interned at <span className="text-foreground">ShopU</span>,
                where I shipped React frontends and an eCommerce backend on
                Next.js, Prisma, Neon Postgres and Zod — getting comfortable with
                the messy, exciting reality of production code.
              </p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-border bg-surface/60 p-7 card-shadow">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Currently
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                <Row k="Studying" v="MCA · NIT Trichy" />
                <Row k="Building" v="CulinaRank (MERN + AI)" />
                <Row k="Reading" v="Designing Data-Intensive Apps" />
                <Row k="Based in" v="Trichy, Tamil Nadu 🇮🇳" />
              </ul>
              <div className="mt-7 border-t border-border pt-5">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Focus areas
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["DSA", "OOP", "OS", "DBMS", "Full-Stack", "AI integration"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-baseline justify-between gap-4">
      <span className="text-muted-foreground">{k}</span>
      <span className="text-foreground text-right">{v}</span>
    </li>
  );
}
