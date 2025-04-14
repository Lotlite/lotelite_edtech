import React from 'react';
import { Link } from 'react-router-dom';

const ForeignExchange = () => (
  <div className="min-h-screen bg-white">
    {/* Hero Section */}
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-32">
      <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-6xl font-bold mb-6">Foreign Exchange Program</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Experience global education and cultural immersion through our student exchange programs
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>

    {/* Main Content */}
    <div className="container mx-auto px-4 py-16">
      {/* Program Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">What is a Foreign Exchange Program?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-center mb-12">
          A Foreign Exchange Program allows students to study at partner institutions abroad while gaining invaluable international exposure, combining academic excellence with cultural immersion.
        </p>

        {/* Key Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cultural Immersion</h3>
            <p className="text-gray-600">Experience authentic cultural exchange through direct interaction with international communities and participate in local traditions.</p>
            </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
            <p className="text-gray-600">Study at prestigious international institutions with world-class faculty and earn transferable credits towards your degree.</p>
            </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Global Connections</h3>
            <p className="text-gray-600">Build an international network and develop cross-cultural communication skills essential for today's world.</p>
              </div>
            </div>
      </section>

      {/* University Section */}
      <section className="mb-16">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">INTI International University</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1562774053-701939374585"
                alt="INTI Campus"
                className="rounded-lg w-full h-64 object-cover"
              />
                  </div>
            <div className="md:w-1/2">
              <h3 className="text-xl font-semibold mb-3">Award-Winning Institution</h3>
              <p className="text-gray-600 mb-4">
                INTI International University offers academic excellence and innovation, with programs designed to meet global standards.
              </p>
              <h3 className="text-xl font-semibold mb-3">Global Opportunities</h3>
                      <p className="text-gray-600">
                Connect with international experiences and diverse cultures through our partnerships with top universities worldwide.
                      </p>
                    </div>
                  </div>
                </div>
      </section>

      {/* Student Reviews */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">Student Reviews</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Review Cards */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    SK
                  </div>
                  <div>
                <h3 className="font-semibold">Sanjay Kumar</h3>
                <p className="text-gray-600 text-sm">INTI International University</p>
                  </div>
                </div>
            <p className="text-gray-600">
              "My experience at INTI was incredible! The diverse Malaysian culture and modern facilities helped me develop a global perspective."
            </p>
              </div>

          {/* Add 2 more similar review cards here */}
                  </div>
      </section>

      {/* CTA */}
      <div className="text-center mt-16">
        <Link 
          to="/contact-us" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Apply Now
        </Link>
      </div>
    </div>
  </div>
);

export default ForeignExchange; 