import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Botshyka Text and Logo */}
      <div className="flex items-center">
        <h1
          className="text-4xl font-bold mr-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Botshyka
        </h1>
        <Image
          src="/logo.png"
          alt="Botshyka Logo"
          width={68}
          height={68}
        />
      </div>
      {/* Right: Navigation Links */}
      <nav className="flex space-x-6 text-sm">
        <Link href="/" className="hover:text-blue-400">Home</Link>
        <Link href="/about" className="hover:text-blue-400">About</Link>
        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
      </nav>
    </header>
  );
}