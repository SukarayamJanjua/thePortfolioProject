import React from 'react';
import { Terminal, Github, Linkedin, Mail, Twitter, Code2, FileDown } from 'lucide-react';
import TypewriterEffect from './TypewriterEffect';
import sukarayamResume from './SukarayamResume.pdf';
import leetcodeImage from './leetcode.svg';
import midImage from './kisspng-binary-tree-time-complexity-sequence-stack-university-5adf06f7848bc2.5175822815245657515429.jpg';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Dynamic background with animated gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-700/20 via-gray-900 to-gray-900"></div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg')] 
          bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
            <Terminal className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm">Available for hire</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-6xl font-bold">
              <span className="block text-gray-300">Hello, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
                Sukarayam Janjua
              </span>
            </h1>
            <div className="flex items-center text-xl text-gray-400">
              <span className="text-green-400 mr-2">$</span>
              <TypewriterEffect texts={["Full Stack Developer", "Game Developer", "Competitive Programming"]} />
            </div>
          </div>

          <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
            I’m a passionate final-year B.Tech student with hands-on experience in full-stack development, game development, and problem-solving. Constantly driven by curiosity and innovation, I’m always eager to explore new opportunities and expand my network. Feel free to browse my resume to learn more about my skills, projects, and accomplishments. Let’s connect and create something amazing together!
          </p>

          <div className="flex items-center space-x-6">
            {/* <a href="#contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
              transition-all duration-200 transform hover:scale-105 hover:shadow-lg">
              Get in Touch
            </a> */}
            <a href={sukarayamResume}
              download
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg 
                transition-all duration-200 transform hover:scale-105 hover:shadow-lg inline-flex items-center">
              <FileDown className="w-5 h-5 mr-2" />
              Download Resume
            </a>
            <div className="flex space-x-4">
              <a href="https://github.com/SukarayamJanjua" className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 
                text-gray-400 hover:text-blue-400 transition-colors backdrop-blur-sm">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sukarayam-janjua/" className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 
                text-gray-400 hover:text-blue-400 transition-colors backdrop-blur-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/itsukarayamj"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 
                    text-gray-400 hover:text-blue-400 transition-colors backdrop-blur-sm"
                title="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/CodeSukarayam/"
                className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 
                    text-gray-400 hover:text-blue-400 transition-colors backdrop-blur-sm"
                title="LeetCode">
                <Code2 className="w-5 h-5" />
              </a>

              <a href="mailto:agam.sukarayam@gmail.com" className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700 
                text-gray-400 hover:text-blue-400 transition-colors backdrop-blur-sm">
                <Mail className="w-5 h-5" />
              </a>

              {/* <a href="https://leetcode.com/u/CodeSukarayam/" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg 
              transition-all duration-200 transform hover:scale-105 hover:shadow-lg text-right ">
              Leetcode
            </a> */}
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:block">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6
              hover:border-blue-500/30 transition-all duration-300 w-72">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                  flex items-center justify-center border border-gray-700/50">
                <FileDown className="w-12 h-12 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">Download Resume</h3>
                <p className="text-sm text-gray-400 mb-4">Get a copy of my detailed resume in PDF format</p>
                <a
                  href="/path-to-your-resume.pdf"
                  download
                  className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r 
                      from-blue-500 to-purple-500 text-white rounded-lg transition-transform duration-200 
                      hover:scale-105 hover:shadow-lg"
                >
                  <FileDown className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    // </div>
  );
};

export default Hero;