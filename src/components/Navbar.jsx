import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "../data/portfolio";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar({ isDark, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.1 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navClass = scrolled
    ? "border-cyan-300/15 bg-white/75 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:bg-slate-950/75"
    : "border-transparent bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${navClass}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label="Rakesh Yadav home">
          <span className="relative grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-glow">
            <span className="absolute inset-1 rounded-md border border-purple-300/20" />
            RY
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold uppercase tracking-[0.22em] text-slate-950 dark:text-white">
              Rakesh Yadav
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">Cybersecurity Portfolio</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${active === item.href ? "nav-link-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            className="icon-button lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-4 mb-4 rounded-lg border border-cyan-300/15 bg-white/90 p-3 shadow-2xl backdrop-blur-xl dark:bg-slate-950/95 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block rounded-md px-4 py-3 text-sm font-semibold transition ${
                  active === item.href
                    ? "bg-cyan-300/10 text-cyan-500 dark:text-cyan-200"
                    : "text-slate-700 hover:bg-slate-900/5 dark:text-slate-300 dark:hover:bg-white/5"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
