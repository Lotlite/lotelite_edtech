import React from 'react';
import { Link } from 'react-router-dom';

const ITServices = () => (
  <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
    {/* Hero Section */}
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">IT Services</h1>
        <p className="text-xl text-blue-100 max-w-3xl">
          Comprehensive technology solutions to drive your business forward with innovation and efficiency
        </p>
      </div>
    </div>

    {/* Services Section */}
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Our IT Service Offerings
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            We provide end-to-end IT solutions tailored to your business needs, from infrastructure management to cutting-edge application development and cybersecurity services.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Software Development Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Software Development</h3>
                <p className="text-gray-100">
                  Custom software solutions designed to address your specific business challenges. Our experienced development team creates scalable, secure applications using the latest technologies and best practices.
                </p>
              </div>
            </div>

            {/* Cloud Solutions Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cloud Solutions</h3>
                <p className="text-gray-100">
                  Comprehensive cloud services including migration, optimization, and management. We help organizations leverage the flexibility, scalability, and cost-efficiency of cloud platforms like AWS, Azure, and Google Cloud.
                </p>
              </div>
            </div>

            {/* Cybersecurity Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cybersecurity</h3>
                <p className="text-gray-100">
                  Robust security solutions to protect your digital assets from evolving threats. Our comprehensive approach includes security assessments, penetration testing, incident response planning, and ongoing monitoring services.
                </p>
              </div>
            </div>

            {/* IT Infrastructure Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-110 transition-transform duration-500" 
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1520869562399-e772f042f422?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-blue-900/70 z-10"></div>
              <div className="relative z-20">
                <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">IT Infrastructure</h3>
                <p className="text-gray-100">
                  Complete infrastructure solutions including design, implementation, and management. We help organizations build and maintain reliable, scalable, and efficient IT environments that support business objectives.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="py-16 bg-gray-50 rounded-3xl px-8 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Choose Our IT Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous testing and quality control processes ensure reliable, high-performance solutions</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fast Implementation</h3>
                <p className="text-gray-600">Efficient project management and agile methodologies ensure timely delivery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with extensive experience across various technology domains</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Innovative Solutions</h3>
                <p className="text-gray-600">Forward-thinking approaches that incorporate the latest technologies and industry trends</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Cost Effective</h3>
                <p className="text-gray-600">Optimized solutions that maximize return on investment and minimize operational costs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ongoing Support</h3>
                <p className="text-gray-600">Comprehensive maintenance and support services to ensure long-term solution viability</p>
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
              Technologies We Work With
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
              Our team is proficient in a wide range of cutting-edge technologies
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Technology 1 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Web Development</h3>
                <p className="text-sm text-gray-500 text-center">React, Angular, Vue.js</p>
              </div>

              {/* Technology 2 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Mobile Development</h3>
                <p className="text-sm text-gray-500 text-center">iOS, Android, React Native</p>
              </div>

              {/* Technology 3 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Backend & API</h3>
                <p className="text-sm text-gray-500 text-center">Node.js, Python, Java</p>
              </div>

              {/* Technology 4 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Database</h3>
                <p className="text-sm text-gray-500 text-center">SQL, NoSQL, Data Warehousing</p>
              </div>

              {/* Technology 5 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Cloud Platforms</h3>
                <p className="text-sm text-gray-500 text-center">AWS, Azure, Google Cloud</p>
              </div>

              {/* Technology 6 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">DevOps</h3>
                <p className="text-sm text-gray-500 text-center">CI/CD, Docker, Kubernetes</p>
              </div>

              {/* Technology 7 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">AI & Machine Learning</h3>
                <p className="text-sm text-gray-500 text-center">TensorFlow, PyTorch, ML APIs</p>
              </div>

              {/* Technology 8 */}
              <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center">
                <div className="w-20 h-20 mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 text-center">Cybersecurity</h3>
                <p className="text-sm text-gray-500 text-center">Penetration Testing, Compliance</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to Transform Your IT Infrastructure?</h3>
            <p className="text-gray-600 mb-8">
              Contact us today to discuss how our IT services can help your business achieve its technology goals
            </p>
            <Link to="/contact-us" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transform hover:-translate-y-1 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ITServices; 