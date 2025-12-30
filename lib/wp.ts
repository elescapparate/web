const base = process.env.WP_BASE;

export async function wpFetch(path: string) {
  if (!base) throw new Error("WP_BASE missing");
  const res = await fetch(`${base}${path}`, { next: { revalidate: 30 } }); // se actualiza solo
  if (!res.ok) throw new Error(`WP fetch failed: ${res.status}`);
  return res.json();
}
