import React from 'react';
import { Link } from 'react-router-dom';

const InternshipPrograms = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6"> Internship Programs</h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          Empowering your workforce with cutting-edge technical skills through our specialized training programs
        </p>
      </div>
    </div>

    {/* Training Programs Section */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Our Internship Programs
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            We offer specialized training programs designed to enhance your team's technical capabilities and prepare them for the challenges of modern software development.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* YouTube Clone Project Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3" 
                  alt="YouTube Clone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Learn To Build a Real Time Website Like YouTube</h3>
                <p className="text-gray-600 mb-4 text-sm">Step into the World of Video Innovation with YouTube - the Global Video Giant! Join us at NullClass, where we believe in not just following but creating.</p>
                <div className="flex justify-between">
                  <Link 
                    to="/enroll/1"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/demo/1"
                    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>

            {/* Stack Overflow Clone Project Card */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3" 
                  alt="Stack Overflow Clone"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Learn To Build a Real Time Website Like Stack Overflow</h3>
                <p className="text-gray-600 mb-4 text-sm">Embark on a Web Odyssey with NullClass - Craft Real-World Applications like Stack Overflow and Redefine Web Development!</p>
                <div className="flex justify-between">
                  <Link 
                    to="/enroll/2"
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Enroll Now
                  </Link>
                  <Link 
                    to="/demo/2"
                    className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-12">
            <Link to="/mern-projects" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all shadow-lg">
              Explore More
            </Link>
          </div>

          {/* Program Benefits */}
          <div className="py-16 bg-gray-50 rounded-3xl px-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose Our Internship Programs?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industry Experts</h3>
                <p className="text-gray-600">Learn from experienced professionals with real-world expertise</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Practical Projects</h3>
                <p className="text-gray-600">Hands-on experience with real-world projects and case studies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Flexible Schedule</h3>
                <p className="text-gray-600">Customizable training schedules to fit your team's needs</p>
              </div>
            </div>
          </div>

          {/* What you will get Section */}
          <div className="py-16 bg-white rounded-3xl px-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What You Will Get
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industry-Standard Projects</h3>
                <p className="text-gray-600">Work on real-world projects that mirror industry standards and practices. Build a portfolio that showcases your practical skills and expertise.</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Certification</h3>
                <p className="text-gray-600">Receive an industry-recognized certification upon completion. Add credibility to your resume and validate your expertise in your chosen field.</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mentorship Support</h3>
                <p className="text-gray-600">Get personalized guidance from industry experts. Regular one-on-one sessions to help you overcome challenges and accelerate your learning.</p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Job Placement Assistance</h3>
                <p className="text-gray-600">Access to our network of hiring partners. Get help with resume building, interview preparation, and job placement opportunities.</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Learning Resources</h3>
                <p className="text-gray-600">Access to comprehensive study materials, video tutorials, and documentation. Stay updated with the latest industry trends and best practices.</p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Performance Certificate</h3>
                <p className="text-gray-600">Earn performance-based certificates and badges. Showcase your achievements and skills to potential employers.</p>
              </div>
            </div>
          </div>

          {/* Why Us Section */}
          <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl px-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">10+ Years of Experience</h3>
                <p className="text-gray-600">Decade-long expertise in training and placing tech professionals across leading companies.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">500+ Successful Placements</h3>
                <p className="text-gray-600">Track record of placing students in top tech companies with competitive packages.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">50+ Industry Experts</h3>
                <p className="text-gray-600">Learn from professionals who have worked with leading tech companies globally.</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="py-16 bg-white rounded-3xl px-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Our Students Say
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl relative">
                <div className="absolute -top-4 left-8">
                  <svg className="w-8 h-8 text-blue-600 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C11.437 21.122 10.043 23.037 8 24v2c4.123-1.463 7.161-5.332 7.874-10.049C15.958 15.649 16 15.331 16 15c0-3.314-2.686-6-6-6zm18 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C23.437 21.122 22.043 23.037 20 24v2c4.123-1.463 7.161-5.332 7.874-10.049C27.958 15.649 28 15.331 28 15c0-3.314-2.686-6-6-6z" />
                  </svg>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 italic">"The internship program was a game-changer for my career. The hands-on experience and mentorship helped me land my dream job at a top tech company."</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rahul Sharma</h4>
                    <p className="text-sm text-gray-500">Software Engineer at Google</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl relative">
                <div className="absolute -top-4 left-8">
                  <svg className="w-8 h-8 text-blue-600 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C11.437 21.122 10.043 23.037 8 24v2c4.123-1.463 7.161-5.332 7.874-10.049C15.958 15.649 16 15.331 16 15c0-3.314-2.686-6-6-6zm18 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C23.437 21.122 22.043 23.037 20 24v2c4.123-1.463 7.161-5.332 7.874-10.049C27.958 15.649 28 15.331 28 15c0-3.314-2.686-6-6-6z" />
                  </svg>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 italic">"The project-based learning approach gave me practical experience that was invaluable during my job interviews. The mentors were extremely supportive."</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Patel</h4>
                    <p className="text-sm text-gray-500">Full Stack Developer at Microsoft</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl relative">
                <div className="absolute -top-4 left-8">
                  <svg className="w-8 h-8 text-blue-600 transform rotate-180" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C11.437 21.122 10.043 23.037 8 24v2c4.123-1.463 7.161-5.332 7.874-10.049C15.958 15.649 16 15.331 16 15c0-3.314-2.686-6-6-6zm18 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.255-.436C23.437 21.122 22.043 23.037 20 24v2c4.123-1.463 7.161-5.332 7.874-10.049C27.958 15.649 28 15.331 28 15c0-3.314-2.686-6-6-6z" />
                  </svg>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600 italic">"The quality of training and real-world projects helped me transition from a fresher to a confident developer. I highly recommend this program."</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Arun Kumar</h4>
                    <p className="text-sm text-gray-500">Backend Engineer at Amazon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Upskill Your Team?</h3>
            <p className="text-gray-600 mb-8">
              Contact us to learn more about our training programs and how they can benefit your organization
            </p>
            <Link to="/contact-us" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InternshipPrograms; 