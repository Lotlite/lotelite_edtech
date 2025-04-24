import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Award, Briefcase, Star, Zap, Code, Rocket, ChevronRight } from 'lucide-react';

const FourToFourProgram = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img 
            src="/Gemini_Generated_Image_uyqgx7uyqgx7uyqg.jpg" 
            alt="4 to 4 Model Program" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 h-screen flex items-center">
          <div className="max-w-4xl">
            <h1 
              className={`text-5xl md:text-7xl font-bold mb-6 text-white transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              4 to 4 Model
            </h1>
            <p 
              className={`text-xl md:text-2xl text-blue-100 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              Transform your 4-year degree into a 4-figure salary in just a few months with our comprehensive training program
            </p>
            <div 
              className={`flex flex-wrap gap-6 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            >
              <a 
                href="#enroll" 
                className="group bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center shadow-lg"
              >
                Enroll Now 
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="#learn-more" 
                className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5 inline-block transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Cards Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Program Overview Card */}
          <div 
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-1000 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div className="h-56 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
              <div className="text-center text-white relative z-10 p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Become a full stack Developer in 45 days + 15 days live projects</h2>
                <p className="text-blue-100 text-lg">Comprehensive training for your tech career</p>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">Industry-Aligned Curriculum</h3>
                    <p className="text-gray-600 leading-relaxed">Our curriculum is designed in collaboration with industry experts to ensure you learn the most in-demand skills.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <Clock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">Flexible Learning Schedule</h3>
                    <p className="text-gray-600 leading-relaxed">Learn at your own pace with our flexible schedule options that fit around your commitments.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors duration-300">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">Expert Mentorship</h3>
                    <p className="text-gray-600 leading-relaxed">Get guidance from industry professionals who will mentor you throughout your learning journey.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/mern-stack" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group"
                >
                  View curriculum 
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Career Outcomes Card */}
          <div 
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-1000 delay-200 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div className="h-56 bg-gradient-to-r from-indigo-600 to-indigo-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
              <div className="text-center text-white relative z-10 p-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Product Based Training</h2>
                <p className="text-indigo-100 text-lg">Your path to a high-paying tech career</p>
              </div>
            </div>
            <div className="p-8">
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 group-hover:bg-yellow-200 transition-colors duration-300">
                    <Award className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">High-Paying Job Opportunities</h3>
                    <p className="text-gray-600 leading-relaxed">Graduate with the skills needed for roles with starting salaries of 4 figures and above.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-red-100 p-3 rounded-full mr-4 group-hover:bg-red-200 transition-colors duration-300">
                    <Briefcase className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">Placement Assistance</h3>
                    <p className="text-gray-600 leading-relaxed">Our dedicated placement team helps you connect with top employers looking for your skills.</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="bg-green-100 p-3 rounded-full mr-4 group-hover:bg-green-200 transition-colors duration-300">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-700 transition-colors duration-300">Career Growth</h3>
                    <p className="text-gray-600 leading-relaxed">Build a foundation for long-term career growth with skills that remain relevant as technology evolves.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/product-based" 
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 group"
                >
                  View curriculum
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-blue-50 py-24">
        <div className="container mx-auto px-4">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Why Choose Our 4 to 4 Program
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-1000 hover:shadow-xl relative overflow-hidden group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="absolute inset-0 bg-[url('/hands-on-projects.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Code className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Hands-on Projects</h3>
                <p className="text-gray-600 leading-relaxed">Build real-world projects that showcase your skills to potential employers.</p>
              </div>
            </div>
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-1000 delay-200 hover:shadow-xl relative overflow-hidden group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="absolute inset-0 bg-[url('/industry-experts.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-indigo-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Star className="h-10 w-10 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Industry Experts</h3>
                <p className="text-gray-600 leading-relaxed">Learn from professionals with years of experience in the tech industry.</p>
              </div>
            </div>
            <div 
              className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-1000 delay-400 hover:shadow-xl relative overflow-hidden group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
              <div className="absolute inset-0 bg-[url('/fast-track-career.jpg')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <Rocket className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Fast-Track Career</h3>
                <p className="text-gray-600 leading-relaxed">Accelerate your career transition with our focused, intensive training program.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Details Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            How the 4 to 4 Model Works
          </h2>
          <div 
            className={`bg-white rounded-2xl shadow-xl p-10 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              The 4 to 4 Program is a comprehensive training initiative designed to help you transition from a 4-year degree to a 4-figure salary in just a few months. Our structured curriculum and hands-on approach ensure you gain the skills needed for high-paying tech roles.
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Program Features</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-gray-600 text-lg">
                <Zap className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                <span>Industry-aligned curriculum</span>
              </li>
              <li className="flex items-center text-gray-600 text-lg">
                <Zap className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                <span>Hands-on project experience</span>
              </li>
              <li className="flex items-center text-gray-600 text-lg">
                <Zap className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                <span>Career counseling and guidance</span>
              </li>
              <li className="flex items-center text-gray-600 text-lg">
                <Zap className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                <span>Resume building and interview preparation</span>
              </li>
              <li className="flex items-center text-gray-600 text-lg">
                <Zap className="h-6 w-6 text-yellow-500 mr-4 flex-shrink-0" />
                <span>Placement assistance</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">How to Enroll</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              To enroll in the 4 to 4 Program, please fill out the form below or contact our admissions team directly.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-100 shadow-lg">
              <h3 className="text-2xl font-semibold text-blue-800 mb-4">Ready to Start Your Journey?</h3>
              <p className="text-blue-700 text-lg mb-6">
                Take the first step towards a rewarding career in technology.
              </p>
              <a 
                href="/contact-us" 
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourToFourProgram;
