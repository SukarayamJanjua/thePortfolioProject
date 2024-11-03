import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  description: string;
}

const Education: React.FC = () => {
  const education: Education[] = [
    {
      degree: "Bachelors of Technology",
      school: "Dr B.R. Ambedkar National Institute of Technology Jalandhar",
      location: "Jalandhar, Punjab",
      period: "2021 - 2025",
      description: "Specialized in Problem Solving and Fullstack development. Good Knowledge of CS fundamentals and Electronics Circuits."
    },
    {
      degree: "High School",
      school: "St. Josephs Convent Sec School, Pathankot",
      location: "Pathankot, Punjab",
      period: "2019 - 2021",
      description: "Completed class 12th with 95.00% as non-medical student."
    }
  ];

  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 
          before:w-[2px] before:bg-gradient-to-b from-blue-500 to-purple-500">
          <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-gray-900 
            border-2 border-blue-500"></div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm
            hover:border-blue-500/30 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-200 mb-2">{edu.degree}</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <GraduationCap className="w-4 h-4 mr-2 text-blue-400" />
                  <span>{edu.school}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                  <span>{edu.location}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-green-400" />
                <span>{edu.period}</span>
              </div>
              <p className="text-gray-300 mt-2">{edu.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;