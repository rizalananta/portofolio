import { about } from "@/data/content";
import { Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <Eyebrow>{about.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-4 text-balance text-[clamp(1.9rem,4vw,2.9rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
                {about.title}
              </h2>
            </Reveal>

            <div className="mt-8 flex flex-col gap-5">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.14 + i * 0.06}>
                  <p className="max-w-2xl text-[15px] leading-relaxed text-text-muted md:text-base">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-md">
              {about.info.map((item, i) => (
                <Reveal key={item.label} delay={0.2 + i * 0.05}>
                  <div className="rounded-xl border border-border bg-card/50 p-3.5">
                    <div className="font-data text-[10px] font-semibold uppercase tracking-[0.1em] text-accent-2">
                      {item.label}
                    </div>
                    <div className="font-display mt-1 text-[13px] font-semibold text-text">{item.value}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {about.highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.1 + i * 0.08}>
                <div className="group rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-card">
                  <div className="font-data mb-3 text-[11px] font-semibold text-accent-2">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-[15px] font-bold text-text">{h.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-text-muted">{h.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
