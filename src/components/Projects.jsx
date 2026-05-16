import { GitBranch, RadioTower } from "lucide-react";
import { projects } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="bg-slate-950/[0.02] dark:bg-white/[0.02]">
      <SectionHeading
        eyebrow="Projects"
        title="Resume-backed programming projects and security-focused builds."
        copy="A mix of real software engineering work from the resume and cybersecurity project concepts that demonstrate practical thinking, system design, and operational awareness."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <GlowingCard key={project.title} className="p-4" delay={index * 0.05}>
              <div className={`relative mb-5 grid aspect-video place-items-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 cyber-grid opacity-50" />
                <div className="absolute left-4 top-4 rounded-md border border-cyan-300/20 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200 backdrop-blur">
                  Demo
                </div>
                <Icon className="relative h-16 w-16 text-cyan-100 drop-shadow-[0_0_24px_rgba(34,211,238,0.55)]" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{project.title}</h3>
              <p className="mt-3 min-h-20 leading-7 text-slate-600 dark:text-slate-300">{project.copy}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-200">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                <a href="https://github.com/TheZealott01?tab=repositories" target="_blank" rel="noreferrer" className="small-action">
                  <GitBranch className="h-4 w-4" />
                  GitHub
                </a>
                <a href="#contact" className="small-action">
                  <RadioTower className="h-4 w-4" />
                  Discuss
                </a>
              </div>
            </GlowingCard>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
