import { motion } from "framer-motion";

export default function GlowingCard({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={`glass-card group relative overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.01 }}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent opacity-70" />
      <span className="pointer-events-none absolute -inset-28 bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
