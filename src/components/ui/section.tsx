import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "font-data inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-accent-2",
        className
      )}
    >
      <span className="h-px w-6 bg-current" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <Eyebrow className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display mt-4 text-balance text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-text">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
