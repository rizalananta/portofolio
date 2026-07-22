"use client";

import { motion, Variants, Easing } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site, heroMetrics } from "@/data/content";
import { Container } from "@/components/ui/section";
import { Magnetic } from "@/components/magnetic";

const EASE: Easing = [0.22, 0.68, 0, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.14) 0%, rgba(110,231,249,0.05) 45%, transparent 72%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container className="relative z-10 grid grid-cols-1 items-end gap-14 lg:grid-cols-[1fr_320px]">
        <div>
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-soft px-3.5 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-2 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-2" />
            </span>
            <span className="font-data text-[11px] font-medium uppercase tracking-[0.14em] text-text">
              {site.availability}
            </span>
          </motion.div>

          <h1 className="font-display text-balance text-[clamp(2.6rem,8vw,6.2rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-text">
            <motion.span custom={0.08} initial="hidden" animate="visible" variants={fadeUp} className="block">
              Afrizal Widya
            </motion.span>
            <motion.span
              custom={0.16}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="block bg-gradient-to-r from-text via-text to-accent-2 bg-clip-text text-transparent"
            >
              Ananta.
            </motion.span>
          </h1>

          <motion.p
            custom={0.26}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-7 max-w-xl text-[15px] leading-relaxed text-text-muted md:text-[17px]"
          >
            {site.description}
          </motion.p>

          <motion.div
            custom={0.34}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#work"
                data-cursor-hover
                className="font-display inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(139,92,246,0.32)] transition-[filter,transform] hover:brightness-110"
              >
                View my work
                <ArrowUpRight size={16} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                data-cursor-hover
                className="font-display inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-border-hover hover:bg-white/[0.03]"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Signature: live metric rail — reflects this person's actual analytics work */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col gap-3"
        >
          {heroMetrics.map((m) => (
            <div
              key={m.label}
              className="group rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-sm transition-colors hover:border-border-hover"
            >
              <div className="flex items-center justify-between">
                <span className="font-data text-[10px] font-semibold uppercase tracking-[0.12em] text-text-dim">
                  {m.label}
                </span>
                {m.live && (
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="font-data text-[9px] uppercase tracking-wider text-emerald-400">live</span>
                  </span>
                )}
              </div>
              <div className="font-display mt-1.5 text-lg font-bold text-text">{m.value}</div>
              <div className="font-data mt-0.5 text-[11px] text-text-muted">{m.sub}</div>
            </div>
          ))}
        </motion.div>
      </Container>

      <motion.a
        href="#about"
        data-cursor-hover
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-text-dim md:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-data text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
