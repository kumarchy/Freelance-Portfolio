import type { Metadata } from "next";
import "./globals.css";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";

export const metadata: Metadata = {
  title: "LamphuX | Software & AI Automation Developer",
  description:
    "Building AI-powered software, intelligent automations, and scalable business solutions.",
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
    title: "LamphuX | Software & AI Automation Developer",
    description:
      "Building AI-powered software, intelligent automations, and scalable business solutions.",
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