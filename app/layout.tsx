import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://akashsamanta.vercel.app"),
  title: "Akash Samanta — Backend Developer & AI/ML Engineer",
  description:
    "Personal portfolio of Akash Samanta — B.Tech CSE (AI & ML) student at Brainware University, backend engineer, and creative problem solver. Exploring distributed systems, applied AI, and developer communities.",
  keywords: [
    "Akash Samanta",
    "Backend Developer",
    "AI ML Engineer",
    "Python Developer",
    "FastAPI",
    "Brainware University",
    "Google Student Ambassador",
    "GeeksforGeeks Campus Mantri",
    "Portfolio",
    "Creative Developer",
    "3D Web",
  ],
  authors: [{ name: "Akash Samanta", url: "https://github.com/akashsamanta2569-a11y" }],
  creator: "Akash Samanta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://akashsamanta.vercel.app",
    title: "Akash Samanta — Backend Developer & AI/ML Engineer",
    description:
      "Building Ideas Into Intelligent Experiences. Explore selected projects in applied AI, backend architectures, and community initiatives.",
    siteName: "Akash Samanta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akash Samanta — Backend Developer & AI/ML Engineer",
    description:
      "Building Ideas Into Intelligent Experiences. B.Tech CSE (AI & ML) at Brainware University.",
    creator: "@akashsamanta",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
