import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Internship = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  
  // New state for the program cards carousel
  const [currentCardSlide, setCurrentCardSlide] = useState(0);
  const totalCardSlides = 4; // Total number of program cards
  const cardsPerSlide = 3; // Number of cards to show per slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Auto-advance for the program cards carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardSlide((prevSlide) => (prevSlide + 1) % (totalCardSlides - cardsPerSlide + 1));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Function to navigate program cards carousel
  const goToCardSlide = (index: number) => {
    setCurrentCardSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Launch Your Tech Career with Our Internship Programs
            </h1>
            <p className="text-xl mb-8 text-blue-100 animate-fade-in-delay">
              Gain real-world experience, build your portfolio, and kickstart your journey in tech
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                  <Link 
                to="/internship/enroll"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                to="/internship/programs"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
              >
                View Programs
                  </Link>
                </div>
              </div>
            </div>
          </div>

      {/* Explore Our Internship Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Our Internship</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our MERN stack projects that you'll work on during your internship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* Project Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-indigo-700/70 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">E-Commerce Platform</h3>
                <p className="text-gray-600 mb-4">Build a full-featured e-commerce platform with product listings, cart functionality, and payment integration.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-pink-700/70 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Task Management App</h3>
                <p className="text-gray-600 mb-4">Create a collaborative task management application with real-time updates and team features.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Express</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">MongoDB</span>
              </div>
            </div>
          </div>

            {/* Project Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-orange-700/70 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Blog Platform</h3>
                <p className="text-gray-600 mb-4">Develop a feature-rich blogging platform with user authentication, content management, and comments.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">MongoDB</span>
                </div>
              </div>
              </div>

            {/* Project Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="h-48 bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600/70 to-cyan-700/70 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Social Media Dashboard</h3>
                <p className="text-gray-600 mb-4">Build a social media analytics dashboard with data visualization and user engagement metrics.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Express</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">MongoDB</span>
                </div>
              </div>
            </div>
          </div>

              <div className="text-center">
            <Link
              to="/mern-projects"
              className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Explore More
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Our Internship Programs Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Internship Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our internship programs are designed to give you hands-on experience and prepare you for a successful career in tech.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            {/* Slides */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1 */}
              <div className="w-full flex-shrink-0 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">Real-World Projects</h3>
                    <p className="text-gray-700 mb-6">
                      Work on actual industry projects that will add value to your portfolio and give you practical experience.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Build full-stack applications</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Work with real data and APIs</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                        <span className="text-gray-700">Implement industry best practices</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Real-world projects" 
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="w-full flex-shrink-0 bg-gradient-to-br from-indigo-50 to-indigo-100 p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-900 mb-4">Expert Mentorship</h3>
                    <p className="text-gray-700 mb-6">
                      Learn from experienced professionals who will guide you through your internship journey.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">One-on-one mentoring sessions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Code reviews and feedback</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-indigo-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                        <span className="text-gray-700">Career guidance and advice</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Expert mentorship" 
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="w-full flex-shrink-0 bg-gradient-to-br from-purple-50 to-purple-100 p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="w-full md:w-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-900 mb-4">Career Opportunities</h3>
                    <p className="text-gray-700 mb-6">
                      Our internship programs open doors to exciting career opportunities in the tech industry.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Job placement assistance</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Industry connections</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                        <span className="text-gray-700">Resume building workshops</span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Career opportunities" 
                      className="rounded-lg shadow-md w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-300"
              onClick={() => goToSlide((currentSlide - 1 + totalSlides) % totalSlides)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-300"
              onClick={() => goToSlide((currentSlide + 1) % totalSlides)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
                </div>

      {/* What You Will Get Through Our Internship Programs Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What You Will Get Through Our Internship Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our internship programs provide you with everything you need to succeed in your tech career.
            </p>
                </div>

          {/* Program Cards Carousel */}
          <div className="relative max-w-6xl mx-auto overflow-hidden">
            {/* Cards Container */}
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentCardSlide * (100 / cardsPerSlide)}%)` }}
            >
              {/* Card 1 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-2">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-200 group h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-blue-900">Real-World Projects</h3>
                  <p className="text-gray-700 text-sm">Work on actual industry projects that will add value to your portfolio.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-2">
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-indigo-200 group h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                  <h3 className="text-lg font-bold mb-2 text-indigo-900">Mentorship Support</h3>
                  <p className="text-gray-700 text-sm">Get personalized guidance from industry experts.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-2">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-purple-200 group h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-purple-900">Career Guidance</h3>
                  <p className="text-gray-700 text-sm">Receive career counseling and job placement assistance.</p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-full md:w-1/3 flex-shrink-0 px-2">
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-teal-200 group h-full">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-200 to-teal-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-teal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-teal-900">Certification</h3>
                  <p className="text-gray-700 text-sm">Earn a recognized certification upon completion.</p>
                </div>
              </div>
                  </div>

            {/* Navigation Buttons for Cards Carousel */}
            <button 
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-300 z-10"
              onClick={() => goToCardSlide(Math.max(0, currentCardSlide - 1))}
              disabled={currentCardSlide === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors duration-300 z-10"
              onClick={() => goToCardSlide(Math.min(totalCardSlides - cardsPerSlide, currentCardSlide + 1))}
              disabled={currentCardSlide >= totalCardSlides - cardsPerSlide}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators for Cards Carousel */}
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(totalCardSlides - cardsPerSlide + 1)].map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentCardSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => goToCardSlide(index)}
                />
              ))}
                </div>
              </div>
            </div>
          </div>

      {/* What Our Students Say Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our successful interns who have transformed their careers through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-900 font-bold">RS</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900">Rahul Sharma</h3>
                  <p className="text-gray-700">Frontend Developer at Google</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The internship program gave me the practical experience I needed to land my dream job. The mentorship was invaluable."
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-indigo-900 font-bold">PP</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-indigo-900">Priya Patel</h3>
                  <p className="text-gray-700">Full Stack Developer at Microsoft</p>
                </div>
              </div>
              <p className="text-gray-700">
                "I learned more in 3 months of internship than I did in a year of self-study. The projects were challenging and rewarding."
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-900 font-bold">AK</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-purple-900">Arun Kumar</h3>
                  <p className="text-gray-700">Backend Developer at Amazon</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The internship program helped me build a strong portfolio and gain confidence in my technical skills."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Tech Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join our internship programs and take the first step towards a successful career in tech.
          </p>
          <Link
            to="/internship/enroll"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Enroll Now
          </Link>
      </div>
    </div>
  </div>
);
};

export default Internship; 