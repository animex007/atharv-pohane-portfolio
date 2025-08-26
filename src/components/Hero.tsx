import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Atharv <span className="text-white">pohane</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Recent Graduate | RedHat Networking Enthusiast | C++ & Java Developer
          </p>
          <p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto">
            Passionate about system administration, network infrastructure, and software development. 
            Currently expanding expertise in RedHat technologies while building robust applications.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="mailto:john@example.com"
              className="flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Mail size={20} />
              <span className="font-medium">Get In Touch</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;