"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Container, Eyebrow } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function WorkList() {
  return (
    <section id="work" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <Eyebrow>Selected work</Eyebrow>
        </Reveal>

        <div className="mt-8 flex flex-col divide-y divide-border border-t border-border">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <Link
                href={`/work/${project.slug}`}
                data-cursor-hover
                className="group grid grid-cols-1 items-center gap-6 py-10 md:grid-cols-[auto_1fr_280px_auto] md:gap-10"
              >
                <span className="font-data hidden text-[13px] text-text-dim md:block">0{i + 1}</span>

                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h3 className="font-display text-[22px] font-bold text-text transition-colors group-hover:text-accent-2 md:text-[28px]">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-2"
                    />
                  </div>
                  <p className="font-data mt-2 text-[12.5px] uppercase tracking-[0.06em] text-text-dim">
                    {project.company} · {project.year} - {project.summary}
                  </p>
                </div>

                {project.coverImage ? (
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border transition-transform duration-500 ease-out group-hover:scale-[1.02]">
                    <Image
                      src={project.coverImage}
                      alt={`${project.title} cover`}
                      fill
                      sizes="(min-width: 768px) 280px, 100vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    gradient={project.gradient}
                    className="aspect-[16/10] w-full opacity-90 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                )}

                <div className="hidden flex-wrap justify-end gap-1.5 md:flex">
                  {project.tools.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="font-data rounded-full border border-border px-2.5 py-1 text-[10.5px] font-medium text-text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
