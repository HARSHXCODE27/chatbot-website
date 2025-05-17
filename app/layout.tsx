import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Botshyka - Chatbot Showcase",
  description: "Showcasing smart, reliable, and beautiful chatbots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D0D0D] text-[#F5F5F5] min-h-screen flex flex-col`}
      >
        <header className="bg-[#121212] p-4 shadow-md">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/">
              <a className="font-bold text-2xl text-[#00FFB2] hover:text-[#00cc8f]">Botshyka</a>
            </Link>
            <div className="space-x-6 text-gray-400 text-lg">
              <Link href="/"><a className="hover:text-[#00FFB2]">Home</a></Link>
              <Link href="/why-chatbots"><a className="hover:text-[#00FFB2]">Why Chatbots</a></Link>
              <Link href="/bots"><a className="hover:text-[#00FFB2]">Bots</a></Link>
              <Link href="/contact"><a className="hover:text-[#00FFB2]">Contact</a></Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-10">
          {children}
        </main>

        <footer className="bg-[#121212] text-gray-500 text-center p-6 mt-auto">
          © {new Date().getFullYear()} Botshyka. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
