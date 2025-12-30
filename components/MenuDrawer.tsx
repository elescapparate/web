"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Series", href: "#series" },
  { label: "Cine", href: "#cine" },
  { label: "Música", href: "#musica" },
  { label: "Deportes", href: "#deportes" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Moda", href: "#moda" },
  { label: "Entrevistas", href: "#entrevistas" },
];

export function MenuDrawer() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        aria-label="Abrir menú"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white hover:border-white/30"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[min(92vw,420px)] border-l border-white/10 bg-brand-ink text-brand-cloud"
              initial={{ x: 420 }}
              animate={{ x: 0 }}
              exit={{ x: 420 }}
              transition={{ type: "tween", duration: 0.25 }}
            >
              <div className="flex items-center justify-between border-b border-white/10 p-5">
                <p className="text-sm font-semibold tracking-wide text-white/80">EL ESCAPARATE</p>
                <button
                  aria-label="Cerrar"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 hover:border-white/30"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="p-5">
                <ul className="space-y-2">
                  {links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-lg font-semibold text-white/90 hover:bg-white/5"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-semibold text-white/85">Contacto</p>
                  <p className="mt-1 text-sm text-white/60">pon-tu-email@aqui.com</p>
                </div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
