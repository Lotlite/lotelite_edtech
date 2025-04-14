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
            <div className={`grid md:grid-cols-3 gap-6 mt-10 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 mb-3 bg-white p-2 rounded-full w-14 h-14 mx-auto flex items-center justify-center shadow-sm">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">10K+</h3>
                <p className="text-gray-600 text-sm">Students Enrolled</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 mb-3 bg-white p-2 rounded-full w-14 h-14 mx-auto flex items-center justify-center shadow-sm">
                  <Globe className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">50+</h3>
                <p className="text-gray-600 text-sm">Global Partners</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
                <div className="text-blue-600 mb-3 bg-white p-2 rounded-full w-14 h-14 mx-auto flex items-center justify-center shadow-sm">
                  <Award className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">95%</h3>
                <p className="text-gray-600 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section with Slide-in Animation */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className={`bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} hover:shadow-xl border-t-4 border-blue-500`}>
                <div className="text-blue-600 mb-4 bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To empower individuals with cutting-edge technology education and skills that drive innovation, foster growth, and create lasting impact in the digital world. We are committed to making quality education accessible and preparing professionals for the challenges of tomorrow.
                </p>
              </div>

              {/* Vision */}
              <div className={`bg-white p-6 rounded-2xl shadow-lg transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl border-t-4 border-indigo-500`}>
                <div className="text-indigo-600 mb-4 bg-indigo-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                  <Eye className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600 text-base leading-relaxed">
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
            <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-3 bg-white p-2 rounded-full w-14 h-14 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry-Relevant Curriculum</h3>
                <p className="text-gray-600 text-sm">Courses designed with industry experts to ensure practical applicability</p>
                <div className="mt-3 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-3 bg-white p-2 rounded-full w-14 h-14 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
                <p className="text-gray-600 text-sm">Learn from experienced professionals with real-world insights</p>
                <div className="mt-3 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-3 bg-white p-2 rounded-full w-14 h-14 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Placement Guarantee</h3>
                <p className="text-gray-600 text-sm">Comprehensive support for career advancement and job placement</p>
                <div className="mt-3 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-blue-50 group border border-blue-100">
                <div className="text-blue-600 mb-3 bg-white p-2 rounded-full w-14 h-14 mx-auto flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Learning</h3>
                <p className="text-gray-600 text-sm">Learn at your own pace with 24/7 access to course materials</p>
                <div className="mt-3 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
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
          <div className="grid md:grid-cols-3 gap-6">
            {/* Director 1 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Alok_kumar.jpeg"
                  alt="Binod Kumar Alok"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Binod Kumar Alok</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Founder & Director</p>
              <p className="text-xs text-gray-500">
                Founder & Director at Lotlite Technology and Lotlite Real Estate Pvt Ltd
              </p>
              <div className="mt-3 flex justify-center space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-200"></div>
              </div>
            </div>

            {/* Director 2 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Ankur_Kumar.jpg"
                  alt="Ankur Kumar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Ankur Kumar</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Chief Technology Officer</p>
              <p className="text-xs text-gray-500">
                CTO at Lotlite Technology and Director at RichNusGeeks, IIT Bombay graduate, expert in Cloud Computing
              </p>
              <div className="mt-3 flex justify-center space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-200"></div>
              </div>
            </div>

            {/* Director 3 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Saiyam_kumar.jpg"
                  alt="Saiyam Kumar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Saiyam Kumar</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Founder & Director</p>
              <p className="text-xs text-gray-500">
                Founder and Director of Lotlite Technology, responsible for leading sales strategies and managing all aspects of the sales team
              </p>
              <div className="mt-3 flex justify-center space-x-1">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-200"></div>
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
          <div className="grid md:grid-cols-3 gap-6">
            {/* Advisor 1 */}
            <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Sachin_Sakhare.jpg"
                  alt="Dr. Sachin R. Sakhare"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Dr. Sachin R. Sakhare</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Professor and Head of Computer Engineering</p>
              <p className="text-xs text-gray-500">
                Professor and Head of the Computer Engineering Department at Vishwakarma Institute of Information Technology, Pune, India. He has 29 Years of experience.
              </p>
              <div className="mt-3 flex justify-center">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
              </div>
            </div>

            {/* Advisor 2 */}
            <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Mohd_Shafi.jpeg"
                  alt="Mohd Shafi Pathan"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Mohd Shafi Pathan</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Professor and Cyber Security Specialist</p>
              <p className="text-xs text-gray-500">
                Professor and Cyber Security & Forensics Specialist at MIT ADT University, Pune, with 24 years of experience.
              </p>
              <div className="mt-3 flex justify-center">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
              </div>
            </div>

            {/* Advisor 3 */}
            <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Dr. Rajendra G. Pawar.jpeg"
                  alt="Gurunath Waghale"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Gurunath Waghale</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Assistant Professor</p>
              <p className="text-xs text-gray-500">
                Assistant Professor at MIT ADT University with 8+ years of experience, gold medalist in Economics, and multiple advanced degrees.
              </p>
              <div className="mt-3 flex justify-center">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
              </div>
            </div>

          {/* Advisor 4 */}
          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Suresh_Kapare.jpeg"
                  alt="Suresh kapare"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Suresh Kapare</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Associate Professor</p>
              <p className="text-xs text-gray-500">
              Associate Professor at MIT ADT University with 12 years of experience in Agile Software Development, Scrum, andproject management</p>
              <div className="mt-3 flex justify-center">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
              </div>
            </div>

            {/* Advisor 5 */}
          <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Ankur_Kumar.jpg"
                  alt="Ankur Kumar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Ankur Kumar</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Chief Technology Officer</p>
              <p className="text-xs text-gray-500">
              CTO at Lotlite Technology and Director at RichNusGeeks, IIT Bombay graduate, expert in Cloud Computing</p>
              <div className="mt-3 flex justify-center">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
              </div>
            </div>

            {/* Advisor 5 */}
            <div className={`bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Prashant_Dhotre.jpeg"
                  alt="Prashant Dhotre"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Prashant Dhotre</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm"> Professor and HoD of CSE at MIT</p>
              <p className="text-xs text-gray-500">
              PhD from Aalborg University, Professor and HoD of CSE at MIT ADT University, ISO 27001 Lead Auditor, and author</p>
              <div className="mt-3 flex justify-center">
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
                <Star className="w-3.5 h-3.5 text-yellow-400" />
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
          <div className="grid md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/t1.jpg"
                  alt="Vikash Dubey"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Vikash Dubey</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Team Lead and Solution Architect</p>
              <p className="text-xs text-gray-500">
                Leading technical solutions and team development
              </p>
              <div className="mt-3 flex justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/vatsal.jpg.jpeg"
                  alt="Vatsal Vishal"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Vatsal Vishal</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Software Developer</p>
              <p className="text-xs text-gray-500">
                Building innovative software solutions
              </p>
              <div className="mt-3 flex justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/vishal_Choudhari.jpg"
                  alt="Vishal Chaudhari"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Vishal Chaudhari</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Software Developer</p>
              <p className="text-xs text-gray-500">
                Developing robust software applications
              </p>
              <div className="mt-3 flex justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Shubham Kokate.jpg"
                  alt="Shubham Kokate"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Shubham Kokate</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Software Developer</p>
              <p className="text-xs text-gray-500">
                Creating efficient and scalable solutions
              </p>
              <div className="mt-3 flex justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Available for projects</span>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/c1.jpg"
                  alt="Amit Kumar"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Amit Kumar</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Team Manager</p>
              <p className="text-xs text-gray-500">
                Managing team operations and project delivery
              </p>
              <div className="mt-3 flex justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Available for projects</span>
              </div>
            </div>

             {/* Team Member 6 */}
             <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Yash_k.jpg"
                  alt="Yash Kadu"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">Yash Kadu</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Software Developer</p>
              <p className="text-xs text-gray-500">
                Robust Software Application Development
              </p>
              <div className="mt-3 flex justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Available for projects</span>
              </div>
            </div>

              {/* Team Member 7 */}
              <div className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
                <img
                  src="/Pranay_sune.jpg"
                  alt="Pranay Sune"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold mb-1 text-gray-900">pranay Sune</h3>
              <p className="text-blue-600 mb-2 font-medium text-sm">Software Developer</p>
              <p className="text-xs text-gray-500">
              Reliable Custom Software Services
              </p>
              <div className="mt-3 flex justify-center">
                <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs text-gray-600">Available for projects</span>
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
                
        <div className="flex flex-wrap justify-center gap-64">
        {/* UK Partner 1 */}
        <div className={`w-[300px] bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
          <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
            <img
              src="/t3.jpg"
              alt="Dilip Pungalia"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
          </div>
          <h3 className="text-lg font-semibold mb-1 text-gray-900">Dilip Pungalia</h3>
          <p className="text-blue-600 mb-2 font-medium text-sm"> business leader, blockchain advisor</p>
          <p className="text-xs text-gray-500">
            is a business leader, Artificial Intelligence consultant, blockchain advisor, metaverse solution expert, data leader, technologist, and business, process,
            & technology architect. As a board member and significant shareholder of Ztudium
          </p>
          <div className="mt-3 flex justify-center">
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
          </div>
        </div>

        {/* UK partner 2 */}
        <div className={`w-[300px] bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-5 text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
          <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden shadow-lg border-4 border-white relative group">
            <img
              src="/t3.jpg"
              alt="Dinis Guarda"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors duration-300"></div>
          </div>
          <h3 className="text-lg font-semibold mb-1 text-gray-900">Dinis Guarda</h3>
          <p className="text-blue-600 mb-2 font-medium text-sm">Founder, CEO of Ztudium Group</p>
          <p className="text-xs text-gray-500">
            Founder, CEO of Ztudium Group, Author of 4IR AI Blockchain Fintech IoT. Dinis is a World Class Leader in multiple fields and has a passsion to push ideas,
            action and technology together to create better solutions, narratives and paths.
          </p>
          <div className="mt-3 flex justify-center">
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
            <Star className="w-3.5 h-3.5 text-yellow-400" />
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
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Blockchain Innovation</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our partnership with leading blockchain technology providers enables us to offer cutting-edge blockchain education and certification programs.
                  </p>
                  <p className="text-gray-600 text-sm">
                    We provide comprehensive training in blockchain development, smart contracts, and decentralized applications to prepare students for the future of technology.
                  </p>
                  <div className="mt-4 flex items-center text-blue-600">
                    <span className="text-xs font-medium">Explore our blockchain courses</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="/blockchain-partner.jpg" 
                    alt="Blockchain Partner" 
                    className="w-full h-56 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
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
            <div className={`bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} hover:shadow-xl border border-blue-100`}>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <img 
                    src="/security-partner.jpg" 
                    alt="Security Partner" 
                    className="w-full h-56 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Cybersecurity Excellence</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Our partnership with renowned cybersecurity organizations ensures that our students receive the most up-to-date training in security practices and technologies.
                  </p>
                  <p className="text-gray-600 text-sm">
                    We offer specialized programs in ethical hacking, network security, and information security management to address the growing demand for cybersecurity professionals.
                  </p>
                  <div className="mt-4 flex items-center text-blue-600">
                    <span className="text-xs font-medium">Discover our security programs</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
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
            <div className={`bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl border border-gray-200`}>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Industry Expertise</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    We collaborate with industry experts and thought leaders to ensure our curriculum remains relevant and aligned with current market demands.
                  </p>
                  <p className="text-gray-600 text-sm">
                    Our expert partners provide valuable insights, mentorship, and real-world project opportunities to enhance the learning experience of our students.
                  </p>
                  <div className="mt-4 flex items-center text-blue-600">
                    <span className="text-xs font-medium">Learn about our experts</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="/expert-partner.jpg" 
                    alt="Expert Partner" 
                    className="w-full h-56 object-cover rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500"
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