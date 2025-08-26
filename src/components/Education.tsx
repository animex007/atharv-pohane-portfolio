import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Academic background and professional development journey
            </p>
          </div>

          <div className="space-y-8">
            {/* Degree */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-600">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor's Degree in ETC</h3>
                  <p className="text-lg text-gray-600 mb-4">Sinhgad College of Engineering</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar size={16} />
                      <span>Graduated 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin size={16} />
                      <span>Maharashtra, India</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Coursework:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      <span className="text-gray-600">• IOT</span>
                      <span className="text-gray-600">• Network Programming</span>
                      <span className="text-gray-600">• Operating Systems</span>
                      <span className="text-gray-600">• Database Management</span>
                      <span className="text-gray-600">• Software Engineering</span>
                      <span className="text-gray-600">• Computer Networks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 border-l-4 border-red-600">
              <div className="flex items-start space-x-6">
                <div className="bg-red-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">RedHat Certification Path</h3>
                  <p className="text-lg text-gray-600 mb-4">Currently Pursuing</p>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Target Certifications:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Red Hat Certified System Administrator (RHCSA)</span>
                          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">In Progress</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Red Hat Certified Engineer (RHCE)</span>
                          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">Planned</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Training */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-600">
              <div className="flex items-start space-x-6">
                <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Development</h3>
                  <p className="text-lg text-gray-600 mb-4">Continuous Learning</p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Online Courses:</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Linux System Administration</li>
                          <li>• Network Security Fundamentals</li>
                          <li>• Advanced Java Programming</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Self-Study:</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• RedHat Documentation</li>
                          <li>• Open Source Projects</li>
                          <li>• Industry Best Practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;