import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MernProjects = () => {
  const navigate = useNavigate();
  const handleLinkClick = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
  };
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const projects = [
    {
      id: 1,
      title: "Learn To Build a Real Time Website Like YouTube",
      description: "Step into the World of Video Innovation with YouTube - the Global Video Giant! Join us at NullClass, where we believe in not just following but creating.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3",
      category: "web-dev"
    },
    {
      id: 2,
      title: "Learn To Build a Real Time Website Like Stack Overflow",
      description: "Embark on a Web Odyssey with NullClass - Craft Real-World Applications like Stack Overflow and Redefine Web Development!",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3",
      category: "web-dev"
    },
    {
      id: 3,
      title: "Learn to Build Real Time Website Like Twitter",
      description: "Unlock the Power of Social Networking with Our 'Learn to Build Real Time App Like Twitter'. At NullClass, we believe in not just following but creating.",
      image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?ixlib=rb-4.0.3",
      category: "web-dev"
    },
    {
      id: 4,
      title: "Learn to Build Real Time Text to Image Generator",
      description: "Master the art of AI-powered image generation! Create a cutting-edge text-to-image generator using state-of-the-art machine learning models.",
      image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?ixlib=rb-4.0.3",
      category: "ai-ml"
    },
    {
      id: 5,
      title: "Learn to Deploy Real Time Text to Image Generator- Gen AI",
      description: "Take your AI skills to production! Learn to deploy and scale your text-to-image generation system using modern cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3",
      category: "ai-ml"
    },
    {
      id: 6,
      title: "Learn to Deploy Real Time Website in AWS",
      description: "Master cloud deployment with AWS! Learn to deploy, scale, and manage web applications using Amazon Web Services infrastructure.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3",
      category: "cloud"
    },
    {
      id: 7,
      title: "Learn to Build Real Time Website Like Make My Trip",
      description: "Create a full-featured travel booking platform! Master the complexities of building a travel website with real-time booking capabilities.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3",
      category: "web-dev"
    },
    {
      id: 8,
      title: "Learn to Hack Real Time Android OS",
      description: "Dive deep into Android security! Learn ethical hacking techniques for Android operating systems and mobile application security.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3",
      category: "cybersecurity"
    },
    {
      id: 9,
      title: "Learn to Build a Job Analytics Portal",
      description: "Create a powerful job market analytics platform! Learn to build data-driven insights for employment trends and career opportunities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      category: "data-analytics"
    },
    {
      id: 10,
      title: "Learn to Build Real Time Website Like RedBus",
      description: "Master bus booking system development! Create a comprehensive transportation booking platform with real-time availability.",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3",
      category: "web-dev"
    },
    {
      id: 11,
      title: "Learn to Build Real Time Website Like BookMyShow",
      description: "Build a dynamic event ticketing platform! Create a Python Django-based entertainment booking system with real-time inventory management.",
      image: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?ixlib=rb-4.0.3",
      category: "python"
    }
  ];

  const categories = [
    { id: "web-dev", label: "Web Development" },
    { id: "mobile-dev", label: "Mobile App Development" },
    { id: "data-science", label: "Data Science" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "blockchain", label: "Blockchain" },
    { id: "flutter", label: "Flutter Development" },
    { id: "data-analytics", label: "Data Analytics" },
    { id: "software-tester", label: "Software Tester" },
    { id: "ai-ml", label: "AI & Machine Learning" },
    { id: "python", label: "Python Development" },
    { id: "cloud", label: "Cloud Technology" }
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryId)) {
        return prev.filter(id => id !== categoryId);
      } else {
        return [...prev, categoryId];
      }
    });
  };

  const handleEnroll = (projectId: number) => {
    navigate(`/enroll/${projectId}`);
  };

  const handleDemo = (projectId: number) => {
    navigate(`/demo/${projectId}`);
  };

  const filteredProjects = selectedCategories.length === 0
    ? projects
    : projects.filter(project => selectedCategories.includes(project.category));

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}


      <div className="flex">
        {/* Categories Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="space-y-3">
              {categories.map(category => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={category.id}
                    className="mr-3"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryChange(category.id)}
                  />
                  <label htmlFor={category.id}>{category.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex justify-between">
                    <button
                      onClick={() => handleLinkClick('/contact-us')}
                      className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Enroll Now
                    </button>
                    {/* <button 
                      onClick={() => handleDemo(project.id)}
                      className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
                    >
                      Demo
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MernProjects; 