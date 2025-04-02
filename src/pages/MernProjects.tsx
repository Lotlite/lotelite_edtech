import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MernProjects = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const projects = [
    {
      id: 1,
      title: "Learn To Build a Real Time Website Like YouTube",
      description: "Step into the World of Video Innovation with YouTube - the Global Video Giant! Join us at NullClass, where we believe in not just following but creating.",
      image: "/images/youtube-clone.jpg",
      category: "web-dev"
    },
    {
      id: 2,
      title: "Learn To Build a Real Time Website Like Stack Overflow",
      description: "Embark on a Web Odyssey with NullClass - Craft Real-World Applications like Stack Overflow and Redefine Web Development!",
      image: "/images/stackoverflow-clone.jpg",
      category: "web-dev"
    },
    {
      id: 3,
      title: "Learn to Build Real Time Website Like Twitter",
      description: "Unlock the Power of Social Networking with Our 'Learn to Build Real Time App Like Twitter'. At NullClass, we believe in not just following but creating.",
      image: "/images/twitter-clone.jpg",
      category: "web-dev"
    }
  ];

  const categories = [
    { id: "web-dev", label: "Web Development" },
    { id: "mobile-dev", label: "Mobile App Development" },
    { id: "data-science", label: "Data Science" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "blockchain", label: "Blockchain" },
    { id: "flutter", label: "Flutter Development" },
    { id: "data-analyst", label: "Data Analyst" },
    { id: "software-tester", label: "Software Tester" },
    { id: "frontend", label: "Front-end Web Development" },
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
    // You can add enrollment logic here
    navigate(`/enroll/${projectId}`);
  };

  const handleDemo = (projectId: number) => {
    // You can add demo logic here
    navigate(`/demo/${projectId}`);
  };

  const filteredProjects = selectedCategories.length === 0
    ? projects
    : projects.filter(project => selectedCategories.includes(project.category));

  return (
    <div className="min-h-screen bg-white">
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
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex justify-between">
                    <button 
                      onClick={() => handleEnroll(project.id)}
                      className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                    >
                      Enroll Now
                    </button>
                    <button 
                      onClick={() => handleDemo(project.id)}
                      className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
                    >
                      Demo
                    </button>
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