import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleContactClick = () => {
    navigate('/contact-us');
    window.scrollTo(0, 0);
  };

  const sections = [
    {
      title: "Information We Collect",
      icon: <FileText className="w-6 h-6 text-blue-500" />,
      content: [
        "Personal information (name, email, contact details)",
        "Educational background and qualifications",
        "Payment information",
        "Usage data and analytics",
        "Device and browser information"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <Eye className="w-6 h-6 text-blue-500" />,
      content: [
        "To provide and improve our educational services",
        "To communicate with you about our services",
        "To process your payments",
        "To send you updates and marketing communications",
        "To analyze and improve our website performance"
      ]
    },
    {
      title: "Data Protection",
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      content: [
        "We implement industry-standard security measures",
        "Your data is encrypted during transmission",
        "Regular security audits are conducted",
        "Access to your data is strictly controlled",
        "We comply with data protection regulations"
      ]
    },
    {
      title: "Your Rights",
      icon: <Lock className="w-6 h-6 text-blue-500" />,
      content: [
        "Right to access your personal data",
        "Right to correct inaccurate data",
        "Right to request data deletion",
        "Right to withdraw consent",
        "Right to data portability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-8 mb-8"
        >
          <p className="text-gray-600 mb-4">
            At Lotlite Technology, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or use our services.
          </p>
          <p className="text-gray-600">
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
            please do not access the site or use our services.
          </p>
        </motion.div>

        {/* Main Content Sections */}
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {section.icon}
                <h2 className="text-xl font-semibold text-gray-900 ml-3">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.content.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button 
            onClick={handleContactClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center mx-auto"
          >
            <span>Contact Us</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </motion.div>

       

      
       
      </div>
    </div>
  );
};

export default PrivacyPolicy; 