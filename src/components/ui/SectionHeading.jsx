import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <motion.p
        className="text-sm font-semibold uppercase tracking-[0.34em] text-cyan-300"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        className="mt-4 text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
      >
        {title}
      </motion.h2>
      {copy ? (
        <motion.p
          className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
        >
          {copy}
        </motion.p>
      ) : null}
    </div>
  );
}
