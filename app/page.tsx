// // app/page.tsx
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8 gap-10">
      
//       {/* Header */}
//       <header className="w-full flex flex-col items-center gap-4">
//         <h1 className="text-3xl font-bold">Botshyka</h1>
//         <nav className="flex flex-wrap gap-x-6 text-base font-medium">
//           <Link href="/">Home</Link>
//           <Link href="/why-chatbots">Why Chatbots</Link>
//           <Link href="/bots">Bots</Link>
//           <Link href="/about">About</Link>
//           <Link href="/contact">Contact</Link>
//         </nav>
//       </header>

//       {/* Main Content */}
//       <main className="flex flex-col items-center gap-6 text-center">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <h2 className="text-4xl font-bold">Welcome to Botshyka</h2>
//         <p className="text-lg text-gray-400 max-w-md">
//           Your smart chatbot showcase platform.
//         </p>
//         <Link
//           href="/about"
//           className="inline-block px-6 py-3 bg-[#00FFB2] text-black font-semibold rounded-lg hover:bg-[#00cc8f] transition"
//         >
//           Learn More About Us
//         </Link>
//       </main>

//       {/* Footer */}
//       <footer className="mt-10 flex flex-col items-center gap-4 text-sm text-gray-400">
//         <div className="flex gap-6 flex-wrap justify-center">
//           <a
//             href="https://nextjs.org/learn"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             Learn
//           </a>
//           <a
//             href="https://vercel.com/templates?framework=next.js"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             Examples
//           </a>
//           <a
//             href="https://nextjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:underline"
//           >
//             Go to nextjs.org →
//           </a>
//         </div>
//         <p>© 2025 Botshyka. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }




import Link from 'next/link'; // Import Link

export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Botshykya</h2>
      <p className="text-lg md:text-xl mb-6">Your smart chatbot showcase platform.</p>
      <Link
        href="/about"
        className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        Learn More About Us
      </Link>
    </div>
  );
}