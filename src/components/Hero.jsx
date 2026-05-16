import { motion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  Eye,
  LockKeyhole,
  Mail,
  Network,
  Radar,
  ShieldCheck,
} from "lucide-react";
import { socials, stats } from "../data/portfolio";
import StatCounter from "./ui/StatCounter";
import TypingText from "./ui/TypingText";

const phrases = [
  "Network Security Engineer",
  "Technical Trainer",
  "Cybersecurity Enthusiast",
  "Python + DSA Mentor",
];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 cyber-grid opacity-70" aria-hidden="true" />
      <div className="absolute left-8 top-28 hidden text-cyan-300/30 md:block">
        <Network className="h-10 w-10 animate-float" />
      </div>
      <div className="absolute bottom-24 right-10 hidden text-purple-300/30 md:block">
        <Radar className="h-12 w-12 animate-float [animation-delay:1.2s]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-700 shadow-glow backdrop-blur dark:text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(34,197,94,0.9)]" />
            Open to cybersecurity and network security roles
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="gradient-text">Rakesh Yadav</span>
          </h1>

          <p className="mt-5 min-h-8 text-xl font-semibold text-cyan-500 dark:text-cyan-200 sm:text-2xl">
            <TypingText phrases={phrases} />
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I build secure network operations, mentor technical learners, and bring a rare mix of cybersecurity,
            programming education, and operations leadership to every problem I take on.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            {/* Replace this placeholder path after uploading the final resume file. */}
            <a href="/resume-placeholder.pdf" className="primary-button" download>
              <Download className="h-5 w-5" />
              Download Resume
            </a>
            <a href="#contact" className="secondary-button">
              <Mail className="h-5 w-5" />
              Contact Me
            </a>
            <a href="#projects" className="secondary-button">
              <Eye className="h-5 w-5" />
              View Projects
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="icon-button"
                whileHover={{ y: -4, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <StatCounter key={item.label} {...item} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-lg"
          initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease: "easeOut" }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-emerald-400/10 blur-3xl" />
          <div className="profile-shell">
            <div className="scan-line" />
            <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-slate-950/70">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,0.22),transparent_32%),linear-gradient(135deg,rgba(14,165,233,0.16),rgba(168,85,247,0.12),rgba(34,197,94,0.09))]" />
              <div className="absolute inset-6 rounded-full border border-cyan-300/20" />
              <div className="absolute inset-14 rounded-full border border-purple-300/20" />
              <div className="relative grid h-48 w-48 place-items-center rounded-full border border-cyan-300/25 bg-white/5 shadow-glow backdrop-blur sm:h-56 sm:w-56">
                <ShieldCheck className="h-24 w-24 text-cyan-200" />
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-cyan-300/20 bg-slate-950/75 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-cyan-300">Profile Image</p>
                    <p className="mt-1 text-sm text-slate-300">Upload placeholder ready</p>
                  </div>
                  <LockKeyhole className="h-8 w-8 text-emerald-300" />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -right-2 top-12 rounded-lg border border-cyan-300/25 bg-slate-950/80 p-4 text-cyan-100 shadow-glow backdrop-blur md:-right-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <ArrowDownRight className="h-5 w-5 text-emerald-300" />
              <span className="text-sm font-semibold">Threat visibility</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
