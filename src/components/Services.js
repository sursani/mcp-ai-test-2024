import React from 'react';
import { Brain, MessageCircle, LineChart, Cog, Code, Users } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Generative AI Solutions",
      description: "Custom AI models for generating text, images, and code tailored to your business needs."
    },
    {
      icon: LineChart,
      title: "Business Analytics",
      description: "Turn your data into actionable insights with AI-powered analytics and predictions."
    },
    {
      icon: MessageCircle,
      title: "Customer Service AI",
      description: "24/7 customer support automation with intelligent chatbots and virtual assistants."
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline workflows and reduce manual tasks with intelligent automation."
    },
    {
      icon: Code,
      title: "AI Development",
      description: "Custom AI software development and integration services for your applications."
    },
    {
      icon: Users,
      title: "AI Consulting",
      description: "Expert guidance on AI strategy, implementation, and optimization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive AI solutions for modern businesses</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;