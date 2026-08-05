import type { Metadata } from "next";
import "./globals.css";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";

export const metadata: Metadata = {
  title: "Kilo Dev — Full Stack Developer & AI Automation Specialist",
  description:
    "Premium freelance full stack developer and AI automation specialist building modern websites, intelligent software, and business automation solutions.",
  keywords: [
    "full stack developer",
    "AI automation",
    "web development",
    "Next.js",
    "AI chatbot",
    "business automation",
    "freelance developer",
  ],
  openGraph: {
    title: "Kilo Dev — Full Stack Developer & AI Automation Specialist",
    description:
      "Premium freelance full stack developer and AI automation specialist building modern websites, intelligent software, and business automation solutions.",
    type: "website",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-background-primary text-text-primary font-body">
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}