"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cta } from "@/components/ui/Cta";
import { submitReservation } from "@/app/actions";

const EASE: [number, number, number, number] = [0.16, 0.8, 0.24, 1];
type Status = "closed" | "idle" | "submitting" | "success" | "error";

export function ReserveForm() {
  const [status, setStatus] = useState<Status>("closed");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const canSubmit = name.trim().length > 0 && email.trim().length > 0 && phone.trim().length > 0;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || status === "submitting") return;

    setStatus("submitting");
    const result = await submitReservation({ name, email, phone, city });

    if (result.ok) {
      setStatus("success");
    } else {
      setStatus("error");
      setErrorMsg(result.error || "Something went wrong. Please try again.");
    }
  }

  if (status === "closed") {
    return (
      <div className="flex justify-center">
        <Cta onClick={() => setStatus("idle")}>Reserve My Seat</Cta>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-md text-center"
        >
          <h3 className="font-serif text-2xl italic text-foreground">You&apos;re in.</h3>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Twenty seats. One room. We&apos;ll send the details to your email.
          </p>
          <p className="mt-3 text-sm text-gold">See you there.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-5"
        >
          <input
            type="text"
            required
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-white/15 bg-transparent py-3 text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-white/15 bg-transparent py-3 text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none"
          />
          <input
            type="tel"
            required
            placeholder="Your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-b border-white/15 bg-transparent py-3 text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none"
          />
          <input
            type="text"
            placeholder="City (optional)"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="border-b border-white/15 bg-transparent py-3 text-foreground placeholder:text-muted/60 focus:border-gold focus:outline-none"
          />

          {status === "error" && <p className="text-xs text-red-400">{errorMsg}</p>}

          <button
            type="submit"
            disabled={!canSubmit || status === "submitting"}
            className="mt-2 bg-gold px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-background transition-all duration-500 hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-40"
          >
            {status === "submitting" ? "Reserving…" : "Reserve My Seat"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
