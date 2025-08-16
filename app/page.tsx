import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Botshyka</h2>
      <p className="text-lg md:text-xl mb-6">A Smart Chatbot Showcase Platform.</p>
      <Link
        href="/about"
        className="inline-block bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded"
      >
        Learn More About Us
      </Link>
    </div>
  );
}