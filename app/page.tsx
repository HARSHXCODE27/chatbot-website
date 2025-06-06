// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen px-8 py-12 flex flex-col items-center justify-center gap-12">
      <main className="text-center max-w-2xl">
        <Image
          className="mx-auto dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-bold mt-6 mb-4">Welcome to Botshyka</h1>
        <p className="text-lg text-gray-500 mb-6">
          Your smart chatbot showcase platform.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-[#00FFB2] text-black font-semibold rounded-lg hover:bg-[#00cc8f] transition"
        >
          Learn More About Us
        </Link>
      </main>

      <footer className="flex gap-6 flex-wrap justify-center text-sm text-gray-600">
        <a
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Examples
        </a>
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
