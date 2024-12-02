import React from 'react';
import { Brain } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-purple-500" />
            <span className="ml-2 text-xl font-bold text-white">AInnova Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#services" className="text-gray-300 hover:text-purple-400">Services</a>
            <a href="#cases" className="text-gray-300 hover:text-purple-400">Case Studies</a>
            <a href="#pricing" className="text-gray-300 hover:text-purple-400">Pricing</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;