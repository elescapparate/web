export function Tag({ children, tone = "sky" }: { children: React.ReactNode; tone?: "sky" | "green" | "red" }) {
  const styles =
    tone === "green"
      ? "bg-brand-green/15 text-brand-green border-brand-green/25"
      : tone === "red"
      ? "bg-brand-red/15 text-brand-red border-brand-red/25"
      : "bg-brand-sky/20 text-brand-ink border-black/10";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${styles}`}>
      {children}
    </span>
  );
}
