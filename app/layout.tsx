import type { Metadata } from "next";
import "./globals.css";

import {
  rightGrotesk,
  messinaSans,
  biroScript,
  biroScriptUS,
} from "@/utils/customFonts";

export const metadata: Metadata = {
  title: "Ape NFT",
  description:
    "Discover more about your favorite ape NFTs and how you can manage them!",
  icons: {
    icon: [
      {
        url: "/icons/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${messinaSans.variable} ${biroScript.variable} ${biroScriptUS.variable} ${rightGrotesk.className}`}
      >
        {children}
      </body>
    </html>
  );
}
