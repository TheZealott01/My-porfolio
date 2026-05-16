import { motion } from "framer-motion";
import { Mail, MapPin, Send, ShieldCheck } from "lucide-react";
import { socials } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  return (
    <AnimatedSection id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's secure the next opportunity."
        copy="Use this polished form layout as a frontend placeholder, then connect it to EmailJS, a backend endpoint, or your preferred form service."
      />

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <GlowingCard className="p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-slate-950 dark:text-white">Contact details</h3>
          <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
            Available for cybersecurity, network security, technical training, and software engineering opportunities.
          </p>

          <div className="mt-8 space-y-4">
            <div className="contact-row">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>rakesh@example.com</span>
            </div>
            <div className="contact-row">
              <MapPin className="h-5 w-5 text-cyan-400" />
              <span>India - location placeholder</span>
            </div>
            <div className="contact-row">
              <ShieldCheck className="h-5 w-5 text-cyan-400" />
              <span>Network Security Engineer - Opex</span>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <motion.a key={label} href={href} aria-label={label} className="icon-button" whileHover={{ y: -4 }}>
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </GlowingCard>

        <GlowingCard className="p-6 sm:p-8">
          {/* This is a frontend-ready form; wire it to your preferred email or backend service. */}
          <form className="space-y-5">
            <label className="field-label">
              Name
              <input className="field-input" type="text" name="name" placeholder="Your name" />
            </label>
            <label className="field-label">
              Email
              <input className="field-input" type="email" name="email" placeholder="you@example.com" />
            </label>
            <label className="field-label">
              Message
              <textarea className="field-input min-h-36 resize-y" name="message" placeholder="Tell me about the role, project, or training requirement." />
            </label>
            <motion.button type="button" className="primary-button w-full justify-center" whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Send className="h-5 w-5" />
              Send Message
            </motion.button>
          </form>
        </GlowingCard>
      </div>
    </AnimatedSection>
  );
}
