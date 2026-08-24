import { FadeIn } from "@/components/ui/FadeIn";
import { Cta } from "@/components/ui/Cta";

export function FirstShiftTeaser() {
  return (
    <section
      id="first-shift"
      className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center"
    >
      <FadeIn>
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">The First Shift</span>
        <h2 className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">
          Three hours. Twenty people.
          <br />
          One room.
        </h2>
        <p className="mt-6 text-lg italic text-muted">
          One conversation that changes how you see yourself.
        </p>
      </FadeIn>

      <FadeIn delay={0.15} className="mt-12">
        <Cta href="/first-shift">Discover The First Shift</Cta>
      </FadeIn>
    </section>
  );
}
