import { Mail, Link2 } from "lucide-react";
import { cta, site } from "@/data/content";
import { Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic";

export function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.12), transparent 70%)" }}
      />
      <Container className="relative text-center">
        <Reveal>
          <Eyebrow className="justify-center">{cta.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display mx-auto mt-5 max-w-2xl text-balance text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-text">
            {cta.title}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-text-muted">{cta.subtitle}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                data-cursor-hover
                className="font-display inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(139,92,246,0.32)] transition-[filter] hover:brightness-110"
              >
                <Mail size={16} /> Email me
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="font-display inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-text transition-colors hover:border-border-hover hover:bg-white/[0.03]"
              >
                <Link2 size={16} /> LinkedIn
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
