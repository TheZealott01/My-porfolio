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
        title="A career built on teaching, leadership, and security operations."
        copy="My journey has moved through classrooms, operations floors, and cybersecurity environments, giving me a practical understanding of both people and systems."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <GlowingCard className="p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
            I graduated from PSIT Kanpur and began my professional path as a Technical Trainer, where I helped
            students understand Computer Networks, Python Programming, and Data Structures & Algorithms through
            practical, confidence-building sessions.
          </p>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            That teaching foundation shaped the way I approach complex technical problems: break them down clearly,
            communicate with precision, and focus on useful outcomes. I later joined RASA Consultancy as an Operations
            Manager, handling coordination, workflows, team collaboration, and reporting before the role ended due to a
            project ramp-down.
          </p>
          <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
            My next step at Opex brought me into network security engineering, where I worked with routing, VLAN, DNS,
            Panorama, Next Generation Firewalls, GlobalProtect, IPSec VPN, troubleshooting, and security operations.
            This mix of mentoring, operations leadership, and hands-on security work is the foundation I bring to every
            team.
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
