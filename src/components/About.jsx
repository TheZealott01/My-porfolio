import { motion } from "framer-motion";
import { journey } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <AnimatedSection id="about">
      <SectionHeading
        eyebrow="About Me"
        title="A career built on teaching, software thinking, leadership, and security operations."
        copy="My journey brings together the rare combination recruiters value: strong fundamentals, clear communication, programming discipline, and hands-on network security growth."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <GlowingCard className="p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
            I graduated from PSIT Kanpur with a B.Tech in Computer Science and Engineering, building a strong base in
            programming, computer networks, operating systems, DBMS, and analytical problem-solving. I began my
            professional path as a Technical Trainer, where I trained students in Python and Data Structures & Algorithms
            through practical, confidence-building sessions.
          </p>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            That training experience shaped my professional operating style: simplify complex systems, explain clearly,
            execute with ownership, and keep the end user in mind. Alongside operations and coordination exposure at RASA
            Consultancy, I strengthened my software engineering profile through React, Flask, SQL, and real-world project
            work such as a multi-modal transportation platform.
          </p>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            My current cybersecurity direction is focused on network security engineering, Palo Alto security concepts,
            NGFW, Panorama, SASE, DLP, routing, VLAN, DNS, IPSec VPN, GlobalProtect, and structured troubleshooting.
            I bring the mindset of a trainer, the discipline of an engineer, and the confidence of someone who enjoys
            solving operational problems under pressure.
          </p>
        </GlowingCard>

        <div className="relative">
          <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-cyan-300 via-purple-300 to-emerald-300 sm:block" />
          <div className="space-y-5">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="relative sm:pl-12"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                >
                  <span className="absolute left-0 top-7 hidden h-8 w-8 place-items-center rounded-full border border-cyan-300/35 bg-slate-950 text-cyan-200 shadow-glow sm:grid">
                    <Icon className="h-4 w-4" />
                  </span>
                  <GlowingCard className="p-5" delay={index * 0.05}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-300">
                        {item.eyebrow}
                      </p>
                      <span className="rounded-full border border-cyan-300/20 px-3 py-1 text-xs text-slate-500 dark:text-slate-300">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-slate-950 dark:text-white">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.copy}</p>
                  </GlowingCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
