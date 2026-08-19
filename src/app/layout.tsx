import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PlacementOS | Technical Preparation Platform",
  description: "A premium placement-preparation product for software engineering students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative min-h-screen`}>
        {/* Subtle global radial glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_center,rgba(59,130,246,0.05)_0%,rgba(7,11,20,0)_100%)]" />
        {children}
      </body>
    </html>
  );
}
