"use client";
import { Project } from "@/types/project";
import ProjectCard from "./project.card";
import { useProjectStore } from "@/store/project.store";
import { useEffect } from "react";

export default function ProjectsSection() {
  const { projects, fetchProjects, isLoading } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  if (isLoading) return <div className="text-white">Loading...</div>;

  return (
    <article className="text-center w-full h-auto">
      <h2 className="mb-4 text-3xl font-semibold text-white">Projects</h2>

      {/* Desktop Horizontal Scroll (replaces grid) */}
      <div className="hidden md:block">
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex space-x-6 w-max px-6">
            {(projects as Project[]).map((project) => (
              <div
                key={project.id}
                className="w-[calc(33.33vw-48px)] min-w-[400px] flex-shrink-0"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-2 hidden md:block">
          ← Scroll to view more →
        </div>
      </div>

      {/* Mobile Horizontal Scroll  */}
      <div className="md:hidden">
        <div className="overflow-x-auto pb-6 px-4 scrollbar-hide">
          <div className="flex space-x-4 w-max snap-x snap-mandatory">
            {(projects as Project[]).map((project) => (
              <div key={project.id} className="w-72 flex-shrink-0 snap-start">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-2">
          ← Swipe to view more →
        </div>
      </div>
    </article>
  );
}
