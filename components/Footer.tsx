export function Footer() {
  return (
    <footer id="contacto" className="mt-16 border-t border-black/10 bg-brand-cloud/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg font-extrabold">El Escaparate</p>
            <p className="mt-2 text-sm text-brand-ink/70">
              Cobertura de eventos y cultura: cine, música, deportes y más.
            </p>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-semibold">Contacto</p>
            <p className="mt-2 text-sm text-brand-ink/70">pon-tu-email@aqui.com</p>
            <p className="text-sm text-brand-ink/70">@tus_redes</p>
          </div>
        </div>

        <p className="mt-10 text-xs text-brand-ink/60">
          © {new Date().getFullYear()} El Escaparate. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
