import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <CaseStudies />
      <Contact />
      <footer className="bg-gray-900 text-gray-400 py-12 text-center border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2024 AInnova Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;