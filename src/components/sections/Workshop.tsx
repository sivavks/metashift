"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { Cta } from "@/components/ui/Cta";
import { useModal } from "@/components/modal/ModalContext";

export function Workshop() {
  const { open } = useModal();

  return (
    <section
      id="workshop"
      className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center"
    >
      <FadeIn>
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">The Workshop</span>
        <h2 className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">
          Three hours. Small group.
          <br />
          Deep reflection.
        </h2>
        <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted">Limited seats.</p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12">
        <Cta onClick={open}>Reserve Your Seat</Cta>
      </FadeIn>
    </section>
  );
}
