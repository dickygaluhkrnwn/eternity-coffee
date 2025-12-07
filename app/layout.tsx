import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Setup Font Sans (Inter) - Untuk teks menu & deskripsi agar mudah dibaca
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Setup Font Serif (Playfair Display) - Untuk Judul "Eternity Coffee" yang elegan
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eternity Coffee | 24 Hours Coffee Club",
  description: "Teman begadang skripsian & nongkrong tanpa henti di Jogja. Buka 24 Jam dengan fasilitas lengkap.",
  icons: {
    icon: "/favicon.ico", // Nanti kita ganti iconnya
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-cream-50 text-coffee-900 font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}