import { certifications } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Certifications() {
  return (
    <AnimatedSection id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Credential placeholders ready for your real certificates."
        copy="Designed as polished cards so completed certifications can be dropped in without changing the layout."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <GlowingCard key={cert.title} className="p-5" delay={index * 0.06}>
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-purple-300 text-slate-950 shadow-glow">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">{cert.title}</h3>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{cert.status}</p>
              <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-cyan-300 to-purple-300" />
              </div>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
