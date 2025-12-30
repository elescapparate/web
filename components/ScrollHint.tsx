"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollHint() {
  return (
    <div className="flex items-center gap-3 text-sm text-white/60">
      <span>Scroll</span>
      <motion.span
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15"
      >
        <ChevronDown size={18} />
      </motion.span>
    </div>
  );
}
