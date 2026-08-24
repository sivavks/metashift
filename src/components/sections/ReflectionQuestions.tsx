"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { reflectionQuestions } from "@/lib/content";
import { FadeIn } from "@/components/ui/FadeIn";
import { Cta } from "@/components/ui/Cta";

const EASE: [number, number, number, number] = [0.16, 0.8, 0.24, 1];

export function ReflectionQuestions() {
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);

  const question = reflectionQuestions[index];
  const isLast = index === reflectionQuestions.length - 1;

  function handleSelect() {
    if (done) return;
    if (isLast) {
      setDone(true);
    } else {
      setIndex((i) => Math.min(i + 1, reflectionQuestions.length - 1));
    }
  }

  return (
    <section
      id="reflection"
      className="relative mx-auto flex min-h-screen max-w-2xl flex-col items-center justify-center px-6 py-32 text-center"
    >
      <FadeIn>
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
          Before You Begin
        </span>
        <h2 className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">
          Ask yourself something.
        </h2>
      </FadeIn>

      <div className="relative mt-16 flex min-h-[220px] w-full flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: EASE }}
              className="flex w-full flex-col items-center gap-9"
            >
              <p className="font-serif text-2xl text-foreground sm:text-3xl">{question.prompt}</p>
              <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-center">
                {question.options.map((option) => (
                  <button
                    key={option}
                    onClick={handleSelect}
                    className="flex-1 border border-white/10 px-6 py-4 text-sm text-muted transition-all duration-300 ease-out hover:border-gold hover:bg-gold/[0.06] hover:text-foreground active:scale-[0.98] active:bg-gold/10 sm:max-w-xs"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="done"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE }}
              className="flex flex-col items-center gap-6"
            >
              <p className="font-serif text-2xl italic text-gold sm:text-3xl">
                Interesting&hellip;
              </p>
              <div className="max-w-lg space-y-5 font-serif text-lg leading-relaxed text-muted sm:text-xl">
                <p>
                  Most people expect these questions to reveal something about their
                  personality.
                </p>
                <p className="text-foreground">They don&apos;t.</p>
                <p>
                  They reveal something far more important: whether you&apos;re living by
                  design&hellip; or by default.
                </p>
                <p>
                  Your answers don&apos;t tell us who you are. But they might suggest that some
                  of the decisions shaping your life deserve a second look.
                </p>
                <p className="text-gold">That&apos;s exactly what MetaShift exists to explore.</p>
              </div>
              <div className="mt-4">
                <Cta href="/first-shift">Discover The First Shift</Cta>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!done && (
        <div className="mt-14 flex gap-2" role="progressbar" aria-valuenow={index + 1} aria-valuemax={reflectionQuestions.length}>
          {reflectionQuestions.map((q, i) => (
            <span
              key={q.id}
              className={`h-1 w-6 transition-colors duration-500 ${
                i <= index ? "bg-gold" : "bg-white/10"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
