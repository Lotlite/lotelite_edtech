import React, { useState, useEffect } from 'react';

const MainSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      id: 1,
      image: "c1.png",
      alt: "Tech Education"
    },
    {
      id: 2,
      image: "c2.png",
      alt: "Coding"
    },
    {
      id: 3,
      image: "c3.png",
      alt: "Business"
    }
  ];

  return (

    <div className="relative w-full h-[200px] sm:h-[350px] md:h-[450px] lg:h-[600px]">
  <div className="relative w-full h-full">
    {slides.map((slide, index) => (
      <div
        key={slide.id}
        className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
          currentSlide === index ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={slide.image}
          alt={slide.alt}
          className="w-full h-full object-contain sm:object-contain md:object-cover lg:object-cover"
        />

      </div>
    ))}
    {/* Navigation dots */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentSlide === index ? 'w-6 bg-white' : 'w-2 bg-white/50'
          }`}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  </div>
</div>



  );
};

export default MainSection;