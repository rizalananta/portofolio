import { GraduationCap, MapPin, ChartBar, Workflow, Globe, ExternalLink, BadgeCheck } from "lucide-react";
import { education, skillCategories, certifications } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

const icons = { ChartBar, Workflow, Globe };

export function EducationAndSkills() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={education.eyebrow} title="Education, skills & tools" className="mb-10" />

        <Reveal delay={0.06}>
          <div className="relative mb-10 overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-70"
              style={{ background: "radial-gradient(circle, rgba(139,92,246,0.14), transparent 70%)" }}
            />
            <div className="relative flex flex-wrap items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/25 bg-accent-soft">
                  <GraduationCap size={24} className="text-accent-2" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-text">{education.university}</h3>
                  <p className="mt-1 text-[14px] font-medium text-accent-2">{education.degree}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-[13px] text-text-dim">
                    <MapPin size={12} />
                    {education.period} · {education.location}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="font-display text-4xl font-extrabold text-accent-2">{education.gpa}</div>
                <div className="font-data text-[11px] uppercase tracking-[0.1em] text-text-dim">{education.gpaLabel}</div>
              </div>
            </div>
            <div className="relative mt-8 border-t border-border pt-6">
              <div className="font-data mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-text-dim">
                Relevant coursework
              </div>
              <div className="flex flex-wrap gap-2">
                {education.courses.map((c) => (
                  <span
                    key={c}
                    className="font-data rounded-full border border-accent/20 bg-accent-soft px-3.5 py-1.5 text-[12.5px] font-medium text-accent-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon as keyof typeof icons];
            return (
              <Reveal key={cat.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-border bg-card/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent-soft">
                      <Icon size={18} className="text-accent-2" />
                    </div>
                    <h3 className="font-display text-[15px] font-bold text-text">{cat.title}</h3>
                  </div>
                  <div className="mb-4">
                    <div className="font-data mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-text-dim">
                      Skills
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s) => (
                        <span
                          key={s}
                          className="font-data rounded-full border border-accent/15 bg-accent-soft px-2.5 py-1 text-[11.5px] font-medium text-accent-2"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-data mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-text-dim">
                      Tools
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.tools.map((t) => (
                        <span
                          key={t}
                          className="font-data rounded-full border border-border bg-surface px-2.5 py-1 text-[11.5px] font-medium text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card/40 p-6">
              <div className="font-display mb-4 flex items-center gap-2 text-[15px] font-bold text-text">
                <span className="h-4 w-0.5 rounded-full bg-accent-2" />
                Certifications
              </div>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map((c) => (
                  <a
                    key={c.name}
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="group flex items-center gap-3 rounded-xl border border-border bg-surface px-3.5 py-2.5 transition-colors hover:border-accent/30 hover:bg-accent-soft"
                  >
                    <BadgeCheck size={16} className="shrink-0 text-emerald-400" />
                    <div className="min-w-0 flex-1">
                      <div className="font-display truncate text-[12.5px] font-semibold text-text">{c.name}</div>
                      <div className="truncate text-[11px] text-text-dim">{c.meta}</div>
                    </div>
                    <ExternalLink size={13} className="shrink-0 text-text-dim opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
