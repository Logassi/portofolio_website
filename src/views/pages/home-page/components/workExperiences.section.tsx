"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkExperiencesSection() {
  //maybe i can add fetching from api or contentful

  const workExperiences = [
    {
      company: "PT. Minilemon Nusantara",
      duration: "January 2025 - Present",
      position: "Backend Developer Intern",
      link: "https://minilemon.co.id/about",
      description:
        "Developed and maintained scalable backend services using NestJS and Node.js. Optimized PostgreSQL databases with Prisma ORM, built and tested RESTful APIs, and integrated Supabase Storage. Implemented unit tests with Jest and collaborated using Git and GitHub for version control.",
      image: "/pt-minilemon-nusantara.png", // Add your image path here
      skills: [
        "TypeScript",
        "JavaScript",
        "NestJS",
        "Node.js",
        "MySQL",
        "PostgreSQL",
        "Prisma ORM",
        "Supabase",
        "Jest",
      ],
    },
    {
      company: "PT. Gunung Raja Paksi",
      duration: "March 2022 - July 2022",
      position: "Supply Chain Management Intern",
      link: "https://gunungrajapaksi.com/about",
      description:
        "Managed supply chain operations, ensuring item availability and updating inventory. Created daily reports to identify areas for improvement in the supply chain process.",
      image: "/grp-office.png", // Add your image path here
      skills: ["SAP", "Microsoft Excel", "Microsoft Word"],
    },
    {
      company: "PT. Gunung Raja Paksi",
      duration: "December 2021 - February 2022",
      position: "Enterprise Resource Planning (ERP) Analyst Intern",
      link: "https://gunungrajapaksi.com/about",
      description:
        "Trained production employees on SAP product management after completing company-provided training. Ensured employees achieved proficiency in SAP usage. Assisted in managing SAP Production, monitoring weight bridge data and resolving data errors.",
      image: "/grp-office.png", // Add your image path here
      skills: ["SAP", "Microsoft Excel", "Microsoft Word"],
    },
  ];

  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
  const [mobileDetailVisible, setMobileDetailVisible] = useState(false);

  return (
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
                <h4
                  className="font-semibold"
                  // onClick={() => {
                  //   window.open(
                  //     workExperiences[selectedExperienceIndex].link,
                  //     "_blank"
                  //   );
                  // }}
                >
                  {experience.company}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Details (Hidden on mobile until tap) */}
        {/* Desktop View (unchanged) */}
        <div className="hidden md:block w-3/5 pl-8">
          <div className="mb-8">
            <h3 className="text-white text-2xl font-bold mb-1">
              {workExperiences[selectedExperienceIndex].position}
            </h3>
            <h4 className="text-gray-400 italic text-lg mb-4">
              {workExperiences[selectedExperienceIndex].duration}
            </h4>
            <p className="text-gray-300">
              {workExperiences[selectedExperienceIndex].description}
            </p>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2">
                {workExperiences[selectedExperienceIndex].skills.map(
                  (skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 bg-blue-800 text-gray-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="mt-8 bg-gray-800 rounded-lg p-4">
            <div className="relative w-full h-64 rounded overflow-hidden">
              <img
                src={workExperiences[selectedExperienceIndex].image}
                alt={workExperiences[selectedExperienceIndex].company}
                className="w-full h-full object-contain"
                // onClick={() => {window.open(workExperiences[selectedExperienceIndex].link, "_blank")}}
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
                <h4 className="text-gray-400 italic text-lg mb-4">
                  {workExperiences[selectedExperienceIndex].duration}
                </h4>
                <p className="text-gray-300">
                  {workExperiences[selectedExperienceIndex].description}
                </p>
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {workExperiences[selectedExperienceIndex].skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="inline-block px-3 py-1 bg-blue-800 text-gray-200 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-800 rounded-lg p-4">
                <div className="relative w-full h-64 rounded overflow-hidden">
                  <img
                    src={workExperiences[selectedExperienceIndex].image}
                    alt={workExperiences[selectedExperienceIndex].company}
                    className="w-full h-full object-contain"
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
  );
}
