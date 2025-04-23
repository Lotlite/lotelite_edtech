import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../public/assests/logo-lotlite.png';
import ScrollToTopButton from './ScrollToTopButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          <ScrollToTopButton to="/">
            <img src={LogoImg} alt="lotlite-logo" className="h-10 w-auto sm:h-12 md:h-14 lg:h-16 max-w-none cursor-pointer" />
          </ScrollToTopButton>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <ScrollToTopButton to="/internship-program" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              Internship Programs
            </ScrollToTopButton>
            <ScrollToTopButton to="/it-project" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              IT Project
            </ScrollToTopButton>
            <ScrollToTopButton to="/placement-guarantee-program" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              Placement Guarantee Program
            </ScrollToTopButton>
            <ScrollToTopButton to="/maang-certificates" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              Certificates
            </ScrollToTopButton>
            <ScrollToTopButton to="/foreign-exchange" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              Foreign Exchange
            </ScrollToTopButton>
            {/* <Link to="/foreign-degree-programs" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              Foreign Degree
            </Link> */}
            <ScrollToTopButton to="/university-partner-program" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              University Partner Program
            </ScrollToTopButton>
            <ScrollToTopButton to="/about-us" className="text-gray-700 hover:text-[#0077B5] font-medium text-sm transition-colors duration-200">
              About Us
            </ScrollToTopButton>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            {/* <ScrollToTopButton to="/career" className="px-4 py-1.5 text-[#0077B5] font-medium border-2 border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-all duration-200 text-sm">
              Career
            </ScrollToTopButton> */}
            <ScrollToTopButton to="/contact-us" className="px-4 py-1.5 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors duration-200 text-sm">
              Contact Us
            </ScrollToTopButton>
            <ScrollToTopButton to="/enroll" className="px-4 py-1.5 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200 text-sm">
              Enroll Now
            </ScrollToTopButton>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-md transition-colors duration-200" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="space-y-2">
              <ScrollToTopButton to="/corporate-partner-program" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                Corporate Partner Programs
              </ScrollToTopButton>
              <ScrollToTopButton to="/it-services" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                IT Services
              </ScrollToTopButton>
              <ScrollToTopButton to="/placement-guarantee-program" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                Placement Guarantee Program
              </ScrollToTopButton>
              <ScrollToTopButton to="/maang-certificates" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                MAANG Certificates
              </ScrollToTopButton>
              <ScrollToTopButton to="/foreign-exchange" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                Foreign Exchange
              </ScrollToTopButton>
              <ScrollToTopButton to="/foreign-degree-programs" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                Foreign Degree Programs
              </ScrollToTopButton>
              <ScrollToTopButton to="/university-partner-program" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                University Partner Program
              </ScrollToTopButton>
              <ScrollToTopButton to="/about-us" className="block w-full text-left py-2 text-gray-700 font-medium hover:text-[#0077B5] transition-colors duration-200 text-sm">
                About Us
              </ScrollToTopButton>
              <div className="pt-4 space-y-2">
                <ScrollToTopButton to="/career" className="w-full px-4 py-2 text-[#0077B5] font-medium border-2 border-[#0077B5] rounded-md hover:bg-[#0077B5] hover:text-white transition-all duration-200 text-center text-sm">
                  Career
                </ScrollToTopButton>
                <ScrollToTopButton to="/contact-us" className="w-full px-4 py-2 bg-[#0077B5] text-white font-medium rounded-md hover:bg-[#005d8f] transition-colors duration-200 text-center text-sm">
                  Contact Us
                </ScrollToTopButton>
                <ScrollToTopButton to="/enroll" className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors duration-200 text-center text-sm">
                  Enroll Now
                </ScrollToTopButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;