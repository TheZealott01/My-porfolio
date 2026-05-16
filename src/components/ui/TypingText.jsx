import { useEffect, useMemo, useState } from "react";

export default function TypingText({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const currentPhrase = useMemo(() => phrases[phraseIndex], [phrases, phraseIndex]);

  useEffect(() => {
    const endPause = !deleting && charIndex === currentPhrase.length ? 1300 : 0;
    const startPause = deleting && charIndex === 0 ? 260 : 0;
    const speed = deleting ? 32 : 58;

    const timer = setTimeout(() => {
      if (!deleting && charIndex < currentPhrase.length) {
        setCharIndex((value) => value + 1);
        return;
      }
      if (!deleting && charIndex === currentPhrase.length) {
        setDeleting(true);
        return;
      }
      if (deleting && charIndex > 0) {
        setCharIndex((value) => value - 1);
        return;
      }
      setDeleting(false);
      setPhraseIndex((value) => (value + 1) % phrases.length);
    }, speed + endPause + startPause);

    return () => clearTimeout(timer);
  }, [charIndex, currentPhrase, deleting, phrases.length]);

  return (
    <span>
      {currentPhrase.slice(0, charIndex)}
      <span className="ml-1 inline-block h-6 w-0.5 translate-y-1 bg-cyan-300 shadow-glow" />
    </span>
  );
}
