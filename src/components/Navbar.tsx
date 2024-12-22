
"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 overflow-hidden relative">
          <Image
            src="/logo.png"
            alt="Iqra Sweet Home Logo"
            width={100} 
            height={90} 
            className="rounded-full   transform transition-all duration-300 hover:scale-105"
          />
          <h1 className="text-2xl font-bold">Iqra Sweet Home</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Programs", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="hover:text-gray-300 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu for Mobile */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-2xl">&times;</span> // Close icon
          ) : (
            <>
              <span className="block w-8 h-0.5 bg-white mb-1"></span>
              <span className="block w-8 h-0.5 bg-white mb-1"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-900 text-white">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {["Home", "About", "Programs", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block hover:bg-blue-800 py-2 px-4 rounded-lg transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
