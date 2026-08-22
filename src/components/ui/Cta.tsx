import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CtaBaseProps {
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}

interface CtaLinkProps extends CtaBaseProps {
  href: string;
  onClick?: never;
}

interface CtaButtonProps extends CtaBaseProps {
  href?: never;
  onClick: () => void;
}

type CtaProps = CtaLinkProps | CtaButtonProps;

function useCtaClasses(variant: "solid" | "ghost", className?: string) {
  return cn(
    "group inline-flex items-center gap-3 px-8 py-4 text-[11px] uppercase tracking-[0.25em] transition-all duration-500 ease-out",
    variant === "solid"
      ? "bg-gold text-background hover:bg-gold-light"
      : "border border-gold/40 text-foreground hover:border-gold hover:text-gold",
    className
  );
}

function CtaContent({ children }: { children: ReactNode }) {
  return (
    <>
      <span>{children}</span>
      <ArrowRight
        aria-hidden
        className="h-3.5 w-3.5 transition-transform duration-500 ease-out group-hover:translate-x-1"
      />
    </>
  );
}

export function Cta({ children, variant = "solid", className, ...props }: CtaProps) {
  const classes = useCtaClasses(variant, className);

  if ("onClick" in props && props.onClick) {
    return (
      <button type="button" onClick={props.onClick} className={classes}>
        <CtaContent>{children}</CtaContent>
      </button>
    );
  }

  const href = (props as CtaLinkProps).href;
  const isExternal = href.startsWith("mailto:") || href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        <CtaContent>{children}</CtaContent>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      <CtaContent>{children}</CtaContent>
    </Link>
  );
}
