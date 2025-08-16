import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Botshyka Text and Logo (Clickable) */}
      <Link href="/" className="flex items-center gap-0 hover:opacity-80 transition">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Botshyka
        </h1>
        <Image
          src="/logo.png"
          alt="Botshyka Logo"
          width={88}
          height={88}
        />
      </Link>

      {/* Right: Navigation Links */}
      <nav className="flex space-x-6 text-sm">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </nav>
    </header>
  );
}
