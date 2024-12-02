import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudyCard = ({ title, industry, results }) => (
  <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-700">
    <div className="h-48 bg-gray-700 flex items-center justify-center">
      <img src="/api/placeholder/400/320" alt={title} className="object-cover w-full h-full opacity-75" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-purple-400 mb-4">{industry}</p>
      <ul className="space-y-2 mb-6">
        {results.map((result, index) => (
          <li key={index} className="text-gray-300 flex items-start">
            <span className="text-purple-400 mr-2">•</span>
            {result}
          </li>
        ))}
      </ul>
      <button className="text-purple-400 font-medium flex items-center hover:text-purple-300">
        Read Case Study
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  </div>
);

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-commerce Revenue Optimization",
      industry: "Retail & E-commerce",
      results: [
        "45% increase in conversion rate",
        "2.3x improvement in customer retention",
        "$2.1M additional annual revenue"
      ]
    },
    {
      title: "Automated Customer Support",
      industry: "SaaS & Technology",
      results: [
        "75% reduction in response time",
        "90% customer satisfaction rate",
        "$500K annual cost savings"
      ]
    },
    {
      title: "Predictive Maintenance System",
      industry: "Manufacturing",
      results: [
        "85% accuracy in failure prediction",
        "32% reduction in downtime",
        "$1.5M savings in maintenance"
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-300">Real results from our AI solutions</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;