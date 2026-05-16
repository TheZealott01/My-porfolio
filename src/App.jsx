import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import CursorGlow from "./components/ui/CursorGlow";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ui/ParticlesBackground";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollToTop from "./components/ui/ScrollToTop";
import Skills from "./components/Skills";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [loading, setLoading] = useState(true);

  // Theme is dark by default, then preserved after the visitor toggles it.
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const shouldUseDark = savedTheme ? savedTheme === "dark" : true;
    setIsDark(shouldUseDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 950);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 antialiased transition-colors duration-500 dark:bg-cyber-black dark:text-slate-100">
      <ScrollProgress />
      <ParticlesBackground />
      <CursorGlow />
      <AnimatePresence>
        {loading ? (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-slate-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.55 } }}
          >
            <div className="text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 shadow-glow">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-300 border-t-transparent" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-200">
                Initializing secure profile
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Navbar isDark={isDark} onToggleTheme={() => setIsDark((value) => !value)} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
