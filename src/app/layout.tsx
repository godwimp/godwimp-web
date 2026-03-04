import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const ibmPlexMono = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-mono",
});

const syne = localFont({
  src: [
    {
      path: "../../node_modules/@fontsource/syne/files/syne-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/syne/files/syne-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/syne/files/syne-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource/syne/files/syne-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Fadhillah Maulana — Backend Engineer",
  description: "Backend engineer specialized in NestJS, microservices, and security tools. Building scalable systems that just work.",
  openGraph: {
    title: "Fadhillah Maulana — Backend Engineer",
    description: "Backend engineer specialized in NestJS, microservices, and security tools.",
    url: "https://godwimp.me",
    siteName: "godwimp.me",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ibmPlexMono.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
