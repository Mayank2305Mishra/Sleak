import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SleakTopbar } from "@/components/sleakui/topbar";
import { SleakBottomBar } from "@/components/sleakui/bottombar";
import { SleakSidebar } from "@/components/sleakui/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sleak",
  description: "Your personal AI assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-black text-white ${geistMono.variable} antialiased`}
      >
        <SleakTopbar />

        <SleakSidebar />
        <SleakBottomBar />
        <main className="pt-18 md:pt-24 px-3 md:px-28" >{children}</main>
      </body>
    </html>
  );
}
