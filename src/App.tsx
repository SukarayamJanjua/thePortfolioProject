import React from 'react';
import { Code2, Cpu, GraduationCap } from 'lucide-react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';
import Education from './components/Education';

function App() {
  const projects = [
    {
      title: "Urban Nest",
      description: "MERN-based real estate platform with JWT authentication, enabling users to buy, rent, and sell properties, featuring advanced search, interactive maps, and profile management.",
      tech: ["React", "Node", "Express","MongoDB","RESTful APIS","CSS"],
      // image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/SukarayamJanjua/RealEstate",
      demo: "https://main--urbanestj.netlify.app/"
    },
    {
      title: "Endless Runner Game",
      description: "3D Android game, ready-to-play endless runner game with engaging gameplay and graphics",
      tech: ["C#", "Unity", "UI/UX", "Physics"],
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/SukarayamJanjua/UnityGame",
      demo: "https://github.com/SukarayamJanjua/EndlessRunnerGame"
    },
    {
      title: "The Animus Network",
      description: "A social platform where users could share thoughts and interact with others’ posts and comments. It requires Sign In/ Log In for accounts, Interactive feed and post features. ",
      tech: ["React", "Tailwind CSS", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/SukarayamJanjua/The-Animus-Network",
      demo: "https://thelinkedinproject.web.app/"
    },
    {
      title: "NASA Images Project",
      description: "An API based project that fetches astronomy picture of the day from NASA's offical page and displays with a message",
      tech: ["Next.js", "Restful APIs", "Node.js", "Google OAuth"],
      image: "https://images.unsplash.com/photo-1497681883844-82b4f0a359a4?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/SukarayamJanjua/NASA_Images",
      demo: "https://nasa-images-rust.vercel.app/"
    },
    {
      title: "Contacts Backend Project",
      description: "A backend project to create, read, update and delete contacts list from the backend server, using SQL as the database.",
      tech: ["C#", ".Net", "SQL"],
      image: "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/SukarayamJanjua/Contacts-backend",
      demo: "#notdeployedyet"
    },
    {
      title: "Ransomware",
      description: "A ransomware malware that can encrypt any files which can only be decrypted back using the encrption key or a unique secret phase. I have made this in Python and Kali Linux",
      tech: ["Python", "Kali Linux"],
      image: "https://plus.unsplash.com/premium_photo-1714618835760-5b2175ad3249?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/SukarayamJanjua/Ransomware",
      demo: "#donotdownload"
    }
    


  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Code2 className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Technical Skills
            </h2>
          </div>
          <TechStack />
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Education
            </h2>
          </div>
          <Education />
        </div>
      </section>

      

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Cpu className="w-8 h-8 text-blue-400 mr-4" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2002 Sukarayam Janjua. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

export default App;