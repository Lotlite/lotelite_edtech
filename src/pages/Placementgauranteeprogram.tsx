import React from 'react';
import { Link } from 'react-router-dom';

const PlacementGuaranteeProgram = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Placement Guarantee Program</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our commitment to your career success. Join our program with a guaranteed placement opportunity upon successful completion.
          </p>
        </div>
      </div>

      {/* Program Overview Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Program Overview
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Our Placement Guarantee Program is designed to bridge the gap between education and employment, ensuring you have the skills and support needed to secure a job in the tech industry.
            </p>

            {/* Program Features */}
            <div className="py-16 bg-gray-50 rounded-3xl px-8 mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                What You'll Get
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Guaranteed Placement</h3>
                  <p className="text-gray-600">Job placement assistance with our partner companies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Industry-Ready Skills</h3>
                  <p className="text-gray-600">Learn the most in-demand technologies and frameworks</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Career Support</h3>
                  <p className="text-gray-600">Resume building, interview preparation, and networking</p>
                </div>
              </div>
            </div>

            {/* Program Structure */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                Program Structure
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Training Phase</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Comprehensive technical training in modern development technologies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Hands-on projects to build your portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Industry best practices and coding standards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Soft skills development for workplace success</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Placement Phase</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Resume building and optimization workshops</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Mock interviews with industry professionals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Direct placement opportunities with partner companies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Ongoing support until you secure your position</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mb-20">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Secure Your Future?</h3>
              <p className="text-gray-600 mb-8">
                Join our Placement Guarantee Program and take the first step toward a successful tech career
              </p>
              <Link to="/contact-us" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementGuaranteeProgram;
