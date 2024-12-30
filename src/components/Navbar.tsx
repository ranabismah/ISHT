"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-blue-900 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-12">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 overflow-hidden relative">
          <Image
            src="/logo.png"
            alt="Iqra Sweet Home Logo"
            width={100}
            height={90}
            className="rounded-full transform transition-transform duration-500 hover:rotate-12 hover:scale-110 hover:shadow-lg"
          />
          <h1 className="text-2xl font-bold">Iqra Sweet Home</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Programs", "Contact"].map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="transition duration-300 group-hover:text-blue-700"
              >
                {item}
              </Link>
              {/* hover underline */}
              <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
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
              <span className="block w-8 h-0.5 bg-blue-900 mb-1"></span>
              <span className="block w-8 h-0.5 bg-blue-900 mb-1"></span>
              <span className="block w-8 h-0.5 bg-blue-900"></span>
            </>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-blue-900">
          <ul className="flex flex-col space-y-4 py-4 px-6">
            {["Home", "About", "Programs", "Contact"].map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block transition duration-300 group-hover:text-blue-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
                {/* hover underline */}
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}


