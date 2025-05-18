export function ResumeButton() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center justify-center">
      <div className="relative group">
        <span className="absolute bottom-14 right-0 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Download my resume
        </span>

        <a
          href="/resume.pdf"
          download
          className="bg-[#f6b93b] p-3 rounded-full shadow-lg hover:bg-[#e58e26] transition-all flex items-center justify-center"
          aria-label="Download Resume"
        >
          <img src="/resume-icon.png" alt="Resume" className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
}
