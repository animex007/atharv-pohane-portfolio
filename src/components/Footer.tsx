import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Atharv pohane</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recent graduate passionate about RedHat networking, system administration, 
              and software development. Always eager to learn and take on new challenges.
            </p>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 mb-4 md:mb-0">
                © 2025 Atharv Pohane. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>Made with</span>
                <Heart className="text-red-500" size={16} />
                <span>and React</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;