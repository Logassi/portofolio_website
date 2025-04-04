import Link from "next/link";

export default function Header() {
  return (
    <div className="px-6">
      <nav className="flex justify-between items-center p-4 bg-gray-900 text-white rounded-2xl">
        <div className="flex space-x-6">
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
        </div>
        <a
          href="https://github.com/Logassi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src="/github-icon.svg" alt="GitHub" className="h-6 w-6" />
        </a>
        {/* <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <img src="/resume-icon.png" alt="Resume" className="h-6 w-6" />
        </a> */}
      </nav>
    </div>
  );
}
