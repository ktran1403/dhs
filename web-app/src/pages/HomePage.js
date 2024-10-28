import React from 'react';
import landingVid from '../assets/melo.mp4';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={landingVid}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="absolute top-0 left-0 right-0 z-20">
        <Sidebar />
      </div>
    </div>
  );
}
export default HomePage;