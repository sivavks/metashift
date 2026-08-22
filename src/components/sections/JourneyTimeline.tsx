"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { journeySteps } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";

export function JourneyTimeline() {
  const ref = useRef<HTMLUListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.4 });

  return (
    <section id="journey" className="mx-auto max-w-2xl px-6 py-32">
      <FadeIn className="text-center">
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">The Journey</span>
        <h2 className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">
          Not a program. A path.
        </h2>
      </FadeIn>

      <ul ref={ref} className="relative mt-24 space-y-20">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gold"
        />

        {journeySteps.map((step, i) => (
          <li key={step.id} className="relative pl-10">
            <span className="absolute left-0 top-2 h-[15px] w-[15px] -translate-x-[0px] rounded-full border-2 border-gold bg-background" />
            <FadeIn delay={i * 0.05} y={16}>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-foreground sm:text-3xl">
                {step.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </FadeIn>
          </li>
        ))}
      </ul>
    </section>
  );
}
