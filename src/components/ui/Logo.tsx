import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  /** Render as plain markup instead of a link to "#hero" (e.g. in the footer). */
  asLink?: boolean;
}

function LogoMark() {
  return (
    <>
      <svg
        width="16"
        height="16"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
        className="shrink-0 translate-y-px"
      >
        <path
          d="M63 72.52 A26 26 0 1 1 68.70 68.06"
          stroke="#5C5C60"
          strokeWidth={5.5}
          strokeLinecap="round"
        />
        <path d="M66.0 70.5 L92.8 49.6" stroke="#D4A44E" strokeWidth={5.4} strokeLinecap="round" />
      </svg>
      <span className="font-sans text-sm font-semibold uppercase tracking-[0.15em] text-foreground">
        META
        <em
          style={{
            fontSize: "95%",
            marginLeft: "-0.1em",
            transform: "translateY(0.015em) skewX(-2deg)",
          }}
          className="inline-block font-serif italic font-medium text-gold"
        >
          shift
        </em>
      </span>
    </>
  );
}

export function Logo({ className, asLink = true }: LogoProps) {
  const classes = cn("inline-flex items-center gap-[6px]", className);

  if (!asLink) {
    return (
      <span className={classes}>
        <LogoMark />
      </span>
    );
  }

  return (
    <Link
      href="#hero"
      aria-label="MetaShift — home"
      className={cn(classes, "-my-3 py-3")}
    >
      <LogoMark />
    </Link>
  );
}
