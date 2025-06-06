// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import Link from "next/link";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Botshyka - Chatbot Showcase",
//   description: "Showcasing smart, reliable, and beautiful chatbots.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D0D0D] text-[#F5F5F5] min-h-screen flex flex-col`}
//       >
//         <header className="bg-[#121212] p-4 shadow-md">
//           <nav className="max-w-6xl mx-auto flex justify-between items-center">
//             <Link href="/" className="font-bold text-2xl text-[#00FFB2] hover:text-[#00cc8f]">
//               Botshyka
//             </Link>
//             <div className="space-x-6 text-gray-400 text-lg">
//               <Link href="/" className="hover:text-[#00FFB2]">Home</Link>
//               <Link href="/why-chatbots" className="hover:text-[#00FFB2]">Why Chatbots</Link>
//               <Link href="/bots" className="hover:text-[#00FFB2]">Bots</Link>
//               <Link href="/about" className="hover:text-[#00FFB2]">About</Link>
//               <Link href="/contact" className="hover:text-[#00FFB2]">Contact</Link>
//             </div>
//           </nav>
//         </header>

//         <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-10">
//           {children}
//         </main>

//         <footer className="bg-[#121212] text-gray-500 text-center p-6 mt-auto">
//           © {new Date().getFullYear()} Botshyka. All rights reserved.
//         </footer>
//       </body>
//     </html>
//   );
// }



import { ReactNode } from 'react';
import './globals.css'; // Ensure global styles are imported (we'll create this next)

export const metadata = {
  title: 'Botshykya - Your Smart Chatbot Showcase Platform',
  description: 'A platform to showcase smart chatbots with Botshykya.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white min-h-screen flex flex-col">
        {/* Header with Logo and Navigation */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo (assuming it's in the public folder as logo.png) */}
            <img src="/logo.png" alt="Botshykya Logo" className="h-12 mr-4" />
            <h1 className="text-2xl font-bold">Botshykya</h1>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-blue-400">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-400">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-400">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-4">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 p-4 text-center">
          <p>&copy; 2025 Botshykya. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}