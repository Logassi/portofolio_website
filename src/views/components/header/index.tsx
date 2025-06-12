"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="px-6">
      <nav className="relative flex items-center justify-center h-20 bg-gray-900 text-white rounded-2xl px-6">
        {/* Logo (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image
              src="/favicon.ico"
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </Link>
        </div>

        {/* GitHub Icon (Right) */}
        <div className="ml-auto">
          <a
            href="https://github.com/Logassi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Image
              src="/github-icon.svg"
              alt="GitHub"
              width={24}
              height={24}
              className="hover:opacity-70 transition"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}
