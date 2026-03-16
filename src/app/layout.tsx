import type { Metadata } from "next";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://godwimp.me'),
  title: "godwimp",
  description:
    "Backend engineer specialized in NestJS, microservices, and security tools. Building scalable systems that just work.",
  keywords: [
    'backend engineer',
    'NestJS',
    'TypeScript',
    'microservices',
    'Node.js',
    'security tools',
    'npm packages',
    'Fadhillah Maulana',
    'godwimp',
    'portfolio',
  ],
  authors: [{ name: 'Fadhillah Maulana', url: 'https://godwimp.me' }],
  openGraph: {
    title: "godwimp",
    description:
      "Backend engineer specialized in NestJS, microservices, and security tools.",
    url: "https://godwimp.me",
    siteName: "godwimp.me",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "godwimp",
    description:
      "Backend engineer specialized in NestJS, microservices, and security tools.",
    creator: '@godwimp',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
