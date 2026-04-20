import { motion } from "framer-motion";

export function SectionHeader({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-baseline gap-5"
      >
        <span className="font-mono text-sm text-lime">{index}</span>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter">
          {title}
        </h2>
      </motion.div>
    </div>
  );
}
