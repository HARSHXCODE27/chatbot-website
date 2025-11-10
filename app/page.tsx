"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Close on Escape
  function onKeyDown(e: React.KeyboardEvent<HTMLButtonElement>) {
    if (e.key === "Escape") setOpen(false);
  }

  return (
    <div className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Botshyka</h2>
      <p className="text-lg md:text-xl mb-6">A Smart Chatbot Showcase Platform.</p>

      <div ref={menuRef} className="relative inline-block z-50 text-left">
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onKeyDown}
          className="bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:ring"
        >
          Explore Our Smart Bots
        </button>

        {open && (
          <div
            role="menu"
            className="absolute left-0 mt-2 w-56 rounded-lg shadow-lg bg-white ring-1 ring-black/5 text-black z-50"
          >
            <Link
              href="/travel-bot"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Travel Bot
            </Link>
            <Link
              href="/restaurant-bot"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Restaurant Bot
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

