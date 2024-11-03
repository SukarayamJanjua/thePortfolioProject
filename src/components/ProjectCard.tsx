import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  github,
  demo
}) => {
  return (
    <div className="group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50
      backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl
      hover:shadow-blue-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 z-10"></div>
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 
            group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-blue-500/10 text-blue-300 rounded-full
                border border-blue-500/20"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={github}
            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          <a
            href={demo}
            className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;