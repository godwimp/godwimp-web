import type { Metadata } from "next";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "@fontsource/ibm-plex-mono/600.css";
import "@fontsource/syne/400.css";
import "@fontsource/syne/600.css";
import "@fontsource/syne/700.css";
import "@fontsource/syne/800.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fadhillah Maulana — Backend and Data Engineer",
  description:
    "Backend engineer specialized in NestJS, microservices, and security tools. Building scalable systems that just work.",
  openGraph: {
    title: "Fadhillah Maulana — Backend and Data Engineer",
    description:
      "Backend engineer specialized in NestJS, microservices, and security tools.",
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
