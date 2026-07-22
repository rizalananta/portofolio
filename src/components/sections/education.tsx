import { GraduationCap, MapPin } from "lucide-react";
import { education } from "@/data/content";
import { Container, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={education.eyebrow} title={education.title} className="mb-10" />

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-10">
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
                <div className="font-data text-[11px] uppercase tracking-[0.1em] text-text-dim">
                  {education.gpaLabel}
                </div>
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
      </Container>
    </section>
  );
}
