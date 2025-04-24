import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Book, Code, Database, Server, Layout, 
  Clock, Users, Award, CheckCircle, ChevronDown, ChevronUp,
  PlayCircle, FileText, BookOpen, Target, Briefcase, Download,
  Cpu, GitBranch, Shield, Zap, Brain, Rocket,
  X, Mail, Phone, User,
  type LucideIcon
} from 'lucide-react';
import emailjs from '@emailjs/browser';

interface Module {
  id: number;
  title: string;
  description: string;
  color: string;
  icon: LucideIcon;
  content?: string[];  // Make content optional since not all modules have it
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ProductBasedTraining = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
    emailjs.init("tkBN2nVNXK_Ly_VC-");
  }, []);

  const toggleModule = (moduleId: number) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        phone_number: formData.phone,
        message: formData.message,
        to_name: "Admin"
      };

      await emailjs.send(
        "service_vay1mr6",
        "template_yc48n7t",
        templateParams
      );
      
      alert("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    }
  };

  const syllabus: Module[] = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      description: "Master fundamental DSA concepts and problem-solving techniques.",
      color: "from-pink-600 to-pink-400",
      icon: Brain,
      content: [
        "Introduction to Time & Space Complexity",
        "Arrays, Strings, and Linked Lists",
        "Stacks, Queues, and Hash Tables",
        "Trees, Graphs, and Advanced Data Structures",
        "Sorting and Searching Algorithms",
        "Dynamic Programming and Greedy Algorithms"
      ]
    },
    {
      id: 2,
      title: "System Design",
      description: "Learn to design scalable and efficient software systems.",
      color: "from-blue-600 to-blue-400",
      icon: Cpu,
      content: [
        "Distributed Systems Architecture",
        "Scalability and Performance",
        "Database Design and Sharding",
        "Load Balancing and Caching",
        "Microservices Architecture",
        "System Security and Authentication"
      ]
    },
    {
      id: 3,
      title: "Design Patterns",
      description: "Understand and implement common software design patterns.",
      color: "from-green-600 to-green-400",
      icon: GitBranch,
      content: [
        "SOLID Principles",
        "Creational Design Patterns",
        "Structural Design Patterns",
        "Behavioral Design Patterns",
        "Architectural Patterns",
        "Anti-patterns and Code Smells"
      ]
    },
    {
      id: 4,
      title: "Product Development",
      description: "Learn end-to-end product development lifecycle and best practices.",
      color: "from-purple-600 to-purple-400",
      icon: Rocket,
      content: [
        "Agile Development Methodology",
        "Product Requirements and Planning",
        "Code Version Control with Git",
        "CI/CD Pipeline Implementation",
        "Code Review Best Practices",
        "Production Deployment Strategies"
      ]
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "Master testing strategies and quality control processes.",
      color: "from-orange-600 to-orange-400",
      icon: Shield,
      content: [
        "Unit Testing Fundamentals",
        "Integration Testing Strategies",
        "End-to-End Testing",
        "Test-Driven Development (TDD)",
        "Performance Testing",
        "Security Testing and Vulnerability Assessment"
      ]
    },
    {
      id: 6,
      title: "Interview Preparation",
      description: "Prepare for technical and behavioral interviews at top companies.",
      color: "from-teal-600 to-teal-400",
      icon: Target,
      content: [
        "Data Structure Problem Solving",
        "System Design Interview Practice",
        "Behavioral Interview Questions",
        "Mock Interviews and Feedback",
        "Resume Building and Review",
        "Salary Negotiation Strategies"
      ]
    },
    {
      id: 7,
      title: "Career Development",
      description: "Build your professional profile and career growth strategy.",
      color: "from-red-600 to-red-400",
      icon: Briefcase,
      content: [
        "Professional Portfolio Development",
        "LinkedIn Profile Optimization",
        "Networking Strategies",
        "Technical Blog Writing",
        "Open Source Contribution",
        "Career Path Planning"
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
              Product-Based Training Program
            </h1>
            <p className="text-lg text-gray-400 mb-6 max-w-3xl">
              Master the skills required to excel in product-based companies. From data structures to system design, 
              prepare yourself for top-tier tech roles with our comprehensive training program.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="h-5 w-5" />
                <span>16 Weeks</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Book className="h-5 w-5" />
                <span>7 Modules</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="h-5 w-5" />
                <span>1-on-1 Mentorship</span>
              </div>
              <button
                onClick={() => setIsModalOpen(true)} 
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-5 w-5" />
                Book a Course
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="h-6 w-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Syllabus</h2>
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
                        {React.createElement(module.icon, { className: "h-6 w-6 text-white" })}
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
                      {module.content?.map((item, index) => (
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

          {/* Book a Course Button */}
          <div className="mt-12 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              <Mail className="h-5 w-5" />
              Book a Course
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#2a2f3b] rounded-xl w-full max-w-2xl p-6 relative animate-fade-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-2xl font-bold text-white mb-6">Book Your Product-Based Training Course</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full bg-[#1a1f2b] text-white rounded-lg pl-10 pr-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    required
                    className="w-full bg-[#1a1f2b] text-white rounded-lg pl-10 pr-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    required
                    className="w-full bg-[#1a1f2b] text-white rounded-lg pl-10 pr-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Additional Message (Optional)"
                  className="w-full bg-[#1a1f2b] text-white rounded-lg px-4 py-3 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors min-h-[100px]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg py-3 font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Book Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductBasedTraining;
