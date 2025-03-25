
const Quotes = () => {
  return (
    <div className="bg-gradient-to-br from-[#0077B5] to-[#005582] py-16 perspective-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Why Choose Us</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our industry-leading programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full opacity-50"></div>
              <div className="flex flex-col">
                <div className="text-[#0077B5] text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">94%</div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 rounded-full"></div>
                <p className="text-gray-700 font-medium z-10">of our learners report career benefits including promotion, salary increase, or new job</p>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full opacity-50"></div>
              <div className="flex flex-col">
                <div className="text-[#0077B5] text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">500+</div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 rounded-full"></div>
                <p className="text-gray-700 font-medium z-10">industry partners including Fortune 500 companies actively hire our graduates</p>
              </div>
            </div>
          </div>
          
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-xl p-8 shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-100 rounded-bl-full opacity-50"></div>
              <div className="flex flex-col">
                <div className="text-[#0077B5] text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">45%</div>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 rounded-full"></div>
                <p className="text-gray-700 font-medium z-10">average salary increase reported by our graduates after program completion</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-light italic text-white mb-6 transform hover:scale-105 transition-transform duration-300 drop-shadow-lg">
            "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Quotes;