import { achievements } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Achievements() {
  return (
    <AnimatedSection id="highlights">
      <SectionHeading
        eyebrow="Beyond Work"
        title="Competitive energy, discipline, and team-first execution."
        copy="A strong portfolio should show the person behind the professional. These highlights add the leadership, composure, and competitive mindset that recruiters remember."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <GlowingCard key={item.title} className="p-4" delay={index * 0.06}>
              {item.image ? (
                <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-lg border border-cyan-300/15">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-md border border-cyan-300/20 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
                    {item.type}
                  </span>
                </div>
              ) : (
                <div className="mb-5 grid aspect-[4/5] place-items-center rounded-lg border border-cyan-300/15 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-slate-950">
                  <Icon className="h-16 w-16 text-cyan-200 drop-shadow-[0_0_24px_rgba(34,211,238,0.55)]" />
                </div>
              )}

              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-500 dark:text-cyan-200">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-500 dark:text-cyan-300">
                    {item.type}
                  </p>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                </div>
              </div>
              <p className="leading-7 text-slate-600 dark:text-slate-300">{item.copy}</p>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
