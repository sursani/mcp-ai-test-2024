import React from 'react';
import { Brain } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">AInnova Solutions</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#cases" className="text-gray-600 hover:text-blue-600">Case Studies</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600">Pricing</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;