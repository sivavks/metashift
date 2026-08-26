import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export function FounderStory() {
  return (
    <section id="founder" className="mx-auto max-w-2xl px-6 py-32">
      <FadeIn>
        <span className="text-[11px] uppercase tracking-[0.35em] text-gold">The Founder</span>
      </FadeIn>

      <div className="mt-10 space-y-8 font-serif text-xl leading-relaxed text-muted sm:text-2xl">
        <FadeIn delay={0.05}>
          <p>I spent years fixing systems for a living.</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-foreground">
            Then, one ordinary week, I turned that same attention on my own life — and couldn&apos;t
            find the flaw. Not because it was fine. Because I&apos;d never actually looked.
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <p>
            I was running on beliefs I never chose. Decisions made by a version of me that no
            longer existed.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-gold">
            That question — how much of my life is actually mine — is why MetaShift exists.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.25} className="mt-14 flex flex-col items-center text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full sm:h-36 sm:w-36">
          <Image
            src="/images/founder.png"
            alt="Sivakumar Vondivillu, founder of MetaShift"
            fill
            sizes="144px"
            className="object-cover"
            priority={false}
          />
        </div>
        <p className="mt-6 text-sm text-muted">
          &mdash; Sivakumar Vondivillu, <span className="text-muted/70">Founder, MetaShift</span>
        </p>
      </FadeIn>
    </section>
  );
}
