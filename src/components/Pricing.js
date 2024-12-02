import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ tier, price, features, isPopular }) => (
  <div className={`bg-white rounded-xl shadow-lg p-8 ${isPopular ? 'ring-2 ring-blue-600' : ''}`}>
    {isPopular && (
      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-bold text-gray-900 mt-4">{tier}</h3>
    <p className="mt-4">
      <span className="text-4xl font-bold text-gray-900">${price}</span>
      <span className="text-gray-500">/month</span>
    </p>
    <ul className="mt-8 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-8 w-full py-3 px-4 rounded-lg font-medium
      ${isPopular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      tier: 'Startup',
      price: '499',
      features: [
        'Basic AI Model Access',
        '5,000 API Calls/month',
        'Email Support',
        'Basic Analytics',
        '2 Team Members'
      ]
    },
    {
      tier: 'Business',
      price: '999',
      features: [
        'Advanced AI Models',
        '50,000 API Calls/month',
        'Priority Support',
        'Advanced Analytics',
        'Custom Integrations',
        '5 Team Members'
      ],
      isPopular: true
    },
    {
      tier: 'Enterprise',
      price: '2499',
      features: [
        'Custom AI Models',
        'Unlimited API Calls',
        '24/7 Support',
        'Custom Analytics',
        'Dedicated Account Manager',
        'Unlimited Team Members'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that's right for your business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;