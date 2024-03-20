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
        media: "(prefers-color-scheme: light)",
        url: "/icons/favicon-dark.svg",
        href: "/icons/favicon-dark.svg",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/favicon.svg",
        href: "/icons/favicon.svg",
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
        <main>{children}</main>
      </body>
    </html>
  );
}
