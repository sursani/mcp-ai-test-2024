import React from 'react';

const Hero = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Your Business with <span className="text-blue-600">AI</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Leverage cutting-edge artificial intelligence solutions to automate processes, gain insights, and drive innovation.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default Hero;