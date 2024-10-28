import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import dhsLogo from '../assets/dhs_transparent.png';
import igLogo from '../assets/ig2.png';
import yt2Logo from '../assets/yt2.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-screen">
      <div className="relative top-0">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="text-white p-2 hover:opacity-80 transition-opacity absolute top-0"
        >
          <GiHamburgerMenu size={60} />
        </button>

        {isMenuOpen && (
          <div className="fixed top-0 left-0 h-screen w-[15%] bg-black/95 z-30 flex flex-col transition-all duration-300">
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white p-4 self-end hover:opacity-80"
            >
              ✕
            </button>

            <nav className="flex flex-col space-y-6 p-6">
              <Link 
                to="/" 
                className="text-white text-xl font-medium hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/aboutus" 
                className="text-white text-xl font-medium hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/contacts" 
                className="text-white text-xl font-medium hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>

      <div className="flex-shrink-0 mr-4 flex flex-col items-center">
        <img 
          src={dhsLogo} 
          alt="dhsLogo" 
          className="h-50 w-auto object-contain max-w-[250px] mb-4" 
        />
        <div className="flex flex-col items-center space-x-4">
          <a 
            href="https://www.instagram.com/dallashoopscene/?hl=en"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={igLogo} 
              alt="igLogo" 
              className="h-16 w-auto object-contain" 
            />
          </a>
          <a 
            href="https://www.youtube.com/channel/UC17Dtvbw9F9xo8_vGosIUJA"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src={yt2Logo} 
              alt="ytLogo" 
              className="h-12 w-auto object-contain" 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;