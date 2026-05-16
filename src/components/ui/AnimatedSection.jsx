import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AnimatedSection({ id, children, className = "" }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
