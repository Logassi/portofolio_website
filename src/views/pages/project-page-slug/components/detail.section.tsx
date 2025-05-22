interface ProjectDetailSectionProps {
  description: string;
  technologies: string[];
  features: string[];
  link?: string;
  github?: string;
}

export default function ProjectDetailSection({
  description,
  technologies,
  features,
  link,
  github,
}: ProjectDetailSectionProps) {
  return (
    <section className="w-full max-w-6xl px-4 py-8 mx-auto text-white">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Technologies */}
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-medium mb-4">Technologies Used</h3>
          <ul className="flex flex-wrap gap-2 text-sm text-blue-300">
            {technologies.map((tech) => (
              <li key={tech} className="px-2 py-1 bg-gray-800 rounded">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Description, Features, Links */}
        <div className="w-full md:w-2/3 space-y-6">
          <div>
            <h3 className="text-xl font-medium">Description</h3>
            <p className="mt-2 text-gray-300">{description}</p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Features</h3>
            <ul className="mt-2 ml-4 list-disc text-gray-300">
              {features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                View Live Project
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
              >
                View Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
