import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const fontVariables = [geistSans, geistMono, jetbrainsMono]
  .map((f) => f.variable)
  .join(" ");
