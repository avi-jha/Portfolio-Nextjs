import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avinash Jha | Full Stack Developer",
  description:
    "Portfolio of Avinash Jha — Full Stack Developer specializing in Fintech, Python, Django, React Native, and scalable SaaS platforms.",
  keywords: [
    "Avinash Jha",
    "Full Stack Developer",
    "Fintech",
    "Django",
    "React Native",
    "Python",
    "Portfolio",
  ],
  openGraph: {
    title: "Avinash Jha | Full Stack Developer",
    description:
      "3+ years building mission-critical Fintech & SaaS platforms at scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  );
}
