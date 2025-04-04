import React from "react";

export default function Footer() {
  return (
    <div className="px-6">
      <footer className="bg-gray-900 text-white py-7 mt-10 rounded-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between px-6">
          {/* Name */}
          <span className="text-lg font-semibold">Lomona Gagasi Pasaribu</span>

          {/* Navigation Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/projects"
              className="hover:text-gray-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="/experiences"
              className="hover:text-gray-400 transition-colors"
            >
              Experiences
            </a>
            <a
              href="/contacts"
              className="hover:text-gray-400 transition-colors"
            >
              Contacts
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/Logassi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github-icon.svg"
                alt="GitHub"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/lomonagagasipasaribu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/linkedin-icon.svg"
                alt="LinkedIn"
                className="h-6 w-6 hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} Lomona Gagasi Pasaribu. All Rights
          Reserved.
        </div>
      </footer>
    </div>
  );
}
