"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/data/content";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display flex items-center gap-2 text-sm font-bold tracking-tight text-text" data-cursor-hover>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.shortName}
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  data-cursor-hover
                  className={cn(
                    "font-display relative text-[13px] font-medium text-text-muted transition-colors hover:text-text",
                    active && "text-text"
                  )}
                >
                  {item.label}
                  {active && <motion.span layoutId="nav-active" className="absolute -bottom-1.5 left-0 h-px w-full bg-accent-2" />}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="font-display text-[13px] font-medium text-text-muted transition-colors hover:text-text"
          >
            LinkedIn
          </a>
          <Magnetic>
            <a
              href={`mailto:${site.email}`}
              data-cursor-hover
              className="font-display inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-[filter] hover:brightness-110"
            >
              Get in touch
            </a>
          </Magnetic>
        </div>

        <button className="text-text md:hidden" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.3, ease: [0.22, 0.68, 0, 1] }}
          className="overflow-hidden border-t border-border bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display block py-2.5 text-[15px] font-medium text-text-muted transition-colors hover:text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display block py-2.5 text-[15px] font-medium text-text-muted transition-colors hover:text-text"
              >
                LinkedIn
              </a>
            </li>
            <li className="pt-2">
              <a
                href={`mailto:${site.email}`}
                className="font-display inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
