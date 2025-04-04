"use client";
import { useState, useEffect } from "react";

export default function HomePageView() {
  const techStack = [
    "Programming Languages: JavaScript, TypeScript",
    "Frontend: Next.js, React.js, Tailwind CSS",
    "Backend: NestJS, Express.js, Prisma ORM",
    "Databases: MySQL, PostgreSQL, MongoDB, Supabase",
    "Deployment: Vercel",
    "Testing: Jest",
  ];

  const workExperiences = [
    {
      company: "PT. Minilemon Nusantara",
      position: "Backend Developer Intern",
      description:
        "Developed and maintained scalable backend services using NestJS and Node.js. Optimized PostgreSQL databases with Prisma ORM, built and tested RESTful APIs, and integrated Supabase Storage. Implemented unit tests with Jest and collaborated using Git and GitHub for version control.",
    },
    {
      company: "PT. Gunung Raja Paksi",
      position: "Supply Chain Management Intern",
      description:
        "Managed supply chain operations, ensuring item availability and updating inventory. Created daily reports to identify areas for improvement in the supply chain process.",
    },
    {
      company: "PT. Gunung Raja Paksi",
      position: "Enterprise Resource Planning (ERP) Analyst Intern",
      description:
        "Trained production employees on SAP product management after completing company-provided training. Ensured employees achieved proficiency in SAP usage. Assisted in managing SAP Production, monitoring weight bridge data and resolving data errors.",
    },
  ];

  const [currentStack, setCurrentStack] = useState(0);
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStack((prev) => (prev + 1) % techStack.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <article className="flex items-center justify-center text-center w-full h-dvh">
        <div className="flex flex-col gap-2 text-2xl">
          <h1>Hi, I'm Lomona Gagasi Pasaribu</h1>
          <h2>A Fullstack Website Developer</h2>
        </div>
      </article>

      <article className="text-center w-full h-dvh">
        <div>
          "I'm a full-stack web developer specializing in backend development
          using NestJS and Express.js, with strong fundamentals in Next.js for
          frontend development."
        </div>

        {/* Dynamic Tech Stack */}
        <div className="mt-4 text-lg font-semibold">
          Tech Stack I use: <br />
          <span className="text-[#f6b93b] transition-opacity duration-500">
            {techStack[currentStack]}
          </span>
        </div>
      </article>

      <article className="text-center w-full h-dvh">Projects</article>

      {/* Work Experience Section */}
      <article className="text-center w-full h-dvh flex flex-col justify-start items-center">
        <h2 className="mb-4 text-3xl font-semibold text-white">
          Work Experiences
        </h2>

        <div className="flex w-full h-full">
          {/* Left Side - Company Names */}
          <div className="w-3/5 flex flex-col items-center justify-center p-4">
            {workExperiences.map((experience, index) => (
              <div
                key={index}
                className={`text-white text-lg font-semibold mb-2 p-3 w-4/5 rounded-lg shadow-lg cursor-pointer ${
                  selectedExperienceIndex === index
                    ? "bg-blue-900"
                    : "bg-blue-700"
                }`}
                onMouseEnter={() => setSelectedExperienceIndex(index)}
              >
                {experience.company}
              </div>
            ))}
          </div>

          {/* Right Side - Job Position & Description */}
          <div className="w-2/5 flex flex-col items-center justify-center p-4 transition-all duration-300">
            <h2 className="text-white text-lg font-semibold mb-2 p-3 w-4/5 bg-red-700 rounded-lg shadow-lg">
              {workExperiences[selectedExperienceIndex].position}
            </h2>
            <p className="text-white text-sm w-4/5">
              {workExperiences[selectedExperienceIndex].description}
            </p>
          </div>
        </div>
      </article>

      <article className="text-center w-full h-dvh">Contact</article>

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
    </main>
  );
}
