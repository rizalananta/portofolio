"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { Project } from "@/data/content";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.22, 0.68, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-surface"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/70 transition-colors hover:bg-white/15 hover:text-white"
            >
              <X size={16} />
            </button>

            <div className={`h-52 bg-gradient-to-br ${project.gradient} md:h-64`} />

            <div className="p-7 md:p-9">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="font-data rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-[11px] font-medium text-accent-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight text-text">{project.title}</h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-text-muted">{project.description}</p>

              <div className="mt-7 flex items-center gap-3">
                {project.href && (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-[13px] font-semibold text-white transition-[filter] hover:brightness-110"
                  >
                    View project <ExternalLink size={14} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="font-display rounded-full border border-border px-5 py-2.5 text-[13px] font-semibold text-text-muted transition-colors hover:text-text"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
