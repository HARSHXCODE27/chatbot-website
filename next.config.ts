// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// components/Header.js

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black text-white">
      {/* Left: Navigation Links */}
      <nav className="flex space-x-6 text-sm">
        <Link href="/">Home</Link>
        <Link href="/why">Why</Link>
        <Link href="/chatbots">Chatbots</Link>
        <Link href="/bots">Bots</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/botshyka-logo.png" alt="Botshyka Logo" width={120} height={40} />
      </div>
    </header>
  );
}

