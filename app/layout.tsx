import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Polytron — Pioneer in Innovation",
  description:
    "Dari kendaraan listrik revolusioner hingga perabot rumah pintar — Polytron mendefinisikan ulang kehidupan modern Indonesia selama 40+ tahun.",
  keywords: [
    "Polytron",
    "Kendaraan Listrik",
    "Fox 500",
    "TV Mini LED",
    "Kulkas Flexup",
    "AC Pintar",
    "Laptop Luxia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${bebasNeue.variable} ${outfit.variable}`}
    >
      <body className="bg-[#070707] text-[#f5f5f5] antialiased overflow-x-hidden font-body">
        {children}
      </body>
    </html>
  );
}
