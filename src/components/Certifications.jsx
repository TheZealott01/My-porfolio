import { CalendarDays, Clock3, FileBadge } from "lucide-react";
import { certifications } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Certifications() {
  return (
    <AnimatedSection id="certifications" className="bg-slate-950/[0.02] dark:bg-white/[0.02]">
      <SectionHeading
        eyebrow="Certifications"
        title="Palo Alto security learning backed by real certificate proof."
        copy="These certificates show a focused cybersecurity growth path across NGFW, SASE, NetSec, DLP, Strata Cloud Manager, and security fundamentals, with practical relevance to modern network security operations."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {certifications.map((cert, index) => {
          const Icon = cert.icon;
          return (
            <GlowingCard key={cert.title} className="p-4 sm:p-5" delay={index * 0.04}>
              <div className="grid gap-5 xl:grid-cols-[0.9fr_1.1fr]">
                <div className="overflow-hidden rounded-lg border border-cyan-300/15 bg-white">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex items-start gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-300 to-purple-300 text-slate-950 shadow-glow">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-500 dark:text-cyan-300">
                        {cert.issuer}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{cert.title}</h3>
                    </div>
                  </div>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{cert.copy}</p>

                  <div className="mt-5 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="inline-flex items-center gap-2 rounded-md border border-cyan-300/15 bg-cyan-300/10 px-3 py-2">
                      <CalendarDays className="h-4 w-4 text-cyan-400" />
                      {cert.date}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-md border border-cyan-300/15 bg-cyan-300/10 px-3 py-2">
                      <Clock3 className="h-4 w-4 text-cyan-400" />
                      {cert.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-md border border-cyan-300/15 bg-cyan-300/10 px-3 py-2">
                      <FileBadge className="h-4 w-4 text-cyan-400" />
                      {cert.credential}
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
