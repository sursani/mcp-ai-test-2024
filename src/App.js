import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Services />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <Contact />
      <footer className="bg-gray-800 text-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>&copy; 2024 AInnova Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;