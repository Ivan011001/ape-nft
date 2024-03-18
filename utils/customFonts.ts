import localFont from "next/font/local";

const rightGrotesk = localFont({
  src: "../public/fonts/RightGrotesk/font.otf",
});

const biroScript = localFont({
  src: [
    {
      path: "../public/fonts/BiroScript/font-bold.woff2",
    },
  ],
  variable: "--font-biro-script",
});

const biroScriptUS = localFont({
  src: [
    {
      path: "../public/fonts/BiroScript/font-us-bold.woff2",
    },
  ],
  variable: "--font-biro-script-us",
});

const messinaSans = localFont({
  src: [
    {
      path: "../public/fonts/MessinaSans/font-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/MessinaSans/font-semibold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-messina-sans",
});

export { rightGrotesk, biroScript, biroScriptUS, messinaSans };
