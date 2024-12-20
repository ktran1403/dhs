import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import dhsLogo from '../assets/dhs_transparent.png';
import igLogo from '../assets/ig2.png';
import yt2Logo from '../assets/yt2.png';
import { Link } from 'react-router-dom';

function Sidebar () {

  return (
    <div className="flex justify-between w-screen">
      <div className="fixed top-10 px-20"> 
        <div className="fixed top-0 left-0 h-screen w-[15%] bg-black/95 z-30 flex flex-col">
          <nav className="flex flex-col space-y-4 md:space-y-6 p-4 md:p-6 items-center">
            <img 
              src={dhsLogo} 
              alt="dhsLogo" 
              className="w-[80%] md:w-[90%] object-contain mb-2 md:mb-4" 
            />
            <Link 
              to="/" 
              className="text-sm md:text-xl font-bold tracking-wider text-white font-[Open-Sans] p-2 hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
            >
              home
            </Link>
            <Link 
              to="/ourteam" 
              className="text-sm md:text-xl font-bold tracking-wider text-white font-[Open-Sans] p-2 hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
            >
              our team
            </Link>
            <Link 
              to="/bookus" 
              className="text-sm md:text-xl font-bold tracking-wider text-white font-[Open-Sans] p-2 hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
            >
              book us
            </Link>
            <Link 
              to="/login" 
              className="text-sm md:text-xl font-bold tracking-wider text-white font-[Open-Sans] p-2 hover:opacity-80 transition-opacity duration-200 whitespace-nowrap"
            >
              login
            </Link>

          </nav>
        </div> 
      </div>
    </div>
  );
};
export default Sidebar;