import React from 'react';
import { Link } from 'react-router-dom';

const CorporatePartnerProgram = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Corporate Partner Program</h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          Bridging the gap between education and industry to create a skilled workforce ready to meet the challenges of tomorrow
        </p>
      </div>
    </div>

    {/* Program Description Section */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            About Our Corporate Partnerships
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Our Corporate Partner Program establishes strategic alliances between educational institutions and leading businesses across industries. This collaboration creates a dynamic ecosystem where industry needs inform curriculum development, students gain real-world experience, and companies access a pipeline of qualified talent.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Talent Pipeline Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1573164574472-797cdf4a583a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Talent Pipeline</h3>
                <p className="text-gray-100">
                  Our program connects companies with a steady stream of qualified candidates who possess both academic knowledge and practical skills. Through internships, work placements, and recruitment events, corporate partners gain early access to emerging talent, reducing recruitment costs and time-to-productivity.
                </p>
              </div>
            </div>

            {/* Industry-Informed Curriculum Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Industry-Informed Curriculum</h3>
                <p className="text-gray-100">
                  Corporate partners provide valuable insights that shape curriculum development, ensuring educational programs align with current industry needs. This collaboration brings real-world challenges into the classroom, preparing students for the actual demands of the workplace and keeping educational content relevant.
                </p>
              </div>
            </div>

            {/* Professional Development Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Professional Development</h3>
                <p className="text-gray-100">
                  Our partnerships facilitate ongoing professional development for the existing workforce through specialized courses, workshops, and training programs. Corporate partners gain access to cutting-edge educational resources to upskill their teams, adopting new technologies and methodologies to maintain competitive advantage.
                </p>
              </div>
            </div>

            {/* Research & Innovation Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Research & Innovation</h3>
                <p className="text-gray-100">
                  Collaborative research projects bring together academic expertise and industry resources to solve real-world challenges. Corporate partners fund and support applied research initiatives, gaining early access to innovative solutions, while educational institutions benefit from industry perspectives and practical applications of theoretical knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Program Benefits */}
          <div className="py-16 bg-gray-50 rounded-3xl px-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Benefits for Corporate Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Access to Top Talent</h3>
                <p className="text-gray-600">Early access to skilled graduates who are already familiar with industry standards and practices</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Customized Training</h3>
                <p className="text-gray-600">Bespoke professional development programs designed to meet specific company needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Brand Enhancement</h3>
                <p className="text-gray-600">Improved corporate image through association with educational excellence and community investment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation Advantage</h3>
                <p className="text-gray-600">Priority access to research findings and cutting-edge technologies being developed in academic settings</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cost Efficiency</h3>
                <p className="text-gray-600">Reduced recruitment and training costs through optimized talent acquisition and development processes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Priority Events</h3>
                <p className="text-gray-600">Exclusive participation in career fairs, networking events, and industry showcases</p>
              </div>
            </div>
          </div>

          {/* Corporate Partners Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Our Corporate Partners
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              We collaborate with industry leaders across sectors to bridge education and workplace needs
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company 1 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Tech Innovations</h3>
                <p className="text-sm text-gray-500 text-center">Technology Sector</p>
              </div>

              {/* Company 2 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Global Finance</h3>
                <p className="text-sm text-gray-500 text-center">Financial Services</p>
              </div>

              {/* Company 3 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Health Solutions</h3>
                <p className="text-sm text-gray-500 text-center">Healthcare</p>
              </div>

              {/* Company 4 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">BuildCorp</h3>
                <p className="text-sm text-gray-500 text-center">Construction & Engineering</p>
              </div>

              {/* Company 5 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Design Masters</h3>
                <p className="text-sm text-gray-500 text-center">Creative Industries</p>
              </div>

              {/* Company 6 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Global Connect</h3>
                <p className="text-sm text-gray-500 text-center">Telecommunications</p>
              </div>

              {/* Company 7 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Secure Payments</h3>
                <p className="text-sm text-gray-500 text-center">Fintech</p>
              </div>

              {/* Company 8 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Data Insights</h3>
                <p className="text-sm text-gray-500 text-center">Analytics & AI</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Partner Success Stories
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Hear from our corporate partners about the tangible benefits of our collaborative programs
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-10 rounded-2xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 mx-auto">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Corporate Partner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-white text-lg italic mb-6">
                    "Our partnership with Lotelite has revolutionized our talent acquisition strategy. The custom training programs have significantly reduced onboarding time for new hires, and the research collaboration has led to innovative solutions that have directly impacted our product development cycle. The return on investment has been exceptional."
                  </blockquote>
                  <div className="text-white">
                    <p className="font-bold text-xl">James Wilson</p>
                    <p className="text-blue-200">Chief Innovation Officer, Tech Innovations Inc.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Build Your Talent Pipeline?</h3>
            <p className="text-gray-600 mb-8">
              Join our Corporate Partner Program to access top talent, custom training solutions, and research collaboration opportunities
            </p>
            <Link to="/contact-us" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all">
              Become a Partner
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CorporatePartnerProgram; 