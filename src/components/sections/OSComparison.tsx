import { FadeIn } from "@/components/ui/FadeIn";
import { osComparison } from "@/lib/content";

export function OSComparison() {
  return (
    <section id="os" className="mx-auto max-w-4xl px-6 py-32">
      <FadeIn className="text-center">
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">What Is MetaShift</span>
        <h2 className="mt-6 font-serif text-3xl text-foreground sm:text-4xl">
          Not another app.
          <br />
          <span className="text-gold">The operating system.</span>
        </h2>
      </FadeIn>

      <div className="mt-24 grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-10">
        <FadeIn delay={0.1} className="text-center md:text-right">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted">
            Traditional Self-Improvement
          </p>
          <ul className="mt-8 space-y-5">
            {osComparison.traditional.map((label) => (
              <li key={label} className="font-serif text-xl text-muted/80 sm:text-2xl">
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="mx-auto text-[11px] uppercase tracking-[0.3em] text-white/20"
        >
          vs
        </FadeIn>

        <FadeIn delay={0.3} className="text-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">MetaShift</p>
          <ul className="mt-8 space-y-5">
            {osComparison.metashift.map((label) => (
              <li key={label} className="font-serif text-xl text-foreground sm:text-2xl">
                {label}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
