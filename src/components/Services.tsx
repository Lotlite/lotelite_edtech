import React, { useState } from 'react';
import { Briefcase, GraduationCap, Globe, Award, Users, BookOpen, Laptop, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const services = [
    {
      id: 1,
      title: 'Corporate Programs',
      description: 'Strategic partnerships and training solutions for businesses to enhance their workforce capabilities.',
      icon: <Briefcase className="h-10 w-10 text-white" />,
      category: 'corporate',
      link: '/corporate-partner-program',
      bgImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80'
    },
    {
      id: 2,
      title: 'IT Services',
      description: 'Comprehensive technology solutions including software development, cloud services, and cybersecurity.',
      icon: <Laptop className="h-10 w-10 text-white" />,
      category: 'it',
      link: '/it-services',
      bgImage: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 3,
      title: 'MAANG Certificates',
      description: 'Industry-recognized certifications from leading tech companies to validate your expertise.',
      icon: <Award className="h-10 w-10 text-white" />,
      category: 'certificates',
      link: '/maang-certificates',
      bgImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 4,
      title: 'Foreign Exchange',
      description: 'International exchange programs offering immersive learning experiences across the globe.',
      icon: <Globe className="h-10 w-10 text-white" />,
      category: 'exchange',
      link: '/foreign-exchange',
      bgImage: 'https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    },
    {
      id: 5,
      title: 'Foreign Degree Programs',
      description: 'Accredited degree programs from prestigious international universities.',
      icon: <GraduationCap className="h-10 w-10 text-white" />,
      category: 'degree',
      link: '/foreign-degree-programs',
      bgImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 6,
      title: 'University Partner Program',
      description: 'Collaborative partnerships with leading universities worldwide for academic excellence.',
      icon: <Building className="h-10 w-10 text-white" />,
      category: 'university',
      link: '/university-partner-program',
      bgImage: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
    }
  ];
  
  const tabs = [
    { id: 'all', label: 'All Services' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'it', label: 'IT Services' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'exchange', label: 'Exchange' },
    { id: 'degree', label: 'Degree' },
    { id: 'university', label: 'University' }
  ];
  
  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive education and technology solutions designed to help individuals and organizations achieve their goals in today's competitive landscape.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-10">
          <div className="flex overflow-x-auto pb-2 space-x-2 w-full justify-center">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#0077B5] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map(service => (
            <Link 
              key={service.id} 
              to={service.link} 
              className="relative group overflow-hidden rounded-lg h-[300px] shadow-md hover:shadow-xl transition-all"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0077B5]/90 to-[#0077B5]/60 group-hover:from-[#0077B5]/95 group-hover:to-[#0077B5]/70 transition-all duration-300" />
              
              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-white/90 mb-4">{service.description}</p>
                <span className="text-white font-medium flex items-center">
                  Learn more 
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;