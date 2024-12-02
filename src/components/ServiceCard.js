import React from 'react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-700">
    <div className="inline-block p-3 bg-purple-900/50 rounded-lg mb-4">
      <Icon className="h-6 w-6 text-purple-400" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

export default ServiceCard;