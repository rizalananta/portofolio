"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { GalleryImage } from "@/data/content";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";

export function Lightbox({
  image,
  onClose,
}: {
  image: GalleryImage | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/85 p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 0.68, 0, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl"
          >
            <ImagePlaceholder gradient={image.gradient} label={image.kind} className="aspect-[16/10] w-full" />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[13.5px] text-text-muted">{image.caption}</p>
              <button
                onClick={onClose}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
