import Link from "next/link";
import { Project } from "@/types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} passHref>
      <div className="relative overflow-hidden group cursor-pointer aspect-video rounded-lg shadow-lg w-full">
        {/* Project Image */}
        <div className="absolute inset-0 transition-all duration-500 ease-in-out group-hover:-translate-x-full">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Project Description (revealed on hover) */}
        <div className="absolute inset-0 transition-all duration-500 ease-in-out translate-x-full group-hover:translate-x-0 bg-gray-900 bg-opacity-90 p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <span className="text-accent font-medium">View Project →</span>
        </div>
      </div>
    </Link>
  );
}
