import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

import {
  rightGrotesk,
  messinaSans,
  biroScript,
  biroScriptUS,
} from "@/utils/customFonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://ape-nft-rouge.vercel.app/"),
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
  openGraph: {
    title: "Ape NFT",
    description:
      "Discover more about your favorite ape NFTs and how you can manage them!",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/open-graph.png",
        width: 800,
        height: 600,
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
        <Toaster theme="light" />
        {children}
      </body>
    </html>
  );
}
