import HeroSection from "./components/hero.section";
import TechStacksIcons from "./components/techStackIcon.section";
import ProjectsSection from "./components/projects.section";
import WorkExperiencesSection from "./components/workExperiences.section";
import ContactSection from "./components/contact.section";
import { ResumeButton } from "./components/resume.button";
import { getAllProjects } from "@/lib/contentful";

export default async function HomePageView() {
  // useEffect(() => {}, []);

  // const projects = await getAllProjects();

  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Scrolling Icons Tech Stacks */}
      <TechStacksIcons />

      {/* Work Experience Section */}
      <WorkExperiencesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      {/* <ContactSection /> */}

      {/* Resume Download Button */}
      <ResumeButton />
    </main>
  );
}
