import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  gradient,
  label,
  className,
  onClick,
}: {
  gradient: string;
  label?: string;
  className?: string;
  onClick?: () => void;
}) {
  const Comp = onClick ? "button" : "div";
  return (
    <Comp
      onClick={onClick}
      data-cursor-hover={onClick ? "" : undefined}
      className={cn(
        "group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-to-br text-left",
        gradient,
        onClick && "cursor-pointer",
        className
      )}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 text-white/40">
        <ImageIcon size={22} strokeWidth={1.5} />
        {label && (
          <span className="font-data max-w-[80%] text-center text-[11px] font-medium uppercase tracking-[0.08em] text-white/50">
            {label}
          </span>
        )}
      </div>
    </Comp>
  );
}
