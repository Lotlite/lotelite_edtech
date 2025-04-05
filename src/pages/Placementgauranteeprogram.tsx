import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2, CreditCard, Building2, Users, ChevronRight } from 'lucide-react';

const PlacementGuaranteeProgram = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md z-50 px-4 py-3 flex items-center justify-between border-b">
        <div className="flex items-center">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft className="h-6 w-6 text-gray-900" />
          </Link>
          <h1 className="text-xl font-semibold text-gray-900 ml-2">Placement Guarantee</h1>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <Share2 className="h-6 w-6 text-gray-900" />
        </button>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Your Career Success <span className="text-blue-400">Guaranteed</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 animate-fade-in-delay">
              Join 10,000+ successful graduates in tech
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link 
                to="/placement-guarantee/enroll"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
              >
                Enroll Now
              </Link>
              <Link 
                to="/placement-guarantee/programs"
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Highlights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our placement program has consistently delivered exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">96%</div>
              <p className="text-gray-600">Placement Rate</p>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45</div>
              <p className="text-gray-600">Days Average</p>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">8.5L</div>
              <p className="text-gray-600">Avg. Package</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Why Choose Us
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6">
              Our program is designed to ensure your success in the tech industry with proven methodologies and expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Money Back Guarantee</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get full refund if not placed within 6 months. We're confident in our program's success rate.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    100% Money Back Policy
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    No Questions Asked
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4 border-t">
                <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-700 transition-colors">
                  Learn More
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">500+ Hiring Partners</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Access to exclusive job opportunities with top tech companies and startups.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Direct Company Placements
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Premium Job Portal Access
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-4 border-t">
                <a href="#" className="text-purple-600 font-medium flex items-center hover:text-purple-700 transition-colors">
                  View Partners
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1:1 Career Mentorship</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get personalized guidance from industry experts throughout your journey.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Weekly 1:1 Sessions
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Career Path Planning
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-4 border-t">
                <a href="#" className="text-green-600 font-medium flex items-center hover:text-green-700 transition-colors">
                  Meet Mentors
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <p className="text-gray-600">Expert Mentors</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-600">Live Projects</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-indigo-600 mb-2">12+</div>
                <p className="text-gray-600">Industry Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 relative inline-block">
              Success Stories
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-50 group-hover:scale-x-100 transition-transform duration-300"></div>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-6">
              Our graduates are making waves in the tech industry. Here are some of their inspiring journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Success Story 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src="/sarah.jpg" 
                      alt="Sarah Johnson" 
                      className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-50"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Sarah Johnson</h3>
                    <p className="text-blue-600 font-medium">Software Engineer @ Google</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 ml-2">5.0 rating</span>
                  </div>
                  <p className="text-gray-600 italic">"The program transformed my career completely. I went from a complete beginner to landing my dream job at Google. The mentorship and support were exceptional."</p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <span className="font-semibold text-blue-600 text-lg">₹12 LPA</span>
                      <span className="mx-2">•</span>
                      <span>Package</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <span>Batch of 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src="/rahul.jpg" 
                      alt="Rahul Sharma" 
                      className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-50"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Rahul Sharma</h3>
                    <p className="text-purple-600 font-medium">Full Stack Developer @ Microsoft</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 ml-2">5.0 rating</span>
                  </div>
                  <p className="text-gray-600 italic">"The structured curriculum and hands-on projects helped me master full-stack development. The placement support was incredible, leading to multiple offers."</p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <span className="font-semibold text-purple-600 text-lg">₹15 LPA</span>
                      <span className="mx-2">•</span>
                      <span>Package</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <span>Batch of 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src="/priya.jpg" 
                      alt="Priya Patel" 
                      className="w-16 h-16 rounded-2xl object-cover ring-4 ring-blue-50"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900 text-lg">Priya Patel</h3>
                    <p className="text-green-600 font-medium">Backend Engineer @ Amazon</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-500 ml-2">5.0 rating</span>
                  </div>
                  <p className="text-gray-600 italic">"From a non-CS background to securing a position at Amazon - this program made it possible. The mentors were always there to guide and support."</p>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500">
                      <span className="font-semibold text-green-600 text-lg">₹14 LPA</span>
                      <span className="mx-2">•</span>
                      <span>Package</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <span>Batch of 2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="mt-16 max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-gray-600">Successful Placements</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">96%</div>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">₹10L+</div>
                <p className="text-gray-600">Average Package</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">45</div>
                <p className="text-gray-600">Days to Place</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg animate-slide-up">
        <button className="w-full bg-gradient-to-r from-blue-900 to-indigo-900 hover:from-blue-800 hover:to-indigo-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-[1.02]">
          Secure Your Future Now
        </button>
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <p className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Limited seats available
          </p>
          <p className="font-medium">Next batch in 7 days</p>
        </div>
      </div>

      {/* Add some padding at the bottom to account for fixed CTA */}
      <div className="h-32"></div>
    </div>
  );
};

export default PlacementGuaranteeProgram;

// Add these animations to your global CSS or tailwind.config.js
const styles = `
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-delay {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fade-in-delay-2 {
  0% {
    opacity: 0;
  }
  66% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fade-in-delay 1.2s ease-out forwards;
}

.animate-fade-in-delay-2 {
  animation: fade-in-delay-2 1.8s ease-out forwards;
}
`;
