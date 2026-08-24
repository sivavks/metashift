"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useModal } from "@/components/modal/ModalContext";
import { Logo } from "@/components/ui/Logo";

interface NavProps {
  /** Skip the scroll-triggered reveal and render visible immediately (non-homepage pages). */
  alwaysVisible?: boolean;
}

export function Nav({ alwaysVisible = false }: NavProps) {
  const [visible, setVisible] = useState(alwaysVisible);
  const { open } = useModal();

  useEffect(() => {
    if (alwaysVisible) return;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysVisible]);

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
        className="-my-3.5 -mr-2 px-2 py-3.5 text-[11px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 hover:text-gold"
      >
        Begin
      </button>
    </motion.header>
  );
}
