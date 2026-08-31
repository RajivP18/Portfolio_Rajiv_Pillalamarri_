import { useEffect, useState } from "react";

const roles = [
  "Data Engineer",
  "Cloud Engineer",
  "Databricks Developer",
  "Azure Enthusiast",
  "ETL Developer",
  "Software Engineer",
  "AI Explorer",
  "Business Analyst",
];

export function TypingRoles() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[i];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="inline-flex items-center">
      <span className="text-gradient-accent font-semibold">{text}</span>
      <span className="ml-1 inline-block h-[1em] w-[2px] animate-pulse bg-accent" />
    </span>
  );
}
