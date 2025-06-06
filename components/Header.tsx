import Link from 'next/link';
import Image from 'next/image'; // Import Image

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Left: Logo and Site Name */}
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Botshykya Logo"
          width={48} // Adjust based on your logo's aspect ratio
          height={48} // Matches h-12 (3rem = 48px)
          className="mr-4"
        />
        <h1 className="text-2xl font-bold">Botshykya</h1>
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