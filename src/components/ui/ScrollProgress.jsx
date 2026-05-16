import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 shadow-glow"
      style={{ scaleX }}
    />
  );
}
