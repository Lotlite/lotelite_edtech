import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Book, Code, Database, Server, Layout, 
  Clock, Users, Award, CheckCircle, ChevronDown, ChevronUp,
  PlayCircle, FileText, BookOpen, Target, Briefcase, Download
} from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  color: string;
  content: string[];
}

const MernStackCurriculum = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const syllabus: Module[] = [
    {
      id: 1,
      title: "Introduction",
      description: "Welcome to the course. Get started with the basics of MERN stack development.",
      color: "from-pink-600 to-pink-400",
      content: [
        "Overview of Full Stack Development",
        "Introduction to MERN Stack Components",
        "Setting up Development Environment",
        "Understanding Web Architecture",
        "Course Structure and Learning Path",
        "Best Practices and Coding Standards"
      ]
    },
    {
      id: 2,
      title: "Frontend Development Fundamentals",
      description: "Master HTML, CSS, JavaScript, and React.js for building modern user interfaces.",
      color: "from-blue-600 to-blue-400",
      content: [
        "HTML5 Semantic Elements & Forms",
        "CSS3 Flexbox & Grid Layouts",
        "JavaScript ES6+ Features",
        "React Components & Props",
        "State Management with Hooks",
        "React Router & Navigation"
      ]
    },
    {
      id: 3,
      title: "Backend Development with Node.js",
      description: "Learn server-side programming with Node.js and Express.js framework.",
      color: "from-green-600 to-green-400",
      content: [
        "Node.js Fundamentals & Event Loop",
        "Express.js Framework Setup",
        "RESTful API Development",
        "Middleware Implementation",
        "Error Handling & Validation",
        "Server-side Security Best Practices"
      ]
    },
    {
      id: 4,
      title: "Database Management with MongoDB",
      description: "Work with MongoDB, implement CRUD operations, and manage data relationships.",
      color: "from-purple-600 to-purple-400",
      content: [
        "MongoDB Setup & Configuration",
        "CRUD Operations & Queries",
        "Data Modeling & Schemas",
        "Mongoose ODM Integration",
        "Indexing & Performance Optimization",
        "Data Relationships & Population"
      ]
    },
    {
      id: 5,
      title: "API Development & Integration",
      description: "Build RESTful APIs and integrate frontend with backend services.",
      color: "from-orange-600 to-orange-400",
      content: [
        "RESTful API Architecture",
        "API Authentication & Authorization",
        "Data Validation & Sanitization",
        "API Documentation with Swagger",
        "Error Handling & Status Codes",
        "API Testing & Postman Usage"
      ]
    },
    {
      id: 6,
      title: "Authentication & Security",
      description: "Implement user authentication, authorization, and secure your applications.",
      color: "from-teal-600 to-teal-400",
      content: [
        "JWT Authentication Implementation",
        "OAuth & Social Login Integration",
        "Role-based Access Control",
        "Password Hashing & Security",
        "XSS & CSRF Protection",
        "Security Headers & Best Practices"
      ]
    },
    {
      id: 7,
      title: "Deployment & DevOps",
      description: "Learn to deploy applications and implement CI/CD pipelines.",
      color: "from-red-600 to-red-400",
      content: [
        "Environment Configuration",
        "Docker Containerization",
        "CI/CD Pipeline Setup",
        "Cloud Deployment (AWS/Heroku)",
        "Performance Monitoring",
        "Production Best Practices"
      ]
    },
    {
      id: 8,
      title: "Project Work & Portfolio",
      description: "Build real-world projects and create your developer portfolio.",
      color: "from-indigo-600 to-indigo-400",
      content: [
        "E-commerce Platform Development",
        "Social Media Application",
        "Real-time Chat Application",
        "Portfolio Website Creation",
        "Project Documentation",
        "GitHub Profile Enhancement"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1f2b]">
      {/* Hero Section */}
      <div className="relative bg-[#2a2f3b] border-b border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/enroll" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-6 group"
          >
            <ArrowLeft className="mr-2 h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Program
          </Link>
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Course Overview</h2>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              MERN Stack Development
            </h1>
            <p className="text-lg text-gray-400 mb-6 max-w-3xl">
              Master the complete MERN (MongoDB, Express.js, React.js, Node.js) stack and become a full-stack developer. Learn through hands-on projects and real-world applications.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="h-5 w-5" />
                <span>12 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Book className="h-5 w-5" />
                <span>8 Modules</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="h-5 w-5" />
                <span>1-on-1 Mentorship</span>
              </div>
              <button className="ml-auto flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Download className="h-5 w-5" />
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-white" />
              <h2 className="text-2xl font-bold text-white">Syllabus</h2>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2a2f3b] text-white rounded-lg hover:bg-[#3a3f4b] transition-colors">
              <Download className="h-5 w-5" />
              Download Complete Syllabus
            </button>
          </div>

          <div className="space-y-4">
            {syllabus.map((module) => (
              <div 
                key={module.id}
                className="bg-[#2a2f3b] rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full px-6 py-4 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center`}>
                        <Book className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                        <p className="text-gray-400 text-sm mt-1">{module.description}</p>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        expandedModules.includes(module.id) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
                {expandedModules.includes(module.id) && (
                  <div className="px-6 py-4 border-t border-gray-700">
                    <ul className="space-y-3">
                      {module.content.map((item, index) => (
                        <li key={index} className="flex items-center gap-3 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MernStackCurriculum;
