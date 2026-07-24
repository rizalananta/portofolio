"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import type { GalleryImage, Project } from "@/data/content";
import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { Lightbox } from "@/components/ui/lightbox";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "role", label: "My Role" },
  { id: "process", label: "Process" },
  { id: "gallery", label: "Gallery" },
  { id: "results", label: "Results" },
  { id: "reflection", label: "Reflection" },
];

export function CaseStudy({
  project,
  prev,
  next,
}: {
  project: Project;
  prev: Project;
  next: Project;
}) {
  const [active, setActive] = useState(sections[0].id);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top < 160) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <Container>
          <Reveal>
            <Link
              href="/"
              data-cursor-hover
              className="font-data inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-accent-2"
            >
              <ArrowLeft size={13} /> Back to work
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="font-data mt-8 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-2">
              {project.category}
            </p>
            <h1 className="font-display mt-3 max-w-3xl text-balance text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-text">
              {project.title}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-muted">{project.summary}</p>
          </Reveal>

          <Reveal delay={0.14}>
            {project.coverImage ? (
              <div className="relative mt-10 aspect-[16/8] w-full overflow-hidden rounded-2xl border border-border md:mt-14">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <ImagePlaceholder
                gradient={project.gradient}
                label="Project cover - add your own"
                className="mt-10 aspect-[16/8] w-full md:mt-14"
              />
            )}
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
              {[
                { label: "Company", value: project.company },
                { label: "Role", value: project.role },
                { label: "Timeline", value: project.timeline },
                { label: "Tools", value: project.tools.join(", ") },
              ].map((f) => (
                <div key={f.label}>
                  <div className="font-data text-[10px] font-semibold uppercase tracking-[0.1em] text-text-dim">
                    {f.label}
                  </div>
                  <div className="font-display mt-1 text-[13.5px] font-semibold text-text">{f.value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Body with sticky contents nav */}
      <section className="pb-24 md:pb-32">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[200px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-1">
              <span className="font-data mb-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-dim">
                Contents
              </span>
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  data-cursor-hover
                  className={cn(
                    "font-display border-l-2 py-1.5 pl-3 text-[13px] font-medium transition-colors",
                    active === s.id
                      ? "border-accent-2 text-text"
                      : "border-border text-text-dim hover:border-border-hover hover:text-text-muted"
                  )}
                >
                  {s.label}
                </a>
              ))}
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="font-data mt-5 inline-flex items-center gap-1.5 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-accent-2"
                >
                  View source <ExternalLink size={11} />
                </a>
              )}
            </div>
          </aside>

          <div className="flex flex-col gap-20 md:gap-28">
            <div id="overview" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent-2">
                  Overview
                </h2>
              </Reveal>
              <div className="mt-5 flex flex-col gap-4">
                {project.overview.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className="max-w-2xl text-[15px] leading-relaxed text-text-muted">{p}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <div id="role" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent-2">
                  My Role
                </h2>
              </Reveal>
              <ul className="mt-5 flex flex-col gap-3">
                {project.myRole.map((r, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="flex items-start gap-3 text-[14.5px] leading-relaxed text-text-muted">
                      <span className="font-data mt-0.5 shrink-0 text-[12px] text-accent-2">0{i + 1}</span>
                      <span>{r}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            <div id="process" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent-2">
                  Process
                </h2>
              </Reveal>
              <div className="mt-6 flex flex-col gap-6">
                {project.process.map((step, i) => (
                  <Reveal key={step.title} delay={i * 0.06}>
                    <div className="rounded-2xl border border-border bg-card/40 p-6">
                      <div className="flex items-baseline gap-3">
                        <span className="font-data text-[12px] text-accent-2">0{i + 1}</span>
                        <h3 className="font-display text-[15px] font-bold text-text">{step.title}</h3>
                      </div>
                      <p className="mt-3 text-[13.5px] leading-relaxed text-text-muted">{step.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div id="gallery" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent-2">
                  Gallery
                </h2>
              </Reveal>
              <p className="mt-3 max-w-xl text-[13px] text-text-dim">
                Placeholder slots sized for real screenshots - click to preview.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.gallery.map((img, i) => (
                  <Reveal key={i} delay={i * 0.05} className={img.span === "full" ? "sm:col-span-2" : ""}>
                    <button onClick={() => setLightboxImage(img)} className="block w-full text-left" data-cursor-hover>
                      <ImagePlaceholder
                        gradient={img.gradient}
                        label={img.kind}
                        className={img.span === "full" ? "aspect-[16/9] w-full" : "aspect-[4/3] w-full"}
                      />
                      <p className="mt-2 text-[12.5px] text-text-dim">{img.caption}</p>
                    </button>
                  </Reveal>
                ))}
              </div>
            </div>

            <div id="results" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent-2">
                  Results
                </h2>
              </Reveal>
              <div className="mt-5 flex flex-col gap-3">
                {project.results.map((r, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <div className="flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.04] p-4">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      <p className="text-[13.5px] leading-relaxed text-text-muted">{r}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div id="reflection" className="scroll-mt-28">
              <Reveal>
                <h2 className="font-display text-[13px] font-bold uppercase tracking-[0.12em] text-accent-2">
                  Reflection
                </h2>
              </Reveal>
              <div className="mt-5 flex flex-col gap-4">
                {project.reflection.map((r, i) => (
                  <Reveal key={i} delay={i * 0.05}>
                    <p className="max-w-2xl text-[14.5px] italic leading-relaxed text-text-muted">{r}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Prev / next navigation */}
      <section className="border-t border-border py-16">
        <Container className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Magnetic className="block">
            <Link
              href={`/work/${prev.slug}`}
              data-cursor-hover
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-6 transition-colors hover:border-accent/30"
            >
              <ArrowLeft size={18} className="shrink-0 text-text-dim transition-transform group-hover:-translate-x-1" />
              <div className="min-w-0">
                <div className="font-data text-[10px] font-semibold uppercase tracking-[0.1em] text-text-dim">
                  Previous
                </div>
                <div className="font-display truncate text-[15px] font-bold text-text">{prev.title}</div>
              </div>
            </Link>
          </Magnetic>
          <Magnetic className="block">
            <Link
              href={`/work/${next.slug}`}
              data-cursor-hover
              className="group flex items-center justify-end gap-4 rounded-2xl border border-border bg-card/40 p-6 text-right transition-colors hover:border-accent/30"
            >
              <div className="min-w-0">
                <div className="font-data text-[10px] font-semibold uppercase tracking-[0.1em] text-text-dim">Next</div>
                <div className="font-display truncate text-[15px] font-bold text-text">{next.title}</div>
              </div>
              <ArrowUpRight size={18} className="shrink-0 text-text-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </Link>
          </Magnetic>
        </Container>
      </section>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </>
  );
}
