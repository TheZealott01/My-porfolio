import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle({ isDark, onToggle }) {
  const Icon = isDark ? Sun : Moon;

  return (
    <motion.button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="icon-button"
      onClick={onToggle}
      whileTap={{ scale: 0.92 }}
      whileHover={{ y: -2 }}
    >
      <Icon className="h-5 w-5" />
    </motion.button>
  );
}
