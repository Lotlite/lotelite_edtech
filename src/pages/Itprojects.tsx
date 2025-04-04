import React from 'react';
import { Link } from 'react-router-dom';

const ITProjectTraining = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">IT Project Training Program</h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          Join our intensive hands-on IT project training program. Work directly with industry professionals and build real-world experience through actual projects.
        </p>
      </div>
    </div>

    {/* Program Overview Section */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Program Structure
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            A comprehensive training program combining weekend workshops, weekday evening sessions, and real corporate project experience.
          </p>

          {/* Schedule Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Weekend Sessions Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <h3 className="text-2xl font-bold mb-4 text-white">Weekend Intensive Sessions</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Saturday & Sunday: Full-day hands-on training</li>
                  <li>• Project development workshops</li>
                  <li>• Code reviews and pair programming</li>
                  <li>• Team collaboration exercises</li>
                </ul>
              </div>
            </div>

            {/* Weekday Sessions Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <h3 className="text-2xl font-bold mb-4 text-white">Weekday Evening Sessions</h3>
                <ul className="text-gray-100 space-y-2">
                  <li>• Monday to Friday: Evening mentoring</li>
                  <li>• Daily scrum meetings</li>
                  <li>• Corporate developer interactions</li>
                  <li>• Sprint planning and reviews</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Program Features */}
          <div className="py-16 bg-gray-50 rounded-3xl px-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What You'll Get
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Corporate Mentorship</h3>
                <p className="text-gray-600">Direct guidance from industry professionals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Agile Experience</h3>
                <p className="text-gray-600">Real sprint planning and execution</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Project Portfolio</h3>
                <p className="text-gray-600">Build real projects for your resume</p>
              </div>
            </div>
          </div>

          {/* Projects Delivered Section */}
          <div className="py-16 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Projects Delivered
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Project Cards - Left Column */}
              <div className="flex flex-col gap-16">
                {/* Project Card 1 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-indigo-700/70 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Aura Wellness</h3>
                    <p className="text-gray-600 mb-4">A wellness center booking platform with real-time updates and team features.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Project Card 2 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-r from-purple-600 to-pink-700 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/70 to-pink-700/70 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Savi hotels</h3>
                    <p className="text-gray-600 mb-4">A hotel booking platform with real-time updates and team features.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Express</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Project Card 3 */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-r from-red-600 to-orange-700 flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-600/70 to-orange-700/70 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Edtech platform</h3>
                    <p className="text-gray-600 mb-4">A feature-rich edtech platform with user authentication, content management, and comments.</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">React</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">MongoDB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Descriptions - Right Column */}
              <div className="flex flex-col gap-16">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Aura Wellness</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive wellness center booking platform that allows users to schedule appointments, view service offerings, and manage their wellness journey. The platform features real-time availability updates, personalized recommendations, and seamless payment processing.
                  </p>
                  <p className="text-gray-600 mb-4">
                    This project demonstrates our students' ability to build user-centric applications with modern authentication, responsive design, and integration with third-party services.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Savi Hotels</h3>
                  <p className="text-gray-600 mb-4">
                    A sophisticated hotel booking platform that enables users to search, filter, and book accommodations with ease. The application includes features like room comparison, virtual tours, and loyalty program integration.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Students working on this project gain experience with complex data modeling, search algorithms, and payment gateway integration while creating a seamless user experience.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">EdTech Platform</h3>
                  <p className="text-gray-600 mb-4">
                    A feature-rich educational technology platform that facilitates online learning through interactive courses, assessments, and progress tracking. The platform supports various content types and learning paths.
                  </p>
                  <p className="text-gray-600 mb-4">
                    This project showcases our students' skills in building scalable applications with content management systems, user progress tracking, and interactive learning features.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Start Your IT Career?</h3>
            <p className="text-gray-600 mb-8">
              Enroll now in our IT Project Training Program and kickstart your career with hands-on experience
            </p>
            <Link to="/enroll" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all">
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ITProjectTraining; 