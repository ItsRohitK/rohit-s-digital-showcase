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
              I turn <span className="text-lime">ambitious ideas</span> into
              fast, reliable products — engineered with care from the database
              schema all the way to the last pixel.
            </p>
            <div className="mt-10 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              <p>
                I'm a full-stack engineer and{" "}
                <span className="text-foreground">MCA student at NIT Trichy</span>{" "}
                (AIR 34, NIMCET 2024) with a deep love for clean architecture,
                thoughtful UX, and the kind of systems that quietly do their job
                under load. I work most often across the{" "}
                <span className="text-foreground">MERN and Next.js</span> stack,
                with a growing focus on AI-augmented products.
              </p>
              <p>
                I've shipped a production eCommerce stack at{" "}
                <span className="text-foreground">ShopU</span> on Next.js,
                Prisma and Neon Postgres, built an{" "}
                <span className="text-foreground">NLP-driven mess analytics
                platform</span> using Wink-NLP and Groq's Llama 3, and currently
                lead PR for <span className="text-foreground">VERSION'26</span>{" "}
                at NITT. Off the keyboard, you'll find me on LeetCode (1796),
                deep in a system design book, or chasing the next side project.
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
