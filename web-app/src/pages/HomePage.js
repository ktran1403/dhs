import React from 'react';
import landingVid from "../assets/melo.mp4"
function HomePage() {
  return (
    <div className="homePage">
          {/* Fullscreen background video */}
          <video
              className="landingPageVid"
              src={landingVid}
              autoPlay
              muted
              loop
          ></video>
          <div className="homeDash">
            <h1>Welcome</h1>
          </div>
          {/* <HomeDashboard/> */}
      </div>
  );
}

export default HomePage;