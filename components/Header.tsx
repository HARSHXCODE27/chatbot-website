import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black text-white px-4 py-3 flex items-center justify-between">
      {/* Left: Botshyka Text and Logo (Clickable) */}
      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
        <Image
          src="/logo.png"
          alt="Botshyka Logo"
          width={50}
          height={50}
        />
        <h1
          className="text-2xl font-bold md:text-3xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Botshyka
        </h1>
      </Link>

      {/* Right: Navigation Links */}
      <nav className="flex space-x-4 text-sm md:space-x-6">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </nav>
    </header>
  );
}
