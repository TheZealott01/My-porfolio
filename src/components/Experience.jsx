import { CheckCircle2 } from "lucide-react";
import { experiences } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <AnimatedSection id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="From technical mentoring to frontline network security."
        copy="Each role added a different layer: teaching clarity, operational ownership, and hands-on cybersecurity execution."
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300 via-purple-300 to-emerald-300 md:block" />
        <div className="space-y-7">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.role} className="relative md:pl-16">
                <span className="absolute left-0 top-7 hidden h-10 w-10 place-items-center rounded-lg border border-cyan-300/30 bg-slate-950 text-cyan-200 shadow-glow md:grid">
                  <Icon className="h-5 w-5" />
                </span>
                <GlowingCard className="p-5 sm:p-7" delay={index * 0.08}>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-500 dark:text-cyan-200 md:hidden">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-300">
                        {item.company}
                      </p>
                      <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{item.role}</h3>
                    </div>
                    <div className="rounded-lg border border-cyan-300/20 px-4 py-3 text-sm text-slate-600 dark:text-slate-300">
                      {item.period}
                    </div>
                  </div>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {item.note ? (
                    <p className="mt-5 inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm text-amber-700 dark:text-amber-200">
                      {item.note}
                    </p>
                  ) : null}
                </GlowingCard>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
