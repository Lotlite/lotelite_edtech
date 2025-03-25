import React from 'react';
import { Link } from 'react-router-dom';

const ForeignExchange = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    {/* Hero Section */}
    <div className="bg-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">Foreign Exchange Program</h1>
        <p className="text-xl text-indigo-100 max-w-3xl">
          Experience global education and cultural immersion through our comprehensive student exchange programs
        </p>
      </div>
    </div>

    {/* What is Foreign Exchange Section */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            What is a Foreign Exchange Program?
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            A Foreign Exchange Program is an enriching educational experience that allows students to study at partner institutions abroad while gaining invaluable international exposure. This program combines academic excellence with cultural immersion, providing a transformative learning experience that goes beyond traditional classroom education.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Cultural Immersion Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cultural Immersion</h3>
                <p className="text-gray-100">
                  Experience authentic cultural exchange through direct interaction with international students and communities. Participate in local customs, traditions, and daily life, gaining deep insights into different cultures. Our program ensures complete cultural immersion through organized cultural activities, local community engagement, and guided cultural experiences.
                </p>
              </div>
            </div>

            {/* Academic Excellence Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Academic Excellence</h3>
                <p className="text-gray-100">
                  Study at prestigious international institutions with world-class faculty and cutting-edge facilities. Access diverse courses and unique academic perspectives not available at home. Benefit from different teaching methodologies and educational approaches while earning transferable credits towards your degree.
                </p>
              </div>
            </div>

            {/* Global Connections Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Global Connections</h3>
                <p className="text-gray-100">
                  Build an international network of friends, peers, and professionals. Engage with students from diverse backgrounds and cultures, creating lifelong connections. Develop global perspectives and cross-cultural communication skills essential for today's interconnected world. Our program facilitates meaningful interactions through organized social events and collaborative projects.
                </p>
              </div>
            </div>

            {/* Seamless Integration Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-indigo-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Seamless Integration</h3>
                <p className="text-gray-100">
                  Experience smooth transition with comprehensive pre-departure orientation and on-arrival support. Receive guidance on accommodation, local transportation, and essential services. Benefit from dedicated local support staff and mentors throughout your stay. Our program ensures you have all the resources needed for a successful academic and cultural experience abroad.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Begin Your Global Journey?</h3>
            <p className="text-gray-600 mb-8">
              Join our Foreign Exchange Program and embark on a life-changing educational adventure
            </p>
            <Link to="/contact-us" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:-translate-y-1 transition-all">
              Apply Now
            </Link>
          </div>

          {/* University Tie-ups Section */}
          <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Image Container */}
                <div className="w-full md:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1186&q=80"
                      alt="INTI International University Campus"
                      className="w-full h-[400px] object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
                  </div>
                </div>
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <div className="text-left">
                    <h2 className="text-4xl font-bold mb-4">About INTI International University</h2>
                    <p className="text-xl text-indigo-600 font-semibold mb-6">
                      Shaping Global Talent, Affordable Excellence, Dynamic Learning Environment
                    </p>
                    
                    {/* Award 1 */}
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Award-Winning Institution</h3>
                      <p className="text-gray-600">
                        With a legacy of academic excellence and innovation, INTI International University stands as a leader in higher education. Our programs are designed to meet global standards, empowering students to excel in their chosen fields.
                      </p>
                    </div>

                    {/* Award 2 */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Global Opportunities & Cultural Exchange</h3>
                      <p className="text-gray-600">
                        At INTI, we connect students with international experiences, diverse cultures, and global career opportunities. Our partnerships with top universities and industries ensure that students are well-prepared for the global stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Reviews Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Hear from our alumni about how the Foreign Exchange Program transformed their perspectives and opened doors to global opportunities
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Review 1 */}
              <div className="bg-gradient-to-br from-indigo-500 to-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                    SK
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Sanjay Kumar</h3>
                    <p className="text-indigo-100">INTI International University, Malaysia</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-indigo-100 mb-4">
                  "My experience at INTI was incredible! The diverse Malaysian culture, from its amazing food to festive celebrations like Hari Raya and Chinese New Year, made every day exciting. The university's modern facilities and multicultural environment helped me develop a global perspective. The Malaysian hospitality is truly unmatched!"
                </p>
                <p className="text-white font-semibold">Currently working in Kuala Lumpur</p>
              </div>

              {/* Review 2 */}
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                    AP
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Anjali Patel</h3>
                    <p className="text-indigo-100">INTI International University, Malaysia</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-indigo-100 mb-4">
                  "INTI's campus in Malaysia offered me the perfect blend of academic excellence and cultural diversity. I loved exploring Malacca's historic sites, learning Bahasa Malaysia, and participating in traditional Malaysian art workshops. The industry-focused curriculum and exposure to Southeast Asian business practices gave me a unique advantage."
                </p>
                <p className="text-white font-semibold">Leading projects in Penang Tech Hub</p>
              </div>

              {/* Review 3 */}
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-bold text-white mr-4">
                    VR
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white">Vikram Reddy</h3>
                    <p className="text-indigo-100">INTI International University, Malaysia</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-indigo-100 mb-4">
                  "Studying at INTI transformed my worldview. The Malaysian 'Truly Asia' experience is real - from celebrating Deepavali to experiencing Ramadan, every moment was a cultural lesson. The university's strong ties with local industries and practical training approach helped me secure a great position in Malaysia's growing tech sector."
                </p>
                <p className="text-white font-semibold">Working at Malaysian Digital Economy Corporation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ForeignExchange; 