import { motion } from "framer-motion";
import { Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { profile, socials } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name")?.toString().trim() || "Portfolio visitor";
    const email = form.get("email")?.toString().trim() || "Not provided";
    const message = form.get("message")?.toString().trim() || "No message provided.";
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatedSection id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's secure the next opportunity."
        copy="Recruiters, hiring teams, and collaborators can reach out for network security, cybersecurity operations, technical training, or software engineering opportunities."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <GlowingCard className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Contact details</h3>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Available for roles where secure operations, troubleshooting discipline, communication, and strong technical ownership matter.
          </p>

          <div className="mt-8 space-y-4">
            <a className="contact-row" href={`mailto:${profile.email}`} title={`Email ${profile.email}`}>
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>{profile.email}</span>
            </a>
            <div className="contact-row">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <span>{profile.location}</span>
            </div>
            <div className="contact-row">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
              <span>{profile.role} - {profile.company}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <div key={label} className="grid justify-items-center gap-2">
                <motion.a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={label}
                  title={label}
                  className="icon-button"
                  whileHover={{ y: -4 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </GlowingCard>

        <GlowingCard className="p-6 sm:p-8">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="field-label">
              Name
              <input className="field-input" type="text" name="name" placeholder="Your name" required />
            </label>
            <label className="field-label">
              Email
              <input className="field-input" type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label className="field-label">
              Message
              <textarea className="field-input min-h-36 resize-y" name="message" placeholder="Tell me about the role, project, security requirement, or training opportunity." required />
            </label>
            <motion.button type="submit" className="primary-button w-full justify-center" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Send className="h-5 w-5" />
              Send Message
            </motion.button>
          </form>
        </GlowingCard>
      </div>
    </AnimatedSection>
  );
}
