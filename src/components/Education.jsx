import { education } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Education() {
  return (
    <AnimatedSection id="education" className="bg-slate-950/[0.02] dark:bg-white/[0.02]">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundation."
        copy="A clean education timeline with placeholders for the exact passing year and percentage."
      />
      <div className="mx-auto max-w-3xl">
        {education.map((item) => {
          const Icon = item.icon;
          return (
            <GlowingCard key={item.school} className="p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="grid h-16 w-16 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-950 shadow-glow">
                  <Icon className="h-8 w-8" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-300">
                    {item.degree}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950 dark:text-white">{item.school}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.year}
                    </span>
                    <span className="rounded-full border border-cyan-300/20 px-4 py-2 text-sm text-slate-600 dark:text-slate-300">
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
