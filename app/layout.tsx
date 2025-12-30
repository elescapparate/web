import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const fontSans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "El Escapparate",
  description: "Cine · Música · Deportes · Eventos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${fontSans.variable} font-sans`}>{children}</body>
    </html>
  );
}
