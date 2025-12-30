"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { MenuDrawer } from "@/components/MenuDrawer";
import { ScrollDown } from "@/components/ScrollDown";

export type Section = {
  id: string;
  title: string;
  subtitle?: string;
  bg: string; // ruta en /public
  fit?: "cover" | "contain"; // contain para el logo, cover para fotos
};

function HeroSection({
  s,
  isFirst,
  dir,
}: {
  s: Section;
  isFirst: boolean;
  dir: "down" | "up";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.45 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      });
    } else {
      // Cuando sale de vista, lo mandamos al lado opuesto para que al volver entre con dirección correcta
      controls.start({
        opacity: 0,
        y: dir === "down" ? -40 : 40,
        transition: { duration: 0.25, ease: "easeIn" },
      });
    }
  }, [inView, dir, controls]);

  const isLogo = s.fit === "contain";

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" id={s.id}>
      {/* Imagen FULL BLEED */}
      {/* Imagen FULL BLEED (sin bordes, sin difuminado, sin overlays) */}
<div className="absolute inset-0">
  <Image
    src={s.bg}
    alt=""
    fill
    priority={isFirst}
    sizes="100vw"
    className="object-cover"
  />
</div>


      {/* Overlay estilo DOAC */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />

      {/* Texto animado */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: dir === "down" ? 40 : -40 }}
          animate={controls}
          className="max-w-3xl"
        >

          {s.subtitle && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              {s.subtitle}
            </p>
          )}

          {!isFirst && (
            <div className="mt-8 flex gap-3">
              <a
                href="#"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Ver contenido
              </a>
              <a
                href="#top"
                className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:border-white/35"
              >
                Volver arriba
              </a>
            </div>
          )}
        </motion.div>
      </div>

      {isFirst && <ScrollDown />}
    </section>
  );
}

export function HomeClient({ sections }: { sections: Section[] }) {
  const [dir, setDir] = useState<"down" | "up">("down");

  useEffect(() => {
    let last = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) < 2) return;
      setDir(y > last ? "down" : "up");
      last = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Evita re-renders tontos por props mutables
  const stableSections = useMemo(() => sections, [sections]);

  return (
    <main className="bg-black" id="top">
      {/* Glow superior sutil */}
      <div className="pointer-events-none fixed inset-x-0 top-0 z-10 h-64 bg-gradient-to-b from-brand-sky/15 to-transparent" />

      {/* Header fijo (como en la referencia) */}
      <div className="fixed left-4 top-6 z-50 text-sm font-semibold tracking-wide text-white/90">
        EL ESCAPARATE
      </div>
      <div className="fixed right-4 top-6 z-50">
        <MenuDrawer />
      </div>

      {stableSections.map((s, idx) => (
        <HeroSection key={s.id} s={s} isFirst={idx === 0} dir={dir} />
      ))}
    </main>
  );
}
