import type { Metadata } from "next";
import { Inter, Noto_Serif } from "next/font/google";
import ConditionalShell from "@/components/layout/ConditionalShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Casa Pellegrini",
  description: "Un legado de belleza, historia y piezas únicas de colección",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${notoSerif.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}
