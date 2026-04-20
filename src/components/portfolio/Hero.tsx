import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden gradient-hero grain pt-32 pb-20"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <h1 className="font-display text-[clamp(3rem,12vw,11rem)] font-bold leading-[0.85] tracking-tighter">
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="block"
          >
            Rohit
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block text-muted-foreground"
          >
            Kumar<span className="text-lime">.</span>
          </motion.span>
        </h1>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-7 max-w-2xl"
          >
            <p className="text-lg sm:text-xl text-muted-foreground text-balance leading-relaxed">
              Full-stack engineer & MCA student at{" "}
              <span className="text-foreground">NIT Trichy</span>, crafting
              performant, AI-augmented web products from idea to deploy. I obsess over
              clean architecture, sharp UX, and shipping things that actually work.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-[0_10px_40px_-10px_var(--lime)]"
              >
                View projects
                <ArrowDown
                  className="transition-transform group-hover:translate-y-0.5"
                  size={16}
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 font-medium text-foreground backdrop-blur transition-colors hover:border-lime hover:text-lime"
              >
                <Mail size={16} /> Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="lg:col-span-5 lg:justify-self-end"
          >
            <div className="grid grid-cols-2 gap-3 sm:max-w-sm">
              <Stat label="CGPA / 10" value="9.39" />
              <Stat label="LeetCode rating" value="1796" />
              <Stat label="AIR · NIMCET'24" value="34" />
              <Stat label="MCA · NIT Trichy" value="'24-'26" />
            </div>
            <div className="mt-5 flex items-center gap-3 sm:max-w-sm justify-end">
              <SocialIcon href="https://github.com/ItsRohitK" label="GitHub">
                <GithubIcon className="h-[18px] w-[18px]" />
              </SocialIcon>
              <SocialIcon
                href="https://linkedin.com/in/rohit-kumar-243764346"
                label="LinkedIn"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </SocialIcon>
              <SocialIcon
                href="https://leetcode.com/u/itsrohitnitt"
                label="LeetCode"
              >
                <LeetcodeIcon className="h-[18px] w-[18px]" />
              </SocialIcon>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="h-px w-8 bg-border" />
          scroll
          <span className="blink">_</span>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-4 backdrop-blur transition-colors hover:border-lime/50">
      <div className="font-display text-3xl font-semibold text-foreground">{value}</div>
      <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/60 text-muted-foreground transition-all hover:scale-110 hover:border-lime hover:text-lime"
    >
      {children}
    </a>
  );
}
