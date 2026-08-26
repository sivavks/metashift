"use client";

import { motion } from "framer-motion";
import { Cta } from "@/components/ui/Cta";
import { useModal } from "@/components/modal/ModalContext";

const EASE: [number, number, number, number] = [0.16, 0.8, 0.24, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.28, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

export function Hero() {
  const { open } = useModal();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center gap-9 md:gap-11"
      >
        <motion.span
          variants={item}
          className="font-serif text-lg tracking-[0.55em] text-[#9B9B9B] md:text-xl"
        >
          METASHIFT
        </motion.span>

        <motion.p
          variants={item}
          className="max-w-2xl text-balance font-serif text-3xl leading-[1.35] text-foreground sm:text-4xl md:text-5xl"
        >
          Most people don&apos;t need more motivation.
          <br />
          <span className="text-gold">They need a shift.</span>
        </motion.p>

        <motion.div variants={item}>
          <Cta onClick={open}>What&apos;s Running You?</Cta>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-muted"
      >
        Scroll
        <span className="h-10 w-px bg-gradient-to-b from-muted to-transparent" />
      </motion.div>
    </section>
  );
}
