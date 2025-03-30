import React from 'react';
import { Code, Database, LineChart, Briefcase } from 'lucide-react';

const SubHeader = () => {
  const certifications = [
    {
      id: 1,
      title: 'Data Science',
      icon: <Database className="h-6 w-6 text-[#0077B5]" />,
      description: 'Master data analysis, machine learning, and AI'
    },
    {
      id: 2,
      title: 'Software Development',
      icon: <Code className="h-6 w-6 text-[#0077B5]" />,
      description: 'Full-stack, mobile, and cloud development'
    },
    {
      id: 3,
      title: 'Business Analytics',
      icon: <LineChart className="h-6 w-6 text-[#0077B5]" />,
      description: 'Business intelligence and strategic decision making'
    },
    {
      id: 4,
      title: 'Management',
      icon: <Briefcase className="h-6 w-6 text-[#0077B5]" />,
      description: 'Leadership, project management, and business strategy'
    }
  ];

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Certifications in High-Demand Fields</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center mb-4">
                {cert.icon}
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{cert.title}</h3>
              </div>
              <p className="text-gray-600">{cert.description}</p>
              <button className="mt-4 text-[#0077B5] font-medium flex items-center">
                Explore Programs
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;