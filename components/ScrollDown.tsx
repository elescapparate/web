"use client";

import { motion } from "framer-motion";

export function ScrollDown() {
  return (
    <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
      <p className="text-xs font-semibold tracking-[0.25em] text-white/60">SCROLL</p>
      <motion.div
        className="mx-auto mt-2 h-8 w-px bg-white/40"
        animate={{ scaleY: [1, 1.8, 1] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "top" }}
      />
    </div>
  );
}
