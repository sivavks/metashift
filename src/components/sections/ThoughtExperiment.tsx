"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { thoughtExperiments } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function ThoughtExperiment() {
  const [line, setLine] = useState<string | null>(null);

  useEffect(() => {
    setLine(thoughtExperiments[Math.floor(Math.random() * thoughtExperiments.length)]);
  }, []);

  return (
    <section
      id="thought"
      className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 py-32 text-center"
    >
      <FadeIn>
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">A Thought</span>
      </FadeIn>

      <div className="mt-10 flex min-h-[120px] items-center justify-center">
        <motion.p
          key={line ?? "placeholder"}
          initial={{ opacity: 0 }}
          animate={{ opacity: line ? 1 : 0 }}
          transition={{ duration: 1.3, ease: [0.16, 0.8, 0.24, 1] }}
          className="font-serif text-2xl italic leading-snug text-foreground sm:text-3xl"
        >
          {line ?? " "}
        </motion.p>
      </div>
    </section>
  );
}
