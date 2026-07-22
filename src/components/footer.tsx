import { Mail, Link2, MapPin } from "lucide-react";
import { site, nav, footer } from "@/data/content";
import { Container } from "@/components/ui/section";

export function Footer() {
  return (
    <footer className="border-t border-border py-16">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <a href="#home" className="font-display flex items-center gap-2 text-sm font-bold text-text">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {site.initials}
            </a>
            <p className="mt-3 max-w-xs text-[13px] leading-relaxed text-text-dim">{footer.description}</p>
          </div>

          <div>
            <div className="font-data mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-dim">
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13.5px] text-text-muted transition-colors hover:text-accent-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-data mb-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-text-dim">
              Contact
            </div>
            <ul className="flex flex-col gap-2.5">
              <li className="flex items-center gap-2 text-[13.5px] text-text-muted">
                <Mail size={13} className="text-accent-2" /> {site.email}
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-text-muted">
                <Link2 size={13} className="text-accent-2" /> {site.linkedinLabel}
              </li>
              <li className="flex items-center gap-2 text-[13.5px] text-text-muted">
                <MapPin size={13} className="text-accent-2" /> {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-[12px] text-text-dim">{footer.copyright}</p>
          <p className="font-data text-[11px] text-text-dim">Built with Next.js, Tailwind & Framer Motion</p>
        </div>
      </Container>
    </footer>
  );
}
