import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 px-6 py-20 text-center">
      <div className="mx-auto max-w-lg space-y-2 font-serif text-xl text-foreground sm:text-2xl">
        <p>Question the programming.</p>
        <p>Rewrite the pattern.</p>
        <p className="text-gold">Join the movement.</p>
      </div>

      <div className="mt-14 flex flex-col items-center gap-6">
        <Logo asLink={false} />
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted/60">
          © {new Date().getFullYear()} MetaShift. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
