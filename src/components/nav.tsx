"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { nav, site } from "@/data/content";
import { Magnetic } from "@/components/magnetic";
import { cn } from "@/lib/utils";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

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
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center justify-between px-5 sm:px-6 md:px-10">
        <Link href="/" className="font-display flex items-center gap-2 text-sm font-bold tracking-tight text-text" data-cursor-hover>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.shortName}
        </Link>

        {/* Nav links: always visible, on every screen size - no hamburger */}
        <ul className="flex items-center gap-5 sm:gap-8">
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

        <div className="flex items-center gap-3">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="font-display hidden text-[13px] font-medium text-text-muted transition-colors hover:text-text md:block"
          >
            LinkedIn
          </a>
          <Magnetic>
            <a
              href={`mailto:${site.email}`}
              data-cursor-hover
              aria-label="Email me"
              className="font-display inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-[filter] hover:brightness-110 sm:px-4"
            >
              <Mail size={14} className="sm:hidden" />
              <span className="hidden sm:inline">Get in touch</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </motion.nav>
  );
}
