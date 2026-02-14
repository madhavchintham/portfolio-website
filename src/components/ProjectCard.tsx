import { Project } from '../types/index';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 flex-wrap">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 sm:px-4 py-2 bg-gray-900 text-white text-sm rounded hover:bg-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 sm:px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
}
