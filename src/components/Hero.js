import React from 'react';

const Hero = () => (
  <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transform Your Business with <span className="text-purple-400">AI</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Leverage cutting-edge artificial intelligence solutions to automate processes, gain insights, and drive innovation.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default Hero;