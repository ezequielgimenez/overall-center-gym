import type { Metadata } from "next";
import HeaderComp from "./components/Header";
import FooterComp from "./components/Footer";
import AOSProvider from "./AosProvider";
import WhatsappButton from "./components/WhatsappButton";

import {
  Montserrat,
  Anton,
  Plus_Jakarta_Sans,
  Oswald,
  Outfit,
} from "next/font/google";
// @ts-ignore: side-effect import of global CSS
import "./globals.css";

const geistMontserrat = Montserrat({
  variable: "--font-geist-header",
  subsets: ["latin"],
});

const geistAnton = Anton({
  variable: "--font-geist-hero",
  subsets: ["latin"],
  weight: ["400"],
});

const geistOutfit = Outfit({
  variable: "--font-geist-card",
  subsets: ["latin"],
});

const geistPlusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-jakarta",
  subsets: ["latin"],
});
const geistOswald = Oswald({
  variable: "--font-geist-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overall Center Gym",
  description: "LA CADENA MÁS GRANDE DE TUCUMÁN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistMontserrat.variable} ${geistAnton.variable} ${geistOutfit.variable} ${geistPlusJakarta.variable} ${geistOswald.variable} antialiased`}
      >
        <HeaderComp />
        <AOSProvider />
        <main>{children}</main>
        <WhatsappButton />
        <FooterComp />
      </body>
    </html>
  );
}
