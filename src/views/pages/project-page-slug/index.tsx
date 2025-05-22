import { ProjectSlugParams } from "@/types/project";
import ProjectDetailSection from "./components/detail.section";
import ProjectHeroSection from "./components/hero.section";
import ProjectImagesSection from "./components/images.section";
// import projects from "@/data/projects.json";
import { useProjectStore } from "@/store/project.store";
import { getAllProjects } from "@/lib/contentful";

export default async function ProjectSlugView({ slug }: ProjectSlugParams) {
  const projects = getAllProjects();

  // const { projects } = useProjectStore();

  const project = (await projects).find((project) => project.slug === slug);

  if (!project) {
    return <div className="text-center text-white">Project not found</div>;
  }

  return (
    <main>
      <ProjectHeroSection title={project?.title} />
      <ProjectDetailSection
        description={project.description}
        technologies={project.technologies ?? []}
        features={project.features ?? []}
        link={project?.link}
        github={project?.github}
      />
      <ProjectImagesSection images={project.images} />
    </main>
  );
}
