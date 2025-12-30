import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-ink/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/15">
            <Image src="/logo.png" alt="El Escapparate" fill className="object-cover" />
          </div>
          <span className="text-sm font-semibold tracking-wide text-white/90">
            EL ESCAPPARATE
          </span>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#popular">Popular</a>
          <a className="hover:text-white" href="#plataformas">Plataformas</a>
          <a className="hover:text-white" href="#news">News</a>
        </nav>

        <a
          href="#contacto"
          className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 hover:border-white/30"
        >
          Contacto
        </a>
      </div>
    </header>
  );
}
