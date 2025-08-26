import React from 'react';
import { Code, Server, Network, Database, Terminal, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "blue",
      skills: [
        { name: "C++", level: 85, description: "System programming and algorithms" },
        { name: "Java", level: 80, description: "Enterprise applications and OOP" },
        { name: "Python", level: 60, description: "Scripting and automation" }
      ]
    },
    {
      title: "RedHat Technologies",
      icon: Server,
      color: "red",
      skills: [
        { name: "RHEL Administration", level: 70, description: "System configuration and management" },
        { name: "Network Configuration", level: 75, description: "Network setup and troubleshooting" },
        { name: "Security Hardening", level: 65, description: "System security best practices" }
      ]
    },
    {
      title: "Networking & Infrastructure",
      icon: Network,
      color: "green",
      skills: [
        { name: "TCP/IP", level: 80, description: "Protocol understanding and implementation" },
        { name: "Network Troubleshooting", level: 75, description: "Diagnostic and resolution skills" },
        { name: "Firewall Configuration", level: 70, description: "Security and access control" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-50", icon: "text-blue-600", progress: "bg-blue-600" },
      red: { bg: "bg-red-50", icon: "text-red-600", progress: "bg-red-600" },
      green: { bg: "bg-green-50", icon: "text-green-600", progress: "bg-green-600" }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and current learning focus areas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              const IconComponent = category.icon;
              
              return (
                <div key={categoryIndex} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className={`${colors.bg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent className={colors.icon} size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">{category.title}</h3>
                  
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-semibold text-gray-700">{skill.name}</h4>
                          <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-3">{skill.description}</p>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${colors.progress} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Currently Learning</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Terminal, name: "Advanced Shell Scripting", color: "text-blue-600" },
                { icon: Shield, name: "Cybersecurity Fundamentals", color: "text-red-600" },
                { icon: Database, name: "Database Administration", color: "text-green-600" },
                { icon: Network, name: "Cloud Networking", color: "text-purple-600" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <item.icon className={item.color} size={28} />
                  </div>
                  <h4 className="font-medium text-gray-700">{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;