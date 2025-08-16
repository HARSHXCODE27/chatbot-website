import { ReactNode } from 'react';
import Header from '../components/Header';
import './globals.css';

export const metadata = {
  title: 'Botshyka - A Smart Chatbot Showcase Platform',
  description: 'A platform to showcase smart chatbots with Botshyka.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          {children}
        </main>
        <footer className="bg-black p-4 text-center">
          <p>© 2025 Botshyka. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}