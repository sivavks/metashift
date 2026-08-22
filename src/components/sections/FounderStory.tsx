import { FadeIn } from "@/components/ui/FadeIn";

export function FounderStory() {
  return (
    <section id="founder" className="mx-auto max-w-2xl px-6 py-32">
      <FadeIn>
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">The Founder</span>
      </FadeIn>

      <div className="mt-10 space-y-8 font-serif text-xl leading-relaxed text-muted sm:text-2xl">
        <FadeIn delay={0.05}>
          <p>For years, he fixed systems for a living.</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-foreground">Then he noticed the real problem was never the system.</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p>It was people. Brilliant people, running decisions on programming they never chose.</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-gold">MetaShift was born from trying to fix that.</p>
        </FadeIn>
      </div>
    </section>
  );
}
