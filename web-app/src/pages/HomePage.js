import React from 'react';
import landingVid from '../assets/melo.mp4';
import Sidebar from '../components/Sidebar';

function HomePage() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 h-full w-[15%] bg-black z-50">
        <Sidebar />
      </div>

      <div className="pl-[15%] min-h-screen">
        <section className="relative h-screen">
          <video
            className="w-full h-full object-cover"
            src={landingVid}
            autoPlay
            muted
            loop
            playsInline
          ></video>
          
          <div className="absolute inset-0 bg-black/30"></div>
        </section>

        <section className="relative bg-black text-white min-h-screen">
          <div className="p-16">
            <h2 className="text-3xl font-bold">Additional Content</h2>
            <p className="mt-4">This is the content below the video.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;