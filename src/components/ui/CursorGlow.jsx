import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[65] hidden h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl lg:block"
      animate={{ x: position.x - 88, y: position.y - 88 }}
      transition={{ type: "spring", stiffness: 130, damping: 24, mass: 0.2 }}
    />
  );
}
