import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-spring-3d-carousel';
import CollegeSection from '../components/CollegeSection';
import Inti from '../../public/Inti.jpg';
// PDF Viewer Modal Component
const PDFViewerModal = ({ isOpen, onClose, pdfUrl }: { isOpen: boolean; onClose: () => void; pdfUrl: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Memorandum of Understanding</h3>
                  <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-2 h-[600px]">
                  <iframe
                    src={pdfUrl}
                    className="w-full h-full"
                    title="MOU PDF Viewer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UniversityPartnerProgram = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [selectedMOU, setSelectedMOU] = useState<string | null>(null);

  // MOU URLs mapping
  const mouUrls: { [key: string]: string } = {
    'INTI University': '/mous/Inti international University.pdf',
    'Skyline University Sharjah': '/mous/Skyline university college.pdf',
    'University of Toronto': '/mous/University of Toronto.pdf',
    'MIT World Peace University': '/mous/MIT World Peace University.pdf',
    'MIT ADT University': '/mous/Mit Loni kalbhor.pdf',
    'Raffles University': '/mous/Raffles University.pdf',
    'Chandigarh University': '/mous/Chandigarh University.pdf',
    'PVG COET University': '/mous/PVG\'s Coet & GKPIM.pdf'
  };

  const handleViewMOU = (universityName: string) => {
    setSelectedMOU(mouUrls[universityName]);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      key: 1,
      content: (
        <img
          src="init.jpg"
          alt="University Campus"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    },
    {
      key: 2,
      content: (
        <img
          src="../public/inti.jpg"
          alt="Global Education"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    },
    {
      key: 3,
      content: (
        <img
          src="/src/images/1741581292216.jpg"
          alt="Student Life"
          className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
        />
      )
    }
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index)
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section - Modern Design */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Global Education
              <span className="block text-blue-400">Partnership Program</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join our network of prestigious institutions and unlock global opportunities for your students through collaborative learning and cultural exchange.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-all">
                Become a Partner
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-white/10 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-blue-200">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">20k+</div>
                <div className="text-blue-200">Students Impacted</div>
                </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">25+</div>
                <div className="text-blue-200">Countries</div>
                </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-blue-200">Programs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Partners Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading institutions worldwide to deliver excellence in education
            </p>
                </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(mouUrls).slice(0, 6).map(([name, url]) => (
              <div key={name} className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img 
                    src={name === 'Raffles University' 
                      ? '/raffle-uni.jpeg' 
                      : `/src/images/universities/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
                  <div className="flex items-center gap-4 mt-4">
                    <button
                      onClick={() => handleViewMOU(name)}
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      View MOU →
                    </button>
                    <a href="#" className="text-gray-600 font-medium hover:text-gray-800 transition-colors">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
                </div>
              </div>
            </div>

      {/* Benefits Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600">
              Discover the advantages of joining our global education network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Network Access",
                description: "Connect with leading institutions worldwide and expand your global presence",
                icon: "🌍"
              },
              {
                title: "Student Exchange",
                description: "Facilitate seamless student mobility and cultural exchange programs",
                icon: "🎓"
              },
              {
                title: "Research Collaboration",
                description: "Foster joint research initiatives and academic partnerships",
                icon: "🔬"
              }
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewerModal
        isOpen={!!selectedMOU}
        onClose={() => setSelectedMOU(null)}
        pdfUrl={selectedMOU || ''}
      />
    </div>
  );
};

export default UniversityPartnerProgram; 