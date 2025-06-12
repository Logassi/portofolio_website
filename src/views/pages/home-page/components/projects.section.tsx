"use client";
import { Project } from "@/types/project";
import ProjectCard from "./project.card";
import { useProjectStore } from "@/store/project.store";
import { useEffect } from "react";
// import projects from "@/data/projects.json";

export default function ProjectsSection() {
  const { projects, fetchProjects, isLoading } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (isLoading) return <div className="text-white">Loading...</div>;

  return (
    <article className="text-center w-full h-auto">
      <h2 className="mb-4 text-3xl font-semibold text-white">Projects</h2>
      <div className="relative">
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex space-x-8 w-max">
            {(projects as Project[]).map((project) => (
              <div key={project.id} className="w-100 flex-shrink-0">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
