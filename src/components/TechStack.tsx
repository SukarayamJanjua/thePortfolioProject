import React from 'react';
import { Code2, Database, Cloud, Terminal, Cpu, Gamepad2, Languages } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  technologies: string[];
}

const TechStack: React.FC = () => {
  const skills: Skill[] = [
    {
      name: 'Backend Development',
      icon: <Database className="w-6 h-6 text-green-400" />,
      technologies: ['Node.js', '.Net' ,'Express', 'SQL', 'MongoDB', 'Restful APIs']
    },
    {
      name: 'Frontend Development',
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      technologies: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Redux', 'Phasor.js']
    },
    {
      name: 'Data Stuctures',
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      technologies: ['Arrays', 'Stacks', 'Queues', 'Linked lists', 'Heaps', 'Trees', 'Graphs']
    },
    {
      name: 'Languages',
      icon: <Languages className="w-6 h-6 text-pink-400" />,
      technologies: ['C++', 'C#', 'JavaScript', 'SQL', 'Python']
    },
    {
      name: 'Game Development',
      icon: <Gamepad2 className="w-6 h-6 text-red-400" />,
      technologies: ['Unity', 'C#', 'Blender 3D', 'Animations', 'UI/UX']
    },
    // {
    //   name: 'Cloud & DevOps',
    //   icon: <Cloud className="w-6 h-6 text-purple-400" />,
    //   technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    // },
    {
      name: 'Tools & Others',
      icon: <Terminal className="w-6 h-6 text-orange-400" />,
      technologies: ['Git', 'VS Code', 'Postman', 'Figma', 'Linux', 'Swagger', 'Blender']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} 
          className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm
            hover:border-blue-500/30 transition-all duration-300 group">
          <div className="flex items-center mb-4">
            {skill.icon}
            <h3 className="ml-3 text-xl font-semibold text-gray-200">{skill.name}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-lg
                  border border-gray-600/50 group-hover:border-blue-500/20 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;