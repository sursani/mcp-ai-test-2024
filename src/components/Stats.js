import React from 'react';

const Stats = () => (
  <div className="bg-purple-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div>
          <div className="text-4xl font-bold mb-2">98%</div>
          <div className="text-purple-200">Customer Satisfaction</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">500+</div>
          <div className="text-purple-200">Projects Delivered</div>
        </div>
        <div>
          <div className="text-4xl font-bold mb-2">45%</div>
          <div className="text-purple-200">Cost Reduction</div>
        </div>
      </div>
    </div>
  </div>
);

export default Stats;