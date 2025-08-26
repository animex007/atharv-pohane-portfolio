import React from 'react';
import { User, Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <User className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Background</h3>
              <p className="text-gray-600 leading-relaxed">
                Recent graduate with a strong foundation in computer science and a passion for technology innovation.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-100 transition-colors duration-300">
                <Target className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                Currently specializing in RedHat networking technologies and system administration best practices.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-100 transition-colors duration-300">
                <BookOpen className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously expanding knowledge through hands-on projects and industry certifications.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a recent graduate, I bring fresh perspectives and enthusiasm to every project. My journey into 
              technology began with a fascination for problem-solving, which led me to pursue expertise in 
              both software development and network infrastructure.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm particularly drawn to RedHat technologies for their enterprise-grade reliability and the robust 
              ecosystem they provide. Combined with my programming skills in C++ and Java, I aim to bridge the 
              gap between development and infrastructure, creating efficient and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;