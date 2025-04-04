import React from "react";

export default function HomePageView() {
  return (
    <main>
      <article className="flex items-center justify-center text-center w-full h-dvh ">
        <div className="flex flex-col gap-2 text-2xl">
          <h1>Hi, I'm Lomona Gagasi Pasaribu</h1>
          <h2>A Fullstack Website Developer</h2>
        </div>
      </article>
      <article className="text-center w-full h-dvh ">
        {/* <div>About me</div> */}
        <div>
          "I'm a full-stack web developer specializing in backend development
          using NestJS and Express.js, with strong fundamentals in Next.js for
          frontend development."
        </div>
      </article>
      <article className="text-center w-full h-dvh ">Projects</article>
      <article className="text-center w-full h-dvh ">Experience</article>
      <article className="text-center w-full h-dvh ">Contact</article>

      <div className="fixed bottom-4 right-4 flex items-center justify-center">
        <div className="relative group">
          {/* Tooltip */}
          <span className="absolute bottom-14 right-0 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Download my resume
          </span>

          {/* Resume Button */}
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
    </main>
  );
}
