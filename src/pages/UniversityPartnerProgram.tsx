import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import Carousel from 'react-spring-3d-carousel';
// import CollegeSection from '../components/CollegeSection';
// import Inti from '../../public/Inti.jpg';
// import Inti2 from '../../public/inti.jpg';
// import Inti3 from '../../public/inti3.jpg';
// import Inti4 from '../../public/inti4.jpg';
// import Inti5 from '../../public/inti5.jpg';
// import Inti6 from '../../public/inti6.jpg';
// import Inti7 from '../../public/inti7.jpg';
// import Inti8 from '../../public/inti8.jpg';
// import Inti9 from '../../public/inti9.jpg';



const UniversityPartnerProgram = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [counters, setCounters] = useState({
    partners: 0,
    students: 0,
    countries: 0,
    programs: 0
  });
  const statsRef = useRef(null);
  
  // Target values for counters
  const targetCounters = {
    partners: 50,
    students: 20,
    countries: 25,
    programs: 100
  };

  // MOU URLs mapping
  const mouUrls: { [key: string]: string } = {
    'INTI University': '/mous/Inti international University.pdf',
    'Skyline University Sharjah': '/mous/Skyline university college.pdf',
    'MIT World Peace University': '/mous/MIT World Peace University.pdf',
    'MIT ADT University': '/mous/Mit Loni kalbhor.pdf',
    'Raffles University': '/mous/Raffles University.pdf',
    'PVG COET University': '/mous/PVG\'s Coet & GKPIM.pdf',
    'Uni KL/MIIT': '/mous/Uni KL-MIIT.pdf'
  };

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setGoToSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  // Animated counter effect for stats
  useEffect(() => {
    // Start the counter animation after a short delay when page loads
    const timer = setTimeout(() => {
      const duration = 500; // 0.5 seconds for the animation (much faster)
      const interval = 10; // Update every 10ms
      const steps = duration / interval;
      let step = 0;
      
      const counterInterval = setInterval(() => {
        step += 1;
        const progress = Math.min(step / steps, 1);
        
        setCounters({
          partners: Math.floor(progress * targetCounters.partners),
          students: Math.floor(progress * targetCounters.students),
          countries: Math.floor(progress * targetCounters.countries),
          programs: Math.floor(progress * targetCounters.programs)
        });
        
        if (step >= steps) {
          clearInterval(counterInterval);
          // Ensure final values are exact
          setCounters(targetCounters);
        }
      }, interval);
      
      return () => clearInterval(counterInterval);
    }, 100); // Start almost immediately (100ms delay)

    return () => clearTimeout(timer);
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" ref={statsRef}>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{counters.partners}+</div>
                <div className="text-blue-200">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{counters.students}k+</div>
                <div className="text-blue-200">Students Impacted</div>
                </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{counters.countries}+</div>
                <div className="text-blue-200">Countries</div>
                </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{counters.programs}+</div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Object.entries(mouUrls).slice(0, 8).map(([name, url]) => (
              <div key={name} className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col h-full">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={name === 'Raffles University' 
                      ? '/raffle-uni.jpeg' 
                      : name === 'MIT World Peace University'
                      ? '/mit.jpeg'
                      : name === 'MIT ADT University'
                      ? '/Mit_adt1.jpg'
                      : name === 'Skyline University Sharjah'
                      ? '/Sky_line.jpg'
                      : name === 'INTI University'
                      ? '/WhatsApp Image 2025-03-29 at 2.30.02 PM.jpeg'
                      : name === 'PVG COET University'
                      ? '/PVG_Enginnering.jpg'
                      : name === 'Uni KL/MIIT'
                      ? '/UNIKL_MIIT.jpg'
                      : `/src/images/universities/${name.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                    alt={name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex-grow flex items-center justify-center">
                  <h3 className="text-xl font-bold text-gray-900 text-center">{name}</h3>
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
    </div>
  );
};

export default UniversityPartnerProgram; 