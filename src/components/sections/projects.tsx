"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";
import { ProjectModal } from "@/components/sections/project-modal";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow="Selected work" title="Projects & work samples" className="mb-12" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.08}>
              <button
                onClick={() => setSelected(project)}
                data-cursor-hover
                className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_24px_60px_rgba(139,92,246,0.12)]"
              >
                <div className={`relative h-44 bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-5 font-display text-base font-bold text-white">
                    {project.label}
                  </span>
                  <span className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-2.5 flex flex-wrap gap-1.5">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="font-data rounded-full border border-accent/15 bg-accent-soft px-2.5 py-1 text-[10.5px] font-medium text-accent-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-[15px] font-bold text-text">{project.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{project.shortDescription}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
