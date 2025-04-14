import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Award, Users, BookOpen, Globe, Shield, Clock, ChevronRight, ArrowRight, Star, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/hero-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl font-bold mb-6 text-center">About Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center">
              Empowering education through technology and innovation
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Company Overview Section with Fade-in Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-8 text-gray-900 relative inline-block">
                Our Story
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform duration-700 delay-500 origin-left"></span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Lotlite Technology is a pioneering force in global education technology, dedicated to transforming lives through innovative learning solutions. Founded with a vision to bridge the gap between education and industry, we've grown into a trusted partner for students and professionals worldwide.
              </p>
            </div>
            <div className={`grid md:grid-cols-3 gap-8 mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 mb-4 bg-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">10K+</h3>
                <p className="text-gray-600">Students Enrolled</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 mb-4 bg-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
                <p className="text-gray-600">Global Partners</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 mb-4 bg-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section with Slide-in Animation */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Mission */}
              <div className={`bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} hover:shadow-xl border-t-4 border-blue-500`}>
                <div className="text-blue-600 mb-6 bg-blue-50 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                  <Target className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower individuals with cutting-edge technology education and skills that drive innovation, foster growth, and create lasting impact in the digital world. We are committed to making quality education accessible and preparing professionals for the challenges of tomorrow.
                </p>
              </div>

              {/* Vision */}
              <div className={`bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl border-t-4 border-indigo-500`}>
                <div className="text-indigo-600 mb-6 bg-indigo-50 p-4 rounded-full w-20 h-20 flex items-center justify-center">
                  <Eye className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the world's leading technology education platform, setting new standards in online learning and professional development. We envision a future where quality education knows no boundaries, and every individual has the opportunity to excel in their chosen field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with Fade-up Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
            </div>
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-4 bg-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600">Courses designed with industry experts to ensure practical applicability</p>
                <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-4 bg-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Mentorship</h3>
                <p className="text-gray-600">Learn from experienced professionals with real-world insights</p>
                <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-4 bg-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Placement Guarantee</h3>
                <p className="text-gray-600">Comprehensive support for career advancement and job placement</p>
                <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-4 bg-white p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Flexible Learning</h3>
                <p className="text-gray-600">Learn at your own pace with 24/7 access to course materials</p>
                <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Board of Directors Section with Staggered Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Board of Directors</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Director 1 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Alok_kumar.jpeg"
                  alt="Binod Kumar Alok"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Binod Kumar Alok</h3>
              <p className="text-blue-600 mb-4 font-medium">Founder & Director</p>
              <p className="text-sm text-gray-500">
                Founder & Director at Lotlite Technology and Lotlite Real Estate Pvt Ltd
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
              </div>
            </div>

            {/* Director 2 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Ankur_Kumar.jpg"
                  alt="Ankur Kumar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Ankur Kumar</h3>
              <p className="text-blue-600 mb-4 font-medium">Chief Technology Officer</p>
              <p className="text-sm text-gray-500">
                CTO at Lotlite Technology and Director at RichNusGeeks, IIT Bombay graduate, expert in Cloud Computing
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
              </div>
            </div>

            {/* Director 3 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Saiyam_kumar.jpg"
                  alt="Saiyam Kumar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Saiyam Kumar</h3>
              <p className="text-blue-600 mb-4 font-medium">Founder & Director</p>
              <p className="text-sm text-gray-500">
                Founder and Director of Lotlite Technology, responsible for leading sales strategies and managing all aspects of the sales team
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Advisory Panel Section with Fade-in Animation */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Advisory Panel</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Advisor 1 */}
            <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Sachin_Sakhare.jpg"
                  alt="Dr. Sachin R. Sakhare"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Dr. Sachin R. Sakhare</h3>
              <p className="text-blue-600 mb-4 font-medium">Professor and Head of Computer Engineering</p>
              <p className="text-sm text-gray-500">
                Professor and Head of the Computer Engineering Department at Vishwakarma Institute of Information Technology, Pune, India. He has 29 Years of experience.
              </p>
              <div className="mt-4 flex justify-center">
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
            </div>

            {/* Advisor 2 */}
            <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Mohd_Shafi.jpeg"
                  alt="Mohd Shafi Pathan"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Mohd Shafi Pathan</h3>
              <p className="text-blue-600 mb-4 font-medium">Professor and Cyber Security Specialist</p>
              <p className="text-sm text-gray-500">
                Professor and Cyber Security & Forensics Specialist at MIT ADT University, Pune, with 24 years of experience.
              </p>
              <div className="mt-4 flex justify-center">
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
            </div>

            {/* Advisor 3 */}
            <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Dr. Rajendra G. Pawar.jpeg"
                  alt="Gurunath Waghale"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Gurunath Waghale</h3>
              <p className="text-blue-600 mb-4 font-medium">Assistant Professor</p>
              <p className="text-sm text-gray-500">
                Assistant Professor at MIT ADT University with 8+ years of experience, gold medalist in Economics, and multiple advanced degrees.
              </p>
              <div className="mt-4 flex justify-center">
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
                <Star className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amazing Team Members Section with Staggered Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Amazing Team Members</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/t1.jpg"
                  alt="Vikash Dubey"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Vikash Dubey</h3>
              <p className="text-blue-600 mb-4 font-medium">Team Lead and Solution Architect</p>
              <p className="text-sm text-gray-500">
                Leading technical solutions and team development
              </p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                <span className="text-sm text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/t2.png"
                  alt="Vatsal Vishal"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Vatsal Vishal</h3>
              <p className="text-blue-600 mb-4 font-medium">Software Developer</p>
              <p className="text-sm text-gray-500">
                Building innovative software solutions
              </p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                <span className="text-sm text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/t3.jpg"
                  alt="Vishal Chaudhari"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Vishal Chaudhari</h3>
              <p className="text-blue-600 mb-4 font-medium">Software Developer</p>
              <p className="text-sm text-gray-500">
                Developing robust software applications
              </p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                <span className="text-sm text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/t4.jpg"
                  alt="Shubham Kokate"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Shubham Kokate</h3>
              <p className="text-blue-600 mb-4 font-medium">Software Developer</p>
              <p className="text-sm text-gray-500">
                Creating efficient and scalable solutions
              </p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                <span className="text-sm text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-6 text-center transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/c1.jpg"
                  alt="Amit Kumar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Amit Kumar</h3>
              <p className="text-blue-600 mb-4 font-medium">Team Manager</p>
              <p className="text-sm text-gray-500">
                Managing team operations and project delivery
              </p>
              <div className="mt-4 flex justify-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
                <span className="text-sm text-gray-600">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UK Business Partner Section with Slide-in Animation */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our UK Business Partner</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/uk-partner.jpg" 
                    alt="UK Business Partner" 
                    className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Strategic Partnership</h3>
                  <p className="text-gray-600 mb-4">
                    We have established a strong partnership with leading UK-based organizations to expand our global presence and enhance our educational offerings.
                  </p>
                  <p className="text-gray-600">
                    This partnership enables us to provide international exposure and opportunities to our students while maintaining the highest standards of education.
                  </p>
                  <div className="mt-6 flex items-center text-blue-600">
                    <span className="text-sm font-medium">Learn more about our partnership</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blockchain Partner Section with Slide-in Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Blockchain Partner</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Blockchain Innovation</h3>
                  <p className="text-gray-600 mb-4">
                    Our partnership with leading blockchain technology providers enables us to offer cutting-edge blockchain education and certification programs.
                  </p>
                  <p className="text-gray-600">
                    We provide comprehensive training in blockchain development, smart contracts, and decentralized applications to prepare students for the future of technology.
                  </p>
                  <div className="mt-6 flex items-center text-blue-600">
                    <span className="text-sm font-medium">Explore our blockchain courses</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="/blockchain-partner.jpg" 
                    alt="Blockchain Partner" 
                    className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security Partner Section with Slide-in Animation */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Partner</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/security-partner.jpg" 
                    alt="Security Partner" 
                    className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Cybersecurity Excellence</h3>
                  <p className="text-gray-600 mb-4">
                    Our partnership with renowned cybersecurity organizations ensures that our students receive the most up-to-date training in security practices and technologies.
                  </p>
                  <p className="text-gray-600">
                    We offer specialized programs in ethical hacking, network security, and information security management to address the growing demand for cybersecurity professionals.
                  </p>
                  <div className="mt-6 flex items-center text-blue-600">
                    <span className="text-sm font-medium">Discover our security programs</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Partner Section with Slide-in Animation */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Partner</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Industry Expertise</h3>
                  <p className="text-gray-600 mb-4">
                    We collaborate with industry experts and thought leaders to ensure our curriculum remains relevant and aligned with current market demands.
                  </p>
                  <p className="text-gray-600">
                    Our expert partners provide valuable insights, mentorship, and real-world project opportunities to enhance the learning experience of our students.
                  </p>
                  <div className="mt-6 flex items-center text-blue-600">
                    <span className="text-sm font-medium">Learn about our experts</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="/expert-partner.jpg" 
                    alt="Expert Partner" 
                    className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs; 