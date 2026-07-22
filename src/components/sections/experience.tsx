"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { experience } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function Experience() {
  const [active, setActive] = useState(experience.tabs[0].key);
  const activeTab = experience.tabs.find((t) => t.key === active)!;

  return (
    <section id="experience" className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={experience.eyebrow} title={experience.title} className="mb-10" />

        <Reveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-2">
            {experience.tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                data-cursor-hover
                className={cn(
                  "font-display rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors",
                  active === tab.key
                    ? "border-accent bg-accent text-white"
                    : "border-border text-text-muted hover:border-border-hover hover:text-text"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 0.68, 0, 1] }}
            className="relative border-l border-border pl-8 md:pl-10"
          >
            <div className="flex flex-col gap-10">
              {activeTab.items.map((item, i) => (
                <div key={item.company + item.period} className="relative">
                  <span
                    className={cn(
                      "absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-2 border-bg md:-left-[42px]",
                      item.current ? "bg-emerald-400" : "bg-accent"
                    )}
                  />
                  <Reveal delay={i * 0.05}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-display text-[17px] font-bold text-text">{item.company}</h3>
                      <span
                        className={cn(
                          "font-data whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-semibold",
                          item.current
                            ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300"
                            : "border-accent/25 bg-accent-soft text-accent-2"
                        )}
                      >
                        {item.period}
                      </span>
                    </div>
                    <p className="font-display mt-1 text-[14px] font-semibold text-accent-2">{item.role}</p>
                    <p className="mt-1 flex items-center gap-1.5 text-[12.5px] text-text-dim">
                      <MapPin size={12} />
                      {item.location}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {item.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-text-muted">
                          <ArrowRight size={13} className="mt-1 shrink-0 text-accent-2" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
