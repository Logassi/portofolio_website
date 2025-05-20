import ProjectCard from "./project.card";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of project 1",
      image: "/path/to/image1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "Description of project 2",
      image: "/path/to/image2.jpg",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      description: "Description of project 3",
      image: "/path/to/image3.jpg",
      link: "https://example.com/project3",
    },
    {
      title: "Project 4",
      description: "Description of project 4",
      image: "/path/to/image4.jpg",
      link: "https://example.com/project4",
    },
    {
      title: "Project 5",
      description: "Description of project 5",
      image: "/path/to/image5.jpg",
      link: "https://example.com/project5",
    },
    {
      title: "Project 6",
      description: "Description of project 6",
      image: "/path/to/image6.jpg",
      link: "https://example.com/project6",
    },
    {
      title: "Project 7",
      description: "Description of project 7",
      image: "/path/to/image7.jpg",
      link: "https://example.com/project7",
    },
    {
      title: "Project 8",
      description: "Description of project 8",
      image: "/path/to/image8.jpg",
      link: "https://example.com/project8",
    },
  ];

  return (
    <article className="text-center w-full h-dvh">
      <h2 className="mb-4 text-3xl font-semibold text-white">Projects</h2>
      <div className="relative">
        <div className="overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex space-x-8 w-max">
            {projects.map((project) => (
              <div key={project.title} className="w-72 flex-shrink-0">
                <ProjectCard key={project.title} project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
