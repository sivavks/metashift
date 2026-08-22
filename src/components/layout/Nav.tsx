"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/components/modal/ModalContext";
import { Logo } from "@/components/ui/Logo";

export function Nav() {
  const [visible, setVisible] = useState(false);
  const { open } = useModal();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -16 }}
      transition={{ duration: 0.6, ease: [0.16, 0.8, 0.24, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-white/5 bg-background/70 px-6 py-5 backdrop-blur-md md:px-10"
    >
      <Logo />
      <button
        type="button"
        onClick={open}
        className="text-[11px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
      >
        Begin
      </button>
    </motion.header>
  );
}
