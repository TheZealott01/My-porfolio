import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const duration = 1100;
    const start = performance.now();
    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-lg border border-cyan-300/15 bg-white/55 p-4 backdrop-blur dark:bg-white/[0.04]">
      <div className="text-2xl font-bold text-slate-950 dark:text-white">
        {count}
        {suffix}
      </div>
      <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{label}</div>
    </div>
  );
}
