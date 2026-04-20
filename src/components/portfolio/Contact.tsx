import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LeetcodeIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 grain">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 p-10 sm:p-16 lg:p-20 card-shadow"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-lime/20 blur-3xl"
          />
          <div className="font-mono text-xs uppercase tracking-widest text-lime">
            06 / Contact
          </div>
          <h2 className="font-display mt-4 text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.9] text-balance">
            Let's build <br />
            something <span className="text-lime">good.</span>
          </h2>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Got a role, a project, or just want to nerd out about systems & AI?
            My inbox is open and I usually reply within a day.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:rohitgyl787@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_15px_45px_-10px_var(--lime)]"
            >
              <Mail size={16} />
              rohitgyl787@gmail.com
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3 max-w-2xl">
            <Link
              href="https://github.com/ItsRohitK"
              icon={<GithubIcon className="h-4 w-4" />}
              label="GitHub"
              handle="@ItsRohitK"
            />
            <Link
              href="https://linkedin.com/in/rohit-kumar-243764346"
              icon={<LinkedinIcon className="h-4 w-4" />}
              label="LinkedIn"
              handle="rohit-kumar"
            />
            <Link
              href="https://leetcode.com/u/itsrohitnitt"
              icon={<LeetcodeIcon className="h-4 w-4" />}
              label="LeetCode"
              handle="itsrohitnitt"
            />
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
          <p className="font-mono">© {new Date().getFullYear()} Rohit Kumar</p>
          <p>
            Designed & built with{" "}
            <span className="text-lime">React + Framer Motion</span>.
          </p>
        </footer>
      </div>
    </section>
  );
}

function Link({
  href,
  icon,
  label,
  handle,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  handle: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 transition-colors hover:border-lime/50"
    >
      <div>
        <div className="flex items-center gap-2 text-foreground">
          {icon}
          <span className="text-sm">{label}</span>
        </div>
        <div className="mt-1 font-mono text-xs text-muted-foreground">{handle}</div>
      </div>
      <ArrowUpRight
        size={16}
        className="text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
      />
    </a>
  );
}
