"use client";

import { motion, Variants, Easing } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { site } from "@/data/content";
import { Container } from "@/components/ui/section";

const EASE: Easing = [0.22, 0.68, 0, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: EASE },
  }),
};

export function Hero() {
  return (
    <section className="relative flex min-h-[92svh] flex-col justify-center pt-24 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, rgba(110,231,249,0.04) 45%, transparent 72%)",
        }}
      />

      <Container className="relative z-10">
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

        <h1 className="font-display max-w-4xl text-balance text-[clamp(2.4rem,6.4vw,4.6rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-text">
          <motion.span custom={0.1} initial="hidden" animate="visible" variants={fadeUp} className="block">
            {site.tagline}
          </motion.span>
        </h1>

        <motion.p
          custom={0.24}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-7 max-w-lg text-[15px] leading-relaxed text-text-muted md:text-[16px]"
        >
          {site.description}
        </motion.p>

        <motion.div custom={0.36} initial="hidden" animate="visible" variants={fadeUp} className="mt-10">
          <a
            href="#work"
            data-cursor-hover
            className="font-data inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-text-muted transition-colors hover:text-accent-2"
          >
            Scroll to see work
            <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
              <ArrowDown size={13} />
            </motion.span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
