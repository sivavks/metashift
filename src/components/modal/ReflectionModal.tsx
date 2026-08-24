"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "@/components/modal/ModalContext";
import { reflectionAreas } from "@/lib/content";
import { submitReflection } from "@/app/actions";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.16, 0.8, 0.24, 1];
type Status = "idle" | "submitting" | "success" | "error";

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function ReflectionModal() {
  const { isOpen, close } = useModal();
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState<string | null>(null);
  const [reflection, setReflection] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Reset to a clean form each time the modal is freshly opened.
  useEffect(() => {
    if (isOpen) {
      setName("");
      setEmail("");
      setArea(null);
      setReflection("");
      setStatus("idle");
      setErrorMsg("");
    }
  }, [isOpen]);

  // Body scroll lock + focus management + Escape to close.
  useEffect(() => {
    if (!isOpen) return;

    lastFocused.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    const firstField = panel?.querySelector<HTMLElement>(FOCUSABLE);
    firstField?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab" && panel) {
        const focusables = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocused.current?.focus();
    };
  }, [isOpen, close]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !area || status === "submitting") return;

    setStatus("submitting");
    const result = await submitReflection({ name, email, area, reflection });

    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  }

  const canSubmit = name.trim().length > 0 && email.trim().length > 0 && !!area;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={close}
            aria-hidden
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="reflection-modal-title"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative flex h-full w-full flex-col overflow-y-auto border border-white/10 bg-background px-6 py-14 sm:h-auto sm:max-h-[88vh] sm:max-w-lg sm:px-10"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 -m-4 p-4 text-xs uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-foreground"
            >
              Close
            </button>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="flex flex-1 flex-col justify-center gap-6 text-center"
                >
                  <h2 className="font-serif text-3xl italic text-foreground">Welcome.</h2>
                  <div className="space-y-4 text-sm leading-relaxed text-muted">
                    <p>The fact that you&apos;re here tells me something.</p>
                    <p>
                      Most people never question the life they&apos;re living.
                      <br />
                      You just did.
                    </p>
                    <p className="text-foreground">
                      Your MetaShift has already begun.
                      <br />
                      I&apos;ll be in touch soon.
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted">Until then&hellip;</p>
                  <p className="font-serif text-xl italic text-gold">
                    &ldquo;What part of your life have you accepted without ever consciously
                    choosing?&rdquo;
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  onSubmit={handleSubmit}
                  className="flex flex-1 flex-col justify-center gap-8"
                >
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
                      Begin Here
                    </span>
                    <h2
                      id="reflection-modal-title"
                      className="mt-4 font-serif text-2xl italic text-foreground sm:text-3xl"
                    >
                      What feels like it&apos;s running your life right now?
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {reflectionAreas.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setArea(option)}
                        aria-pressed={area === option}
                        className={cn(
                          "border px-3 py-3 text-sm transition-all duration-300",
                          area === option
                            ? "border-gold text-gold"
                            : "border-white/10 text-muted hover:border-white/25 hover:text-foreground"
                        )}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-b border-white/15 bg-transparent py-2 text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-b border-white/15 bg-transparent py-2 text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs leading-relaxed text-muted">
                      If nothing changed in the next five years, what worries you most?{" "}
                      <span className="text-muted/60">(optional, one sentence)</span>
                    </label>
                    <input
                      type="text"
                      maxLength={140}
                      value={reflection}
                      onChange={(e) => setReflection(e.target.value)}
                      className="mt-2 w-full border-b border-white/15 bg-transparent py-2 text-sm text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-xs text-red-400">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={!canSubmit || status === "submitting"}
                    className="mt-2 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-background transition-all duration-500 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {status === "submitting" ? "Beginning…" : "Begin My MetaShift"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
