import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ text, author, company }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg">
    <Quote className="h-8 w-8 text-blue-600 mb-4" />
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400" fill="#FBBF24" />
      ))}
    </div>
    <p className="text-gray-600 mb-4">{text}</p>
    <div>
      <p className="font-semibold text-gray-900">{author}</p>
      <p className="text-gray-500">{company}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      text: "The AI solutions provided have transformed our customer service operations. We've seen a 60% reduction in response time and improved satisfaction scores.",
      author: "Sarah Johnson",
      company: "Tech Solutions Inc."
    },
    {
      text: "Their generative AI models have revolutionized our content creation process. We're now producing 5x more content with consistent quality.",
      author: "Michael Chen",
      company: "Digital Media Group"
    },
    {
      text: "The AI-powered analytics platform gave us insights we never had before. It's been crucial for our strategic decision-making.",
      author: "Emma Davis",
      company: "Global Analytics Ltd."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real results from real businesses</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;