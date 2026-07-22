import { marqueeItems } from "@/data/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-border bg-surface py-4">
      <div className="animate-marquee flex w-max items-center">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-data flex items-center gap-2.5 whitespace-nowrap border-r border-border px-6 text-[13px] font-medium text-text-dim"
          >
            <span className="text-accent-2">✦</span>
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee-scroll 32s linear infinite;
        }
      `}</style>
    </div>
  );
}
