import { about, currentlyDoing, interests, site } from "@/data/content";
import { Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Magnetic } from "@/components/magnetic";

const gradients = [
  "from-[#241636] to-[#4C2A87]",
  "from-[#0D2B4E] to-[#0E4A8A]",
  "from-[#1E1230] to-[#3B2166]",
];

export function Story() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <Reveal>
          <Eyebrow>{about.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-5 max-w-3xl text-balance text-[clamp(1.9rem,4.6vw,3.2rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text">
            {about.intro}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={site.resumeUrl}
                data-cursor-hover
                className="font-display inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-[filter] hover:brightness-110"
              >
                View resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={`mailto:${site.email}`}
                data-cursor-hover
                className="font-display inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-border-hover hover:bg-white/[0.03]"
              >
                {site.email}
              </a>
            </Magnetic>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-md md:mt-16">
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

        <div className="mt-24 flex flex-col gap-24 md:mt-32 md:gap-32">
          {about.storyBlocks.map((block, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={block.heading}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                  reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <ImagePlaceholder
                    gradient={gradients[i % gradients.length]}
                    label="Photo — add your own"
                    className="aspect-[4/5] w-full"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <h2 className="font-display text-balance text-[clamp(1.5rem,3vw,2.1rem)] font-semibold leading-tight tracking-[-0.02em] text-text">
                    {block.heading}
                  </h2>
                  <div className="mt-5 flex flex-col gap-4">
                    {block.paragraphs.map((p, pi) => (
                      <p key={pi} className="text-[14.5px] leading-relaxed text-text-muted md:text-[15px]">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        <div className="mt-24 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <h3 className="font-display mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-text">
                Currently
              </h3>
              <ul className="flex flex-col gap-2.5">
                {currentlyDoing.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <h3 className="font-display mb-4 text-[13px] font-bold uppercase tracking-[0.1em] text-text">
                Outside of work
              </h3>
              <ul className="flex flex-col gap-2.5">
                {interests.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
