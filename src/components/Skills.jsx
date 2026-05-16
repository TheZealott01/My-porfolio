import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillGroups } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

function SkillBar({ skill, accent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const Icon = skill.icon;

  return (
    <div ref={ref} className="rounded-lg border border-slate-900/10 bg-white/55 p-3 dark:border-white/10 dark:bg-white/[0.03]">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-cyan-300/10 text-cyan-500 dark:text-cyan-200">
            <Icon className="h-4 w-4" />
          </span>
          <span className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</span>
        </div>
        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{skill.level}%</span>
      </div>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${accent}`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="bg-slate-950/[0.02] dark:bg-white/[0.02]">
      <SectionHeading
        eyebrow="Skills"
        title="Security, programming, and leadership in one operating system."
        copy="Categorized capabilities with emphasis on network security operations, Python-first technical thinking, and people-facing leadership."
      />

      <div className="grid gap-6 xl:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <GlowingCard key={group.title} className="p-5 sm:p-6" delay={index * 0.08}>
              <div className="mb-6 flex items-center gap-4">
                <span className={`grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br ${group.accent} text-slate-950 shadow-glow`}>
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">{group.title}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Animated proficiency map</p>
                </div>
              </div>
              <div className="space-y-3">
                {group.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} accent={group.accent} />
                ))}
              </div>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
