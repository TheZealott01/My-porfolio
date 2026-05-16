import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MapPin, Send, ShieldCheck } from "lucide-react";
import { buildGmailComposeUrl, profile, socials } from "../data/portfolio";
import AnimatedSection from "./ui/AnimatedSection";
import BrandIcon from "./ui/BrandIcon";
import GlowingCard from "./ui/GlowingCard";
import SectionHeading from "./ui/SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const name = form.get("name")?.toString().trim() || "Portfolio visitor";
    const email = form.get("email")?.toString().trim();
    const message = form.get("message")?.toString().trim() || "No message provided.";

    setFeedback("");
    setStatus("sending");

    try {
      const response = await fetch("https://formsubmit.co/ajax/rakesh528yadav@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _captcha: "false",
          _subject: `Portfolio inquiry from ${name}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        throw new Error("Message service failed");
      }

      formElement.reset();
      setStatus("sent");
      setShowSuccess(true);
    } catch {
      setStatus("error");
      setFeedback(`Message could not be sent right now. Please email ${profile.email} directly.`);
    }
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
            <a
              className="contact-row"
              href={buildGmailComposeUrl()}
              target="_blank"
              rel="noreferrer"
              title={`Open Gmail compose for ${profile.email}`}
            >
              <BrandIcon brand="gmail" className="h-5 w-5" />
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
            {socials.map(({ label, href, brand }) => (
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
                  <BrandIcon brand={brand} className="h-5 w-5" />
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
            {feedback ? (
              <p className="rounded-md border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-200" role="alert">
                {feedback}
              </p>
            ) : null}
            <motion.button
              type="submit"
              className="primary-button w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
              whileHover={status === "sending" ? undefined : { y: -3 }}
              whileTap={status === "sending" ? undefined : { scale: 0.98 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              {status === "sending" ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </GlowingCard>
      </div>

      {showSuccess ? (
        <div className="fixed inset-0 z-[95] grid place-items-center bg-slate-950/78 px-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="message-sent-title">
          <motion.div
            className="glass-card w-full max-w-md p-8 text-center"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
          >
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-emerald-300/40 bg-emerald-400/15 text-emerald-300 shadow-[0_0_30px_rgba(16,185,129,0.28)]">
              <CheckCircle2 className="h-9 w-9" />
            </div>
            <h3 id="message-sent-title" className="mt-5 text-2xl font-extrabold text-slate-950 dark:text-white">
              Message Sent
            </h3>
            <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              Thank you for reaching out. Your message has been sent to {profile.email}.
            </p>
            <button
              type="button"
              className="primary-button mx-auto mt-6 justify-center px-8"
              onClick={() => {
                setShowSuccess(false);
                setStatus("idle");
              }}
            >
              <CheckCircle2 className="h-5 w-5" />
              Done
            </button>
          </motion.div>
        </div>
      ) : null}
    </AnimatedSection>
  );
}
