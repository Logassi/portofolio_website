"use client";
import { useState, useEffect } from "react";
import {
  SiNestjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiTypescript,
  SiJavascript,
  SiJest,
  SiVercel,
  SiNodedotjs,
  SiRedis,
  SiDocker,
  SiSocketdotio,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePageView() {
  const workExperiences = [
    {
      company: "PT. Minilemon Nusantara",
      position: "Backend Developer Intern",
      link: "https://minilemon.co.id/about",
      description:
        "Developed and maintained scalable backend services using NestJS and Node.js. Optimized PostgreSQL databases with Prisma ORM, built and tested RESTful APIs, and integrated Supabase Storage. Implemented unit tests with Jest and collaborated using Git and GitHub for version control.",
      image: "/pt-minilemon-nusantara.png", // Add your image path here
    },
    {
      company: "PT. Gunung Raja Paksi",
      position: "Supply Chain Management Intern",
      link: "https://gunungrajapaksi.com/about",
      description:
        "Managed supply chain operations, ensuring item availability and updating inventory. Created daily reports to identify areas for improvement in the supply chain process.",
      image: "/grp-office.png", // Add your image path here
    },
    {
      company: "PT. Gunung Raja Paksi",
      position: "Enterprise Resource Planning (ERP) Analyst Intern",
      link: "https://gunungrajapaksi.com/about",
      description:
        "Trained production employees on SAP product management after completing company-provided training. Ensured employees achieved proficiency in SAP usage. Assisted in managing SAP Production, monitoring weight bridge data and resolving data errors.",
      image: "/grp-office.png", // Add your image path here
    },
  ];

  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const [mobileDetailVisible, setMobileDetailVisible] = useState(false);

  useEffect(() => {}, []);

  return (
    <main>
      <article className="flex items-center justify-center text-center w-full h-dvh">
        <div className="flex flex-col md:flex-row items-center gap-8 text-left w-full max-w-6xl px-4">
          {/* Text on the left */}
          <div className="flex flex-col gap-2 text-xl md:text-2xl w-full md:w-auto">
            <h1 className="text-2xl md:text-3xl font-bold">
              Hi, I am Lomona Gagasi Pasaribu
            </h1>
            <h2 className="text-xl md:text-2xl">
              A Fullstack Website Developer
            </h2>
            <p className="text-base md:text-lg">
              "...specializing in backend development using NestJS and
              Express.js, with strong fundamentals in Next.js for frontend
              development."
            </p>
          </div>

          {/* Image on the right */}
          <img
            src="/2-removebg.png"
            alt="Portrait of Lomona Gagasi Pasaribu, Fullstack Web Developer"
            className="order-first md:order-none w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg mb-4 md:mb-0"
          />
        </div>
      </article>

      {/* Scrolling Icons with Hover Pause */}
      <article className="w-full bg-black py-6 overflow-hidden rounded-2xl">
        <div className="whitespace-nowrap ">
          <div className="inline-flex animate-marquee space-x-12 text-white text-center px-4 ">
            {[...Array(4)].flatMap((_, loopIndex) =>
              [
                { icon: <SiNestjs />, label: "NestJS" },
                { icon: <SiExpress />, label: "Express.js" },
                { icon: <SiNextdotjs />, label: "Next.js" },
                { icon: <SiNodedotjs />, label: "Node.js" },
                { icon: <SiReact />, label: "React.js" },
                { icon: <SiTailwindcss />, label: "Tailwind CSS" },
                { icon: <SiTypescript />, label: "TypeScript" },
                { icon: <SiJavascript />, label: "JavaScript" },
                { icon: <SiPostgresql />, label: "PostgreSQL" },
                { icon: <SiMysql />, label: "MySQL" },
                { icon: <SiMongodb />, label: "MongoDB" },
                { icon: <SiSupabase />, label: "Supabase" },
                { icon: <SiPrisma />, label: "Prisma" },
                { icon: <SiJest />, label: "Jest" },
                { icon: <SiVercel />, label: "Vercel" },
                { icon: <SiRedis />, label: "Redis" },
                { icon: <SiDocker />, label: "Docker" },
                { icon: <SiSocketdotio />, label: "Socket.io" },
              ].map((item, index) => (
                <div
                  key={`${item.label}-${loopIndex}-${index}`}
                  className="flex flex-col items-center justify-center text-3xl"
                >
                  {item.icon}
                  <span className="text-xs mt-1">{item.label}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </article>

      <article className="text-center w-full h-dvh">
        <h2 className="mb-4 text-3xl font-semibold text-white">Projects</h2>
      </article>

      {/* Work Experience Section */}
      <article className="w-full min-h-screen py-12 px-8">
        <h2 className="mb-12 text-3xl font-semibold text-white text-center">
          Work Experiences
        </h2>

        <div className="flex w-full h-full max-w-6xl mx-auto">
          {/* Left Side - Company Names (Always visible) */}
          <div className="w-full md:w-2/5 pr-0 md:pr-8 border-0 md:border-r border-gray-600">
            <h3 className="text-white text-xl font-bold mb-6">Companies</h3>
            <div className="space-y-4">
              {workExperiences.map((experience, index) => (
                <div
                  key={index}
                  className={`text-left p-4 rounded-lg cursor-pointer transition-all ${
                    selectedExperienceIndex === index
                      ? "bg-blue-900 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 768) {
                      setSelectedExperienceIndex(index);
                    }
                  }}
                  onClick={() => {
                    setSelectedExperienceIndex(index);
                    if (window.innerWidth < 768) {
                      setMobileDetailVisible(true);
                    }
                  }}
                >
                  <h4 className="font-semibold">{experience.company}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Details (Hidden on mobile until tap) */}
          {/* Desktop View (unchanged) */}
          <div className="hidden md:block w-3/5 pl-8">
            <div className="mb-8">
              <h3 className="text-white text-xl font-bold mb-2">
                {workExperiences[selectedExperienceIndex].position}
              </h3>
              <p className="text-gray-300">
                {workExperiences[selectedExperienceIndex].description}
              </p>
            </div>
            <div className="mt-8 bg-gray-800 rounded-lg p-4">
              <div className="relative w-full h-64 bg-gray-700 rounded overflow-hidden">
                <img
                  src={workExperiences[selectedExperienceIndex].image}
                  alt={workExperiences[selectedExperienceIndex].company}
                  className="w-full h-full object-cover"
                />
                {!workExperiences[selectedExperienceIndex].image && (
                  <div className="flex items-center justify-center w-full h-full text-gray-400">
                    Company Image
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Detail Panel */}
          <AnimatePresence>
            {mobileDetailVisible && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed inset-0 z-50 bg-gray-900 md:hidden p-6 overflow-y-auto"
              >
                <button
                  onClick={() => setMobileDetailVisible(false)}
                  className="absolute top-4 right-4 text-white text-2xl"
                >
                  &times;
                </button>

                <div className="mt-8">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {workExperiences[selectedExperienceIndex].position}
                  </h3>
                  <p className="text-gray-300">
                    {workExperiences[selectedExperienceIndex].description}
                  </p>
                </div>

                <div className="mt-8 bg-gray-800 rounded-lg p-4">
                  <div className="relative w-full h-64 bg-gray-700 rounded overflow-hidden">
                    <img
                      src={workExperiences[selectedExperienceIndex].image}
                      alt={workExperiences[selectedExperienceIndex].company}
                      className="w-full h-full object-cover"
                    />
                    {!workExperiences[selectedExperienceIndex].image && (
                      <div className="flex items-center justify-center w-full h-full text-gray-400">
                        Company Image
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>

      <article className="text-center w-full h-dvh">
        <h2 className="mb-4 text-3xl font-semibold text-white">Contact</h2>
      </article>

      {/* Resume Download Button */}
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
