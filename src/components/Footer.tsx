import React from 'react';
import Logo from './Logo';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-gray-400 max-w-md">
              Lotlite Technology is a leading global education technology company offering professional certifications, degree programs, and career-focused training to help you advance your career.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#0077B5] mr-3" />
                <span className="text-gray-400">+91 8805843309</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#0077B5] mr-3" />
                <span className="text-gray-400">contact@lotlitetechnology.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-[#0077B5] mr-3 mt-1" />
                <span className="text-gray-400">Lotlite Technology Pvt Ltd. Office - 122, Gera Imperium, Opp- Wipro, Hinjewadi Phase 2, Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleLinkClick('/it-project')} className="text-gray-400 hover:text-white transition-colors">IT Project Training Program</button></li>
              <li><button onClick={() => handleLinkClick('/mern-projects')} className="text-gray-400 hover:text-white transition-colors">Software Development</button></li>
              <li><button onClick={() => handleLinkClick('/internship-program')} className="text-gray-400 hover:text-white transition-colors">Internship Programs</button></li>
              <li><button onClick={() => handleLinkClick('/foreign-degree-programs')} className="text-gray-400 hover:text-white transition-colors">Foreign Degree</button></li>
              <li><button onClick={() => handleLinkClick('/foreign-exchange')} className="text-gray-400 hover:text-white transition-colors">Foreign Exchange Programs</button></li>
              <li><button onClick={() => handleLinkClick('/placement-guarantee-program')} className="text-gray-400 hover:text-white transition-colors">Placement Guarantee Program</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleLinkClick('/career')} className="text-gray-400 hover:text-white transition-colors">Careers</button></li>
              <li><button onClick={() => handleLinkClick('/university-partner-program')} className="text-gray-400 hover:text-white transition-colors">Partners</button></li>
              <li><button onClick={() => handleLinkClick('/maang-certificates')} className="text-gray-400 hover:text-white transition-colors">Certificates</button></li>
              <li><button onClick={() => handleLinkClick('/about-us')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => handleLinkClick('/contact-us')} className="text-gray-400 hover:text-white transition-colors">Contact Us</button></li>
              <li><button onClick={() => handleLinkClick('/privacy-policy')} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {/* <li><button onClick={() => handleLinkClick('/internship-program')} className="text-gray-400 hover:text-white transition-colors">Internship Programs</button></li> */}
              <li><button onClick={() => handleLinkClick('/placement-guarantee-program')} className="text-gray-400 hover:text-white transition-colors">Career Services</button></li>
              <li><button onClick={() => handleLinkClick('/university-partner-program')} className="text-gray-400 hover:text-white transition-colors">University Partners</button></li>
              {/* <li><button onClick={() => handleLinkClick('/foreign-exchange')} className="text-gray-400 hover:text-white transition-colors">Student Exchange</button></li> */}
              <li><button onClick={() => handleLinkClick('/maang-certificates')} className="text-gray-400 hover:text-white transition-colors">MAANG Certificates</button></li>
              {/* <li><button onClick={() => handleLinkClick('/it-project')} className="text-gray-400 hover:text-white transition-colors">IT Projects</button></li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Lotlite. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap justify-center md:justify-start space-x-4 text-sm text-gray-400">
            <button onClick={() => handleLinkClick('/privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => handleLinkClick('/terms')} className="hover:text-white transition-colors">Terms of Service</button>
            {/* <button onClick={() => handleLinkClick('/cookies')} className="hover:text-white transition-colors">Cookie Policy</button>
            <button onClick={() => handleLinkClick('/accessibility')} className="hover:text-white transition-colors">Accessibility</button> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;