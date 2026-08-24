import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/sections/Footer";
import { ModalProvider } from "@/components/modal/ModalContext";
import { ReflectionModal } from "@/components/modal/ReflectionModal";
import { FadeIn } from "@/components/ui/FadeIn";
import { ReserveForm } from "@/components/first-shift/ReserveForm";
import {
  firstShiftWhoFor,
  firstShiftWhoNotFor,
  firstShiftMoments,
  firstShiftDifference,
  firstShiftFaqs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "The First Shift",
  description:
    "Three hours. Twenty people. One room. One conversation that changes how you see yourself.",
};

export default function FirstShiftPage() {
  return (
    <ModalProvider>
      <Nav alwaysVisible />
      <main className="mx-auto max-w-2xl px-6 pb-32 pt-40">
        <FadeIn className="text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-gold">The First Shift</span>
          <h1 className="mt-6 font-serif text-4xl text-foreground sm:text-5xl">
            Three hours. Twenty people.
            <br />
            One room.
          </h1>
          <p className="mt-6 text-lg italic text-muted">
            One conversation that changes how you see yourself.
          </p>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
            For anyone ready to look at what&apos;s actually running them.
          </p>
        </FadeIn>

        <section className="mt-28">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
              What Is The First Shift?
            </span>
            <p className="mt-6 text-xl leading-relaxed text-foreground sm:text-2xl">
              The First Shift is a three-hour, in-person experience for people who sense
              something is running their life — and are ready to actually look at it. A guided
              space to see one belief clearly, together with strangers who feel like something
              else by the end of the room.
            </p>
          </FadeIn>
        </section>

        <section className="mt-28 grid grid-cols-1 gap-16 sm:grid-cols-2">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Who It Is For</span>
            <ul className="mt-6 space-y-4">
              {firstShiftWhoFor.map((line) => (
                <li key={line} className="text-sm leading-relaxed text-foreground">
                  {line}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="text-[11px] uppercase tracking-[0.3em] text-muted">
              Who It Is Not For
            </span>
            <ul className="mt-6 space-y-4">
              {firstShiftWhoNotFor.map((line) => (
                <li key={line} className="text-sm leading-relaxed text-muted">
                  {line}
                </li>
              ))}
            </ul>
          </FadeIn>
        </section>

        <section className="mt-28">
          <FadeIn className="text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
              What Happens During The Three Hours
            </span>
          </FadeIn>
          <ol className="mx-auto mt-14 max-w-md space-y-10">
            {firstShiftMoments.map((moment, i) => (
              <FadeIn key={moment.title} delay={i * 0.05}>
                <li className="flex gap-6">
                  <span className="font-serif text-lg text-gold">0{i + 1}</span>
                  <div>
                    <p className="font-serif text-xl text-foreground">{moment.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {moment.description}
                    </p>
                  </div>
                </li>
              </FadeIn>
            ))}
          </ol>
        </section>

        <section className="mt-28 text-center">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
              What Makes This Different
            </span>
            <div className="mx-auto mt-8 max-w-sm space-y-3">
              {firstShiftDifference.map((line) => (
                <p key={line} className="font-serif text-xl text-foreground">
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm italic text-muted">
              Begin with The First Shift. Continue with The Journey.
            </p>
          </FadeIn>
        </section>

        <section className="mt-28">
          <FadeIn className="text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Frequently Asked Questions
            </span>
          </FadeIn>
          <div className="mx-auto mt-12 max-w-lg divide-y divide-white/10 border-y border-white/10">
            {firstShiftFaqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.04} className="py-6">
                <p className="text-base text-foreground">{faq.question}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{faq.answer}</p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-28 text-center">
          <FadeIn>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Investment</span>
            <p className="mt-6 font-serif text-5xl text-foreground">₹2,999</p>
            <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Not because information is valuable. Because commitment creates transformation.
            </p>
          </FadeIn>
        </section>

        <section className="mt-20">
          <ReserveForm />
        </section>
      </main>
      <Footer />
      <ReflectionModal />
    </ModalProvider>
  );
}
