import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Data Scientist at Google',
      image: 't1.jpg',
      content: 'The Data Science program completely transformed my career. I went from being a marketing analyst to a data scientist at Google with a 70% salary increase. The curriculum was challenging but extremely relevant to what employers are looking for.',
      rating: 5,
      program: 'Data Science Certification'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Software Engineer at Amazon',
      image: 't2.png',
      content: 'As someone with no prior coding experience, I was amazed at how quickly I was able to build real-world projects. The instructors were incredibly supportive and the career services helped me land my dream job at Amazon.',
      rating: 5,
      program: 'Full-Stack Development Bootcamp'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Product Manager at Microsoft',
      image: 't3.jpg',
      content: 'The Product Management certification gave me the strategic framework and tools I needed to transition from engineering to product. The industry projects and mentorship were invaluable in helping me understand the role.',
      rating: 4,
      program: 'Product Management Certification'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Marketing Director at Netflix',
      image: 't4.jpg',
      content: 'The Digital Marketing program provided me with cutting-edge strategies that I was able to implement immediately in my role. The ROI measurement framework alone was worth the investment in the program.',
      rating: 5,
      program: 'Digital Marketing Masters'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Students Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our graduates who have successfully transformed their careers through our programs.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0 flex flex-col items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 text-center">{testimonials[currentIndex].name}</h3>
                <p className="text-[#0077B5] font-medium text-center mb-2">{testimonials[currentIndex].role}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonials[currentIndex].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 text-center">{testimonials[currentIndex].program}</p>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <svg className="h-10 w-10 text-[#0077B5] opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                
                <p className="text-gray-700 text-lg italic mb-6">
                  {testimonials[currentIndex].content}
                </p>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <span 
                        key={index} 
                        className={`block h-2 w-2 rounded-full ${
                          currentIndex === index ? 'bg-[#0077B5]' : 'bg-gray-300'
                        }`}
                      ></span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: 'Graduates', value: '50,000+' },
            { label: 'Courses', value: '200+' },
            { label: 'Instructors', value: '500+' },
            { label: 'Countries', value: '150+' }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#0077B5] mb-2">{stat.value}</div>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;