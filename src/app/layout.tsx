import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alabama Biomanufacturing Labs",
  description:
    "Supporting and accelerating the growth of biomanufacturing startups across Alabama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-geist-sans)]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
