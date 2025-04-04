"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Import icons from lucide-react

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="px-6">
      <nav className="relative flex justify-center items-center p-4 bg-gray-900 text-white rounded-2xl">
        {/* Mobile Menu Button (Positioned Right) */}
        <button
          className="absolute right-4 md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Logo (Centered) */}
        <a href="/" className="text-xl font-bold">
          <img src="favicon.ico" alt="Logo" className="w-10" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 absolute right-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-400">
            Projects
          </Link>
          <Link href="/experiences" className="hover:text-gray-400">
            Experiences
          </Link>
          <Link href="/contacts" className="hover:text-gray-400">
            Contacts
          </Link>
          {/* GitHub icon for Desktop */}
          <a
            href="https://github.com/Logassi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-gray-400"
          >
            <img src="/github-icon.svg" alt="GitHub" className="h-6 w-6" />
          </a>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden mt-2 bg-gray-800 rounded-lg p-4 text-white`}
      >
        <Link
          href="/"
          className="block py-2 px-4 hover:bg-gray-700 rounded text-center"
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="block py-2 px-4 hover:bg-gray-700 rounded text-center"
        >
          Projects
        </Link>
        <Link
          href="/experiences"
          className="block py-2 px-4 hover:bg-gray-700 rounded text-center"
        >
          Experiences
        </Link>
        <Link
          href="/contacts"
          className="block py-2 px-4 hover:bg-gray-700 rounded text-center"
        >
          Contacts
        </Link>
        {/* GitHub Icon (Only in Mobile Dropdown) */}
        <a
          href="https://github.com/Logassi"
          target="_blank"
          rel="noopener noreferrer"
          className="block py-2 px-4 hover:bg-gray-700 rounded text-center"
        >
          <span className="ml-2">My GitHub</span>
        </a>
      </div>
    </div>
  );
}
