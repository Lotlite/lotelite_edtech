import React from 'react';
import { Link } from 'react-router-dom';

const InternshipPrograms = () => (
  <div className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjMjU1OUI0IiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjYwIiByPSI0NSIvPjxjaXJjbGUgZmlsbD0iIzI1NTlCNCIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI2MCIgcj0iMzAiLz48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">Internship Programs</h1>
        <p className="text-xl text-blue-100 max-w-2xl animate-fade-in-delay">
          Empowering your workforce with cutting-edge technical skills through our specialized training programs
        </p>
      </div>
    </div>

    {/* Training Programs Section */}
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Our Internship Programs
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            We offer specialized training programs designed to enhance your team's technical capabilities and prepare them for the challenges of modern software development.
          </p>

          <div className="grid md:grid-cols-4 gap-4 mb-10">
            {/* YouTube Clone Project Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group hover:-translate-y-1">
              <div className="relative h-32">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3" 
                  alt="YouTube Clone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-blue-900 text-white text-xs px-2 py-1 rounded-full">Popular</div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1 text-blue-900">Learn To Build a Real Time Website Like YouTube</h3>
                <p className="text-gray-600 mb-2 text-xs">Step into the World of Video Innovation with YouTube - the Global Video Giant!</p>
                <div className="flex gap-1">
                  <Link 
                    to="/enroll/1"
                    className="flex-1 bg-blue-900 text-white px-2 py-1 rounded-lg text-center hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/demo/1"
                    className="flex-1 bg-indigo-600 text-white px-2 py-1 rounded-lg text-center hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Stack Overflow Clone Project Card */}
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 group hover:-translate-y-1">
              <div className="relative h-32">
                <img 
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3" 
                  alt="Stack Overflow Clone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-indigo-900 text-white text-xs px-2 py-1 rounded-full">Featured</div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1 text-indigo-900">Learn To Build a Real Time Website Like Stack Overflow</h3>
                <p className="text-gray-600 mb-2 text-xs">Embark on a Web Odyssey with NullClass - Craft Real-World Applications!</p>
                <div className="flex gap-1">
                  <Link 
                    to="/enroll/2"
                    className="flex-1 bg-blue-900 text-white px-2 py-1 rounded-lg text-center hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/demo/2"
                    className="flex-1 bg-indigo-600 text-white px-2 py-1 rounded-lg text-center hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* E-commerce Project Card */}
            <div className="bg-gradient-to-br from-white to-purple-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 group hover:-translate-y-1">
              <div className="relative h-32">
                <img 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3" 
                  alt="E-commerce Project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-purple-900 text-white text-xs px-2 py-1 rounded-full">New</div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1 text-purple-900">Build a Full-Stack E-commerce Platform</h3>
                <p className="text-gray-600 mb-2 text-xs">Create a complete e-commerce solution with product listings and payment integration.</p>
                <div className="flex gap-1">
                  <Link 
                    to="/enroll/3"
                    className="flex-1 bg-blue-900 text-white px-2 py-1 rounded-lg text-center hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/demo/3"
                    className="flex-1 bg-indigo-600 text-white px-2 py-1 rounded-lg text-center hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Dashboard Card */}
            <div className="bg-gradient-to-br from-white to-teal-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 group hover:-translate-y-1">
              <div className="relative h-32">
                <img 
                  src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3" 
                  alt="Social Media Dashboard"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent"></div>
                <div className="absolute top-2 right-2 bg-teal-900 text-white text-xs px-2 py-1 rounded-full">Trending</div>
              </div>
              <div className="p-3">
                <h3 className="text-base font-semibold mb-1 text-teal-900">Create a Social Media Analytics Dashboard</h3>
                <p className="text-gray-600 mb-2 text-xs">Build a powerful dashboard to track social media metrics and analytics in real-time.</p>
                <div className="flex gap-1">
                  <Link 
                    to="/enroll/4"
                    className="flex-1 bg-blue-900 text-white px-2 py-1 rounded-lg text-center hover:bg-blue-800 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/demo/4"
                    className="flex-1 bg-indigo-600 text-white px-2 py-1 rounded-lg text-center hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md text-xs"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <Link to="/mern-projects" className="inline-block bg-gradient-to-r from-blue-900 to-indigo-900 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-800 hover:to-indigo-800 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
              Explore More
            </Link>
          </div>

          {/* Program Benefits */}
          <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-6 mb-12 shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjMjU1OUI0IiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjYwIiByPSI0NSIvPjxjaXJjbGUgZmlsbD0iIzI1NTlCNCIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI2MCIgcj0iMzAiLz48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 relative z-10">
              Why Choose Our Internship Programs?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-200 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">Industry Experts</h3>
                <p className="text-gray-700 text-sm">Learn from experienced professionals with real-world expertise</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-200 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">Practical Projects</h3>
                <p className="text-gray-700 text-sm">Hands-on experience with real-world projects and case studies</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-200 group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">Flexible Schedule</h3>
                <p className="text-gray-700 text-sm">Customizable training schedules to fit your team's needs</p>
              </div>
            </div>
          </div>

          {/* What you will get Section */}
          <div className="py-12 bg-white rounded-2xl px-6 mb-12 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjMjU1OUI0IiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjYwIiByPSI0NSIvPjxjaXJjbGUgZmlsbD0iIzI1NTlCNCIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI2MCIgcj0iMzAiLz48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-5"></div>
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 relative z-10">
              What You Will Get Through Our Internship Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-200 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">Industry-Standard Projects</h3>
                <p className="text-gray-700 text-sm">Work on real-world projects that mirror industry standards and practices.</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-indigo-200 group">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-indigo-900">Professional Certification</h3>
                <p className="text-gray-700 text-sm">Receive an industry-recognized certification upon completion.</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-200 group">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-blue-900">Mentorship Support</h3>
                <p className="text-gray-700 text-sm">Get personalized guidance from industry experts.</p>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-5 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-indigo-200 group">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-indigo-900">Job Placement Assistance</h3>
                <p className="text-gray-700 text-sm">Access to our network of hiring partners and placement support.</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl px-6 mb-12 shadow-inner relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjMjU1OUI0IiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjYwIiByPSI0NSIvPjxjaXJjbGUgZmlsbD0iIzI1NTlCNCIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI2MCIgcj0iMzAiLz48Y2lyY2xlIGZpbGw9IiMyNTU5QjQiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900 relative z-10">
              What Our Students Say
            </h2>
            <div className="grid md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-blue-100 group">
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">"The internship program was a game-changer for my career. The hands-on experience and mentorship helped me land my dream job."</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-blue-900">Rahul Sharma</h4>
                    <p className="text-xs text-gray-600">Software Engineer at Google</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-indigo-100 group">
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">"The project-based learning approach gave me practical experience that was invaluable during my job interviews."</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-indigo-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-indigo-900">Priya Patel</h4>
                    <p className="text-xs text-gray-600">Full Stack Developer at Microsoft</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-purple-100 group">
                <div className="mb-4">
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm italic">"The quality of training and real-world projects helped me transition from a fresher to a confident developer."</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-purple-900">Arun Kumar</h4>
                    <p className="text-xs text-gray-600">Backend Engineer at Amazon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12 px-6 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSIxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjYwIi8+PGNpcmNsZSBmaWxsPSIjRkZGIiBmaWxsLW9wYWNpdHk9Ii4wNSIgY3g9IjcyMCIgY3k9IjYwIiByPSI0NSIvPjxjaXJjbGUgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMDUiIGN4PSI3MjAiIGN5PSI2MCIgcj0iMzAiLz48Y2lyY2xlIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iNzIwIiBjeT0iNjAiIHI9IjE1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-3">Ready to Upskill Your Team?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Contact us to learn more about our training programs and how they can benefit your organization
              </p>
              <Link to="/contact-us" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InternshipPrograms; 