import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
      {/* Left: Logo and Site Name */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Botshykya Logo" className="h-12 mr-4" />
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